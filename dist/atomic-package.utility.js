(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ap-utility"] = factory();
	else
		root["ap-utility"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utility = (function () {
    function Utility() {
        this._FAKE_ELEMENT = 'fakeelement';
        if (Utility._instance) {
            return Utility._instance;
        }
        else {
            Utility._instance = this;
        }
        this.support = {
            touch: ('ontouchstart' in window)
        };
        this.vendor = {
            defaultEvent: 'click',
            transitionend: this.whichTransitionEvent(),
            animationend: this.whichAnimationEvent(),
            prefix: this.whichPrefix(),
            transform: this.whichTransform()
        };
        if (this.support.touch) {
            this.vendor.defaultEvent = 'touchend';
        }
        this.setRequestAnimationFrame();
        this.setCancelAnimationFrame();
    }
    Utility.getInstance = function () {
        if (this._instance == null) {
            return new Utility();
        }
        else {
            return Utility._instance;
        }
    };
    Utility.prototype.createFakeElement = function () {
        return document.createElement(this._FAKE_ELEMENT);
    };
    Utility.prototype.setRequestAnimationFrame = function () {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    };
    Utility.prototype.setCancelAnimationFrame = function () {
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
    };
    Utility.prototype.whichPrefix = function () {
        return (/webkit/i).test(navigator.appVersion) ? '-webkit-' : (/firefox/i).test(navigator.userAgent) ? '-moz-' :
            (/trident/i).test(navigator.userAgent) ? '-ms-' : 'opera' in window ? '-o-' : '';
    };
    Utility.prototype.whichTransform = function () {
        var t, el = this.createFakeElement();
        var transform = {
            'transform': 'transform',
            'OTransform': 'OTransform',
            'MozTransform': 'MozTransform',
            'webkitTransform': 'webkitTransform'
        };
        for (t in transform) {
            if (el.style[t] !== undefined) {
                return transform[t];
            }
        }
    };
    Utility.prototype.whichAnimationEvent = function () {
        var t, el = this.createFakeElement();
        var animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };
        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    };
    Utility.prototype.whichTransitionEvent = function () {
        var t, el = this.createFakeElement();
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    Utility.prototype.getClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    Utility.prototype.getClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return Utility;
}());
Utility._instance = null;
exports.Utility = Utility;
exports.default = Utility;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var e = eval, global = e('this');
var Utility_1 = __webpack_require__(0);
if (true) {
    module.exports = Utility_1.default;
}
if (typeof (global) !== 'undefined') {
    if (typeof global.AP === 'undefined') {
        Object.assign(global, { AP: {} });
    }
    if (typeof global.AP.common === 'undefined') {
        Object.assign(global.AP, { common: {} });
    }
    if (typeof global.AP.common.utility === 'undefined') {
        Object.assign(global.AP.common, { utility: Utility_1.default });
    }
}


/***/ })
/******/ ]);
});