/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/block-acf/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/block-acf/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/block-acf/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/block-acf/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/carousel-react/editor.scss":
/*!********************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/editor.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/carousel-react/style.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/editor.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/style.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/editable/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/editable/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/editable/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/editable/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/block-acf/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/block-acf/attributes.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Attributes; }
/* harmony export */ });
function Attributes() {
  return {};
}

/***/ }),

/***/ "./src/blocks/block-acf/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/block-acf/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/block-acf/editor.scss");



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sp Blocks – ACF', 'sp-blocks'));
}

/***/ }),

/***/ "./src/blocks/block-acf/index.js":
/*!***************************************!*\
  !*** ./src/blocks/block-acf/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/block-acf/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/block-acf/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/block-acf/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/block-acf/attributes.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('spcu-blocks/block-acf', {
  "apiVersion": 2,
  "version": "1.0.0",
  "category": "common",
  "icon": "smiley",
  "description": "Example block written with ESNext standard and JSX support – build step required.",
  "supports": {
    "html": false
  },
  "textdomain": "spcu-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/block-acf/save.js":
/*!**************************************!*\
  !*** ./src/blocks/block-acf/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sp Blocks – ACF', 'sp-blocks'));
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-react/attributes.js":
/*!**********************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/attributes.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Attributes; }
/* harmony export */ });
function Attributes() {
  return {};
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-react/edit.js":
/*!****************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/edit.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Carousel */ "./src/components/Carousel.js");
/* harmony import */ var _components_Votes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Votes */ "./src/components/Votes.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/carousel/carousel-react/editor.scss");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sp Blocks – hello from the editor!222', 'sp-blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Votes__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-react/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/carousel/carousel-react/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/carousel/carousel-react/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/carousel/carousel-react/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/carousel/carousel-react/attributes.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('spcu-blocks/carousel-react', {
  "apiVersion": 2,
  "version": "1.0.0",
  "category": "common",
  "icon": "smiley",
  "description": "Example block written with ESNext standard and JSX support – build step required.",
  "supports": {
    "html": false
  },
  "textdomain": "spcu-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/carousel/carousel-react/save.js":
/*!****************************************************!*\
  !*** ./src/blocks/carousel/carousel-react/save.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
// import { __ } from '@wordpress/i18n';
// import { useBlockProps } from '@wordpress/block-editor';
function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/attributes.js":
/*!********************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/attributes.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Attributes; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function Attributes() {
  return {
    title: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Latest Post')
    },
    count: {
      type: 'integer',
      default: 4
    }
  };
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/carousel/carousel-ssr/editor.scss");




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'post');
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), !posts && 'Loading', posts && posts.length === 0 ? 'No Posts' : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, props.attributes.title), posts && posts.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcu-dynamic-block-wp-data"
  }, posts.slice(0, props.attributes.count).map(post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      key: post.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link
    }, post.title.rendered));
  })));
}

/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/carousel/carousel-ssr/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/carousel/carousel-ssr/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/carousel/carousel-ssr/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/carousel/carousel-ssr/attributes.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('spcu-blocks/carousel-ssr', {
  "apiVersion": 2,
  "version": "1.0.0",
  "category": "common",
  "icon": "smiley",
  "description": "Example block written with ESNext standard and JSX support – build step required.",
  "supports": {
    "html": false
  },
  "textdomain": "spcu-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/carousel/carousel-ssr/save.js":
/*!**************************************************!*\
  !*** ./src/blocks/carousel/carousel-ssr/save.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: "spcu-blocks/carousel-ssr",
    attributes: props.attributes
  }));
}

/***/ }),

/***/ "./src/blocks/editable/attributes.js":
/*!*******************************************!*\
  !*** ./src/blocks/editable/attributes.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Attributes; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function Attributes() {
  return {
    text: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Social Link')
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
    alignment: {
      type: 'string',
      default: 'none'
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
  };
}

/***/ }),

/***/ "./src/blocks/editable/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/editable/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/editable/editor.scss");




const {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload,
  InnerBlocks,
  BlockControls,
  AlignmentToolbar
} = wp.editor;
const {
  IconButton,
  RangeControl,
  PanelBody
} = wp.components;
const ALLOWED_BLOCKS = ['core/button'];
const MY_TEMPLATE = [["core/image", {}], ["core/heading", {
  placeholder: "Title"
}], ["core/paragraph", {
  placeholder: "description"
}], // Custom block for Social Media!
["core/button", {
  placeholder: "Call to Action Button"
}]];
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  // console.log('props :>> ', props);
  const {
    className,
    attributes: {
      text,
      social_site,
      site_url,
      alignment,
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

  return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, {
    style: {
      background: '#ccc'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: 'SP Block Color Settings'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "Choose a block color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPalette, {
    value: site_color,
    onChange: color => props.setAttributes({
      site_color: color
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: 'SP Block Media Upload'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "Choose background image:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
    onSelect: image => props.setAttributes({
      background_image: image.sizes.full.url
    }),
    key: "keyMedia",
    type: "image",
    value: background_image,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IconButton, {
      className: "editor-media-placeholder__button is-button is-default is-large",
      icon: "upload",
      onClick: open
    }, "Choose Background Image")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: 'SP Block Background Settings'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "Overlay Color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPalette, {
    value: overlay_color,
    onChange: color => props.setAttributes({
      overlay_color: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "Overlay Opacity:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
    label: 'Overlay Opacity',
    value: overlay_opacity,
    onChange: opacity => props.setAttributes({
      overlay_opacity: opacity
    }),
    min: 0,
    max: 1,
    step: 0.03
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), {
    className: "block-editable-box",
    style: {
      backgroundImage: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "block-editable-overlay",
    style: {
      background: overlay_color,
      opacity: overlay_opacity,
      position: 'absolute',
      inset: '0px',
      zIndex: '-1'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AlignmentToolbar, {
    value: alignment,
    onChange: alignment => props.setAttributes({
      alignment: !!alignment ? alignment : 'none'
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", null, text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
    tagName: "h2",
    className: className,
    onChange: onChangeContentName,
    allowedFormats: ['core/bold', 'core/italic'],
    value: social_site,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name of the Social Site"),
    style: {
      color: site_color,
      textAlign: alignment
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
    tagName: "p",
    className: className,
    onChange: onChangeContentURL,
    value: site_url,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Site Url")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    template: MY_TEMPLATE,
    templateLock: "insert"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS
  }))];
}

/***/ }),

/***/ "./src/blocks/editable/index.js":
/*!**************************************!*\
  !*** ./src/blocks/editable/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/editable/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/editable/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/editable/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/editable/attributes.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('spcu-blocks/editable-text-block', {
  "apiVersion": 2,
  "version": "1.0.0",
  "category": "common",
  "icon": "smiley",
  "description": "Example block written with ESNext standard and JSX support – build step required.",
  "supports": {
    "html": false
  },
  "textdomain": "spcu-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/editable/save.js":
/*!*************************************!*\
  !*** ./src/blocks/editable/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const {
  RichText,
  InnerBlocks
} = wp.editor;
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {
  // console.log('props :>> ', props);
  const {
    attributes: {
      text,
      social_site,
      site_url,
      alignment,
      site_color,
      background_image,
      overlay_color,
      overlay_opacity
    }
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), {
    className: "block-editable-box",
    style: {
      backgroundImage: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "block-editable-overlay",
    style: {
      background: overlay_color,
      opacity: overlay_opacity,
      position: 'absolute',
      inset: '0px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", null, text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
    tagName: "h2",
    value: social_site,
    style: {
      color: site_color,
      textAlign: alignment
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
    tagName: "p",
    value: site_url
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};

const SimpleCarousel = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    responsive: responsive
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Item 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Item 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Item 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Item 4"));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleCarousel);

/***/ }),

/***/ "./src/components/Votes.js":
/*!*********************************!*\
  !*** ./src/components/Votes.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  useState
} = wp.element;

const Votes = () => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    setVotes(votes + 1);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, votes, " Votes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: addVote
  }, "Vote! Up")));
};

/* harmony default export */ __webpack_exports__["default"] = (Votes);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_carousel_carousel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/carousel/carousel-react */ "./src/blocks/carousel/carousel-react/index.js");
/* harmony import */ var _blocks_carousel_carousel_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/carousel/carousel-ssr */ "./src/blocks/carousel/carousel-ssr/index.js");
/* harmony import */ var _blocks_block_acf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/block-acf */ "./src/blocks/block-acf/index.js");
/* harmony import */ var _blocks_editable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/editable */ "./src/blocks/editable/index.js");





/***/ }),

/***/ "./node_modules/react-multi-carousel/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-multi-carousel/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/react-multi-carousel/lib/index.js");


/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Arrows.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Arrows.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react"),LeftArrow=function(_a){var customLeftArrow=_a.customLeftArrow,getState=_a.getState,previous=_a.previous,disabled=_a.disabled;return customLeftArrow?React.cloneElement(customLeftArrow,{onClick:function(){return previous()},carouselState:getState(),disabled:disabled}):React.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left",onClick:function(){return previous()},type:"button",disabled:disabled})};exports.LeftArrow=LeftArrow;var RightArrow=function(_a){var customRightArrow=_a.customRightArrow,getState=_a.getState,next=_a.next,disabled=_a.disabled;return customRightArrow?React.cloneElement(customRightArrow,{onClick:function(){return next()},carouselState:getState(),disabled:disabled}):React.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right",onClick:function(){return next()},type:"button",disabled:disabled})};exports.RightArrow=RightArrow;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Carousel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Carousel.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react"),utils_1=__webpack_require__(/*! ./utils */ "./node_modules/react-multi-carousel/lib/utils/index.js"),types_1=__webpack_require__(/*! ./types */ "./node_modules/react-multi-carousel/lib/types.js"),Dots_1=__webpack_require__(/*! ./Dots */ "./node_modules/react-multi-carousel/lib/Dots.js"),Arrows_1=__webpack_require__(/*! ./Arrows */ "./node_modules/react-multi-carousel/lib/Arrows.js"),CarouselItems_1=__webpack_require__(/*! ./CarouselItems */ "./node_modules/react-multi-carousel/lib/CarouselItems.js"),common_1=__webpack_require__(/*! ./utils/common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),defaultTransitionDuration=400,defaultTransition="transform 400ms ease-in-out",Carousel=function(_super){function Carousel(props){var _this=_super.call(this,props)||this;return _this.containerRef=React.createRef(),_this.listRef=React.createRef(),_this.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:React.Children.count(props.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},_this.onResize=_this.onResize.bind(_this),_this.handleDown=_this.handleDown.bind(_this),_this.handleMove=_this.handleMove.bind(_this),_this.handleOut=_this.handleOut.bind(_this),_this.onKeyUp=_this.onKeyUp.bind(_this),_this.handleEnter=_this.handleEnter.bind(_this),_this.setIsInThrottle=_this.setIsInThrottle.bind(_this),_this.next=utils_1.throttle(_this.next.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.previous=utils_1.throttle(_this.previous.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.goToSlide=utils_1.throttle(_this.goToSlide.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.onMove=!1,_this.initialX=0,_this.lastX=0,_this.isAnimationAllowed=!1,_this.direction="",_this.initialY=0,_this.isInThrottle=!1,_this.transformPlaceHolder=0,_this}return __extends(Carousel,_super),Carousel.prototype.resetTotalItems=function(){var _this=this,totalItems=React.Children.count(this.props.children),currentSlide=utils_1.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,totalItems));this.setState({totalItems:totalItems,currentSlide:currentSlide},function(){_this.setContainerAndItemWidth(_this.state.slidesToShow,!0)})},Carousel.prototype.setIsInThrottle=function(isInThrottle){void 0===isInThrottle&&(isInThrottle=!1),this.isInThrottle=isInThrottle},Carousel.prototype.setTransformDirectly=function(position,withAnimation){var additionalTransfrom=this.props.additionalTransfrom,currentTransform=common_1.getTransform(this.state,this.props,position);this.transformPlaceHolder=position,this.listRef&&this.listRef.current&&(this.setAnimationDirectly(withAnimation),this.listRef.current.style.transform="translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)")},Carousel.prototype.setAnimationDirectly=function(animationAllowed){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=animationAllowed?this.props.customTransition||defaultTransition:"none")},Carousel.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.props.autoPlaySpeed&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},Carousel.prototype.setClones=function(slidesToShow,itemWidth,forResizing,resetCurrentSlide){var _this=this;void 0===resetCurrentSlide&&(resetCurrentSlide=!1),this.isAnimationAllowed=!1;var childrenArr=React.Children.toArray(this.props.children),initialSlide=utils_1.getInitialSlideInInfiniteMode(slidesToShow||this.state.slidesToShow,childrenArr),clones=utils_1.getClones(this.state.slidesToShow,childrenArr),currentSlide=childrenArr.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:clones.length,currentSlide:forResizing&&!resetCurrentSlide?currentSlide:initialSlide},function(){_this.correctItemsPosition(itemWidth||_this.state.itemWidth)})},Carousel.prototype.setItemsToShow=function(shouldCorrectItemPosition,resetCurrentSlide){var _this=this,responsive=this.props.responsive;Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,items=_a.items,max=breakpoint.max,min=breakpoint.min;window.innerWidth>=min&&window.innerWidth<=max&&(_this.setState({slidesToShow:items,deviceType:item}),_this.setContainerAndItemWidth(items,shouldCorrectItemPosition,resetCurrentSlide))})},Carousel.prototype.setContainerAndItemWidth=function(slidesToShow,shouldCorrectItemPosition,resetCurrentSlide){var _this=this;if(this.containerRef&&this.containerRef.current){var containerWidth=this.containerRef.current.offsetWidth,itemWidth_1=utils_1.getItemClientSideWidth(this.props,slidesToShow,containerWidth);this.setState({containerWidth:containerWidth,itemWidth:itemWidth_1},function(){_this.props.infinite&&_this.setClones(slidesToShow,itemWidth_1,shouldCorrectItemPosition,resetCurrentSlide)}),shouldCorrectItemPosition&&this.correctItemsPosition(itemWidth_1)}},Carousel.prototype.correctItemsPosition=function(itemWidth,isAnimationAllowed,setToDomDirectly){isAnimationAllowed&&(this.isAnimationAllowed=!0),!isAnimationAllowed&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var nextTransform=this.state.totalItems<this.state.slidesToShow?0:-itemWidth*this.state.currentSlide;setToDomDirectly&&this.setTransformDirectly(nextTransform,!0),this.setState({transform:nextTransform})},Carousel.prototype.onResize=function(value){var shouldCorrectItemPosition;shouldCorrectItemPosition=!!this.props.infinite&&("boolean"!=typeof value||!value),this.setItemsToShow(shouldCorrectItemPosition)},Carousel.prototype.componentDidUpdate=function(_a,_b){var _this=this,keyBoardControl=_a.keyBoardControl,autoPlay=_a.autoPlay,children=_a.children,containerWidth=_b.containerWidth,domLoaded=_b.domLoaded,currentSlide=_b.currentSlide;this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==containerWidth&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){_this.setItemsToShow(!0)},this.props.transitionDuration||defaultTransitionDuration)),keyBoardControl&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!keyBoardControl&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),autoPlay&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),autoPlay||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),children.length!==this.props.children.length?setTimeout(function(){_this.props.infinite?_this.setClones(_this.state.slidesToShow,_this.state.itemWidth,!0,!0):_this.resetTotalItems()},this.props.transitionDuration||defaultTransitionDuration):this.props.infinite&&this.state.currentSlide!==currentSlide&&this.correctClonesPosition({domLoaded:domLoaded}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform)},Carousel.prototype.correctClonesPosition=function(_a){var _this=this,domLoaded=_a.domLoaded,childrenArr=React.Children.toArray(this.props.children),_b=utils_1.checkClonesPosition(this.state,childrenArr,this.props),isReachingTheEnd=_b.isReachingTheEnd,isReachingTheStart=_b.isReachingTheStart,nextSlide=_b.nextSlide,nextPosition=_b.nextPosition;this.state.domLoaded&&domLoaded&&(isReachingTheEnd||isReachingTheStart)&&(this.isAnimationAllowed=!1,setTimeout(function(){_this.setState({transform:nextPosition,currentSlide:nextSlide})},this.props.transitionDuration||defaultTransitionDuration))},Carousel.prototype.next=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populateNextSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition,previousSlide=this.state.currentSlide;void 0!==nextSlides&&void 0!==nextPosition&&("function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)}))}},Carousel.prototype.previous=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populatePreviousSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition;if(void 0!==nextSlides&&void 0!==nextPosition){var previousSlide=this.state.currentSlide;"function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)})}}},Carousel.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout)},Carousel.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},Carousel.prototype.handleDown=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||this.isInThrottle)){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY;this.onMove=!0,this.initialX=clientX,this.initialY=clientY,this.lastX=clientX,this.isAnimationAllowed=!1}},Carousel.prototype.handleMove=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||utils_1.notEnoughChildren(this.state))){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY,diffX=this.initialX-clientX,diffY=this.initialY-clientY;if(this.onMove){if(!(Math.abs(diffX)>Math.abs(diffY)))return;var _b=utils_1.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,clientX,this.transformPlaceHolder),direction=_b.direction,nextPosition=_b.nextPosition,canContinue=_b.canContinue;direction&&(this.direction=direction,canContinue&&void 0!==nextPosition&&this.setTransformDirectly(nextPosition)),this.lastX=clientX}}},Carousel.prototype.handleOut=function(e){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var shouldDisableOnMobile="touchend"===e.type&&!this.props.swipeable,shouldDisableOnDesktop=("mouseleave"===e.type||"mouseup"===e.type)&&!this.props.draggable;if(!shouldDisableOnMobile&&!shouldDisableOnDesktop&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction)if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var slidesHavePassed=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(slidesHavePassed)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);if("left"===this.direction)if(this.lastX-this.initialX>this.props.minimumTouchDrag){slidesHavePassed=Math.round((this.lastX-this.initialX)/this.state.itemWidth);this.previous(slidesHavePassed)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.resetMoveStatus()}},Carousel.prototype.isInViewport=function(el){var _a=el.getBoundingClientRect(),_b=_a.top,top=void 0===_b?0:_b,_c=_a.left,left=void 0===_c?0:_c,_d=_a.bottom,bottom=void 0===_d?0:_d,_e=_a.right,right=void 0===_e?0:_e;return 0<=top&&0<=left&&bottom<=(window.innerHeight||document.documentElement.clientHeight)&&right<=(window.innerWidth||document.documentElement.clientWidth)},Carousel.prototype.isChildOfCarousel=function(el){return!!(el instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(el)},Carousel.prototype.onKeyUp=function(e){var target=e.target;switch(e.keyCode){case 37:if(this.isChildOfCarousel(target))return this.previous();break;case 39:if(this.isChildOfCarousel(target))return this.next();break;case 9:if(this.isChildOfCarousel(target)&&target instanceof HTMLInputElement&&!this.isInViewport(target))return this.next()}},Carousel.prototype.handleEnter=function(e){types_1.isMouseMoveEvent(e)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},Carousel.prototype.goToSlide=function(slide,skipCallbacks){var _this=this;if(!this.isInThrottle){var itemWidth=this.state.itemWidth,_a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange,previousSlide=this.state.currentSlide;"function"!=typeof beforeChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipBeforeChange)||beforeChange(slide,this.getState()),this.isAnimationAllowed=!0,this.setState({currentSlide:slide,transform:-itemWidth*slide},function(){_this.props.infinite&&_this.correctClonesPosition({domLoaded:!0}),"function"!=typeof afterChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipAfterChange)||setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)})}},Carousel.prototype.getState=function(){return this.state},Carousel.prototype.renderLeftArrow=function(disbaled){var _this=this,customLeftArrow=this.props.customLeftArrow;return React.createElement(Arrows_1.LeftArrow,{customLeftArrow:customLeftArrow,getState:function(){return _this.getState()},previous:this.previous,disabled:disbaled})},Carousel.prototype.renderRightArrow=function(disbaled){var _this=this,customRightArrow=this.props.customRightArrow;return React.createElement(Arrows_1.RightArrow,{customRightArrow:customRightArrow,getState:function(){return _this.getState()},next:this.next,disabled:disbaled})},Carousel.prototype.renderButtonGroups=function(){var _this=this,customButtonGroup=this.props.customButtonGroup;return customButtonGroup?React.cloneElement(customButtonGroup,{previous:function(){return _this.previous()},next:function(){return _this.next()},goToSlide:function(slideIndex,skipCallbacks){return _this.goToSlide(slideIndex,skipCallbacks)},carouselState:this.getState()}):null},Carousel.prototype.renderDotsList=function(){var _this=this;return React.createElement(Dots_1.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return _this.getState()}})},Carousel.prototype.renderCarouselItems=function(){var clones=[];if(this.props.infinite){var childrenArr=React.Children.toArray(this.props.children);clones=utils_1.getClones(this.state.slidesToShow,childrenArr)}return React.createElement(CarouselItems_1.default,{clones:clones,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:utils_1.notEnoughChildren(this.state),props:this.props})},Carousel.prototype.render=function(){var _a=this.props,deviceType=_a.deviceType,arrows=_a.arrows,renderArrowsWhenDisabled=_a.renderArrowsWhenDisabled,removeArrowOnDeviceType=_a.removeArrowOnDeviceType,infinite=_a.infinite,containerClass=_a.containerClass,sliderClass=_a.sliderClass,customTransition=_a.customTransition,additionalTransfrom=_a.additionalTransfrom,renderDotsOutside=_a.renderDotsOutside,renderButtonGroupOutside=_a.renderButtonGroupOutside,className=_a.className; true&&utils_1.throwError(this.state,this.props);var _b=utils_1.getInitialState(this.state,this.props),shouldRenderOnSSR=_b.shouldRenderOnSSR,shouldRenderAtAll=_b.shouldRenderAtAll,isLeftEndReach=utils_1.isInLeftEnd(this.state),isRightEndReach=utils_1.isInRightEnd(this.state),shouldShowArrows=arrows&&!(removeArrowOnDeviceType&&(deviceType&&-1<removeArrowOnDeviceType.indexOf(deviceType)||this.state.deviceType&&-1<removeArrowOnDeviceType.indexOf(this.state.deviceType)))&&!utils_1.notEnoughChildren(this.state)&&shouldRenderAtAll,disableLeftArrow=!infinite&&isLeftEndReach,disableRightArrow=!infinite&&isRightEndReach,currentTransform=common_1.getTransform(this.state,this.props);return React.createElement(React.Fragment,null,React.createElement("div",{className:"react-multi-carousel-list "+containerClass+" "+className,ref:this.containerRef},React.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+sliderClass,style:{transition:this.isAnimationAllowed?customTransition||defaultTransition:"none",overflow:shouldRenderOnSSR?"hidden":"unset",transform:"translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),shouldShowArrows&&(!disableLeftArrow||renderArrowsWhenDisabled)&&this.renderLeftArrow(disableLeftArrow),shouldShowArrows&&(!disableRightArrow||renderArrowsWhenDisabled)&&this.renderRightArrow(disableRightArrow),shouldRenderAtAll&&!renderButtonGroupOutside&&this.renderButtonGroups(),shouldRenderAtAll&&!renderDotsOutside&&this.renderDotsList()),shouldRenderAtAll&&renderDotsOutside&&this.renderDotsList(),shouldRenderAtAll&&renderButtonGroupOutside&&this.renderButtonGroups())},Carousel.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0},Carousel}(React.Component);exports["default"]=Carousel;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/CarouselItems.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/CarouselItems.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react"),utils_1=__webpack_require__(/*! ./utils */ "./node_modules/react-multi-carousel/lib/utils/index.js"),CarouselItems=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,clones=_a.clones,notEnoughChildren=_a.notEnoughChildren,itemWidth=state.itemWidth,children=props.children,infinite=props.infinite,itemClass=props.itemClass,itemAriaLabel=props.itemAriaLabel,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,_b=utils_1.getInitialState(state,props),flexBisis=_b.flexBisis,shouldRenderOnSSR=_b.shouldRenderOnSSR,domFullyLoaded=_b.domFullyLoaded,partialVisibilityGutter=_b.partialVisibilityGutter;return _b.shouldRenderAtAll?(partialVisbile&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),React.createElement(React.Fragment,null,(infinite?clones:React.Children.toArray(children)).map(function(child,index){return React.createElement("li",{key:index,"data-index":index,onClick:function(){props.focusOnSelect&&goToSlide(index)},"aria-hidden":utils_1.getIfSlideIsVisbile(index,state)?"false":"true","aria-label":itemAriaLabel||(child.props.ariaLabel?child.props.ariaLabel:null),style:{flex:shouldRenderOnSSR?"1 0 "+flexBisis+"%":"auto",position:"relative",width:domFullyLoaded?((partialVisbile||partialVisible)&&partialVisibilityGutter&&!notEnoughChildren?itemWidth-partialVisibilityGutter:itemWidth)+"px":"auto"},className:"react-multi-carousel-item "+(utils_1.getIfSlideIsVisbile(index,state)?"react-multi-carousel-item--active":"")+" "+itemClass},child)}))):null};exports["default"]=CarouselItems;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/Dots.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/Dots.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react"),clones_1=__webpack_require__(/*! ./utils/clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js"),dots_1=__webpack_require__(/*! ./utils/dots */ "./node_modules/react-multi-carousel/lib/utils/dots.js"),common_1=__webpack_require__(/*! ./utils/common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),Dots=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,getState=_a.getState,showDots=props.showDots,customDot=props.customDot,dotListClass=props.dotListClass,infinite=props.infinite,children=props.children;if(!showDots||common_1.notEnoughChildren(state))return null;var numberOfDotsToShow,currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,slidesToSlide=common_1.getSlidesToSlide(state,props),childrenArr=React.Children.toArray(children);numberOfDotsToShow=infinite?Math.ceil(childrenArr.length/slidesToSlide):Math.ceil((childrenArr.length-slidesToShow)/slidesToSlide)+1;var nextSlidesTable=dots_1.getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr),lookupTable=clones_1.getOriginalIndexLookupTableByClones(slidesToShow,childrenArr),currentSlides=lookupTable[currentSlide];return React.createElement("ul",{className:"react-multi-carousel-dot-list "+dotListClass},Array(numberOfDotsToShow).fill(0).map(function(_,index){var isActive,nextSlide;if(infinite){nextSlide=nextSlidesTable[index];var cloneIndex=lookupTable[nextSlide];isActive=currentSlides===cloneIndex||cloneIndex<=currentSlides&&currentSlides<cloneIndex+slidesToSlide}else{var maximumNextSlide=childrenArr.length-slidesToShow,possibileNextSlides=index*slidesToSlide;isActive=(nextSlide=maximumNextSlide<possibileNextSlides?maximumNextSlide:possibileNextSlides)===currentSlide||nextSlide<currentSlide&&currentSlide<nextSlide+slidesToSlide&&currentSlide<childrenArr.length-slidesToShow}return customDot?React.cloneElement(customDot,{index:index,active:isActive,key:index,onClick:function(){return goToSlide(nextSlide)},carouselState:getState()}):React.createElement("li",{"data-index":index,key:index,className:"react-multi-carousel-dot "+(isActive?"react-multi-carousel-dot--active":"")},React.createElement("button",{"aria-label":"Go to slide "+(index+1),onClick:function(){return goToSlide(nextSlide)}}))}))};exports["default"]=Dots;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var Carousel_1=__webpack_require__(/*! ./Carousel */ "./node_modules/react-multi-carousel/lib/Carousel.js");exports["default"]=Carousel_1.default;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/types.js":
/*!********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/types.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react");function isMouseMoveEvent(e){return"clientY"in e}exports.isMouseMoveEvent=isMouseMoveEvent;var Carousel=function(_super){function Carousel(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(Carousel,_super),Carousel}(React.Component);exports["default"]=Carousel;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/clones.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/clones.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
function getOriginalCounterPart(index,_a,childrenArr){var slidesToShow=_a.slidesToShow,currentSlide=_a.currentSlide;return childrenArr.length>2*slidesToShow?index+2*slidesToShow:currentSlide>=childrenArr.length?childrenArr.length+index:index}function getOriginalIndexLookupTableByClones(slidesToShow,childrenArr){if(childrenArr.length>2*slidesToShow){for(var table={},firstBeginningOfClones=childrenArr.length-2*slidesToShow,firstEndOfClones=childrenArr.length-firstBeginningOfClones,firstCount=firstBeginningOfClones,i=0;i<firstEndOfClones;i++)table[i]=firstCount,firstCount++;var secondBeginningOfClones=childrenArr.length+firstEndOfClones,secondEndOfClones=secondBeginningOfClones+childrenArr.slice(0,2*slidesToShow).length,secondCount=0;for(i=secondBeginningOfClones;i<=secondEndOfClones;i++)table[i]=secondCount,secondCount++;var originalEnd=secondBeginningOfClones,originalCounter=0;for(i=firstEndOfClones;i<originalEnd;i++)table[i]=originalCounter,originalCounter++;return table}table={};var totalSlides=3*childrenArr.length,count=0;for(i=0;i<totalSlides;i++)table[i]=count,++count===childrenArr.length&&(count=0);return table}function getClones(slidesToShow,childrenArr){return childrenArr.length<slidesToShow?childrenArr:childrenArr.length>2*slidesToShow?childrenArr.slice(childrenArr.length-2*slidesToShow,childrenArr.length).concat(childrenArr,childrenArr.slice(0,2*slidesToShow)):childrenArr.concat(childrenArr,childrenArr)}function getInitialSlideInInfiniteMode(slidesToShow,childrenArr){return childrenArr.length>2*slidesToShow?2*slidesToShow:childrenArr.length}function checkClonesPosition(_a,childrenArr,props){var isReachingTheEnd,currentSlide=_a.currentSlide,slidesToShow=_a.slidesToShow,itemWidth=_a.itemWidth,totalItems=_a.totalItems,nextSlide=0,nextPosition=0,isReachingTheStart=0===currentSlide,originalFirstSlide=childrenArr.length-(childrenArr.length-2*slidesToShow);return childrenArr.length<slidesToShow?(nextPosition=nextSlide=0,isReachingTheStart=isReachingTheEnd=!1):childrenArr.length>2*slidesToShow?((isReachingTheEnd=currentSlide>=originalFirstSlide+childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=-itemWidth*(nextSlide=originalFirstSlide+(childrenArr.length-2*slidesToShow)))):((isReachingTheEnd=currentSlide>=2*childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=props.showDots?-itemWidth*(nextSlide=childrenArr.length):-itemWidth*(nextSlide=totalItems-2*slidesToShow))),{isReachingTheEnd:isReachingTheEnd,isReachingTheStart:isReachingTheStart,nextSlide:nextSlide,nextPosition:nextPosition}}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.getOriginalCounterPart=getOriginalCounterPart,exports.getOriginalIndexLookupTableByClones=getOriginalIndexLookupTableByClones,exports.getClones=getClones,exports.getInitialSlideInInfiniteMode=getInitialSlideInInfiniteMode,exports.checkClonesPosition=checkClonesPosition;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/common.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var elementWidth_1=__webpack_require__(/*! ./elementWidth */ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js");function notEnoughChildren(state){var slidesToShow=state.slidesToShow;return state.totalItems<slidesToShow}function getInitialState(state,props){var flexBisis,domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,ssr=props.ssr,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);ssr&&deviceType&&!domFullyLoaded&&(flexBisis=elementWidth_1.getWidthFromDeviceType(deviceType,responsive));var shouldRenderOnSSR=Boolean(ssr&&deviceType&&!domFullyLoaded&&flexBisis);return{shouldRenderOnSSR:shouldRenderOnSSR,flexBisis:flexBisis,domFullyLoaded:domFullyLoaded,partialVisibilityGutter:elementWidth_1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType),shouldRenderAtAll:shouldRenderOnSSR||domFullyLoaded}}function getIfSlideIsVisbile(index,state){var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow;return currentSlide<=index&&index<currentSlide+slidesToShow}function getTransformForCenterMode(state,props,transformPlaceHolder){var transform=transformPlaceHolder||state.transform;return!props.infinite&&0===state.currentSlide||notEnoughChildren(state)?transform:transform+state.itemWidth/2}function isInLeftEnd(_a){return!(0<_a.currentSlide)}function isInRightEnd(_a){var currentSlide=_a.currentSlide,totalItems=_a.totalItems;return!(currentSlide+_a.slidesToShow<totalItems)}function getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder){void 0===partialVisibilityGutter&&(partialVisibilityGutter=0);var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,isRightEndReach=isInRightEnd(state),shouldRemoveRightGutter=!props.infinite&&isRightEndReach,baseTransform=transformPlaceHolder||state.transform;if(notEnoughChildren(state))return baseTransform;var transform=baseTransform+currentSlide*partialVisibilityGutter;return shouldRemoveRightGutter?transform+(state.containerWidth-(state.itemWidth-partialVisibilityGutter)*slidesToShow):transform}function getTransform(state,props,transformPlaceHolder){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,responsive=props.responsive,deviceType=props.deviceType,centerMode=props.centerMode,transform=transformPlaceHolder||state.transform,partialVisibilityGutter=elementWidth_1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType);return partialVisible||partialVisbile?getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder):centerMode?getTransformForCenterMode(state,props,transformPlaceHolder):transform}function getSlidesToSlide(state,props){var domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,slidesToScroll=props.slidesToSlide||1,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);return props.ssr&&props.deviceType&&!domFullyLoaded&&Object.keys(responsive).forEach(function(device){var slidesToSlide=responsive[device].slidesToSlide;deviceType===device&&slidesToSlide&&(slidesToScroll=slidesToSlide)}),domFullyLoaded&&Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,slidesToSlide=_a.slidesToSlide,max=breakpoint.max,min=breakpoint.min;slidesToSlide&&window.innerWidth>=min&&window.innerWidth<=max&&(slidesToScroll=slidesToSlide)}),slidesToScroll}exports.notEnoughChildren=notEnoughChildren,exports.getInitialState=getInitialState,exports.getIfSlideIsVisbile=getIfSlideIsVisbile,exports.getTransformForCenterMode=getTransformForCenterMode,exports.isInLeftEnd=isInLeftEnd,exports.isInRightEnd=isInRightEnd,exports.getTransformForPartialVsibile=getTransformForPartialVsibile,exports.getTransform=getTransform,exports.getSlidesToSlide=getSlidesToSlide;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/dots.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/dots.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var clones_1=__webpack_require__(/*! ./clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js"),common_1=__webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");function getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr){var table={},slidesToSlide=common_1.getSlidesToSlide(state,props);return Array(numberOfDotsToShow).fill(0).forEach(function(_,i){var nextSlide=clones_1.getOriginalCounterPart(i,state,childrenArr);if(0===i)table[0]=nextSlide;else{var now=table[i-1]+slidesToSlide;table[i]=now}}),table}exports.getLookupTableForNextSlides=getLookupTableForNextSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/elementWidth.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var hasWarnAboutTypo=!1;function getPartialVisibilityGutter(responsive,partialVisible,serverSideDeviceType,clientSideDeviceType){var gutter=0,deviceType=clientSideDeviceType||serverSideDeviceType;return partialVisible&&deviceType&&(!hasWarnAboutTypo&&"production"!=="development"&&responsive[deviceType].paritialVisibilityGutter&&(hasWarnAboutTypo=!0,console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")),gutter=responsive[deviceType].partialVisibilityGutter||responsive[deviceType].paritialVisibilityGutter),gutter}function getWidthFromDeviceType(deviceType,responsive){var itemWidth;responsive[deviceType]&&(itemWidth=(100/responsive[deviceType].items).toFixed(1));return itemWidth}function getItemClientSideWidth(props,slidesToShow,containerWidth){return Math.round(containerWidth/(slidesToShow+(props.centerMode?1:0)))}exports.getPartialVisibilityGutter=getPartialVisibilityGutter,exports.getWidthFromDeviceType=getWidthFromDeviceType,exports.getItemClientSideWidth=getItemClientSideWidth;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var clones_1=__webpack_require__(/*! ./clones */ "./node_modules/react-multi-carousel/lib/utils/clones.js");exports.getOriginalCounterPart=clones_1.getOriginalCounterPart,exports.getClones=clones_1.getClones,exports.checkClonesPosition=clones_1.checkClonesPosition,exports.getInitialSlideInInfiniteMode=clones_1.getInitialSlideInInfiniteMode;var elementWidth_1=__webpack_require__(/*! ./elementWidth */ "./node_modules/react-multi-carousel/lib/utils/elementWidth.js");exports.getWidthFromDeviceType=elementWidth_1.getWidthFromDeviceType,exports.getPartialVisibilityGutter=elementWidth_1.getPartialVisibilityGutter,exports.getItemClientSideWidth=elementWidth_1.getItemClientSideWidth;var common_1=__webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");exports.getInitialState=common_1.getInitialState,exports.getIfSlideIsVisbile=common_1.getIfSlideIsVisbile,exports.getTransformForCenterMode=common_1.getTransformForCenterMode,exports.getTransformForPartialVsibile=common_1.getTransformForPartialVsibile,exports.isInLeftEnd=common_1.isInLeftEnd,exports.isInRightEnd=common_1.isInRightEnd,exports.notEnoughChildren=common_1.notEnoughChildren,exports.getSlidesToSlide=common_1.getSlidesToSlide;var throttle_1=__webpack_require__(/*! ./throttle */ "./node_modules/react-multi-carousel/lib/utils/throttle.js");exports.throttle=throttle_1.default;var throwError_1=__webpack_require__(/*! ./throwError */ "./node_modules/react-multi-carousel/lib/utils/throwError.js");exports.throwError=throwError_1.default;var next_1=__webpack_require__(/*! ./next */ "./node_modules/react-multi-carousel/lib/utils/next.js");exports.populateNextSlides=next_1.populateNextSlides;var previous_1=__webpack_require__(/*! ./previous */ "./node_modules/react-multi-carousel/lib/utils/previous.js");exports.populatePreviousSlides=previous_1.populatePreviousSlides;var mouseOrTouchMove_1=__webpack_require__(/*! ./mouseOrTouchMove */ "./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js");exports.populateSlidesOnMouseTouchMove=mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
function populateSlidesOnMouseTouchMove(state,props,initialX,lastX,clientX,transformPlaceHolder){var direction,nextPosition,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,totalItems=state.totalItems,currentSlide=state.currentSlide,infinite=props.infinite,canContinue=!1,slidesHavePassedRight=Math.round((initialX-lastX)/itemWidth),slidesHavePassedLeft=Math.round((lastX-initialX)/itemWidth),isMovingLeft=initialX<clientX;if(clientX<initialX&&!!(slidesHavePassedRight<=slidesToShow)){direction="right";var translateXLimit=Math.abs(-itemWidth*(totalItems-slidesToShow)),nextTranslate=transformPlaceHolder-(lastX-clientX),isLastSlide=currentSlide===totalItems-slidesToShow;(Math.abs(nextTranslate)<=translateXLimit||isLastSlide&&infinite)&&(nextPosition=nextTranslate,canContinue=!0)}isMovingLeft&&slidesHavePassedLeft<=slidesToShow&&(direction="left",((nextTranslate=transformPlaceHolder+(clientX-lastX))<=0||0===currentSlide&&infinite)&&(canContinue=!0,nextPosition=nextTranslate));return{direction:direction,nextPosition:nextPosition,canContinue:canContinue}}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.populateSlidesOnMouseTouchMove=populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/next.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/next.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var common_1=__webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");function populateNextSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,slidesToShow=state.slidesToShow,currentSlide=state.currentSlide,itemWidth=state.itemWidth,totalItems=state.totalItems,slidesToSlide=common_1.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide+1+slidesHavePassed+slidesToShow+(0<slidesHavePassed?0:slidesToSlide);return nextPosition=nextMaximumSlides<=totalItems?-itemWidth*(nextSlides=currentSlide+slidesHavePassed+(0<slidesHavePassed?0:slidesToSlide)):totalItems<nextMaximumSlides&&currentSlide!==totalItems-slidesToShow?-itemWidth*(nextSlides=totalItems-slidesToShow):nextSlides=void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}exports.populateNextSlides=populateNextSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/previous.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/previous.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var React=__webpack_require__(/*! react */ "react"),common_1=__webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js"),common_2=__webpack_require__(/*! ./common */ "./node_modules/react-multi-carousel/lib/utils/common.js");function populatePreviousSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,currentSlide=state.currentSlide,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,children=props.children,showDots=props.showDots,infinite=props.infinite,slidesToSlide=common_1.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide-slidesHavePassed-(0<slidesHavePassed?0:slidesToSlide),additionalSlides=(React.Children.toArray(children).length-slidesToShow)%slidesToSlide;return nextPosition=0<=nextMaximumSlides?(nextSlides=nextMaximumSlides,showDots&&!infinite&&0<additionalSlides&&common_2.isInRightEnd(state)&&(nextSlides=currentSlide-additionalSlides),-itemWidth*nextSlides):nextSlides=nextMaximumSlides<0&&0!==currentSlide?0:void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}exports.populatePreviousSlides=populatePreviousSlides;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/throttle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/throttle.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var throttle=function(func,limit,setIsInThrottle){var inThrottle;return function(){var args=arguments;inThrottle||(func.apply(this,args),inThrottle=!0,"function"==typeof setIsInThrottle&&setIsInThrottle(!0),setTimeout(function(){inThrottle=!1,"function"==typeof setIsInThrottle&&setIsInThrottle(!1)},limit))}};exports["default"]=throttle;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/utils/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/utils/throwError.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
function throwError(state,props){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,centerMode=props.centerMode,ssr=props.ssr,responsive=props.responsive;if((partialVisbile||partialVisible)&&centerMode)throw new Error("center mode can not be used at the same time with partialVisible");if(!responsive)throw ssr?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(responsive&&"object"!=typeof responsive)throw new Error("responsive prop must be an object")}Object.defineProperty(exports, "__esModule", ({value:!0})),exports["default"]=throwError;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksp_carousel_ultimate"] = self["webpackChunksp_carousel_ultimate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map