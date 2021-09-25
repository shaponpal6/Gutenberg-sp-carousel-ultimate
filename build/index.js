/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/author-carousel/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/author-carousel/index.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/page-carousel/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/page-carousel/index.js ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/post-carousel/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/post-carousel/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('spcu-block/spcu-post-carousel', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SP Simple Block'),
  icon: 'screenoptions',
  category: 'common',
  keywords: ['Block', 'Carousel', 'Gutenberg'],
  attributes: {
    text: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This is simple block')
    }
  },
  edit: props => {
    console.log('props :>> ', props);
    const {
      attributes: {
        text
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, text);
  },
  save: props => {
    const {
      attributes: {
        text
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, text);
  }
});

/***/ }),

/***/ "./src/blocks/product-carousel/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/product-carousel/index.js ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_author_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/author-carousel */ "./src/blocks/author-carousel/index.js");
/* harmony import */ var _blocks_author_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_author_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_page_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/page-carousel */ "./src/blocks/page-carousel/index.js");
/* harmony import */ var _blocks_page_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_post_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/post-carousel */ "./src/blocks/post-carousel/index.js");
/* harmony import */ var _blocks_product_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/product-carousel */ "./src/blocks/product-carousel/index.js");
/* harmony import */ var _blocks_product_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_product_carousel__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=index.js.map