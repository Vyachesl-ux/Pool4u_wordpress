/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_components/IconPicker/IconPicker.js":
/*!**************************************************!*\
  !*** ./src/_components/IconPicker/IconPicker.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IconPicker; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/_components/IconPicker/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/_components/IconPicker/icons.js");




/**
 * External dependencies
 */

const {
  isEmpty
} = lodash;
/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  useInstanceId
} = wp.compose;
const {
  Button,
  Icon
} = wp.components;
const {
  useState
} = wp.element;
/**
 * Internal dependencies
 */

const {
  BaseControl
} = wp.components;
function IconPicker(_ref) {
  let {
    help,
    label = null,
    hideLabelFromVision = false,
    onChange,
    size = 32,
    canClose = true,
    className,
    value,
    availableIcons = _icons__WEBPACK_IMPORTED_MODULE_3__["default"],
    isOpen = false,
    ...props
  } = _ref;
  const availableIconsArray = Object.keys(availableIcons);
  if (isEmpty(availableIconsArray)) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Ingen ikoner tilgjengelig."));
  const instanceId = useInstanceId(IconPicker);
  const id = `inspector-icon-picker-${instanceId}`;
  const iconSet = value && availableIconsArray.indexOf(value) > -1;
  const [showPopover, setPopover] = useState(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hs-icon-picker", className)
  }, iconSet && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: size,
    icon: availableIcons[value]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSecondary: true,
    isDestructive: iconSet,
    onClick: () => setPopover(!showPopover)
  }, iconSet ? __("Replace") : __("Set icon")), (isOpen || showPopover) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-popover-backdrop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-popover"
  }, canClose ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-popover-close",
    onClick: () => setPopover(false)
  }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Choose icon")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-popover-scroll-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icons-grid"
  }, availableIconsArray.map(iconName => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon-container",
    key: iconName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hs-icon",
    onClick: () => {
      setPopover(false);
      onChange(iconName);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: 48,
    icon: availableIcons[iconName]
  })))))))));
}

/***/ }),

/***/ "./src/_components/IconPicker/IconPickerSave.js":
/*!******************************************************!*\
  !*** ./src/_components/IconPicker/IconPickerSave.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/_components/IconPicker/icons.js");


const {
  Icon
} = wp.components;

const IconPickerSave = _ref => {
  let {
    iconName,
    availableIcons = _icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    height = 72,
    width = 72
  } = _ref;
  if (!availableIcons[iconName]) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    width: width,
    height: height,
    icon: availableIcons[iconName]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IconPickerSave);

/***/ }),

/***/ "./src/_components/IconPicker/icons.js":
/*!*********************************************!*\
  !*** ./src/_components/IconPicker/icons.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  dollar: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#006a6b",
    d: "M34.7 25.3C33.2 23.8 31.1 23 29 23h-4V11h9c.5 0 1-.5 1-1s-.5-1-1-1h-9V2c0-.5-.5-1-1-1s-1 .5-1 1v7h-4c-2.1 0-4.2.8-5.7 2.3-1.5 1.5-2.3 3.6-2.3 5.7s.8 4.2 2.3 5.7c1.5 1.5 3.5 2.3 5.7 2.3h4v12H12c-.5 0-1 .5-1 1s.5 1 1 1h11v7c0 .5.5 1 1 1s1-.5 1-1v-7h4c2.1 0 4.2-.8 5.7-2.3 1.5-1.5 2.3-3.5 2.3-5.7s-.8-4.2-2.3-5.7zM19 23c-1.6 0-3.1-.6-4.2-1.8-1.2-1.1-1.8-2.6-1.8-4.2s.6-3.1 1.8-4.2c1.1-1.1 2.6-1.8 4.2-1.8h4v12h-4zm14.2 12.2C32.1 36.4 30.6 37 29 37h-4V25h4c1.6 0 3.1.6 4.2 1.8 1.1 1.1 1.8 2.6 1.8 4.2s-.6 3.1-1.8 4.2z"
  })),
  tool: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#006a6b",
    d: "M10.2 43c-1.4 0-2.7-.5-3.7-1.5S5 39.2 5 37.8s.5-2.7 1.5-3.7l13.3-13.3c-.9-2.2-1.1-4.7-.7-7 .5-2.6 1.7-5 3.6-6.9C24.6 5 27 3.8 29.6 3.3c2.6-.5 5.3-.1 7.7.9.3.1.5.4.6.7.1.3 0 .7-.3.9l-7.5 7.5-.7-.7.7.7c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l3.2 3.2c.4.4 1 .4 1.4 0l7.5-7.5c.2-.2.6-.3.9-.3.3.1.6.3.7.6 1.1 2.4 1.4 5.1.9 7.7-.5 2.6-1.7 5-3.6 6.9-1.9 1.9-4.2 3.1-6.9 3.6-2.4.4-4.8.2-7-.7L13.9 41.5c-.9 1-2.3 1.5-3.7 1.5zM32 5c-.7 0-1.3.1-2 .2-2.2.4-4.2 1.5-5.8 3-1.6 1.6-2.6 3.6-3 5.8-.4 2.2-.1 4.5.8 6.5.2.4.1.8-.2 1.1L7.9 35.5c-.6.6-.9 1.4-.9 2.3s.3 1.7.9 2.3c1.2 1.2 3.4 1.2 4.6 0l13.8-13.8c.3-.3.7-.4 1.1-.2 2 .9 4.3 1.2 6.5.8 2.2-.4 4.2-1.5 5.8-3 1.6-1.6 2.6-3.6 3-5.8.3-1.7.2-3.5-.3-5.1L36 19.4c-1.1 1.1-3.1 1.1-4.2 0l-3.2-3.2c-.6-.6-.9-1.3-.9-2.1s.3-1.5.9-2.1L35 5.6c-.9-.5-1.9-.6-3-.6zm-2.6 7.6z"
  })),
  eye: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#006a6b",
    d: "M24 41C9.5 41 1.4 25.1 1.1 24.4c-.1-.3-.1-.6 0-.9C1.4 22.9 9.5 7 24 7c14.5 0 22.6 15.9 22.9 16.6.1.3.1.6 0 .9-.3.6-8.4 16.5-22.9 16.5zM3.1 24C4.5 26.5 12 39 24 39c11.9 0 19.5-12.5 20.9-15-1.4-2.5-9-15-20.9-15C12.1 9 4.5 21.5 3.1 24z M24 31c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"
  })),
  home: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#006a6b",
    d: "m42.6 17.2-18-14c-.4-.3-.9-.3-1.2 0l-18 14c-.3.2-.4.5-.4.8v22c0 1.3.5 2.6 1.5 3.5.9 1 2.2 1.5 3.5 1.5h28c1.3 0 2.6-.5 3.5-1.5.9-.9 1.5-2.2 1.5-3.5V18c0-.3-.1-.6-.4-.8zM29 43H19V25h10v18zm12-3c0 .8-.3 1.6-.9 2.1s-1.3.9-2.1.9h-7V24c0-.5-.5-1-1-1H18c-.5 0-1 .5-1 1v19h-7c-.8 0-1.5-.3-2.1-.9-.6-.5-.9-1.3-.9-2.1V18.5L24 5.3l17 13.2V40z"
  })),
  thermometer: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#006a6b",
    d: "M23 47c-2.1 0-4.2-.7-6-2-1.7-1.3-3-3.1-3.6-5.1s-.6-4.3.2-6.3c.7-1.8 1.9-3.5 3.4-4.6V7c0-1.6.6-3.1 1.8-4.2C19.9 1.6 21.4 1 23 1s3.1.6 4.2 1.8C28.4 3.9 29 5.4 29 7v22c1.6 1.2 2.8 2.8 3.4 4.6.7 2 .8 4.2.2 6.3-.6 2-1.9 3.9-3.6 5.1-1.8 1.3-3.9 2-6 2zm0-44c-1.1 0-2.1.4-2.8 1.2-.8.7-1.2 1.7-1.2 2.8v22.5c0 .3-.2.6-.4.8-1.4.9-2.5 2.4-3.1 4-.6 1.6-.6 3.4-.1 5s1.5 3.1 2.9 4.1c1.4 1 3.1 1.6 4.8 1.6s3.4-.6 4.8-1.6 2.4-2.5 2.9-4.1c.5-1.6.5-3.4-.1-5s-1.7-3-3.1-4c-.3-.2-.4-.5-.4-.8V7c0-1.1-.4-2.1-1.2-2.8-.9-.8-1.9-1.2-3-1.2z"
  }))
});

/***/ }),

/***/ "./src/_components/VimeoBackground/VimeoBackground.js":
/*!************************************************************!*\
  !*** ./src/_components/VimeoBackground/VimeoBackground.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// const { Spinner } = wp.components;
const VimeoBackground = _ref => {
  let {
    videoID,
    width,
    height,
    error,
    placeholder,
    placeholderPosition
  } = _ref;
  const style = {
    paddingBottom: `${height / width * 100}%`,
    backgroundImage: placeholder ? `url(${placeholder})` : null,
    backgroundPosition: placeholder && placeholderPosition ? placeholderPosition : null
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-background"
  }, error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "error"
  }, error), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vimeo-video"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vimeo-video__wrapper",
    style: style
  }, videoID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: `https://player.vimeo.com/video/${videoID}?background=1`,
    className: "vimeo-video__video",
    "data-height": height,
    "data-width": width,
    frameborder: "0",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowfullscreen: true
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (VimeoBackground);

/***/ }),

/***/ "./src/_components/VimeoBackground/VimeoBackgroundControl.js":
/*!*******************************************************************!*\
  !*** ./src/_components/VimeoBackground/VimeoBackgroundControl.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useVimeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVimeo */ "./src/_components/VimeoBackground/useVimeo.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/_components/VimeoBackground/editor.scss");


const {
  useInstanceId
} = wp.compose;
const {
  forwardRef
} = wp.element;
const {
  Button
} = wp.components;




const VimeoBackgroundControl = (_ref, ref) => {
  let {
    label,
    value,
    onChange,
    hideLabelFromVision,
    help,
    className,
    onLoad,
    ...props
  } = _ref;
  const instanceId = useInstanceId(VimeoBackgroundControl);
  const id = `inspector-vimeo-background-control-${instanceId}`;

  const handleKeyDown = e => {
    if (e.keyCode === 13) (0,_useVimeo__WEBPACK_IMPORTED_MODULE_3__["default"])(value, onLoad);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "vimeo-background-control__input-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "components-text-control__input",
    type: "text",
    id: id,
    value: value,
    onChange: e => onChange(e.target.value),
    onKeyDown: handleKeyDown,
    ref: ref
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
    icon: "saved",
    onClick: () => (0,_useVimeo__WEBPACK_IMPORTED_MODULE_3__["default"])(value, onLoad),
    isPrimary: true
  })));
};

VimeoBackgroundControl.defaultAttributes = {
  videoID: null,
  width: null,
  height: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (forwardRef(VimeoBackgroundControl));

/***/ }),

/***/ "./src/_components/VimeoBackground/useVimeo.js":
/*!*****************************************************!*\
  !*** ./src/_components/VimeoBackground/useVimeo.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const useVimeo = (url, onLoad) => {
  fetch(`https://vimeo.com/api/oembed.json?url=${url}`).then(response => {
    if (!response.ok) throw Error("Could not get the Video");
    return response.json();
  }).then(data => {
    onLoad({
      videoID: data.video_id,
      width: data.width,
      height: data.height,
      isLoading: false,
      error: null
    });
  }).catch(e => {
    onLoad({
      videoID: null,
      width: null,
      height: null,
      isLoading: false,
      error: e.message
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useVimeo);

/***/ }),

/***/ "./src/_components/index.js":
/*!**********************************!*\
  !*** ./src/_components/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconPicker": function() { return /* reexport safe */ _IconPicker_IconPicker__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "IconPickerSave": function() { return /* reexport safe */ _IconPicker_IconPickerSave__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "VimeoBackground": function() { return /* reexport safe */ _VimeoBackground_VimeoBackground__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "VimeoBackgroundControl": function() { return /* reexport safe */ _VimeoBackground_VimeoBackgroundControl__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _IconPicker_IconPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconPicker/IconPicker */ "./src/_components/IconPicker/IconPicker.js");
/* harmony import */ var _IconPicker_IconPickerSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconPicker/IconPickerSave */ "./src/_components/IconPicker/IconPickerSave.js");
/* harmony import */ var _VimeoBackground_VimeoBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VimeoBackground/VimeoBackground */ "./src/_components/VimeoBackground/VimeoBackground.js");
/* harmony import */ var _VimeoBackground_VimeoBackgroundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VimeoBackground/VimeoBackgroundControl */ "./src/_components/VimeoBackground/VimeoBackgroundControl.js");





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

/***/ "./src/_components/IconPicker/editor.scss":
/*!************************************************!*\
  !*** ./src/_components/IconPicker/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/_components/VimeoBackground/editor.scss":
/*!*****************************************************!*\
  !*** ./src/_components/VimeoBackground/editor.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

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
/*!***************************************!*\
  !*** ./src/blocks/icon-info/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components */ "./src/_components/index.js");


/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
 // import "./editor.scss";

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  Fragment
} = wp.element;
const {
  RichText,
  useBlockProps
} = wp.blockEditor;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22 14H2v-2h20v2zm-2 1H2v1.8h18V15zm0 2.6H2v1.8h18v-1.8zm0 2.6H2V22h18v-1.8zM12 5.5c0-.8-.7-1.5-1.5-1.5S9 4.7 9 5.5 9.7 7 10.5 7 12 6.3 12 5.5zM8 5c0-1.7-1.3-3-3-3S2 3.3 2 5s1.3 3 3 3 3-1.3 3-3zm3 4c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
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

registerBlockType("headspin/icon-info", {
  icon: icon,
  edit: _ref => {
    let {
      className,
      attributes,
      setAttributes
    } = _ref;

    const onIconChange = newValue => setAttributes({
      icon: newValue
    });

    const onHeadingChange = newValue => setAttributes({
      heading: newValue
    });

    const onBodyChange = newValue => setAttributes({
      body: newValue
    });

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-info-list__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-info__header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.IconPicker, {
      value: attributes.icon,
      onChange: onIconChange,
      size: 48
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-info__body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "icon-info__heading semibold",
      value: attributes.heading,
      onChange: onHeadingChange,
      placeholder: __("Write something..."),
      withoutInteractiveFormatting: true,
      allowedFormats: []
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "icon-info__body-text",
      value: attributes.body,
      onChange: onBodyChange,
      placeholder: __("Write something..."),
      withoutInteractiveFormatting: true,
      allowedFormats: []
    })))));
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-info__header"
    }, !attributes.icon ? null : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.IconPickerSave, {
      iconName: attributes.icon,
      height: 48,
      width: 48
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-info__body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "icon-info__heading",
      value: attributes.heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: "icon-info__body-text",
      value: attributes.body
    })));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map