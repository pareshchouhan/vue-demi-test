(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-cumulio-dashboard"] = factory(require("vue"));
	else
		root["vue-cumulio-dashboard"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "004f":
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__("c42f");
var tryToString = __webpack_require__("4912");

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "01ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("92ae");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7326")(module)))

/***/ }),

/***/ "0446":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("da06");
var getMethod = __webpack_require__("60de");
var Iterators = __webpack_require__("5bb7");
var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "0481":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("b495");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0659":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var $parseInt = __webpack_require__("4243");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "083f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");
var isSymbol = __webpack_require__("cfd1");
var getMethod = __webpack_require__("60de");
var ordinaryToPrimitive = __webpack_require__("eba0");
var wellKnownSymbol = __webpack_require__("7d53");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "0a1e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("5428");
var definePropertyModule = __webpack_require__("abdf");
var wellKnownSymbol = __webpack_require__("7d53");
var DESCRIPTORS = __webpack_require__("d4cb");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "0c47":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("c91c");
var enumBugKeys = __webpack_require__("b17e");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "0d9f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("d331").PROPER;
var redefine = __webpack_require__("b8ba");
var anObject = __webpack_require__("157c");
var $toString = __webpack_require__("2a3e");
var fails = __webpack_require__("72df");
var flags = __webpack_require__("abfd");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "0e39":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("7a25");
var isCallable = __webpack_require__("3ce8");
var toObject = __webpack_require__("37d1");
var sharedKey = __webpack_require__("332c");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("802e");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "0e93":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "0ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "130d":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "1543":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var global = __webpack_require__("f498");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "157c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "185a":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var propertyIsEnumerableModule = __webpack_require__("e129");
var createPropertyDescriptor = __webpack_require__("9618");
var toIndexedObject = __webpack_require__("378c");
var toPropertyKey = __webpack_require__("feca");
var hasOwn = __webpack_require__("7a25");
var IE8_DOM_DEFINE = __webpack_require__("7c3f");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "189b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var wellKnownSymbol = __webpack_require__("7d53");
var V8_VERSION = __webpack_require__("4fed");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/lib/index.ts
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);
__webpack_require__.d(lib_namespaceObject, "CumulioDashboard", function() { return cumulio_dashboard; });

// NAMESPACE OBJECT: ./src/entry.esm.ts
var entry_esm_namespaceObject = {};
__webpack_require__.r(entry_esm_namespaceObject);
__webpack_require__.d(entry_esm_namespaceObject, "default", function() { return entry_esm; });
__webpack_require__.d(entry_esm_namespaceObject, "CumulioDashboard", function() { return cumulio_dashboard; });
__webpack_require__.d(entry_esm_namespaceObject, "CumulioService", function() { return cumulio_service; });

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("405b")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("6559");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/vue-demi/lib/index.mjs
var lib = __webpack_require__("612a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/cache-loader/dist/cjs.js??ref--13-0!D:/cumul.io/cumulio-libs/node_modules/thread-loader/dist/cjs.js!D:/cumul.io/cumulio-libs/node_modules/babel-loader/lib??ref--13-2!D:/cumul.io/cumulio-libs/node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-3!D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!D:/cumul.io/cumulio-libs/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=template&id=15ead0e0&ts=true

var _hoisted_1 = ["id"];
var _hoisted_2 = ["id"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["id", "name", "src"];
var _hoisted_5 = ["id"];
var _hoisted_6 = {
  "class": "cio-error"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    id: 'dashboard-' + _ctx.containerId,
    ref: "container",
    "class": "dashboard-container",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.containerStyles)
  }, [_ctx.editMode && _ctx.editable || _ctx.dashboardSlug || _ctx.dashboardId ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, [!_ctx.error && !_ctx.dashboardError ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    "class": "cio-container-loader",
    id: 'cio-container-loader-' + _ctx.paramsId,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.loaderStyle)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    "class": "cio-loader",
    id: 'cio-loader-' + _ctx.paramsId,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.cioLoaderStyles)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    "class": "cio-lc",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.ciolcStyles)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    "class": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["cio-loading-circle", {
      itemEmbedding: _ctx.params.itemEmbedding
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.cioLoadingCircleStyles)
  }, null, 6), !_ctx.params.itemEmbedding ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    "class": "cio-loading-message",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      color: _ctx.loaderFontColor
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.msg), 5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)], 12, _hoisted_3)], 12, _hoisted_2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("iframe", {
    "class": "cio-embed-dashboard",
    id: _ctx.iframeId,
    name: _ctx.iframeId,
    src: _ctx.sanitizedUrl,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.iframeStyle),
    ref: "iframe",
    frameborder: "0"
  }, null, 12, _hoisted_4)], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 12, _hoisted_1), _ctx.error ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    id: 'cio-error: ' + _ctx.paramsId
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.cioError), 1)], 8, _hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=template&id=15ead0e0&ts=true

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("0659");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("8f0b");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("fa8c");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("8d0d");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("7004");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("0d9f");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.date.now.js
var es_date_now = __webpack_require__("fbf3");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("9a51");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("2aa5");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("32f5");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("beb4");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("f8a5");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("26d3");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("c78b");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("2d6d");

// CONCATENATED MODULE: ./src/lib/cumulio-service.ts








var cumulio_service_CumulioService = /*#__PURE__*/function () {
  function CumulioService() {
    _classCallCheck(this, CumulioService);

    this.components = [];
  }
  /* ------------------
  | External Methods |
  ------------------*/
  // // Get all active dashboards


  _createClass(CumulioService, [{
    key: "getDashboards",
    value: function getDashboards() {
      return Promise.resolve(this.components);
    }
    /* --------------------
    | Set Cumulio Object |
    --------------------*/

  }, {
    key: "_setComponentContext",
    value: function _setComponentContext(vueComponentContext) {
      if (!this.components.includes(vueComponentContext)) {
        this.components.push(vueComponentContext);
      }
    } // remove component context from array after unmounting

  }, {
    key: "_removeComponentContext",
    value: function _removeComponentContext(vueComponentContext) {
      if (this.components.includes(vueComponentContext)) {
        this.components = this.components.filter(function (context) {
          return context !== vueComponentContext;
        });
      }
    }
  }]);

  return CumulioService;
}();

/* harmony default export */ var cumulio_service = (new cumulio_service_CumulioService());
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ var lodash_es_eq = (eq);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = (ListCache);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_root.js
var _root = __webpack_require__("7f0d");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root["a" /* default */].Symbol;

/* harmony default export */ var _Symbol = (_Symbol_Symbol);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ var lodash_es_isFunction = (isFunction);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ var _isMasked = (isMasked);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ var _toSource = (toSource);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var Map = _getNative(_root["a" /* default */], 'Map');

/* harmony default export */ var _Map = (Map);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ var _isKeyable = (isKeyable);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = (MapCache);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = (Stack);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ var _arrayEach = (arrayEach);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ var _defineProperty = (defineProperty);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ var _copyObject = (copyObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = (isArguments);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ var lodash_es_isArray = (isArray);

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("4cf0");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ var _isIndex = (isIndex);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    _baseIsTypedArray_funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__("01ff");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ var _nativeKeys = (nativeKeys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeys = (baseKeys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ var lodash_es_keys = (keys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, lodash_es_keys(source), object);
}

/* harmony default export */ var _baseAssign = (baseAssign);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, lodash_es_keysIn(source), object);
}

/* harmony default export */ var _baseAssignIn = (baseAssignIn);

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__("d6f0");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ var _copyArray = (copyArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ var _arrayFilter = (arrayFilter);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ var lodash_es_stubArray = (stubArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ var _getSymbols = (getSymbols);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

/* harmony default export */ var _copySymbols = (copySymbols);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ var _arrayPush = (arrayPush);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

/* harmony default export */ var _getSymbolsIn = (getSymbolsIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

/* harmony default export */ var _copySymbolsIn = (copySymbolsIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ var _baseGetAllKeys = (baseGetAllKeys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ var _getAllKeys = (getAllKeys);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}

/* harmony default export */ var _getAllKeysIn = (getAllKeysIn);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root["a" /* default */], 'DataView');

/* harmony default export */ var _DataView = (DataView);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root["a" /* default */], 'Promise');

/* harmony default export */ var _Promise = (_Promise_Promise);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var _Set_Set = _getNative(_root["a" /* default */], 'Set');

/* harmony default export */ var _Set = (_Set_Set);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root["a" /* default */], 'WeakMap');

/* harmony default export */ var _WeakMap = (WeakMap);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map && getTag(new _Map) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ var _getTag = (getTag);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var _initCloneArray_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = _initCloneArray_objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ var _initCloneArray = (initCloneArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root["a" /* default */].Uint8Array;

/* harmony default export */ var _Uint8Array = (Uint8Array);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ var _cloneDataView = (cloneDataView);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ var _cloneRegExp = (cloneRegExp);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ var _cloneSymbol = (cloneSymbol);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var _initCloneByTag_boolTag = '[object Boolean]',
    _initCloneByTag_dateTag = '[object Date]',
    _initCloneByTag_mapTag = '[object Map]',
    _initCloneByTag_numberTag = '[object Number]',
    _initCloneByTag_regexpTag = '[object RegExp]',
    _initCloneByTag_setTag = '[object Set]',
    _initCloneByTag_stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var _initCloneByTag_arrayBufferTag = '[object ArrayBuffer]',
    _initCloneByTag_dataViewTag = '[object DataView]',
    _initCloneByTag_float32Tag = '[object Float32Array]',
    _initCloneByTag_float64Tag = '[object Float64Array]',
    _initCloneByTag_int8Tag = '[object Int8Array]',
    _initCloneByTag_int16Tag = '[object Int16Array]',
    _initCloneByTag_int32Tag = '[object Int32Array]',
    _initCloneByTag_uint8Tag = '[object Uint8Array]',
    _initCloneByTag_uint8ClampedTag = '[object Uint8ClampedArray]',
    _initCloneByTag_uint16Tag = '[object Uint16Array]',
    _initCloneByTag_uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case _initCloneByTag_arrayBufferTag:
      return _cloneArrayBuffer(object);

    case _initCloneByTag_boolTag:
    case _initCloneByTag_dateTag:
      return new Ctor(+object);

    case _initCloneByTag_dataViewTag:
      return _cloneDataView(object, isDeep);

    case _initCloneByTag_float32Tag: case _initCloneByTag_float64Tag:
    case _initCloneByTag_int8Tag: case _initCloneByTag_int16Tag: case _initCloneByTag_int32Tag:
    case _initCloneByTag_uint8Tag: case _initCloneByTag_uint8ClampedTag: case _initCloneByTag_uint16Tag: case _initCloneByTag_uint32Tag:
      return _cloneTypedArray(object, isDeep);

    case _initCloneByTag_mapTag:
      return new Ctor;

    case _initCloneByTag_numberTag:
    case _initCloneByTag_stringTag:
      return new Ctor(object);

    case _initCloneByTag_regexpTag:
      return _cloneRegExp(object);

    case _initCloneByTag_setTag:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ var _initCloneByTag = (initCloneByTag);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!lodash_es_isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ var _baseCreate = (baseCreate);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsMap_mapTag;
}

/* harmony default export */ var _baseIsMap = (baseIsMap);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

/* harmony default export */ var lodash_es_isMap = (isMap);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsSet_setTag;
}

/* harmony default export */ var _baseIsSet = (baseIsSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

/* harmony default export */ var lodash_es_isSet = (isSet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var _baseClone_argsTag = '[object Arguments]',
    _baseClone_arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    _baseClone_errorTag = '[object Error]',
    _baseClone_funcTag = '[object Function]',
    _baseClone_genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    _baseClone_objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    _baseClone_weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[_baseClone_argsTag] = cloneableTags[_baseClone_arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[_baseClone_objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[_baseClone_errorTag] = cloneableTags[_baseClone_funcTag] =
cloneableTags[_baseClone_weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!lodash_es_isObject(value)) {
    return value;
  }
  var isArr = lodash_es_isArray(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == _baseClone_funcTag || tag == _baseClone_genTag;

    if (Object(isBuffer["a" /* default */])(value)) {
      return Object(_cloneBuffer["a" /* default */])(value, isDeep);
    }
    if (tag == _baseClone_objectTag || tag == _baseClone_argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? lodash_es_keysIn : lodash_es_keys);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ var _baseClone = (baseClone);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/cloneDeep.js


/** Used to compose bitmasks for cloning. */
var cloneDeep_CLONE_DEEP_FLAG = 1,
    cloneDeep_CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, cloneDeep_CLONE_DEEP_FLAG | cloneDeep_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ var lodash_es_cloneDeep = (cloneDeep);

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("841a");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("868d");

// CONCATENATED MODULE: ./src/lib/helpers/event-bus-handler.ts



var event_bus_handler_setEventHandler = function _setEventHandler() {
  if (!window.__cumulioMessageHandler) {
    window.__cumulioMessageHandler = function (_event) {
      var dashboardComponent = cumulio_service.components.find(function (c) {
        return _event.data.name === c.iframeId;
      });
      if (!dashboardComponent) return;

      if (_event.data && _event.data.type === 'load' || _event.data.type === 'error') {
        if (_event.data.type === 'load') {
          // dashboardComponent.dispatchEvent(new CustomEvent('load', { detail: { data: _event.data } }));
          dashboardComponent.$emit('load', {
            data: _event.data
          });

          if (dashboardComponent.loadTimeoutHandle) {
            clearTimeout(dashboardComponent.loadTimeoutHandle);
            dashboardComponent.loadTimeoutHandle = null;
          }

          dashboardComponent.iframeLoaded = true;
          dashboardComponent.dimensions = _event.data.dimensions; // c.calculateIframeStyles();

          dashboardComponent.calculateDimAfterDashboardLoaded();
        } // Show error
        else if (_event.data.type === 'error') {
          dashboardComponent.dashboardError = true;

          if (dashboardComponent.loadTimeoutHandle) {
            clearTimeout(dashboardComponent.loadTimeoutHandle);
            dashboardComponent.loadTimeoutHandle = null;
          }

          dashboardComponent.iframeLoaded = true;
        }
      } else if (_event.data && _event.data.type === 'data') {
        if (dashboardComponent.promises[_event.data.requestId]) {
          dashboardComponent.promises[_event.data.requestId].resolve(_event.data.data);

          delete dashboardComponent.promises[_event.data.requestId];
        }
      } else if (_event.data && _event.data.type === 'filters') {
        if (dashboardComponent.promises[_event.data.requestId]) {
          dashboardComponent.promises[_event.data.requestId].resolve(_event.data.filters);

          delete dashboardComponent.promises[_event.data.requestId];
        }
      } else if (_event.data && _event.data.type === 'getAccessibleDashboards') {
        if (dashboardComponent.promises[_event.data.requestId]) {
          dashboardComponent.promises[_event.data.requestId].resolve(_event.data.accessibleDashboards);

          delete dashboardComponent.promises[_event.data.requestId];
        }
      } else if (_event.data && _event.data.type === 'export') {
        if (!_event.data.error) {
          dashboardComponent.$emit('exported', {
            data: _event.data
          });

          if (dashboardComponent.promises[_event.data.requestId]) {
            dashboardComponent.promises[_event.data.requestId].resolve(_event.data);

            delete dashboardComponent.promises[_event.data.requestId];
          }
        } else {
          if (dashboardComponent.promises[_event.data.requestId]) {
            dashboardComponent.promises[_event.data.requestId].reject(_event.data);

            delete dashboardComponent.promises[_event.data.requestId];
          }
        }
      } else if (_event.data && _event.data.type === 'changedFilters') {
        dashboardComponent.$emit('changedFilters', {
          data: _event.data
        });
      } else if (_event.data && _event.data.type === 'customEvent') {
        dashboardComponent.$emit('customEvent', {
          data: _event.data
        });
      } else if (_event.data && (_event.data.type === 'chartsRendered' || _event.data.type === 'itemsRendered')) {
        dashboardComponent.$emit('itemsRendered', {
          data: _event.data
        });
      } else if (_event.data && _event.data.type === 'dashboardAction') {
        dashboardComponent.$emit('dashboardAction', {
          data: _event.data
        });
      } else if (_event.data && _event.data.type === 'setEditMode') {
        if (!_event.data.error) {
          if (dashboardComponent.promises[_event.data.requestId]) {
            dashboardComponent.promises[_event.data.requestId].resolve(_event.data);

            delete dashboardComponent.promises[_event.data.requestId];
          } // Set editMode to update iframe dimensions!


          dashboardComponent.params.editMode = _event.data.editMode;
        } else {
          if (dashboardComponent.promises[_event.data.requestId]) {
            delete dashboardComponent.promises[_event.data.requestId];
          }
        }
      }
    };

    var method = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var setEvent = window[method];
    var event = method === 'attachEvent' ? 'onmessage' : 'message'; // Listen to message from child window

    setEvent(event, window.__cumulioMessageHandler, false);
  }
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/error.ts
var _handleError = function _handleError(error, parameters) {
  var message = 'The dashboard component encountered an error';
  if (typeof (parameters === null || parameters === void 0 ? void 0 : parameters.dashboardId) === 'string') message += ' for dashboard with id ' + parameters.dashboardId;
  if (typeof (parameters === null || parameters === void 0 ? void 0 : parameters.dashboardSlug) === 'string') message += ' for dashboard with slug ' + parameters.dashboardSlug;
  if (typeof (parameters === null || parameters === void 0 ? void 0 : parameters.container) === 'string') message += ' in container ' + parameters.container;
  if (error === null || error === void 0 ? void 0 : error.msg) message += ":\n".concat(String(error.msg));
  if (error) console.error(message);
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/browser-check.ts

 // check browser support: svg, postMessage, flexbox

var browser_check_browserCheck = function _browserCheck(dashboardComponent) {
  var hasError = false;
  var error = {
    msg: ''
  };
  var browsercheck = {
    svg: false,
    flexbox: false,
    postMessage: false
  };
  browsercheck.svg = !!('createElementNS' in document && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
  var document_ = document.body || document.documentElement;
  var style = document_.style;
  if (style.webkitFlexWrap === '' || style.flexWrap === '' || style.flexWrap === '') browsercheck.flexbox = true;
  browsercheck.postMessage = !!window.postMessage;

  for (var _i = 0, _arr = ['svg', 'flexbox', 'postMessage']; _i < _arr.length; _i++) {
    var t = _arr[_i];

    if (!browsercheck[t]) {
      hasError = true;
      dashboardComponent.browserNotSupported = dashboardComponent.browserNotSupported || [];
      dashboardComponent.browserNotSupported.push(t);
      error.msg += 'Your browser does not support: ' + t + '\n';
    }
  } // Check browser for IE


  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE');
  var trident = ua.indexOf('Trident/');

  if (msie > 0 || trident > 0) {
    hasError = true;
    error.msg = 'IE is not supported.';
  }

  if (hasError) _handleError(error);
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/default-parameters.ts
var DEFAULT_PARAMETERS = {
  appServer: 'https://app.cumul.io/',
  apiHost: 'https://api.cumul.io/',
  _id: null,
  version: '0.1.0',
  dashboardId: null,
  dashboardSlug: null,
  container: null,
  key: null,
  token: null,
  language: 'auto',
  editable: false,
  editMode: false,
  screenMode: null,
  switchScreenmodeOnResize: true,
  itemId: null,
  mainColor: '',
  accentColor: '',
  itemDimensions: {
    width: 'auto',
    height: 'auto'
  },
  listeners: [],
  loader: {
    background: '#f9f9f9',
    fontColor: '#5a5a5a',
    spinnerColor: 'rgba(255, 165, 0, 0.7)',
    spinnerBackground: 'rgba(169, 169, 169, 0.14)'
  },
  timezoneId: null
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/extents.ts
var EXTENTS = [{
  mode: 'mobile',
  width: [150, 767]
}, {
  mode: 'tablet',
  width: [768, 1199]
}, {
  mode: 'desktop',
  width: [1200, 1599]
}, {
  mode: 'largeScreen',
  width: [1600, 9999]
}, {
  mode: 'fixed',
  width: []
}];
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/translations.ts
var TRANSLATIONS = {
  initializing: {
    en: 'Initializing...',
    nl: 'Laden...',
    fr: 'Chargement...'
  },
  errorDashboard: {
    en: 'Oops, we could not load this dashboard!',
    nl: 'Oeps, we konden het dashboard niet laden.',
    fr: 'Le chargement a echoué.'
  },
  errorItem: {
    en: 'Oops, we could not load this item!',
    nl: 'Oeps, we konden de grafiek niet laden.',
    fr: 'Le chargement a echoué.'
  }
};
/* harmony default export */ var translations = (TRANSLATIONS);
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("cfce");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("9531");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("2ea2");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("b55a");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("58d3");

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/utils.ts












var addTrailingSlash = function addTrailingSlash(serverUrl) {
  return serverUrl.endsWith('/') ? serverUrl : "".concat(serverUrl, "/");
};
var formatDashboardList = function formatDashboardList(dashboardList) {
  dashboardList = dashboardList || [];
  return dashboardList.map(function (s) {
    var _a, _b, _c;

    return {
      id: s.id,
      name: (_a = s.name) !== null && _a !== void 0 ? _a : {},
      slug: (_c = (_b = s.integrationAccessRight) === null || _b === void 0 ? void 0 : _b.slug) !== null && _c !== void 0 ? _c : null,
      modifiedAt: s.modified_at
    };
  });
};
var VERSION = '0.0.8-vue-cumulio';
var sanitizeUrl = function sanitizeUrl(url) {
  var invalidPrototcolRegex = /^(%20|\s)*(javascript|data)/im;
  var ctrlCharactersRegex = /[^\u0020-\u007E]/gim;
  var urlSchemeRegex = /^([^:]+):/gm;
  var relativeFirstCharacters = new Set(['.', '/']);

  var isRelativeUrlWithoutProtocol = function isRelativeUrlWithoutProtocol(relativeUrl) {
    return relativeFirstCharacters.has(relativeUrl[0]);
  };

  if (!url) return 'about:blank';
  var sanitizedUrl = url.replace(ctrlCharactersRegex, '').trim();
  if (isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
  var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) return sanitizedUrl;
  var urlScheme = urlSchemeParseResults[0];
  if (invalidPrototcolRegex.test(urlScheme)) return 'about:blank';
  return sanitizedUrl;
};
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("ef14");

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/iframe-url.ts




var iframe_url_createIframeUrl = function createIframeUrl(dashboardContent) {
  var searchstring = [];
  var _dashboardContent$par = dashboardContent.params,
      appServer = _dashboardContent$par.appServer,
      language = _dashboardContent$par.language,
      loader = _dashboardContent$par.loader,
      screenMode = _dashboardContent$par.screenMode,
      currentScreenMode = _dashboardContent$par.currentScreenMode,
      key = _dashboardContent$par.key,
      token = _dashboardContent$par.token,
      timezoneId = _dashboardContent$par.timezoneId,
      itemEmbedding = _dashboardContent$par.itemEmbedding,
      itemDimensions = _dashboardContent$par.itemDimensions,
      dashboardId = _dashboardContent$par.dashboardId,
      dashboardSlug = _dashboardContent$par.dashboardSlug,
      itemId = _dashboardContent$par.itemId,
      mainColor = _dashboardContent$par.mainColor,
      accentColor = _dashboardContent$par.accentColor,
      editMode = _dashboardContent$par.editMode; // language

  if (language && language !== 'auto') searchstring.push('language=' + language); // loader

  if (loader) {
    if (loader.background) searchstring.push('ldrbg=' + loader.background.replace('#', '--'));
    if (loader.fontColor) searchstring.push('ldrftclr=' + loader.fontColor.replace('#', '--'));
    if (loader.spinnerColor) searchstring.push('ldrspclr=' + loader.spinnerColor.replace('#', '--'));
    if (loader.spinnerBackground) searchstring.push('ldrspbg=' + loader.spinnerBackground.replace('#', '--'));
  }

  if (mainColor) searchstring.push('mainColor=' + mainColor);
  if (accentColor) searchstring.push('accentColor=' + accentColor); // screenMode
  // const specifiedScreenMode = (screenMode && ['mobile', 'tablet', 'desktop', 'largeScreen', 'fixed'].includes(screenMode));
  // if (specifiedScreenMode && screenMode === currentScreenMode) searchstring.push('screenmode=' + currentScreenMode);

  if (screenMode && screenMode !== 'auto') searchstring.push('screenmode=' + screenMode); // key & token

  if (key && token && !editMode) {
    searchstring.push('key=' + key, 'token=' + token);
  } // timezoneId


  if (timezoneId) searchstring.push('timezoneId=' + timezoneId); // itemDimensions

  if (itemEmbedding && itemDimensions && itemDimensions.width) searchstring.push('width=' + itemDimensions.width);
  if (itemEmbedding && itemDimensions && itemDimensions.height) searchstring.push('height=' + itemDimensions.height); // Normal or beta route (i-beta/ to change to i/ route once MICE fully finished)

  var route = editMode ? 'i-beta/' : 'i/';
  if (editMode) searchstring.push('editMode=' + editMode);
  var integratedEditorKeyTokenFragment = key && token && editMode ? '#' + key + ':' + token : ''; // version

  searchstring.push('version=' + (dashboardContent.VERSION || VERSION));
  var iframeUrl = itemEmbedding && !editMode ? appServer + route + (dashboardId || dashboardSlug) + '/' + itemId + '?' + searchstring.join('&') : appServer + route + (dashboardId || dashboardSlug) + '?' + searchstring.join('&') + integratedEditorKeyTokenFragment;
  return sanitizeUrl(iframeUrl);
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/helpers/get-loader.ts




 // Loader

var get_loader_getLoader = function getLoader(dashboardComponent) {
  // No loader if error or browser not supported
  var error;

  if (dashboardComponent.params.error || dashboardComponent.browserNotSupported.length > 0) {
    dashboardComponent.params.error = true;
    if (dashboardComponent.browserNotSupported) error = 'Browser not supported.';
  }

  var message = Object.keys(translations.initializing).includes(dashboardComponent.params.language) ? translations.initializing[dashboardComponent.params.language] : translations.initializing.en;
  return dashboardComponent.browserNotSupported || dashboardComponent.params.error ? {
    loadingMsg: message,
    errorMsg: error,
    cumulioError: DEFAULT_PARAMETERS
  } : {
    loadingMsg: message
  };
};
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("b151");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@lukeed/uuid/dist/index.mjs
var IDX=256, HEX=[], BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function v4() {
	var i=0, num, out='';

	if (!BUFFER || ((IDX + 16) > 256)) {
		BUFFER = Array(i=256);
		while (i--) BUFFER[i] = 256 * Math.random() | 0;
		i = IDX = 0;
	}

	for (; i < 16; i++) {
		num = BUFFER[IDX + i];
		if (i==6) out += HEX[num & 15 | 64];
		else if (i==8) out += HEX[num & 63 | 128];
		else out += HEX[num];

		if (i & 1 && i > 1 && i < 11) out += '-';
	}

	IDX++;
	return out;
}

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/export-dashboard.ts





 // TODO: change function signature so that iframe is passed as a parameter and not contentWindow

var export_dashboard_exportDashboard = function exportDashboard(dashboardComponent, iframe, format) {
  var requestId = v4();

  if (iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) {
    iframe.contentWindow.postMessage({
      action: 'exportDashboard',
      format: format || 'png',
      _version: dashboardComponent.VERSION,
      requestId: requestId
    }, '*'); // TODO: if vue and es6 return promises,

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      dashboardComponent.promises[requestId] = {
        resolve: resolve,
        reject: reject
      }; // Check if promise has been resolved after 2 seconds

      setTimeout(function () {
        if (dashboardComponent.promises[requestId]) {
          var errorMessage = 'exportDashboard request timed out.';
          dashboardComponent.promises[requestId].reject(new Error(errorMessage));
          delete dashboardComponent.promises[requestId];
        }
      }, 1200000);
    });
  }

  if (dashboardComponent.VERSION.includes('ngx')) {
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Failed to export.'));
  }
};
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("df26");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/get-accessible-dashboards.ts








 // TODO: change function signature so that iframe is passed as a parameter and not contentWindow

var get_accessible_dashboards_getAccessibleDashboards = function getAccessibleDashboards(dashboardComponent, iframe) {
  if ((dashboardComponent.dashboardId || dashboardComponent.dashboardSlug) && (iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow)) {
    var requestId = v4();
    iframe.contentWindow.postMessage({
      action: 'getAccessibleDashboards',
      _version: dashboardComponent.VERSION,
      requestId: requestId
    }, '*');

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      dashboardComponent.promises[requestId] = {
        resolve: resolve,
        reject: reject
      }; // Check if promise has been resolved after 2 seconds

      setTimeout(function () {
        if (dashboardComponent.promises[requestId]) {
          var errorMessage = 'getAccessibleDashboards request timed out.';
          dashboardComponent.promises[requestId].reject(new Error(errorMessage));
          delete dashboardComponent.promises[requestId];
        }
      }, 2000);
    });
  } else {
    // do an API call to fetch data.
    var inputData = {
      action: 'get',
      version: '0.1.0',
      key: dashboardComponent.authKey,
      token: dashboardComponent.authToken,
      find: {
        attributes: ['id'],
        where: {
          id: dashboardComponent.authKey
        },
        include: [{
          model: 'Integration',
          attributes: ['id'],
          include: [{
            model: 'Securable',
            where: {
              type: 'dashboard'
            },
            attributes: ['id', 'name', 'modified_at'],
            order: [['modified_at', 'desc']]
          }]
        }]
      }
    };
    var promiseForFetch = new Promise(function (resolve, reject) {
      void function () {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var response, data, dashboardList;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return window.fetch("".concat(String(dashboardComponent.params.apiHost), "0.1.0/authorization"), {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    body: JSON.stringify(inputData)
                  });

                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();

                case 6:
                  data = _context.sent;
                  dashboardList = data.rows.length > 0 ? formatDashboardList(data.rows[0].integration.securables) : [];

                  if (dashboardComponent.VERSION.includes('ngx')) {
                    dashboardComponent.getAccessibleDashboardsEvent.next(dashboardList);
                  }

                  resolve(dashboardList);
                  _context.next = 16;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](0);
                  reject(_context.t0);
                  dashboardComponent.getAccessibleDashboardsEvent.next([]);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 12]]);
        }));
      }();
    });

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    } else {
      return promiseForFetch;
    }
  }
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/get-data.ts





 // TODO: change function signature so that iframe is passed as a parameter and not contentWindow

var get_data_getData = function getData(dashboardComponent, iframe, itemId) {
  if (iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) {
    var requestId = v4();
    iframe.contentWindow.postMessage({
      action: 'getData',
      id: itemId,
      _version: dashboardComponent.VERSION,
      requestId: requestId
    }, '*');

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      dashboardComponent.promises[requestId] = {
        resolve: resolve,
        reject: reject
      }; // Check if promise has been resolved after 2 seconds

      setTimeout(function () {
        if (dashboardComponent.promises[requestId]) {
          var errorMessage = 'getData request timed out.';
          dashboardComponent.promises[requestId].reject(new Error(errorMessage));
          delete dashboardComponent.promises[requestId];
        }
      }, 2000);
    });
  } else {
    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('Cannot retrieve contentWindow.'));
    }
  }
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/get-filters.ts





 // TODO: change function signature so that iframe is passed as a parameter and not contentWindow

var get_filters_getFilters = function getFilters(dashboardComponent, iframe) {
  if (iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) {
    var requestId = v4();
    iframe.contentWindow.postMessage({
      action: 'getFilters',
      _version: dashboardComponent.VERSION,
      requestId: requestId
    }, '*');

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      dashboardComponent.promises[requestId] = {
        resolve: resolve,
        reject: reject
      }; // Check if promise has been resolved after 2 seconds

      setTimeout(function () {
        if (dashboardComponent.promises[requestId]) {
          var errorMessage = 'getFilters request timed out.';
          dashboardComponent.promises[requestId].reject(new Error(errorMessage));
          delete dashboardComponent.promises[requestId];
        }
      }, 2000);
    });
  } else {
    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('Cannot retrieve contentWindow.'));
    }
  }
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/refresh-data.ts




// TODO: change function signature so that iframe is passed as a parameter and not contentWindow
var refresh_data_refreshData = function refreshData(dashboardComponent, iframe, itemId) {
  if (iframe) iframe.contentWindow.postMessage({
    action: 'refreshData',
    id: itemId ? itemId : null,
    _version: dashboardComponent.VERSION
  }, '*');

  if (dashboardComponent.VERSION.includes('ngx')) {
    return Promise.resolve();
  }

  return Promise.resolve();
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/reload-dashboard.ts




// TODO: change function signature so that iframe is passed as a parameter and not contentWindow
var reload_dashboard_reloadDashboard = function reloadDashboard(dashboardComponent, iframe) {
  if (iframe) iframe.contentWindow.postMessage({
    action: 'reloadDashboard',
    _version: dashboardComponent.VERSION
  }, '*');

  if (dashboardComponent.VERSION.includes('ngx')) {
    return Promise.resolve();
  }

  return Promise.resolve();
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/set-authorization.ts




// TODO: change function signature so that iframe is passed as a parameter and not contentWindow
var set_authorization_setAuthorization = function setAuthorization(dashboardComponent, iframe, key, token) {
  if (iframe) {
    iframe.contentWindow.postMessage({
      action: 'setAuthorization',
      key: key,
      token: token,
      _version: dashboardComponent.VERSION
    }, '*');

    if (dashboardComponent.VERSION.includes('ngx')) {
      return Promise.resolve();
    }

    return Promise.resolve();
  }

  if (dashboardComponent.VERSION.includes('ngx')) {
    return Promise.resolve();
  }

  return Promise.reject();
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/methods/set-edit-mode.ts



var set_edit_mode_setEditMode = function setEditMode(dashboardComponent, iframe, editMode) {
  if (iframe && iframe.contentWindow) {
    var requestId = v4();

    if (dashboardComponent.params.editMode === editMode) {
      return Promise.reject(new Error('editMode parameter is currently already set to ' + editMode));
    } // Reject is setting editMode to a non-allowed value
    else if (editMode !== 'editFull' && editMode !== 'editLimited' && editMode !== 'view') {
      return Promise.reject(new Error('The editMode parameter must be one of the following values: \'editFull\', \'editLimited\' or \'view\'.'));
    } else {
      iframe.contentWindow.postMessage({
        action: 'setEditMode',
        editMode: editMode,
        _version: dashboardComponent.VERSION,
        requestId: requestId
      }, '*');
      return new Promise(function (resolve, reject) {
        dashboardComponent.promises[requestId] = {
          resolve: resolve,
          reject: reject
        };
      });
    }
  } else return Promise.reject(new Error('Cannot retrieve contentWindow.'));
};
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("b2c2");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("b506");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.number.parse-int.js
var es_number_parse_int = __webpack_require__("74b7");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("e94e");

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/service/calculate-dimensions.ts














 // - setCalculatedDimensions: based on parameters & received dimensions per screenMode
// calculates the best screenMode & currentWidth & currentHeight

var calculate_dimensions_setCalculatedDimensions = function _setCalculatedDimensions(dashboardComponent) {
  if (!dashboardComponent.dimensions) {
    dashboardComponent.params.error = true;

    _handleError({
      msg: 'Got no valid dimensions.'
    }, dashboardComponent.params); // return dashboardComponent.params;

  }

  var available = [];
  var currentMode = '';
  var currentWidth = 0;
  var currentHeight = 0;

  if (!dashboardComponent.params.switchScreenModeOnResize && dashboardComponent.currentScreenMode) {
    dashboardComponent.params.screenMode = dashboardComponent.currentScreenMode;
  }

  var dimensionKeys = Object.keys(dashboardComponent.dimensions); // if fixed

  if (dashboardComponent.dimensions && dimensionKeys && dimensionKeys[0] === 'fixed') {
    currentMode = 'fixed';
    currentWidth = dashboardComponent.dimensions.fixed[0];
    currentHeight = dashboardComponent.dimensions.fixed[1];
  } // else calculate
  else {
    if (dashboardComponent.params.itemEmbedding) {
      // for item embedding, make sure all screenModes exist
      var order = ['mobile', 'tablet', 'desktop', 'largeScreen'];
      var firstMatch = dimensionKeys[0];
      var match = JSON.parse(JSON.stringify(firstMatch));

      var _loop = function _loop() {
        var element = _order[_i];
        var found = dimensionKeys.find(function (v) {
          return v === element;
        });
        if (!found) dashboardComponent.dimensions[element] = dashboardComponent.dimensions[match];else match = JSON.parse(JSON.stringify(found));
      };

      for (var _i = 0, _order = order; _i < _order.length; _i++) {
        _loop();
      }
    }

    var _iterator = _createForOfIteratorHelper(dimensionKeys),
        _step;

    try {
      var _loop2 = function _loop2() {
        var d = _step.value;

        if (['mobile', 'tablet', 'desktop', 'largeScreen'].includes(d)) {
          var screenMode = EXTENTS.find(function (s) {
            return s.mode === d;
          });
          screenMode.height = dashboardComponent.dimensions[d][1] || 50;
          available.push(screenMode);
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop2();
      } // check if specified is in available -> if not set to auto

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!available.map(function (d) {
      return d.mode;
    }).includes(dashboardComponent.params.screenMode)) dashboardComponent.params.screenMode = 'auto'; // auto calc screenMode that fits & set its width using the available width

    if (dashboardComponent.params.screenMode === 'auto') {
      available.sort(function (a, b) {
        return ['mobile', 'tablet', 'desktop', 'largeScreen'].indexOf(a.mode) - ['mobile', 'tablet', 'desktop', 'largeScreen'].indexOf(b.mode);
      });

      var _iterator2 = _createForOfIteratorHelper(available),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var d = _step2.value;

          if (dashboardComponent.params.itemEmbedding && dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.width !== 'auto' && dashboardComponent.params.itemDimensions.height === 'auto') {
            if (d.width[0] < dashboardComponent.params.itemDimensions.width) {
              currentMode = d.mode;
              currentWidth = Number.parseInt(dashboardComponent.params.itemDimensions.width, 10);
              currentHeight = dashboardComponent.dimensions[currentMode][1];
            }
          } else {
            if (d.width[0] < dashboardComponent.containerWidth) {
              currentMode = d.mode;

              if (dashboardComponent.params.itemEmbedding) {
                // item embedding
                currentWidth = dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.width && dashboardComponent.params.itemDimensions.width !== 'auto' ? Number.parseInt(dashboardComponent.params.itemDimensions.width, 10) : Math.min(dashboardComponent.containerWidth, d.width[1]);
                currentHeight = dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.height && dashboardComponent.params.itemDimensions.height !== 'auto' ? Number.parseInt(dashboardComponent.params.itemDimensions.height, 10) : dashboardComponent.dimensions[currentMode][1];

                if (dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.width !== 'auto' && dashboardComponent.params.itemDimensions.height === 'auto') {
                  currentWidth = Number.parseInt(dashboardComponent.params.itemDimensions.width, 10);
                  currentHeight = dashboardComponent.dimensions[currentMode][1];
                }
              } else {
                // normal dashboard embedding
                currentWidth = Math.max(Math.min(d.width[1], dashboardComponent.containerWidth), d.width[0]);
                currentHeight = d.height;
              }
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // set to screenMode and check if width fits in available width
    else {
      var chosenMode = available.find(function (d) {
        return d.mode === dashboardComponent.params.screenMode;
      });
      currentMode = dashboardComponent.params.screenMode;
      currentWidth = Math.max(Math.min(chosenMode.width[1], dashboardComponent.containerWidth), chosenMode.width[0]);
      currentHeight = chosenMode.height;

      if (dashboardComponent.params.itemEmbedding) {
        // item embedding
        if (dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.width && dashboardComponent.params.itemDimensions.width !== 'auto') {
          currentWidth = Number.parseInt(dashboardComponent.params.itemDimensions.width, 10);
        }

        if (dashboardComponent.params.itemDimensions && dashboardComponent.params.itemDimensions.height && dashboardComponent.params.itemDimensions.height !== 'auto') {
          currentHeight = Number.parseInt(dashboardComponent.params.itemDimensions.height, 10);
        }
      }
    } // if no available mode is found, take the lowest one


    if (!currentMode && available.length > 0) {
      currentMode = available[0].mode;
      currentWidth = available[0].width[0];
      currentHeight = available[0].height;
    }
  }

  dashboardComponent.currentScreenMode = currentMode;
  var style = {};
  style.height = currentHeight === 0 ? '100%' : "".concat(String(currentHeight), "px");
  style.width = currentWidth === 0 ? '100%' : "".concat(String(currentWidth), "px");
  style.opacity = 1; // Set dimensions to 100% width and height of container if we're in edit mode

  if (dashboardComponent.params.editMode === 'editFull' || dashboardComponent.params.editMode === 'editLimited') {
    style.height = '100%';
    style.width = '100%';
  } else if (dashboardComponent.params.itemEmbedding && dashboardComponent.params.itemDimensions) {
    style.height = dashboardComponent.params.itemDimensions.height === 'auto' ? style.height : "".concat(String(dashboardComponent.params.itemDimensions.height).replace('px', ''), "px");
    style.width = dashboardComponent.params.itemDimensions.width === 'auto' ? style.width : "".concat(String(dashboardComponent.params.itemDimensions.width).replace('px', ''), "px");
  } else {
    style.height = currentHeight === 0 ? '100%' : "".concat(String(currentHeight), "px");
    style.width = currentWidth === 0 ? '100%' : "".concat(String(currentWidth), "px");
  }

  dashboardComponent.currentScreenMode = currentMode;
  dashboardComponent.iframeStyle = style;
};
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ var _apply = (apply);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ var lodash_es_constant = (constant);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? lodash_es_identity : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ var _baseSetToString = (baseSetToString);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ var _shortOut = (shortOut);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ var _setToString = (setToString);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_assignMergeValue.js



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !lodash_es_eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignMergeValue = (assignMergeValue);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ var _baseFor = (baseFor);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isArrayLike(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var isPlainObject_objectTag = '[object Object]';

/** Used for built-in method references. */
var isPlainObject_funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var isPlainObject_funcToString = isPlainObject_funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = isPlainObject_funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != isPlainObject_objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    isPlainObject_funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ var _safeGet = (safeGet);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/toPlainObject.js



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, lodash_es_keysIn(value));
}

/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseMergeDeep.js
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = lodash_es_isArray(srcValue),
        isBuff = !isArr && Object(isBuffer["a" /* default */])(srcValue),
        isTyped = !isArr && !isBuff && lodash_es_isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (lodash_es_isArray(objValue)) {
        newValue = objValue;
      }
      else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer["a" /* default */])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (lodash_es_isPlainObject(srcValue) || lodash_es_isArguments(srcValue)) {
      newValue = objValue;
      if (lodash_es_isArguments(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      }
      else if (!lodash_es_isObject(objValue) || lodash_es_isFunction(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_baseMerge.js








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (lodash_es_isObject(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, lodash_es_keysIn);
}

/* harmony default export */ var _baseMerge = (baseMerge);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_customDefaultsMerge.js



/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (lodash_es_isObject(objValue) && lodash_es_isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    _baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/* harmony default export */ var _customDefaultsMerge = (customDefaultsMerge);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (lodash_es_isArrayLike(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return lodash_es_eq(object[index], value);
  }
  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ var _createAssigner = (createAssigner);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/mergeWith.js



/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
  _baseMerge(object, source, srcIndex, customizer);
});

/* harmony default export */ var lodash_es_mergeWith = (mergeWith);

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/lodash-es/defaultsDeep.js





/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = _baseRest(function(args) {
  args.push(undefined, _customDefaultsMerge);
  return _apply(lodash_es_mergeWith, undefined, args);
});

/* harmony default export */ var lodash_es_defaultsDeep = (defaultsDeep);

// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/lib/service/extend-and-validate.ts











 // 1. extend & test validity params + set itemEmbedding

var extend_and_validate_extendAndValidate = function _extendAndValidate(dashboardContent) {
  // remove null params before extend, not to let null override defaults remove not used params as well
  var defaultKeys = Object.keys(DEFAULT_PARAMETERS);

  for (var _i = 0, _defaultKeys = defaultKeys; _i < _defaultKeys.length; _i++) {
    var p = _defaultKeys[_i];
    if (dashboardContent.params[p] === null) delete dashboardContent.params[p];
  }

  var errorMsgs = []; // save original params

  var original = lodash_es_cloneDeep(dashboardContent.params);
  dashboardContent.params.original = original; // extend with the default parameters before doing a check

  dashboardContent.params = lodash_es_defaultsDeep(dashboardContent.params, DEFAULT_PARAMETERS);

  if ((!dashboardContent.params.dashboardId || typeof dashboardContent.params.dashboardId !== 'string') && (!dashboardContent.params.dashboardSlug || typeof dashboardContent.params.dashboardSlug !== 'string')) {
    if (dashboardContent.params.editMode === 'editFull') dashboardContent.params.dashboardId = 'new';else {
      delete dashboardContent.params.dashboardId;
      delete dashboardContent.params.dashboardSlug;
    }
  } // check strings that can not be empty


  for (var _i2 = 0, _arr = ['appServer', 'language', 'apiHost']; _i2 < _arr.length; _i2++) {
    var _p = _arr[_i2];

    if (typeof dashboardContent.params[_p] !== 'string') {
      delete dashboardContent.params[_p];
      dashboardContent.params.warning = true;
      errorMsgs.push("".concat(_p, " needs to be of type string."));
    }
  } // check strings or empty


  for (var _i3 = 0, _arr2 = ['key', 'token', 'screenMode', 'timezoneId', 'itemId', 'container']; _i3 < _arr2.length; _i3++) {
    var _p2 = _arr2[_i3];

    if (typeof dashboardContent.params[_p2] !== 'string' && dashboardContent.params[_p2] !== null && dashboardContent.params[_p2] !== undefined) {
      delete dashboardContent.params[_p2];
      dashboardContent.params.warning = true;
      errorMsgs.push("".concat(_p2, " needs to be of type string or empty."));
    }
  }

  if (dashboardContent.params.screenMode && !['mobile', 'tablet', 'desktop', 'largeScreen', 'fixed', 'auto'].includes(dashboardContent.params.screenMode)) {
    dashboardContent.params.warning = true;
    dashboardContent.params.screenMode = 'auto';
    errorMsgs.push('screenMode needs to be either "mobile", "tablet", "desktop", "largeScreen", "fixed" or "auto"');
  } // set itemEmbedding if item


  if (dashboardContent.params.itemId) dashboardContent.params.itemEmbedding = true;

  for (var _i4 = 0, _arr3 = ['itemDimensions', 'loader']; _i4 < _arr3.length; _i4++) {
    var _p3 = _arr3[_i4];

    if (_typeof(dashboardContent.params[_p3]) !== 'object' && dashboardContent.params[_p3] !== null) {
      delete dashboardContent.params[_p3];
      dashboardContent.params.warning = true;
      errorMsgs.push("".concat(_p3, " needs to be of type object or empty."));
    }
  } // check boolean


  if (typeof dashboardContent.params.switchScreenModeOnResize !== 'boolean') {
    dashboardContent.params.warning = true;
    dashboardContent.params.switchScreenModeOnResize = true;
    errorMsgs.push('switchScreenModeOnResize needs to be of type boolean.');
  } // check itemDimensions


  if (dashboardContent.params.itemDimensions) {
    for (var _i5 = 0, _arr4 = ['width', 'height']; _i5 < _arr4.length; _i5++) {
      var _p4 = _arr4[_i5];

      if (!['string', 'number'].includes(_typeof(dashboardContent.params.itemDimensions[_p4])) && dashboardContent.params.itemDimensions[_p4] !== null) {
        dashboardContent.params.warning = true;
        errorMsgs.push("itemDimensions ".concat(_p4, " needs to be of type string, number or empty."));
      }
    }
  } // check loader


  if (dashboardContent.params.loader) {
    for (var _i6 = 0, _arr5 = ['background', 'fontColor', 'spinnerColor', 'spinnerBackground']; _i6 < _arr5.length; _i6++) {
      var _p5 = _arr5[_i6];

      if (typeof dashboardContent.params.loader[_p5] !== 'string' && dashboardContent.params.loader[_p5] !== null) {
        delete dashboardContent.params[_p5];
        dashboardContent.params.warning = true;
        errorMsgs.push("loader property ".concat(_p5, " needs to be of type string or empty."));
      }
    }
  } // extend again with default parameters to make up for the deleted invalid properties


  dashboardContent.params = lodash_es_defaultsDeep(dashboardContent.params, DEFAULT_PARAMETERS); // check screenMode in list & set itemDimensions if itemEmbedding

  if (dashboardContent.params.screenMode && dashboardContent.params.screenMode !== 'auto') dashboardContent.params.switchScreenModeOnResize = false;
  if (dashboardContent.params.itemDimensions.width !== 'auto') dashboardContent.params.itemDimensions.width = Number.parseInt(String(dashboardContent.params.itemDimensions.width).replace('px', ''), 10) || 'auto';
  if (dashboardContent.params.itemDimensions.height !== 'auto') dashboardContent.params.itemDimensions.height = Number.parseInt(String(dashboardContent.params.itemDimensions.height).replace('px', ''), 10) || 'auto';
  dashboardContent.params.itemEmbedding = dashboardContent.params.itemId ? true : false;
  if (dashboardContent.params.error || dashboardContent.params.warning) _handleError({
    msg: errorMsgs.join('\n')
  }, dashboardContent.params);
};
// CONCATENATED MODULE: ../shared-cumulio-dashboard/src/index.ts
/* Helpers */








/* Methods */









/* service methods? can be renamed to helpers instead */



// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/cache-loader/dist/cjs.js??ref--13-0!D:/cumul.io/cumulio-libs/node_modules/thread-loader/dist/cjs.js!D:/cumul.io/cumulio-libs/node_modules/babel-loader/lib??ref--13-2!D:/cumul.io/cumulio-libs/node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-3!D:/cumul.io/cumulio-libs/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=script&lang=ts

















var cumulio_dashboardvue_type_script_lang_ts_EXTENTS = EXTENTS,
    cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS = DEFAULT_PARAMETERS,
    cumulio_dashboardvue_type_script_lang_ts_TRANSLATIONS = TRANSLATIONS,
    cumulio_dashboardvue_type_script_lang_ts_addTrailingSlash = addTrailingSlash,
    cumulio_dashboardvue_type_script_lang_ts_setCalculatedDimensions = calculate_dimensions_setCalculatedDimensions,
    cumulio_dashboardvue_type_script_lang_ts_browserCheck = browser_check_browserCheck,
    cumulio_dashboardvue_type_script_lang_ts_extendAndValidate = extend_and_validate_extendAndValidate,
    cumulio_dashboardvue_type_script_lang_ts_createIframeUrl = iframe_url_createIframeUrl,
    _getLoader = get_loader_getLoader;


console.log(lib);

if (lib["isVue2"]) {
  console.log('vue2');
} else if (lib["isVue3"]) {
  console.log('vue3');
}

/* harmony default export */ var cumulio_dashboardvue_type_script_lang_ts = (/*#__PURE__*/lib["defineComponent"]({
  // export default {
  name: 'CumulioDashboard',
  emits: ['customEvent', 'itemsRendered', 'load', 'filters', 'exported', 'changedFilters', 'dashboardAction'],
  props: {
    // Params from <cumulio-dashboard>
    dashboardId: {
      type: String,
      "default": null
    },
    dashboardSlug: {
      type: String,
      "default": null
    },
    itemId: {
      type: String,
      "default": null
    },
    language: {
      type: String,
      "default": 'auto'
    },
    editMode: {
      type: Boolean,
      "default": false
    },
    editable: {
      type: Boolean,
      "default": false
    },
    screenMode: {
      type: String,
      "default": 'auto'
    },
    switchScreenModeOnResize: {
      type: Boolean,
      "default": true
    },
    itemDimensions: {
      type: Object,
      "default": function _default() {
        return {
          width: 'auto',
          height: 'auto'
        };
      }
    },
    mainColor: String,
    accentColor: String,
    //optional params
    authToken: String,
    authKey: String,
    loaderBackground: String,
    loaderFontColor: String,
    loaderSpinnerColor: String,
    loaderSpinnerBackground: String,
    appServer: {
      type: String,
      "default": 'https://app.cumul.io/'
    },
    timezoneId: String,
    apiHost: String
  },
  created: function created() {
    // Non reactive values goes inside here.
    this.promises = {};
    this.paramsId = this.generateParamsId();
    this.iframeId = 'cio-dashboard-' + this.paramsId;
    this.containerId = this.generateContainerId();

    event_bus_handler_setEventHandler();

    cumulio_service._setComponentContext(this);
  },
  data: function data() {
    return {
      params: lodash_es_cloneDeep(cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS),
      // iframeId: null,
      // paramsId: null,
      // Bindings
      sanitizedUrl: '',
      msg: '',
      cioError: '',
      // Other variables
      dimensions: {},
      containerWidth: null,
      currentScreenMode: '',
      iframeLoaded: false,
      error: false,
      initialized: false,
      loaded: false,
      dashboardError: false,
      dim: null,
      calculateDimensions: [],
      iframeStyle: {},
      loaderStyle: {},
      // CSS for style bindings
      loaderSize: 32,
      borderWidth: 3,
      minHeight: 400,
      iframeHeight: '',
      iframeWidth: '',
      browserNotSupported: [],
      VERSION: package_0["a" /* version */] + '-vue-cumulio'
    };
  },
  computed: {
    /*------------------------
    | Styling For Template   |
    ------------------------*/
    // background
    containerStyles: function containerStyles() {
      var styles = {};
      if (this.params.loader.background && !this.iframeLoaded) styles.background = this.params.loader.background;

      if (this.params.editable && this.params.editMode && this.iframeLoaded) {
        styles.width = '100%';
        styles.height = '100%';
      }

      return styles;
    },
    // cio-loader
    cioLoaderStyles: function cioLoaderStyles() {
      if (this.params.itemEmbedding) {
        this.loaderSize = 24, this.borderWidth = 4, this.minHeight = 200;
        var chartWidthDefined = this.params.itemEmbedding && this.params.itemDimensions.width !== 'auto';
        var chartHeightDefined = this.params.itemEmbedding && this.params.itemDimensions.height !== 'auto';
        var styles = {
          background: this.params.loader.background || this.params.loader.background,
          width: chartWidthDefined ? this.params.itemDimensions.width + 'px;' : '100%',
          height: (chartHeightDefined ? this.params.itemDimensions.height : '200') + 'px',
          'min-height': chartHeightDefined ? '' : '200px'
        };
        return styles;
      }

      return {
        background: this.params.loader.background || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.loader.background
      };
    },
    // cio-loading-circle
    cioLoadingCircleStyles: function cioLoadingCircleStyles() {
      var styles = {
        'border-top': this.borderWidth + 'px solid ' + (this.params.loader.spinnerColor || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.loader.spinnerColor),
        'border-right': this.borderWidth + 'px solid ' + (this.params.loader.spinnerColor || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.loader.spinnerColor),
        'border-bottom': this.borderWidth + 'px solid ' + (this.params.loader.spinnerBackground || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.loader.spinnerBackground),
        'border-left': this.borderWidth + 'px solid ' + (this.params.loader.spinnerBackground || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.loader.spinnerBackground),
        width: this.loaderSize + 'px',
        height: this.loaderSize + 'px'
      };
      return styles;
    },
    // cio-lc
    ciolcStyles: function ciolcStyles() {
      var chartHeightDefined = this.params.itemEmbedding && (this.params.itemDimensions.height || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.height) !== 'auto';
      var styles = {
        padding: (this.params.itemId ? chartHeightDefined ? (parseInt(this.params.itemDimensions.height, 10) - this.loaderSize - 32) / 2 + 'px' : (this.minHeight - this.loaderSize - 32) / 2 + 'px' : '128px') + ' 16px'
      };
      return styles;
    }
  },
  //Lifecycle hooks
  //Initialization
  beforeMount: function beforeMount() {
    this.error = false;
    this.dashboardError = false; // Check browser

    cumulio_dashboardvue_type_script_lang_ts_browserCheck(this); // Save input values into Cumulio object


    this.setOptions(); // Extend and validate the params from cumulio-dashboard

    this.extendAndValidate(); // Get Loader

    this.getLoader(); // Get Iframe URL

    this.getIframeURL(); // Initialized

    this.initialized = true;
    this.iframeStyle = this.calculateIframeStyles();
    this.loaderStyle = this.cioContainerLoaderStyles();
  },
  mounted: function mounted() {
    var _this = this;

    // Initial container width
    this.containerWidth = this.$refs.container.offsetWidth; // Listen for resize on the dashboard-container div
    // @ts-ignore

    this.resizeObserver = new ResizeObserver(function () {
      _this.onResize();
    });
    this.resizeObserver.observe(this.$refs.container); // Initial screenmode -> = screenmode if exists / otherwise calculate from window dimensions

    if (this.screenMode) this.currentScreenMode = this.screenMode;else {
      cumulio_dashboardvue_type_script_lang_ts_EXTENTS.forEach(function (d) {
        if (d.width[0] <= window.innerWidth && window.innerWidth <= d.width[1]) {
          _this.currentScreenMode = d.mode;
        }
      });
    } // Create watcher for each prop

    var _loop = function _loop(k) {
      _this.$watch(k, function () {
        cumulio_service._setComponentContext(this); // Standard Height


        this.iframeLoaded = false;
        this.error = false;
        this.dashboardError = false; // Save input vars into Cumulio object + extend && validate

        cumulio_dashboardvue_type_script_lang_ts_browserCheck(this); // Save input values into Cumulio object


        this.setOptions(); // Extend and validate the params from cumulio-dashboard

        this.extendAndValidate();
        if (!this.initialized) return; // Check for loader errors and set language initializing

        this.getLoader(); // Generate iframe url when reload trigger property changes

        var triggerProps = ['dashboardId', 'dashboardSlug', 'editMode', 'editable', 'itemId', 'language', 'screenMode', 'switchScreenModeOnResize', 'authToken', 'authKey', 'appServer', 'timezoneId', 'apiHost'];

        if (triggerProps.includes(k)) {
          if (k === 'screenMode' || k === 'switchScreenModeOnResize') {
            this.currentScreenMode = this.screenMode;
            this.reloadDashboard();
          }

          this.getIframeURL();
          this.iframeStyle = this.calculateIframeStyles();
        }
      });
    };

    for (var k in this.$props) {
      _loop(k);
    }
  },
  unmounted: function unmounted() {
    this.resizeObserver.disconnect();

    cumulio_service._removeComponentContext(this);

    this.initialized = false;
    this.iframeLoaded = false;
  },
  methods: {
    // Public methods
    getData: function getData(itemId) {
      return get_data_getData(this, this.$refs.iframe, itemId);
    },
    getFilters: function getFilters() {
      return get_filters_getFilters(this, this.$refs.iframe);
    },
    setAuthorization: function setAuthorization(key, token) {
      return set_authorization_setAuthorization(this, this.$refs.iframe, key, token);
    },
    refreshData: function refreshData(itemId) {
      return itemId ? refresh_data_refreshData(this, this.$refs.iframe, itemId) : refresh_data_refreshData(this, this.$refs.iframe);
    },
    reloadDashboard: function reloadDashboard() {
      return reload_dashboard_reloadDashboard(this, this.$refs.iframe);
    },
    exportDashboard: function exportDashboard(format) {
      return format ? export_dashboard_exportDashboard(this, this.$refs.iframe, format) : export_dashboard_exportDashboard(this, this.$refs.iframe);
    },
    getAccessibleDashboards: function getAccessibleDashboards() {
      return get_accessible_dashboards_getAccessibleDashboards(this, this.$refs.iframe);
    },
    setEditMode: function setEditMode(editMode) {
      return set_edit_mode_setEditMode(this, this.$refs.iframe, editMode);
    },
    //for containerId
    s4: function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    generateParamsId: function generateParamsId() {
      return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
    },
    //Container element Id
    generateContainerId: function generateContainerId() {
      return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    },
    // On window resize-> set new borderwith from container.element -> calculate new dimensions;
    onResize: function onResize() {
      var _this2 = this;

      // Set width of container
      if (this.$refs.container) {
        this.containerWidth = this.$refs.container.offsetWidth; // Set the new screenmode if screenmode can be switched

        if (this.switchScreenModeOnResize && this.screenMode === 'auto') {
          cumulio_dashboardvue_type_script_lang_ts_EXTENTS.forEach(function (d) {
            if (d.width[0] <= window.innerWidth && window.innerWidth <= d.width[1]) {
              _this2.currentScreenMode = d.mode;
            }
          });
        } // Calculate new dimensions
        // Make sure the dashboard is loaded before calculating dim, else results in error


        if (this.iframeLoaded) {
          this.calculateDimAfterDashboardLoaded();
        }
      }
    },
    // Calculate dimensions after dashboard has finished loading
    calculateDimAfterDashboardLoaded: function calculateDimAfterDashboardLoaded() {
      this.iframeLoaded = true;
      this.loaderStyle = this.cioContainerLoaderStyles();

      cumulio_dashboardvue_type_script_lang_ts_setCalculatedDimensions(this);
    },

    /*-----------------
    | Service Methods |
    -----------------*/
    setOptions: function setOptions() {
      // Set inputs to params
      this.params.dashboardId = this.dashboardId;
      this.params.dashboardSlug = this.dashboardSlug;
      this.container = '#dashboard-' + this.containerId;
      this.params.language = this.language;
      this.params.screenMode = this.screenMode;
      this.params.switchScreenModeOnResize = this.switchScreenModeOnResize;
      this.params.itemId = this.itemId; // Optional values

      this.params.token = this.authToken;
      this.params.key = this.authKey;
      this.params.editMode = this.editMode;
      this.params.editable = this.editable;
      if (this.mainColor) this.params.mainColor = this.mainColor;
      if (this.accentColor) this.params.accentColor = this.accentColor;
      if (this.appServer) this.params.appServer = cumulio_dashboardvue_type_script_lang_ts_addTrailingSlash(this.appServer);
      if (this.timezoneId) this.params.timezoneId = this.timezoneId;

      if (this.apiHost) {
        this.params.apiHost = cumulio_dashboardvue_type_script_lang_ts_addTrailingSlash(this.apiHost);
      } else {
        this.params.apiHost = this.params.appServer.endsWith('cumul.io/') ? this.params.appServer.replace('app', 'api') : this.params.appServer;
      }

      if (this.itemDimensions) this.params.itemDimensions = this.itemDimensions; // Loader values (also optional)

      var loader = {};
      if (this.loaderBackground) loader.background = this.loaderBackground;
      if (this.loaderFontColor) loader.fontColor = this.loaderFontColor;
      if (this.loaderSpinnerColor) loader.spinnerColor = this.loaderSpinnerColor;
      if (this.loaderSpinnerBackground) loader.spinnerBackground = this.loaderSpinnerBackground;
      this.params.loader = loader; // Create an internal _id (this is used for setting dom id's & selectors & css) -> adds an _id property to params

      this.params._id = this.paramsId;
    },
    extendAndValidate: function extendAndValidate() {
      // Extend
      cumulio_dashboardvue_type_script_lang_ts_extendAndValidate(this);

      cumulio_service._setComponentContext(this);
    },
    getLoader: function getLoader() {
      var loader = _getLoader(this);

      this.msg = loader.loadingMsg;
      if (loader.errorMsg) this.displayError(loader);
    },
    getIframeURL: function getIframeURL() {
      this.sanitizedUrl = cumulio_dashboardvue_type_script_lang_ts_createIframeUrl(this);
    },
    // Gets called for non-supported browsers
    displayError: function displayError(error) {
      var key = this.params.itemEmbedding ? 'errorChart' : 'errorDashboard';
      this.cioError = Object.keys(cumulio_dashboardvue_type_script_lang_ts_TRANSLATIONS[key]).indexOf(this.params.language || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.language) > -1 ? cumulio_dashboardvue_type_script_lang_ts_TRANSLATIONS[key][this.params.language || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.language] : cumulio_dashboardvue_type_script_lang_ts_TRANSLATIONS[key].en;
      if (error && error.errorMsg) this.cioError = error.errorMsg;
      this.error = true;
    },
    // iframe
    calculateIframeStyles: function calculateIframeStyles() {
      if (this.params.itemEmbedding && (this.params.itemDimensions.height || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.height) !== 'auto') this.iframeHeight = (this.params.language || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.height) + 'px';else if (this.params.itemEmbedding) this.iframeHeight = '200px';else this.iframeHeight = '400px'; // Standard Width

      if (this.params.itemEmbedding && (this.params.itemDimensions.width || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.width) !== 'auto') this.iframeWidth = (this.params.itemDimensions.width || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.width) + 'px';else this.iframeWidth = '100%';
      var styles = {
        height: this.iframeHeight,
        width: this.iframeWidth,
        opacity: 0
      }; // If status loaded, show iframe

      if (this.iframeLoaded) styles.opacity = 1;else if (this.error && this.dashboardError) {
        styles.opacity = 1;
        styles.width = '100%';
        styles.height = '400px';
      } else styles.opacity = 0;
      return styles;
    },
    // cio-container-loader
    cioContainerLoaderStyles: function cioContainerLoaderStyles() {
      //TODO fix loader for chart embedding
      var chartHeightDefined = this.params.itemEmbedding && (this.params.itemDimensions.width || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.height) !== 'auto';
      var displays = '';
      if (this.iframeLoaded) displays = 'none';else displays = '';
      var styles = {
        height: (chartHeightDefined ? this.params.itemDimensions.height || cumulio_dashboardvue_type_script_lang_ts_DEFAULT_PARAMETERS.itemDimensions.height : this.minHeight) + 'px',
        display: displays
      };
      return styles;
    }
  }
}));
// CONCATENATED MODULE: ./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=style&index=0&id=15ead0e0&lang=css
var cumulio_dashboardvue_type_style_index_0_id_15ead0e0_lang_css = __webpack_require__("bf27");

// EXTERNAL MODULE: ./src/lib/dashboard-component/cumulio-dashboard.vue?vue&type=style&index=1&id=15ead0e0&lang=css
var cumulio_dashboardvue_type_style_index_1_id_15ead0e0_lang_css = __webpack_require__("dcca");

// EXTERNAL MODULE: D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("26df");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/lib/dashboard-component/cumulio-dashboard.vue








const __exports__ = /*#__PURE__*/exportHelper_default()(cumulio_dashboardvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var cumulio_dashboard = (__exports__);
// CONCATENATED MODULE: ./src/lib/index.ts
/* eslint-disable import/prefer-default-export */

// CONCATENATED MODULE: ./src/entry.esm.ts



Object(lib["install"])(); // Import vue components


 // install function executed by Vue.use()

var entry_esm_install = function install(app) {
  var entries = Object.entries(lib_namespaceObject);

  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var _entries$_i = _slicedToArray(_entries[_i], 2),
        componentName = _entries$_i[0],
        component = _entries$_i[1];

    app.component(componentName, component);
  } // app.component("cumulioService", CumulioService as Object)
  // app.config.globalProperties.$cumulioService = CumulioService;

}; // Create module definition for Vue.use()


/* harmony default export */ var entry_esm = (entry_esm_install); // To allow individual component use, export components
// each can be registered via Vue.component()



// CONCATENATED MODULE: ./src/index.ts


// iife/cjs usage extends esm default export - so import it all


var src_entries = Object.entries(entry_esm_namespaceObject);

for (var src_i = 0, src_entries_0 = src_entries; src_i < src_entries_0.length; src_i++) {
  var src_entries$_i = _slicedToArray(src_entries_0[src_i], 2),
      src_componentName = src_entries$_i[0],
      src_component = src_entries$_i[1];

  if (src_componentName !== 'default') {
    var src_key = src_componentName;
    var src_value = src_component;
    entry_esm[src_key] = src_value;
  }
}

entry_esm.CumulioService = cumulio_service;
/* harmony default export */ var src_0 = (entry_esm);
// CONCATENATED MODULE: D:/cumul.io/cumulio-libs/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "1d2e":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "1d8a":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "1f5e":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("378c");
var toAbsoluteIndex = __webpack_require__("9a0f");
var lengthOfArrayLike = __webpack_require__("0481");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "2017":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "2117":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("63d3");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "2402":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2435":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isCallable = __webpack_require__("3ce8");
var fails = __webpack_require__("72df");
var bind = __webpack_require__("2117");
var html = __webpack_require__("9324");
var createElement = __webpack_require__("f2bf");
var IS_IOS = __webpack_require__("e03e");
var IS_NODE = __webpack_require__("f117");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var argumentsLength = arguments.length;
    var i = 1;
    while (argumentsLength > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (isCallable(fn) ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "26d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var IS_PURE = __webpack_require__("0e93");
var global = __webpack_require__("f498");
var getBuiltIn = __webpack_require__("5428");
var NativePromise = __webpack_require__("2903");
var redefine = __webpack_require__("b8ba");
var redefineAll = __webpack_require__("b203");
var setPrototypeOf = __webpack_require__("c1a2");
var setToStringTag = __webpack_require__("fa46");
var setSpecies = __webpack_require__("0a1e");
var aCallable = __webpack_require__("63d3");
var isCallable = __webpack_require__("3ce8");
var isObject = __webpack_require__("7526");
var anInstance = __webpack_require__("4cce");
var inspectSource = __webpack_require__("df6f");
var iterate = __webpack_require__("b578");
var checkCorrectnessOfIteration = __webpack_require__("3211");
var speciesConstructor = __webpack_require__("433a");
var task = __webpack_require__("2435").set;
var microtask = __webpack_require__("8573");
var promiseResolve = __webpack_require__("9c36");
var hostReportErrors = __webpack_require__("422d");
var newPromiseCapabilityModule = __webpack_require__("881c");
var perform = __webpack_require__("42ba");
var InternalStateModule = __webpack_require__("cdcd");
var isForced = __webpack_require__("ebac");
var wellKnownSymbol = __webpack_require__("7d53");
var IS_BROWSER = __webpack_require__("defa");
var IS_NODE = __webpack_require__("f117");
var V8_VERSION = __webpack_require__("4fed");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aCallable(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "26df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "2903":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = global.Promise;


/***/ }),

/***/ "2a3e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("da06");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "2aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var exec = __webpack_require__("42c5");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "2c3d":
/***/ (function(module, exports) {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    mergeSort(array.slice(0, middle), comparefn),
    mergeSort(array.slice(middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  } return result;
};

module.exports = mergeSort;


/***/ }),

/***/ "2d6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $filter = __webpack_require__("d054").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var IS_PURE = __webpack_require__("0e93");
var FunctionName = __webpack_require__("d331");
var isCallable = __webpack_require__("3ce8");
var createIteratorConstructor = __webpack_require__("2e3f");
var getPrototypeOf = __webpack_require__("0e39");
var setPrototypeOf = __webpack_require__("c1a2");
var setToStringTag = __webpack_require__("fa46");
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var wellKnownSymbol = __webpack_require__("7d53");
var Iterators = __webpack_require__("5bb7");
var IteratorsCore = __webpack_require__("ff89");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "2e3f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ff89").IteratorPrototype;
var create = __webpack_require__("82e8");
var createPropertyDescriptor = __webpack_require__("9618");
var setToStringTag = __webpack_require__("fa46");
var Iterators = __webpack_require__("5bb7");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "2ea2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("8aef");
var collectionStrong = __webpack_require__("3ad5");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "2f6a":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var global = __webpack_require__("f498");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "3211":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "32f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var fails = __webpack_require__("72df");
var anObject = __webpack_require__("157c");
var isCallable = __webpack_require__("3ce8");
var toIntegerOrInfinity = __webpack_require__("9616");
var toLength = __webpack_require__("b495");
var toString = __webpack_require__("2a3e");
var requireObjectCoercible = __webpack_require__("730c");
var advanceStringIndex = __webpack_require__("e3f6");
var getMethod = __webpack_require__("60de");
var getSubstitution = __webpack_require__("79b4");
var regExpExec = __webpack_require__("df8c");
var wellKnownSymbol = __webpack_require__("7d53");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "332c":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("4cdd");
var uid = __webpack_require__("1d8a");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "378c":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("83a6");
var requireObjectCoercible = __webpack_require__("730c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "37d1":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("730c");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "3ad5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("abdf").f;
var create = __webpack_require__("82e8");
var redefineAll = __webpack_require__("b203");
var bind = __webpack_require__("2117");
var anInstance = __webpack_require__("4cce");
var iterate = __webpack_require__("b578");
var defineIterator = __webpack_require__("2df4");
var setSpecies = __webpack_require__("0a1e");
var DESCRIPTORS = __webpack_require__("d4cb");
var fastKey = __webpack_require__("e023").fastKey;
var InternalStateModule = __webpack_require__("cdcd");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "3c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3ce8":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "3cec":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "3e32":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "3e34":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "3f5a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("63d3");
var anObject = __webpack_require__("157c");
var getIteratorMethod = __webpack_require__("0446");

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};


/***/ }),

/***/ "405b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "422d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "4243":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var fails = __webpack_require__("72df");
var toString = __webpack_require__("2a3e");
var trim = __webpack_require__("61ad").trim;
var whitespaces = __webpack_require__("fbf7");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "42ba":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "42c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__("2a3e");
var regexpFlags = __webpack_require__("abfd");
var stickyHelpers = __webpack_require__("2f6a");
var shared = __webpack_require__("4cdd");
var create = __webpack_require__("82e8");
var getInternalState = __webpack_require__("cdcd").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("7d08");
var UNSUPPORTED_NCG = __webpack_require__("1543");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "433a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var aConstructor = __webpack_require__("004f");
var wellKnownSymbol = __webpack_require__("7d53");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "4912":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "4cce":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};


/***/ }),

/***/ "4cdd":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("0e93");
var store = __webpack_require__("c607");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "4cf0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f0d");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5711");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7326")(module)))

/***/ }),

/***/ "4db4":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("e7a0");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "4fed":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var userAgent = __webpack_require__("64e4");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "5268":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var classof = __webpack_require__("da06");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "5428":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isCallable = __webpack_require__("3ce8");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "5637":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");
var global = __webpack_require__("f498");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "5711":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),

/***/ "58d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("95b2");
var anObject = __webpack_require__("157c");
var toLength = __webpack_require__("b495");
var toString = __webpack_require__("2a3e");
var requireObjectCoercible = __webpack_require__("730c");
var getMethod = __webpack_require__("60de");
var advanceStringIndex = __webpack_require__("e3f6");
var regExpExec = __webpack_require__("df8c");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "5b12":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var definePropertyModule = __webpack_require__("abdf");
var createPropertyDescriptor = __webpack_require__("9618");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "5ba0":
/***/ (function(module, exports) {

var valueOf = 1.0.valueOf;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  return valueOf.call(value);
};


/***/ }),

/***/ "5bb7":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "6009":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var objectKeys = __webpack_require__("0c47");
var toIndexedObject = __webpack_require__("378c");
var propertyIsEnumerable = __webpack_require__("e129").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "60de":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("63d3");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "612a":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue2", function() { return Vue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue2", function() { return isVue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue3", function() { return isVue3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony reexport (fake namespace object from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return __webpack_require__.t(vue__WEBPACK_IMPORTED_MODULE_0__); });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in vue__WEBPACK_IMPORTED_MODULE_0__) if(["default","set","del","Vue","Vue2","isVue2","isVue3","install"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


var isVue2 = false
var isVue3 = true
var Vue2 = undefined

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}





/***/ }),

/***/ "61ad":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("730c");
var toString = __webpack_require__("2a3e");
var whitespaces = __webpack_require__("fbf7");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "63d3":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");
var tryToString = __webpack_require__("4912");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "64e4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "6559":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var $entries = __webpack_require__("6009").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "65d0":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("c91c");
var enumBugKeys = __webpack_require__("b17e");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "671a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b0ab");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("ae5e3260", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6a61":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6a86":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("9c1c");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6b1d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var createNonEnumerableProperty = __webpack_require__("5b12");
var redefine = __webpack_require__("b8ba");
var setGlobal = __webpack_require__("3e34");
var copyConstructorProperties = __webpack_require__("b634");
var isForced = __webpack_require__("ebac");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "7004":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("b8ba");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "7297":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isCallable = __webpack_require__("3ce8");
var inspectSource = __webpack_require__("df6f");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "72df":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "730c":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "7326":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "74b7":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var parseInt = __webpack_require__("4243");

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ "7526":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "79b4":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("37d1");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "7a25":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("37d1");

var hasOwnProperty = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "7c3f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var fails = __webpack_require__("72df");
var createElement = __webpack_require__("f2bf");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "7d08":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var global = __webpack_require__("f498");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "7d15":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "7d53":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var shared = __webpack_require__("4cdd");
var hasOwn = __webpack_require__("7a25");
var uid = __webpack_require__("1d8a");
var NATIVE_SYMBOL = __webpack_require__("e7a0");
var USE_SYMBOL_AS_UID = __webpack_require__("4db4");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "7f0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("92ae");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ "7f8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("72df");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "802e":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "8081":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("730c");
var toString = __webpack_require__("2a3e");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "82e8":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("157c");
var defineProperties = __webpack_require__("b99b");
var enumBugKeys = __webpack_require__("b17e");
var hiddenKeys = __webpack_require__("d687");
var html = __webpack_require__("9324");
var documentCreateElement = __webpack_require__("f2bf");
var sharedKey = __webpack_require__("332c");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "83a6":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var classof = __webpack_require__("6a61");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "841a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $find = __webpack_require__("d054").find;
var addToUnscopables = __webpack_require__("ed2b");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "8573":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var macrotask = __webpack_require__("2435").set;
var IS_IOS = __webpack_require__("e03e");
var IS_IOS_PEBBLE = __webpack_require__("5637");
var IS_WEBOS_WEBKIT = __webpack_require__("1d2e");
var IS_NODE = __webpack_require__("f117");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "868d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var FUNCTION_NAME_EXISTS = __webpack_require__("d331").EXISTS;
var defineProperty = __webpack_require__("abdf").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "881c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("63d3");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "8aef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var isForced = __webpack_require__("ebac");
var redefine = __webpack_require__("b8ba");
var InternalMetadataModule = __webpack_require__("e023");
var iterate = __webpack_require__("b578");
var anInstance = __webpack_require__("4cce");
var isCallable = __webpack_require__("3ce8");
var isObject = __webpack_require__("7526");
var fails = __webpack_require__("72df");
var checkCorrectnessOfIteration = __webpack_require__("3211");
var setToStringTag = __webpack_require__("fa46");
var inheritIfRequired = __webpack_require__("8fa9");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $includes = __webpack_require__("1f5e").includes;
var addToUnscopables = __webpack_require__("ed2b");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "8e5d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7526");
var classof = __webpack_require__("6a61");
var wellKnownSymbol = __webpack_require__("7d53");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "8f0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var forEach = __webpack_require__("e8e5");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "8fa9":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");
var isObject = __webpack_require__("7526");
var setPrototypeOf = __webpack_require__("c1a2");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "918c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var DOMIterables = __webpack_require__("130d");
var DOMTokenListPrototype = __webpack_require__("95e4");
var ArrayIteratorMethods = __webpack_require__("9531");
var createNonEnumerableProperty = __webpack_require__("5b12");
var wellKnownSymbol = __webpack_require__("7d53");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"1.0.12\"}");

/***/ }),

/***/ "92ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "9324":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "9531":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("378c");
var addToUnscopables = __webpack_require__("ed2b");
var Iterators = __webpack_require__("5bb7");
var InternalStateModule = __webpack_require__("cdcd");
var defineIterator = __webpack_require__("2df4");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "95ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "95b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("2aa5");
var redefine = __webpack_require__("b8ba");
var regexpExec = __webpack_require__("42c5");
var fails = __webpack_require__("72df");
var wellKnownSymbol = __webpack_require__("7d53");
var createNonEnumerableProperty = __webpack_require__("5b12");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "95e4":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("f2bf");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "9616":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "9618":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "9951":
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__("d331").PROPER;
var fails = __webpack_require__("72df");
var whitespaces = __webpack_require__("fbf7");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "9a0f":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("9616");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "9a51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var toLength = __webpack_require__("b495");
var toString = __webpack_require__("2a3e");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var correctIsRegExpLogic = __webpack_require__("3e32");
var IS_PURE = __webpack_require__("0e93");

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var $endsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "9c1c":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("c6de");
var isConstructor = __webpack_require__("c42f");
var isObject = __webpack_require__("7526");
var wellKnownSymbol = __webpack_require__("7d53");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "9c36":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var isObject = __webpack_require__("7526");
var newPromiseCapability = __webpack_require__("881c");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "9eea":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("8e5d");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "a03e":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5428");
var getOwnPropertyNamesModule = __webpack_require__("65d0");
var getOwnPropertySymbolsModule = __webpack_require__("2402");
var anObject = __webpack_require__("157c");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "aaba":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var getMethod = __webpack_require__("60de");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "abdf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var IE8_DOM_DEFINE = __webpack_require__("7c3f");
var anObject = __webpack_require__("157c");
var toPropertyKey = __webpack_require__("feca");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "abfd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("157c");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b07c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b0ab":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b151":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var global = __webpack_require__("f498");
var isCallable = __webpack_require__("3ce8");
var userAgent = __webpack_require__("64e4");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (isCallable(handler) ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "b17e":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "b203":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("b8ba");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "b2c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var createHTML = __webpack_require__("8081");
var forcedStringHTMLMethod = __webpack_require__("b07c");

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "b495":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("9616");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "b506":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var aCallable = __webpack_require__("63d3");
var toObject = __webpack_require__("37d1");
var lengthOfArrayLike = __webpack_require__("0481");
var toString = __webpack_require__("2a3e");
var fails = __webpack_require__("72df");
var internalSort = __webpack_require__("2c3d");
var arrayMethodIsStrict = __webpack_require__("7f8a");
var FF = __webpack_require__("e437");
var IE_OR_EDGE = __webpack_require__("f3f8");
var V8 = __webpack_require__("4fed");
var WEBKIT = __webpack_require__("2017");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "b55a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $trim = __webpack_require__("61ad").trim;
var forcedStringTrimMethod = __webpack_require__("9951");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "b578":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var isArrayIteratorMethod = __webpack_require__("c965");
var lengthOfArrayLike = __webpack_require__("0481");
var bind = __webpack_require__("2117");
var getIterator = __webpack_require__("3f5a");
var getIteratorMethod = __webpack_require__("0446");
var iteratorClose = __webpack_require__("aaba");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "b634":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("7a25");
var ownKeys = __webpack_require__("a03e");
var getOwnPropertyDescriptorModule = __webpack_require__("185a");
var definePropertyModule = __webpack_require__("abdf");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "b7fb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("9616");
var toString = __webpack_require__("2a3e");
var requireObjectCoercible = __webpack_require__("730c");

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "b8ba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isCallable = __webpack_require__("3ce8");
var hasOwn = __webpack_require__("7a25");
var createNonEnumerableProperty = __webpack_require__("5b12");
var setGlobal = __webpack_require__("3e34");
var inspectSource = __webpack_require__("df6f");
var InternalStateModule = __webpack_require__("cdcd");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("d331").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "b99b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var definePropertyModule = __webpack_require__("abdf");
var anObject = __webpack_require__("157c");
var objectKeys = __webpack_require__("0c47");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "beb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__("6b1d");
var $indexOf = __webpack_require__("1f5e").indexOf;
var arrayMethodIsStrict = __webpack_require__("7f8a");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "bf27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_0_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("671a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_0_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_0_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c1a2":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("157c");
var aPossiblePrototype = __webpack_require__("f3e4");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "c42f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var isCallable = __webpack_require__("3ce8");
var classof = __webpack_require__("da06");
var getBuiltIn = __webpack_require__("5428");
var inspectSource = __webpack_require__("df6f");

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "c607":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var setGlobal = __webpack_require__("3e34");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c6de":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6a61");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "c78b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var toString = __webpack_require__("2a3e");
var correctIsRegExpLogic = __webpack_require__("3e32");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "c91c":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("7a25");
var toIndexedObject = __webpack_require__("378c");
var indexOf = __webpack_require__("1f5e").indexOf;
var hiddenKeys = __webpack_require__("d687");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "c965":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");
var Iterators = __webpack_require__("5bb7");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "cdcd":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7297");
var global = __webpack_require__("f498");
var isObject = __webpack_require__("7526");
var createNonEnumerableProperty = __webpack_require__("5b12");
var hasOwn = __webpack_require__("7a25");
var shared = __webpack_require__("c607");
var sharedKey = __webpack_require__("332c");
var hiddenKeys = __webpack_require__("d687");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "ce3e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d9f3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("a74eec5e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "cfce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var $map = __webpack_require__("d054").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("189b");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "cfd1":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");
var getBuiltIn = __webpack_require__("5428");
var USE_SYMBOL_AS_UID = __webpack_require__("4db4");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "d054":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("2117");
var IndexedObject = __webpack_require__("83a6");
var toObject = __webpack_require__("37d1");
var lengthOfArrayLike = __webpack_require__("0481");
var arraySpeciesCreate = __webpack_require__("6a86");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "d331":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("d4cb");
var hasOwn = __webpack_require__("7a25");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "d4cb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "d687":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d6f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f0d");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7326")(module)))

/***/ }),

/***/ "d9f3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":host{position:relative;width:100%}.cio-embed-dashboard{background:transparent;padding:0;border:0}.cio-container-loader{width:100%;position:relative}.cio-lc{margin:0 auto}.cio-loading-message{width:100%;height:20px;text-align:center;margin-bottom:16px;font-family:Helvetica,Arial,sans-serif;font-size:14px}.cio-loading-circle{box-sizing:border-box;margin:16px auto;position:relative;text-indent:-9999em;-webkit-animation:spin .6s linear infinite;animation:spin .6s linear infinite}.cio-loading-circle,.cio-loading-circle:after{border-radius:50%;width:32px;height:32px}.itemEmbedding:after{width:24px;height:24px}.cio-error,.dashboard-error{background:transparent;padding:48px 0;margin:0 auto;width:80%;border:0;text-align:center;min-height:192px}.dashboard-error{font-size:30px}.cio-loader{top:0;left:0;width:100%;min-height:400px;position:absolute;transition-duration:.3s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "da06":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var isCallable = __webpack_require__("3ce8");
var classofRaw = __webpack_require__("6a61");
var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "dcca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_1_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce3e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_1_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cumulio_dashboard_vue_vue_type_style_index_1_id_15ead0e0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "defa":
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "df26":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "df6f":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");
var store = __webpack_require__("c607");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "df8c":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("157c");
var isCallable = __webpack_require__("3ce8");
var classof = __webpack_require__("6a61");
var regexpExec = __webpack_require__("42c5");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "e023":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var hiddenKeys = __webpack_require__("d687");
var isObject = __webpack_require__("7526");
var hasOwn = __webpack_require__("7a25");
var defineProperty = __webpack_require__("abdf").f;
var getOwnPropertyNamesModule = __webpack_require__("65d0");
var getOwnPropertyNamesExternalModule = __webpack_require__("ee58");
var uid = __webpack_require__("1d8a");
var FREEZING = __webpack_require__("95ad");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "e03e":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "e129":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "e3f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b7fb").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "e437":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("64e4");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "e7a0":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("4fed");
var fails = __webpack_require__("72df");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "e8e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("d054").forEach;
var arrayMethodIsStrict = __webpack_require__("7f8a");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "e94e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("d4cb");
var global = __webpack_require__("f498");
var isForced = __webpack_require__("ebac");
var redefine = __webpack_require__("b8ba");
var hasOwn = __webpack_require__("7a25");
var inheritIfRequired = __webpack_require__("8fa9");
var isSymbol = __webpack_require__("cfd1");
var toPrimitive = __webpack_require__("083f");
var fails = __webpack_require__("72df");
var getOwnPropertyNames = __webpack_require__("65d0").f;
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var defineProperty = __webpack_require__("abdf").f;
var thisNumberValue = __webpack_require__("5ba0");
var trim = __webpack_require__("61ad").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "eba0":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");
var isObject = __webpack_require__("7526");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "ebac":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("72df");
var isCallable = __webpack_require__("3ce8");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "ed2b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("7d53");
var create = __webpack_require__("82e8");
var definePropertyModule = __webpack_require__("abdf");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ee58":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("378c");
var $getOwnPropertyNames = __webpack_require__("65d0").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "ef14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var IndexedObject = __webpack_require__("83a6");
var toIndexedObject = __webpack_require__("378c");
var arrayMethodIsStrict = __webpack_require__("7f8a");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "ef1f":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3cec");
var redefine = __webpack_require__("b8ba");
var toString = __webpack_require__("5268");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "f117":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6a61");
var global = __webpack_require__("f498");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "f2bf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var isObject = __webpack_require__("7526");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "f3b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b7fb").charAt;
var toString = __webpack_require__("2a3e");
var InternalStateModule = __webpack_require__("cdcd");
var defineIterator = __webpack_require__("2df4");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "f3e4":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("3ce8");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "f3f8":
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__("64e4");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "f498":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "f8a5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var toObject = __webpack_require__("37d1");
var nativeKeys = __webpack_require__("0c47");
var fails = __webpack_require__("72df");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "fa46":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("abdf").f;
var hasOwn = __webpack_require__("7a25");
var wellKnownSymbol = __webpack_require__("7d53");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "fa8c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("f498");
var DOMIterables = __webpack_require__("130d");
var DOMTokenListPrototype = __webpack_require__("95e4");
var forEach = __webpack_require__("e8e5");
var createNonEnumerableProperty = __webpack_require__("5b12");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "fbf3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),

/***/ "fbf7":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "feca":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("083f");
var isSymbol = __webpack_require__("cfd1");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "ff89":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("72df");
var isCallable = __webpack_require__("3ce8");
var create = __webpack_require__("82e8");
var getPrototypeOf = __webpack_require__("0e39");
var redefine = __webpack_require__("b8ba");
var wellKnownSymbol = __webpack_require__("7d53");
var IS_PURE = __webpack_require__("0e93");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ })

/******/ });
});
//# sourceMappingURL=vue-cumulio-dashboard.umd.js.map