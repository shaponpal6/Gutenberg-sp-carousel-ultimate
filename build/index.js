/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/editable-block/index.js":
/*!********************************************!*\
  !*** ./src/blocks/editable-block/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


const {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload
} = wp.editor;

const {
  IconButton,
  RangeControl,
  PanelBody
} = wp.components;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('spcu-gutenberg/block-editable', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SP Editable Block'),
  icon: 'screenoptions',
  category: 'common',
  keywords: ['Block', 'editable', 'Gutenberg'],
  attributes: {
    text: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Social Link')
    },
    social_site: {
      type: "string",
      selector: 'h2',
      source: 'html'
    },
    site_url: {
      type: "string",
      selector: 'p',
      source: 'html'
    },
    site_color: {
      type: "string",
      default: '#333'
    },
    background_image: {
      type: 'string',
      default: null
    },
    overlay_color: {
      type: 'string',
      default: 'black'
    },
    overlay_opacity: {
      type: 'number',
      default: 0.4
    }
  },
  edit: props => {
    console.log('props :>> ', props);
    const {
      className,
      attributes: {
        text,
        social_site,
        site_url,
        site_color,
        background_image,
        overlay_color,
        overlay_opacity
      }
    } = props;

    function onChangeContentURL(content) {
      props.setAttributes({
        site_url: content
      });
    }

    function onChangeContentName(content) {
      props.setAttributes({
        social_site: content
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      style: {
        background: '#ccc'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'SP Block Color Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Choose a block color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: site_color,
      onChange: color => props.setAttributes({
        site_color: color
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'SP Block Media Upload'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Choose background image:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: image => props.setAttributes({
        background_image: image.sizes.full.url
      }),
      key: "keyMedia",
      type: "image",
      value: background_image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
        className: "editor-media-placeholder__button is-button is-default is-large",
        icon: "upload",
        onClick: open
      }, "Choose Background Image")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'SP Block Background Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Overlay Color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: overlay_color,
      onChange: color => props.setAttributes({
        overlay_color: color
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Overlay Opacity:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: 'Overlay Opacity',
      value: overlay_opacity,
      onChange: opacity => props.setAttributes({
        overlay_opacity: opacity
      }),
      min: 0,
      max: 1,
      step: 0.03
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editable-box",
      style: {
        backgroundImage: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editable-overlay",
      style: {
        background: overlay_color,
        opacity: overlay_opacity,
        position: 'absolute',
        inset: '0px'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h2",
      className: className,
      onChange: onChangeContentName,
      allowedFormats: ['core/bold', 'core/italic'],
      value: social_site,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name of the Social Site"),
      style: {
        color: site_color
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: className,
      onChange: onChangeContentURL,
      value: site_url,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Site Url")
    }))];
  },
  save: props => {
    console.log('props :>> ', props);
    const {
      attributes: {
        text,
        social_site,
        site_url,
        site_color,
        background_image,
        overlay_color,
        overlay_opacity
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editable-box",
      style: {
        backgroundImage: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editable-overlay",
      style: {
        background: overlay_color,
        opacity: overlay_opacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h2",
      value: social_site,
      style: {
        color: site_color
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: site_url
    }));
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_editable_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/editable-block */ "./src/blocks/editable-block/index.js");

}();
/******/ })()
;
//# sourceMappingURL=index.js.map