/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/blocks/image-text/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/image-text/editor.scss ***!
  \*******************************************/
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
/*!****************************************!*\
  !*** ./src/blocks/image-text/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image-text/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);


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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)("headspin/image-text", {
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

    const onButtonLink1Change = newValue => setAttributes({
      btnLink1: newValue
    });

    const onButtonLink2Change = newValue => setAttributes({
      btnLink2: newValue
    });

    const onButtonText1Change = newValue => setAttributes({
      btnLink1: { ...attributes.btnLink1,
        title: newValue
      }
    });

    const onButtonText2Change = newValue => setAttributes({
      btnLink2: { ...attributes.btnLink2,
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Layout"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        margin: 0
      }
    }, "Use inner blocks"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      style: {
        marginTop: "16px"
      },
      label: "Freely add inner blocks inside this block",
      checked: attributes.useInnerBlocks,
      onChange: onUseInnerBlocksChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
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
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: `image-${attributes.imgPlacement} cols-${attributes.columnLayout}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('image-text__image', 'fit-image-container', {
        'img-set': attributes.imgURL
      }),
      style: {
        backgroundImage: attributes.imgURL ? `url(${attributes.imgURL})` : null,
        backgroundPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ['image'],
      addToGallery: true,
      value: attributes.imgID,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open
        }, attributes.imgURL ? __("Replace image") : __("Select image"));
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `image-text__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-text__content-wrapper"
    }, attributes.useInnerBlocks ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "image-text__subheading is-style-orange",
      value: attributes.subheading,
      onChange: onSubHeadingChange,
      placeholder: __("Subheading...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "image-text__heading",
      value: attributes.heading,
      onChange: onHeadingChange,
      placeholder: __("Heading...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "image-text__preamble",
      value: attributes.preamble,
      onChange: onPreambleChange,
      placeholder: __("Add a preamble here...")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-text__btn-group is-layout-flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: attributes.btnLink1 && attributes.btnLink1.url ? "Click to edit link" : "Click to set link",
      position: "top center",
      style: {
        display: attributes.btnLink1 && attributes.btnLink1.url ? "block" : "none"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wp-block-button__link", {
        "not-set": !(attributes.btnLink1 && attributes.btnLink1.url)
      }),
      onClick: () => setPopover(true)
    }, attributes.btnLink1 && attributes.btnLink1.title ? attributes.btnLink1.title : "Read more...", isSelected && showURLPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLPopover, {
      onClose: () => setPopover(false)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "button-link-popover"
    }, attributes.btnLink1 && attributes.btnLink1.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "button-link-popover__title-input",
      label: "Button text",
      value: attributes.btnLink1 && attributes.btnLink1.title ? attributes.btnLink1.title : "",
      onChange: onButtonText1Change
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkControl, {
      value: attributes.btnLink1,
      onChange: onButtonLink1Change,
      placeholder: __('Type URL')
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: attributes.btnLink2 && attributes.btnLink2.url ? "Click to edit link" : "Click to set link",
      position: "top center",
      style: {
        display: attributes.btnLink2 && attributes.btnLink2.url ? "block" : "none"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("wp-block-button__link", {
        "not-set": !(attributes.btnLink2 && attributes.btnLink2.url)
      }),
      onClick: () => setPopover2(true)
    }, attributes.btnLink2 && attributes.btnLink2.title ? attributes.btnLink2.title : "Read more...", isSelected && showURLPopover2 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLPopover, {
      onClose: () => setPopover2(false)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "button-link-popover"
    }, attributes.btnLink2 && attributes.btnLink2.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "button-link-popover__title-input",
      label: "Button text",
      value: attributes.btnLink2 && attributes.btnLink2.title ? attributes.btnLink2.title : "",
      onChange: onButtonText2Change
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkControl, {
      value: attributes.btnLink2,
      onChange: onButtonLink2Change,
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
  save: _ref3 => {
    let {
      attributes
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`image-${attributes.imgPlacement}`, `cols-${attributes.columnLayout}`, // attributes.align === "wide" ? "alignwide" : "alignfull",
      {
        "close-gap": attributes.removeMargins && attributes.align !== "wide"
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('image-text__image', 'fit-image-container'),
      style: {
        backgroundPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imgURL,
      alt: attributes.imgAlt,
      style: {
        objectPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%`
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `image-text__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-text__content-wrapper"
    }, attributes.useInnerBlocks ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, attributes.subheading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "image-text__subheading is-style-orange",
      value: attributes.subheading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "image-text__heading is-style-gradient",
      value: attributes.heading
    }), attributes.preamble && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: "image-text__preamble",
      value: attributes.preamble
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-text__btn-group is-layout-flex"
    }, attributes.btnLink1 && attributes.btnLink1.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: attributes.btnLink1.url
    }, attributes.btnLink1.title)), attributes.btnLink2 && attributes.btnLink2.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wp-block-button__link",
      href: attributes.btnLink2.url
    }, attributes.btnLink2.title)))))));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map