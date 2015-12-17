<html>
<head>
    <meta charset="UTF-8">
    <title>Test App</title>
</head>
<body>
    <div id="root">
        <?=$content?>
    </div>

    <script type="application/javascript">
        var appData = <?=$json_data?>;
    </script>
    <script src="/ractive.0.8.0-edge.js"></script>
    <script src="/dist/bundle.js"></script>
</body>
</html>
