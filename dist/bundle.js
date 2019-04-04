/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: BREAKPOINT_MEDIUM, MEDIA_QUERIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BREAKPOINT_MEDIUM\", function() { return BREAKPOINT_MEDIUM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEDIA_QUERIES\", function() { return MEDIA_QUERIES; });\nvar BREAKPOINT_MEDIUM = 767;\n/**\n * メディアクエリの条件分岐に用いる定数。\n * @type {string}\n */\n\nvar MEDIA_QUERIES = {\n  MEDIUM: 'MEDIA_QUERIES_MEDIUM',\n  SMALL: 'MEDIA_QUERIES_SMALL'\n};\n\n\n//# sourceURL=webpack:///./js/constants.js?");

/***/ }),

/***/ "./js/doms.js":
/*!********************!*\
  !*** ./js/doms.js ***!
  \********************/
/*! exports provided: $window, $topSliderList, $gallery, $arrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$window\", function() { return $window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$topSliderList\", function() { return $topSliderList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$gallery\", function() { return $gallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$arrows\", function() { return $arrows; });\n// slickで使用するDOMの定義\nvar $window = $(window);\nvar $topSliderList = $('#topSliderList');\nvar $gallery = $('#gallery');\nvar $arrows = $('#arrows');\n\n\n//# sourceURL=webpack:///./js/doms.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doms */ \"./js/doms.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n/* harmony import */ var _slickSettingVaribles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slickSettingVaribles */ \"./js/slickSettingVaribles.js\");\n/* harmony import */ var _resetMediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetMediaQueries */ \"./js/resetMediaQueries.js\");\n/* harmony import */ var _mySlickModules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mySlickModules */ \"./js/mySlickModules.js\");\n\n\n\n\n\n$(function () {\n  /**\n   * slickスライドを最初のものに戻す。\n   */\n  var returnToFirstSlide = function returnToFirstSlide() {\n    _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].slick('slickGoTo', 0);\n  };\n\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$window\"].on('load resize', function () {\n    // 順番に注意して下さい。メディアクエリの再設定を最初に行って下さい。\n    // toggleGalleryAfterChange内で再設定後のメディアクエリを使用しています。\n    Object(_resetMediaQueries__WEBPACK_IMPORTED_MODULE_3__[\"resetMediaQueries\"])();\n    Object(_mySlickModules__WEBPACK_IMPORTED_MODULE_4__[\"toggleGalleryAfterChange\"])();\n  });\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$window\"].on('resize', function () {\n    // スライドアニメーション中にリサイズされると、表示が変になるので、最初のスライドに戻しています。\n    returnToFirstSlide();\n  }); // slickの設定\n  // ------------------------------------\n\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$topSliderList\"].slick({\n    appendArrows: _doms__WEBPACK_IMPORTED_MODULE_0__[\"$arrows\"],\n    autoplay: true,\n    autoplaySpeed: _slickSettingVaribles__WEBPACK_IMPORTED_MODULE_2__[\"autoplaySpeed\"].topSliderList,\n    centerMode: true,\n    slidesToShow: 1,\n    variableWidth: true\n  });\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].slick({\n    autoplay: true,\n    autoplaySpeed: _slickSettingVaribles__WEBPACK_IMPORTED_MODULE_2__[\"autoplaySpeed\"].gallery,\n    slidesToScroll: 4,\n    variableWidth: true,\n    waitForAnimate: false,\n    // afterChangeでスライドを動かす際に必要。\n    responsive: [{\n      breakpoint: _constants__WEBPACK_IMPORTED_MODULE_1__[\"BREAKPOINT_MEDIUM\"] + 1,\n      settings: {\n        slidesToScroll: 3\n      }\n    }]\n  });\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].on('afterChange', _mySlickModules__WEBPACK_IMPORTED_MODULE_4__[\"afterChangeFunc\"]);\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mySlickModules.js":
/*!******************************!*\
  !*** ./js/mySlickModules.js ***!
  \******************************/
/*! exports provided: afterChangeFunc, toggleGalleryAfterChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"afterChangeFunc\", function() { return afterChangeFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleGalleryAfterChange\", function() { return toggleGalleryAfterChange; });\n/* harmony import */ var _doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doms */ \"./js/doms.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n/* harmony import */ var _slickSettingVaribles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slickSettingVaribles */ \"./js/slickSettingVaribles.js\");\n/* harmony import */ var _resetMediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetMediaQueries */ \"./js/resetMediaQueries.js\");\n\n\n\n\n/**\n * slickのスライド動作後の関数\n * @type {Object}\n */\n\nvar afterChangeFunc;\n/**\n * ギャラリー部のスライドを時間差でスライドさせる。\n * @param {gotoNumber} num - 何枚目のスライドにスライドさせるか。\n */\n\nvar slideGalleryByTimeDifference = function slideGalleryByTimeDifference(gotoNumber) {\n  setTimeout(function () {\n    _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].slick('slickGoTo', gotoNumber);\n  }, _slickSettingVaribles__WEBPACK_IMPORTED_MODULE_2__[\"autoplaySpeed\"].gallery);\n};\n/**\n * 画面サイズによって、ギャラリー部のスライド動作を切り替えます。\n */\n\n\nvar toggleGalleryAfterChange = function toggleGalleryAfterChange() {\n  if (_resetMediaQueries__WEBPACK_IMPORTED_MODULE_3__[\"mediaQueries\"] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_QUERIES\"].MEDIUM) {\n    afterChangeFunc = function afterChangeFunc(event, slick, currentSlide) {\n      if (currentSlide === 4) {\n        slideGalleryByTimeDifference(0);\n      }\n    };\n  } else {\n    // 767px以下の場合。スライド数が一定ではありません。\n    afterChangeFunc = function afterChangeFunc(event, slick, currentSlide) {\n      // 1回目は、3枚スライドさせています。\n      if (currentSlide === 3) {\n        // 2回目は、2枚しかスライドさせません。\n        slideGalleryByTimeDifference(5);\n      }\n\n      if (currentSlide === 5) {\n        // 3回目のスライドで元に戻ります。\n        slideGalleryByTimeDifference(0);\n      }\n    };\n  } // 新しくイベントをセットし直します。onだと追加されてしまうので、一旦offして解除しています。\n\n\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].off('afterChange');\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$gallery\"].on('afterChange', afterChangeFunc);\n};\n\n//# sourceURL=webpack:///./js/mySlickModules.js?");

/***/ }),

/***/ "./js/resetMediaQueries.js":
/*!*********************************!*\
  !*** ./js/resetMediaQueries.js ***!
  \*********************************/
/*! exports provided: mediaQueries, resetMediaQueries, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mediaQueries\", function() { return mediaQueries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetMediaQueries\", function() { return resetMediaQueries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _doms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doms */ \"./js/doms.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n\n\n/**\n * メディアクエリの条件分岐に用いるグローバル変数。\n * @type {string}\n */\n\nvar mediaQueries;\n/**\n * 現在の画面サイズに応じたメディアクエリを再設定します。\n */\n\nvar resetMediaQueries = function resetMediaQueries() {\n  var windowSize = _doms__WEBPACK_IMPORTED_MODULE_0__[\"$window\"].width();\n  windowSize > _constants__WEBPACK_IMPORTED_MODULE_1__[\"BREAKPOINT_MEDIUM\"] ? mediaQueries = _constants__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_QUERIES\"].MEDIUM : mediaQueries = _constants__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_QUERIES\"].SMALL;\n};\n/**\n * 初期設定としてwindowにイベントを設定します。\n */\n\nvar init = function init() {\n  _doms__WEBPACK_IMPORTED_MODULE_0__[\"$window\"].on('load resize', function () {\n    resetMediaQueries();\n  });\n};\n\n//# sourceURL=webpack:///./js/resetMediaQueries.js?");

/***/ }),

/***/ "./js/slickSettingVaribles.js":
/*!************************************!*\
  !*** ./js/slickSettingVaribles.js ***!
  \************************************/
/*! exports provided: autoplaySpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoplaySpeed\", function() { return autoplaySpeed; });\n/**\n * slickで使用する自動スライドの速さ。\n * @type {Object}\n */\nvar autoplaySpeed = {\n  topSliderList: 5000,\n  gallery: 4000\n};\n\n\n//# sourceURL=webpack:///./js/slickSettingVaribles.js?");

/***/ })

/******/ });