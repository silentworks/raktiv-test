/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _templatesAppHtml = __webpack_require__(1);

	var _templatesAppHtml2 = _interopRequireDefault(_templatesAppHtml);

	var _componentsHello = __webpack_require__(2);

	var _componentsHello2 = _interopRequireDefault(_componentsHello);

	var _componentsList = __webpack_require__(4);

	var _componentsList2 = _interopRequireDefault(_componentsList);

	var _componentsComments = __webpack_require__(6);

	var _componentsComments2 = _interopRequireDefault(_componentsComments);

	// Disable debug when minified
	Ractive.DEBUG = /unminified/.test(function () {/*unminified*/});

	// Make modal globally available
	Ractive.components['Comments'] = _componentsComments2['default'];

	var App = new Ractive({
	  el: 'root',
	  template: _templatesAppHtml2['default'],
	  twoway: false,
	  components: {
	    Hello: _componentsHello2['default'],
	    List: _componentsList2['default'],
	    Comments: _componentsComments2['default']
	  },
	  data: appData
	});

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<h1>Try turning Javascript off</h1>\n<p class=\"summary\">Is it still working? turn it back on.</p>\n<p>This is working for components lets see if we can get placeholders in here {{ fullName }}</p>\n\n<Hello name=\"{{hello.name}}\" library=\"{{hello.library}}\" />\n\n--------------------------\n\n<List shoppingList=\"{{list.shoppingList}}\" comments=\"{{comments}}\" />\n\nBob May like this."

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _templatesHelloHtml = __webpack_require__(3);

	var _templatesHelloHtml2 = _interopRequireDefault(_templatesHelloHtml);

	var Hello = Ractive.extend({
	  isolated: true,
	  twoway: false,
	  template: _templatesHelloHtml2['default']
	});

	exports['default'] = Hello;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<h2>Yo {{name}}</h2>\n\n<p>Is this thing actually working?</p>\n<p>You need to checkout {{library}} and see how awesome it is.</p>\n"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _templatesListHtml = __webpack_require__(5);

	var _templatesListHtml2 = _interopRequireDefault(_templatesListHtml);

	var List = Ractive.extend({
	  isolated: true,
	  twoway: false,
	  template: _templatesListHtml2['default']
	});

	exports['default'] = List;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<h3>This is my Shopping List.</h3>\n<ul>\n    {{#each shoppingList}}\n        <li>{{ .name }}</li>\n    {{/each}}\n</ul>\n\n--------------------------\n\n<h4>And a comment form:</h4>\n<Comments comments=\"{{comments}}\" />\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _templatesCommentsHtml = __webpack_require__(7);

	var _templatesCommentsHtml2 = _interopRequireDefault(_templatesCommentsHtml);

	var Comments = Ractive.extend({
	  isolated: true,
	  template: _templatesCommentsHtml2['default'],
	  addComment: function addComment(event, text, name) {
	    event.original.preventDefault();

	    // Add new comment
	    this.push('comments', { text: text, name: name });

	    // Reset form
	    this.set('text', '');
	    this.set('name', '');
	  }
	});

	exports['default'] = Comments;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<h2>Comments</h2>\n\n<ul>\n    {{#each comments}}\n    <li>\n        {{ .text }}<br>\n        {{ .name }}\n    </li>\n    {{/each}}\n</ul>\n\n<form action=\"/\" method=\"post\" on-submit=\"addComment(event, text, name)\">\n    <textarea cols=\"26\" rows=\"2\" value=\"{{text}}\"></textarea> <br>\n    <input type=\"text\" value=\"{{name}}\">\n\n    <button type=\"submit\">Save</button>\n</form>"

/***/ }
/******/ ]);