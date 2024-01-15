/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const stretchFullWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchFullWidth);
//# sourceMappingURL=stretch-full-width.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stretch-wide.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stretch-wide.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const stretchWide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchWide);
//# sourceMappingURL=stretch-wide.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/image-text-slider/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/image-text-slider/editor.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

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
/*!***********************************************!*\
  !*** ./src/blocks/image-text-slider/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image-text-slider/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/stretch-wide.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js");


/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.


 // Import registerBlockType() from wp.blocks



const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  Fragment,
  useState
} = wp.element;
const {
  Button,
  PanelBody,
  PanelRow,
  __experimentalRadio,
  __experimentalRadioGroup,
  TextControl,
  ToggleControl,
  Tooltip,
  FocalPointPicker,
  DropdownMenu
} = wp.components;
const Radio = __experimentalRadio;
const RadioGroup = __experimentalRadioGroup;
const {
  RichText,
  InspectorControls,
  __experimentalLinkControl,
  URLPopover,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  BlockControls
} = wp.blockEditor;
const LinkControl = __experimentalLinkControl;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13 20H0V4h13v16zm11-9h-8v2h8v-2zm0 4h-8v2h8v-2zm0-8h-8v2h8V7z"
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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)("headspin/slider-text", {
  icon: icon,

  getEditWrapperProps(attributes) {
    var _attributes$align;

    return {
      'data-align': (_attributes$align = attributes.align) !== null && _attributes$align !== void 0 ? _attributes$align : "full"
    };
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  edit: _ref => {
    let {
      attributes,
      setAttributes,
      isSelected
    } = _ref;

    const onSubHeadingChange = newValue => setAttributes({
      subheading: newValue
    });

    const onHeadingChange = newValue => setAttributes({
      heading: newValue
    });

    const onPreambleChange = newValue => setAttributes({
      preamble: newValue
    });

    const onButtonLinkChange = newValue => setAttributes({
      btnLink: newValue
    });

    const onProtectionChange = newValue => setAttributes({
      protection: newValue
    });

    const onBlindsChange = newValue => setAttributes({
      blinds: newValue
    });

    const onSunscreensChange = newValue => setAttributes({
      sunscreens: newValue
    });

    const onSunphadeChange = newValue => setAttributes({
      sunphade: newValue
    });

    const onButtonTextChange = newValue => setAttributes({
      btnLink: { ...attributes.btnLink,
        title: newValue
      }
    });

    const onImgPlacementChange = newValue => setAttributes({
      imgPlacement: newValue
    });

    const onImgPositionChange = newValue => setAttributes({
      imgPosition: newValue
    });

    const onColumnLayoutChange = newValue => setAttributes({
      columnLayout: newValue
    });

    const onUseInnerBlocksChange = newValue => setAttributes({
      useInnerBlocks: newValue
    });

    const onRemoveMarginsChange = newValue => setAttributes({
      removeMargins: newValue
    });

    const [showURLPopover, setPopover] = useState(false);
    const [showURLPopover2, setPopover2] = useState(false);

    const onFileSelect = img => {
      setAttributes({
        imgURL: "full" in img.sizes ? img.sizes.full.url : img.url,
        imgID: img.id,
        imgAlt: img.alt
      });
    };

    const positions = [{
      label: __("Left"),
      value: "left"
    }, {
      label: __("Right"),
      value: "right"
    }];
    const layouts = [{
      label: "45/55",
      value: "4555"
    }, {
      label: "50/50",
      value: "5050"
    }, {
      label: "55/45",
      value: "5545"
    }];
    const allowedBlocks = ["core/heading", "core/paragraph", "core/list", "core/quote", "core/spacer", "core/buttons"];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      icon: attributes.align === "wide" ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "Change alignment",
      className: "image-text-alignment-dropdown",
      controls: [{
        title: "Full width",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        isActive: attributes.align !== "wide",
        onClick: () => setAttributes({
          align: "full"
        })
      }, {
        title: "Wide width",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        isActive: attributes.align === "wide",
        onClick: () => setAttributes({
          align: "wide"
        })
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Layout"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        margin: "16px 0 0"
      }
    }, "Column layout"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioGroup, {
      onChange: onColumnLayoutChange,
      defaultChecked: "5050",
      checked: attributes.columnLayout
    }, layouts.map(layout => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Radio, {
      value: layout.value,
      key: layout.value
    }, layout.label))), attributes.align !== "wide" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        margin: "16px 0 0"
      }
    }, "Remove margins"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      style: {
        marginTop: "16px"
      },
      label: "Remove margins to next and previous block",
      checked: attributes.removeMargins,
      onChange: onRemoveMarginsChange
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Image position"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioGroup, {
      label: __("Image position"),
      onChange: onImgPlacementChange,
      defaultChecked: "left",
      checked: attributes.imgPlacement
    }, positions.map(position => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Radio, {
      value: position.value,
      key: position.value
    }, position.label))), attributes.imgID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        marginTop: '16px'
      }
    }, "Focus point"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FocalPointPicker, {
      url: attributes.imgURL,
      dimension: {
        width: 400,
        height: 100
      },
      value: attributes.imgPosition,
      onChange: onImgPositionChange
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('slider-text__image', 'fit-image-container')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "swiper-slide",
      src: `/wp-content/themes/sunphade/assets/images/slider_galery/1.png`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-autoplay-option"
    }, "Choose your solar control"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper protection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No protection"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.protection,
      onChange: onProtectionChange,
      placeholder: __("Protection description...")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper blinds"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Blinds"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.blinds,
      onChange: onBlindsChange,
      placeholder: __("Protection description...")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper sunscreens"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Screens"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.sunscreens,
      onChange: onSunscreensChange,
      placeholder: __("Protection description...")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper sunphade"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Sunphade"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: attributes.sunphade,
      onChange: onSunphadeChange,
      placeholder: __("Protection description...")
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `slider-text__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-text__content-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `/wp-content/themes/sunphade/assets/images/slider-text-icon.png`
    }), attributes.useInnerBlocks ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "slider-text__subheading",
      value: attributes.subheading,
      onChange: onSubHeadingChange,
      placeholder: __("Subheading...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h1",
      className: "slider-text__heading is-style-gradient",
      value: attributes.heading,
      onChange: onHeadingChange,
      placeholder: __("Heading...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "slider-text__preamble",
      value: attributes.preamble,
      onChange: onPreambleChange,
      placeholder: __("Add a preamble here...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-text__btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: attributes.btnLink && attributes.btnLink.url ? "Click to edit link" : "Click to set link",
      position: "top center",
      style: {
        display: attributes.btnLink && attributes.btnLink.url ? "block" : "none"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wp-block-button__link", {
        "not-set": !(attributes.btnLink && attributes.btnLink.url)
      }),
      onClick: () => setPopover(true)
    }, attributes.btnLink && attributes.btnLink.title ? attributes.btnLink.title : "Read more...", isSelected && showURLPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLPopover, {
      onClose: () => setPopover(false)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "button-link-popover"
    }, attributes.btnLink && attributes.btnLink.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "button-link-popover__title-input",
      label: "Button text",
      value: attributes.btnLink && attributes.btnLink.title ? attributes.btnLink.title : "",
      onChange: onButtonTextChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkControl, {
      value: attributes.btnLink,
      onChange: onButtonLinkChange,
      placeholder: __('Type URL')
    }))))))))))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(attributes.align === "wide" ? "alignwide" : "alignfull", {
        "close-gap": attributes.removeMargins && attributes.align !== "wide"
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('slider-text__image', 'fit-image-container', 'swiper-wrapper')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "swiper-slide",
      src: "/wp-content/themes/sunphade/assets/images/slider_galery/2.webp",
      alt: attributes.imgAlt,
      "data-protection": "sunphade"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "swiper-slide",
      src: "/wp-content/themes/sunphade/assets/images/slider_galery/1.webp",
      alt: attributes.imgAlt,
      "data-protection": "protection"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "swiper-slide",
      src: "/wp-content/themes/sunphade/assets/images/slider_galery/4.webp",
      alt: attributes.imgAlt,
      "data-protection": "blinds"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "swiper-slide",
      src: "/wp-content/themes/sunphade/assets/images/slider_galery/3.webp",
      alt: attributes.imgAlt,
      "data-protection": "sunscreens"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-autoplay-option"
    }, "Choose your solar control"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper protection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description "
    }, attributes.protection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.protection.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper blinds"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description "
    }, attributes.blinds && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.blinds.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper sunscreens"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description "
    }, attributes.sunscreens && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.sunscreens.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description-wrapper sunphade"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "protection-description "
    }, attributes.sunphade && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, attributes.sunphade.split("<br>").map(t => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, t))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-pagination"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `slider-text__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-text__content-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/sunphade/assets/images/slider-text-icon.webp",
      alt: "sunphade icon",
      width: 42,
      height: 64
    }), attributes.useInnerBlocks ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, attributes.subheading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: "slider-text__subheading",
      value: attributes.subheading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h1",
      className: "slider-text__heading is-style-gradient",
      value: attributes.heading
    }), attributes.preamble && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: "slider-text__preamble",
      value: attributes.preamble
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-text__btn-group"
    }, attributes.btnLink && attributes.btnLink.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: attributes.btnLink.url
    }, attributes.btnLink.title)))))));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map