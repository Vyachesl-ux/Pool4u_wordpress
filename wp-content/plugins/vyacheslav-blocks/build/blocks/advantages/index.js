/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

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
/*!****************************************!*\
  !*** ./src/blocks/advantages/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
 // Import registerBlockType() from wp.blocks


const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  Fragment
} = wp.element;
const {
  RichText
} = wp.blockEditor;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "nonzero",
  d: "M21.011 8.498H3.002c-.569 0-1.001.464-1.001.999 0 .118-.105-.582 1.694 10.659.077.486.496.842.988.842h14.635c.492 0 .911-.356.988-.842 1.801-11.25 1.693-10.54 1.693-10.66 0-.553-.449-.991-.988-.998zm-.92 3.5-1.2 7.5H5.109l-1.2-7.5zm-.076-6.517H3.986c-.524 0-1.001.422-1.001 1.007 0 .081-.011.016.139 1.01h17.752c.152-1.012.139-.931.139-1.009 0-.58-.469-1.008-1-1.008zm-15.973-1h15.917c.057-.436.054-.426.054-.482 0-.671-.575-1.001-1.001-1.001H4.989c-.536 0-1.001.433-1.001 1 0 .056-.004.043.054.483z"
}));
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("headspin/advantages", {
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const onBlindsHeaderChange = newValue => setAttributes({
      blinds_header: newValue
    });

    const onSunphadeHeaderChange = newValue => setAttributes({
      sunphade_header: newValue
    });

    const onSunscreenHeaderChange = newValue => setAttributes({
      sunscreen_header: newValue
    });

    const onBlindsListChange = newValue => setAttributes({
      blinds_list: newValue
    });

    const onSunphadeListChange = newValue => setAttributes({
      sunphade_list: newValue
    });

    const onSunscreenListChange = newValue => setAttributes({
      sunscreen_list: newValue
    });

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/blinds.png`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h3",
      value: attributes.blinds_header,
      onChange: onBlindsHeaderChange,
      placeholder: __("Header...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.blinds_list,
      onChange: onBlindsListChange,
      placeholder: __("Description...")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/sunphade.png`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h3",
      value: attributes.sunphade_header,
      onChange: onSunphadeHeaderChange,
      placeholder: __("Header...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.sunphade_list,
      onChange: onSunphadeListChange,
      placeholder: __("Description...")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/sunscreen.png`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h3",
      value: attributes.sunscreen_header,
      onChange: onSunscreenHeaderChange,
      placeholder: __("Header...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.sunscreen_list,
      onChange: onSunscreenListChange,
      placeholder: __("Description...")
    })))));
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/blinds.png`,
      alt: "sunphade film technologies sketch",
      width: 190,
      height: 285
    })), attributes.blinds_header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h3",
      value: attributes.blinds_header
    }), attributes.blinds_list && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.blinds_list.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/sunphade.png`,
      alt: "sunphade film technologies sketch",
      width: 190,
      height: 285
    })), attributes.sunphade_header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h3",
      value: attributes.sunphade_header
    }), attributes.sunphade_list && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.sunphade_list.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advantages-content__item-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/sunscreen.png`,
      alt: "sunphade film technologies sketch",
      width: 190,
      height: 285
    })), attributes.sunscreen_header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h3",
      value: attributes.sunscreen_header
    }), attributes.sunscreen_list && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.sunscreen_list.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t))))));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map