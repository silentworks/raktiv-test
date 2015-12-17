<?php
require "../vendor/autoload.php";

use PeelingPixels\Raktiv\Raktiv;
use Slim\App;
use Slim\Views\PhpRenderer;

$app = new App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);
$container = $app->getContainer();

$container['renderer'] = function () use ($container) {
    $templatesDir = __DIR__ . '/app/templates/';
    return new PhpRenderer($templatesDir);
};

$app->get('/', function ($req, $res) {
    $templatesDir = __DIR__ . '/app/templates/';

    $data = [
        'fullName' => 'James Bond',
        'hello' => [
            'name' => 'Jamie',
            'library' => 'Ractive',
        ],
        'list' => [
            'shoppingList' => [
                ['name' => 'Chips'],
                ['name' => 'Water'],
                ['name' => 'Milk'],
            ],
        ],
        'comments' => [
            [
                'name' => 'Harry',
                'text' => 'This is a test to make sure this works.'
            ]
        ]
    ];

    $comments = Raktiv::extend([
        'template' => file_get_contents($templatesDir . 'comments.html'),
        'data' => ['comments' => $data['comments']]
    ]);

    Raktiv::make()->addComponent('Comments', $comments);

    $list = Raktiv::extend([
        'template' => file_get_contents($templatesDir . 'list.html'),
        'data' => $data['list']
    ]);

    $hello = Raktiv::extend([
        'template' => file_get_contents($templatesDir . 'hello.html'),
        'data' => $data['hello']
    ]);

    $app = Raktiv::extend([
        'template' => file_get_contents($templatesDir . 'app.html'),
        'components' => [
            'Hello' => $hello,
            'List' => $list,
        ],
        'data' => $data
    ]);

    return $this->renderer->render($res, 'index.php', [
        'content' => $app->render(),
        'json_data' => json_encode($data),
    ]);
});

$app->run();