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
/******/ 	__webpack_require__.p = "/public/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19),
	__webpack_require__(2),
	__webpack_require__(78),
	__webpack_require__(23),
	__webpack_require__(46),
	__webpack_require__(47),
	__webpack_require__(26),
	__webpack_require__(22),
	__webpack_require__(48),
	__webpack_require__(25),
	__webpack_require__(49),
	__webpack_require__(79),
	__webpack_require__(9),
	__webpack_require__(1),
	__webpack_require__(20),
	__webpack_require__(50),
	__webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, isFunction, isWindow, DOMEval, toType ) {

"use strict";

var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.document;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(81) ], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(73);
var isBuffer = __webpack_require__(132);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(55),

	__webpack_require__(56)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(14),
	__webpack_require__(33),
	__webpack_require__(13),
	__webpack_require__(86),
	__webpack_require__(58),
	__webpack_require__(87),
	__webpack_require__(35),
	__webpack_require__(88),
	__webpack_require__(92),
	__webpack_require__(15),
	__webpack_require__(96),
	__webpack_require__(24),
	__webpack_require__(98),
	__webpack_require__(101),
	__webpack_require__(18),
	__webpack_require__(102),
	__webpack_require__(72),
	__webpack_require__(16),
	__webpack_require__(103),
	__webpack_require__(104),
	__webpack_require__(105),
	__webpack_require__(106),
	__webpack_require__(109),
	__webpack_require__(36),
	__webpack_require__(110),
	__webpack_require__(111),
	__webpack_require__(112),
	__webpack_require__(113),
	__webpack_require__(115),
	__webpack_require__(116)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return jQuery;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(59)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	return ( /[^\x20\t\r\n\f]+/g );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(12),
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(22),
	__webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type, toString ) {

"use strict";

function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(23),
	__webpack_require__(33)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(26),
	__webpack_require__(84),
	__webpack_require__(85),
	__webpack_require__(57),
	__webpack_require__(11),

	__webpack_require__(5),
	__webpack_require__(56),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(32),
	__webpack_require__(1),
	__webpack_require__(8),
	__webpack_require__(23),
	__webpack_require__(7),
	__webpack_require__(11),

	__webpack_require__(5),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, isFunction, rnothtmlwhite,
	slice, dataPriv, nodeName ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(8),
	__webpack_require__(99),
	__webpack_require__(71),
	__webpack_require__(70),

	__webpack_require__(5),
	__webpack_require__(100),
	__webpack_require__(39),
	__webpack_require__(13),
	__webpack_require__(72) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : global)

module.exports = {
	assign: assign,
	create: create,
	trim: trim,
	bind: bind,
	slice: slice,
	each: each,
	map: map,
	pluck: pluck,
	isList: isList,
	isFunction: isFunction,
	isObject: isObject,
	Global: Global
}

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function(val, key) {
					obj[key] = val
				})
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function(val, key) {
		fn(val, key)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function(v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(28),
	__webpack_require__(10),
	__webpack_require__(21),
	__webpack_require__(2),
	__webpack_require__(27),
	__webpack_require__(29),
	__webpack_require__(30),
	__webpack_require__(51),
	__webpack_require__(45),
	__webpack_require__(52),
	__webpack_require__(53),
	__webpack_require__(54),
	__webpack_require__(31),

	__webpack_require__(5),
	__webpack_require__(58),
	__webpack_require__(3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, pnum, access, camelCase, document, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}

return camelCase;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(46),
	__webpack_require__(1),
	__webpack_require__(47),
	__webpack_require__(10),
	__webpack_require__(68),
	__webpack_require__(63),
	__webpack_require__(64),
	__webpack_require__(65),
	__webpack_require__(66),
	__webpack_require__(67),
	__webpack_require__(62),
	__webpack_require__(90),

	__webpack_require__(7),
	__webpack_require__(60),
	__webpack_require__(34),
	__webpack_require__(50),
	__webpack_require__(11),

	__webpack_require__(5),
	__webpack_require__(14),
	__webpack_require__(3),
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, concat, isFunction, push, access,
	rcheckableType, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(28)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(28)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(32),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(12),
	__webpack_require__(1),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(13),
	__webpack_require__(33)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(21),
	__webpack_require__(2),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(8),
	__webpack_require__(30),
	__webpack_require__(61),
	__webpack_require__(45),
	__webpack_require__(53),
	__webpack_require__(7),
	__webpack_require__(89),

	__webpack_require__(5),
	__webpack_require__(35),
	__webpack_require__(13),
	__webpack_require__(14),
	__webpack_require__(24),
	__webpack_require__(18),
	__webpack_require__(91)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand,
	isHiddenWithinTree, swap, adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(7),
	__webpack_require__(34),
	__webpack_require__(25),
	__webpack_require__(1),
	__webpack_require__(20),
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(4);
var normalizeHeaderName = __webpack_require__(134);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(74);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(74);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task){
    if('requestAnimationFrame' in window){
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

function setElementScroll(element, x, y){
    if(element.self === element){
        element.scrollTo(x, y);
    }else{
        element.scrollLeft = x;
        element.scrollTop = y;
    }
}

function getTargetScrollLocation(target, parent, align){
    var targetPosition = target.getBoundingClientRect(),
        parentPosition,
        x,
        y,
        differenceX,
        differenceY,
        targetWidth,
        targetHeight,
        leftAlign = align && align.left != null ? align.left : 0.5,
        topAlign = align && align.top != null ? align.top : 0.5,
        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
        topOffset = align && align.topOffset != null ? align.topOffset : 0,
        leftScalar = leftAlign,
        topScalar = topAlign;

    if(parent.self === parent){
        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        differenceX = x - parent.pageXOffset;
        differenceY = y - parent.pageYOffset;
    }else{
        targetWidth = targetPosition.width;
        targetHeight = targetPosition.height;
        parentPosition = parent.getBoundingClientRect();
        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
        x -= leftOffset;
        y -= topOffset;
        differenceX = x - parent.scrollLeft;
        differenceY = y - parent.scrollTop;
    }

    return {
        x: x,
        y: y,
        differenceX: differenceX,
        differenceY: differenceY
    };
}

function animate(parent){
    raf(function(){
        var scrollSettings = parent._scrollSettings;
        if(!scrollSettings){
            return;
        }

        var location = getTargetScrollLocation(scrollSettings.target, parent, scrollSettings.align),
            time = Date.now() - scrollSettings.startTime,
            timeValue = Math.min(1 / scrollSettings.time * time, 1);

        if(
            time > scrollSettings.time + 20
        ){
            setElementScroll(parent, location.x, location.y);
            parent._scrollSettings = null;
            return scrollSettings.end(COMPLETE);
        }

        var easeValue = 1 - scrollSettings.ease(timeValue);

        setElementScroll(parent,
            location.x - location.differenceX * easeValue,
            location.y - location.differenceY * easeValue
        );

        animate(parent);
    });
}
function transitionScrollTo(target, parent, settings, callback){
    var idle = !parent._scrollSettings,
        lastSettings = parent._scrollSettings,
        now = Date.now(),
        endHandler;

    if(lastSettings){
        lastSettings.end(CANCELED);
    }

    function end(endType){
        parent._scrollSettings = null;
        if(parent.parentElement && parent.parentElement._scrollSettings){
            parent.parentElement._scrollSettings.end(endType);
        }
        callback(endType);
        parent.removeEventListener('touchstart', endHandler);
    }

    parent._scrollSettings = {
        startTime: lastSettings ? lastSettings.startTime : Date.now(),
        target: target,
        time: settings.time + (lastSettings ? now - lastSettings.startTime : 0),
        ease: settings.ease,
        align: settings.align,
        end: end
    };

    endHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', endHandler);

    if(idle){
        animate(parent);
    }
}

function defaultIsScrollable(element){
    return (
        'pageXOffset' in element ||
        (
            element.scrollHeight !== element.clientHeight ||
            element.scrollWidth !== element.clientWidth
        ) &&
        getComputedStyle(element).overflow !== 'hidden'
    );
}

function defaultValidTarget(){
    return true;
}

module.exports = function(target, settings, callback){
    if(!target){
        return;
    }

    if(typeof settings === 'function'){
        callback = settings;
        settings = null;
    }

    if(!settings){
        settings = {};
    }

    settings.time = isNaN(settings.time) ? 1000 : settings.time;
    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};

    var parent = target.parentElement,
        parents = 0;

    function done(endType){
        parents--;
        if(!parents){
            callback && callback(endType);
        }
    }

    var validTarget = settings.validTarget || defaultValidTarget;
    var isScrollable = settings.isScrollable;

    while(parent){
        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
            parents++;
            transitionScrollTo(target, parent, settings, done);
        }

        parent = parent.parentElement;

        if(!parent){
            return;
        }

        if(parent.tagName === 'BODY'){
            parent = parent.ownerDocument;
            parent = parent.defaultView || parent.ownerWindow;
        }
    }
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchTimingData;
/* harmony export (immutable) */ __webpack_exports__["c"] = getConfig;
/* harmony export (immutable) */ __webpack_exports__["d"] = loadConfig;
/* harmony export (immutable) */ __webpack_exports__["b"] = getAudioInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



//mp3 and audio timing base directories
const audioBase = "https://s3.amazonaws.com/assets.christmind.info/wom/audio";
const timingBase = "/public/timing";

//location of configuration files
const configUrl = "/public/config";

//the current configuration, initially null, assigned by getConfig()
let config;

function requestConfiguration(url) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url);
}

/* 
  check if config has changed since we last stored it
*/
function refreshNeeded(bid, fetchDate) {
  //values of lastChanged are loaded from webpack
  const lastChanged = {
    woh: 1520839069378,
    wot: 1520839069378,
    wok: 1520839069378,
    wos: 1520839069378,
    tjl: 1520839069378,
    early: 1520839069378
  };

  if (lastChanged[bid] > fetchDate) {
    //console.log("Requesting %s config file", bid);
    return true;
  }

  return false;
}

/*
  Fetch audio timing data
*/
function fetchTimingData(url) {
  return new Promise((resolve, reject) => {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(`${timingBase}${url}`).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/*
  We use book level configuration that is loaded by request via AJAX. Once
  loaded the config is persisted in local storage. A check is made for
  configuration data loaded from storage to determine if the data needs to
  be reloaded. This is indicated using Define-webpack-plugin to set the timestamp
  of configurations that have changed.
*/
function getConfig(book) {
  return new Promise((resolve, reject) => {
    let cfg = __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(`config-${book}`);
    let url;

    //if config in local storage check if we need to get a freash copy
    if (cfg && !refreshNeeded(cfg.bid, cfg.lastFetchDate)) {
      config = cfg;
      resolve(cfg);
    }

    //get config from server
    url = `${configUrl}/${book}.json`;
    requestConfiguration(url).then(response => {
      //add fetch date before storing
      response.data.lastFetchDate = Date.now();
      __WEBPACK_IMPORTED_MODULE_0_store___default.a.set(`config-${book}`, response.data);
      config = response.data;
      resolve(response.data);
    }).catch(error => {
      config = null;
      reject(error);
    });
  });
}

/*
  For transcript pages; load the configuration file.
  For non-transcript pages; configuration is loaded by getConfig()

  This is the same as getConfig() except it doesn't resolve passing the data
  but a message indicating source of the configuration file
*/
function loadConfig(book) {
  return new Promise((resolve, reject) => {
    let cfg = __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(`config-${book}`);
    let url;

    //if config in local storage check if we need to get a freash copy
    if (cfg && !refreshNeeded(cfg.bid, cfg.lastFetchDate)) {
      config = cfg;
      resolve("config read from cache");
    }

    //get config from server
    url = `${configUrl}/${book}.json`;
    requestConfiguration(url).then(response => {
      //add fetch date before storing
      response.data.lastFetchDate = Date.now();
      __WEBPACK_IMPORTED_MODULE_0_store___default.a.set(`config-${book}`, response.data);
      config = response.data;
      resolve("config fetched from server");
    }).catch(error => {
      config = null;
      reject(error);
    });
  });
}

function getAudioInfo(url) {
  //check that config has been initialized
  if (!config) {
    throw new Error("Configuration has not been initialized");
  }

  url = url.substr(1);
  url = url.substr(0, url.length - 1);

  let idx = url.split("/");

  //check the correct configuration file is loaded
  if (config.bid !== idx[0]) {
    throw new Error("Unexpected config file loaded; expecting %s but %s is loaded.", idx[0], config.bid);
  }

  //idx.length == 2 means page is a wom lesson, idx.length == 3 means it's a question
  let cIdx = parseInt(idx[1].substr(1), 10) - 1;
  let audioInfo;

  if (idx.length === 3) {
    let qIdx = parseInt(idx[2].substr(1), 10) - 1;
    console.log("getAudioInfo(): cIdx: %s, qIdx: %s", cIdx, qIdx);

    audioInfo = config.contents[cIdx].questions[qIdx];
  } else {
    console.log("getAudioInfo(): cIdx: %s", cIdx);
    audioInfo = config.contents[cIdx];
  }

  audioInfo.audioBase = audioBase;
  return audioInfo;
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.concat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(19)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(25)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(80),
	__webpack_require__(29),
	__webpack_require__(51),
	__webpack_require__(31),
	__webpack_require__(3) // Get jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rboxStyle, rnumnonpx, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(26),
	__webpack_require__(1),
	__webpack_require__(57),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, isFunction, rneedsContext ) {

"use strict";

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(83),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(21),
	__webpack_require__(8),
	__webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(59)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(12),
	__webpack_require__(63),
	__webpack_require__(64),
	__webpack_require__(65),
	__webpack_require__(66),
	__webpack_require__(67)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^$|^module$|\/(?:java|ecma)script/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(37),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /\?/ );
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Date.now();
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(12),
	__webpack_require__(68),
	__webpack_require__(1),
	__webpack_require__(5),
	__webpack_require__(14), // filter
	__webpack_require__(69)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rcheckableType, isFunction ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(4);
var settle = __webpack_require__(135);
var buildURL = __webpack_require__(137);
var parseHeaders = __webpack_require__(138);
var isURLSameOrigin = __webpack_require__(139);
var createError = __webpack_require__(75);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(140);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(141);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(136);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(49)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(82)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return Sizzle; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(21),
	__webpack_require__(7),
	__webpack_require__(60)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(35),
	__webpack_require__(36) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(61)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(93),
	__webpack_require__(69),
	__webpack_require__(94),
	__webpack_require__(95)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(11),
	__webpack_require__(37),
	__webpack_require__(8),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(38),
	__webpack_require__(1),
	__webpack_require__(8),
	__webpack_require__(7),
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(38),
	__webpack_require__(37),
	__webpack_require__(11),
	__webpack_require__(1),

	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, support, nodeName, isFunction ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(97),

	__webpack_require__(15),
	__webpack_require__(39)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.location;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(5),
	__webpack_require__(24), // clone
	__webpack_require__(14) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(9),
	__webpack_require__(16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(71),
	__webpack_require__(70),
	__webpack_require__(16)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(38),
	__webpack_require__(1),
	__webpack_require__(107),
	__webpack_require__(16),
	__webpack_require__(14),
	__webpack_require__(24),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(55),
	__webpack_require__(62),

	// This is the only module that needs core/support
	__webpack_require__(108)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(2),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(15)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(36)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(2),
	__webpack_require__(32),
	__webpack_require__(1),
	__webpack_require__(29),
	__webpack_require__(52),
	__webpack_require__(54),
	__webpack_require__(31),
	__webpack_require__(20),
	__webpack_require__(5),
	__webpack_require__(18),
	__webpack_require__(3) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, document, documentElement, isFunction, rnumnonpx,
             curCSS, addGetHookIf, support, isWindow ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10),
	__webpack_require__(20),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, isWindow ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11),
	__webpack_require__(21),
	__webpack_require__(12),
	__webpack_require__(1),
	__webpack_require__(20),
	__webpack_require__(23),

	__webpack_require__(114)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),

	__webpack_require__(15),
	__webpack_require__(39)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, noGlobal ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
* # Semantic UI - 2.3.0
* https://github.com/Semantic-Org/Semantic-UI
* http://www.semantic-ui.com/
*
* Copyright 2014 Contributors
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
*/
!function (e, t, n, i) {
  e.site = e.fn.site = function (o) {
    var a,
        r,
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
        m = f.namespace,
        g = f.error,
        p = "module-" + m,
        h = e(n),
        v = this,
        b = h.data(p);return a = { initialize: function () {
        a.instantiate();
      }, instantiate: function () {
        a.verbose("Storing instance of site", a), b = a, h.data(p, a);
      }, normalize: function () {
        a.fix.console(), a.fix.requestAnimationFrame();
      }, fix: { console: function () {
          a.debug("Normalizing window.console"), console !== i && console.log !== i || (a.verbose("Console not available, normalizing events"), a.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (a.verbose("Console group not available, normalizing events"), t.console.group = function () {}, t.console.groupEnd = function () {}, t.console.groupCollapsed = function () {}), void 0 === console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {});
        }, consoleClear: function () {
          a.debug("Disabling programmatic console clearing"), t.console.clear = function () {};
        }, requestAnimationFrame: function () {
          a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0);
          });
        } }, moduleExists: function (t) {
        return e.fn[t] !== i && e.fn[t].settings !== i;
      }, enabled: { modules: function (t) {
          var n = [];return t = t || f.modules, e.each(t, function (e, t) {
            a.moduleExists(t) && n.push(t);
          }), n;
        } }, disabled: { modules: function (t) {
          var n = [];return t = t || f.modules, e.each(t, function (e, t) {
            a.moduleExists(t) || n.push(t);
          }), n;
        } }, change: { setting: function (t, n, o, r) {
          o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, r = r === i || r, e.each(o, function (i, o) {
            var s,
                l = !a.moduleExists(o) || e.fn[o].settings.namespace || !1;a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && l && (s = e(":data(module-" + l + ")")).length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n)));
          });
        }, settings: function (t, n, o) {
          n = "string" == typeof n ? [n] : n || f.modules, o = o === i || o, e.each(n, function (n, i) {
            var r;a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && m && (r = e(":data(module-" + m + ")")).length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t)));
          });
        } }, enable: { console: function () {
          a.console(!0);
        }, debug: function (e, t) {
          e = e || f.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t);
        }, verbose: function (e, t) {
          e = e || f.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t);
        } }, disable: { console: function () {
          a.console(!1);
        }, debug: function (e, t) {
          e = e || f.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t);
        }, verbose: function (e, t) {
          e = e || f.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t);
        } }, console: function (e) {
        if (e) {
          if (b.cache.console === i) return void a.error(g.console);a.debug("Restoring console function"), t.console = b.cache.console;
        } else a.debug("Disabling console function"), b.cache.console = t.console, t.console = { clear: function () {}, error: function () {}, group: function () {}, groupCollapsed: function () {}, groupEnd: function () {}, info: function () {}, log: function () {}, markTimeline: function () {}, warn: function () {} };
      }, destroy: function () {
        a.verbose("Destroying previous site for", h), h.removeData(p);
      }, cache: {}, setting: function (t, n) {
        if (e.isPlainObject(t)) e.extend(!0, f, t);else {
          if (n === i) return f[t];f[t] = n;
        }
      }, internal: function (t, n) {
        if (e.isPlainObject(t)) e.extend(!0, a, t);else {
          if (n === i) return a[t];a[t] = n;
        }
      }, debug: function () {
        f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
      }, verbose: function () {
        f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
      }, error: function () {
        a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments);
      }, performance: { log: function (e) {
          var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Element: v, Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
        }, display: function () {
          var t = f.name + ":",
              n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
            n += t["Execution Time"];
          }), t += " " + n + "ms", (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
            console.log(t.Name + ": " + t["Execution Time"] + "ms");
          }), console.groupEnd()), l = [];
        } }, invoke: function (t, n, o) {
        var s,
            l,
            c,
            u = b;return n = n || d, o = v || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
          var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
            if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);u = u[o];
          }
        })), e.isFunction(l) ? c = l.apply(o, n) : l !== i && (c = l), e.isArray(r) ? r.push(c) : r !== i ? r = [r, c] : c !== i && (r = c), l;
      } }, u ? (b === i && a.initialize(), a.invoke(c)) : (b !== i && a.destroy(), a.initialize()), r !== i ? r : this;
  }, e.site.settings = { name: "Site", namespace: "site", error: { console: "Console cannot be restored, most likely it was overwritten outside of module", method: "The method you called is not defined." }, debug: !1, verbose: !1, performance: !0, modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"], siteNamespace: "site", namespaceStub: { cache: {}, config: {}, sections: {}, section: {}, utilities: {} } }, e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (n) {
        return !!e.data(n, t);
      };
    }) : function (t, n, i) {
      return !!e.data(t, i[3]);
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.form = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = arguments[1],
        d = "string" == typeof c,
        f = [].slice.call(arguments, 1);return a.each(function () {
      var m,
          g,
          p,
          h,
          v,
          b,
          y,
          x,
          C,
          w,
          S,
          k,
          T,
          A,
          R,
          P,
          E = e(this),
          F = this,
          O = [],
          D = !1;(P = { initialize: function () {
          P.get.settings(), d ? (R === i && P.instantiate(), P.invoke(c)) : (R !== i && R.invoke("destroy"), P.verbose("Initializing form validation", E, v), P.bindEvents(), P.set.defaults(), P.instantiate());
        }, instantiate: function () {
          P.verbose("Storing instance of module", P), R = P, E.data(T, P);
        }, destroy: function () {
          P.verbose("Destroying previous module", R), P.removeEvents(), E.removeData(T);
        }, refresh: function () {
          P.verbose("Refreshing selector cache"), m = E.find(x.field), g = E.find(x.group), p = E.find(x.message), E.find(x.prompt), h = E.find(x.submit), E.find(x.clear), E.find(x.reset);
        }, submit: function () {
          P.verbose("Submitting form", E), E.submit();
        }, attachEvents: function (t, n) {
          n = n || "submit", e(t).on("click" + A, function (e) {
            P[n](), e.preventDefault();
          });
        }, bindEvents: function () {
          P.verbose("Attaching form events"), E.on("submit" + A, P.validate.form).on("blur" + A, x.field, P.event.field.blur).on("click" + A, x.submit, P.submit).on("click" + A, x.reset, P.reset).on("click" + A, x.clear, P.clear), v.keyboardShortcuts && E.on("keydown" + A, x.field, P.event.field.keydown), m.each(function () {
            var t = e(this),
                n = t.prop("type"),
                i = P.get.changeEvent(n, t);e(this).on(i + A, P.event.field.change);
          });
        }, clear: function () {
          m.each(function () {
            var t = e(this),
                n = t.parent(),
                i = t.closest(g),
                o = i.find(x.prompt),
                a = t.data(y.defaultValue) || "",
                r = n.is(x.uiCheckbox),
                s = n.is(x.uiDropdown);i.hasClass(C.error) && (P.verbose("Resetting error on field", i), i.removeClass(C.error), o.remove()), s ? (P.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (P.verbose("Resetting field value", t, a), t.val(""));
          });
        }, reset: function () {
          m.each(function () {
            var t = e(this),
                n = t.parent(),
                o = t.closest(g),
                a = o.find(x.prompt),
                r = t.data(y.defaultValue),
                s = n.is(x.uiCheckbox),
                l = n.is(x.uiDropdown),
                c = o.hasClass(C.error);r !== i && (c && (P.verbose("Resetting error on field", o), o.removeClass(C.error), a.remove()), l ? (P.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : s ? (P.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (P.verbose("Resetting field value", t, r), t.val(r)));
          });
        }, determine: { isValid: function () {
            var t = !0;return e.each(b, function (e, n) {
              P.validate.field(n, e, !0) || (t = !1);
            }), t;
          } }, is: { bracketedRule: function (e) {
            return e.type && e.type.match(v.regExp.bracket);
          }, shorthandFields: function (e) {
            var t = e[Object.keys(e)[0]];return P.is.shorthandRules(t);
          }, shorthandRules: function (t) {
            return "string" == typeof t || e.isArray(t);
          }, empty: function (e) {
            return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : P.is.blank(e));
          }, blank: function (t) {
            return "" === e.trim(t.val());
          }, valid: function (t) {
            var n = !0;return t ? (P.verbose("Checking if field is valid", t), P.validate.field(b[t], t, !1)) : (P.verbose("Checking if form is valid"), e.each(b, function (e, t) {
              P.is.valid(e) || (n = !1);
            }), n);
          } }, removeEvents: function () {
          E.off(A), m.off(A), h.off(A), m.off(A);
        }, event: { field: { keydown: function (t) {
              var n = e(this),
                  i = t.which,
                  o = n.is(x.input),
                  a = n.is(x.checkbox),
                  r = n.closest(x.uiDropdown).length > 0,
                  s = 13;i == 27 && (P.verbose("Escape key pressed blurring field"), n.blur()), t.ctrlKey || i != s || !o || r || a || (D || (n.one("keyup" + A, P.event.field.keyup), P.submit(), P.debug("Enter pressed on input submitting form")), D = !0);
            }, keyup: function () {
              D = !1;
            }, blur: function (t) {
              var n = e(this),
                  i = n.closest(g),
                  o = P.get.validation(n);i.hasClass(C.error) ? (P.debug("Revalidating field", n, o), o && P.validate.field(o)) : "blur" == v.on && o && P.validate.field(o);
            }, change: function (t) {
              var n = e(this),
                  i = n.closest(g),
                  o = P.get.validation(n);o && ("change" == v.on || i.hasClass(C.error) && v.revalidate) && (clearTimeout(P.timer), P.timer = setTimeout(function () {
                P.debug("Revalidating field", n, P.get.validation(n)), P.validate.field(o);
              }, v.delay));
            } } }, get: { ancillaryValue: function (e) {
            return !(!e.type || !e.value && !P.is.bracketedRule(e)) && (e.value !== i ? e.value : e.type.match(v.regExp.bracket)[1] + "");
          }, ruleName: function (e) {
            return P.is.bracketedRule(e) ? e.type.replace(e.type.match(v.regExp.bracket)[0], "") : e.type;
          }, changeEvent: function (e, t) {
            return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : P.get.inputEvent();
          }, inputEvent: function () {
            return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup";
          }, fieldsFromShorthand: function (t) {
            var n = {};return e.each(t, function (t, i) {
              "string" == typeof i && (i = [i]), n[t] = { rules: [] }, e.each(i, function (e, i) {
                n[t].rules.push({ type: i });
              });
            }), n;
          }, prompt: function (e, t) {
            var n,
                i,
                o,
                a = P.get.ruleName(e),
                r = P.get.ancillaryValue(e),
                s = e.prompt || v.prompt[a] || v.text.unspecifiedRule,
                l = -1 !== s.search("{value}"),
                c = -1 !== s.search("{name}");return (c || l) && (i = P.get.field(t.identifier)), l && (s = s.replace("{value}", i.val())), c && (o = 1 == (n = i.closest(x.group).find("label").eq(0)).length ? n.text() : i.prop("placeholder") || v.text.unspecifiedField, s = s.replace("{name}", o)), s = (s = s.replace("{identifier}", t.identifier)).replace("{ruleValue}", r), e.prompt || P.verbose("Using default validation prompt for type", s, a), s;
          }, settings: function () {
            if (e.isPlainObject(t)) {
              var n = Object.keys(t);n.length > 0 && t[n[0]].identifier !== i && t[n[0]].rules !== i ? (v = e.extend(!0, {}, e.fn.form.settings, u), b = e.extend({}, e.fn.form.settings.defaults, t), P.error(v.error.oldSyntax, F), P.verbose("Extending settings from legacy parameters", b, v)) : (t.fields && P.is.shorthandFields(t.fields) && (t.fields = P.get.fieldsFromShorthand(t.fields)), v = e.extend(!0, {}, e.fn.form.settings, t), b = e.extend({}, e.fn.form.settings.defaults, v.fields), P.verbose("Extending settings", b, v));
            } else v = e.fn.form.settings, b = e.fn.form.settings.defaults, P.verbose("Using default form validation", b, v);k = v.namespace, y = v.metadata, x = v.selector, C = v.className, w = v.regExp, S = v.error, T = "module-" + k, A = "." + k, R = E.data(T), P.refresh();
          }, field: function (t) {
            return P.verbose("Finding field with identifier", t), t = P.escape.string(t), m.filter("#" + t).length > 0 ? m.filter("#" + t) : m.filter('[name="' + t + '"]').length > 0 ? m.filter('[name="' + t + '"]') : m.filter('[name="' + t + '[]"]').length > 0 ? m.filter('[name="' + t + '[]"]') : m.filter("[data-" + y.validate + '="' + t + '"]').length > 0 ? m.filter("[data-" + y.validate + '="' + t + '"]') : e("<input/>");
          }, fields: function (t) {
            var n = e();return e.each(t, function (e, t) {
              n = n.add(P.get.field(t));
            }), n;
          }, validation: function (t) {
            var n, i;return !!b && (e.each(b, function (e, o) {
              i = o.identifier || e, P.get.field(i)[0] == t[0] && (o.identifier = i, n = o);
            }), n || !1);
          }, value: function (e) {
            var t = [];return t.push(e), P.get.values.call(F, t)[e];
          }, values: function (t) {
            var n = {};return (e.isArray(t) ? P.get.fields(t) : m).each(function (t, o) {
              var a = e(o),
                  r = (a.prop("type"), a.prop("name")),
                  s = a.val(),
                  l = a.is(x.checkbox),
                  c = a.is(x.radio),
                  u = -1 !== r.indexOf("[]"),
                  d = !!l && a.is(":checked");r && (u ? (r = r.replace("[]", ""), n[r] || (n[r] = []), l ? d ? n[r].push(s || !0) : n[r].push(!1) : n[r].push(s)) : c ? n[r] !== i && 0 != n[r] || (n[r] = !!d && (s || !0)) : n[r] = l ? !!d && (s || !0) : s);
            }), n;
          } }, has: { field: function (e) {
            return P.verbose("Checking for existence of a field with identifier", e), "string" != typeof (e = P.escape.string(e)) && P.error(S.identifier, e), m.filter("#" + e).length > 0 || m.filter('[name="' + e + '"]').length > 0 || m.filter("[data-" + y.validate + '="' + e + '"]').length > 0;
          } }, escape: { string: function (e) {
            return (e = String(e)).replace(w.escape, "\\$&");
          } }, add: { rule: function (e, t) {
            P.add.field(e, t);
          }, field: function (t, n) {
            var i = {};P.is.shorthandRules(n) ? (n = e.isArray(n) ? n : [n], i[t] = { rules: [] }, e.each(n, function (e, n) {
              i[t].rules.push({ type: n });
            })) : i[t] = n, b = e.extend({}, b, i), P.debug("Adding rules", i, b);
          }, fields: function (t) {
            var n;n = t && P.is.shorthandFields(t) ? P.get.fieldsFromShorthand(t) : t, b = e.extend({}, b, n);
          }, prompt: function (t, n) {
            var o = P.get.field(t).closest(g),
                a = o.children(x.prompt),
                r = 0 !== a.length;n = "string" == typeof n ? [n] : n, P.verbose("Adding field error state", t), o.addClass(C.error), v.inline && (r || (a = v.templates.prompt(n)).appendTo(o), a.html(n[0]), r ? P.verbose("Inline errors are disabled, no inline error added", t) : v.transition && e.fn.transition !== i && E.transition("is supported") ? (P.verbose("Displaying error with css transition", v.transition), a.transition(v.transition + " in", v.duration)) : (P.verbose("Displaying error with fallback javascript animation"), a.fadeIn(v.duration)));
          }, errors: function (e) {
            P.debug("Adding form error messages", e), P.set.error(), p.html(v.templates.error(e));
          } }, remove: { rule: function (t, n) {
            var o = e.isArray(n) ? n : [n];if (n == i) return P.debug("Removed all rules"), void (b[t].rules = []);b[t] != i && e.isArray(b[t].rules) && e.each(b[t].rules, function (e, n) {
              -1 !== o.indexOf(n.type) && (P.debug("Removed rule", n.type), b[t].rules.splice(e, 1));
            });
          }, field: function (t) {
            var n = e.isArray(t) ? t : [t];e.each(n, function (e, t) {
              P.remove.rule(t);
            });
          }, rules: function (t, n) {
            e.isArray(t) ? e.each(fields, function (e, t) {
              P.remove.rule(t, n);
            }) : P.remove.rule(t, n);
          }, fields: function (e) {
            P.remove.field(e);
          }, prompt: function (t) {
            var n = P.get.field(t).closest(g),
                o = n.children(x.prompt);n.removeClass(C.error), v.inline && o.is(":visible") && (P.verbose("Removing prompt for field", t), v.transition && e.fn.transition !== i && E.transition("is supported") ? o.transition(v.transition + " out", v.duration, function () {
              o.remove();
            }) : o.fadeOut(v.duration, function () {
              o.remove();
            }));
          } }, set: { success: function () {
            E.removeClass(C.error).addClass(C.success);
          }, defaults: function () {
            m.each(function () {
              var t = e(this),
                  n = t.filter(x.checkbox).length > 0 ? t.is(":checked") : t.val();t.data(y.defaultValue, n);
            });
          }, error: function () {
            E.removeClass(C.success).addClass(C.error);
          }, value: function (e, t) {
            var n = {};return n[e] = t, P.set.values.call(F, n);
          }, values: function (t) {
            e.isEmptyObject(t) || e.each(t, function (t, n) {
              var i,
                  o = P.get.field(t),
                  a = o.parent(),
                  r = e.isArray(n),
                  s = a.is(x.uiCheckbox),
                  l = a.is(x.uiDropdown),
                  c = o.is(x.radio) && s;o.length > 0 && (r && s ? (P.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function (e, t) {
                i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check");
              })) : c ? (P.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(x.uiCheckbox).checkbox("check")) : s ? (P.verbose("Setting checkbox value", n, a), !0 === n ? a.checkbox("check") : a.checkbox("uncheck")) : l ? (P.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (P.verbose("Setting field value", n, o), o.val(n)));
            });
          } }, validate: { form: function (e, t) {
            var n = P.get.values();if (D) return !1;if (O = [], P.determine.isValid()) {
              if (P.debug("Form has no validation errors, submitting"), P.set.success(), !0 !== t) return v.onSuccess.call(F, e, n);
            } else if (P.debug("Form has errors"), P.set.error(), v.inline || P.add.errors(O), E.data("moduleApi") !== i && e.stopImmediatePropagation(), !0 !== t) return v.onFailure.call(F, O, n);
          }, field: function (t, n, o) {
            o = o === i || o, "string" == typeof t && (P.verbose("Validating field", t), n = t, t = b[t]);var a = t.identifier || n,
                r = P.get.field(a),
                s = !!t.depends && P.get.field(t.depends),
                l = !0,
                c = [];return t.identifier || (P.debug("Using field name as identifier", a), t.identifier = a), r.prop("disabled") ? (P.debug("Field is disabled. Skipping", a), l = !0) : t.optional && P.is.blank(r) ? (P.debug("Field is optional and blank. Skipping", a), l = !0) : t.depends && P.is.empty(s) ? (P.debug("Field depends on another value that is not present or empty. Skipping", s), l = !0) : t.rules !== i && e.each(t.rules, function (e, n) {
              P.has.field(a) && !P.validate.rule(t, n) && (P.debug("Field is invalid", a, n.type), c.push(P.get.prompt(n, t)), l = !1);
            }), l ? (o && (P.remove.prompt(a, c), v.onValid.call(r)), !0) : (o && (O = O.concat(c), P.add.prompt(a, c), v.onInvalid.call(r, c)), !1);
          }, rule: function (t, n) {
            var o = P.get.field(t.identifier),
                a = (n.type, o.val()),
                r = P.get.ancillaryValue(n),
                s = P.get.ruleName(n),
                l = v.rules[s];if (e.isFunction(l)) return a = a === i || "" === a || null === a ? "" : e.trim(a + ""), l.call(o, a, r);P.error(S.noRule, s);
          } }, setting: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, P, t);else {
            if (n === i) return P[t];P[t] = n;
          }
        }, debug: function () {
          !v.silent && v.debug && (v.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), P.debug.apply(console, arguments)));
        }, verbose: function () {
          !v.silent && v.verbose && v.debug && (v.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), P.verbose.apply(console, arguments)));
        }, error: function () {
          v.silent || (P.error = Function.prototype.bind.call(console.error, console, v.name + ":"), P.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: F, "Execution Time": n })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 500);
          }, display: function () {
            var t = v.name + ":",
                n = 0;s = !1, clearTimeout(P.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = R;return n = n || f, a = F || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }).initialize();
    }), o !== i ? o : this;
  }, e.fn.form.settings = { name: "Form", namespace: "form", debug: !1, verbose: !1, performance: !0, fields: !1, keyboardShortcuts: !0, on: "submit", inline: !1, delay: 200, revalidate: !0, transition: "scale", duration: 200, onValid: function () {}, onInvalid: function () {}, onSuccess: function () {
      return !0;
    }, onFailure: function () {
      return !1;
    }, metadata: { defaultValue: "default", validate: "validate" }, regExp: { htmlID: /^[a-zA-Z][\w:.-]*$/g, bracket: /\[(.*)\]/i, decimal: /^\d+\.?\d*$/, email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, flags: /^\/(.*)\/(.*)?/, integer: /^\-?\d+$/, number: /^\-?\d*(\.\d+)?$/, url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i }, text: { unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field" }, prompt: { empty: "{name} must have a value", checked: "{name} must be checked", email: "{name} must be a valid e-mail", url: "{name} must be a valid url", regExp: "{name} is not formatted correctly", integer: "{name} must be an integer", decimal: "{name} must be a decimal number", number: "{name} must be set to a number", is: '{name} must be "{ruleValue}"', isExactly: '{name} must be exactly "{ruleValue}"', not: '{name} cannot be set to "{ruleValue}"', notExactly: '{name} cannot be set to exactly "{ruleValue}"', contain: '{name} must contain "{ruleValue}"', containExactly: '{name} must contain exactly "{ruleValue}"', doesntContain: '{name} cannot contain  "{ruleValue}"', doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"', minLength: "{name} must be at least {ruleValue} characters", length: "{name} must be at least {ruleValue} characters", exactLength: "{name} must be exactly {ruleValue} characters", maxLength: "{name} cannot be longer than {ruleValue} characters", match: "{name} must match {ruleValue} field", different: "{name} must have a different value than {ruleValue} field", creditCard: "{name} must be a valid credit card number", minCount: "{name} must have at least {ruleValue} choices", exactCount: "{name} must have exactly {ruleValue} choices", maxCount: "{name} must have {ruleValue} or less choices" }, selector: { checkbox: 'input[type="checkbox"], input[type="radio"]', clear: ".clear", field: "input, textarea, select", group: ".field", input: "input", message: ".error.message", prompt: ".prompt.label", radio: 'input[type="radio"]', reset: '.reset:not([type="reset"])', submit: '.submit:not([type="submit"])', uiCheckbox: ".ui.checkbox", uiDropdown: ".ui.dropdown" }, className: { error: "error", label: "ui prompt label", pressed: "down", success: "success" }, error: { identifier: "You must specify a string identifier for each field", method: "The method you called is not defined.", noRule: "There is no rule matching the one you specified", oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically." }, templates: { error: function (t) {
        var n = '<ul class="list">';return e.each(t, function (e, t) {
          n += "<li>" + t + "</li>";
        }), e(n += "</ul>");
      }, prompt: function (t) {
        return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]);
      } }, rules: { empty: function (t) {
        return !(t === i || "" === t || e.isArray(t) && 0 === t.length);
      }, checked: function () {
        return e(this).filter(":checked").length > 0;
      }, email: function (t) {
        return e.fn.form.settings.regExp.email.test(t);
      }, url: function (t) {
        return e.fn.form.settings.regExp.url.test(t);
      }, regExp: function (t, n) {
        if (n instanceof RegExp) return t.match(n);var i,
            o = n.match(e.fn.form.settings.regExp.flags);return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i));
      }, integer: function (t, n) {
        var o,
            a,
            r,
            s = e.fn.form.settings.regExp.integer;return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? s.test(n) && (o = a = n - 0) : (r = n.split("..", 2), s.test(r[0]) && (o = r[0] - 0), s.test(r[1]) && (a = r[1] - 0))), s.test(t) && (o === i || t >= o) && (a === i || t <= a);
      }, decimal: function (t) {
        return e.fn.form.settings.regExp.decimal.test(t);
      }, number: function (t) {
        return e.fn.form.settings.regExp.number.test(t);
      }, is: function (e, t) {
        return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t;
      }, isExactly: function (e, t) {
        return e == t;
      }, not: function (e, t) {
        return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t);
      }, notExactly: function (e, t) {
        return e != t;
      }, contains: function (t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"));
      }, containsExactly: function (t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n));
      }, doesntContain: function (t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"));
      }, doesntContainExactly: function (t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n));
      }, minLength: function (e, t) {
        return e !== i && e.length >= t;
      }, length: function (e, t) {
        return e !== i && e.length >= t;
      }, exactLength: function (e, t) {
        return e !== i && e.length == t;
      }, maxLength: function (e, t) {
        return e !== i && e.length <= t;
      }, match: function (t, n) {
        var o;e(this);return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() == o.toString();
      }, different: function (t, n) {
        var o;e(this);return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() !== o.toString();
      }, creditCard: function (t, n) {
        var i,
            o,
            a = { visa: { pattern: /^4/, length: [16] }, amex: { pattern: /^3[47]/, length: [15] }, mastercard: { pattern: /^5[1-5]/, length: [16] }, discover: { pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: [16] }, unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] }, jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] }, maestro: { pattern: /^(5018|5020|5038|6304|6759|676[1-3])/, length: [12, 13, 14, 15, 16, 17, 18, 19] }, dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] }, laser: { pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19] }, visaElectron: { pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16] } },
            r = {},
            s = !1,
            l = "string" == typeof n && n.split(",");if ("string" == typeof t && 0 !== t.length) {
          if (t = t.replace(/[\-]/g, ""), l && (e.each(l, function (n, i) {
            (o = a[i]) && (r = { length: -1 !== e.inArray(t.length, o.length), pattern: -1 !== t.search(o.pattern) }).length && r.pattern && (s = !0);
          }), !s)) return !1;if ((i = { number: -1 !== e.inArray(t.length, a.unionPay.length), pattern: -1 !== t.search(a.unionPay.pattern) }).number && i.pattern) return !0;for (var c = t.length, u = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], f = 0; c--;) f += d[u][parseInt(t.charAt(c), 10)], u ^= 1;return f % 10 == 0 && f > 0;
        }
      }, minCount: function (e, t) {
        return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t);
      }, exactCount: function (e, t) {
        return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t;
      }, maxCount: function (e, t) {
        return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.accordion = function (n) {
    var o,
        a = e(this),
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return a.each(function () {
      var d,
          f,
          m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
          g = m.className,
          p = m.namespace,
          h = m.selector,
          v = m.error,
          b = "." + p,
          y = "module-" + p,
          x = a.selector || "",
          C = e(this),
          w = C.find(h.title),
          S = C.find(h.content),
          k = this,
          T = C.data(y);f = { initialize: function () {
          f.debug("Initializing", C), f.bind.events(), m.observeChanges && f.observeChanges(), f.instantiate();
        }, instantiate: function () {
          T = f, C.data(y, f);
        }, destroy: function () {
          f.debug("Destroying previous instance", C), C.off(b).removeData(y);
        }, refresh: function () {
          w = C.find(h.title), S = C.find(h.content);
        }, observeChanges: function () {
          "MutationObserver" in t && ((d = new MutationObserver(function (e) {
            f.debug("DOM tree modified, updating selector cache"), f.refresh();
          })).observe(k, { childList: !0, subtree: !0 }), f.debug("Setting up mutation observer", d));
        }, bind: { events: function () {
            f.debug("Binding delegated events"), C.on(m.on + b, h.trigger, f.event.click);
          } }, event: { click: function () {
            f.toggle.call(this);
          } }, toggle: function (t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(S),
              a = o.hasClass(g.animating),
              r = o.hasClass(g.active),
              s = r && !a,
              l = !r && a;f.debug("Toggling visibility of content", n), s || l ? m.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n);
        }, open: function (t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(S),
              a = o.hasClass(g.animating);o.hasClass(g.active) || a ? f.debug("Accordion already open, skipping", o) : (f.debug("Opening accordion content", n), m.onOpening.call(o), m.onChanging.call(o), m.exclusive && f.closeOthers.call(n), n.addClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({ animation: "fade in", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 1 }, m.duration, f.resetOpacity)), o.slideDown(m.duration, m.easing, function () {
            o.removeClass(g.animating).addClass(g.active), f.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this);
          }));
        }, close: function (t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(S),
              a = o.hasClass(g.animating),
              r = o.hasClass(g.active);!r && !(!r && a) || r && a || (f.debug("Closing accordion content", o), m.onClosing.call(o), m.onChanging.call(o), n.removeClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({ animation: "fade out", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, f.resetOpacity)), o.slideUp(m.duration, m.easing, function () {
            o.removeClass(g.animating).removeClass(g.active), f.reset.display.call(this), m.onClose.call(this), m.onChange.call(this);
          }));
        }, closeOthers: function (t) {
          var n,
              o,
              a,
              r = t !== i ? w.eq(t) : e(this).closest(h.title),
              s = r.parents(h.content).prev(h.title),
              l = r.closest(h.accordion),
              c = h.title + "." + g.active + ":visible",
              u = h.content + "." + g.active + ":visible";m.closeNested ? a = (n = l.find(c).not(s)).next(S) : (n = l.find(c).not(s), o = l.find(u).find(c).not(s), a = (n = n.not(o)).next(S)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), a.removeClass(g.animating).stop(!0, !0), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? a.children().transition({ animation: "fade out", useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : a.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, f.resetOpacity)), a.slideUp(m.duration, m.easing, function () {
            e(this).removeClass(g.active), f.reset.display.call(this);
          }));
        }, reset: { display: function () {
            f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          }, opacity: function () {
            f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          } }, setting: function (t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function (t, n) {
          if (f.debug("Changing internal", t, n), n === i) return f[t];e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n;
        }, debug: function () {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function () {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function () {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function () {
            var t = m.name + ":",
                n = 0;r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = T;return n = n || u, a = k || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, c ? (T === i && f.initialize(), f.invoke(l)) : (T !== i && T.invoke("destroy"), f.initialize());
    }), o !== i ? o : this;
  }, e.fn.accordion.settings = { name: "Accordion", namespace: "accordion", silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", observeChanges: !0, exclusive: !0, collapsible: !0, closeNested: !1, animateChildren: !0, duration: 350, easing: "easeOutQuad", onOpening: function () {}, onClosing: function () {}, onChanging: function () {}, onOpen: function () {}, onClose: function () {}, onChange: function () {}, error: { method: "The method you called is not defined" }, className: { active: "active", animating: "animating" }, selector: { accordion: ".accordion", title: ".title", trigger: ".title", content: ".content" } }, e.extend(e.easing, { easeOutQuad: function (e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.checkbox = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          m,
          g = e.extend(!0, {}, e.fn.checkbox.settings, o),
          p = g.className,
          h = g.namespace,
          v = g.selector,
          b = g.error,
          y = "." + h,
          x = "module-" + h,
          C = e(this),
          w = e(this).children(v.label),
          S = e(this).children(v.input),
          k = S[0],
          T = !1,
          A = !1,
          R = C.data(x),
          P = this;m = { initialize: function () {
          m.verbose("Initializing checkbox", g), m.create.label(), m.bind.events(), m.set.tabbable(), m.hide.input(), m.observeChanges(), m.instantiate(), m.setup();
        }, instantiate: function () {
          m.verbose("Storing instance of module", m), R = m, C.data(x, m);
        }, destroy: function () {
          m.verbose("Destroying module"), m.unbind.events(), m.show.input(), C.removeData(x);
        }, fix: { reference: function () {
            C.is(v.input) && (m.debug("Behavior called on <input> adjusting invoked element"), C = C.closest(v.checkbox), m.refresh());
          } }, setup: function () {
          m.set.initialLoad(), m.is.indeterminate() ? (m.debug("Initial value is indeterminate"), m.indeterminate()) : m.is.checked() ? (m.debug("Initial value is checked"), m.check()) : (m.debug("Initial value is unchecked"), m.uncheck()), m.remove.initialLoad();
        }, refresh: function () {
          w = C.children(v.label), S = C.children(v.input), k = S[0];
        }, hide: { input: function () {
            m.verbose("Modifying <input> z-index to be unselectable"), S.addClass(p.hidden);
          } }, show: { input: function () {
            m.verbose("Modifying <input> z-index to be selectable"), S.removeClass(p.hidden);
          } }, observeChanges: function () {
          "MutationObserver" in t && ((r = new MutationObserver(function (e) {
            m.debug("DOM tree modified, updating selector cache"), m.refresh();
          })).observe(P, { childList: !0, subtree: !0 }), m.debug("Setting up mutation observer", r));
        }, attachEvents: function (t, n) {
          var i = e(t);n = e.isFunction(m[n]) ? m[n] : m.toggle, i.length > 0 ? (m.debug("Attaching checkbox events to element", t, n), i.on("click" + y, n)) : m.error(b.notFound);
        }, event: { click: function (t) {
            var n = e(t.target);n.is(v.input) ? m.verbose("Using default check action on initialized checkbox") : n.is(v.link) ? m.debug("Clicking link inside checkbox, skipping toggle") : (m.toggle(), S.focus(), t.preventDefault());
          }, keydown: function (e) {
            var t = e.which,
                n = 13,
                i = 32;t == 27 ? (m.verbose("Escape key pressed blurring field"), S.blur(), A = !0) : e.ctrlKey || t != i && t != n ? A = !1 : (m.verbose("Enter/space key pressed, toggling checkbox"), m.toggle(), A = !0);
          }, keyup: function (e) {
            A && e.preventDefault();
          } }, check: function () {
          m.should.allowCheck() && (m.debug("Checking checkbox", S), m.set.checked(), m.should.ignoreCallbacks() || (g.onChecked.call(k), g.onChange.call(k)));
        }, uncheck: function () {
          m.should.allowUncheck() && (m.debug("Unchecking checkbox"), m.set.unchecked(), m.should.ignoreCallbacks() || (g.onUnchecked.call(k), g.onChange.call(k)));
        }, indeterminate: function () {
          m.should.allowIndeterminate() ? m.debug("Checkbox is already indeterminate") : (m.debug("Making checkbox indeterminate"), m.set.indeterminate(), m.should.ignoreCallbacks() || (g.onIndeterminate.call(k), g.onChange.call(k)));
        }, determinate: function () {
          m.should.allowDeterminate() ? m.debug("Checkbox is already determinate") : (m.debug("Making checkbox determinate"), m.set.determinate(), m.should.ignoreCallbacks() || (g.onDeterminate.call(k), g.onChange.call(k)));
        }, enable: function () {
          m.is.enabled() ? m.debug("Checkbox is already enabled") : (m.debug("Enabling checkbox"), m.set.enabled(), g.onEnable.call(k), g.onEnabled.call(k));
        }, disable: function () {
          m.is.disabled() ? m.debug("Checkbox is already disabled") : (m.debug("Disabling checkbox"), m.set.disabled(), g.onDisable.call(k), g.onDisabled.call(k));
        }, get: { radios: function () {
            var t = m.get.name();return e('input[name="' + t + '"]').closest(v.checkbox);
          }, otherRadios: function () {
            return m.get.radios().not(C);
          }, name: function () {
            return S.attr("name");
          } }, is: { initialLoad: function () {
            return T;
          }, radio: function () {
            return S.hasClass(p.radio) || "radio" == S.attr("type");
          }, indeterminate: function () {
            return S.prop("indeterminate") !== i && S.prop("indeterminate");
          }, checked: function () {
            return S.prop("checked") !== i && S.prop("checked");
          }, disabled: function () {
            return S.prop("disabled") !== i && S.prop("disabled");
          }, enabled: function () {
            return !m.is.disabled();
          }, determinate: function () {
            return !m.is.indeterminate();
          }, unchecked: function () {
            return !m.is.checked();
          } }, should: { allowCheck: function () {
            return m.is.determinate() && m.is.checked() && !m.should.forceCallbacks() ? (m.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== g.beforeChecked.apply(k) || (m.debug("Should not allow check, beforeChecked cancelled"), !1);
          }, allowUncheck: function () {
            return m.is.determinate() && m.is.unchecked() && !m.should.forceCallbacks() ? (m.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== g.beforeUnchecked.apply(k) || (m.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1);
          }, allowIndeterminate: function () {
            return m.is.indeterminate() && !m.should.forceCallbacks() ? (m.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== g.beforeIndeterminate.apply(k) || (m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1);
          }, allowDeterminate: function () {
            return m.is.determinate() && !m.should.forceCallbacks() ? (m.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== g.beforeDeterminate.apply(k) || (m.debug("Should not allow determinate, beforeDeterminate cancelled"), !1);
          }, forceCallbacks: function () {
            return m.is.initialLoad() && g.fireOnInit;
          }, ignoreCallbacks: function () {
            return T && !g.fireOnInit;
          } }, can: { change: function () {
            return !(C.hasClass(p.disabled) || C.hasClass(p.readOnly) || S.prop("disabled") || S.prop("readonly"));
          }, uncheck: function () {
            return "boolean" == typeof g.uncheckable ? g.uncheckable : !m.is.radio();
          } }, set: { initialLoad: function () {
            T = !0;
          }, checked: function () {
            m.verbose("Setting class to checked"), C.removeClass(p.indeterminate).addClass(p.checked), m.is.radio() && m.uncheckOthers(), m.is.indeterminate() || !m.is.checked() ? (m.verbose("Setting state to checked", k), S.prop("indeterminate", !1).prop("checked", !0), m.trigger.change()) : m.debug("Input is already checked, skipping input property change");
          }, unchecked: function () {
            m.verbose("Removing checked class"), C.removeClass(p.indeterminate).removeClass(p.checked), m.is.indeterminate() || !m.is.unchecked() ? (m.debug("Setting state to unchecked"), S.prop("indeterminate", !1).prop("checked", !1), m.trigger.change()) : m.debug("Input is already unchecked");
          }, indeterminate: function () {
            m.verbose("Setting class to indeterminate"), C.addClass(p.indeterminate), m.is.indeterminate() ? m.debug("Input is already indeterminate, skipping input property change") : (m.debug("Setting state to indeterminate"), S.prop("indeterminate", !0), m.trigger.change());
          }, determinate: function () {
            m.verbose("Removing indeterminate class"), C.removeClass(p.indeterminate), m.is.determinate() ? m.debug("Input is already determinate, skipping input property change") : (m.debug("Setting state to determinate"), S.prop("indeterminate", !1));
          }, disabled: function () {
            m.verbose("Setting class to disabled"), C.addClass(p.disabled), m.is.disabled() ? m.debug("Input is already disabled, skipping input property change") : (m.debug("Setting state to disabled"), S.prop("disabled", "disabled"), m.trigger.change());
          }, enabled: function () {
            m.verbose("Removing disabled class"), C.removeClass(p.disabled), m.is.enabled() ? m.debug("Input is already enabled, skipping input property change") : (m.debug("Setting state to enabled"), S.prop("disabled", !1), m.trigger.change());
          }, tabbable: function () {
            m.verbose("Adding tabindex to checkbox"), S.attr("tabindex") === i && S.attr("tabindex", 0);
          } }, remove: { initialLoad: function () {
            T = !1;
          } }, trigger: { change: function () {
            var e = n.createEvent("HTMLEvents"),
                t = S[0];t && (m.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, create: { label: function () {
            S.prevAll(v.label).length > 0 ? (S.prev(v.label).detach().insertAfter(S), m.debug("Moving existing label", w)) : m.has.label() || (w = e("<label>").insertAfter(S), m.debug("Creating label", w));
          } }, has: { label: function () {
            return w.length > 0;
          } }, bind: { events: function () {
            m.verbose("Attaching checkbox events"), C.on("click" + y, m.event.click).on("keydown" + y, v.input, m.event.keydown).on("keyup" + y, v.input, m.event.keyup);
          } }, unbind: { events: function () {
            m.debug("Removing events"), C.off(y);
          } }, uncheckOthers: function () {
          var e = m.get.otherRadios();m.debug("Unchecking other radios", e), e.removeClass(p.checked);
        }, toggle: function () {
          m.can.change() ? m.is.indeterminate() || m.is.unchecked() ? (m.debug("Currently unchecked"), m.check()) : m.is.checked() && m.can.uncheck() && (m.debug("Currently checked"), m.uncheck()) : m.is.radio() || m.debug("Checkbox is read-only or disabled, ignoring toggle");
        }, setting: function (t, n) {
          if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function () {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function () {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function () {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: P, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function () {
            var t = g.name + ":",
                n = 0;l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = R;return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (R === i && m.initialize(), m.invoke(u)) : (R !== i && R.invoke("destroy"), m.initialize());
    }), a !== i ? a : this;
  }, e.fn.checkbox.settings = { name: "Checkbox", namespace: "checkbox", silent: !1, debug: !1, verbose: !0, performance: !0, uncheckable: "auto", fireOnInit: !1, onChange: function () {}, beforeChecked: function () {}, beforeUnchecked: function () {}, beforeDeterminate: function () {}, beforeIndeterminate: function () {}, onChecked: function () {}, onUnchecked: function () {}, onDeterminate: function () {}, onIndeterminate: function () {}, onEnable: function () {}, onDisable: function () {}, onEnabled: function () {}, onDisabled: function () {}, className: { checked: "checked", indeterminate: "indeterminate", disabled: "disabled", hidden: "hidden", radio: "radio", readOnly: "read-only" }, error: { method: "The method you called is not defined" }, selector: { checkbox: ".ui.checkbox", label: "label, .box", input: 'input[type="checkbox"], input[type="radio"]', link: "a[href]" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dimmer = function (t) {
    var o,
        a = e(this),
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return a.each(function () {
      var d,
          f,
          m,
          g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
          p = g.selector,
          h = g.namespace,
          v = g.className,
          b = g.error,
          y = "." + h,
          x = "module-" + h,
          C = a.selector || "",
          w = "ontouchstart" in n.documentElement ? "touchstart" : "click",
          S = e(this),
          k = this,
          T = S.data(x);(m = { preinitialize: function () {
          m.is.dimmer() ? (f = S.parent(), d = S) : (f = S, d = m.has.dimmer() ? g.dimmerName ? f.find(p.dimmer).filter("." + g.dimmerName) : f.find(p.dimmer) : m.create(), m.set.variation());
        }, initialize: function () {
          m.debug("Initializing dimmer", g), m.bind.events(), m.set.dimmable(), m.instantiate();
        }, instantiate: function () {
          m.verbose("Storing instance of module", m), T = m, S.data(x, T);
        }, destroy: function () {
          m.verbose("Destroying previous module", d), m.unbind.events(), m.remove.variation(), f.off(y);
        }, bind: { events: function () {
            "hover" == g.on ? f.on("mouseenter" + y, m.show).on("mouseleave" + y, m.hide) : "click" == g.on && f.on(w + y, m.toggle), m.is.page() && (m.debug("Setting as a page dimmer", f), m.set.pageDimmer()), m.is.closable() && (m.verbose("Adding dimmer close event", d), f.on(w + y, p.dimmer, m.event.click));
          } }, unbind: { events: function () {
            S.removeData(x), f.off(y);
          } }, event: { click: function (t) {
            m.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (m.hide(), t.stopImmediatePropagation());
          } }, addContent: function (t) {
          var n = e(t);m.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d);
        }, create: function () {
          var t = e(g.template.dimmer());return g.dimmerName && (m.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(f), t;
        }, show: function (t) {
          t = e.isFunction(t) ? t : function () {}, m.debug("Showing dimmer", d, g), m.is.dimmed() && !m.is.animating() || !m.is.enabled() ? m.debug("Dimmer is already shown or disabled") : (m.animate.show(t), g.onShow.call(k), g.onChange.call(k));
        }, hide: function (t) {
          t = e.isFunction(t) ? t : function () {}, m.is.dimmed() || m.is.animating() ? (m.debug("Hiding dimmer", d), m.animate.hide(t), g.onHide.call(k), g.onChange.call(k)) : m.debug("Dimmer is not visible");
        }, toggle: function () {
          m.verbose("Toggling dimmer visibility", d), m.is.dimmed() ? m.hide() : m.show();
        }, animate: { show: function (t) {
            t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && m.set.opacity(), d.transition({ displayType: "flex", animation: g.transition + " in", queue: !1, duration: m.get.duration(), useFailSafe: !0, onStart: function () {
                m.set.dimmed();
              }, onComplete: function () {
                m.set.active(), t();
              } })) : (m.verbose("Showing dimmer animation with javascript"), m.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({ opacity: 0, width: "100%", height: "100%" }).fadeTo(m.get.duration(), g.opacity, function () {
              d.removeAttr("style"), m.set.active(), t();
            }));
          }, hide: function (t) {
            t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (m.verbose("Hiding dimmer with css"), d.transition({ displayType: "flex", animation: g.transition + " out", queue: !1, duration: m.get.duration(), useFailSafe: !0, onStart: function () {
                m.remove.dimmed();
              }, onComplete: function () {
                m.remove.active(), t();
              } })) : (m.verbose("Hiding dimmer with javascript"), m.remove.dimmed(), d.stop().fadeOut(m.get.duration(), function () {
              m.remove.active(), d.removeAttr("style"), t();
            }));
          } }, get: { dimmer: function () {
            return d;
          }, duration: function () {
            return "object" == typeof g.duration ? m.is.active() ? g.duration.hide : g.duration.show : g.duration;
          } }, has: { dimmer: function () {
            return g.dimmerName ? S.find(p.dimmer).filter("." + g.dimmerName).length > 0 : S.find(p.dimmer).length > 0;
          } }, is: { active: function () {
            return d.hasClass(v.active);
          }, animating: function () {
            return d.is(":animated") || d.hasClass(v.animating);
          }, closable: function () {
            return "auto" == g.closable ? "hover" != g.on : g.closable;
          }, dimmer: function () {
            return S.hasClass(v.dimmer);
          }, dimmable: function () {
            return S.hasClass(v.dimmable);
          }, dimmed: function () {
            return f.hasClass(v.dimmed);
          }, disabled: function () {
            return f.hasClass(v.disabled);
          }, enabled: function () {
            return !m.is.disabled();
          }, page: function () {
            return f.is("body");
          }, pageDimmer: function () {
            return d.hasClass(v.pageDimmer);
          } }, can: { show: function () {
            return !d.hasClass(v.disabled);
          } }, set: { opacity: function (e) {
            var t = d.css("background-color"),
                n = t.split(","),
                i = n && 3 == n.length,
                o = n && 4 == n.length;e = 0 === g.opacity ? 0 : g.opacity || e, i || o ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", m.debug("Setting opacity to", e), d.css("background-color", t);
          }, active: function () {
            d.addClass(v.active);
          }, dimmable: function () {
            f.addClass(v.dimmable);
          }, dimmed: function () {
            f.addClass(v.dimmed);
          }, pageDimmer: function () {
            d.addClass(v.pageDimmer);
          }, disabled: function () {
            d.addClass(v.disabled);
          }, variation: function (e) {
            (e = e || g.variation) && d.addClass(e);
          } }, remove: { active: function () {
            d.removeClass(v.active);
          }, dimmed: function () {
            f.removeClass(v.dimmed);
          }, disabled: function () {
            d.removeClass(v.disabled);
          }, variation: function (e) {
            (e = e || g.variation) && d.removeClass(e);
          } }, setting: function (t, n) {
          if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function () {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function () {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function () {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function () {
            var t = g.name + ":",
                n = 0;r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", C && (t += " '" + C + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = T;return n = n || u, a = k || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }).preinitialize(), c ? (T === i && m.initialize(), m.invoke(l)) : (T !== i && T.invoke("destroy"), m.initialize());
    }), o !== i ? o : this;
  }, e.fn.dimmer.settings = { name: "Dimmer", namespace: "dimmer", silent: !1, debug: !1, verbose: !1, performance: !0, dimmerName: !1, variation: !1, closable: "auto", useCSS: !0, transition: "fade", on: !1, opacity: "auto", duration: { show: 500, hide: 500 }, onChange: function () {}, onShow: function () {}, onHide: function () {}, error: { method: "The method you called is not defined." }, className: { active: "active", animating: "animating", dimmable: "dimmable", dimmed: "dimmed", dimmer: "dimmer", disabled: "disabled", hide: "hide", pageDimmer: "page", show: "show" }, selector: { dimmer: "> .ui.dimmer", content: ".ui.dimmer > .content, .ui.dimmer > .content > .center" }, template: { dimmer: function () {
        return e("<div />").attr("class", "ui dimmer");
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function (o) {
    var a,
        r = e(this),
        s = e(n),
        l = r.selector || "",
        c = "ontouchstart" in n.documentElement,
        u = new Date().getTime(),
        d = [],
        f = arguments[0],
        m = "string" == typeof f,
        g = [].slice.call(arguments, 1);return r.each(function (p) {
      var h,
          v,
          b,
          y,
          x,
          C,
          w,
          S,
          k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
          T = k.className,
          A = k.message,
          R = k.fields,
          P = k.keys,
          E = k.metadata,
          F = k.namespace,
          O = k.regExp,
          D = k.selector,
          q = k.error,
          j = k.templates,
          z = "." + F,
          I = "module-" + F,
          M = e(this),
          L = e(k.context),
          V = M.find(D.text),
          N = M.find(D.search),
          H = M.find(D.sizer),
          U = M.find(D.input),
          W = M.find(D.icon),
          B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(),
          Q = M.children(D.menu),
          X = Q.find(D.item),
          $ = !1,
          Y = !1,
          Z = !1,
          K = this,
          J = M.data(I);S = { initialize: function () {
          S.debug("Initializing dropdown", k), S.is.alreadySetup() ? S.setup.reference() : (S.setup.layout(), k.values && S.change.values(k.values), S.refreshData(), S.save.defaults(), S.restore.selected(), S.create.id(), S.bind.events(), S.observeChanges(), S.instantiate());
        }, instantiate: function () {
          S.verbose("Storing instance of dropdown", S), J = S, M.data(I, S);
        }, destroy: function () {
          S.verbose("Destroying previous dropdown", M), S.remove.tabbable(), M.off(z).removeData(I), Q.off(z), s.off(y), S.disconnect.menuObserver(), S.disconnect.selectObserver();
        }, observeChanges: function () {
          "MutationObserver" in t && (C = new MutationObserver(S.event.select.mutation), w = new MutationObserver(S.event.menu.mutation), S.debug("Setting up mutation observer", C, w), S.observe.select(), S.observe.menu());
        }, disconnect: { menuObserver: function () {
            w && w.disconnect();
          }, selectObserver: function () {
            C && C.disconnect();
          } }, observe: { select: function () {
            S.has.input() && C.observe(M[0], { childList: !0, subtree: !0 });
          }, menu: function () {
            S.has.menu() && w.observe(Q[0], { childList: !0, subtree: !0 });
          } }, create: { id: function () {
            x = (Math.random().toString(16) + "000000000").substr(2, 8), y = "." + x, S.verbose("Creating unique id for element", x);
          }, userChoice: function (t) {
            var n, o, a;return !!(t = t || S.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function (t, r) {
              !1 === S.get.item(r) && (a = k.templates.addition(S.add.variables(A.addResult, r)), o = e("<div />").html(a).attr("data-" + E.value, r).attr("data-" + E.text, r).addClass(T.addition).addClass(T.item), k.hideAdditions && o.addClass(T.hidden), n = n === i ? o : n.add(o), S.verbose("Creating user choices for value", r, o));
            }), n);
          }, userLabels: function (t) {
            var n = S.get.userValues();n && (S.debug("Adding user labels", n), e.each(n, function (e, t) {
              S.verbose("Adding custom user value"), S.add.label(t, t);
            }));
          }, menu: function () {
            Q = e("<div />").addClass(T.menu).appendTo(M);
          }, sizer: function () {
            H = e("<span />").addClass(T.sizer).insertAfter(N);
          } }, search: function (e) {
          e = e !== i ? e : S.get.query(), S.verbose("Searching for query", e), S.has.minCharacters(e) ? S.filter(e) : S.hide();
        }, select: { firstUnfiltered: function () {
            S.verbose("Selecting first non-filtered element"), S.remove.selectedItem(), X.not(D.unselectable).not(D.addition + D.hidden).eq(0).addClass(T.selected);
          }, nextAvailable: function (e) {
            var t = (e = e.eq(0)).nextAll(D.item).not(D.unselectable).eq(0),
                n = e.prevAll(D.item).not(D.unselectable).eq(0);t.length > 0 ? (S.verbose("Moving selection to", t), t.addClass(T.selected)) : (S.verbose("Moving selection to", n), n.addClass(T.selected));
          } }, setup: { api: function () {
            var e = { debug: k.debug, urlData: { value: S.get.value(), query: S.get.query() }, on: !1 };S.verbose("First request, initializing API"), M.api(e);
          }, layout: function () {
            M.is("select") && (S.setup.select(), S.setup.returnedObject()), S.has.menu() || S.create.menu(), S.is.search() && !S.has.search() && (S.verbose("Adding search input"), N = e("<input />").addClass(T.search).prop("autocomplete", "off").insertBefore(V)), S.is.multiple() && S.is.searchSelection() && !S.has.sizer() && S.create.sizer(), k.allowTab && S.set.tabbable();
          }, select: function () {
            var t = S.get.selectValues();S.debug("Dropdown initialized on a select", t), M.is("select") && (U = M), U.parent(D.dropdown).length > 0 ? (S.debug("UI dropdown already exists. Creating dropdown menu only"), M = U.closest(D.dropdown), S.has.menu() || S.create.menu(), Q = M.children(D.menu), S.setup.menu(t)) : (S.debug("Creating entire dropdown from select"), M = e("<div />").attr("class", U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U), U.hasClass(T.multiple) && !1 === U.prop("multiple") && (S.error(q.missingMultiple), U.prop("multiple", !0)), U.is("[multiple]") && S.set.multiple(), U.prop("disabled") && (S.debug("Disabling dropdown"), M.addClass(T.disabled)), U.removeAttr("class").detach().prependTo(M)), S.refresh();
          }, menu: function (e) {
            Q.html(j.menu(e, R)), X = Q.find(D.item);
          }, reference: function () {
            S.debug("Dropdown behavior was called on select, replacing with closest dropdown"), M = M.parent(D.dropdown), J = M.data(I), K = M.get(0), S.refresh(), S.setup.returnedObject();
          }, returnedObject: function () {
            var e = r.slice(0, p),
                t = r.slice(p + 1);r = e.add(M).add(t);
          } }, refresh: function () {
          S.refreshSelectors(), S.refreshData();
        }, refreshItems: function () {
          X = Q.find(D.item);
        }, refreshSelectors: function () {
          S.verbose("Refreshing selector cache"), V = M.find(D.text), N = M.find(D.search), U = M.find(D.input), W = M.find(D.icon), B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(), Q = M.children(D.menu), X = Q.find(D.item);
        }, refreshData: function () {
          S.verbose("Refreshing cached metadata"), X.removeData(E.text).removeData(E.value);
        }, clearData: function () {
          S.verbose("Clearing metadata"), X.removeData(E.text).removeData(E.value), M.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText);
        }, toggle: function () {
          S.verbose("Toggling menu visibility"), S.is.active() ? S.hide() : S.show();
        }, show: function (t) {
          if (t = e.isFunction(t) ? t : function () {}, !S.can.show() && S.is.remote() && (S.debug("No API results retrieved, searching before show"), S.queryRemote(S.get.query(), S.show)), S.can.show() && !S.is.active()) {
            if (S.debug("Showing dropdown"), !S.has.message() || S.has.maxSelections() || S.has.allResultsFiltered() || S.remove.message(), S.is.allFiltered()) return !0;!1 !== k.onShow.call(K) && S.animate.show(function () {
              S.can.click() && S.bind.intent(), S.has.menuSearch() && S.focusSearch(), S.set.visible(), t.call(K);
            });
          }
        }, hide: function (t) {
          t = e.isFunction(t) ? t : function () {}, S.is.active() && !S.is.animatingOutward() && (S.debug("Hiding dropdown"), !1 !== k.onHide.call(K) && S.animate.hide(function () {
            S.remove.visible(), t.call(K);
          }));
        }, hideOthers: function () {
          S.verbose("Finding other dropdowns to hide"), r.not(M).has(D.menu + "." + T.visible).dropdown("hide");
        }, hideMenu: function () {
          S.verbose("Hiding menu  instantaneously"), S.remove.active(), S.remove.visible(), Q.transition("hide");
        }, hideSubMenus: function () {
          var e = Q.children(D.item).find(D.menu);S.verbose("Hiding sub menus", e), e.transition("hide");
        }, bind: { events: function () {
            c && S.bind.touchEvents(), S.bind.keyboardEvents(), S.bind.inputEvents(), S.bind.mouseEvents();
          }, touchEvents: function () {
            S.debug("Touch device detected binding additional touch events"), S.is.searchSelection() || S.is.single() && M.on("touchstart" + z, S.event.test.toggle), Q.on("touchstart" + z, D.item, S.event.item.mouseenter);
          }, keyboardEvents: function () {
            S.verbose("Binding keyboard events"), M.on("keydown" + z, S.event.keydown), S.has.search() && M.on(S.get.inputEvent() + z, D.search, S.event.input), S.is.multiple() && s.on("keydown" + y, S.event.document.keydown);
          }, inputEvents: function () {
            S.verbose("Binding input change events"), M.on("change" + z, D.input, S.event.change);
          }, mouseEvents: function () {
            S.verbose("Binding mouse events"), S.is.multiple() && M.on("click" + z, D.label, S.event.label.click).on("click" + z, D.remove, S.event.remove.click), S.is.searchSelection() ? (M.on("mousedown" + z, S.event.mousedown).on("mouseup" + z, S.event.mouseup).on("mousedown" + z, D.menu, S.event.menu.mousedown).on("mouseup" + z, D.menu, S.event.menu.mouseup).on("click" + z, D.icon, S.event.icon.click).on("focus" + z, D.search, S.event.search.focus).on("click" + z, D.search, S.event.search.focus).on("blur" + z, D.search, S.event.search.blur).on("click" + z, D.text, S.event.text.focus), S.is.multiple() && M.on("click" + z, S.event.click)) : ("click" == k.on ? M.on("click" + z, D.icon, S.event.icon.click).on("click" + z, S.event.test.toggle) : "hover" == k.on ? M.on("mouseenter" + z, S.delay.show).on("mouseleave" + z, S.delay.hide) : M.on(k.on + z, S.toggle), M.on("mousedown" + z, S.event.mousedown).on("mouseup" + z, S.event.mouseup).on("focus" + z, S.event.focus), S.has.menuSearch() ? M.on("blur" + z, D.search, S.event.search.blur) : M.on("blur" + z, S.event.blur)), Q.on("mouseenter" + z, D.item, S.event.item.mouseenter).on("mouseleave" + z, D.item, S.event.item.mouseleave).on("click" + z, D.item, S.event.item.click);
          }, intent: function () {
            S.verbose("Binding hide intent event to document"), c && s.on("touchstart" + y, S.event.test.touch).on("touchmove" + y, S.event.test.touch), s.on("click" + y, S.event.test.hide);
          } }, unbind: { intent: function () {
            S.verbose("Removing hide intent event from document"), c && s.off("touchstart" + y).off("touchmove" + y), s.off("click" + y);
          } }, filter: function (e) {
          var t = e !== i ? e : S.get.query(),
              n = function () {
            S.is.multiple() && S.filterActive(), (e || !e && 0 == S.get.activeItem().length) && S.select.firstUnfiltered(), S.has.allResultsFiltered() ? k.onNoResults.call(K, t) ? k.allowAdditions ? k.hideAdditions && (S.verbose("User addition with no menu, setting empty style"), S.set.empty(), S.hideMenu()) : (S.verbose("All items filtered, showing message", t), S.add.message(A.noResults)) : (S.verbose("All items filtered, hiding dropdown", t), S.hideMenu()) : (S.remove.empty(), S.remove.message()), k.allowAdditions && S.add.userSuggestion(e), S.is.searchSelection() && S.can.show() && S.is.focusedOnSearch() && S.show();
          };k.useLabels && S.has.maxSelections() || (k.apiSettings ? S.can.useAPI() ? S.queryRemote(t, function () {
            k.filterRemoteData && S.filterItems(t), n();
          }) : S.error(q.noAPI) : (S.filterItems(t), n()));
        }, queryRemote: function (t, n) {
          var i = { errorDuration: !1, cache: "local", throttle: k.throttle, urlData: { query: t }, onError: function () {
              S.add.message(A.serverError), n();
            }, onFailure: function () {
              S.add.message(A.serverError), n();
            }, onSuccess: function (e) {
              S.remove.message(), S.setup.menu({ values: e[R.remoteValues] }), n();
            } };M.api("get request") || S.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), M.api("setting", i).api("query");
        }, filterItems: function (t) {
          var n = t !== i ? t : S.get.query(),
              o = null,
              a = S.escape.string(n),
              r = new RegExp("^" + a, "igm");S.has.query() && (o = [], S.verbose("Searching for matching values", n), X.each(function () {
            var t,
                i,
                a = e(this);if ("both" == k.match || "text" == k.match) {
              if (-1 !== (t = String(S.get.choiceText(a, !1))).search(r)) return o.push(this), !0;if ("exact" === k.fullTextSearch && S.exactSearch(n, t)) return o.push(this), !0;if (!0 === k.fullTextSearch && S.fuzzySearch(n, t)) return o.push(this), !0;
            }if ("both" == k.match || "value" == k.match) {
              if (-1 !== (i = String(S.get.choiceValue(a, t))).search(r)) return o.push(this), !0;if ("exact" === k.fullTextSearch && S.exactSearch(n, i)) return o.push(this), !0;if (!0 === k.fullTextSearch && S.fuzzySearch(n, i)) return o.push(this), !0;
            }
          })), S.debug("Showing only matched items", n), S.remove.filteredItem(), o && X.not(o).addClass(T.filtered);
        }, fuzzySearch: function (e, t) {
          var n = t.length,
              i = e.length;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) if (t.charCodeAt(a++) === r) continue e;return !1;
          }return !0;
        }, exactSearch: function (e, t) {
          return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1;
        }, filterActive: function () {
          k.useLabels && X.filter("." + T.active).addClass(T.filtered);
        }, focusSearch: function (e) {
          S.has.search() && !S.is.focusedOnSearch() && (e ? (M.off("focus" + z, D.search), N.focus(), M.on("focus" + z, D.search, S.event.search.focus)) : N.focus());
        }, forceSelection: function () {
          var e = X.not(T.filtered).filter("." + T.selected).eq(0),
              t = X.not(T.filtered).filter("." + T.active).eq(0),
              n = e.length > 0 ? e : t;if (n.length > 0 && !S.is.multiple()) return S.debug("Forcing partial selection to selected item", n), void S.event.item.click.call(n, {}, !0);k.allowAdditions ? (S.set.selected(S.get.query()), S.remove.searchTerm()) : S.remove.searchTerm();
        }, change: { values: function (t) {
            k.allowAdditions || S.clear(), S.debug("Creating dropdown with specified values", t), S.setup.menu({ values: t }), e.each(t, function (e, t) {
              if (1 == t.selected) return S.debug("Setting initial selection to", t.value), S.set.selected(t.value), !0;
            });
          } }, event: { change: function () {
            Z || (S.debug("Input changed, updating selection"), S.set.selected());
          }, focus: function () {
            k.showOnFocus && !$ && S.is.hidden() && !v && S.show();
          }, blur: function (e) {
            v = n.activeElement === this, $ || v || (S.remove.activeLabel(), S.hide());
          }, mousedown: function () {
            S.is.searchSelection() ? b = !0 : $ = !0;
          }, mouseup: function () {
            S.is.searchSelection() ? b = !1 : $ = !1;
          }, click: function (t) {
            e(t.target).is(M) && (S.is.focusedOnSearch() ? S.show() : S.focusSearch());
          }, search: { focus: function () {
              $ = !0, S.is.multiple() && S.remove.activeLabel(), k.showOnFocus && S.search();
            }, blur: function (e) {
              v = n.activeElement === this, S.is.searchSelection() && !b && (Y || v || (k.forceSelection && S.forceSelection(), S.hide())), b = !1;
            } }, icon: { click: function (e) {
              S.toggle();
            } }, text: { focus: function (e) {
              $ = !0, S.focusSearch();
            } }, input: function (e) {
            (S.is.multiple() || S.is.searchSelection()) && S.set.filtered(), clearTimeout(S.timer), S.timer = setTimeout(S.search, k.delay.search);
          }, label: { click: function (t) {
              var n = e(this),
                  i = M.find(D.label),
                  o = i.filter("." + T.active),
                  a = n.nextAll("." + T.active),
                  r = n.prevAll("." + T.active),
                  s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)), k.onLabelSelect.apply(this, i.filter("." + T.active));
            } }, remove: { click: function () {
              var t = e(this).parent();t.hasClass(T.active) ? S.remove.activeLabels() : S.remove.activeLabels(t);
            } }, test: { toggle: function (e) {
              var t = S.is.multiple() ? S.show : S.toggle;S.is.bubbledLabelClick(e) || S.is.bubbledIconClick(e) || S.determine.eventOnElement(e, t) && e.preventDefault();
            }, touch: function (e) {
              S.determine.eventOnElement(e, function () {
                "touchstart" == e.type ? S.timer = setTimeout(function () {
                  S.hide();
                }, k.delay.touch) : "touchmove" == e.type && clearTimeout(S.timer);
              }), e.stopPropagation();
            }, hide: function (e) {
              S.determine.eventInModule(e, S.hide);
            } }, select: { mutation: function (t) {
              S.debug("<select> modified, recreating menu");var n = !1;e.each(t, function (t, i) {
                if (e(i.target).is("select") || e(i.addedNodes).is("select")) return n = !0, !0;
              }), n && (S.disconnect.selectObserver(), S.refresh(), S.setup.select(), S.set.selected(), S.observe.select());
            } }, menu: { mutation: function (t) {
              var n = t[0],
                  i = n.addedNodes ? e(n.addedNodes[0]) : e(!1),
                  o = n.removedNodes ? e(n.removedNodes[0]) : e(!1),
                  a = i.add(o),
                  r = a.is(D.addition) || a.closest(D.addition).length > 0,
                  s = a.is(D.message) || a.closest(D.message).length > 0;r || s ? (S.debug("Updating item selector cache"), S.refreshItems()) : (S.debug("Menu modified, updating selector cache"), S.refresh());
            }, mousedown: function () {
              Y = !0;
            }, mouseup: function () {
              Y = !1;
            } }, item: { mouseenter: function (t) {
              var n = e(t.target),
                  i = e(this),
                  o = i.children(D.menu),
                  a = i.siblings(D.item).children(D.menu),
                  r = o.length > 0;!(o.find(n).length > 0) && r && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
                S.verbose("Showing sub-menu", o), e.each(a, function () {
                  S.animate.hide(!1, e(this));
                }), S.animate.show(!1, o);
              }, k.delay.show), t.preventDefault());
            }, mouseleave: function (t) {
              var n = e(this).children(D.menu);n.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
                S.verbose("Hiding sub-menu", n), S.animate.hide(!1, n);
              }, k.delay.hide));
            }, click: function (t, i) {
              var o = e(this),
                  a = e(t ? t.target : ""),
                  r = o.find(D.menu),
                  s = S.get.choiceText(o),
                  l = S.get.choiceValue(o, s),
                  c = r.length > 0,
                  u = r.find(a).length > 0;S.has.menuSearch() && e(n.activeElement).blur(), u || c && !k.allowCategorySelection || (S.is.searchSelection() && (k.allowAdditions && S.remove.userAddition(), S.remove.searchTerm(), S.is.focusedOnSearch() || 1 == i || S.focusSearch(!0)), k.useLabels || (S.remove.filteredItem(), S.set.scrollPosition(o)), S.determine.selectAction.call(this, s, l));
            } }, document: { keydown: function (e) {
              var t = e.which;if (S.is.inObject(t, P)) {
                var n = M.find(D.label),
                    i = n.filter("." + T.active),
                    o = (i.data(E.value), n.index(i)),
                    a = n.length,
                    r = i.length > 0,
                    s = i.length > 1,
                    l = 0 === o,
                    c = o + 1 == a,
                    u = S.is.searchSelection(),
                    d = S.is.focusedOnSearch(),
                    f = S.is.focused(),
                    m = d && 0 === S.get.caretPosition();if (u && !r && !d) return;t == P.leftArrow ? !f && !m || r ? r && (e.shiftKey ? S.verbose("Adding previous label to selection") : (S.verbose("Selecting previous label"), n.removeClass(T.active)), l && !s ? i.addClass(T.active) : i.prev(D.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (S.verbose("Selecting previous label"), n.last().addClass(T.active)) : t == P.rightArrow ? (f && !r && n.first().addClass(T.active), r && (e.shiftKey ? S.verbose("Adding next label to selection") : (S.verbose("Selecting next label"), n.removeClass(T.active)), c ? u ? d ? n.removeClass(T.active) : S.focusSearch() : s ? i.next(D.siblingLabel).addClass(T.active) : i.addClass(T.active) : i.next(D.siblingLabel).addClass(T.active), e.preventDefault())) : t == P.deleteKey || t == P.backspace ? r ? (S.verbose("Removing active labels"), c && u && !d && S.focusSearch(), i.last().next(D.siblingLabel).addClass(T.active), S.remove.activeLabels(i), e.preventDefault()) : m && !r && t == P.backspace && (S.verbose("Removing last label on input backspace"), i = n.last().addClass(T.active), S.remove.activeLabels(i)) : i.removeClass(T.active);
              }
            } }, keydown: function (e) {
            var t = e.which;if (S.is.inObject(t, P)) {
              var n,
                  i = X.not(D.unselectable).filter("." + T.selected).eq(0),
                  o = Q.children("." + T.active).eq(0),
                  a = i.length > 0 ? i : o,
                  r = a.length > 0 ? a.siblings(":not(." + T.filtered + ")").addBack() : Q.children(":not(." + T.filtered + ")"),
                  s = a.children(D.menu),
                  l = a.closest(D.menu),
                  c = l.hasClass(T.visible) || l.hasClass(T.animating) || l.parent(D.menu).length > 0,
                  u = s.length > 0,
                  d = a.length > 0,
                  f = a.not(D.unselectable).length > 0,
                  m = t == P.delimiter && k.allowAdditions && S.is.multiple();if (k.allowAdditions && k.hideAdditions && (t == P.enter || m) && f && (S.verbose("Selecting item from keyboard shortcut", a), S.event.item.click.call(a, e), S.is.searchSelection() && S.remove.searchTerm()), S.is.visible()) {
                if ((t == P.enter || m) && (t == P.enter && d && u && !k.allowCategorySelection ? (S.verbose("Pressed enter on unselectable category, opening sub menu"), t = P.rightArrow) : f && (S.verbose("Selecting item from keyboard shortcut", a), S.event.item.click.call(a, e), S.is.searchSelection() && S.remove.searchTerm()), e.preventDefault()), d && (t == P.leftArrow && l[0] !== Q[0] && (S.verbose("Left key pressed, closing sub-menu"), S.animate.hide(!1, l), a.removeClass(T.selected), l.closest(D.item).addClass(T.selected), e.preventDefault()), t == P.rightArrow && u && (S.verbose("Right key pressed, opening sub-menu"), S.animate.show(!1, s), a.removeClass(T.selected), s.find(D.item).eq(0).addClass(T.selected), e.preventDefault())), t == P.upArrow) {
                  if (n = d && c ? a.prevAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0), r.index(n) < 0) return S.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();S.verbose("Up key pressed, changing active item"), a.removeClass(T.selected), n.addClass(T.selected), S.set.scrollPosition(n), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault();
                }if (t == P.downArrow) {
                  if (0 === (n = d && c ? n = a.nextAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0)).length) return S.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();S.verbose("Down key pressed, changing active item"), X.removeClass(T.selected), n.addClass(T.selected), S.set.scrollPosition(n), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault();
                }t == P.pageUp && (S.scrollPage("up"), e.preventDefault()), t == P.pageDown && (S.scrollPage("down"), e.preventDefault()), t == P.escape && (S.verbose("Escape key pressed, closing dropdown"), S.hide());
              } else m && e.preventDefault(), t != P.downArrow || S.is.visible() || (S.verbose("Down key pressed, showing dropdown"), S.show(), e.preventDefault());
            } else S.has.search() || S.set.selectedLetter(String.fromCharCode(t));
          } }, trigger: { change: function () {
            var e = n.createEvent("HTMLEvents"),
                t = U[0];t && (S.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, determine: { selectAction: function (t, n) {
            S.verbose("Determining action", k.action), e.isFunction(S.action[k.action]) ? (S.verbose("Triggering preset action", k.action, t, n), S.action[k.action].call(K, t, n, this)) : e.isFunction(k.action) ? (S.verbose("Triggering user action", k.action, t, n), k.action.call(K, t, n, this)) : S.error(q.action, k.action);
          }, eventInModule: function (t, i) {
            var o = e(t.target),
                a = o.closest(n.documentElement).length > 0,
                r = o.closest(M).length > 0;return i = e.isFunction(i) ? i : function () {}, a && !r ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown, canceling callback"), !1);
          }, eventOnElement: function (t, i) {
            var o = e(t.target),
                a = o.closest(D.siblingLabel),
                r = n.body.contains(t.target),
                s = 0 === M.find(a).length,
                l = 0 === o.closest(Q).length;return i = e.isFunction(i) ? i : function () {}, r && s && l ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown menu, canceling callback"), !1);
          } }, action: { nothing: function () {}, activate: function (t, n, o) {
            if (n = n !== i ? n : t, S.can.activate(e(o))) {
              if (S.set.selected(n, e(o)), S.is.multiple() && !S.is.allFiltered()) return;S.hideAndClear();
            }
          }, select: function (t, n, o) {
            if (n = n !== i ? n : t, S.can.activate(e(o))) {
              if (S.set.value(n, e(o)), S.is.multiple() && !S.is.allFiltered()) return;S.hideAndClear();
            }
          }, combo: function (t, n, o) {
            n = n !== i ? n : t, S.set.selected(n, e(o)), S.hideAndClear();
          }, hide: function (e, t, n) {
            S.set.value(t, e), S.hideAndClear();
          } }, get: { id: function () {
            return x;
          }, defaultText: function () {
            return M.data(E.defaultText);
          }, defaultValue: function () {
            return M.data(E.defaultValue);
          }, placeholderText: function () {
            return "auto" != k.placeholder && "string" == typeof k.placeholder ? k.placeholder : M.data(E.placeholderText) || "";
          }, text: function () {
            return V.text();
          }, query: function () {
            return e.trim(N.val());
          }, searchWidth: function (e) {
            return e = e !== i ? e : N.val(), H.text(e), Math.ceil(H.width() + 1);
          }, selectionCount: function () {
            var t = S.get.values();return S.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== S.get.value() ? 1 : 0;
          }, transition: function (e) {
            return "auto" == k.transition ? S.is.upward(e) ? "slide up" : "slide down" : k.transition;
          }, userValues: function () {
            var t = S.get.values();return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
              return !1 === S.get.item(e);
            }));
          }, uniqueArray: function (t) {
            return e.grep(t, function (n, i) {
              return e.inArray(n, t) === i;
            });
          }, caretPosition: function () {
            var e,
                t,
                i = N.get(0);return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), t = (e = n.selection.createRange()).text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0;
          }, value: function () {
            var t = U.length > 0 ? U.val() : M.data(E.value),
                n = e.isArray(t) && 1 === t.length && "" === t[0];return t === i || n ? "" : t;
          }, values: function () {
            var e = S.get.value();return "" === e ? "" : !S.has.selectInput() && S.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e;
          }, remoteValues: function () {
            var t = S.get.values(),
                n = !1;return t && ("string" == typeof t && (t = [t]), e.each(t, function (e, t) {
              var i = S.read.remoteData(t);S.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i);
            })), n;
          }, choiceText: function (t, n) {
            if (n = n !== i ? n : k.preserveHTML, t) return t.find(D.menu).length > 0 && (S.verbose("Retrieving text of element with sub-menu"), (t = t.clone()).find(D.menu).remove(), t.find(D.menuIcon).remove()), t.data(E.text) !== i ? t.data(E.text) : n ? e.trim(t.html()) : e.trim(t.text());
          }, choiceValue: function (t, n) {
            return n = n || S.get.choiceText(t), !!t && (t.data(E.value) !== i ? String(t.data(E.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n));
          }, inputEvent: function () {
            var e = N[0];return !!e && (e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup");
          }, selectValues: function () {
            var t = { values: [] };return M.find("option").each(function () {
              var n = e(this),
                  o = n.html(),
                  a = n.attr("disabled"),
                  r = n.attr("value") !== i ? n.attr("value") : o;"auto" === k.placeholder && "" === r ? t.placeholder = o : t.values.push({ name: o, value: r, disabled: a });
            }), k.placeholder && "auto" !== k.placeholder && (S.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function (e, t) {
              return e.name > t.name ? 1 : -1;
            }), S.debug("Retrieved and sorted values from select", t)) : S.debug("Retrieved values from select", t), t;
          }, activeItem: function () {
            return X.filter("." + T.active);
          }, selectedItem: function () {
            var e = X.not(D.unselectable).filter("." + T.selected);return e.length > 0 ? e : X.eq(0);
          }, itemWithAdditions: function (e) {
            var t = S.get.item(e),
                n = S.create.userChoice(e);return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t;
          }, item: function (t, n) {
            var o,
                a,
                r = !1;return t = t !== i ? t : S.get.values() !== i ? S.get.values() : S.get.text(), o = a ? t.length > 0 : t !== i && null !== t, a = S.is.multiple() && e.isArray(t), n = "" === t || 0 === t || n || !1, o && X.each(function () {
              var o = e(this),
                  s = S.get.choiceText(o),
                  l = S.get.choiceValue(o, s);if (null !== l && l !== i) if (a) -1 === e.inArray(String(l), t) && -1 === e.inArray(s, t) || (r = r ? r.add(o) : o);else if (n) {
                if (S.verbose("Ambiguous dropdown value using strict type check", o, t), l === t || s === t) return r = o, !0;
              } else if (String(l) == String(t) || s == t) return S.verbose("Found select item by value", l, t), r = o, !0;
            }), r;
          } }, check: { maxSelections: function (e) {
            return !k.maxSelections || ((e = e !== i ? e : S.get.selectionCount()) >= k.maxSelections ? (S.debug("Maximum selection count reached"), k.useLabels && (X.addClass(T.filtered), S.add.message(A.maxSelections)), !0) : (S.verbose("No longer at maximum selection count"), S.remove.message(), S.remove.filteredItem(), S.is.searchSelection() && S.filterItems(), !1));
          } }, restore: { defaults: function () {
            S.clear(), S.restore.defaultText(), S.restore.defaultValue();
          }, defaultText: function () {
            var e = S.get.defaultText();e === S.get.placeholderText ? (S.debug("Restoring default placeholder text", e), S.set.placeholderText(e)) : (S.debug("Restoring default text", e), S.set.text(e));
          }, placeholderText: function () {
            S.set.placeholderText();
          }, defaultValue: function () {
            var e = S.get.defaultValue();e !== i && (S.debug("Restoring default value", e), "" !== e ? (S.set.value(e), S.set.selected()) : (S.remove.activeItem(), S.remove.selectedItem()));
          }, labels: function () {
            k.allowAdditions && (k.useLabels || (S.error(q.labels), k.useLabels = !0), S.debug("Restoring selected values"), S.create.userLabels()), S.check.maxSelections();
          }, selected: function () {
            S.restore.values(), S.is.multiple() ? (S.debug("Restoring previously selected values and labels"), S.restore.labels()) : S.debug("Restoring previously selected values");
          }, values: function () {
            S.set.initialLoad(), k.apiSettings && k.saveRemoteData && S.get.remoteValues() ? S.restore.remoteValues() : S.set.selected(), S.remove.initialLoad();
          }, remoteValues: function () {
            var t = S.get.remoteValues();S.debug("Recreating selected from session data", t), t && (S.is.single() ? e.each(t, function (e, t) {
              S.set.text(t);
            }) : e.each(t, function (e, t) {
              S.add.label(e, t);
            }));
          } }, read: { remoteData: function (e) {
            var n;if (t.Storage !== i) return (n = sessionStorage.getItem(e)) !== i && n;S.error(q.noStorage);
          } }, save: { defaults: function () {
            S.save.defaultText(), S.save.placeholderText(), S.save.defaultValue();
          }, defaultValue: function () {
            var e = S.get.value();S.verbose("Saving default value as", e), M.data(E.defaultValue, e);
          }, defaultText: function () {
            var e = S.get.text();S.verbose("Saving default text as", e), M.data(E.defaultText, e);
          }, placeholderText: function () {
            var e;!1 !== k.placeholder && V.hasClass(T.placeholder) && (e = S.get.text(), S.verbose("Saving placeholder text as", e), M.data(E.placeholderText, e));
          }, remoteData: function (e, n) {
            t.Storage !== i ? (S.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e)) : S.error(q.noStorage);
          } }, clear: function () {
          S.is.multiple() && k.useLabels ? S.remove.labels() : (S.remove.activeItem(), S.remove.selectedItem()), S.set.placeholderText(), S.clearValue();
        }, clearValue: function () {
          S.set.value("");
        }, scrollPage: function (e, t) {
          var n,
              i,
              o = t || S.get.selectedItem(),
              a = o.closest(D.menu),
              r = a.outerHeight(),
              s = a.scrollTop(),
              l = X.eq(0).outerHeight(),
              c = Math.floor(r / l),
              u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
              d = X.not(D.unselectable);i = "up" == e ? d.index(o) - c : d.index(o) + c, (n = ("up" == e ? i >= 0 : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length > 0 && (S.debug("Scrolling page", e, n), o.removeClass(T.selected), n.addClass(T.selected), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), a.scrollTop(u));
        }, set: { filtered: function () {
            var e = S.is.multiple(),
                t = S.is.searchSelection(),
                n = e && t,
                i = t ? S.get.query() : "",
                o = "string" == typeof i && i.length > 0,
                a = S.get.searchWidth(),
                r = "" !== i;e && o && (S.verbose("Adjusting input width", a, k.glyphWidth), N.css("width", a)), o || n && r ? (S.verbose("Hiding placeholder text"), V.addClass(T.filtered)) : (!e || n && !r) && (S.verbose("Showing placeholder text"), V.removeClass(T.filtered));
          }, empty: function () {
            M.addClass(T.empty);
          }, loading: function () {
            M.addClass(T.loading);
          }, placeholderText: function (e) {
            e = e || S.get.placeholderText(), S.debug("Setting placeholder text", e), S.set.text(e), V.addClass(T.placeholder);
          }, tabbable: function () {
            S.is.searchSelection() ? (S.debug("Added tabindex to searchable dropdown"), N.val("").attr("tabindex", 0), Q.attr("tabindex", -1)) : (S.debug("Added tabindex to dropdown"), M.attr("tabindex") === i && (M.attr("tabindex", 0), Q.attr("tabindex", -1)));
          }, initialLoad: function () {
            S.verbose("Setting initial load"), h = !0;
          }, activeItem: function (e) {
            k.allowAdditions && e.filter(D.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active);
          }, partialSearch: function (e) {
            var t = S.get.query().length;N.val(e.substr(0, t));
          }, scrollPosition: function (e, t) {
            var n, o, a, r, s, l;n = (e = e || S.get.selectedItem()).closest(D.menu), o = e && e.length > 0, t = t !== i && t, e && n.length > 0 && o && (e.position().top, n.addClass(T.loading), a = (r = n.scrollTop()) - n.offset().top + e.offset().top, t || (l = r + n.height() < a + 5, s = a - 5 < r), S.debug("Scrolling to active item", a), (t || s || l) && n.scrollTop(a), n.removeClass(T.loading));
          }, text: function (e) {
            "select" !== k.action && ("combo" == k.action ? (S.debug("Changing combo button text", e, B), k.preserveHTML ? B.html(e) : B.text(e)) : (e !== S.get.placeholderText() && V.removeClass(T.placeholder), S.debug("Changing text", e, V), V.removeClass(T.filtered), k.preserveHTML ? V.html(e) : V.text(e)));
          }, selectedItem: function (e) {
            var t = S.get.choiceValue(e),
                n = S.get.choiceText(e, !1),
                i = S.get.choiceText(e, !0);S.debug("Setting user selection to item", e), S.remove.activeItem(), S.set.partialSearch(n), S.set.activeItem(e), S.set.selected(t, e), S.set.text(i);
          }, selectedLetter: function (t) {
            var n,
                i = X.filter("." + T.selected),
                o = !1;i.length > 0 && S.has.firstLetter(i, t) && (n = i.nextAll(X).eq(0), S.has.firstLetter(n, t) && (o = n)), o || X.each(function () {
              if (S.has.firstLetter(e(this), t)) return o = e(this), !1;
            }), o && (S.verbose("Scrolling to next value with letter", t), S.set.scrollPosition(o), i.removeClass(T.selected), o.addClass(T.selected), k.selectOnKeydown && S.is.single() && S.set.selectedItem(o));
          }, direction: function (e) {
            "auto" == k.direction ? (S.remove.upward(), S.can.openDownward(e) ? S.remove.upward(e) : S.set.upward(e), S.is.leftward(e) || S.can.openRightward(e) || S.set.leftward(e)) : "upward" == k.direction && S.set.upward(e);
          }, upward: function (e) {
            (e || M).addClass(T.upward);
          }, leftward: function (e) {
            (e || Q).addClass(T.leftward);
          }, value: function (e, t, n) {
            var o = S.escape.value(e),
                a = U.length > 0,
                r = S.get.values(),
                s = e !== i ? String(e) : e;if (a) {
              if (!k.allowReselection && s == r && (S.verbose("Skipping value update already same value", e, r), !S.is.initialLoad())) return;S.is.single() && S.has.selectInput() && S.can.extendSelect() && (S.debug("Adding user option", e), S.add.optionValue(e)), S.debug("Updating input value", o, r), Z = !0, U.val(o), !1 === k.fireOnInit && S.is.initialLoad() ? S.debug("Input native change event ignored on initial load") : S.trigger.change(), Z = !1;
            } else S.verbose("Storing value in metadata", o, U), o !== r && M.data(E.value, s);!1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", k.onChange) : k.onChange.call(K, e, t, n);
          }, active: function () {
            M.addClass(T.active);
          }, multiple: function () {
            M.addClass(T.multiple);
          }, visible: function () {
            M.addClass(T.visible);
          }, exactly: function (e, t) {
            S.debug("Setting selected to exact values"), S.clear(), S.set.selected(e, t);
          }, selected: function (t, n) {
            var i = S.is.multiple();(n = k.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t)) && (S.debug("Setting selected menu item to", n), S.is.multiple() && S.remove.searchWidth(), S.is.single() ? (S.remove.activeItem(), S.remove.selectedItem()) : k.useLabels && S.remove.selectedItem(), n.each(function () {
              var t = e(this),
                  o = S.get.choiceText(t),
                  a = S.get.choiceValue(t, o),
                  r = t.hasClass(T.filtered),
                  s = t.hasClass(T.active),
                  l = t.hasClass(T.addition),
                  c = i && 1 == n.length;i ? !s || l ? (k.apiSettings && k.saveRemoteData && S.save.remoteData(o, a), k.useLabels ? (S.add.label(a, o, c), S.add.value(a, o, t), S.set.activeItem(t), S.filterActive(), S.select.nextAvailable(n)) : (S.add.value(a, o, t), S.set.text(S.add.variables(A.count)), S.set.activeItem(t))) : r || (S.debug("Selected active value, removing label"), S.remove.selected(a)) : (k.apiSettings && k.saveRemoteData && S.save.remoteData(o, a), S.set.text(o), S.set.value(a, o, t), t.addClass(T.active).addClass(T.selected));
            }));
          } }, add: { label: function (t, n, i) {
            var o,
                a = S.is.searchSelection() ? N : V,
                r = S.escape.value(t);o = e("<a />").addClass(T.label).attr("data-" + E.value, r).html(j.label(r, n)), o = k.onLabelCreate.call(o, r, n), S.has.value(t) ? S.debug("User selection already exists, skipping", r) : (k.label.variation && o.addClass(k.label.variation), !0 === i ? (S.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(a).transition(k.label.transition, k.label.duration)) : (S.debug("Adding selection label", o), o.insertBefore(a)));
          }, message: function (t) {
            var n = Q.children(D.message),
                i = k.templates.message(S.add.variables(t));n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(Q);
          }, optionValue: function (t) {
            var n = S.escape.value(t);U.find('option[value="' + S.escape.string(n) + '"]').length > 0 || (S.disconnect.selectObserver(), S.is.single() && (S.verbose("Removing previous user addition"), U.find("option." + T.addition).remove()), e("<option/>").prop("value", n).addClass(T.addition).html(t).appendTo(U), S.verbose("Adding user addition as an <option>", t), S.observe.select());
          }, userSuggestion: function (e) {
            var t,
                n = Q.children(D.addition),
                i = S.get.item(e),
                o = i && i.not(D.addition).length,
                a = n.length > 0;k.useLabels && S.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(E.value, e).data(E.text, e).attr("data-" + E.value, e).attr("data-" + E.text, e).removeClass(T.filtered), k.hideAdditions || (t = k.templates.addition(S.add.variables(A.addResult, e)), n.html(t)), S.verbose("Replacing user suggestion with new value", n)) : ((n = S.create.userChoice(e)).prependTo(Q), S.verbose("Adding item choice to menu corresponding with user choice addition", n)), k.hideAdditions && !S.is.allFiltered() || n.addClass(T.selected).siblings().removeClass(T.selected), S.refreshItems()));
          }, variables: function (e, t) {
            var n,
                i,
                o = -1 !== e.search("{count}"),
                a = -1 !== e.search("{maxCount}"),
                r = -1 !== e.search("{term}");return S.verbose("Adding templated variables to message", e), o && (n = S.get.selectionCount(), e = e.replace("{count}", n)), a && (n = S.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (i = t || S.get.query(), e = e.replace("{term}", i)), e;
          }, value: function (t, n, i) {
            var o,
                a = S.get.values();S.has.value(t) ? S.debug("Value already selected") : "" !== t ? (e.isArray(a) ? (o = a.concat([t]), o = S.get.uniqueArray(o)) : o = [t], S.has.selectInput() ? S.can.extendSelect() && (S.debug("Adding value to select", t, o, U), S.add.optionValue(t)) : (o = o.join(k.delimiter), S.debug("Setting hidden input to delimited value", o, U)), !1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("Skipping onadd callback on initial load", k.onAdd) : k.onAdd.call(K, t, n, i), S.set.value(o, t, n, i), S.check.maxSelections()) : S.debug("Cannot select blank values from multiselect");
          } }, remove: { active: function () {
            M.removeClass(T.active);
          }, activeLabel: function () {
            M.find(D.label).removeClass(T.active);
          }, empty: function () {
            M.removeClass(T.empty);
          }, loading: function () {
            M.removeClass(T.loading);
          }, initialLoad: function () {
            h = !1;
          }, upward: function (e) {
            (e || M).removeClass(T.upward);
          }, leftward: function (e) {
            (e || Q).removeClass(T.leftward);
          }, visible: function () {
            M.removeClass(T.visible);
          }, activeItem: function () {
            X.removeClass(T.active);
          }, filteredItem: function () {
            k.useLabels && S.has.maxSelections() || (k.useLabels && S.is.multiple() ? X.not("." + T.active).removeClass(T.filtered) : X.removeClass(T.filtered), S.remove.empty());
          }, optionValue: function (e) {
            var t = S.escape.value(e),
                n = U.find('option[value="' + S.escape.string(t) + '"]');n.length > 0 && n.hasClass(T.addition) && (C && (C.disconnect(), S.verbose("Temporarily disconnecting mutation observer")), n.remove(), S.verbose("Removing user addition as an <option>", t), C && C.observe(U[0], { childList: !0, subtree: !0 }));
          }, message: function () {
            Q.children(D.message).remove();
          }, searchWidth: function () {
            N.css("width", "");
          }, searchTerm: function () {
            S.verbose("Cleared search term"), N.val(""), S.set.filtered();
          }, userAddition: function () {
            X.filter(D.addition).remove();
          }, selected: function (t, n) {
            if (!(n = k.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t))) return !1;n.each(function () {
              var t = e(this),
                  n = S.get.choiceText(t),
                  i = S.get.choiceValue(t, n);S.is.multiple() ? k.useLabels ? (S.remove.value(i, n, t), S.remove.label(i)) : (S.remove.value(i, n, t), 0 === S.get.selectionCount() ? S.set.placeholderText() : S.set.text(S.add.variables(A.count))) : S.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), k.useLabels && t.removeClass(T.selected);
            });
          }, selectedItem: function () {
            X.removeClass(T.selected);
          }, value: function (e, t, n) {
            var i,
                o = S.get.values();S.has.selectInput() ? (S.verbose("Input is <select> removing selected option", e), i = S.remove.arrayValue(e, o), S.remove.optionValue(e)) : (S.verbose("Removing from delimited values", e), i = (i = S.remove.arrayValue(e, o)).join(k.delimiter)), !1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(K, e, t, n), S.set.value(i, t, n), S.check.maxSelections();
          }, arrayValue: function (t, n) {
            return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
              return t != e;
            }), S.verbose("Removed value from delimited string", t, n), n;
          }, label: function (e, t) {
            var n = M.find(D.label).filter("[data-" + E.value + '="' + S.escape.string(e) + '"]');S.verbose("Removing label", n), n.remove();
          }, activeLabels: function (e) {
            e = e || M.find(D.label).filter("." + T.active), S.verbose("Removing active label selections", e), S.remove.labels(e);
          }, labels: function (t) {
            t = t || M.find(D.label), S.verbose("Removing labels", t), t.each(function () {
              var t = e(this),
                  n = t.data(E.value),
                  o = n !== i ? String(n) : n,
                  a = S.is.userValue(o);!1 !== k.onLabelRemove.call(t, n) ? (S.remove.message(), a ? (S.remove.value(o), S.remove.label(o)) : S.remove.selected(o)) : S.debug("Label remove callback cancelled removal");
            });
          }, tabbable: function () {
            S.is.searchSelection() ? (S.debug("Searchable dropdown initialized"), N.removeAttr("tabindex"), Q.removeAttr("tabindex")) : (S.debug("Simple selection dropdown initialized"), M.removeAttr("tabindex"), Q.removeAttr("tabindex"));
          } }, has: { menuSearch: function () {
            return S.has.search() && N.closest(Q).length > 0;
          }, search: function () {
            return N.length > 0;
          }, sizer: function () {
            return H.length > 0;
          }, selectInput: function () {
            return U.is("select");
          }, minCharacters: function (e) {
            return !k.minCharacters || (e = e !== i ? String(e) : String(S.get.query())).length >= k.minCharacters;
          }, firstLetter: function (e, t) {
            var n;return !(!e || 0 === e.length || "string" != typeof t) && (n = S.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase());
          }, input: function () {
            return U.length > 0;
          }, items: function () {
            return X.length > 0;
          }, menu: function () {
            return Q.length > 0;
          }, message: function () {
            return 0 !== Q.children(D.message).length;
          }, label: function (e) {
            var t = S.escape.value(e);return M.find(D.label).filter("[data-" + E.value + '="' + S.escape.string(t) + '"]').length > 0;
          }, maxSelections: function () {
            return k.maxSelections && S.get.selectionCount() >= k.maxSelections;
          }, allResultsFiltered: function () {
            var e = X.not(D.addition);return e.filter(D.unselectable).length === e.length;
          }, userSuggestion: function () {
            return Q.children(D.addition).length > 0;
          }, query: function () {
            return "" !== S.get.query();
          }, value: function (e) {
            return k.ignoreCase ? S.has.valueIgnoringCase(e) : S.has.valueMatchingCase(e);
          }, valueMatchingCase: function (t) {
            var n = S.get.values();return !!(e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t);
          }, valueIgnoringCase: function (t) {
            var n = S.get.values(),
                i = !1;return e.isArray(n) || (n = [n]), e.each(n, function (e, n) {
              if (String(t).toLowerCase() == String(n).toLowerCase()) return i = !0, !1;
            }), i;
          } }, is: { active: function () {
            return M.hasClass(T.active);
          }, animatingInward: function () {
            return Q.transition("is inward");
          }, animatingOutward: function () {
            return Q.transition("is outward");
          }, bubbledLabelClick: function (t) {
            return e(t.target).is("select, input") && M.closest("label").length > 0;
          }, bubbledIconClick: function (t) {
            return e(t.target).closest(W).length > 0;
          }, alreadySetup: function () {
            return M.is("select") && M.parent(D.dropdown).data(I) !== i && 0 === M.prev().length;
          }, animating: function (e) {
            return e ? e.transition && e.transition("is animating") : Q.transition && Q.transition("is animating");
          }, leftward: function (e) {
            return (e || Q).hasClass(T.leftward);
          }, disabled: function () {
            return M.hasClass(T.disabled);
          }, focused: function () {
            return n.activeElement === M[0];
          }, focusedOnSearch: function () {
            return n.activeElement === N[0];
          }, allFiltered: function () {
            return (S.is.multiple() || S.has.search()) && !(0 == k.hideAdditions && S.has.userSuggestion()) && !S.has.message() && S.has.allResultsFiltered();
          }, hidden: function (e) {
            return !S.is.visible(e);
          }, initialLoad: function () {
            return h;
          }, inObject: function (t, n) {
            var i = !1;return e.each(n, function (e, n) {
              if (n == t) return i = !0, !0;
            }), i;
          }, multiple: function () {
            return M.hasClass(T.multiple);
          }, remote: function () {
            return k.apiSettings && S.can.useAPI();
          }, single: function () {
            return !S.is.multiple();
          }, selectMutation: function (t) {
            var n = !1;return e.each(t, function (t, i) {
              if (i.target && e(i.target).is("select")) return n = !0, !0;
            }), n;
          }, search: function () {
            return M.hasClass(T.search);
          }, searchSelection: function () {
            return S.has.search() && 1 === N.parent(D.dropdown).length;
          }, selection: function () {
            return M.hasClass(T.selection);
          }, userValue: function (t) {
            return -1 !== e.inArray(t, S.get.userValues());
          }, upward: function (e) {
            return (e || M).hasClass(T.upward);
          }, visible: function (e) {
            return e ? e.hasClass(T.visible) : Q.hasClass(T.visible);
          }, verticallyScrollableContext: function () {
            var e = L.get(0) !== t && L.css("overflow-y");return "auto" == e || "scroll" == e;
          }, horizontallyScrollableContext: function () {
            var e = L.get(0) !== t && L.css("overflow-X");return "auto" == e || "scroll" == e;
          } }, can: { activate: function (e) {
            return !!k.useLabels || !S.has.maxSelections() || !(!S.has.maxSelections() || !e.hasClass(T.active));
          }, openDownward: function (e) {
            var n,
                i,
                o = e || Q,
                a = !0;return o.addClass(T.loading), i = { context: { offset: L.get(0) === t ? { top: 0, left: 0 } : L.offset(), scrollTop: L.scrollTop(), height: L.outerHeight() }, menu: { offset: o.offset(), height: o.outerHeight() } }, S.is.verticallyScrollableContext() && (i.menu.offset.top += i.context.scrollTop), (n = { above: i.context.scrollTop <= i.menu.offset.top - i.context.offset.top - i.menu.height, below: i.context.scrollTop + i.context.height >= i.menu.offset.top - i.context.offset.top + i.menu.height }).below ? (S.verbose("Dropdown can fit in context downward", n), a = !0) : n.below || n.above ? (S.verbose("Dropdown cannot fit below, opening upward", n), a = !1) : (S.verbose("Dropdown cannot fit in either direction, favoring downward", n), a = !0), o.removeClass(T.loading), a;
          }, openRightward: function (e) {
            var n,
                i,
                o = e || Q,
                a = !0;return o.addClass(T.loading), i = { context: { offset: L.get(0) === t ? { top: 0, left: 0 } : L.offset(), scrollLeft: L.scrollLeft(), width: L.outerWidth() }, menu: { offset: o.offset(), width: o.outerWidth() } }, S.is.horizontallyScrollableContext() && (i.menu.offset.left += i.context.scrollLeft), (n = i.menu.offset.left - i.context.offset.left + i.menu.width >= i.context.scrollLeft + i.context.width) && (S.verbose("Dropdown cannot fit in context rightward", n), a = !1), o.removeClass(T.loading), a;
          }, click: function () {
            return c || "click" == k.on;
          }, extendSelect: function () {
            return k.allowAdditions || k.apiSettings;
          }, show: function () {
            return !S.is.disabled() && (S.has.items() || S.has.message());
          }, useAPI: function () {
            return e.fn.api !== i;
          } }, animate: { show: function (t, n) {
            var o,
                a = n || Q,
                r = n ? function () {} : function () {
              S.hideSubMenus(), S.hideOthers(), S.set.active();
            };t = e.isFunction(t) ? t : function () {}, S.verbose("Doing menu show animation", a), S.set.direction(n), o = S.get.transition(n), S.is.selection() && S.set.scrollPosition(S.get.selectedItem(), !0), (S.is.hidden(a) || S.is.animating(a)) && ("none" == o ? (r(), a.transition("show"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? a.transition({ animation: o + " in", debug: k.debug, verbose: k.verbose, duration: k.duration, queue: !0, onStart: r, onComplete: function () {
                t.call(K);
              } }) : S.error(q.noTransition, o));
          }, hide: function (t, n) {
            var o = n || Q,
                a = (n ? k.duration : k.duration, n ? function () {} : function () {
              S.can.click() && S.unbind.intent(), S.remove.active();
            }),
                r = S.get.transition(n);t = e.isFunction(t) ? t : function () {}, (S.is.visible(o) || S.is.animating(o)) && (S.verbose("Doing menu hide animation", o), "none" == r ? (a(), o.transition("hide"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? o.transition({ animation: r + " out", duration: k.duration, debug: k.debug, verbose: k.verbose, queue: !1, onStart: a, onComplete: function () {
                t.call(K);
              } }) : S.error(q.transition));
          } }, hideAndClear: function () {
          S.remove.searchTerm(), S.has.maxSelections() || (S.has.search() ? S.hide(function () {
            S.remove.filteredItem();
          }) : S.hide());
        }, delay: { show: function () {
            S.verbose("Delaying show event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.show, k.delay.show);
          }, hide: function () {
            S.verbose("Delaying hide event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.hide, k.delay.hide);
          } }, escape: { value: function (t) {
            var n = e.isArray(t),
                i = "string" == typeof t,
                o = !i && !n,
                a = i && -1 !== t.search(O.quote),
                r = [];return o || !a ? t : (S.debug("Encoding quote values for use in select", t), n ? (e.each(t, function (e, t) {
              r.push(t.replace(O.quote, "&quot;"));
            }), r) : t.replace(O.quote, "&quot;"));
          }, string: function (e) {
            return (e = String(e)).replace(O.escape, "\\$&");
          } }, setting: function (t, n) {
          if (S.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (n === i) return k[t];e.isPlainObject(k[t]) ? e.extend(!0, k[t], n) : k[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, S, t);else {
            if (n === i) return S[t];S[t] = n;
          }
        }, debug: function () {
          !k.silent && k.debug && (k.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), S.debug.apply(console, arguments)));
        }, verbose: function () {
          !k.silent && k.verbose && k.debug && (k.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), S.verbose.apply(console, arguments)));
        }, error: function () {
          k.silent || (S.error = Function.prototype.bind.call(console.error, console, k.name + ":"), S.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;k.performance && (n = (t = new Date().getTime()) - (u || t), u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: K, "Execution Time": n })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500);
          }, display: function () {
            var t = k.name + ":",
                n = 0;u = !1, clearTimeout(S.performance.timer), e.each(d, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = J;return n = n || g, o = K || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (S.error(q.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, m ? (J === i && S.initialize(), S.invoke(f)) : (J !== i && J.invoke("destroy"), S.initialize());
    }), a !== i ? a : r;
  }, e.fn.dropdown.settings = { silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", values: !1, apiSettings: !1, selectOnKeydown: !0, minCharacters: 0, filterRemoteData: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, ignoreCase: !1, hideAdditions: !0, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowReselection: !1, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.037, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function (e, t, n) {}, onAdd: function (e, t, n) {}, onRemove: function (e, t, n) {}, onLabelSelect: function (e) {}, onLabelCreate: function (t, n) {
      return e(this);
    }, onLabelRemove: function (e) {
      return !0;
    }, onNoResults: function (e) {
      return !0;
    }, onShow: function () {}, onHide: function () {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", disabled: "disabled", name: "name", value: "value", text: "text" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", hidden: ".hidden", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input, .menu input.search", sizer: "> input.sizer", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", empty: "empty", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", sizer: "sizer", search: "search", selected: "selected", selection: "selection", upward: "upward", leftward: "left", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function (t) {
      var n = t.placeholder || !1,
          i = (t.values, "");return i += '<i class="dropdown icon"></i>', t.placeholder ? i += '<div class="default text">' + n + "</div>" : i += '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
        i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
      }), i += "</div>";
    }, menu: function (t, n) {
      var i = t[n.values] || {},
          o = "";return e.each(i, function (e, t) {
        var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
            a = t[n.disabled] ? "disabled " : "";o += '<div class="' + a + 'item" data-value="' + t[n.value] + '"' + i + ">", o += t[n.name], o += "</div>";
      }), o;
    }, label: function (e, t) {
      return t + '<i class="delete icon"></i>';
    }, message: function (e) {
      return e;
    }, addition: function (e) {
      return e;
    } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.embed = function (n) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var f,
          m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
          g = m.selector,
          p = m.className,
          h = m.sources,
          v = m.error,
          b = m.metadata,
          y = m.namespace,
          x = m.templates,
          C = "." + y,
          w = "module-" + y,
          S = (e(t), e(this)),
          k = (S.find(g.placeholder), S.find(g.icon), S.find(g.embed)),
          T = this,
          A = S.data(w);f = { initialize: function () {
          f.debug("Initializing embed"), f.determine.autoplay(), f.create(), f.bind.events(), f.instantiate();
        }, instantiate: function () {
          f.verbose("Storing instance of module", f), A = f, S.data(w, f);
        }, destroy: function () {
          f.verbose("Destroying previous instance of embed"), f.reset(), S.removeData(w).off(C);
        }, refresh: function () {
          f.verbose("Refreshing selector cache"), S.find(g.placeholder), S.find(g.icon), k = S.find(g.embed);
        }, bind: { events: function () {
            f.has.placeholder() && (f.debug("Adding placeholder events"), S.on("click" + C, g.placeholder, f.createAndShow).on("click" + C, g.icon, f.createAndShow));
          } }, create: function () {
          f.get.placeholder() ? f.createPlaceholder() : f.createAndShow();
        }, createPlaceholder: function (e) {
          var t = f.get.icon(),
              n = f.get.url();f.generate.embed(n);e = e || f.get.placeholder(), S.html(x.placeholder(e, t)), f.debug("Creating placeholder for embed", e, t);
        }, createEmbed: function (t) {
          f.refresh(), t = t || f.get.url(), k = e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(S), m.onCreate.call(T, t), f.debug("Creating embed object", k);
        }, changeEmbed: function (e) {
          k.html(f.generate.embed(e));
        }, createAndShow: function () {
          f.createEmbed(), f.show();
        }, change: function (e, t, n) {
          f.debug("Changing video to ", e, t, n), S.data(b.source, e).data(b.id, t), n ? S.data(b.url, n) : S.removeData(b.url), f.has.embed() ? f.changeEmbed() : f.create();
        }, reset: function () {
          f.debug("Clearing embed and showing placeholder"), f.remove.active(), f.remove.embed(), f.showPlaceholder(), m.onReset.call(T);
        }, show: function () {
          f.debug("Showing embed"), f.set.active(), m.onDisplay.call(T);
        }, hide: function () {
          f.debug("Hiding embed"), f.showPlaceholder();
        }, showPlaceholder: function () {
          f.debug("Showing placeholder image"), f.remove.active(), m.onPlaceholderDisplay.call(T);
        }, get: { id: function () {
            return m.id || S.data(b.id);
          }, placeholder: function () {
            return m.placeholder || S.data(b.placeholder);
          }, icon: function () {
            return m.icon ? m.icon : S.data(b.icon) !== i ? S.data(b.icon) : f.determine.icon();
          }, source: function (e) {
            return m.source ? m.source : S.data(b.source) !== i ? S.data(b.source) : f.determine.source();
          }, type: function () {
            var e = f.get.source();return h[e] !== i && h[e].type;
          }, url: function () {
            return m.url ? m.url : S.data(b.url) !== i ? S.data(b.url) : f.determine.url();
          } }, determine: { autoplay: function () {
            f.should.autoplay() && (m.autoplay = !0);
          }, source: function (t) {
            var n = !1;return (t = t || f.get.url()) && e.each(h, function (e, i) {
              if (-1 !== t.search(i.domain)) return n = e, !1;
            }), n;
          }, icon: function () {
            var e = f.get.source();return h[e] !== i && h[e].icon;
          }, url: function () {
            var e,
                t = m.id || S.data(b.id),
                n = m.source || S.data(b.source);return (e = h[n] !== i && h[n].url.replace("{id}", t)) && S.data(b.url, e), e;
          } }, set: { active: function () {
            S.addClass(p.active);
          } }, remove: { active: function () {
            S.removeClass(p.active);
          }, embed: function () {
            k.empty();
          } }, encode: { parameters: function (e) {
            var t,
                n = [];for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));return n.join("&amp;");
          } }, generate: { embed: function (e) {
            f.debug("Generating embed html");var t,
                n,
                i = f.get.source();return (e = f.get.url(e)) ? (n = f.generate.parameters(i), t = x.iframe(e, n)) : f.error(v.noURL, S), t;
          }, parameters: function (t, n) {
            var o = h[t] && h[t].parameters !== i ? h[t].parameters(m) : {};return (n = n || m.parameters) && (o = e.extend({}, o, n)), o = m.onEmbed(o), f.encode.parameters(o);
          } }, has: { embed: function () {
            return k.length > 0;
          }, placeholder: function () {
            return m.placeholder || S.data(b.placeholder);
          } }, should: { autoplay: function () {
            return "auto" === m.autoplay ? m.placeholder || S.data(b.placeholder) !== i : m.autoplay;
          } }, is: { video: function () {
            return "video" == f.get.type();
          } }, setting: function (t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];f[t] = n;
          }
        }, debug: function () {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function () {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function () {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: T, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function () {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(f.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = A;return n = n || d, a = T || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, u ? (A === i && f.initialize(), f.invoke(c)) : (A !== i && A.invoke("destroy"), f.initialize());
    }), o !== i ? o : this;
  }, e.fn.embed.settings = { name: "Embed", namespace: "embed", silent: !1, debug: !1, verbose: !1, performance: !0, icon: !1, source: !1, url: !1, id: !1, autoplay: "auto", color: "#444444", hd: !0, brandedUI: !1, parameters: !1, onDisplay: function () {}, onPlaceholderDisplay: function () {}, onReset: function () {}, onCreate: function (e) {}, onEmbed: function (e) {
      return e;
    }, metadata: { id: "id", icon: "icon", placeholder: "placeholder", source: "source", url: "url" }, error: { noURL: "No URL specified", method: "The method you called is not defined" }, className: { active: "active", embed: "embed" }, selector: { embed: ".embed", placeholder: ".placeholder", icon: ".icon" }, sources: { youtube: { name: "youtube", type: "video", icon: "video play", domain: "youtube.com", url: "//www.youtube.com/embed/{id}", parameters: function (e) {
          return { autohide: !e.brandedUI, autoplay: e.autoplay, color: e.color || i, hq: e.hd, jsapi: e.api, modestbranding: !e.brandedUI };
        } }, vimeo: { name: "vimeo", type: "video", icon: "video play", domain: "vimeo.com", url: "//player.vimeo.com/video/{id}", parameters: function (e) {
          return { api: e.api, autoplay: e.autoplay, byline: e.brandedUI, color: e.color || i, portrait: e.brandedUI, title: e.brandedUI };
        } } }, templates: { iframe: function (e, t) {
        var n = e;return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      }, placeholder: function (e, t) {
        var n = "";return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n;
      } }, api: !1, onPause: function () {}, onPlay: function () {}, onStop: function () {} };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.modal = function (o) {
    var a,
        r = e(this),
        s = e(t),
        l = e(n),
        c = e("body"),
        u = r.selector || "",
        d = new Date().getTime(),
        f = [],
        m = arguments[0],
        g = "string" == typeof m,
        p = [].slice.call(arguments, 1),
        h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var r,
          v,
          b,
          y,
          x,
          C,
          w,
          S,
          k,
          T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
          A = T.selector,
          R = T.className,
          P = T.namespace,
          E = T.error,
          F = "." + P,
          O = "module-" + P,
          D = e(this),
          q = e(T.context),
          j = D.find(A.close),
          z = this,
          I = D.data(O),
          M = !1;k = { initialize: function () {
          k.verbose("Initializing dimmer", q), k.create.id(), k.create.dimmer(), k.refreshModals(), k.bind.events(), T.observeChanges && k.observeChanges(), k.instantiate();
        }, instantiate: function () {
          k.verbose("Storing instance of modal"), I = k, D.data(O, I);
        }, create: { dimmer: function () {
            var t = { debug: T.debug, variation: !T.centered && "top aligned", dimmerName: "modals" },
                n = e.extend(!0, t, T.dimmerSettings);e.fn.dimmer !== i ? (k.debug("Creating dimmer"), y = q.dimmer(n), T.detachable ? (k.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", D)) : k.set.undetached(), x = y.dimmer("get dimmer")) : k.error(E.dimmer);
          }, id: function () {
            w = (Math.random().toString(16) + "000000000").substr(2, 8), C = "." + w, k.verbose("Creating unique id for element", w);
          } }, destroy: function () {
          k.verbose("Destroying previous modal"), D.removeData(O).off(F), s.off(C), x.off(C), j.off(F), q.dimmer("destroy");
        }, observeChanges: function () {
          "MutationObserver" in t && ((S = new MutationObserver(function (e) {
            k.debug("DOM tree modified, refreshing"), k.refresh();
          })).observe(z, { childList: !0, subtree: !0 }), k.debug("Setting up mutation observer", S));
        }, refresh: function () {
          k.remove.scrolling(), k.cacheSizes(), k.set.screenHeight(), k.set.type();
        }, refreshModals: function () {
          v = D.siblings(A.modal), r = v.add(D);
        }, attachEvents: function (t, n) {
          var i = e(t);n = e.isFunction(k[n]) ? k[n] : k.toggle, i.length > 0 ? (k.debug("Attaching modal events to element", t, n), i.off(F).on("click" + F, n)) : k.error(E.notFound, t);
        }, bind: { events: function () {
            k.verbose("Attaching events"), D.on("click" + F, A.close, k.event.close).on("click" + F, A.approve, k.event.approve).on("click" + F, A.deny, k.event.deny), s.on("resize" + C, k.event.resize);
          } }, get: { id: function () {
            return (Math.random().toString(16) + "000000000").substr(2, 8);
          } }, event: { approve: function () {
            M || !1 === T.onApprove.call(z, e(this)) ? k.verbose("Approve callback returned false cancelling hide") : (M = !0, k.hide(function () {
              M = !1;
            }));
          }, deny: function () {
            M || !1 === T.onDeny.call(z, e(this)) ? k.verbose("Deny callback returned false cancelling hide") : (M = !0, k.hide(function () {
              M = !1;
            }));
          }, close: function () {
            k.hide();
          }, click: function (t) {
            if (T.closable) {
              var i = e(t.target).closest(A.modal).length > 0,
                  o = e.contains(n.documentElement, t.target);!i && o && k.is.active() && (k.debug("Dimmer clicked, hiding all modals"), k.remove.clickaway(), T.allowMultiple ? k.hide() : k.hideAll());
            } else k.verbose("Dimmer clicked but closable setting is disabled");
          }, debounce: function (e, t) {
            clearTimeout(k.timer), k.timer = setTimeout(e, t);
          }, keyboard: function (e) {
            27 == e.which && (T.closable ? (k.debug("Escape key pressed hiding modal"), k.hide()) : k.debug("Escape key pressed, but closable is set to false"), e.preventDefault());
          }, resize: function () {
            y.dimmer("is active") && (k.is.animating() || k.is.active()) && h(k.refresh);
          } }, toggle: function () {
          k.is.active() || k.is.animating() ? k.hide() : k.show();
        }, show: function (t) {
          t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.set.dimmerSettings(), k.showModal(t);
        }, hide: function (t) {
          t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.hideModal(t);
        }, showModal: function (t) {
          t = e.isFunction(t) ? t : function () {}, k.is.animating() || !k.is.active() ? (k.showDimmer(), k.cacheSizes(), k.set.screenHeight(), k.set.type(), k.set.clickaway(), !T.allowMultiple && k.others.active() ? k.hideOthers(k.showModal) : (T.allowMultiple && T.detachable && D.detach().appendTo(x), T.onShow.call(z), T.transition && e.fn.transition !== i && D.transition("is supported") ? (k.debug("Showing modal with css animations"), D.transition({ debug: T.debug, animation: T.transition + " in", queue: T.queue, duration: T.duration, useFailSafe: !0, onComplete: function () {
              T.onVisible.apply(z), T.keyboardShortcuts && k.add.keyboardShortcuts(), k.save.focus(), k.set.active(), T.autofocus && k.set.autofocus(), t();
            } })) : k.error(E.noTransition))) : k.debug("Modal is already visible");
        }, hideModal: function (t, n) {
          t = e.isFunction(t) ? t : function () {}, k.debug("Hiding modal"), !1 !== T.onHide.call(z, e(this)) ? (k.is.animating() || k.is.active()) && (T.transition && e.fn.transition !== i && D.transition("is supported") ? (k.remove.active(), D.transition({ debug: T.debug, animation: T.transition + " out", queue: T.queue, duration: T.duration, useFailSafe: !0, onStart: function () {
              k.others.active() || n || k.hideDimmer(), T.keyboardShortcuts && k.remove.keyboardShortcuts();
            }, onComplete: function () {
              T.onHidden.call(z), k.restore.focus(), t();
            } })) : k.error(E.noTransition)) : k.verbose("Hide callback returned false cancelling hide");
        }, showDimmer: function () {
          y.dimmer("is animating") || !y.dimmer("is active") ? (k.debug("Showing dimmer"), y.dimmer("show")) : k.debug("Dimmer already visible");
        }, hideDimmer: function () {
          y.dimmer("is animating") || y.dimmer("is active") ? y.dimmer("hide", function () {
            k.remove.clickaway(), k.remove.screenHeight();
          }) : k.debug("Dimmer is not visible cannot hide");
        }, hideAll: function (t) {
          var n = r.filter("." + R.active + ", ." + R.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding all visible modals"), k.hideDimmer(), n.modal("hide modal", t));
        }, hideOthers: function (t) {
          var n = v.filter("." + R.active + ", ." + R.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding other modals", v), n.modal("hide modal", t, !0));
        }, others: { active: function () {
            return v.filter("." + R.active).length > 0;
          }, animating: function () {
            return v.filter("." + R.animating).length > 0;
          } }, add: { keyboardShortcuts: function () {
            k.verbose("Adding keyboard shortcuts"), l.on("keyup" + F, k.event.keyboard);
          } }, save: { focus: function () {
            e(n.activeElement).closest(D).length > 0 || (b = e(n.activeElement).blur());
          } }, restore: { focus: function () {
            b && b.length > 0 && b.focus();
          } }, remove: { active: function () {
            D.removeClass(R.active);
          }, clickaway: function () {
            x.off("click" + C);
          }, bodyStyle: function () {
            "" === c.attr("style") && (k.verbose("Removing style attribute"), c.removeAttr("style"));
          }, screenHeight: function () {
            k.debug("Removing page height"), c.css("height", "");
          }, keyboardShortcuts: function () {
            k.verbose("Removing keyboard shortcuts"), l.off("keyup" + F);
          }, scrolling: function () {
            y.removeClass(R.scrolling), D.removeClass(R.scrolling);
          } }, cacheSizes: function () {
          D.addClass(R.loading);var o = D.prop("scrollHeight"),
              a = D.outerHeight();k.cache !== i && 0 === a || (k.cache = { pageHeight: e(n).outerHeight(), height: a + T.offset, scrollHeight: o + T.offset, contextHeight: "body" == T.context ? e(t).height() : y.height() }, k.cache.topOffset = -k.cache.height / 2), D.removeClass(R.loading), k.debug("Caching modal and container sizes", k.cache);
        }, can: { fit: function () {
            var e = k.cache.contextHeight,
                t = k.cache.contextHeight / 2,
                n = k.cache.topOffset,
                i = k.cache.scrollHeight,
                o = k.cache.height,
                a = T.padding;return i > o ? t + n + i + a < e : o + 2 * a < e;
          } }, is: { active: function () {
            return D.hasClass(R.active);
          }, animating: function () {
            return D.transition("is supported") ? D.transition("is animating") : D.is(":visible");
          }, scrolling: function () {
            return y.hasClass(R.scrolling);
          }, modernBrowser: function () {
            return !(t.ActiveXObject || "ActiveXObject" in t);
          } }, set: { autofocus: function () {
            var e = D.find("[tabindex], :input").filter(":visible"),
                t = e.filter("[autofocus]"),
                n = t.length > 0 ? t.first() : e.first();n.length > 0 && n.focus();
          }, clickaway: function () {
            x.on("click" + C, k.event.click);
          }, dimmerSettings: function () {
            if (e.fn.dimmer !== i) {
              var t = { debug: T.debug, dimmerName: "modals", closable: "auto", variation: !T.centered && "top aligned", duration: { show: T.duration, hide: T.duration } },
                  n = e.extend(!0, t, T.dimmerSettings);T.inverted ? (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted", x.addClass(R.inverted)) : x.removeClass(R.inverted), T.blurring ? y.addClass(R.blurring) : y.removeClass(R.blurring), q.dimmer("setting", n);
            } else k.error(E.dimmer);
          }, screenHeight: function () {
            k.can.fit() ? c.css("height", "") : (k.debug("Modal is taller than page content, resizing page height"), c.css("height", k.cache.height + 2 * T.padding));
          }, active: function () {
            D.addClass(R.active);
          }, scrolling: function () {
            y.addClass(R.scrolling), D.addClass(R.scrolling);
          }, type: function () {
            k.can.fit() ? (k.verbose("Modal fits on screen"), k.others.active() || k.others.animating() || k.remove.scrolling()) : (k.verbose("Modal cannot fit on screen setting to scrolling"), k.set.scrolling());
          }, undetached: function () {
            y.addClass(R.undetached);
          } }, setting: function (t, n) {
          if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, T, t);else {
            if (n === i) return T[t];e.isPlainObject(T[t]) ? e.extend(!0, T[t], n) : T[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (n === i) return k[t];k[t] = n;
          }
        }, debug: function () {
          !T.silent && T.debug && (T.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), k.debug.apply(console, arguments)));
        }, verbose: function () {
          !T.silent && T.verbose && T.debug && (T.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), k.verbose.apply(console, arguments)));
        }, error: function () {
          T.silent || (k.error = Function.prototype.bind.call(console.error, console, T.name + ":"), k.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;T.performance && (n = (t = new Date().getTime()) - (d || t), d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 500);
          }, display: function () {
            var t = T.name + ":",
                n = 0;d = !1, clearTimeout(k.performance.timer), e.each(f, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), f = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = I;return n = n || p, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, g ? (I === i && k.initialize(), k.invoke(m)) : (I !== i && I.invoke("destroy"), k.initialize());
    }), a !== i ? a : this;
  }, e.fn.modal.settings = { name: "Modal", namespace: "modal", silent: !1, debug: !1, verbose: !1, performance: !0, observeChanges: !1, allowMultiple: !1, detachable: !0, closable: !0, autofocus: !0, inverted: !1, blurring: !1, centered: !0, dimmerSettings: { closable: !1, useCSS: !0 }, keyboardShortcuts: !0, context: "body", queue: !1, duration: 500, offset: 0, transition: "scale", padding: 50, onShow: function () {}, onVisible: function () {}, onHide: function () {
      return !0;
    }, onHidden: function () {}, onApprove: function () {
      return !0;
    }, onDeny: function () {
      return !0;
    }, selector: { close: "> .close", approve: ".actions .positive, .actions .approve, .actions .ok", deny: ".actions .negative, .actions .deny, .actions .cancel", modal: ".ui.modal" }, error: { dimmer: "UI Dimmer, a required component is not included in this page", method: "The method you called is not defined.", notFound: "The element you specified could not be found" }, className: { active: "active", animating: "animating", blurring: "blurring", inverted: "inverted", loading: "loading", scrolling: "scrolling", undetached: "undetached" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.nag = function (n) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
          m = (f.className, f.selector),
          g = f.error,
          p = f.namespace,
          h = "." + p,
          v = p + "-module",
          b = e(this),
          y = (b.find(m.close), f.context ? e(f.context) : e("body")),
          x = this,
          C = b.data(v);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;a = { initialize: function () {
          a.verbose("Initializing element"), b.on("click" + h, m.close, a.dismiss).data(v, a), f.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), f.displayTime > 0 && setTimeout(a.hide, f.displayTime), a.show();
        }, destroy: function () {
          a.verbose("Destroying instance"), b.removeData(v).off(h);
        }, show: function () {
          a.should.show() && !b.is(":visible") && (a.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing));
        }, hide: function () {
          a.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing);
        }, onHide: function () {
          a.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide();
        }, dismiss: function (e) {
          f.storageMethod && a.storage.set(f.key, f.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault();
        }, should: { show: function () {
            return f.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(f.key) != f.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(f.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(f.key)), !1);
          } }, get: { storageOptions: function () {
            var e = {};return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e;
          } }, clear: function () {
          a.storage.remove(f.key);
        }, storage: { set: function (n, o) {
            var r = a.get.storageOptions();if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);else if ("sessionstorage" == f.storageMethod && t.sessionStorage !== i) t.sessionStorage.setItem(n, o), a.debug("Value stored using session storage", n, o);else {
              if (e.cookie === i) return void a.error(g.noCookieStorage);e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r);
            }
          }, get: function (n, o) {
            var r;return "localstorage" == f.storageMethod && t.localStorage !== i ? r = t.localStorage.getItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? r = t.sessionStorage.getItem(n) : e.cookie !== i ? r = e.cookie(n) : a.error(g.noCookieStorage), "undefined" != r && "null" != r && r !== i && null !== r || (r = i), r;
          }, remove: function (n) {
            var o = a.get.storageOptions();"localstorage" == f.storageMethod && t.localStorage !== i ? t.localStorage.removeItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? t.sessionStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage);
          } }, setting: function (t, n) {
          if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, a, t);else {
            if (n === i) return a[t];a[t] = n;
          }
        }, debug: function () {
          !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
        }, verbose: function () {
          !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
        }, error: function () {
          f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: x, "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
          }, display: function () {
            var t = f.name + ":",
                n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, r) {
          var s,
              l,
              c,
              u = C;return n = n || d, r = x || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
            var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);u = u[o];
            }
          })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (C === i && a.initialize(), a.invoke(c)) : (C !== i && C.invoke("destroy"), a.initialize());
    }), o !== i ? o : this;
  }, e.fn.nag.settings = { name: "Nag", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "Nag", persist: !1, displayTime: 0, animation: { show: "slide", hide: "slide" }, context: !1, detachable: !1, expires: 30, domain: !1, path: "/", storageMethod: "cookie", key: "nag", value: "dismiss", error: { noCookieStorage: "$.cookie is not included. A storage solution is required.", noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state", method: "The method you called is not defined." }, className: { bottom: "bottom", fixed: "fixed" }, selector: { close: ".close.icon" }, speed: 500, easing: "easeOutQuad", onHide: function () {} }, e.extend(e.easing, { easeOutQuad: function (e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.popup = function (o) {
    var a,
        r = e(this),
        s = e(n),
        l = e(t),
        c = e("body"),
        u = r.selector || "",
        d = new Date().getTime(),
        f = [],
        m = arguments[0],
        g = "string" == typeof m,
        p = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          h,
          v,
          b,
          y,
          x,
          C = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
          w = C.selector,
          S = C.className,
          k = C.error,
          T = C.metadata,
          A = C.namespace,
          R = "." + C.namespace,
          P = "module-" + A,
          E = e(this),
          F = e(C.context),
          O = e(C.scrollContext),
          D = e(C.boundary),
          q = C.target ? e(C.target) : E,
          j = 0,
          z = !1,
          I = !1,
          M = this,
          L = E.data(P);x = { initialize: function () {
          x.debug("Initializing", E), x.createID(), x.bind.events(), !x.exists() && C.preserve && x.create(), C.observeChanges && x.observeChanges(), x.instantiate();
        }, instantiate: function () {
          x.verbose("Storing instance", x), L = x, E.data(P, L);
        }, observeChanges: function () {
          "MutationObserver" in t && ((v = new MutationObserver(x.event.documentChanged)).observe(n, { childList: !0, subtree: !0 }), x.debug("Setting up mutation observer", v));
        }, refresh: function () {
          C.popup ? r = e(C.popup).eq(0) : C.inline && (r = q.nextAll(w.popup).eq(0), C.popup = r), C.popup ? (r.addClass(S.loading), h = x.get.offsetParent(), r.removeClass(S.loading), C.movePopup && x.has.popup() && x.get.offsetParent(r)[0] !== h[0] && (x.debug("Moving popup to the same offset parent as target"), r.detach().appendTo(h))) : h = C.inline ? x.get.offsetParent(q) : x.has.popup() ? x.get.offsetParent(r) : c, h.is("html") && h[0] !== c[0] && (x.debug("Setting page as offset parent"), h = c), x.get.variation() && x.set.variation();
        }, reposition: function () {
          x.refresh(), x.set.position();
        }, destroy: function () {
          x.debug("Destroying previous module"), v && v.disconnect(), r && !C.preserve && x.removePopup(), clearTimeout(x.hideTimer), clearTimeout(x.showTimer), x.unbind.close(), x.unbind.events(), E.removeData(P);
        }, event: { start: function (t) {
            var n = e.isPlainObject(C.delay) ? C.delay.show : C.delay;clearTimeout(x.hideTimer), I || (x.showTimer = setTimeout(x.show, n));
          }, end: function () {
            var t = e.isPlainObject(C.delay) ? C.delay.hide : C.delay;clearTimeout(x.showTimer), x.hideTimer = setTimeout(x.hide, t);
          }, touchstart: function (e) {
            I = !0, x.show();
          }, resize: function () {
            x.is.visible() && x.set.position();
          }, documentChanged: function (t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == M || e(t).find(M).length > 0) && (x.debug("Element removed from DOM, tearing down events"), x.destroy());
              });
            });
          }, hideGracefully: function (t) {
            var i = e(t.target),
                o = e.contains(n.documentElement, t.target),
                a = i.closest(w.popup).length > 0;t && !a && o ? (x.debug("Click occurred outside popup hiding popup"), x.hide()) : x.debug("Click was inside popup, keeping popup open");
          } }, create: function () {
          var t = x.get.html(),
              n = x.get.title(),
              i = x.get.content();t || i || n ? (x.debug("Creating pop-up html"), t || (t = C.templates.popup({ title: n, content: i })), r = e("<div/>").addClass(S.popup).data(T.activator, E).html(t), C.inline ? (x.verbose("Inserting popup element inline", r), r.insertAfter(E)) : (x.verbose("Appending popup element to body", r), r.appendTo(F)), x.refresh(), x.set.variation(), C.hoverable && x.bind.popup(), C.onCreate.call(r, M)) : 0 !== q.next(w.popup).length ? (x.verbose("Pre-existing popup found"), C.inline = !0, C.popup = q.next(w.popup).data(T.activator, E), x.refresh(), C.hoverable && x.bind.popup()) : C.popup ? (e(C.popup).data(T.activator, E), x.verbose("Used popup specified in settings"), x.refresh(), C.hoverable && x.bind.popup()) : x.debug("No content specified skipping display", M);
        }, createID: function () {
          y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, x.verbose("Creating unique id for element", y);
        }, toggle: function () {
          x.debug("Toggling pop-up"), x.is.hidden() ? (x.debug("Popup is hidden, showing pop-up"), x.unbind.close(), x.show()) : (x.debug("Popup is visible, hiding pop-up"), x.hide());
        }, show: function (e) {
          if (e = e || function () {}, x.debug("Showing pop-up", C.transition), x.is.hidden() && (!x.is.active() || !x.is.dropdown())) {
            if (x.exists() || x.create(), !1 === C.onShow.call(r, M)) return void x.debug("onShow callback returned false, cancelling popup animation");C.preserve || C.popup || x.refresh(), r && x.set.position() && (x.save.conditions(), C.exclusive && x.hideAll(), x.animate.show(e));
          }
        }, hide: function (e) {
          if (e = e || function () {}, x.is.visible() || x.is.animating()) {
            if (!1 === C.onHide.call(r, M)) return void x.debug("onHide callback returned false, cancelling popup animation");x.remove.visible(), x.unbind.close(), x.restore.conditions(), x.animate.hide(e);
          }
        }, hideAll: function () {
          e(w.popup).filter("." + S.popupVisible).each(function () {
            e(this).data(T.activator).popup("hide");
          });
        }, exists: function () {
          return !!r && (C.inline || C.popup ? x.has.popup() : r.closest(F).length >= 1);
        }, removePopup: function () {
          x.has.popup() && !C.popup && (x.debug("Removing popup", r), r.remove(), r = i, C.onRemove.call(r, M));
        }, save: { conditions: function () {
            x.cache = { title: E.attr("title") }, x.cache.title && E.removeAttr("title"), x.verbose("Saving original attributes", x.cache.title);
          } }, restore: { conditions: function () {
            return x.cache && x.cache.title && (E.attr("title", x.cache.title), x.verbose("Restoring original attributes", x.cache.title)), !0;
          } }, supports: { svg: function () {
            return "undefined" == typeof SVGGraphicsElement;
          } }, animate: { show: function (t) {
            t = e.isFunction(t) ? t : function () {}, C.transition && e.fn.transition !== i && E.transition("is supported") ? (x.set.visible(), r.transition({ animation: C.transition + " in", queue: !1, debug: C.debug, verbose: C.verbose, duration: C.duration, onComplete: function () {
                x.bind.close(), t.call(r, M), C.onVisible.call(r, M);
              } })) : x.error(k.noTransition);
          }, hide: function (t) {
            t = e.isFunction(t) ? t : function () {}, x.debug("Hiding pop-up"), !1 !== C.onHide.call(r, M) ? C.transition && e.fn.transition !== i && E.transition("is supported") ? r.transition({ animation: C.transition + " out", queue: !1, duration: C.duration, debug: C.debug, verbose: C.verbose, onComplete: function () {
                x.reset(), t.call(r, M), C.onHidden.call(r, M);
              } }) : x.error(k.noTransition) : x.debug("onHide callback returned false, cancelling popup animation");
          } }, change: { content: function (e) {
            r.html(e);
          } }, get: { html: function () {
            return E.removeData(T.html), E.data(T.html) || C.html;
          }, title: function () {
            return E.removeData(T.title), E.data(T.title) || C.title;
          }, content: function () {
            return E.removeData(T.content), E.data(T.content) || C.content || E.attr("title");
          }, variation: function () {
            return E.removeData(T.variation), E.data(T.variation) || C.variation;
          }, popup: function () {
            return r;
          }, popupOffset: function () {
            return r.offset();
          }, calculations: function () {
            var e,
                n = x.get.offsetParent(r),
                i = q[0],
                o = D[0] == t,
                a = C.inline || C.popup && C.movePopup ? q.position() : q.offset(),
                s = o ? { top: 0, left: 0 } : D.offset(),
                c = {},
                u = o ? { top: l.scrollTop(), left: l.scrollLeft() } : { top: 0, left: 0 };if (c = { target: { element: q[0], width: q.outerWidth(), height: q.outerHeight(), top: a.top, left: a.left, margin: {} }, popup: { width: r.outerWidth(), height: r.outerHeight() }, parent: { width: h.outerWidth(), height: h.outerHeight() }, screen: { top: s.top, left: s.left, scroll: { top: u.top, left: u.left }, width: D.width(), height: D.height() } }, n.get(0) !== h.get(0)) {
              var d = n.offset();c.target.top -= d.top, c.target.left -= d.left, c.parent.width = n.outerWidth(), c.parent.height = n.outerHeight();
            }return C.setFluidWidth && x.is.fluid() && (c.container = { width: r.parent().outerWidth() }, c.popup.width = c.container.width), c.target.margin.top = C.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0, c.target.margin.left = C.inline ? x.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0, e = c.screen, c.boundary = { top: e.top + e.scroll.top, bottom: e.top + e.scroll.top + e.height, left: e.left + e.scroll.left, right: e.left + e.scroll.left + e.width }, c;
          }, id: function () {
            return y;
          }, startEvent: function () {
            return "hover" == C.on ? "mouseenter" : "focus" == C.on && "focus";
          }, scrollEvent: function () {
            return "scroll";
          }, endEvent: function () {
            return "hover" == C.on ? "mouseleave" : "focus" == C.on && "blur";
          }, distanceFromBoundary: function (e, t) {
            var n,
                i,
                o = {};return n = (t = t || x.get.calculations()).popup, i = t.boundary, e && (o = { top: e.top - i.top, left: e.left - i.left, right: i.right - (e.left + n.width), bottom: i.bottom - (e.top + n.height) }, x.verbose("Distance from boundaries determined", e, o)), o;
          }, offsetParent: function (t) {
            var n = (t !== i ? t[0] : q[0]).parentNode,
                o = e(n);if (n) for (var a = "none" === o.css("transform"), r = "static" === o.css("position"), s = o.is("body"); n && !s && r && a;) n = n.parentNode, a = "none" === (o = e(n)).css("transform"), r = "static" === o.css("position"), s = o.is("body");return o && o.length > 0 ? o : e();
          }, positions: function () {
            return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 };
          }, nextPosition: function (e) {
            var t = e.split(" "),
                n = t[0],
                i = t[1],
                o = "top" == n || "bottom" == n,
                a = !1,
                r = !1,
                s = !1;return z || (x.verbose("All available positions available"), z = x.get.positions()), x.debug("Recording last position tried", e), z[e] = !0, "opposite" === C.prefer && (s = (s = [{ top: "bottom", bottom: "top", left: "right", right: "left" }[n], i]).join(" "), a = !0 === z[s], x.debug("Trying opposite strategy", s)), "adjacent" === C.prefer && o && (s = (s = [n, { left: "center", center: "right", right: "left" }[i]]).join(" "), r = !0 === z[s], x.debug("Trying adjacent strategy", s)), (r || a) && (x.debug("Using backup position", s), s = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" }[e]), s;
          } }, set: { position: function (e, t) {
            if (0 !== q.length && 0 !== r.length) {
              var n, o, a, s, l, c, u, d;if (t = t || x.get.calculations(), e = e || E.data(T.position) || C.position, n = E.data(T.offset) || C.offset, o = C.distanceAway, a = t.target, s = t.popup, l = t.parent, x.should.centerArrow(t) && (x.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += a.width / 2, n -= C.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= a.width / 2, n += C.arrowPixelsFromEdge)), 0 === a.width && 0 === a.height && !x.is.svg(a.element)) return x.debug("Popup target is hidden, no action taken"), !1;switch (C.inline && (x.debug("Adding margin to calculation", a.margin), "left center" == e || "right center" == e ? (n += a.margin.top, o += -a.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += a.margin.left, o -= a.margin.top) : (n += a.margin.left, o += a.margin.top)), x.debug("Determining popup position from calculations", e, t), x.is.rtl() && (e = e.replace(/left|right/g, function (e) {
                return "left" == e ? "right" : "left";
              }), x.debug("RTL: Popup position updated", e)), j == C.maxSearchDepth && "string" == typeof C.lastResort && (e = C.lastResort), e) {case "top left":
                  c = { top: "auto", bottom: l.height - a.top + o, left: a.left + n, right: "auto" };break;case "top center":
                  c = { bottom: l.height - a.top + o, left: a.left + a.width / 2 - s.width / 2 + n, top: "auto", right: "auto" };break;case "top right":
                  c = { bottom: l.height - a.top + o, right: l.width - a.left - a.width - n, top: "auto", left: "auto" };break;case "left center":
                  c = { top: a.top + a.height / 2 - s.height / 2 + n, right: l.width - a.left + o, left: "auto", bottom: "auto" };break;case "right center":
                  c = { top: a.top + a.height / 2 - s.height / 2 + n, left: a.left + a.width + o, bottom: "auto", right: "auto" };break;case "bottom left":
                  c = { top: a.top + a.height + o, left: a.left + n, bottom: "auto", right: "auto" };break;case "bottom center":
                  c = { top: a.top + a.height + o, left: a.left + a.width / 2 - s.width / 2 + n, bottom: "auto", right: "auto" };break;case "bottom right":
                  c = { top: a.top + a.height + o, right: l.width - a.left - a.width - n, left: "auto", bottom: "auto" };}if (c === i && x.error(k.invalidPosition, e), x.debug("Calculated popup positioning values", c), r.css(c).removeClass(S.position).addClass(e).addClass(S.loading), u = x.get.popupOffset(), d = x.get.distanceFromBoundary(u, t), x.is.offstage(d, e)) {
                if (x.debug("Position is outside viewport", e), j < C.maxSearchDepth) return j++, e = x.get.nextPosition(e), x.debug("Trying new position", e), !!r && x.set.position(e, t);if (!C.lastResort) return x.debug("Popup could not find a position to display", r), x.error(k.cannotPlace, M), x.remove.attempts(), x.remove.loading(), x.reset(), C.onUnplaceable.call(r, M), !1;x.debug("No position found, showing with last position");
              }return x.debug("Position is on stage", e), x.remove.attempts(), x.remove.loading(), C.setFluidWidth && x.is.fluid() && x.set.fluidWidth(t), !0;
            }x.error(k.notFound);
          }, fluidWidth: function (e) {
            e = e || x.get.calculations(), x.debug("Automatically setting element width to parent width", e.parent.width), r.css("width", e.container.width);
          }, variation: function (e) {
            (e = e || x.get.variation()) && x.has.popup() && (x.verbose("Adding variation to popup", e), r.addClass(e));
          }, visible: function () {
            E.addClass(S.visible);
          } }, remove: { loading: function () {
            r.removeClass(S.loading);
          }, variation: function (e) {
            (e = e || x.get.variation()) && (x.verbose("Removing variation", e), r.removeClass(e));
          }, visible: function () {
            E.removeClass(S.visible);
          }, attempts: function () {
            x.verbose("Resetting all searched positions"), j = 0, z = !1;
          } }, bind: { events: function () {
            x.debug("Binding popup events to module"), "click" == C.on && E.on("click" + R, x.toggle), "hover" == C.on && E.on("touchstart" + R, x.event.touchstart), x.get.startEvent() && E.on(x.get.startEvent() + R, x.event.start).on(x.get.endEvent() + R, x.event.end), C.target && x.debug("Target set to element", q), l.on("resize" + b, x.event.resize);
          }, popup: function () {
            x.verbose("Allowing hover events on popup to prevent closing"), r && x.has.popup() && r.on("mouseenter" + R, x.event.start).on("mouseleave" + R, x.event.end);
          }, close: function () {
            (!0 === C.hideOnScroll || "auto" == C.hideOnScroll && "click" != C.on) && x.bind.closeOnScroll(), "hover" == C.on && I && x.bind.touchClose(), "click" == C.on && C.closable && x.bind.clickaway();
          }, closeOnScroll: function () {
            x.verbose("Binding scroll close event to document"), O.one(x.get.scrollEvent() + b, x.event.hideGracefully);
          }, touchClose: function () {
            x.verbose("Binding popup touchclose event to document"), s.on("touchstart" + b, function (e) {
              x.verbose("Touched away from popup"), x.event.hideGracefully.call(M, e);
            });
          }, clickaway: function () {
            x.verbose("Binding popup close event to document"), s.on("click" + b, function (e) {
              x.verbose("Clicked away from popup"), x.event.hideGracefully.call(M, e);
            });
          } }, unbind: { events: function () {
            l.off(b), E.off(R);
          }, close: function () {
            s.off(b), O.off(b);
          } }, has: { popup: function () {
            return r && r.length > 0;
          } }, should: { centerArrow: function (e) {
            return !x.is.basic() && e.target.width <= 2 * C.arrowPixelsFromEdge;
          } }, is: { offstage: function (t, n) {
            var i = [];return e.each(t, function (e, t) {
              t < -C.jitter && (x.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e));
            }), i.length > 0;
          }, svg: function (e) {
            return x.supports.svg() && e instanceof SVGGraphicsElement;
          }, basic: function () {
            return E.hasClass(S.basic);
          }, active: function () {
            return E.hasClass(S.active);
          }, animating: function () {
            return r !== i && r.hasClass(S.animating);
          }, fluid: function () {
            return r !== i && r.hasClass(S.fluid);
          }, visible: function () {
            return r !== i && r.hasClass(S.popupVisible);
          }, dropdown: function () {
            return E.hasClass(S.dropdown);
          }, hidden: function () {
            return !x.is.visible();
          }, rtl: function () {
            return "rtl" == E.css("direction");
          } }, reset: function () {
          x.remove.visible(), C.preserve ? e.fn.transition !== i && r.transition("remove transition") : x.removePopup();
        }, setting: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, C, t);else {
            if (n === i) return C[t];C[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (n === i) return x[t];x[t] = n;
          }
        }, debug: function () {
          !C.silent && C.debug && (C.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), x.debug.apply(console, arguments)));
        }, verbose: function () {
          !C.silent && C.verbose && C.debug && (C.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), x.verbose.apply(console, arguments)));
        }, error: function () {
          C.silent || (x.error = Function.prototype.bind.call(console.error, console, C.name + ":"), x.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;C.performance && (n = (t = new Date().getTime()) - (d || t), d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: M, "Execution Time": n })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500);
          }, display: function () {
            var t = C.name + ":",
                n = 0;d = !1, clearTimeout(x.performance.timer), e.each(f, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), f = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = L;return n = n || p, o = M || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, g ? (L === i && x.initialize(), x.invoke(m)) : (L !== i && L.invoke("destroy"), x.initialize());
    }), a !== i ? a : this;
  }, e.fn.popup.settings = { name: "Popup", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "popup", observeChanges: !0, onCreate: function () {}, onRemove: function () {}, onShow: function () {}, onVisible: function () {}, onHide: function () {}, onUnplaceable: function () {}, onHidden: function () {}, on: "hover", boundary: t, addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", scrollContext: t, prefer: "opposite", lastResort: !1, arrowPixelsFromEdge: 20, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", basic: "basic", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible", popupVisible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function (e) {
        var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };return (/[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
            return t[e];
          }) : e
        );
      }, popup: function (t) {
        var n = "",
            o = e.fn.popup.settings.templates.escape;return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  void 0 !== (t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()) && t.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());e.fn.progress = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
          m = f.className,
          g = f.metadata,
          p = f.namespace,
          h = f.selector,
          v = f.error,
          b = "." + p,
          y = "module-" + p,
          x = e(this),
          C = e(this).find(h.bar),
          w = e(this).find(h.progress),
          S = e(this).find(h.label),
          k = this,
          T = x.data(y),
          A = !1;a = { initialize: function () {
          a.debug("Initializing progress bar", f), a.set.duration(), a.set.transitionEvent(), a.read.metadata(), a.read.settings(), a.instantiate();
        }, instantiate: function () {
          a.verbose("Storing instance of progress", a), T = a, x.data(y, a);
        }, destroy: function () {
          a.verbose("Destroying previous progress for", x), clearInterval(T.interval), a.remove.state(), x.removeData(y), T = i;
        }, reset: function () {
          a.remove.nextValue(), a.update.progress(0);
        }, complete: function () {
          (a.percent === i || a.percent < 100) && (a.remove.progressPoll(), a.set.percent(100));
        }, read: { metadata: function () {
            var e = { percent: x.data(g.percent), total: x.data(g.total), value: x.data(g.value) };e.percent && (a.debug("Current percent value set from metadata", e.percent), a.set.percent(e.percent)), e.total && (a.debug("Total value set from metadata", e.total), a.set.total(e.total)), e.value && (a.debug("Current value set from metadata", e.value), a.set.value(e.value), a.set.progress(e.value));
          }, settings: function () {
            !1 !== f.total && (a.debug("Current total set in settings", f.total), a.set.total(f.total)), !1 !== f.value && (a.debug("Current value set in settings", f.value), a.set.value(f.value), a.set.progress(a.value)), !1 !== f.percent && (a.debug("Current percent set in settings", f.percent), a.set.percent(f.percent));
          } }, bind: { transitionEnd: function (e) {
            var t = a.get.transitionEnd();C.one(t + b, function (t) {
              clearTimeout(a.failSafeTimer), e.call(this, t);
            }), a.failSafeTimer = setTimeout(function () {
              C.triggerHandler(t);
            }, f.duration + f.failSafeDelay), a.verbose("Adding fail safe timer", a.timer);
          } }, increment: function (e) {
          var t, n;a.has.total() ? n = (t = a.get.value()) + (e = e || 1) : (n = (t = a.get.percent()) + (e = e || a.get.randomValue()), 100, a.debug("Incrementing percentage by", t, n)), n = a.get.normalizedValue(n), a.set.progress(n);
        }, decrement: function (e) {
          var t, n;a.get.total() ? (n = (t = a.get.value()) - (e = e || 1), a.debug("Decrementing value by", e, t)) : (n = (t = a.get.percent()) - (e = e || a.get.randomValue()), a.debug("Decrementing percentage by", e, t)), n = a.get.normalizedValue(n), a.set.progress(n);
        }, has: { progressPoll: function () {
            return a.progressPoll;
          }, total: function () {
            return !1 !== a.get.total();
          } }, get: { text: function (e) {
            var t = a.value || 0,
                n = a.total || 0,
                i = A ? a.get.displayPercent() : a.percent || 0,
                o = a.total > 0 ? n - t : 100 - i;return e = (e = e || "").replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), a.verbose("Adding variables to progress bar text", e), e;
          }, normalizedValue: function (e) {
            if (e < 0) return a.debug("Value cannot decrement below 0"), 0;if (a.has.total()) {
              if (e > a.total) return a.debug("Value cannot increment above total", a.total), a.total;
            } else if (e > 100) return a.debug("Value cannot increment above 100 percent"), 100;return e;
          }, updateInterval: function () {
            return "auto" == f.updateInterval ? f.duration : f.updateInterval;
          }, randomValue: function () {
            return a.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min);
          }, numericValue: function (e) {
            return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e;
          }, transitionEnd: function () {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) if (t.style[e] !== i) return o[e];
          }, displayPercent: function () {
            var e = C.width(),
                t = x.width(),
                n = e > parseInt(C.css("min-width"), 10) ? e / t * 100 : a.percent;return f.precision > 0 ? Math.round(n * (10 * f.precision)) / (10 * f.precision) : Math.round(n);
          }, percent: function () {
            return a.percent || 0;
          }, value: function () {
            return a.nextValue || a.value || 0;
          }, total: function () {
            return a.total || !1;
          } }, create: { progressPoll: function () {
            a.progressPoll = setTimeout(function () {
              a.update.toNextValue(), a.remove.progressPoll();
            }, a.get.updateInterval());
          } }, is: { complete: function () {
            return a.is.success() || a.is.warning() || a.is.error();
          }, success: function () {
            return x.hasClass(m.success);
          }, warning: function () {
            return x.hasClass(m.warning);
          }, error: function () {
            return x.hasClass(m.error);
          }, active: function () {
            return x.hasClass(m.active);
          }, visible: function () {
            return x.is(":visible");
          } }, remove: { progressPoll: function () {
            a.verbose("Removing progress poll timer"), a.progressPoll && (clearTimeout(a.progressPoll), delete a.progressPoll);
          }, nextValue: function () {
            a.verbose("Removing progress value stored for next update"), delete a.nextValue;
          }, state: function () {
            a.verbose("Removing stored state"), delete a.total, delete a.percent, delete a.value;
          }, active: function () {
            a.verbose("Removing active state"), x.removeClass(m.active);
          }, success: function () {
            a.verbose("Removing success state"), x.removeClass(m.success);
          }, warning: function () {
            a.verbose("Removing warning state"), x.removeClass(m.warning);
          }, error: function () {
            a.verbose("Removing error state"), x.removeClass(m.error);
          } }, set: { barWidth: function (e) {
            e > 100 ? a.error(v.tooHigh, e) : e < 0 ? a.error(v.tooLow, e) : (C.css("width", e + "%"), x.attr("data-percent", parseInt(e, 10)));
          }, duration: function (e) {
            e = "number" == typeof (e = e || f.duration) ? e + "ms" : e, a.verbose("Setting progress bar transition duration", e), C.css({ "transition-duration": e });
          }, percent: function (e) {
            e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e), a.percent = e, a.has.total() || (a.value = f.precision > 0 ? Math.round(e / 100 * a.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * a.total * 10) / 10, f.limitValues && (a.value = a.value > 100 ? 100 : a.value < 0 ? 0 : a.value)), a.set.barWidth(e), a.set.labelInterval(), a.set.labels(), f.onChange.call(k, e, a.value, a.total);
          }, labelInterval: function () {
            clearInterval(a.interval), a.bind.transitionEnd(function () {
              a.verbose("Bar finished animating, removing continuous label updates"), clearInterval(a.interval), A = !1, a.set.labels();
            }), A = !0, a.interval = setInterval(function () {
              e.contains(n.documentElement, k) || (clearInterval(a.interval), A = !1), a.set.labels();
            }, f.framerate);
          }, labels: function () {
            a.verbose("Setting both bar progress and outer label text"), a.set.barLabel(), a.set.state();
          }, label: function (e) {
            (e = e || "") && (e = a.get.text(e), a.verbose("Setting label to text", e), S.text(e));
          }, state: function (e) {
            100 === (e = e !== i ? e : a.percent) ? f.autoSuccess && !(a.is.warning() || a.is.error() || a.is.success()) ? (a.set.success(), a.debug("Automatically triggering success at 100%")) : (a.verbose("Reached 100% removing active state"), a.remove.active(), a.remove.progressPoll()) : e > 0 ? (a.verbose("Adjusting active progress bar label", e), a.set.active()) : (a.remove.active(), a.set.label(f.text.active));
          }, barLabel: function (e) {
            e !== i ? w.text(a.get.text(e)) : "ratio" == f.label && a.total ? (a.verbose("Adding ratio to bar label"), w.text(a.get.text(f.text.ratio))) : "percent" == f.label && (a.verbose("Adding percentage to bar label"), w.text(a.get.text(f.text.percent)));
          }, active: function (e) {
            e = e || f.text.active, a.debug("Setting active state"), f.showActivity && !a.is.active() && x.addClass(m.active), a.remove.warning(), a.remove.error(), a.remove.success(), (e = f.onLabelUpdate("active", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onActive.call(k, a.value, a.total);
            });
          }, success: function (e) {
            e = e || f.text.success || f.text.active, a.debug("Setting success state"), x.addClass(m.success), a.remove.active(), a.remove.warning(), a.remove.error(), a.complete(), f.text.success ? (e = f.onLabelUpdate("success", e, a.value, a.total), a.set.label(e)) : (e = f.onLabelUpdate("active", e, a.value, a.total), a.set.label(e)), a.bind.transitionEnd(function () {
              f.onSuccess.call(k, a.total);
            });
          }, warning: function (e) {
            e = e || f.text.warning, a.debug("Setting warning state"), x.addClass(m.warning), a.remove.active(), a.remove.success(), a.remove.error(), a.complete(), (e = f.onLabelUpdate("warning", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onWarning.call(k, a.value, a.total);
            });
          }, error: function (e) {
            e = e || f.text.error, a.debug("Setting error state"), x.addClass(m.error), a.remove.active(), a.remove.success(), a.remove.warning(), a.complete(), (e = f.onLabelUpdate("error", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onError.call(k, a.value, a.total);
            });
          }, transitionEvent: function () {
            a.get.transitionEnd();
          }, total: function (e) {
            a.total = e;
          }, value: function (e) {
            a.value = e;
          }, progress: function (e) {
            a.has.progressPoll() ? (a.debug("Updated within interval, setting next update to use new value", e), a.set.nextValue(e)) : (a.debug("First update in progress update interval, immediately updating", e), a.update.progress(e), a.create.progressPoll());
          }, nextValue: function (e) {
            a.nextValue = e;
          } }, update: { toNextValue: function () {
            var e = a.nextValue;e && (a.debug("Update interval complete using last updated value", e), a.update.progress(e), a.remove.nextValue());
          }, progress: function (e) {
            var t;!1 === (e = a.get.numericValue(e)) && a.error(v.nonNumeric, e), e = a.get.normalizedValue(e), a.has.total() ? (a.set.value(e), t = e / a.total * 100, a.debug("Calculating percent complete from total", t), a.set.percent(t)) : (t = e, a.debug("Setting value to exact percentage value", t), a.set.percent(t));
          } }, setting: function (t, n) {
          if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, a, t);else {
            if (n === i) return a[t];a[t] = n;
          }
        }, debug: function () {
          !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
        }, verbose: function () {
          !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
        }, error: function () {
          f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
          }, display: function () {
            var t = f.name + ":",
                n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, r) {
          var s,
              l,
              c,
              u = T;return n = n || d, r = k || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
            var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(v.method, t), !1);u = u[o];
            }
          })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (T === i && a.initialize(), a.invoke(c)) : (T !== i && T.invoke("destroy"), a.initialize());
    }), o !== i ? o : this;
  }, e.fn.progress.settings = { name: "Progress", namespace: "progress", silent: !1, debug: !1, verbose: !1, performance: !0, random: { min: 2, max: 5 }, duration: 300, updateInterval: "auto", autoSuccess: !0, showActivity: !0, limitValues: !0, label: "percent", precision: 0, framerate: 1e3 / 30, percent: !1, total: !1, value: !1, failSafeDelay: 100, onLabelUpdate: function (e, t, n, i) {
      return t;
    }, onChange: function (e, t, n) {}, onSuccess: function (e) {}, onActive: function (e, t) {}, onError: function (e, t) {}, onWarning: function (e, t) {}, error: { method: "The method you called is not defined.", nonNumeric: "Progress value is non numeric", tooHigh: "Value specified is above 100%", tooLow: "Value specified is below 0%" }, regExp: { variable: /\{\$*[A-z0-9]+\}/g }, metadata: { percent: "percent", total: "total", value: "value" }, selector: { bar: "> .bar", label: "> .label", progress: ".bar > .progress" }, text: { active: !1, error: !1, success: !1, warning: !1, percent: "{percent}%", ratio: "{value} of {total}" }, className: { active: "active", error: "error", success: "success", warning: "warning" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.rating = function (t) {
    var n,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var d,
          f,
          m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
          g = m.namespace,
          p = m.className,
          h = m.metadata,
          v = m.selector,
          b = (m.error, "." + g),
          y = "module-" + g,
          x = this,
          C = e(this).data(y),
          w = e(this),
          S = w.find(v.icon);f = { initialize: function () {
          f.verbose("Initializing rating module", m), 0 === S.length && f.setup.layout(), m.interactive ? f.enable() : f.disable(), f.set.initialLoad(), f.set.rating(f.get.initialRating()), f.remove.initialLoad(), f.instantiate();
        }, instantiate: function () {
          f.verbose("Instantiating module", m), C = f, w.data(y, f);
        }, destroy: function () {
          f.verbose("Destroying previous instance", C), f.remove.events(), w.removeData(y);
        }, refresh: function () {
          S = w.find(v.icon);
        }, setup: { layout: function () {
            var t = f.get.maxRating(),
                n = e.fn.rating.settings.templates.icon(t);f.debug("Generating icon html dynamically"), w.html(n), f.refresh();
          } }, event: { mouseenter: function () {
            var t = e(this);t.nextAll().removeClass(p.selected), w.addClass(p.selected), t.addClass(p.selected).prevAll().addClass(p.selected);
          }, mouseleave: function () {
            w.removeClass(p.selected), S.removeClass(p.selected);
          }, click: function () {
            var t = e(this),
                n = f.get.rating(),
                i = S.index(t) + 1;("auto" == m.clearable ? 1 === S.length : m.clearable) && n == i ? f.clearRating() : f.set.rating(i);
          } }, clearRating: function () {
          f.debug("Clearing current rating"), f.set.rating(0);
        }, bind: { events: function () {
            f.verbose("Binding events"), w.on("mouseenter" + b, v.icon, f.event.mouseenter).on("mouseleave" + b, v.icon, f.event.mouseleave).on("click" + b, v.icon, f.event.click);
          } }, remove: { events: function () {
            f.verbose("Removing events"), w.off(b);
          }, initialLoad: function () {
            d = !1;
          } }, enable: function () {
          f.debug("Setting rating to interactive mode"), f.bind.events(), w.removeClass(p.disabled);
        }, disable: function () {
          f.debug("Setting rating to read-only mode"), f.remove.events(), w.addClass(p.disabled);
        }, is: { initialLoad: function () {
            return d;
          } }, get: { initialRating: function () {
            return w.data(h.rating) !== i ? (w.removeData(h.rating), w.data(h.rating)) : m.initialRating;
          }, maxRating: function () {
            return w.data(h.maxRating) !== i ? (w.removeData(h.maxRating), w.data(h.maxRating)) : m.maxRating;
          }, rating: function () {
            var e = S.filter("." + p.active).length;return f.verbose("Current rating retrieved", e), e;
          } }, set: { rating: function (e) {
            var t = e - 1 >= 0 ? e - 1 : 0,
                n = S.eq(t);w.removeClass(p.selected), S.removeClass(p.selected).removeClass(p.active), e > 0 && (f.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(p.active)), f.is.initialLoad() || m.onRate.call(x, e);
          }, initialLoad: function () {
            d = !0;
          } }, setting: function (t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];f[t] = n;
          }
        }, debug: function () {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function () {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function () {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: x, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function () {
            var t = m.name + ":",
                n = 0;r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function (t, o, a) {
          var r,
              s,
              l,
              c = C;return o = o || u, a = x || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, o) : s !== i && (l = s), e.isArray(n) ? n.push(l) : n !== i ? n = [n, l] : l !== i && (n = l), s;
        } }, c ? (C === i && f.initialize(), f.invoke(l)) : (C !== i && C.invoke("destroy"), f.initialize());
    }), n !== i ? n : this;
  }, e.fn.rating.settings = { name: "Rating", namespace: "rating", slent: !1, debug: !1, verbose: !1, performance: !0, initialRating: 0, interactive: !0, maxRating: 4, clearable: "auto", fireOnInit: !1, onRate: function (e) {}, error: { method: "The method you called is not defined", noMaximum: "No maximum rating specified. Cannot generate HTML automatically" }, metadata: { rating: "rating", maxRating: "maxRating" }, className: { active: "active", disabled: "disabled", selected: "selected", loading: "loading" }, selector: { icon: ".icon" }, templates: { icon: function (e) {
        for (var t = 1, n = ""; t <= e;) n += '<i class="icon"></i>', t++;return n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.search = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return e(this).each(function () {
      var m,
          g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
          p = g.className,
          h = g.metadata,
          v = g.regExp,
          b = g.fields,
          y = g.selector,
          x = g.error,
          C = g.namespace,
          w = "." + C,
          S = C + "-module",
          k = e(this),
          T = k.find(y.prompt),
          A = k.find(y.searchButton),
          R = k.find(y.results),
          P = k.find(y.result),
          E = (k.find(y.category), this),
          F = k.data(S),
          O = !1,
          D = !1;m = { initialize: function () {
          m.verbose("Initializing module"), m.get.settings(), m.determine.searchFields(), m.bind.events(), m.set.type(), m.create.results(), m.instantiate();
        }, instantiate: function () {
          m.verbose("Storing instance of module", m), F = m, k.data(S, m);
        }, destroy: function () {
          m.verbose("Destroying instance"), k.off(w).removeData(S);
        }, refresh: function () {
          m.debug("Refreshing selector cache"), T = k.find(y.prompt), A = k.find(y.searchButton), k.find(y.category), R = k.find(y.results), P = k.find(y.result);
        }, refreshResults: function () {
          R = k.find(y.results), P = k.find(y.result);
        }, bind: { events: function () {
            m.verbose("Binding events to search"), g.automatic && (k.on(m.get.inputEvent() + w, y.prompt, m.event.input), T.attr("autocomplete", "off")), k.on("focus" + w, y.prompt, m.event.focus).on("blur" + w, y.prompt, m.event.blur).on("keydown" + w, y.prompt, m.handleKeyboard).on("click" + w, y.searchButton, m.query).on("mousedown" + w, y.results, m.event.result.mousedown).on("mouseup" + w, y.results, m.event.result.mouseup).on("click" + w, y.result, m.event.result.click);
          } }, determine: { searchFields: function () {
            o && o.searchFields !== i && (g.searchFields = o.searchFields);
          } }, event: { input: function () {
            g.searchDelay ? (clearTimeout(m.timer), m.timer = setTimeout(function () {
              m.is.focused() && m.query();
            }, g.searchDelay)) : m.query();
          }, focus: function () {
            m.set.focus(), g.searchOnFocus && m.has.minimumCharacters() && m.query(function () {
              m.can.show() && m.showResults();
            });
          }, blur: function (e) {
            var t = function () {
              m.cancel.query(), m.remove.focus(), m.timer = setTimeout(m.hideResults, g.hideDelay);
            };n.activeElement === this || (D = !1, m.resultsClicked ? (m.debug("Determining if user action caused search to close"), k.one("click.close" + w, y.results, function (e) {
              m.is.inMessage(e) || O ? T.focus() : (O = !1, m.is.animating() || m.is.hidden() || t());
            })) : (m.debug("Input blurred without user action, closing results"), t()));
          }, result: { mousedown: function () {
              m.resultsClicked = !0;
            }, mouseup: function () {
              m.resultsClicked = !1;
            }, click: function (n) {
              m.debug("Search result selected");var i = e(this),
                  o = i.find(y.title).eq(0),
                  a = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                  r = a.attr("href") || !1,
                  s = a.attr("target") || !1,
                  l = (o.html(), o.length > 0 && o.text()),
                  c = m.get.results(),
                  u = i.data(h.result) || m.get.result(l, c);if (e.isFunction(g.onSelect) && !1 === g.onSelect.call(E, u, c)) return m.debug("Custom onSelect callback cancelled default select action"), void (O = !0);m.hideResults(), l && m.set.value(l), r && (m.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r);
            } } }, handleKeyboard: function (e) {
          var t,
              n = k.find(y.result),
              i = k.find(y.category),
              o = n.filter("." + p.active),
              a = n.index(o),
              r = n.length,
              s = o.length > 0,
              l = e.which,
              c = 13,
              u = 38,
              d = 40;if (l == 27 && (m.verbose("Escape key pressed, blurring search field"), m.hideResults(), D = !0), m.is.visible()) {
            if (l == c) {
              if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return m.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1;
            } else l == u && s ? (m.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : l == d && (m.verbose("Down key pressed, changing active result"), t = a + 1 >= r ? a : a + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
          } else l == c && (m.verbose("Enter key pressed, executing query"), m.query(), m.set.buttonPressed(), T.one("keyup", m.remove.buttonFocus));
        }, setup: { api: function (t, n) {
            var i = { debug: g.debug, on: !1, cache: !0, action: "search", urlData: { query: t }, onSuccess: function (e) {
                m.parse.response.call(E, e, t), n();
              }, onFailure: function () {
                m.displayMessage(x.serverError), n();
              }, onAbort: function (e) {}, onError: m.error };e.extend(!0, i, g.apiSettings), m.verbose("Setting up API request", i), k.api(i);
          } }, can: { useAPI: function () {
            return e.fn.api !== i;
          }, show: function () {
            return m.is.focused() && !m.is.visible() && !m.is.empty();
          }, transition: function () {
            return g.transition && e.fn.transition !== i && k.transition("is supported");
          } }, is: { animating: function () {
            return R.hasClass(p.animating);
          }, hidden: function () {
            return R.hasClass(p.hidden);
          }, inMessage: function (t) {
            if (t.target) {
              var i = e(t.target);return e.contains(n.documentElement, t.target) && i.closest(y.message).length > 0;
            }
          }, empty: function () {
            return "" === R.html();
          }, visible: function () {
            return R.filter(":visible").length > 0;
          }, focused: function () {
            return T.filter(":focus").length > 0;
          } }, get: { settings: function () {
            e.isPlainObject(o) && o.searchFullText && (g.fullTextSearch = o.searchFullText, m.error(g.error.oldSearchSyntax, E));
          }, inputEvent: function () {
            var e = T[0];return e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
          }, value: function () {
            return T.val();
          }, results: function () {
            return k.data(h.results);
          }, result: function (t, n) {
            var o = ["title", "id"],
                a = !1;return t = t !== i ? t : m.get.value(), n = n !== i ? n : m.get.results(), "category" === g.type ? (m.debug("Finding result that matches", t), e.each(n, function (n, i) {
              if (e.isArray(i.results) && (a = m.search.object(t, i.results, o)[0])) return !1;
            })) : (m.debug("Finding result in results object", t), a = m.search.object(t, n, o)[0]), a || !1;
          } }, select: { firstResult: function () {
            m.verbose("Selecting first result"), P.first().addClass(p.active);
          } }, set: { focus: function () {
            k.addClass(p.focus);
          }, loading: function () {
            k.addClass(p.loading);
          }, value: function (e) {
            m.verbose("Setting search input value", e), T.val(e);
          }, type: function (e) {
            e = e || g.type, "category" == g.type && k.addClass(g.type);
          }, buttonPressed: function () {
            A.addClass(p.pressed);
          } }, remove: { loading: function () {
            k.removeClass(p.loading);
          }, focus: function () {
            k.removeClass(p.focus);
          }, buttonPressed: function () {
            A.removeClass(p.pressed);
          } }, query: function (t) {
          t = e.isFunction(t) ? t : function () {};var n = m.get.value(),
              i = m.read.cache(n);t = t || function () {}, m.has.minimumCharacters() ? (i ? (m.debug("Reading result from cache", n), m.save.results(i.results), m.addResults(i.html), m.inject.id(i.results), t()) : (m.debug("Querying for", n), e.isPlainObject(g.source) || e.isArray(g.source) ? (m.search.local(n), t()) : m.can.useAPI() ? m.search.remote(n, t) : (m.error(x.source), t())), g.onSearchQuery.call(E, n)) : m.hideResults();
        }, search: { local: function (e) {
            var t,
                n = m.search.object(e, g.content);m.set.loading(), m.save.results(n), m.debug("Returned full local search results", n), g.maxResults > 0 && (m.debug("Using specified max results", n), n = n.slice(0, g.maxResults)), "category" == g.type && (n = m.create.categoryResults(n)), t = m.generateResults({ results: n }), m.remove.loading(), m.addResults(t), m.inject.id(n), m.write.cache(e, { html: t, results: n });
          }, remote: function (t, n) {
            n = e.isFunction(n) ? n : function () {}, k.api("is loading") && k.api("abort"), m.setup.api(t, n), k.api("query");
          }, object: function (t, n, o) {
            var a = [],
                r = [],
                s = [],
                l = t.toString().replace(v.escape, "\\$&"),
                c = new RegExp(v.beginsWith + l, "i"),
                u = function (t, n) {
              var i = -1 == e.inArray(n, a),
                  o = -1 == e.inArray(n, s);i && o && t.push(n);
            };return n = n || g.source, o = o !== i ? o : g.searchFields, e.isArray(o) || (o = [o]), n === i || !1 === n ? (m.error(x.source), []) : (e.each(o, function (i, o) {
              e.each(n, function (e, n) {
                "string" == typeof n[o] && (-1 !== n[o].search(c) ? u(a, n) : "exact" === g.fullTextSearch && m.exactSearch(t, n[o]) ? u(r, n) : 1 == g.fullTextSearch && m.fuzzySearch(t, n[o]) && u(s, n));
              });
            }), e.merge(r, s), e.merge(a, r), a);
          } }, exactSearch: function (e, t) {
          return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1;
        }, fuzzySearch: function (e, t) {
          var n = t.length,
              i = e.length;if ("string" != typeof e) return !1;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) if (t.charCodeAt(a++) === r) continue e;return !1;
          }return !0;
        }, parse: { response: function (e, t) {
            var n = m.generateResults(e);m.verbose("Parsing server response", e), e !== i && t !== i && e[b.results] !== i && (m.addResults(n), m.inject.id(e[b.results]), m.write.cache(t, { html: n, results: e[b.results] }), m.save.results(e[b.results]));
          } }, cancel: { query: function () {
            m.can.useAPI() && k.api("abort");
          } }, has: { minimumCharacters: function () {
            return m.get.value().length >= g.minCharacters;
          }, results: function () {
            return 0 !== R.length && "" != R.html();
          } }, clear: { cache: function (e) {
            var t = k.data(h.cache);e ? e && t && t[e] && (m.debug("Removing value from cache", e), delete t[e], k.data(h.cache, t)) : (m.debug("Clearing cache", e), k.removeData(h.cache));
          } }, read: { cache: function (e) {
            var t = k.data(h.cache);return !!g.cache && (m.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i && t[e]);
          } }, create: { categoryResults: function (t) {
            var n = {};return e.each(t, function (e, t) {
              t.category && (n[t.category] === i ? (m.verbose("Creating new category of results", t.category), n[t.category] = { name: t.category, results: [t] }) : n[t.category].results.push(t));
            }), n;
          }, id: function (e, t) {
            var n,
                o = e + 1;return t !== i ? (n = String.fromCharCode(97 + t) + o, m.verbose("Creating category result id", n)) : (n = o, m.verbose("Creating result id", n)), n;
          }, results: function () {
            0 === R.length && (R = e("<div />").addClass(p.results).appendTo(k));
          } }, inject: { result: function (e, t, n) {
            m.verbose("Injecting result into results");var o = n !== i ? R.children().eq(n).children(y.results).first().children(y.result).eq(t) : R.children(y.result).eq(t);m.verbose("Injecting results metadata", o), o.data(h.result, e);
          }, id: function (t) {
            m.debug("Injecting unique ids into results");var n = 0,
                o = 0;return "category" === g.type ? e.each(t, function (t, a) {
              o = 0, e.each(a.results, function (e, t) {
                var r = a.results[e];r.id === i && (r.id = m.create.id(o, n)), m.inject.result(r, o, n), o++;
              }), n++;
            }) : e.each(t, function (e, n) {
              var a = t[e];a.id === i && (a.id = m.create.id(o)), m.inject.result(a, o), o++;
            }), t;
          } }, save: { results: function (e) {
            m.verbose("Saving current search results to metadata", e), k.data(h.results, e);
          } }, write: { cache: function (e, t) {
            var n = k.data(h.cache) !== i ? k.data(h.cache) : {};g.cache && (m.verbose("Writing generated html to cache", e, t), n[e] = t, k.data(h.cache, n));
          } }, addResults: function (t) {
          if (e.isFunction(g.onResultsAdd) && !1 === g.onResultsAdd.call(R, t)) return m.debug("onResultsAdd callback cancelled default action"), !1;t ? (R.html(t), m.refreshResults(), g.selectFirstResult && m.select.firstResult(), m.showResults()) : m.hideResults(function () {
            R.empty();
          });
        }, showResults: function (t) {
          t = e.isFunction(t) ? t : function () {}, D || !m.is.visible() && m.has.results() && (m.can.transition() ? (m.debug("Showing results with css animations"), R.transition({ animation: g.transition + " in", debug: g.debug, verbose: g.verbose, duration: g.duration, onComplete: function () {
              t();
            }, queue: !0 })) : (m.debug("Showing results with javascript"), R.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(R));
        }, hideResults: function (t) {
          t = e.isFunction(t) ? t : function () {}, m.is.visible() && (m.can.transition() ? (m.debug("Hiding results with css animations"), R.transition({ animation: g.transition + " out", debug: g.debug, verbose: g.verbose, duration: g.duration, onComplete: function () {
              t();
            }, queue: !0 })) : (m.debug("Hiding results with javascript"), R.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(R));
        }, generateResults: function (t) {
          m.debug("Generating html from response", t);var n = g.templates[g.type],
              i = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
              o = e.isArray(t[b.results]) && t[b.results].length > 0,
              a = "";return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && m.error(x.maxResults) : t[b.results] = t[b.results].slice(0, g.maxResults)), e.isFunction(n) ? a = n(t, b) : m.error(x.noTemplate, !1)) : g.showNoResults && (a = m.displayMessage(x.noResults, "empty")), g.onResults.call(E, t), a;
        }, displayMessage: function (e, t) {
          return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(g.templates.message(e, t)), g.templates.message(e, t);
        }, setting: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];g[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function () {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function () {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function () {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function () {
            var t = g.name + ":",
                n = 0;l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = F;return n = n || f, o = E || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (F === i && m.initialize(), m.invoke(u)) : (F !== i && F.invoke("destroy"), m.initialize());
    }), a !== i ? a : this;
  }, e.fn.search.settings = { name: "Search", namespace: "search", silent: !1, debug: !1, verbose: !1, performance: !0, type: "standard", minCharacters: 1, selectFirstResult: !1, apiSettings: !1, source: !1, searchOnFocus: !0, searchFields: ["title", "description"], displayField: "", fullTextSearch: "exact", automatic: !0, hideDelay: 0, searchDelay: 200, maxResults: 7, cache: !0, showNoResults: !0, transition: "scale", duration: 200, easing: "easeOutExpo", onSelect: !1, onResultsAdd: !1, onSearchQuery: function (e) {}, onResults: function (e) {}, onResultsOpen: function () {}, onResultsClose: function () {}, className: { animating: "animating", active: "active", empty: "empty", focus: "focus", hidden: "hidden", loading: "loading", results: "results", pressed: "down" }, error: { source: "Cannot search. No source used, and Semantic API module was not included", noResults: "Your search returned no results", logging: "Error in debug logging, exiting.", noEndpoint: "No search endpoint was specified", noTemplate: "A valid template name was not specified.", oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.", serverError: "There was an issue querying the server.", maxResults: "Results must be an array to use maxResults setting", method: "The method you called is not defined." }, metadata: { cache: "cache", results: "results", result: "result" }, regExp: { escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)" }, fields: { categories: "results", categoryName: "name", categoryResults: "results", description: "description", image: "image", price: "price", results: "results", title: "title", url: "url", action: "action", actionText: "text", actionURL: "url" }, selector: { prompt: ".prompt", searchButton: ".search.button", results: ".results", message: ".results > .message", category: ".category", result: ".result", title: ".title, .name" }, templates: { escape: function (e) {
        var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };return (/[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
            return t[e];
          }) : e
        );
      }, message: function (e, t) {
        var n = "";return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n;
      }, category: function (t, n) {
        var o = "";e.fn.search.settings.templates.escape;return t[n.categoryResults] !== i && (e.each(t[n.categoryResults], function (t, a) {
          a[n.results] !== i && a.results.length > 0 && (o += '<div class="category">', a[n.categoryName] !== i && (o += '<div class="name">' + a[n.categoryName] + "</div>"), o += '<div class="results">', e.each(a.results, function (e, t) {
            t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>";
          }), o += "</div>", o += "</div>");
        }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o);
      }, standard: function (t, n) {
        var o = "";return t[n.results] !== i && (e.each(t[n.results], function (e, t) {
          t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>";
        }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.shape = function (o) {
    var a,
        r = e(this),
        s = (e("body"), new Date().getTime()),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var t,
          m,
          g,
          p = r.selector || "",
          h = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
          v = h.namespace,
          b = h.selector,
          y = h.error,
          x = h.className,
          C = "." + v,
          w = "module-" + v,
          S = e(this),
          k = S.find(b.sides),
          T = S.find(b.side),
          A = !1,
          R = this,
          P = S.data(w);g = { initialize: function () {
          g.verbose("Initializing module for", R), g.set.defaultSide(), g.instantiate();
        }, instantiate: function () {
          g.verbose("Storing instance of module", g), P = g, S.data(w, P);
        }, destroy: function () {
          g.verbose("Destroying previous module for", R), S.removeData(w).off(C);
        }, refresh: function () {
          g.verbose("Refreshing selector cache for", R), S = e(R), k = e(this).find(b.shape), T = e(this).find(b.side);
        }, repaint: function () {
          g.verbose("Forcing repaint event");(k[0] || n.createElement("div")).offsetWidth;
        }, animate: function (e, n) {
          g.verbose("Animating box with properties", e), n = n || function (e) {
            g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active();
          }, h.beforeChange.call(m[0]), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), S.addClass(x.animating), k.css(e).one(g.get.transitionEvent(), n), g.set.duration(h.duration), f(function () {
            S.addClass(x.animating), t.addClass(x.hidden);
          })) : n();
        }, queue: function (e) {
          g.debug("Queueing animation of", e), k.one(g.get.transitionEvent(), function () {
            g.debug("Executing queued animation"), setTimeout(function () {
              S.shape(e);
            }, 0);
          });
        }, reset: function () {
          g.verbose("Animating states reset"), S.removeClass(x.animating).attr("style", "").removeAttr("style"), k.attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style").removeClass(x.hidden), m.removeClass(x.animating).attr("style", "").removeAttr("style");
        }, is: { complete: function () {
            return T.filter("." + x.active)[0] == m[0];
          }, animating: function () {
            return S.hasClass(x.animating);
          } }, set: { defaultSide: function () {
            t = S.find("." + h.className.active), m = t.next(b.side).length > 0 ? t.next(b.side) : S.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", m);
          }, duration: function (e) {
            e = "number" == typeof (e = e || h.duration) ? e + "ms" : e, g.verbose("Setting animation duration", e), (h.duration || 0 === h.duration) && k.add(T).css({ "-webkit-transition-duration": e, "-moz-transition-duration": e, "-ms-transition-duration": e, "-o-transition-duration": e, "transition-duration": e });
          }, currentStageSize: function () {
            var e = S.find("." + h.className.active),
                t = e.outerWidth(!0),
                n = e.outerHeight(!0);S.css({ width: t, height: n });
          }, stageSize: function () {
            var e = S.clone().addClass(x.loading),
                t = e.find("." + h.className.active),
                n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                i = "next" == h.width ? n.outerWidth(!0) : "initial" == h.width ? S.width() : h.width,
                o = "next" == h.height ? n.outerHeight(!0) : "initial" == h.height ? S.height() : h.height;t.removeClass(x.active), n.addClass(x.active), e.insertAfter(S), e.remove(), "auto" != h.width && (S.css("width", i + h.jitter), g.verbose("Specifying width during animation", i)), "auto" != h.height && (S.css("height", o + h.jitter), g.verbose("Specifying height during animation", o));
          }, nextSide: function (e) {
            A = e, m = T.filter(e), A = T.index(m), 0 === m.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", m);
          }, active: function () {
            g.verbose("Setting new side to active", m), T.removeClass(x.active), m.addClass(x.active), h.onChange.call(m[0]), g.set.defaultSide();
          } }, flip: { up: function () {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip up");else {
                g.debug("Flipping up", m);var e = g.get.transform.up();g.set.stageSize(), g.stage.above(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, down: function () {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip down");else {
                g.debug("Flipping down", m);var e = g.get.transform.down();g.set.stageSize(), g.stage.below(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, left: function () {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip left");else {
                g.debug("Flipping left", m);var e = g.get.transform.left();g.set.stageSize(), g.stage.left(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, right: function () {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip right");else {
                g.debug("Flipping right", m);var e = g.get.transform.right();g.set.stageSize(), g.stage.right(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, over: function () {
            !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over())) : g.debug("Side already visible", m);
          }, back: function () {
            !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back())) : g.debug("Side already visible", m);
          } }, get: { transform: { up: function () {
              return { transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(-90deg)" };
            }, down: function () {
              return { transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(90deg)" };
            }, left: function () {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(90deg)" };
            }, right: function () {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(-90deg)" };
            }, over: function () {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(180deg)" };
            }, back: function () {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(-180deg)" };
            } }, transitionEvent: function () {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) if (t.style[e] !== i) return o[e];
          }, nextSide: function () {
            return t.next(b.side).length > 0 ? t.next(b.side) : S.find(b.side).first();
          } }, stage: { above: function () {
            var e = { origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2, depth: { active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };g.verbose("Setting the initial animation position as above", m, e), k.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), m.addClass(x.animating).css({ top: e.origin + "px", transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)" });
          }, below: function () {
            var e = { origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2, depth: { active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };g.verbose("Setting the initial animation position as below", m, e), k.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), m.addClass(x.animating).css({ top: e.origin + "px", transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)" });
          }, left: function () {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as left", m, i), k.css({ transform: "translateZ(-" + i.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(-90deg) translateZ(" + i.depth.next + "px)" });
          }, right: function () {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as left", m, i), k.css({ transform: "translateZ(-" + i.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(90deg) translateZ(" + i.depth.next + "px)" });
          }, behind: function () {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as behind", m, i), t.css({ transform: "rotateY(0deg)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(-180deg)" });
          } }, setting: function (t, n) {
          if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];e.isPlainObject(h[t]) ? e.extend(!0, h[t], n) : h[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];g[t] = n;
          }
        }, debug: function () {
          !h.silent && h.debug && (h.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), g.debug.apply(console, arguments)));
        }, verbose: function () {
          !h.silent && h.verbose && h.debug && (h.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), g.verbose.apply(console, arguments)));
        }, error: function () {
          h.silent || (g.error = Function.prototype.bind.call(console.error, console, h.name + ":"), g.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;h.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: R, "Execution Time": n })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
          }, display: function () {
            var t = h.name + ":",
                n = 0;s = !1, clearTimeout(g.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = P;return n = n || d, o = R || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, u ? (P === i && g.initialize(), g.invoke(c)) : (P !== i && P.invoke("destroy"), g.initialize());
    }), a !== i ? a : this;
  }, e.fn.shape.settings = { name: "Shape", silent: !1, debug: !1, verbose: !1, jitter: 0, performance: !0, namespace: "shape", width: "initial", height: "initial", beforeChange: function () {}, onChange: function () {}, allowRepeats: !1, duration: !1, error: { side: "You tried to switch to a side that does not exist.", method: "The method you called is not defined" }, className: { animating: "animating", hidden: "hidden", loading: "loading", active: "active" }, selector: { sides: ".sides", side: ".side" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sidebar = function (o) {
    var a,
        r = e(this),
        s = e(t),
        l = e(n),
        c = e("html"),
        u = e("head"),
        d = r.selector || "",
        f = new Date().getTime(),
        m = [],
        g = arguments[0],
        p = "string" == typeof g,
        h = [].slice.call(arguments, 1),
        v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var r,
          b,
          y,
          x,
          C,
          w,
          S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
          k = S.selector,
          T = S.className,
          A = S.namespace,
          R = S.regExp,
          P = S.error,
          E = "." + A,
          F = "module-" + A,
          O = e(this),
          D = e(S.context),
          q = O.children(k.sidebar),
          j = (D.children(k.fixed), D.children(k.pusher)),
          z = this,
          I = O.data(F);w = { initialize: function () {
          w.debug("Initializing sidebar", o), w.create.id(), C = w.get.transitionEvent(), S.delaySetup ? v(w.setup.layout) : w.setup.layout(), v(function () {
            w.setup.cache();
          }), w.instantiate();
        }, instantiate: function () {
          w.verbose("Storing instance of module", w), I = w, O.data(F, w);
        }, create: { id: function () {
            y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y);
          } }, destroy: function () {
          w.verbose("Destroying previous module for", O), O.off(E).removeData(F), w.is.ios() && w.remove.ios(), D.off(b), s.off(b), l.off(b);
        }, event: { clickaway: function (e) {
            var t = j.find(e.target).length > 0 || j.is(e.target),
                n = D.is(e.target);t && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide());
          }, touch: function (e) {}, containScroll: function (e) {
            z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1);
          }, scroll: function (t) {
            0 === e(t.target).closest(k.sidebar).length && t.preventDefault();
          } }, bind: { clickaway: function () {
            w.verbose("Adding clickaway events to context", D), S.closable && D.on("click" + b, w.event.clickaway).on("touchend" + b, w.event.clickaway);
          }, scrollLock: function () {
            S.scrollLock && (w.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + b, w.event.touch), O.on("scroll" + E, w.event.containScroll);
          } }, unbind: { clickaway: function () {
            w.verbose("Removing clickaway events from context", D), D.off(b);
          }, scrollLock: function () {
            w.verbose("Removing scroll lock from page"), l.off(b), s.off(b), O.off("scroll" + E);
          } }, add: { inlineCSS: function () {
            var t,
                n = w.cache.width || O.outerWidth(),
                i = w.cache.height || O.outerHeight(),
                o = w.is.rtl(),
                a = w.get.direction(),
                s = { left: n, right: -n, top: i, bottom: -i };o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), r = e(t += "</style>").appendTo(u), w.debug("Adding sizing css to head", r);
          } }, refresh: function () {
          w.verbose("Refreshing selector cache"), D = e(S.context), q = D.children(k.sidebar), j = D.children(k.pusher), D.children(k.fixed), w.clear.cache();
        }, refreshSidebars: function () {
          w.verbose("Refreshing other sidebars"), q = D.children(k.sidebar);
        }, repaint: function () {
          w.verbose("Forcing repaint event"), z.style.display = "none";z.offsetHeight;z.scrollTop = z.scrollTop, z.style.display = "";
        }, setup: { cache: function () {
            w.cache = { width: O.outerWidth(), height: O.outerHeight(), rtl: "rtl" == O.css("direction") };
          }, layout: function () {
            0 === D.children(k.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(P.pusher), j = e('<div class="pusher" />'), D.children().not(k.omitted).not(q).wrapAll(j), w.refresh()), 0 !== O.nextAll(k.pusher).length && O.nextAll(k.pusher)[0] === j[0] || (w.debug("Moved sidebar to correct parent element"), w.error(P.movedSidebar, z), O.detach().prependTo(D), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction();
          } }, attachEvents: function (t, n) {
          var i = e(t);n = e.isFunction(w[n]) ? w[n] : w.toggle, i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + E, n)) : w.error(P.notFound, t);
        }, show: function (t) {
          if (t = e.isFunction(t) ? t : function () {}, w.is.hidden()) {
            if (w.refreshSidebars(), S.overlay && (w.error(P.overlay), S.transition = "overlay"), w.refresh(), w.othersActive()) if (w.debug("Other sidebars currently visible"), S.exclusive) {
              if ("overlay" != S.transition) return void w.hideOthers(w.show);w.hideOthers();
            } else S.transition = "overlay";w.pushPage(function () {
              t.call(z), S.onShow.call(z);
            }), S.onChange.call(z), S.onVisible.call(z);
          } else w.debug("Sidebar is already visible");
        }, hide: function (t) {
          t = e.isFunction(t) ? t : function () {}, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function () {
            t.call(z), S.onHidden.call(z);
          }), S.onChange.call(z), S.onHide.call(z));
        }, othersAnimating: function () {
          return q.not(O).filter("." + T.animating).length > 0;
        }, othersVisible: function () {
          return q.not(O).filter("." + T.visible).length > 0;
        }, othersActive: function () {
          return w.othersVisible() || w.othersAnimating();
        }, hideOthers: function (e) {
          var t = q.not(O).filter("." + T.visible),
              n = t.length,
              i = 0;e = e || function () {}, t.sidebar("hide", function () {
            ++i == n && e();
          });
        }, toggle: function () {
          w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide();
        }, pushPage: function (t) {
          var n,
              i,
              o,
              a = w.get.transition(),
              r = "overlay" === a || w.othersActive() ? O : j;t = e.isFunction(t) ? t : function () {}, "scale down" == S.transition && w.scrollToTop(), w.set.transition(a), w.repaint(), n = function () {
            w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible();
          }, i = function () {
            w.set.dimmed();
          }, o = function (e) {
            e.target == r[0] && (r.off(C + b, o), w.remove.animating(), w.bind.scrollLock(), t.call(z));
          }, r.off(C + b), r.on(C + b, o), v(n), S.dimPage && !w.othersVisible() && v(i);
        }, pullPage: function (t) {
          var n,
              i,
              o = w.get.transition(),
              a = "overlay" == o || w.othersActive() ? O : j;t = e.isFunction(t) ? t : function () {}, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function () {
            w.set.transition(o), w.set.animating(), w.remove.visible(), S.dimPage && !w.othersVisible() && j.removeClass(T.dimmed);
          }, i = function (e) {
            e.target == a[0] && (a.off(C + b, i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || S.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(z));
          }, a.off(C + b), a.on(C + b, i), v(n);
        }, scrollToTop: function () {
          w.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), O.scrollTop(0), t.scrollTo(0, 0);
        }, scrollBack: function () {
          w.verbose("Scrolling back to original page position"), t.scrollTo(0, x);
        }, clear: { cache: function () {
            w.verbose("Clearing cached dimensions"), w.cache = {};
          } }, set: { ios: function () {
            c.addClass(T.ios);
          }, pushed: function () {
            D.addClass(T.pushed);
          }, pushable: function () {
            D.addClass(T.pushable);
          }, dimmed: function () {
            j.addClass(T.dimmed);
          }, active: function () {
            O.addClass(T.active);
          }, animating: function () {
            O.addClass(T.animating);
          }, transition: function (e) {
            e = e || w.get.transition(), O.addClass(e);
          }, direction: function (e) {
            e = e || w.get.direction(), O.addClass(T[e]);
          }, visible: function () {
            O.addClass(T.visible);
          }, overlay: function () {
            O.addClass(T.overlay);
          } }, remove: { inlineCSS: function () {
            w.debug("Removing inline css styles", r), r && r.length > 0 && r.remove();
          }, ios: function () {
            c.removeClass(T.ios);
          }, pushed: function () {
            D.removeClass(T.pushed);
          }, pushable: function () {
            D.removeClass(T.pushable);
          }, active: function () {
            O.removeClass(T.active);
          }, animating: function () {
            O.removeClass(T.animating);
          }, transition: function (e) {
            e = e || w.get.transition(), O.removeClass(e);
          }, direction: function (e) {
            e = e || w.get.direction(), O.removeClass(T[e]);
          }, visible: function () {
            O.removeClass(T.visible);
          }, overlay: function () {
            O.removeClass(T.overlay);
          } }, get: { direction: function () {
            return O.hasClass(T.top) ? T.top : O.hasClass(T.right) ? T.right : O.hasClass(T.bottom) ? T.bottom : T.left;
          }, transition: function () {
            var e,
                t = w.get.direction();return e = w.is.mobile() ? "auto" == S.mobileTransition ? S.defaultTransition.mobile[t] : S.mobileTransition : "auto" == S.transition ? S.defaultTransition.computer[t] : S.transition, w.verbose("Determined transition", e), e;
          }, transitionEvent: function () {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) if (t.style[e] !== i) return o[e];
          } }, is: { ie: function () {
            return !t.ActiveXObject && "ActiveXObject" in t || "ActiveXObject" in t;
          }, ios: function () {
            var e = navigator.userAgent,
                t = e.match(R.ios),
                n = e.match(R.mobileChrome);return !(!t || n) && (w.verbose("Browser was found to be iOS", e), !0);
          }, mobile: function () {
            var e = navigator.userAgent;return e.match(R.mobile) ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1);
          }, hidden: function () {
            return !w.is.visible();
          }, visible: function () {
            return O.hasClass(T.visible);
          }, open: function () {
            return w.is.visible();
          }, closed: function () {
            return w.is.hidden();
          }, vertical: function () {
            return O.hasClass(T.top);
          }, animating: function () {
            return D.hasClass(T.animating);
          }, rtl: function () {
            return w.cache.rtl === i && (w.cache.rtl = "rtl" == O.css("direction")), w.cache.rtl;
          } }, setting: function (t, n) {
          if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);else {
            if (n === i) return S[t];e.isPlainObject(S[t]) ? e.extend(!0, S[t], n) : S[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, w, t);else {
            if (n === i) return w[t];w[t] = n;
          }
        }, debug: function () {
          !S.silent && S.debug && (S.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), w.debug.apply(console, arguments)));
        }, verbose: function () {
          !S.silent && S.verbose && S.debug && (S.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), w.verbose.apply(console, arguments)));
        }, error: function () {
          S.silent || (w.error = Function.prototype.bind.call(console.error, console, S.name + ":"), w.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;S.performance && (n = (t = new Date().getTime()) - (f || t), f = t, m.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500);
          }, display: function () {
            var t = S.name + ":",
                n = 0;f = !1, clearTimeout(w.performance.timer), e.each(m, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), m = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = I;return n = n || h, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (w.error(P.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, p ? (I === i && w.initialize(), w.invoke(g)) : (I !== i && w.invoke("destroy"), w.initialize());
    }), a !== i ? a : this;
  }, e.fn.sidebar.settings = { name: "Sidebar", namespace: "sidebar", silent: !1, debug: !1, verbose: !1, performance: !0, transition: "auto", mobileTransition: "auto", defaultTransition: { computer: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" }, mobile: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" } }, context: "body", exclusive: !1, closable: !0, dimPage: !0, scrollLock: !1, returnScroll: !1, delaySetup: !1, duration: 500, onChange: function () {}, onShow: function () {}, onHide: function () {}, onHidden: function () {}, onVisible: function () {}, className: { active: "active", animating: "animating", dimmed: "dimmed", ios: "ios", pushable: "pushable", pushed: "pushed", right: "right", top: "top", left: "left", bottom: "bottom", visible: "visible" }, selector: { fixed: ".fixed", omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed", pusher: ".pusher", sidebar: ".ui.sidebar" }, regExp: { ios: /(iPad|iPhone|iPod)/g, mobileChrome: /(CriOS)/g, mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g }, error: { method: "The method you called is not defined.", pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element", movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag", overlay: "The overlay setting is no longer supported, use animation: overlay", notFound: "There were no elements that matched the specified selector" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sticky = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          m,
          g,
          p,
          h,
          v = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sticky.settings, o) : e.extend({}, e.fn.sticky.settings),
          b = v.className,
          y = v.namespace,
          x = v.error,
          C = "." + y,
          w = "module-" + y,
          S = e(this),
          k = e(t),
          T = e(v.scrollContext),
          A = (S.selector, S.data(w)),
          R = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          P = this;h = { initialize: function () {
          h.determineContainer(), h.determineContext(), h.verbose("Initializing sticky", v, r), h.save.positions(), h.checkErrors(), h.bind.events(), v.observeChanges && h.observeChanges(), h.instantiate();
        }, instantiate: function () {
          h.verbose("Storing instance of module", h), A = h, S.data(w, h);
        }, destroy: function () {
          h.verbose("Destroying previous instance"), h.reset(), g && g.disconnect(), p && p.disconnect(), k.off("load" + C, h.event.load).off("resize" + C, h.event.resize), T.off("scrollchange" + C, h.event.scrollchange), S.removeData(w);
        }, observeChanges: function () {
          "MutationObserver" in t && (g = new MutationObserver(h.event.documentChanged), p = new MutationObserver(h.event.changed), g.observe(n, { childList: !0, subtree: !0 }), p.observe(P, { childList: !0, subtree: !0 }), p.observe(m[0], { childList: !0, subtree: !0 }), h.debug("Setting up mutation observer", p));
        }, determineContainer: function () {
          r = v.container ? e(v.container) : S.offsetParent();
        }, determineContext: function () {
          0 !== (m = v.context ? e(v.context) : r).length || h.error(x.invalidContext, v.context, S);
        }, checkErrors: function () {
          if (h.is.hidden() && h.error(x.visible, S), h.cache.element.height > h.cache.context.height) return h.reset(), void h.error(x.elementSize, S);
        }, bind: { events: function () {
            k.on("load" + C, h.event.load).on("resize" + C, h.event.resize), T.off("scroll" + C).on("scroll" + C, h.event.scroll).on("scrollchange" + C, h.event.scrollchange);
          } }, event: { changed: function (e) {
            clearTimeout(h.timer), h.timer = setTimeout(function () {
              h.verbose("DOM tree modified, updating sticky menu", e), h.refresh();
            }, 100);
          }, documentChanged: function (t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == P || e(t).find(P).length > 0) && (h.debug("Element removed from DOM, tearing down events"), h.destroy());
              });
            });
          }, load: function () {
            h.verbose("Page contents finished loading"), R(h.refresh);
          }, resize: function () {
            h.verbose("Window resized"), R(h.refresh);
          }, scroll: function () {
            R(function () {
              T.triggerHandler("scrollchange" + C, T.scrollTop());
            });
          }, scrollchange: function (e, t) {
            h.stick(t), v.onScroll.call(P);
          } }, refresh: function (e) {
          h.reset(), v.context || h.determineContext(), e && h.determineContainer(), h.save.positions(), h.stick(), v.onReposition.call(P);
        }, supports: { sticky: function () {
            var t = e("<div/>");t[0];return t.addClass(b.supported), t.css("position").match("sticky");
          } }, save: { lastScroll: function (e) {
            h.lastScroll = e;
          }, elementScroll: function (e) {
            h.elementScroll = e;
          }, positions: function () {
            var e = { height: T.height() },
                t = { margin: { top: parseInt(S.css("margin-top"), 10), bottom: parseInt(S.css("margin-bottom"), 10) }, offset: S.offset(), width: S.outerWidth(), height: S.outerHeight() },
                n = { offset: m.offset(), height: m.outerHeight() };r.outerHeight();h.is.standardScroll() || (h.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = T.scrollTop(), e.left = T.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), h.cache = { fits: t.height + v.offset <= e.height, sameHeight: t.height == n.height, scrollContext: { height: e.height }, element: { margin: t.margin, top: t.offset.top - t.margin.top, left: t.offset.left, width: t.width, height: t.height, bottom: t.offset.top + t.height }, context: { top: n.offset.top, height: n.height, bottom: n.offset.top + n.height } }, h.set.containerSize(), h.stick(), h.debug("Caching element positions", h.cache);
          } }, get: { direction: function (e) {
            var t = "down";return e = e || T.scrollTop(), h.lastScroll !== i && (h.lastScroll < e ? t = "down" : h.lastScroll > e && (t = "up")), t;
          }, scrollChange: function (e) {
            return e = e || T.scrollTop(), h.lastScroll ? e - h.lastScroll : 0;
          }, currentElementScroll: function () {
            return h.elementScroll ? h.elementScroll : h.is.top() ? Math.abs(parseInt(S.css("top"), 10)) || 0 : Math.abs(parseInt(S.css("bottom"), 10)) || 0;
          }, elementScroll: function (e) {
            e = e || T.scrollTop();var t = h.cache.element,
                n = h.cache.scrollContext,
                i = h.get.scrollChange(e),
                o = t.height - n.height + v.offset,
                a = h.get.currentElementScroll(),
                r = a + i;return a = h.cache.fits || r < 0 ? 0 : r > o ? o : r;
          } }, remove: { lastScroll: function () {
            delete h.lastScroll;
          }, elementScroll: function (e) {
            delete h.elementScroll;
          }, minimumSize: function () {
            r.css("min-height", "");
          }, offset: function () {
            S.css("margin-top", "");
          } }, set: { offset: function () {
            h.verbose("Setting offset on element", v.offset), S.css("margin-top", v.offset);
          }, containerSize: function () {
            var e = r.get(0).tagName;"HTML" === e || "body" == e ? h.determineContainer() : Math.abs(r.outerHeight() - h.cache.context.height) > v.jitter && (h.debug("Context has padding, specifying exact height for container", h.cache.context.height), r.css({ height: h.cache.context.height }));
          }, minimumSize: function () {
            var e = h.cache.element;r.css("min-height", e.height);
          }, scroll: function (e) {
            h.debug("Setting scroll on element", e), h.elementScroll != e && (h.is.top() && S.css("bottom", "").css("top", -e), h.is.bottom() && S.css("top", "").css("bottom", e));
          }, size: function () {
            0 !== h.cache.element.height && 0 !== h.cache.element.width && (P.style.setProperty("width", h.cache.element.width + "px", "important"), P.style.setProperty("height", h.cache.element.height + "px", "important"));
          } }, is: { standardScroll: function () {
            return T[0] == t;
          }, top: function () {
            return S.hasClass(b.top);
          }, bottom: function () {
            return S.hasClass(b.bottom);
          }, initialPosition: function () {
            return !h.is.fixed() && !h.is.bound();
          }, hidden: function () {
            return !S.is(":visible");
          }, bound: function () {
            return S.hasClass(b.bound);
          }, fixed: function () {
            return S.hasClass(b.fixed);
          } }, stick: function (e) {
          var t = e || T.scrollTop(),
              n = h.cache,
              i = n.fits,
              o = n.sameHeight,
              a = n.element,
              r = n.scrollContext,
              s = n.context,
              l = h.is.bottom() && v.pushing ? v.bottomOffset : v.offset,
              c = (e = { top: t + l, bottom: t + l + r.height }, h.get.direction(e.top), i ? 0 : h.get.elementScroll(e.top)),
              u = !i;0 !== a.height && !o && (h.is.initialPosition() ? e.top >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : (h.debug("Initial element position is fixed"), h.fixTop())) : h.is.fixed() ? h.is.top() ? e.top <= a.top ? (h.debug("Fixed element reached top of container"), h.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (h.debug("Fixed element reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c)) : h.is.bottom() && (e.bottom - a.height <= a.top ? (h.debug("Bottom fixed rail has reached top of container"), h.setInitialPosition()) : e.bottom >= s.bottom ? (h.debug("Bottom fixed rail has reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c))) : h.is.bottom() && (e.top <= a.top ? (h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), h.setInitialPosition()) : v.pushing ? h.is.bound() && e.bottom <= s.bottom && (h.debug("Fixing bottom attached element to bottom of browser."), h.fixBottom()) : h.is.bound() && e.top <= s.bottom - a.height && (h.debug("Fixing bottom attached element to top of browser."), h.fixTop())));
        }, bindTop: function () {
          h.debug("Binding element to top of parent container"), h.remove.offset(), S.css({ left: "", top: "", marginBottom: "" }).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top), v.onTop.call(P), v.onUnstick.call(P);
        }, bindBottom: function () {
          h.debug("Binding element to bottom of parent container"), h.remove.offset(), S.css({ left: "", top: "" }).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom), v.onBottom.call(P), v.onUnstick.call(P);
        }, setInitialPosition: function () {
          h.debug("Returning to initial position"), h.unfix(), h.unbind();
        }, fixTop: function () {
          h.debug("Fixing element to top of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), S.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top), v.onStick.call(P);
        }, fixBottom: function () {
          h.debug("Sticking element to bottom of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), S.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom), v.onStick.call(P);
        }, unbind: function () {
          h.is.bound() && (h.debug("Removing container bound position on element"), h.remove.offset(), S.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom));
        }, unfix: function () {
          h.is.fixed() && (h.debug("Removing fixed position on element"), h.remove.minimumSize(), h.remove.offset(), S.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom), v.onUnstick.call(P));
        }, reset: function () {
          h.debug("Resetting elements position"), h.unbind(), h.unfix(), h.resetCSS(), h.remove.offset(), h.remove.lastScroll();
        }, resetCSS: function () {
          S.css({ width: "", height: "" }), r.css({ height: "" });
        }, setting: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];h[t] = n;
          }
        }, debug: function () {
          !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)));
        }, verbose: function () {
          !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)));
        }, error: function () {
          v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: P, "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 0);
          }, display: function () {
            var t = v.name + ":",
                n = 0;l = !1, clearTimeout(h.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = A;return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (A === i && h.initialize(), h.invoke(u)) : (A !== i && A.invoke("destroy"), h.initialize());
    }), a !== i ? a : this;
  }, e.fn.sticky.settings = { name: "Sticky", namespace: "sticky", silent: !1, debug: !1, verbose: !0, performance: !0, pushing: !1, context: !1, container: !1, scrollContext: t, offset: 0, bottomOffset: 0, jitter: 5, setSize: !0, observeChanges: !1, onReposition: function () {}, onScroll: function () {}, onStick: function () {}, onUnstick: function () {}, onTop: function () {}, onBottom: function () {}, error: { container: "Sticky element must be inside a relative container", visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.", method: "The method you called is not defined.", invalidContext: "Context specified does not exist", elementSize: "Sticky element is larger than its container, cannot create sticky." }, className: { bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.tab = function (o) {
    var a,
        r = e.isFunction(this) ? e(t) : e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1),
        m = !1;return r.each(function () {
      var g,
          p,
          h,
          v,
          b,
          y,
          x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
          C = x.className,
          w = x.metadata,
          S = x.selector,
          k = x.error,
          T = "." + x.namespace,
          A = "module-" + x.namespace,
          R = e(this),
          P = {},
          E = !0,
          F = 0,
          O = this,
          D = R.data(A);b = { initialize: function () {
          b.debug("Initializing tab menu item", R), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, p), x.auto && b.set.auto(), b.bind.events(), x.history && !m && (b.initializeHistory(), m = !0), b.instantiate();
        }, instantiate: function () {
          b.verbose("Storing instance of module", b), D = b, R.data(A, b);
        }, destroy: function () {
          b.debug("Destroying tabs", R), R.removeData(A).off(T);
        }, bind: { events: function () {
            e.isWindow(O) || (b.debug("Attaching tab activation events to element", R), R.on("click" + T, b.event.click));
          } }, determineTabs: function () {
          var t;"parent" === x.context ? (R.closest(S.ui).length > 0 ? (t = R.closest(S.ui), b.verbose("Using closest UI element as parent", t)) : t = R, g = t.parent(), b.verbose("Determined parent element for creating context", g)) : x.context ? (g = e(x.context), b.verbose("Using selector for tab context", x.context, g)) : g = e("body"), x.childrenOnly ? (p = g.children(S.tabs), b.debug("Searching tab context children for tabs", g, p)) : (p = g.find(S.tabs), b.debug("Searching tab context for tabs", g, p));
        }, fix: { callbacks: function () {
            e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(k.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(k.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o));
          } }, initializeHistory: function () {
          if (b.debug("Initializing page state"), e.address === i) return b.error(k.state), !1;if ("state" == x.historyType) {
            if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(k.path), !1;e.address.history(!0).state(x.path);
          }e.address.bind("change", b.event.history.change);
        }, event: { click: function (t) {
            var n = e(this).data(w.tab);n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified");
          }, history: { change: function (t) {
              var n = t.pathNames.join("/") || b.get.initialPath(),
                  o = x.templates.determineTitle(n) || !1;b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o);
            } } }, refresh: function () {
          h && (b.debug("Refreshing tab", h), b.changeTab(h));
        }, cache: { read: function (e) {
            return e !== i && P[e];
          }, add: function (e, t) {
            e = e || h, b.debug("Adding cached content for", e), P[e] = t;
          }, remove: function (e) {
            e = e || h, b.debug("Removing cached content for", e), delete P[e];
          } }, set: { auto: function () {
            var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = { url: t };
          }, loading: function (e) {
            var t = b.get.tabElement(e);t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onRequest.call(t[0], e));
          }, state: function (t) {
            e.address.value(t);
          } }, changeTab: function (n) {
          var i = t.history && t.history.pushState && x.ignoreFirstLoad && E,
              o = x.auto || e.isPlainObject(x.apiSettings),
              a = o && !i ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);n = b.utilities.arrayToPath(a), e.each(a, function (t, r) {
            var s,
                l,
                c,
                u,
                d = a.slice(0, t + 1),
                f = b.utilities.arrayToPath(d),
                m = b.is.tab(f),
                p = t + 1 == a.length,
                S = b.get.tabElement(f);if (b.verbose("Looking for tab", r), m) {
              if (b.verbose("Tab was found", r), h = f, v = b.utilities.filterArray(a, d), p ? u = !0 : (l = a.slice(0, t + 2), c = b.utilities.arrayToPath(l), (u = !b.is.tab(c)) && b.verbose("Tab parameters found", l)), u && o) return i ? (b.debug("Ignoring remote content on first tab load", f), E = !1, b.cache.add(n, S.html()), b.activate.all(f), x.onFirstLoad.call(S[0], f, v, y), x.onLoad.call(S[0], f, v, y)) : (b.activate.navigation(f), b.fetch.content(f, n)), !1;b.debug("Opened local tab", f), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(S[0], f, v, y)), x.onLoad.call(S[0], f, v, y);
            } else {
              if (-1 != n.search("/") || "" === n) return b.error(k.missingTab, R, g, f), !1;if (f = (s = e("#" + n + ', a[name="' + n + '"]')).closest("[data-tab]").data(w.tab), S = b.get.tabElement(f), s && s.length > 0 && f) return b.debug("Anchor link used, opening parent tab", S, s), S.hasClass(C.active) || setTimeout(function () {
                b.scrollTo(s);
              }, 0), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(S[0], f, v, y)), x.onLoad.call(S[0], f, v, y), !1;
            }
          });
        }, scrollTo: function (t) {
          var i = !!(t && t.length > 0) && t.offset().top;!1 !== i && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i));
        }, update: { content: function (t, n, o) {
            var a = b.get.tabElement(t),
                r = a[0];o = o !== i ? o : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof n ? a.empty().append(e(n).clone(!0)) : o ? (b.debug("Updating HTML and evaluating inline scripts", t, n), a.html(n)) : (b.debug("Updating HTML", t, n), r.innerHTML = n);
          } }, fetch: { content: function (t, n) {
            var o,
                a,
                r = b.get.tabElement(t),
                s = { dataType: "html", encodeParameters: !1, on: "now", cache: x.alwaysRefresh, headers: { "X-Remote": !0 }, onSuccess: function (e) {
                "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(r[0], t, v, y), x.onLoad.call(r[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && r.children().length > 0 ? setTimeout(function () {
                  var e = r.children().clone(!0);e = e.not("script"), b.cache.add(n, e);
                }, 0) : b.cache.add(n, r.html());
              }, urlData: { tab: n } },
                l = r.api("get request") || !1,
                c = l && "pending" === l.state();n = n || t, a = b.cache.read(n), x.cache && a ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, a, !1) : b.update.content(t, a)), x.onLoad.call(r[0], t, v, y)) : c ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), r.api(o)) : b.error(k.api);
          } }, activate: { all: function (e) {
            b.activate.tab(e), b.activate.navigation(e);
          }, tab: function (e) {
            var t = b.get.tabElement(e),
                n = "siblings" == x.deactivate ? t.siblings(p) : p.not(t),
                i = t.hasClass(C.active);b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), t.length > 0 && x.onVisible.call(t[0], e));
          }, navigation: function (e) {
            var t = b.get.navElement(e),
                n = "siblings" == x.deactivate ? t.siblings(r) : r.not(t),
                i = t.hasClass(C.active);b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading));
          } }, deactivate: { all: function () {
            b.deactivate.navigation(), b.deactivate.tabs();
          }, navigation: function () {
            r.removeClass(C.active);
          }, tabs: function () {
            p.removeClass(C.active + " " + C.loading);
          } }, is: { tab: function (e) {
            return e !== i && b.get.tabElement(e).length > 0;
          } }, get: { initialPath: function () {
            return r.eq(0).data(w.tab) || p.eq(0).data(w.tab);
          }, path: function () {
            return e.address.value();
          }, defaultPathArray: function (e) {
            return b.utilities.pathToArray(b.get.defaultPath(e));
          }, defaultPath: function (e) {
            var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0).data(w.tab) || !1;if (t) {
              if (b.debug("Found default tab", t), F < x.maxDepth) return F++, b.get.defaultPath(t);b.error(k.recursion);
            } else b.debug("No default tabs found for", e, p);return F = 0, e;
          }, navElement: function (e) {
            return e = e || h, r.filter("[data-" + w.tab + '="' + e + '"]');
          }, tabElement: function (e) {
            var t, n, i, o;return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = p.filter("[data-" + w.tab + '="' + e + '"]'), n = p.filter("[data-" + w.tab + '="' + o + '"]'), t.length > 0 ? t : n;
          }, tab: function () {
            return h;
          } }, utilities: { filterArray: function (t, n) {
            return e.grep(t, function (t) {
              return -1 == e.inArray(t, n);
            });
          }, last: function (t) {
            return !!e.isArray(t) && t[t.length - 1];
          }, pathToArray: function (e) {
            return e === i && (e = h), "string" == typeof e ? e.split("/") : [e];
          }, arrayToPath: function (t) {
            return !!e.isArray(t) && t.join("/");
          } }, setting: function (t, n) {
          if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (n === i) return x[t];e.isPlainObject(x[t]) ? e.extend(!0, x[t], n) : x[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, b, t);else {
            if (n === i) return b[t];b[t] = n;
          }
        }, debug: function () {
          !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)));
        }, verbose: function () {
          !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)));
        }, error: function () {
          x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;x.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: O, "Execution Time": n })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500);
          }, display: function () {
            var t = x.name + ":",
                n = 0;l = !1, clearTimeout(b.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = D;return n = n || f, o = O || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (b.error(k.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (D === i && b.initialize(), b.invoke(u)) : (D !== i && D.invoke("destroy"), b.initialize());
    }), a !== i ? a : this;
  }, e.tab = function () {
    e(t).tab.apply(this, arguments);
  }, e.fn.tab.settings = { name: "Tab", namespace: "tab", silent: !1, debug: !1, verbose: !1, performance: !0, auto: !1, history: !1, historyType: "hash", path: !1, context: !1, childrenOnly: !1, maxDepth: 25, deactivate: "siblings", alwaysRefresh: !1, cache: !0, loadOnce: !1, cacheType: "response", ignoreFirstLoad: !1, apiSettings: !1, evaluateScripts: "once", onFirstLoad: function (e, t, n) {}, onLoad: function (e, t, n) {}, onVisible: function (e, t, n) {}, onRequest: function (e, t, n) {}, templates: { determineTitle: function (e) {} }, error: { api: "You attempted to load content without API module", method: "The method you called is not defined", missingTab: "Activated tab cannot be found. Tabs are case-sensitive.", noContent: "The tab you specified is missing a content url.", path: "History enabled, but no path was specified", recursion: "Max recursive depth reached", legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.", legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code", state: "History requires Asual's Address library <https://github.com/asual/jquery-address>" }, metadata: { tab: "tab", loaded: "loaded", promise: "promise" }, className: { loading: "loading", active: "active" }, selector: { tabs: ".ui.tab", ui: ".ui" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.transition = function () {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments,
        u = c[0],
        d = [].slice.call(arguments, 1),
        f = "string" == typeof u;t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return a.each(function (t) {
      var m,
          g,
          p,
          h,
          v,
          b,
          y,
          x,
          C,
          w = e(this),
          S = this;(C = { initialize: function () {
          m = C.get.settings.apply(S, c), h = m.className, p = m.error, v = m.metadata, x = "." + m.namespace, y = "module-" + m.namespace, g = w.data(y) || C, b = C.get.animationEndEvent(), f && (f = C.invoke(u)), !1 === f && (C.verbose("Converted arguments into settings object", m), m.interval ? C.delay(m.animate) : C.animate(), C.instantiate());
        }, instantiate: function () {
          C.verbose("Storing instance of module", C), g = C, w.data(y, g);
        }, destroy: function () {
          C.verbose("Destroying previous module for", S), w.removeData(y);
        }, refresh: function () {
          C.verbose("Refreshing display type on next animation"), delete C.displayType;
        }, forceRepaint: function () {
          C.verbose("Forcing element repaint");var e = w.parent(),
              t = w.next();0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t);
        }, repaint: function () {
          C.verbose("Repainting element");S.offsetWidth;
        }, delay: function (e) {
          var n,
              o = C.get.animationDirection();o || (o = C.can.transition() ? C.get.direction() : "static"), e = e !== i ? e : m.interval, n = "auto" == m.reverse && o == h.outward || 1 == m.reverse ? (a.length - t) * m.interval : t * m.interval, C.debug("Delaying animation by", n), setTimeout(C.animate, n);
        }, animate: function (e) {
          if (m = e || m, !C.is.supported()) return C.error(p.support), !1;if (C.debug("Preparing animation", m.animation), C.is.animating()) {
            if (m.queue) return !m.allowRepeats && C.has.direction() && C.is.occurring() && !0 !== C.queuing ? C.debug("Animation is currently occurring, preventing queueing same animation", m.animation) : C.queue(m.animation), !1;if (!m.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", m.animation), !1;C.debug("New animation started, completing previous early", m.animation), g.complete();
          }C.can.animate() ? C.set.animating(m.animation) : C.error(p.noAnimation, m.animation, S);
        }, reset: function () {
          C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating();
        }, queue: function (e) {
          C.debug("Queueing animation of", e), C.queuing = !0, w.one(b + ".queue" + x, function () {
            C.queuing = !1, C.repaint(), C.animate.apply(this, m);
          });
        }, complete: function (e) {
          C.debug("Animation complete", m.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), m.onComplete.call(S)));
        }, force: { visible: function () {
            var e = w.attr("style"),
                t = C.get.userStyle(),
                n = C.get.displayType(),
                o = t + "display: " + n + " !important;",
                a = w.css("display"),
                r = e === i || "" === e;a !== n ? (C.verbose("Overriding default display to show element", n), w.attr("style", o)) : r && w.removeAttr("style");
          }, hidden: function () {
            var e = w.attr("style"),
                t = w.css("display"),
                n = e === i || "" === e;"none" === t || C.is.hidden() ? n && w.removeAttr("style") : (C.verbose("Overriding default display to hide element"), w.css("display", "none"));
          } }, has: { direction: function (t) {
            var n = !1;return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
              t !== h.inward && t !== h.outward || (n = !0);
            })), n;
          }, inlineDisplay: function () {
            var t = w.attr("style") || "";return e.isArray(t.match(/display.*?;/, ""));
          } }, set: { animating: function (e) {
            var t;C.remove.completeCallback(), e = e || m.animation, t = C.get.animationClass(e), C.save.animation(t), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(t);
          }, duration: function (e, t) {
            ((t = "number" == typeof (t = t || m.duration) ? t + "ms" : t) || 0 === t) && (C.verbose("Setting animation duration", t), w.css({ "animation-duration": t }));
          }, direction: function (e) {
            (e = e || C.get.direction()) == h.inward ? C.set.inward() : C.set.outward();
          }, looping: function () {
            C.debug("Transition set to loop"), w.addClass(h.looping);
          }, hidden: function () {
            w.addClass(h.transition).addClass(h.hidden);
          }, inward: function () {
            C.debug("Setting direction to inward"), w.removeClass(h.outward).addClass(h.inward);
          }, outward: function () {
            C.debug("Setting direction to outward"), w.removeClass(h.inward).addClass(h.outward);
          }, visible: function () {
            w.addClass(h.transition).addClass(h.visible);
          } }, start: { animation: function (e) {
            e = e || C.get.animationClass(), C.debug("Starting tween", e), w.addClass(e).one(b + ".complete" + x, C.complete), m.useFailSafe && C.add.failSafe(), C.set.duration(m.duration), m.onStart.call(S);
          } }, save: { animation: function (e) {
            C.cache || (C.cache = {}), C.cache.animation = e;
          }, displayType: function (e) {
            "none" !== e && w.data(v.displayType, e);
          }, transitionExists: function (t, n) {
            e.fn.transition.exists[t] = n, C.verbose("Saving existence of transition", t, n);
          } }, restore: { conditions: function () {
            var e = C.get.currentAnimation();e && (w.removeClass(e), C.verbose("Removing animation class", C.cache)), C.remove.duration();
          } }, add: { failSafe: function () {
            var e = C.get.duration();C.timer = setTimeout(function () {
              w.triggerHandler(b);
            }, e + m.failSafeDelay), C.verbose("Adding fail safe timer", C.timer);
          } }, remove: { animating: function () {
            w.removeClass(h.animating);
          }, animationCallbacks: function () {
            C.remove.queueCallback(), C.remove.completeCallback();
          }, queueCallback: function () {
            w.off(".queue" + x);
          }, completeCallback: function () {
            w.off(".complete" + x);
          }, display: function () {
            w.css("display", "");
          }, direction: function () {
            w.removeClass(h.inward).removeClass(h.outward);
          }, duration: function () {
            w.css("animation-duration", "");
          }, failSafe: function () {
            C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer);
          }, hidden: function () {
            w.removeClass(h.hidden);
          }, visible: function () {
            w.removeClass(h.visible);
          }, looping: function () {
            C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), w.removeClass(h.looping));
          }, transition: function () {
            w.removeClass(h.visible).removeClass(h.hidden);
          } }, get: { settings: function (t, n, i) {
            return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: i, duration: n }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, duration: n }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, { animation: t }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: n }) : e.extend({}, e.fn.transition.settings, { animation: t });
          }, animationClass: function (e) {
            var t = e || m.animation,
                n = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";return h.animating + " " + h.transition + " " + n + t;
          }, currentAnimation: function () {
            return !(!C.cache || C.cache.animation === i) && C.cache.animation;
          }, currentDirection: function () {
            return C.is.inward() ? h.inward : h.outward;
          }, direction: function () {
            return C.is.hidden() || !C.is.visible() ? h.inward : h.outward;
          }, animationDirection: function (t) {
            var n;return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
              t === h.inward ? n = h.inward : t === h.outward && (n = h.outward);
            })), n || !1;
          }, duration: function (e) {
            return !1 === (e = e || m.duration) && (e = w.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e;
          }, displayType: function (e) {
            return e = e === i || e, m.displayType ? m.displayType : (e && w.data(v.displayType) === i && C.can.transition(!0), w.data(v.displayType));
          }, userStyle: function (e) {
            return (e = e || w.attr("style") || "").replace(/display.*?;/, "");
          }, transitionExists: function (t) {
            return e.fn.transition.exists[t];
          }, animationStartEvent: function () {
            var e,
                t = n.createElement("div"),
                o = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" };for (e in o) if (t.style[e] !== i) return o[e];return !1;
          }, animationEndEvent: function () {
            var e,
                t = n.createElement("div"),
                o = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };for (e in o) if (t.style[e] !== i) return o[e];return !1;
          } }, can: { transition: function (t) {
            var n,
                o,
                a,
                r,
                s,
                l,
                c = m.animation,
                u = C.get.transitionExists(c),
                d = C.get.displayType(!1);if (u === i || t) {
              if (C.verbose("Determining whether animation exists"), n = w.attr("class"), o = w.prop("tagName"), r = (a = e("<" + o + " />").addClass(n).insertAfter(w)).addClass(c).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"), s = a.addClass(h.inward).css("animationName"), d || (d = a.attr("class", n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"), C.verbose("Determining final display state", d), C.save.displayType(d)), a.remove(), r != s) C.debug("Direction exists for animation", c), l = !0;else {
                if ("none" == r || !r) return void C.debug("No animation defined in css", c);C.debug("Static animation found", c, d), l = !1;
              }C.save.transitionExists(c, l);
            }return u !== i ? u : l;
          }, animate: function () {
            return C.can.transition() !== i;
          } }, is: { animating: function () {
            return w.hasClass(h.animating);
          }, inward: function () {
            return w.hasClass(h.inward);
          }, outward: function () {
            return w.hasClass(h.outward);
          }, looping: function () {
            return w.hasClass(h.looping);
          }, occurring: function (e) {
            return e = "." + (e = e || m.animation).replace(" ", "."), w.filter(e).length > 0;
          }, visible: function () {
            return w.is(":visible");
          }, hidden: function () {
            return "hidden" === w.css("visibility");
          }, supported: function () {
            return !1 !== b;
          } }, hide: function () {
          C.verbose("Hiding element"), C.is.animating() && C.reset(), S.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), m.onHide.call(S), m.onComplete.call(S);
        }, show: function (e) {
          C.verbose("Showing element", e), C.remove.hidden(), C.set.visible(), C.force.visible(), m.onShow.call(S), m.onComplete.call(S);
        }, toggle: function () {
          C.is.visible() ? C.hide() : C.show();
        }, stop: function () {
          C.debug("Stopping current animation"), w.triggerHandler(b);
        }, stopAll: function () {
          C.debug("Stopping all animation"), C.remove.queueCallback(), w.triggerHandler(b);
        }, clear: { queue: function () {
            C.debug("Clearing animation queue"), C.remove.queueCallback();
          } }, enable: function () {
          C.verbose("Starting animation"), w.removeClass(h.disabled);
        }, disable: function () {
          C.debug("Stopping animation"), w.addClass(h.disabled);
        }, setting: function (t, n) {
          if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, C, t);else {
            if (n === i) return C[t];C[t] = n;
          }
        }, debug: function () {
          !m.silent && m.debug && (m.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), C.debug.apply(console, arguments)));
        }, verbose: function () {
          !m.silent && m.verbose && m.debug && (m.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), C.verbose.apply(console, arguments)));
        }, error: function () {
          m.silent || (C.error = Function.prototype.bind.call(console.error, console, m.name + ":"), C.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500);
          }, display: function () {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(C.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = g;return n = n || d, a = S || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s !== i && s;
        } }).initialize();
    }), o !== i ? o : this;
  }, e.fn.transition.exists = {}, e.fn.transition.settings = { name: "Transition", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function () {}, onComplete: function () {}, onShow: function () {}, onHide: function () {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();e.api = e.fn.api = function (n) {
    var o,
        a = e.isFunction(this) ? e(t) : e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f,
          m,
          g,
          p,
          h,
          v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
          b = v.namespace,
          y = v.metadata,
          x = v.selector,
          C = v.error,
          w = v.className,
          S = "." + b,
          k = "module-" + b,
          T = e(this),
          A = T.closest(x.form),
          R = v.stateContext ? e(v.stateContext) : T,
          P = this,
          E = R[0],
          F = T.data(k);h = { initialize: function () {
          u || h.bind.events(), h.instantiate();
        }, instantiate: function () {
          h.verbose("Storing instance of module", h), F = h, T.data(k, F);
        }, destroy: function () {
          h.verbose("Destroying previous module for", P), T.removeData(k).off(S);
        }, bind: { events: function () {
            var e = h.get.event();e ? (h.verbose("Attaching API events to element", e), T.on(e + S, h.event.trigger)) : "now" == v.on && (h.debug("Querying API endpoint immediately"), h.query());
          } }, decode: { json: function (e) {
            if (e !== i && "string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}return e;
          } }, read: { cachedResponse: function (e) {
            var n;if (t.Storage !== i) return n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n);h.error(C.noStorage);
          } }, write: { cachedResponse: function (n, o) {
            o && "" === o ? h.debug("Response empty, not caching", o) : t.Storage !== i ? (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), h.verbose("Storing cached response for url", n, o)) : h.error(C.noStorage);
          } }, query: function () {
          if (h.is.disabled()) h.debug("Element is disabled API request aborted");else {
            if (h.is.loading()) {
              if (!v.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");h.debug("Interrupting previous request"), h.abort();
            }if (v.defaultData && e.extend(!0, v.urlData, h.get.defaultData()), v.serializeForm && (v.data = h.add.formData(v.data)), !1 === (f = h.get.settings())) return h.cancelled = !0, void h.error(C.beforeSend);if (h.cancelled = !1, (m = h.get.templatedURL()) || h.is.mocked()) {
              if ((m = h.add.urlData(m)) || h.is.mocked()) {
                if (f.url = v.base + m, a = e.extend(!0, {}, v, { type: v.method || v.type, data: g, url: v.base + m, beforeSend: v.beforeXHR, success: function () {}, failure: function () {}, complete: function () {} }), h.debug("Querying URL", a.url), h.verbose("Using AJAX settings", a), "local" === v.cache && h.read.cachedResponse(m)) return h.debug("Response returned from local cache"), h.request = h.create.request(), void h.request.resolveWith(E, [h.read.cachedResponse(m)]);v.throttle ? v.throttleFirstRequest || h.timer ? (h.debug("Throttling request", v.throttle), clearTimeout(h.timer), h.timer = setTimeout(function () {
                  h.timer && delete h.timer, h.debug("Sending throttled request", g, a.method), h.send.request();
                }, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request(), h.timer = setTimeout(function () {}, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request());
              }
            } else h.error(C.missingURL);
          }
        }, should: { removeError: function () {
            return !0 === v.hideError || "auto" === v.hideError && !h.is.form();
          } }, is: { disabled: function () {
            return T.filter(x.disabled).length > 0;
          }, expectingJSON: function () {
            return "json" === v.dataType || "jsonp" === v.dataType;
          }, form: function () {
            return T.is("form") || R.is("form");
          }, mocked: function () {
            return v.mockResponse || v.mockResponseAsync || v.response || v.responseAsync;
          }, input: function () {
            return T.is("input");
          }, loading: function () {
            return !!h.request && "pending" == h.request.state();
          }, abortedRequest: function (e) {
            return e && e.readyState !== i && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1);
          }, validResponse: function (t) {
            return h.is.expectingJSON() && e.isFunction(v.successTest) ? (h.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1)) : (h.verbose("Response is not JSON, skipping validation", v.successTest, t), !0);
          } }, was: { cancelled: function () {
            return h.cancelled || !1;
          }, succesful: function () {
            return h.request && "resolved" == h.request.state();
          }, failure: function () {
            return h.request && "rejected" == h.request.state();
          }, complete: function () {
            return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state());
          } }, add: { urlData: function (t, n) {
            var o, a;return t && (o = t.match(v.regExp.required), a = t.match(v.regExp.optional), n = n || v.urlData, o && (h.debug("Looking for required URL variables", o), e.each(o, function (o, a) {
              var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                  s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];if (s === i) return h.error(C.requiredParameter, r, t), t = !1, !1;h.verbose("Found required variable", r, s), s = v.encodeParameters ? h.get.urlEncodedValue(s) : s, t = t.replace(a, s);
            })), a && (h.debug("Looking for optional URL variables", o), e.each(a, function (o, a) {
              var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                  s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];s !== i ? (h.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (h.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""));
            }))), t;
          }, formData: function (t) {
            var n = e.fn.serializeObject !== i,
                o = n ? A.serializeObject() : A.serialize();return t = t || v.data, e.isPlainObject(t) ? n ? (h.debug("Extending existing data with form data", t, o), t = e.extend(!0, {}, t, o)) : (h.error(C.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, o), t = o) : (h.debug("Adding form data", o), t = o), t;
          } }, send: { request: function () {
            h.set.loading(), h.request = h.create.request(), h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(), v.onRequest.call(E, h.request, h.xhr);
          } }, event: { trigger: function (e) {
            h.query(), "submit" != e.type && "click" != e.type || e.preventDefault();
          }, xhr: { always: function () {}, done: function (t, n, i) {
              var o = this,
                  a = new Date().getTime() - p,
                  r = v.loadingDuration - a,
                  s = !!e.isFunction(v.onResponse) && (h.is.expectingJSON() ? v.onResponse.call(o, e.extend(!0, {}, t)) : v.onResponse.call(o, t));r = r > 0 ? r : 0, s && (h.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), r > 0 && h.debug("Response completed early delaying state change by", r), setTimeout(function () {
                h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"]);
              }, r);
            }, fail: function (e, t, n) {
              var i = this,
                  o = new Date().getTime() - p,
                  a = v.loadingDuration - o;(a = a > 0 ? a : 0) > 0 && h.debug("Response completed early delaying state change by", a), setTimeout(function () {
                h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n]);
              }, a);
            } }, request: { done: function (e, t) {
              h.debug("Successful API Response", e), "local" === v.cache && m && (h.write.cachedResponse(m, e), h.debug("Saving server response locally", h.cache)), v.onSuccess.call(E, e, T, t);
            }, complete: function (e, t) {
              var n, i;h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)), h.remove.loading(), v.onComplete.call(E, i, T, n);
            }, fail: function (e, t, n) {
              var o = h.get.responseFromXHR(e),
                  r = h.get.errorFromRequest(o, t, n);if ("aborted" == t) return h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(E, t, T, e), !0;"invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (h.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && h.error(C.statusMessage + n, a.url), v.onError.call(E, r, T, e)), v.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), h.should.removeError() && setTimeout(h.remove.error, v.errorDuration)), h.debug("API Request failed", r, e), v.onFailure.call(E, o, T, e);
            } } }, create: { request: function () {
            return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail);
          }, mockedXHR: function () {
            var t,
                n,
                i,
                o = v.mockResponse || v.response,
                a = v.mockResponseAsync || v.responseAsync;return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail), o ? (e.isFunction(o) ? (h.debug("Using specified synchronous callback", o), n = o.call(E, f)) : (h.debug("Using settings specified response", o), n = o), i.resolveWith(E, [n, !1, { responseText: n }])) : e.isFunction(a) && (t = function (e) {
              h.debug("Async callback returned response", e), e ? i.resolveWith(E, [e, !1, { responseText: e }]) : i.rejectWith(E, [{ responseText: e }, !1, !1]);
            }, h.debug("Using specified async response callback", a), a.call(E, f, t)), i;
          }, xhr: function () {
            var t;return t = e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail), h.verbose("Created server request", t, a), t;
          } }, set: { error: function () {
            h.verbose("Adding error state to element", R), R.addClass(w.error);
          }, loading: function () {
            h.verbose("Adding loading state to element", R), R.addClass(w.loading), p = new Date().getTime();
          } }, remove: { error: function () {
            h.verbose("Removing error state from element", R), R.removeClass(w.error);
          }, loading: function () {
            h.verbose("Removing loading state from element", R), R.removeClass(w.loading);
          } }, get: { responseFromXHR: function (t) {
            return !!e.isPlainObject(t) && (h.is.expectingJSON() ? h.decode.json(t.responseText) : t.responseText);
          }, errorFromRequest: function (t, n, o) {
            return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o;
          }, request: function () {
            return h.request || !1;
          }, xhr: function () {
            return h.xhr || !1;
          }, settings: function () {
            var t;return (t = v.beforeSend.call(E, v)) && (t.success !== i && (h.debug("Legacy success callback detected", t), h.error(C.legacyParameters, t.success), t.onSuccess = t.success), t.failure !== i && (h.debug("Legacy failure callback detected", t), h.error(C.legacyParameters, t.failure), t.onFailure = t.failure), t.complete !== i && (h.debug("Legacy complete callback detected", t), h.error(C.legacyParameters, t.complete), t.onComplete = t.complete)), t === i && h.error(C.noReturnedValue), !1 === t ? t : t !== i ? e.extend(!0, {}, t) : e.extend(!0, {}, v);
          }, urlEncodedValue: function (e) {
            var n = t.decodeURIComponent(e),
                i = t.encodeURIComponent(e);return n !== e ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value using encodeURIComponent", e, i), i);
          }, defaultData: function () {
            var t = {};return e.isWindow(P) || (h.is.input() ? t.value = T.val() : h.is.form() || (t.text = T.text())), t;
          }, event: function () {
            return e.isWindow(P) || "now" == v.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == v.on ? T.is("input") ? P.oninput !== i ? "input" : P.onpropertychange !== i ? "propertychange" : "keyup" : T.is("form") ? "submit" : "click" : v.on;
          }, templatedURL: function (e) {
            if (e = e || T.data(y.action) || v.action || !1, m = T.data(y.url) || v.url || !1) return h.debug("Using specified url", m), m;if (e) {
              if (h.debug("Looking up url for action", e, v.api), v.api[e] === i && !h.is.mocked()) return void h.error(C.missingAction, v.action, v.api);m = v.api[e];
            } else h.is.form() && (m = T.attr("action") || R.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", m));return m;
          } }, abort: function () {
          var e = h.get.xhr();e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort());
        }, reset: function () {
          h.remove.error(), h.remove.loading();
        }, setting: function (t, n) {
          if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];h[t] = n;
          }
        }, debug: function () {
          !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)));
        }, verbose: function () {
          !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)));
        }, error: function () {
          v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500);
          }, display: function () {
            var t = v.name + ":",
                n = 0;s = !1, clearTimeout(h.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, n, a) {
          var r,
              s,
              l,
              c = F;return n = n || d, a = P || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (h.error(C.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, u ? (F === i && h.initialize(), h.invoke(c)) : (F !== i && F.invoke("destroy"), h.initialize());
    }), o !== i ? o : this;
  }, e.api.settings = { name: "API", namespace: "api", debug: !1, verbose: !1, performance: !0, api: {}, cache: !0, interruptRequests: !0, on: "auto", stateContext: !1, loadingDuration: 0, hideError: "auto", errorDuration: 2e3, encodeParameters: !0, action: !1, url: !1, base: "", urlData: {}, defaultData: !0, serializeForm: !1, throttle: 0, throttleFirstRequest: !0, method: "get", data: {}, dataType: "json", mockResponse: !1, mockResponseAsync: !1, response: !1, responseAsync: !1, beforeSend: function (e) {
      return e;
    }, beforeXHR: function (e) {}, onRequest: function (e, t) {}, onResponse: !1, onSuccess: function (e, t) {}, onComplete: function (e, t) {}, onFailure: function (e, t) {}, onError: function (e, t) {}, onAbort: function (e, t) {}, successTest: !1, error: { beforeSend: "The before send function has aborted the request", error: "There was an error with your request", exitConditions: "API Request Aborted. Exit conditions met", JSONParse: "JSON could not be parsed during error handling", legacyParameters: "You are using legacy API success callback names", method: "The method you called is not defined", missingAction: "API action used but no url was defined", missingSerialize: "jquery-serialize-object is required to add form data to an existing data object", missingURL: "No URL specified for api event", noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.", noStorage: "Caching responses locally requires session storage", parseError: "There was an error parsing your request", requiredParameter: "Missing a required URL parameter: ", statusMessage: "Server gave an error: ", timeout: "Your request timed out" }, regExp: { required: /\{\$*[A-z0-9]+\}/g, optional: /\{\/\$*[A-z0-9]+\}/g }, className: { loading: "loading", error: "error" }, selector: { disabled: ".disabled", form: "form" }, metadata: { action: "action", url: "url" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.state = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = (n.documentElement, new Date().getTime()),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var n,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
          m = f.error,
          g = f.metadata,
          p = f.className,
          h = f.namespace,
          v = f.states,
          b = f.text,
          y = "." + h,
          x = h + "-module",
          C = e(this),
          w = this,
          S = C.data(x);n = { initialize: function () {
          n.verbose("Initializing module"), f.automatic && n.add.defaults(), f.context && "" !== r ? e(f.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : C.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate();
        }, instantiate: function () {
          n.verbose("Storing instance of module", n), S = n, C.data(x, n);
        }, destroy: function () {
          n.verbose("Destroying previous module", S), C.off(y).removeData(x);
        }, refresh: function () {
          n.verbose("Refreshing selector cache"), C = e(w);
        }, add: { defaults: function () {
            var o = t && e.isPlainObject(t.states) ? t.states : {};e.each(f.defaults, function (t, a) {
              n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, w), e.extend(f.states, a, o));
            });
          } }, is: { active: function () {
            return C.hasClass(p.active);
          }, loading: function () {
            return C.hasClass(p.loading);
          }, inactive: function () {
            return !C.hasClass(p.active);
          }, state: function (e) {
            return p[e] !== i && C.hasClass(p[e]);
          }, enabled: function () {
            return !C.is(f.filter.active);
          }, disabled: function () {
            return C.is(f.filter.active);
          }, textEnabled: function () {
            return !C.is(f.filter.text);
          }, button: function () {
            return C.is(".button:not(a, .submit)");
          }, input: function () {
            return C.is("input");
          }, progress: function () {
            return C.is(".ui.progress");
          } }, allow: function (e) {
          n.debug("Now allowing state", e), v[e] = !0;
        }, disallow: function (e) {
          n.debug("No longer allowing", e), v[e] = !1;
        }, allows: function (e) {
          return v[e] || !1;
        }, enable: function () {
          C.removeClass(p.disabled);
        }, disable: function () {
          C.addClass(p.disabled);
        }, setState: function (e) {
          n.allows(e) && C.addClass(p[e]);
        }, removeState: function (e) {
          n.allows(e) && C.removeClass(p[e]);
        }, toggle: { state: function () {
            var t;if (n.allows("active") && n.is.enabled()) {
              if (n.refresh(), e.fn.api !== i) if (t = C.api("get request"), C.api("was cancelled")) n.debug("API Request cancelled by beforesend"), f.activateTest = function () {
                return !1;
              }, f.deactivateTest = function () {
                return !1;
              };else if (t) return void n.listenTo(t);n.change.state();
            }
          } }, listenTo: function (t) {
          n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function () {
            "resolved" == t.state() ? (n.debug("API request succeeded"), f.activateTest = function () {
              return !0;
            }, f.deactivateTest = function () {
              return !0;
            }) : (n.debug("API request failed"), f.activateTest = function () {
              return !1;
            }, f.deactivateTest = function () {
              return !1;
            }), n.change.state();
          }));
        }, change: { state: function () {
            n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), f.sync && n.sync(), f.onChange.call(w);
          }, text: function () {
            n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)));
          } }, activate: function () {
          f.activateTest.call(w) && (n.debug("Setting state to active"), C.addClass(p.active), n.update.text(b.active), f.onActivate.call(w));
        }, deactivate: function () {
          f.deactivateTest.call(w) && (n.debug("Setting state to inactive"), C.removeClass(p.active), n.update.text(b.inactive), f.onDeactivate.call(w));
        }, sync: function () {
          n.verbose("Syncing other buttons to current state"), n.is.active() ? a.not(C).state("activate") : a.not(C).state("deactivate");
        }, get: { text: function () {
            return f.selector.text ? C.find(f.selector.text).text() : C.html();
          }, textFor: function (e) {
            return b[e] || !1;
          } }, flash: { text: function (e, t, i) {
            var o = n.get.text();n.debug("Flashing text message", e, t), e = e || f.text.flash, t = t || f.flashDuration, i = i || function () {}, n.update.text(e), setTimeout(function () {
              n.update.text(o), i.call(w);
            }, t);
          } }, reset: { text: function () {
            var e = b.active || C.data(g.storedText),
                t = b.inactive || C.data(g.storedText);n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)));
          } }, update: { text: function (e) {
            var t = n.get.text();e && e !== t ? (n.debug("Updating text", e), f.selector.text ? C.data(g.storedText, e).find(f.selector.text).text(e) : C.data(g.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e);
          } }, setting: function (t, o) {
          if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (o === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], o) : f[t] = o;
          }
        }, internal: function (t, o) {
          if (e.isPlainObject(t)) e.extend(!0, n, t);else {
            if (o === i) return n[t];n[t] = o;
          }
        }, debug: function () {
          !f.silent && f.debug && (f.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), n.debug.apply(console, arguments)));
        }, verbose: function () {
          !f.silent && f.verbose && f.debug && (f.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), n.verbose.apply(console, arguments)));
        }, error: function () {
          f.silent || (n.error = Function.prototype.bind.call(console.error, console, f.name + ":"), n.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, i;f.performance && (i = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: w, "Execution Time": i })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500);
          }, display: function () {
            var t = f.name + ":",
                o = 0;s = !1, clearTimeout(n.performance.timer), e.each(l, function (e, t) {
              o += t["Execution Time"];
            }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function (t, a, r) {
          var s,
              l,
              c,
              u = S;return a = a || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (o, a) {
            var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;if (e.isPlainObject(u[r]) && o != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (l = u[a], !1) : (n.error(m.method, t), !1);u = u[a];
            }
          })), e.isFunction(l) ? c = l.apply(r, a) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (S === i && n.initialize(), n.invoke(c)) : (S !== i && S.invoke("destroy"), n.initialize());
    }), o !== i ? o : this;
  }, e.fn.state.settings = { name: "State", debug: !1, verbose: !1, namespace: "state", performance: !0, onActivate: function () {}, onDeactivate: function () {}, onChange: function () {}, activateTest: function () {
      return !0;
    }, deactivateTest: function () {
      return !0;
    }, automatic: !0, sync: !1, flashDuration: 1e3, filter: { text: ".loading, .disabled", active: ".disabled" }, context: !1, error: { beforeSend: "The before send function has cancelled state change", method: "The method you called is not defined." }, metadata: { promise: "promise", storedText: "stored-text" }, className: { active: "active", disabled: "disabled", error: "error", loading: "loading", success: "success", warning: "warning" }, selector: { text: !1 }, defaults: { input: { disabled: !0, loading: !0, active: !0 }, button: { disabled: !0, loading: !0, active: !0 }, progress: { active: !0, success: !0, warning: !0, error: !0 } }, states: { active: !0, disabled: !0, error: !0, loading: !0, success: !0, warning: !0 }, text: { disabled: !1, flash: !1, hover: !1, active: !1, inactive: !1, activate: !1, deactivate: !1 } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.visibility = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1),
        m = r.length,
        g = 0;return r.each(function () {
      var r,
          p,
          h,
          v,
          b = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
          y = b.className,
          x = b.namespace,
          C = b.error,
          w = b.metadata,
          S = "." + x,
          k = "module-" + x,
          T = e(t),
          A = e(this),
          R = e(b.context),
          P = (A.selector, A.data(k)),
          E = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          F = this,
          O = !1;v = { initialize: function () {
          v.debug("Initializing", b), v.setup.cache(), v.should.trackChanges() && ("image" == b.type && v.setup.image(), "fixed" == b.type && v.setup.fixed(), b.observeChanges && v.observeChanges(), v.bind.events()), v.save.position(), v.is.visible() || v.error(C.visible, A), b.initialCheck && v.checkVisibility(), v.instantiate();
        }, instantiate: function () {
          v.debug("Storing instance", v), A.data(k, v), P = v;
        }, destroy: function () {
          v.verbose("Destroying previous module"), h && h.disconnect(), p && p.disconnect(), T.off("load" + S, v.event.load).off("resize" + S, v.event.resize), R.off("scroll" + S, v.event.scroll).off("scrollchange" + S, v.event.scrollchange), "fixed" == b.type && (v.resetFixed(), v.remove.placeholder()), A.off(S).removeData(k);
        }, observeChanges: function () {
          "MutationObserver" in t && (p = new MutationObserver(v.event.contextChanged), h = new MutationObserver(v.event.changed), p.observe(n, { childList: !0, subtree: !0 }), h.observe(F, { childList: !0, subtree: !0 }), v.debug("Setting up mutation observer", h));
        }, bind: { events: function () {
            v.verbose("Binding visibility events to scroll and resize"), b.refreshOnLoad && T.on("load" + S, v.event.load), T.on("resize" + S, v.event.resize), R.off("scroll" + S).on("scroll" + S, v.event.scroll).on("scrollchange" + S, v.event.scrollchange);
          } }, event: { changed: function (e) {
            v.verbose("DOM tree modified, updating visibility calculations"), v.timer = setTimeout(function () {
              v.verbose("DOM tree modified, updating sticky menu"), v.refresh();
            }, 100);
          }, contextChanged: function (t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == F || e(t).find(F).length > 0) && (v.debug("Element removed from DOM, tearing down events"), v.destroy());
              });
            });
          }, resize: function () {
            v.debug("Window resized"), b.refreshOnResize && E(v.refresh);
          }, load: function () {
            v.debug("Page finished loading"), E(v.refresh);
          }, scroll: function () {
            b.throttle ? (clearTimeout(v.timer), v.timer = setTimeout(function () {
              R.triggerHandler("scrollchange" + S, [R.scrollTop()]);
            }, b.throttle)) : E(function () {
              R.triggerHandler("scrollchange" + S, [R.scrollTop()]);
            });
          }, scrollchange: function (e, t) {
            v.checkVisibility(t);
          } }, precache: function (t, i) {
          t instanceof Array || (t = [t]);for (var o = t.length, a = 0, r = [], s = n.createElement("img"), l = function () {
            ++a >= t.length && e.isFunction(i) && i();
          }; o--;) (s = n.createElement("img")).onload = l, s.onerror = l, s.src = t[o], r.push(s);
        }, enableCallbacks: function () {
          v.debug("Allowing callbacks to occur"), O = !1;
        }, disableCallbacks: function () {
          v.debug("Disabling all callbacks temporarily"), O = !0;
        }, should: { trackChanges: function () {
            return d ? (v.debug("One time query, no need to bind events"), !1) : (v.debug("Callbacks being attached"), !0);
          } }, setup: { cache: function () {
            v.cache = { occurred: {}, screen: {}, element: {} };
          }, image: function () {
            var e = A.data(w.src);e && (v.verbose("Lazy loading image", e), b.once = !0, b.observeChanges = !1, b.onOnScreen = function () {
              v.debug("Image on screen", F), v.precache(e, function () {
                v.set.image(e, function () {
                  ++g == m && b.onAllLoaded.call(this), b.onLoad.call(this);
                });
              });
            });
          }, fixed: function () {
            v.debug("Setting up fixed"), b.once = !1, b.observeChanges = !1, b.initialCheck = !0, b.refreshOnLoad = !0, o.transition || (b.transition = !1), v.create.placeholder(), v.debug("Added placeholder", r), b.onTopPassed = function () {
              v.debug("Element passed, adding fixed position", A), v.show.placeholder(), v.set.fixed(), b.transition && e.fn.transition !== i && A.transition(b.transition, b.duration);
            }, b.onTopPassedReverse = function () {
              v.debug("Element returned to position, removing fixed", A), v.hide.placeholder(), v.remove.fixed();
            };
          } }, create: { placeholder: function () {
            v.verbose("Creating fixed position placeholder"), r = A.clone(!1).css("display", "none").addClass(y.placeholder).insertAfter(A);
          } }, show: { placeholder: function () {
            v.verbose("Showing placeholder"), r.css("display", "block").css("visibility", "hidden");
          } }, hide: { placeholder: function () {
            v.verbose("Hiding placeholder"), r.css("display", "none").css("visibility", "");
          } }, set: { fixed: function () {
            v.verbose("Setting element to fixed position"), A.addClass(y.fixed).css({ position: "fixed", top: b.offset + "px", left: "auto", zIndex: b.zIndex }), b.onFixed.call(F);
          }, image: function (t, n) {
            if (A.attr("src", t), b.transition) {
              if (e.fn.transition !== i) {
                if (A.hasClass(y.visible)) return void v.debug("Transition already occurred on this image, skipping animation");A.transition(b.transition, b.duration, n);
              } else A.fadeIn(b.duration, n);
            } else A.show();
          } }, is: { onScreen: function () {
            return v.get.elementCalculations().onScreen;
          }, offScreen: function () {
            return v.get.elementCalculations().offScreen;
          }, visible: function () {
            return !(!v.cache || !v.cache.element) && !(0 === v.cache.element.width && 0 === v.cache.element.offset.top);
          }, verticallyScrollableContext: function () {
            var e = R.get(0) !== t && R.css("overflow-y");return "auto" == e || "scroll" == e;
          }, horizontallyScrollableContext: function () {
            var e = R.get(0) !== t && R.css("overflow-x");return "auto" == e || "scroll" == e;
          } }, refresh: function () {
          v.debug("Refreshing constants (width/height)"), "fixed" == b.type && v.resetFixed(), v.reset(), v.save.position(), b.checkOnRefresh && v.checkVisibility(), b.onRefresh.call(F);
        }, resetFixed: function () {
          v.remove.fixed(), v.remove.occurred();
        }, reset: function () {
          v.verbose("Resetting all cached values"), e.isPlainObject(v.cache) && (v.cache.screen = {}, v.cache.element = {});
        }, checkVisibility: function (e) {
          v.verbose("Checking visibility of element", v.cache.element), !O && v.is.visible() && (v.save.scroll(e), v.save.calculations(), v.passed(), v.passingReverse(), v.topVisibleReverse(), v.bottomVisibleReverse(), v.topPassedReverse(), v.bottomPassedReverse(), v.onScreen(), v.offScreen(), v.passing(), v.topVisible(), v.bottomVisible(), v.topPassed(), v.bottomPassed(), b.onUpdate && b.onUpdate.call(F, v.get.elementCalculations()));
        }, passed: function (t, n) {
          var o = v.get.elementCalculations();if (t && n) b.onPassed[t] = n;else {
            if (t !== i) return v.get.pixelsPassed(t) > o.pixelsPassed;o.passing && e.each(b.onPassed, function (e, t) {
              o.bottomVisible || o.pixelsPassed > v.get.pixelsPassed(e) ? v.execute(t, e) : b.once || v.remove.occurred(t);
            });
          }
        }, onScreen: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onOnScreen,
              o = "onScreen";if (e && (v.debug("Adding callback for onScreen", e), b.onOnScreen = e), t.onScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOnScreen;
        }, offScreen: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onOffScreen,
              o = "offScreen";if (e && (v.debug("Adding callback for offScreen", e), b.onOffScreen = e), t.offScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOffScreen;
        }, passing: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onPassing,
              o = "passing";if (e && (v.debug("Adding callback for passing", e), b.onPassing = e), t.passing ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.passing;
        }, topVisible: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopVisible,
              o = "topVisible";if (e && (v.debug("Adding callback for top visible", e), b.onTopVisible = e), t.topVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topVisible;
        }, bottomVisible: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomVisible,
              o = "bottomVisible";if (e && (v.debug("Adding callback for bottom visible", e), b.onBottomVisible = e), t.bottomVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomVisible;
        }, topPassed: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopPassed,
              o = "topPassed";if (e && (v.debug("Adding callback for top passed", e), b.onTopPassed = e), t.topPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topPassed;
        }, bottomPassed: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomPassed,
              o = "bottomPassed";if (e && (v.debug("Adding callback for bottom passed", e), b.onBottomPassed = e), t.bottomPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomPassed;
        }, passingReverse: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onPassingReverse,
              o = "passingReverse";if (e && (v.debug("Adding callback for passing reverse", e), b.onPassingReverse = e), t.passing ? b.once || v.remove.occurred(o) : v.get.occurred("passing") && v.execute(n, o), e !== i) return !t.passing;
        }, topVisibleReverse: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopVisibleReverse,
              o = "topVisibleReverse";if (e && (v.debug("Adding callback for top visible reverse", e), b.onTopVisibleReverse = e), t.topVisible ? b.once || v.remove.occurred(o) : v.get.occurred("topVisible") && v.execute(n, o), e === i) return !t.topVisible;
        }, bottomVisibleReverse: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomVisibleReverse,
              o = "bottomVisibleReverse";if (e && (v.debug("Adding callback for bottom visible reverse", e), b.onBottomVisibleReverse = e), t.bottomVisible ? b.once || v.remove.occurred(o) : v.get.occurred("bottomVisible") && v.execute(n, o), e === i) return !t.bottomVisible;
        }, topPassedReverse: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopPassedReverse,
              o = "topPassedReverse";if (e && (v.debug("Adding callback for top passed reverse", e), b.onTopPassedReverse = e), t.topPassed ? b.once || v.remove.occurred(o) : v.get.occurred("topPassed") && v.execute(n, o), e === i) return !t.onTopPassed;
        }, bottomPassedReverse: function (e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomPassedReverse,
              o = "bottomPassedReverse";if (e && (v.debug("Adding callback for bottom passed reverse", e), b.onBottomPassedReverse = e), t.bottomPassed ? b.once || v.remove.occurred(o) : v.get.occurred("bottomPassed") && v.execute(n, o), e === i) return !t.bottomPassed;
        }, execute: function (e, t) {
          var n = v.get.elementCalculations(),
              i = v.get.screenCalculations();(e = e || !1) && (b.continuous ? (v.debug("Callback being called continuously", t, n), e.call(F, n, i)) : v.get.occurred(t) || (v.debug("Conditions met", t, n), e.call(F, n, i))), v.save.occurred(t);
        }, remove: { fixed: function () {
            v.debug("Removing fixed position"), A.removeClass(y.fixed).css({ position: "", top: "", left: "", zIndex: "" }), b.onUnfixed.call(F);
          }, placeholder: function () {
            v.debug("Removing placeholder content"), r && r.remove();
          }, occurred: function (e) {
            if (e) {
              var t = v.cache.occurred;t[e] !== i && !0 === t[e] && (v.debug("Callback can now be called again", e), v.cache.occurred[e] = !1);
            } else v.cache.occurred = {};
          } }, save: { calculations: function () {
            v.verbose("Saving all calculations necessary to determine positioning"), v.save.direction(), v.save.screenCalculations(), v.save.elementCalculations();
          }, occurred: function (e) {
            e && (v.cache.occurred[e] !== i && !0 === v.cache.occurred[e] || (v.verbose("Saving callback occurred", e), v.cache.occurred[e] = !0));
          }, scroll: function (e) {
            e = e + b.offset || R.scrollTop() + b.offset, v.cache.scroll = e;
          }, direction: function () {
            var e,
                t = v.get.scroll(),
                n = v.get.lastScroll();return e = t > n && n ? "down" : t < n && n ? "up" : "static", v.cache.direction = e, v.cache.direction;
          }, elementPosition: function () {
            var e = v.cache.element,
                t = v.get.screenSize();return v.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = A.offset(), e.width = A.outerWidth(), e.height = A.outerHeight(), v.is.verticallyScrollableContext() && (e.offset.top += R.scrollTop() - R.offset().top), v.is.horizontallyScrollableContext() && (e.offset.left += R.scrollLeft - R.offset().left), v.cache.element = e, e;
          }, elementCalculations: function () {
            var e = v.get.screenCalculations(),
                t = v.get.elementPosition();return b.includeMargin ? (t.margin = {}, t.margin.top = parseInt(A.css("margin-top"), 10), t.margin.bottom = parseInt(A.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), v.cache.element = t, v.verbose("Updated element calculations", t), t;
          }, screenCalculations: function () {
            var e = v.get.scroll();return v.save.direction(), v.cache.screen.top = e, v.cache.screen.bottom = e + v.cache.screen.height, v.cache.screen;
          }, screenSize: function () {
            v.verbose("Saving window position"), v.cache.screen = { height: R.height() };
          }, position: function () {
            v.save.screenSize(), v.save.elementPosition();
          } }, get: { pixelsPassed: function (e) {
            var t = v.get.elementCalculations();return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10);
          }, occurred: function (e) {
            return v.cache.occurred !== i && v.cache.occurred[e] || !1;
          }, direction: function () {
            return v.cache.direction === i && v.save.direction(), v.cache.direction;
          }, elementPosition: function () {
            return v.cache.element === i && v.save.elementPosition(), v.cache.element;
          }, elementCalculations: function () {
            return v.cache.element === i && v.save.elementCalculations(), v.cache.element;
          }, screenCalculations: function () {
            return v.cache.screen === i && v.save.screenCalculations(), v.cache.screen;
          }, screenSize: function () {
            return v.cache.screen === i && v.save.screenSize(), v.cache.screen;
          }, scroll: function () {
            return v.cache.scroll === i && v.save.scroll(), v.cache.scroll;
          }, lastScroll: function () {
            return v.cache.screen === i ? (v.debug("First scroll event, no last scroll could be found"), !1) : v.cache.screen.top;
          } }, setting: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, b, t);else {
            if (n === i) return b[t];b[t] = n;
          }
        }, internal: function (t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, debug: function () {
          !b.silent && b.debug && (b.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), v.debug.apply(console, arguments)));
        }, verbose: function () {
          !b.silent && b.verbose && b.debug && (b.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), v.verbose.apply(console, arguments)));
        }, error: function () {
          b.silent || (v.error = Function.prototype.bind.call(console.error, console, b.name + ":"), v.error.apply(console, arguments));
        }, performance: { log: function (e) {
            var t, n;b.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: F, "Execution Time": n })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500);
          }, display: function () {
            var t = b.name + ":",
                n = 0;l = !1, clearTimeout(v.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function (t, n, o) {
          var r,
              s,
              l,
              c = P;return n = n || f, o = F || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (v.error(C.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (P === i && v.initialize(), P.save.scroll(), P.save.calculations(), v.invoke(u)) : (P !== i && P.invoke("destroy"), v.initialize());
    }), a !== i ? a : this;
  }, e.fn.visibility.settings = { name: "Visibility", namespace: "visibility", debug: !1, verbose: !1, performance: !0, observeChanges: !0, initialCheck: !0, refreshOnLoad: !0, refreshOnResize: !0, checkOnRefresh: !0, once: !0, continuous: !1, offset: 0, includeMargin: !1, context: t, throttle: !1, type: !1, zIndex: "10", transition: "fade in", duration: 1e3, onPassed: {}, onOnScreen: !1, onOffScreen: !1, onPassing: !1, onTopVisible: !1, onBottomVisible: !1, onTopPassed: !1, onBottomPassed: !1, onPassingReverse: !1, onTopVisibleReverse: !1, onBottomVisibleReverse: !1, onTopPassedReverse: !1, onBottomPassedReverse: !1, onLoad: function () {}, onAllLoaded: function () {}, onFixed: function () {}, onUnfixed: function () {}, onUpdate: !1, onRefresh: function () {}, metadata: { src: "src" }, className: { fixed: "fixed", placeholder: "placeholder", visible: "visible" }, error: { method: "The method you called is not defined.", visible: "Element is hidden, you must call refresh after element becomes visible" } };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showParagraph;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scroll_into_view__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scroll_into_view__);


// get query string from window.location unless the arg 'qString' is not
// null, in that case it represents the query string
function getQueryString(key, qString) {
  let queryString;

  if (qString) {
    queryString = qString.substring(1);
  } else {
    queryString = window.location.search.substring(1);
  }
  let vars = queryString.split("&");

  for (let i = 0; i < vars.length; i++) {
    let getValue = vars[i].split("=");
    if (getValue[0] === key) {
      return getValue[1];
    }
  }
  return null;
}

/*
  Check for url query string requesting to scroll given paragraph into view
  Syntax: ?v=pid, example: ?v=p20

  Scroll paragraph 20 into view on page load
*/
function showParagraph() {
  let pId = getQueryString("v");
  if (pId) {
    __WEBPACK_IMPORTED_MODULE_0_scroll_into_view___default()(document.getElementById(pId), { align: { top: 0.2 } });
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var engine = __webpack_require__(120)

var storages = __webpack_require__(121)
var plugins = [__webpack_require__(128)]

module.exports = engine.createStore(storages, plugins)


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(17)
var slice = util.slice
var pluck = util.pluck
var each = util.each
var bind = util.bind
var create = util.create
var isList = util.isList
var isFunction = util.isFunction
var isObject = util.isObject

module.exports = {
	createStore: createStore
}

var storeAPI = {
	version: '2.0.12',
	enabled: false,
	
	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this.storage.read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this.storage.write(this._namespacePrefix + key, this._serialize(value))
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this.storage.remove(this._namespacePrefix + key)
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this
		this.storage.each(function(val, namespacedKey) {
			callback.call(self, self._deserialize(val), (namespacedKey || '').replace(self._namespaceRegexp, ''))
		})
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this.storage.clearAll()
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function() {
		return createStore.apply(this, arguments)
	},
	
	addPlugin: function(plugin) {
		this._addPlugin(plugin)
	},
	
	namespace: function(namespace) {
		return createStore(this.storage, this.plugins, namespace)
	}
}

function _warn() {
	var _console = (typeof console == 'undefined' ? null : console)
	if (!_console) { return }
	var fn = (_console.warn ? _console.warn : _console.log)
	fn.apply(_console, arguments)
}

function createStore(storages, plugins, namespace) {
	if (!namespace) {
		namespace = ''
	}
	if (storages && !isList(storages)) {
		storages = [storages]
	}
	if (plugins && !isList(plugins)) {
		plugins = [plugins]
	}

	var namespacePrefix = (namespace ? '__storejs_'+namespace+'_' : '')
	var namespaceRegexp = (namespace ? new RegExp('^'+namespacePrefix) : null)
	var legalNamespaces = /^[a-zA-Z0-9_\-]*$/ // alpha-numeric + underscore and dash
	if (!legalNamespaces.test(namespace)) {
		throw new Error('store.js namespaces can only have alphanumerics + underscores and dashes')
	}
	
	var _privateStoreProps = {
		_namespacePrefix: namespacePrefix,
		_namespaceRegexp: namespaceRegexp,

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__'
				storage.write(testStr, testStr)
				var ok = (storage.read(testStr) === testStr)
				storage.remove(testStr)
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName]
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0)
				var self = this

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each(arguments, function(arg, i) {
						args[i] = arg
					})
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args)

				return pluginFnProp.apply(self, newFnArgs)
			}
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = ''
			try { val = JSON.parse(strVal) }
			catch(e) { val = strVal }

			return (val !== undefined ? val : defaultVal)
		},
		
		_addStorage: function(storage) {
			if (this.enabled) { return }
			if (this._testStorage(storage)) {
				this.storage = storage
				this.enabled = true
			}
		},

		_addPlugin: function(plugin) {
			var self = this

			// If the plugin is an array, then add all plugins in the array.
			// This allows for a plugin to depend on other plugins.
			if (isList(plugin)) {
				each(plugin, function(plugin) {
					self._addPlugin(plugin)
				})
				return
			}

			// Keep track of all plugins we've seen so far, so that we
			// don't add any of them twice.
			var seenPlugin = pluck(this.plugins, function(seenPlugin) {
				return (plugin === seenPlugin)
			})
			if (seenPlugin) {
				return
			}
			this.plugins.push(plugin)

			// Check that the plugin is properly formed
			if (!isFunction(plugin)) {
				throw new Error('Plugins must be function values that return objects')
			}

			var pluginProperties = plugin.call(this)
			if (!isObject(pluginProperties)) {
				throw new Error('Plugins must return an object of function properties')
			}

			// Add the plugin function properties to this store instance.
			each(pluginProperties, function(pluginFnProp, propName) {
				if (!isFunction(pluginFnProp)) {
					throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
				}
				self._assignPluginFnProp(pluginFnProp, propName)
			})
		},
		
		// Put deprecated properties in the private API, so as to not expose it to accidential
		// discovery through inspection of the store object.
		
		// Deprecated: addStorage
		addStorage: function(storage) {
			_warn('store.addStorage(storage) is deprecated. Use createStore([storages])')
			this._addStorage(storage)
		}
	}

	var store = create(_privateStoreProps, storeAPI, {
		plugins: []
	})
	store.raw = {}
	each(store, function(prop, propName) {
		if (isFunction(prop)) {
			store.raw[propName] = bind(store, prop)			
		}
	})
	each(storages, function(storage) {
		store._addStorage(storage)
	})
	each(plugins, function(plugin) {
		store._addPlugin(plugin)
	})
	return store
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
	// Listed in order of usage preference
	__webpack_require__(122),
	__webpack_require__(123),
	__webpack_require__(124),
	__webpack_require__(125),
	__webpack_require__(126),
	__webpack_require__(127)
]


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(17)
var Global = util.Global

module.exports = {
	name: 'localStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function localStorage() {
	return Global.localStorage
}

function read(key) {
	return localStorage().getItem(key)
}

function write(key, data) {
	return localStorage().setItem(key, data)
}

function each(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return localStorage().removeItem(key)
}

function clearAll() {
	return localStorage().clear()
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// oldFF-globalStorage provides storage for Firefox
// versions 6 and 7, where no localStorage, etc
// is available.

var util = __webpack_require__(17)
var Global = util.Global

module.exports = {
	name: 'oldFF-globalStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var globalStorage = Global.globalStorage

function read(key) {
	return globalStorage[key]
}

function write(key, data) {
	globalStorage[key] = data
}

function each(fn) {
	for (var i = globalStorage.length - 1; i >= 0; i--) {
		var key = globalStorage.key(i)
		fn(globalStorage[key], key)
	}
}

function remove(key) {
	return globalStorage.removeItem(key)
}

function clearAll() {
	each(function(key, _) {
		delete globalStorage[key]
	})
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// oldIE-userDataStorage provides storage for Internet Explorer
// versions 6 and 7, where no localStorage, sessionStorage, etc
// is available.

var util = __webpack_require__(17)
var Global = util.Global

module.exports = {
	name: 'oldIE-userDataStorage',
	write: write,
	read: read,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var storageName = 'storejs'
var doc = Global.document
var _withStorageEl = _makeIEStorageElFunction()
var disable = (Global.navigator ? Global.navigator.userAgent : '').match(/ (MSIE 8|MSIE 9|MSIE 10)\./) // MSIE 9.x, MSIE 10.x

function write(unfixedKey, data) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.setAttribute(fixedKey, data)
		storageEl.save(storageName)
	})
}

function read(unfixedKey) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	var res = null
	_withStorageEl(function(storageEl) {
		res = storageEl.getAttribute(fixedKey)
	})
	return res
}

function each(callback) {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		for (var i=attributes.length-1; i>=0; i--) {
			var attr = attributes[i]
			callback(storageEl.getAttribute(attr.name), attr.name)
		}
	})
}

function remove(unfixedKey) {
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.removeAttribute(fixedKey)
		storageEl.save(storageName)
	})
}

function clearAll() {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		storageEl.load(storageName)
		for (var i=attributes.length-1; i>=0; i--) {
			storageEl.removeAttribute(attributes[i].name)
		}
		storageEl.save(storageName)
	})
}

// Helpers
//////////

// In IE7, keys cannot start with a digit or contain certain chars.
// See https://github.com/marcuswestin/store.js/issues/40
// See https://github.com/marcuswestin/store.js/issues/83
var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
function fixKey(key) {
	return key.replace(/^\d/, '___$&').replace(forbiddenCharsRegex, '___')
}

function _makeIEStorageElFunction() {
	if (!doc || !doc.documentElement || !doc.documentElement.addBehavior) {
		return null
	}
	var scriptTag = 'script',
		storageOwner,
		storageContainer,
		storageEl

	// Since #userData storage applies only to specific paths, we need to
	// somehow link our data to a specific path.  We choose /favicon.ico
	// as a pretty safe option, since all browsers already make a request to
	// this URL anyway and being a 404 will not hurt us here.  We wrap an
	// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
	// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
	// since the iframe access rules appear to allow direct access and
	// manipulation of the document element, even for a 404 page.  This
	// document can be used instead of the current document (which would
	// have been limited to the current path) to perform #userData storage.
	try {
		/* global ActiveXObject */
		storageContainer = new ActiveXObject('htmlfile')
		storageContainer.open()
		storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
		storageContainer.close()
		storageOwner = storageContainer.w.frames[0].document
		storageEl = storageOwner.createElement('div')
	} catch(e) {
		// somehow ActiveXObject instantiation failed (perhaps some special
		// security settings or otherwse), fall back to per-path storage
		storageEl = doc.createElement('div')
		storageOwner = doc.body
	}

	return function(storeFunction) {
		var args = [].slice.call(arguments, 0)
		args.unshift(storageEl)
		// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
		// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
		storageOwner.appendChild(storageEl)
		storageEl.addBehavior('#default#userData')
		storageEl.load(storageName)
		storeFunction.apply(this, args)
		storageOwner.removeChild(storageEl)
		return
	}
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var util = __webpack_require__(17)
var Global = util.Global
var trim = util.trim

module.exports = {
	name: 'cookieStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var doc = Global.document

function read(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
	var cookies = doc.cookie.split(/; ?/g)
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=')
		var key = unescape(kvp[0])
		var val = unescape(kvp[1])
		callback(val, key)
	}
}

function write(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
	each(function(_, key) {
		remove(key)
	})
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(17)
var Global = util.Global

module.exports = {
	name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll
}

function sessionStorage() {
	return Global.sessionStorage
}

function read(key) {
	return sessionStorage().getItem(key)
}

function write(key, data) {
	return sessionStorage().setItem(key, data)
}

function each(fn) {
	for (var i = sessionStorage().length - 1; i >= 0; i--) {
		var key = sessionStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return sessionStorage().removeItem(key)
}

function clearAll() {
	return sessionStorage().clear()
}


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// memoryStorage is a useful last fallback to ensure that the store
// is functions (meaning store.get(), store.set(), etc will all function).
// However, stored values will not persist when the browser navigates to
// a new page or reloads the current page.

module.exports = {
	name: 'memoryStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var memoryStorage = {}

function read(key) {
	return memoryStorage[key]
}

function write(key, data) {
	memoryStorage[key] = data
}

function each(callback) {
	for (var key in memoryStorage) {
		if (memoryStorage.hasOwnProperty(key)) {
			callback(memoryStorage[key], key)
		}
	}
}

function remove(key) {
	delete memoryStorage[key]
}

function clearAll(key) {
	memoryStorage = {}
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = json2Plugin

function json2Plugin() {
	__webpack_require__(129)
	return {}
}


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/* eslint-disable */

//  json2.js
//  2016-10-28
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://www.JSON.org/js.html
//  This code should be minified before deployment.
//  See http://javascript.crockford.com/jsmin.html

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });

//          myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
//              var d;
//              if (typeof value === "string" &&
//                      value.slice(0, 5) === "Date(" &&
//                      value.slice(-1) === ")") {
//                  d = new Date(value.slice(5, -1));
//                  if (d) {
//                      return d;
//                  }
//              }
//              return value;
//          });

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
    eval, for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
                        f(this.getUTCMonth() + 1) + "-" +
                        f(this.getUTCDate()) + "T" +
                        f(this.getUTCHours()) + ":" +
                        f(this.getUTCMinutes()) + ":" +
                        f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
                typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case "string":
            return quote(value);

        case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value)
                ? String(value)
                : "null";

        case "boolean":
        case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

        case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

            if (!value) {
                return "null";
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? "[]"
                    : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? "{}"
                : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                    (typeof replacer !== "object" ||
                    typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                            ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var bind = __webpack_require__(73);
var Axios = __webpack_require__(133);
var defaults = __webpack_require__(40);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(77);
axios.CancelToken = __webpack_require__(147);
axios.isCancel = __webpack_require__(76);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(148);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(40);
var utils = __webpack_require__(4);
var InterceptorManager = __webpack_require__(142);
var dispatchRequest = __webpack_require__(143);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(75);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var transformData = __webpack_require__(144);
var isCancel = __webpack_require__(76);
var defaults = __webpack_require__(40);
var isAbsoluteURL = __webpack_require__(145);
var combineURLs = __webpack_require__(146);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(77);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
//bookmark modal
const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
const uiBookmarkToggle = ".bookmark-toggle";
//const uiBookmarkModalDiv = ".cmi-bookmark-list";

function initBookmarkModal() {
  $(uiBookmarkModal).modal({
    dimmerSettings: { opacity: uiModalOpacity }
  });

  $(uiOpenBookmarkModal).on("click", e => {
    e.preventDefault();

    //populateBookmarkModal(uiBookmarkModalDiv);
    $(uiBookmarkModal).modal("show");
  });
}

/*
 * Add bookmark icons to paragraphs on transcript pages
 * - this will not do anything when called on non-transcript
 *   pages
 */
function addBookMarkers() {
  $("p.cmiTranPara").each(function () {
    $(this).prepend("<i class='bkmark hide bookmark outline icon'></i>");
  });
}

/*
 * show/hide paragraph bookmarks
 *
 */
function createBookmarkToggle(selector) {
  $(selector).on("click", function () {
    $("p.cmiTranPara > i.bkmark").each(function () {
      if ($(this).hasClass("hide")) {
        $(this).removeClass("hide");
      } else {
        $(this).addClass("hide");
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  initialize: function () {
    addBookMarkers();
    initBookmarkModal();
    createBookmarkToggle(uiBookmarkToggle);
  }

});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
//search modal
const uiSearchModal = ".search.ui.modal";
const uiOpenSearchModal = ".search-modal-open";
const uiSearchForm = "#search";
const uiSearchSource = "#search .source";
const uiSearchString = "#search input";
const uiSearchInputIcon = "#search .ui.icon.input";
const uiModalOpacity = 0.5;

//search modal message box
const uiSearchMessage = ".ui.search.message";
const uiSearchMessageHeader = ".search-message.header";
const uiSearchMessageBody = ".search-message-body";

//search message id's
const SOURCE_NOT_SELECTED = Symbol("no_source");
const SOURCE_SELECTED = Symbol("source_selected");
const SEARCHING = Symbol("searching");
const SEARCH_RESULT = Symbol("search_result");
const SEARCH_ERROR = Symbol("search_error");
const SAVED_SEARCH = Symbol("saved_search");

function displaySearchMessage(msgId, arg1, arg2, arg3) {
  switch (msgId) {
    case SOURCE_NOT_SELECTED:
      $(uiSearchMessage).addClass("negative");
      $(uiSearchMessageHeader).text("Search Source Not Selected");
      $(uiSearchMessageBody).html("<p>You forgot to select a search source.</p>");
      break;
    case SOURCE_SELECTED:
      $(uiSearchMessage).removeClass("negative");
      $(uiSearchMessageHeader).text("Search Source");
      $(uiSearchMessageBody).html(`<p>Searching from <em>${arg1}</em></p>`);
      break;
    case SEARCHING:
      $(uiSearchInputIcon).addClass("loading");
      $(uiSearchString).attr("disabled", true);
      $(uiSearchMessage).addClass("purple");
      $(uiSearchMessageHeader).text("Search Started...");
      $(uiSearchMessageBody).html(`<p>Searching for <em>${arg2}</em></p>`);
      break;
    case SAVED_SEARCH:
      //arg1: source, arg2: query string, arg3: count
      $(uiSearchMessageHeader).text("Last Search Result");
      $(uiSearchMessageBody).html(`<p>Search for <em>${arg2}</em> from <em>${arg1}</em> found ${arg3} matches</p>`);
      break;
    case SEARCH_RESULT:
      $(uiSearchInputIcon).removeClass("loading");
      $(uiSearchString).attr("disabled", false);
      $(uiSearchMessage).removeClass("purple").removeClass("negative");

      //clear input only if matches were found
      if (arg3 > 0) {
        $(uiSearchString).val("");
      }

      $(uiSearchMessageHeader).text("Search Result");
      $(uiSearchMessageBody).html(`<p>Search for <em>${arg2}</em> found ${arg3} matches</p>`);
      break;
    case SEARCH_ERROR:
      $(uiSearchInputIcon).removeClass("loading");
      $(uiSearchString).attr("disabled", false);
      $(uiSearchMessage).removeClass("purple").addClass("negative");

      $(uiSearchMessageHeader).text("Search Error");
      $(uiSearchMessageBody).html(`<p>${arg1}</p>`);
      break;
    default:
      break;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  initialize: function () {

    //init sidebar search modal toggle and configure sidebar
    //to close automatically when modal is displayed
    $(uiSearchModal).modal({
      dimmerSettings: { opacity: uiModalOpacity },
      observeChanges: true
    });

    $(uiOpenSearchModal).on("click", e => {
      e.preventDefault();
      $(uiSearchModal).modal("show");
    });

    //Search Submit
    $(uiSearchForm).submit(function (e) {
      e.preventDefault();
      var searchSource = $(uiSearchSource).text();
      var searchString = $(uiSearchString).val();

      //ignore and return if search string is empty
      if (searchString.length === 0) {
        return;
      }

      //console.log("Search requested: source: %s, string: %s", searchSource, searchString);
      displaySearchMessage(SEARCHING, searchSource, searchString);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget__);
/*eslint no-console: "off" */


let userInfo;

/* harmony default export */ __webpack_exports__["a"] = ({

  initialize: function () {
    console.log("Init user authentication");

    /*
     * if user already logged in, change icon to log out
     */
    __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.on("init", user => {
      userInfo = user;
      if (userInfo) {
        console.log("netlify init: user %s logged in", userInfo.user_metadata.full_name);
        $(".login-menu-option > span").html("<i class='sign out icon'></i>").addClass("colorGreen").attr("data-tooltip", "Sign Out");
      }
    });

    __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.on("login", login => {
      console.log("netlify login: ", login);

      userInfo = login;
      $(".login-menu-option > span").html("<i class='sign out icon'></i>").addClass("colorGreen").attr("data-tooltip", "Sign Out");
    });

    __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.on("logout", () => {
      $(".login-menu-option > span").html("<i class='sign in icon'></i>").removeClass("colorGreen").attr("data-tooltip", "Sign In");
      console.log("logout: %s", userInfo.user_metadata.full_name);
      userInfo = null;
    });

    //user.on("error", () => console.error("Logged out"));
    //user.on('open', () => console.log("Widget opened"));
    //user.on('close', () => console.log("Widget closed"));

    $(".login-menu-option").on("click", e => {
      e.preventDefault();

      if (userInfo) {
        __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.logout();
      } else {
        __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.open();
      }
    });

    //init authentication
    __WEBPACK_IMPORTED_MODULE_0_netlify_identity_widget___default.a.init({
      //container: "#netlify-modal"
    });
  },

  getUserInfo: function () {
    if (userInfo) {
      return {
        email: userInfo.email,
        name: userInfo.user_metadata.full_name,
        roles: userInfo.app_metadata.roles,
        avatar_url: userInfo.user_metadata.avatar_url
      };
    }

    return null;
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.netlifyIdentity=t():e.netlifyIdentity=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t){"use strict";function n(){}function r(e,t){var r,o,i,a,s=U;for(a=arguments.length;a-- >2;)S.push(arguments[a]);for(t&&null!=t.children&&(S.length||S.push(t.children),delete t.children);S.length;)if((o=S.pop())&&void 0!==o.pop)for(a=o.length;a--;)S.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?s[s.length-1]+=o:s===U?s=[o]:s.push(o),r=i;var u=new n;return u.nodeName=e,u.children=s,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==A.vnode&&A.vnode(u),u}function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){return r(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==_.push(e)&&(A.debounceRendering||C)(s)}function s(){var e,t=_;for(_=[];e=t.pop();)e._dirty&&m(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function M(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":k(r))){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===Q.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,N,a):e.removeEventListener(t,N,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)y(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e,t,n){try{e[t]=n}catch(e){}}function N(e){return this._listeners[e.type](A.event&&A.event(e)||e)}function g(){for(var e;e=Y.pop();)A.afterMount&&A.afterMount(e),e.componentDidMount&&e.componentDidMount()}function d(e,t,n,r,o,i){P++||(B=null!=o&&void 0!==o.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var a=D(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--P||(R=!1,i||g()),a}function D(e,t,n,r,o){var i=e,a=B;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),h(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return I(e,t,n,r);if(B="svg"===s||"foreignObject"!==s&&B,s+="",(!e||!c(e,s))&&(i=l(s,B),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),h(e,!0)}var u=i.firstChild,M=i.__preactattr_,p=t.children;if(null==M){M=i.__preactattr_={};for(var f=i.attributes,y=f.length;y--;)M[f[y].name]=f[y].value}return!R&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&j(i,p,n,r,R||null!=M.dangerouslySetInnerHTML),z(i,t.attributes,M),B=a,i}function j(e,t,n,r,o){var i,a,s,c,M,l=e.childNodes,f=[],y={},N=0,g=0,d=l.length,j=0,T=t?t.length:0;if(0!==d)for(var z=0;d>z;z++){var b=l[z],w=b.__preactattr_,v=T&&w?b._component?b._component.__key:w.key:null;null!=v?(N++,y[v]=b):(w||(void 0!==b.splitText?!o||b.nodeValue.trim():o))&&(f[j++]=b)}if(0!==T)for(var z=0;T>z;z++){c=t[z],M=null;var v=c.key;if(null!=v)N&&void 0!==y[v]&&(M=y[v],y[v]=void 0,N--);else if(!M&&j>g)for(i=g;j>i;i++)if(void 0!==f[i]&&u(a=f[i],c,o)){M=a,f[i]=void 0,i===j-1&&j--,i===g&&g++;break}M=D(M,c,n,r),s=l[z],M&&M!==e&&M!==s&&(null==s?e.appendChild(M):M===s.nextSibling?p(s):e.insertBefore(M,s))}if(N)for(var z in y)void 0!==y[z]&&h(y[z],!1);for(;j>=g;)void 0!==(M=f[j--])&&h(M,!1)}function h(e,t){var n=e._component;n?O(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),T(e))}function T(e){for(e=e.lastChild;e;){var t=e.previousSibling;h(e,!0),e=t}}function z(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||f(e,r,n[r],n[r]=void 0,B);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||f(e,r,n[r],n[r]=t[r],B)}function b(e){var t=e.constructor.name;(G[t]||(G[t]=[])).push(e)}function w(e,t,n){var r,o=G[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):(r=new E(t,n),r.constructor=e,r.render=v),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function v(e,t,n){return this.constructor(e,n)}function x(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===A.syncComponentUpdates&&e.base?a(e):m(e,1,o)),e.__ref&&e.__ref(e))}function m(e,t,n,r){if(!e._disable){var i,a,s,u=e.props,c=e.state,l=e.context,p=e.prevProps||u,f=e.prevState||c,y=e.prevContext||l,N=e.base,D=e.nextBase,j=N||D,T=e._component,z=!1;if(N&&(e.props=p,e.state=f,e.context=y,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,l)?z=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,l),e.props=u,e.state=c,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!z){i=e.render(u,c,l),e.getChildContext&&(l=o(o({},l),e.getChildContext()));var b,v,I=i&&i.nodeName;if("function"==typeof I){var E=M(i);a=T,a&&a.constructor===I&&E.key==a.__key?x(a,E,1,l,!1):(b=a,e._component=a=w(I,E,l),a.nextBase=a.nextBase||D,a._parentComponent=e,x(a,E,0,l,!1),m(a,1,n,!0)),v=a.base}else s=j,b=T,b&&(s=e._component=null),(j||1===t)&&(s&&(s._component=null),v=d(s,i,l,n||!N,j&&j.parentNode,!0));if(j&&v!==j&&a!==T){var L=j.parentNode;L&&v!==L&&(L.replaceChild(v,j),b||(j._component=null,h(j,!1)))}if(b&&O(b),e.base=v,v&&!r){for(var k=e,S=e;S=S._parentComponent;)(k=S).base=v;v._component=k,v._componentConstructor=k.constructor}}if(!N||n?Y.unshift(e):z||(e.componentDidUpdate&&e.componentDidUpdate(p,f,y),A.afterUpdate&&A.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);P||r||g()}}function I(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,c=M(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(x(o,c,3,n,r),e=o.base):(i&&!s&&(O(i),e=a=null),o=w(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),x(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,h(a,!1))),e}function O(e){A.beforeUnmount&&A.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?O(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,p(t),b(e),T(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function L(e,t,n){return d(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0});var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A={},S=[],U=[],C="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,Q=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,_=[],Y=[],P=0,B=!1,R=!1,G={};o(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),m(this,2)},render:function(){}});var H={h:r,createElement:r,cloneElement:i,Component:E,render:L,rerender:s,options:A};t.h=r,t.createElement=r,t.cloneElement=i,t.Component=E,t.render=L,t.rerender=s,t.options=A,t.default=H},function(e,t,n){"use strict";(function(e){function n(e,t){function n(){this.constructor=e}Jt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function r(e){return e.interceptors&&e.interceptors.length>0}function o(e,t){var n=e.interceptors||(e.interceptors=[]);return n.push(t),be(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function i(e,t){var n=ft();try{var r=e.interceptors;if(r)for(var o=0,i=r.length;i>o&&(t=r[o](t),Te(!t||t.type,"Intercept handlers should return nothing or a change object"),t);o++);return t}finally{yt(n)}}function a(e){return e.changeListeners&&e.changeListeners.length>0}function s(e,t){var n=e.changeListeners||(e.changeListeners=[]);return n.push(t),be(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function u(e,t){var n=ft(),r=e.changeListeners;if(r){r=r.slice();for(var o=0,i=r.length;i>o;o++)r[o](t);yt(n)}}function c(){return!!_n.spyListeners.length}function M(e){if(_n.spyListeners.length)for(var t=_n.spyListeners,n=0,r=t.length;r>n;n++)t[n](e)}function l(e){M(Ie({},e,{spyReportStart:!0}))}function p(e){M(e?Ie({},e,Xt):Xt)}function f(e){return _n.spyListeners.push(e),be(function(){var t=_n.spyListeners.indexOf(e);-1!==t&&_n.spyListeners.splice(t,1)})}function y(){return"function"==typeof Symbol&&Symbol.iterator||"@@iterator"}function N(e){Te(!0!==e[Kt],"Illegal state: cannot recycle array as iterator"),Le(e,Kt,!0);var t=-1;return Le(e,"next",function(){return t++,{done:t>=this.length,value:this.length>t?this[t]:void 0}}),e}function g(e,t){Le(e,y(),t)}function d(e){return{enumerable:!1,configurable:!1,get:function(){return this.get(e)},set:function(t){this.set(e,t)}}}function D(e){Object.defineProperty(on.prototype,""+e,d(e))}function j(e){for(var t=tn;e>t;t++)D(t);tn=e}function h(e){return xe(e)&&sn(e.$mobx)}function T(e){return ln[e]}function z(e,t){Te("function"==typeof t,T("m026")),Te("string"==typeof e&&e.length>0,"actions should have valid names, got: '"+e+"'");var n=function(){return b(e,t,this,arguments)};return n.originalFn=t,n.isMobxAction=!0,n}function b(e,t,n,r){var o=w(e,t,n,r);try{return t.apply(n,r)}finally{v(o)}}function w(e,t,n,r){var o=c()&&!!e,i=0;if(o){i=Date.now();var a=r&&r.length||0,s=Array(a);if(a>0)for(var u=0;a>u;u++)s[u]=r[u];l({type:"action",name:e,fn:t,object:n,arguments:s})}var M=ft();return Ke(),{prevDerivation:M,prevAllowStateChanges:O(!0),notifySpy:o,startTime:i}}function v(e){E(e.prevAllowStateChanges),et(),yt(e.prevDerivation),e.notifySpy&&p({time:Date.now()-e.startTime})}function x(e){Te(null===_n.trackingDerivation,T("m028")),_n.strictMode=e,_n.allowStateChanges=!e}function m(){return _n.strictMode}function I(e,t){var n,r=O(e);try{n=t()}finally{E(r)}return n}function O(e){var t=_n.allowStateChanges;return _n.allowStateChanges=e,t}function E(e){_n.allowStateChanges=e}function L(e,t,n,r,o){function i(i,a,s,u,c){if(void 0===c&&(c=0),Te(o||S(arguments),"This function is a decorator, but it wasn't invoked like a decorator"),s){Oe(i,"__mobxLazyInitializers")||Ee(i,"__mobxLazyInitializers",i.__mobxLazyInitializers&&i.__mobxLazyInitializers.slice()||[]);var M=s.value,l=s.initializer;return i.__mobxLazyInitializers.push(function(t){e(t,a,l?l.call(t):M,u,s)}),{enumerable:r,configurable:!0,get:function(){return!0!==this.__mobxDidRunLazyInitializers&&A(this),t.call(this,a)},set:function(e){!0!==this.__mobxDidRunLazyInitializers&&A(this),n.call(this,a,e)}}}var p={enumerable:r,configurable:!0,get:function(){return this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]||k(this,a,void 0,e,u,s),t.call(this,a)},set:function(t){this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]?n.call(this,a,t):k(this,a,t,e,u,s)}};return(3>arguments.length||5===arguments.length&&3>c)&&Object.defineProperty(i,a,p),p}return o?function(){if(S(arguments))return i.apply(null,arguments);var e=arguments,t=arguments.length;return function(n,r,o){return i(n,r,o,e,t)}}:i}function k(e,t,n,r,o,i){Oe(e,"__mobxInitializedProps")||Ee(e,"__mobxInitializedProps",{}),e.__mobxInitializedProps[t]=!0,r(e,t,n,o,i)}function A(e){!0!==e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers&&(Ee(e,"__mobxDidRunLazyInitializers",!0),e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers.forEach(function(t){return t(e)}))}function S(e){return(2===e.length||3===e.length)&&"string"==typeof e[1]}function U(e){return function(t,n,r){if(r&&"function"==typeof r.value)return r.value=z(e,r.value),r.enumerable=!1,r.configurable=!0,r;if(void 0!==r&&void 0!==r.get)throw Error("[mobx] action is not expected to be used with getters");return pn(e).apply(this,arguments)}}function C(e,t,n){var r="string"==typeof e?e:e.name||"<unnamed action>",o="function"==typeof e?e:t,i="function"==typeof e?t:n;return Te("function"==typeof o,T("m002")),Te(0===o.length,T("m003")),Te("string"==typeof r&&r.length>0,"actions should have valid names, got: '"+r+"'"),b(r,o,i,void 0)}function Q(e){return"function"==typeof e&&!0===e.isMobxAction}function _(e,t,n){var r=function(){return b(t,n,e,arguments)};r.isMobxAction=!0,Ee(e,t,r)}function Y(e,t){return e===t}function P(e,t){return Ue(e,t)}function B(e,t){return Qe(e,t)||Y(e,t)}function R(e,t,n){function r(){i(s)}var o,i,a;"string"==typeof e?(o=e,i=t,a=n):(o=e.name||"Autorun@"+je(),i=e,a=t),Te("function"==typeof i,T("m004")),Te(!1===Q(i),T("m005")),a&&(i=i.bind(a));var s=new Zn(o,function(){this.track(r)});return s.schedule(),s.getDisposer()}function G(e,t,n,r){var o,i,a,s;return"string"==typeof e?(o=e,i=t,a=n,s=r):(o="When@"+je(),i=e,a=t,s=n),R(o,function(e){if(i.call(s)){e.dispose();var t=ft();a.call(s),yt(t)}})}function H(e,t,n,r){function o(){a(M)}var i,a,s,u;"string"==typeof e?(i=e,a=t,s=n,u=r):(i=e.name||"AutorunAsync@"+je(),a=e,s=t,u=n),Te(!1===Q(a),T("m006")),void 0===s&&(s=1),u&&(a=a.bind(u));var c=!1,M=new Zn(i,function(){c||(c=!0,setTimeout(function(){c=!1,M.isDisposed||M.track(o)},s))});return M.schedule(),M.getDisposer()}function Z(e,t,n){function r(){if(!c.isDisposed){var n=!1;c.track(function(){var t=e(c);n=a||!u(i,t),i=t}),a&&o.fireImmediately&&t(i,c),a||!0!==n||t(i,c),a&&(a=!1)}}arguments.length>3&&he(T("m007")),ce(e)&&he(T("m008"));var o;o="object"===(void 0===n?"undefined":Wt(n))?n:{},o.name=o.name||e.name||t.name||"Reaction@"+je(),o.fireImmediately=!0===n||!0===o.fireImmediately,o.delay=o.delay||0,o.compareStructural=o.compareStructural||o.struct||!1,t=yn(o.name,o.context?t.bind(o.context):t),o.context&&(e=e.bind(o.context));var i,a=!0,s=!1,u=o.equals?o.equals:o.compareStructural||o.struct?Nn.structural:Nn.default,c=new Zn(o.name,function(){a||1>o.delay?r():s||(s=!0,setTimeout(function(){s=!1,r()},o.delay))});return c.schedule(),c.getDisposer()}function V(e,t){if(te(e)&&e.hasOwnProperty("$mobx"))return e.$mobx;Te(Object.isExtensible(e),T("m035")),me(e)||(t=(e.constructor.name||"ObservableObject")+"@"+je()),t||(t="ObservableObject@"+je());var n=new Dn(e,t);return Le(e,"$mobx",n),n}function W(e,t,n,r){if(e.values[t]&&!dn(e.values[t]))return Te("value"in n,"The property "+t+" in "+e.name+" is already observable, cannot redefine it as computed property"),void(e.target[t]=n.value);if("value"in n)if(ce(n.value)){var o=n.value;J(e,t,o.initialValue,o.enhancer)}else Q(n.value)&&!0===n.value.autoBind?_(e.target,t,n.value.originalFn):dn(n.value)?$(e,t,n.value):J(e,t,n.value,r);else F(e,t,n.get,n.set,Nn.default,!0)}function J(e,t,n,o){if(Ae(e.target,t),r(e)){var a=i(e,{object:e.target,name:t,type:"add",newValue:n});if(!a)return;n=a.newValue}n=(e.values[t]=new cn(n,o,e.name+"."+t,!1)).value,Object.defineProperty(e.target,t,q(t)),ee(e,e.target,t,n)}function F(e,t,n,r,o,i){i&&Ae(e.target,t),e.values[t]=new gn(n,e.target,o,e.name+"."+t,r),i&&Object.defineProperty(e.target,t,X(t))}function $(e,t,n){n.name=e.name+"."+t,n.scope||(n.scope=e.target),e.values[t]=n,Object.defineProperty(e.target,t,X(t))}function q(e){return jn[e]||(jn[e]={configurable:!0,enumerable:!0,get:function(){return this.$mobx.values[e].get()},set:function(t){K(this,e,t)}})}function X(e){return hn[e]||(hn[e]={configurable:!0,enumerable:!1,get:function(){return this.$mobx.values[e].get()},set:function(t){return this.$mobx.values[e].set(t)}})}function K(e,t,n){var o=e.$mobx,s=o.values[t];if(r(o)){var M=i(o,{type:"update",object:e,name:t,newValue:n});if(!M)return;n=M.newValue}if((n=s.prepareNewValue(n))!==un){var f=a(o),y=c(),M=f||y?{type:"update",object:e,oldValue:s.value,name:t,newValue:n}:null;y&&l(M),s.setNewValue(n),f&&u(o,M),y&&p()}}function ee(e,t,n,r){var o=a(e),i=c(),s=o||i?{type:"add",object:t,name:n,newValue:r}:null;i&&l(s),o&&u(e,s),i&&p()}function te(e){return!!xe(e)&&(A(e),Tn(e.$mobx))}function ne(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(h(e)||Ln(e))throw Error(T("m019"));if(te(e)){var n=e.$mobx;return n.values&&!!n.values[t]}return!1}return te(e)||!!e.$mobx||qt(e)||Jn(e)||dn(e)}function re(e){return Te(!!e,":("),L(function(t,n,r,o,i){Ae(t,n),Te(!i||!i.get,T("m022")),J(V(t,void 0),n,r,e)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){K(this,e,t)},!0,!1)}function oe(e){for(var t=[],n=1;arguments.length>n;n++)t[n-1]=arguments[n];return ae(e,le,t)}function ie(e){for(var t=[],n=1;arguments.length>n;n++)t[n-1]=arguments[n];return ae(e,fe,t)}function ae(e,t,n){Te(arguments.length>=2,T("m014")),Te("object"===(void 0===e?"undefined":Wt(e)),T("m015")),Te(!Ln(e),T("m016")),n.forEach(function(e){Te("object"===(void 0===e?"undefined":Wt(e)),T("m017")),Te(!ne(e),T("m018"))});for(var r=V(e),o={},i=n.length-1;i>=0;i--){var a=n[i];for(var s in a)if(!0!==o[s]&&Oe(a,s)){if(o[s]=!0,e===a&&!ke(e,s))continue;var u=Object.getOwnPropertyDescriptor(a,s);W(r,s,u,t)}}return e}function se(e){if(void 0===e&&(e=void 0),"string"==typeof arguments[1])return zn.apply(null,arguments);if(Te(1>=arguments.length,T("m021")),Te(!ce(e),T("m020")),ne(e))return e;var t=le(e,void 0,void 0);return t!==e?t:In.box(e)}function ue(e){he("Expected one or two arguments to observable."+e+". Did you accidentally try to use observable."+e+" as decorator?")}function ce(e){return"object"===(void 0===e?"undefined":Wt(e))&&null!==e&&!0===e.isMobxModifierDescriptor}function Me(e,t){return Te(!ce(t),"Modifiers cannot be nested"),{isMobxModifierDescriptor:!0,initialValue:t,enhancer:e}}function le(e,t,n){return ce(e)&&he("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),ne(e)?e:Array.isArray(e)?In.array(e,n):me(e)?In.object(e,n):Pe(e)?In.map(e,n):e}function pe(e,t,n){return ce(e)&&he("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),void 0===e||null===e?e:te(e)||h(e)||Ln(e)?e:Array.isArray(e)?In.shallowArray(e,n):me(e)?In.shallowObject(e,n):Pe(e)?In.shallowMap(e,n):he("The shallow modifier / decorator can only used in combination with arrays, objects and maps")}function fe(e){return e}function ye(e,t,n){if(Ue(e,t))return t;if(ne(e))return e;if(Array.isArray(e))return new on(e,ye,n);if(Pe(e))return new En(e,ye,n);if(me(e)){var r={};return V(r,n),ae(r,ye,[e]),r}return e}function Ne(e,t){return Ue(e,t)?t:e}function ge(e,t){void 0===t&&(t=void 0),Ke();try{return e.apply(t)}finally{et()}}function de(e){return ze("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"),In.map(e)}function De(){return"undefined"!=typeof window?window:e}function je(){return++_n.mobxGuid}function he(e,t){throw Te(!1,e,t),"X"}function Te(e,t,n){if(!e)throw Error("[mobx] Invariant failed: "+t+(n?" in '"+n+"'":""))}function ze(e){return-1===An.indexOf(e)&&(An.push(e),console.error("[mobx] Deprecated: "+e),!0)}function be(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}function we(e){var t=[];return e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),t}function ve(e,t,n){return void 0===t&&(t=100),void 0===n&&(n=" - "),e?e.slice(0,t).join(n)+(e.length>t?" (... and "+(e.length-t)+"more)":""):""}function xe(e){return null!==e&&"object"===(void 0===e?"undefined":Wt(e))}function me(e){if(null===e||"object"!==(void 0===e?"undefined":Wt(e)))return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function Ie(){for(var e=arguments[0],t=1,n=arguments.length;n>t;t++){var r=arguments[t];for(var o in r)Oe(r,o)&&(e[o]=r[o])}return e}function Oe(e,t){return Un.call(e,t)}function Ee(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function Le(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function ke(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!n||!1!==n.configurable&&!1!==n.writable}function Ae(e,t){Te(ke(e,t),"Cannot make property '"+t+"' observable, it is not configurable and writable in the target object")}function Se(e){var t=[];for(var n in e)t.push(n);return t}function Ue(e,t){if(null===e&&null===t)return!0;if(void 0===e&&void 0===t)return!0;if(Qe(e,t))return!0;if("object"!==(void 0===e?"undefined":Wt(e)))return e===t;var n=_e(e),r=Ye(e);if(n!==_e(t))return!1;if(r!==Ye(t))return!1;if(n){if(e.length!==t.length)return!1;for(var o=e.length-1;o>=0;o--)if(!Ue(e[o],t[o]))return!1;return!0}if(r){if(e.size!==t.size)return!1;var i=!0;return e.forEach(function(e,n){i=i&&Ue(t.get(n),e)}),i}if("object"===(void 0===e?"undefined":Wt(e))&&"object"===(void 0===t?"undefined":Wt(t))){if(null===e||null===t)return!1;if(Ye(e)&&Ye(t))return e.size===t.size&&Ue(In.shallowMap(e).entries(),In.shallowMap(t).entries());if(Se(e).length!==Se(t).length)return!1;for(var a in e){if(!(a in t))return!1;if(!Ue(e[a],t[a]))return!1}return!0}return!1}function Ce(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return xe(e)&&!0===e[n]}}function Qe(e,t){return"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function _e(e){return Array.isArray(e)||h(e)}function Ye(e){return Pe(e)||Ln(e)}function Pe(e){return void 0!==De().Map&&e instanceof De().Map}function Be(e){var t;return me(e)?t=Object.keys(e):Array.isArray(e)?t=e.map(function(e){return e[0]}):Ye(e)?t=Array.from(e.keys()):he("Cannot get keys from "+e),t}function Re(){return"function"==typeof Symbol&&Symbol.toPrimitive||"@@toPrimitive"}function Ge(e){return null===e?null:"object"===(void 0===e?"undefined":Wt(e))?""+e:e}function He(){Pn=!0,De().__mobxInstanceCount--}function Ze(){ze("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details."),Yn=!0;var e=De(),t=_n;if(e.__mobservableTrackingStack||e.__mobservableViewStack)throw Error("[mobx] An incompatible version of mobservable is already loaded.");if(e.__mobxGlobal&&e.__mobxGlobal.version!==t.version)throw Error("[mobx] An incompatible version of mobx is already loaded.");e.__mobxGlobal?_n=e.__mobxGlobal:e.__mobxGlobal=t}function Ve(){return _n}function We(){_n.resetId++;var e=new Qn;for(var t in e)-1===Cn.indexOf(t)&&(_n[t]=e[t]);_n.allowStateChanges=!_n.strictMode}function Je(e){return e.observers&&e.observers.length>0}function Fe(e){return e.observers}function $e(e,t){var n=e.observers.length;n&&(e.observersIndexes[t.__mapid]=n),e.observers[n]=t,e.lowestObserverState>t.dependenciesState&&(e.lowestObserverState=t.dependenciesState)}function qe(e,t){if(1===e.observers.length)e.observers.length=0,Xe(e);else{var n=e.observers,r=e.observersIndexes,o=n.pop();if(o!==t){var i=r[t.__mapid]||0;i?r[o.__mapid]=i:delete r[o.__mapid],n[i]=o}delete r[t.__mapid]}}function Xe(e){e.isPendingUnobservation||(e.isPendingUnobservation=!0,_n.pendingUnobservations.push(e))}function Ke(){_n.inBatch++}function et(){if(0==--_n.inBatch){Dt();for(var e=_n.pendingUnobservations,t=0;e.length>t;t++){var n=e[t];n.isPendingUnobservation=!1,0===n.observers.length&&n.onBecomeUnobserved()}_n.pendingUnobservations=[]}}function tt(e){var t=_n.trackingDerivation;null!==t?t.runId!==e.lastAccessedBy&&(e.lastAccessedBy=t.runId,t.newObserving[t.unboundDepsCount++]=e):0===e.observers.length&&Xe(e)}function nt(e){if(e.lowestObserverState!==Gn.STALE){e.lowestObserverState=Gn.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Gn.UP_TO_DATE&&r.onBecomeStale(),r.dependenciesState=Gn.STALE}}}function rt(e){if(e.lowestObserverState!==Gn.STALE){e.lowestObserverState=Gn.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Gn.POSSIBLY_STALE?r.dependenciesState=Gn.STALE:r.dependenciesState===Gn.UP_TO_DATE&&(e.lowestObserverState=Gn.UP_TO_DATE)}}}function ot(e){if(e.lowestObserverState===Gn.UP_TO_DATE){e.lowestObserverState=Gn.POSSIBLY_STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Gn.UP_TO_DATE&&(r.dependenciesState=Gn.POSSIBLY_STALE,r.onBecomeStale())}}}function it(e){return e instanceof Hn}function at(e){switch(e.dependenciesState){case Gn.UP_TO_DATE:return!1;case Gn.NOT_TRACKING:case Gn.STALE:return!0;case Gn.POSSIBLY_STALE:for(var t=ft(),n=e.observing,r=n.length,o=0;r>o;o++){var i=n[o];if(dn(i)){try{i.get()}catch(e){return yt(t),!0}if(e.dependenciesState===Gn.STALE)return yt(t),!0}}return Nt(e),yt(t),!1}}function st(){return null!==_n.trackingDerivation}function ut(e){var t=e.observers.length>0;_n.computationDepth>0&&t&&he(T("m031")+e.name),!_n.allowStateChanges&&t&&he(T(_n.strictMode?"m030a":"m030b")+e.name)}function ct(e,t,n){Nt(e),e.newObserving=Array(e.observing.length+100),e.unboundDepsCount=0,e.runId=++_n.runId;var r=_n.trackingDerivation;_n.trackingDerivation=e;var o;try{o=t.call(n)}catch(e){o=new Hn(e)}return _n.trackingDerivation=r,Mt(e),o}function Mt(e){for(var t=e.observing,n=e.observing=e.newObserving,r=Gn.UP_TO_DATE,o=0,i=e.unboundDepsCount,a=0;i>a;a++){var s=n[a];0===s.diffValue&&(s.diffValue=1,o!==a&&(n[o]=s),o++),s.dependenciesState>r&&(r=s.dependenciesState)}for(n.length=o,e.newObserving=null,i=t.length;i--;){var s=t[i];0===s.diffValue&&qe(s,e),s.diffValue=0}for(;o--;){var s=n[o];1===s.diffValue&&(s.diffValue=0,$e(s,e))}r!==Gn.UP_TO_DATE&&(e.dependenciesState=r,e.onBecomeStale())}function lt(e){var t=e.observing;e.observing=[];for(var n=t.length;n--;)qe(t[n],e);e.dependenciesState=Gn.NOT_TRACKING}function pt(e){var t=ft(),n=e();return yt(t),n}function ft(){var e=_n.trackingDerivation;return _n.trackingDerivation=null,e}function yt(e){_n.trackingDerivation=e}function Nt(e){if(e.dependenciesState!==Gn.UP_TO_DATE){e.dependenciesState=Gn.UP_TO_DATE;for(var t=e.observing,n=t.length;n--;)t[n].lowestObserverState=Gn.UP_TO_DATE}}function gt(e){Te(this&&this.$mobx&&Jn(this.$mobx),"Invalid `this`"),Te(!this.$mobx.errorHandler,"Only one onErrorHandler can be registered"),this.$mobx.errorHandler=e}function dt(e){return _n.globalReactionErrorHandlers.push(e),function(){var t=_n.globalReactionErrorHandlers.indexOf(e);0>t||_n.globalReactionErrorHandlers.splice(t,1)}}function Dt(){_n.inBatch>0||_n.isRunningReactions||Wn(jt)}function jt(){_n.isRunningReactions=!0;for(var e=_n.pendingReactions,t=0;e.length>0;){++t===Vn&&(console.error("Reaction doesn't converge to a stable state after "+Vn+" iterations. Probably there is a cycle in the reactive function: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,o=n.length;o>r;r++)n[r].runReaction()}_n.isRunningReactions=!1}function ht(e){var t=Wn;Wn=function(n){return e(function(){return t(n)})}}function Tt(e){return ze("asReference is deprecated, use observable.ref instead"),In.ref(e)}function zt(e){return ze("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."),In.struct(e)}function bt(e){return ze("asFlat is deprecated, use observable.shallow instead"),In.shallow(e)}function wt(e){return ze("asMap is deprecated, use observable.map or observable.shallowMap instead"),In.map(e||{})}function vt(e){return L(function(t,n,r,o,i){Te(void 0!==i,T("m009")),Te("function"==typeof i.get,T("m010")),F(V(t,""),n,i.get,i.set,e,!1)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){this.$mobx.values[e].set(t)},!1,!1)}function xt(e,t){if("object"===(void 0===e?"undefined":Wt(e))&&null!==e){if(h(e))return Te(void 0===t,T("m036")),e.$mobx.atom;if(Ln(e)){var n=e;if(void 0===t)return xt(n._keys);var r=n._data[t]||n._hasMap[t];return Te(!!r,"the entry '"+t+"' does not exist in the observable map '"+It(e)+"'"),r}if(A(e),te(e)){if(!t)return he("please specify a property");var r=e.$mobx.values[t];return Te(!!r,"no observable property '"+t+"' found on the observable object '"+It(e)+"'"),r}if(qt(e)||dn(e)||Jn(e))return e}else if("function"==typeof e&&Jn(e.$mobx))return e.$mobx;return he("Cannot obtain atom from "+e)}function mt(e,t){return Te(e,"Expecting some object"),void 0!==t?mt(xt(e,t)):qt(e)||dn(e)||Jn(e)?e:Ln(e)?e:(A(e),e.$mobx?e.$mobx:void Te(!1,"Cannot obtain administration from "+e))}function It(e,t){var n;return n=void 0!==t?xt(e,t):te(e)||Ln(e)?mt(e):xt(e),n.name}function Ot(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(!1===te(e))return!1;if(!e.$mobx.values[t])return!1;var n=xt(e,t);return dn(n)}return dn(e)}function Et(e,t,n,r){return"function"==typeof n?kt(e,t,n,r):Lt(e,t,n)}function Lt(e,t,n){return mt(e).observe(t,n)}function kt(e,t,n,r){return mt(e,t).observe(n,r)}function At(e,t,n){return"function"==typeof n?Ut(e,t,n):St(e,t)}function St(e,t){return mt(e).intercept(t)}function Ut(e,t,n){return mt(e,t).intercept(n)}function Ct(e,t){return st()||console.warn(T("m013")),qn(e,{context:t}).get()}function Qt(e,t,n){function r(r){return t&&n.push([e,r]),r}if(void 0===t&&(t=!0),void 0===n&&(n=[]),ne(e)){if(t&&null===n&&(n=[]),t&&null!==e&&"object"===(void 0===e?"undefined":Wt(e)))for(var o=0,i=n.length;i>o;o++)if(n[o][0]===e)return n[o][1];if(h(e)){var a=r([]),s=e.map(function(e){return Qt(e,t,n)});a.length=s.length;for(var o=0,i=s.length;i>o;o++)a[o]=s[o];return a}if(te(e)){var a=r({});for(var u in e)a[u]=Qt(e[u],t,n);return a}if(Ln(e)){var c=r({});return e.forEach(function(e,r){return c[r]=Qt(e,t,n)}),c}if(Mn(e))return Qt(e.get(),t,n)}return e}function _t(e,t){Te("function"==typeof e&&2>e.length,"createTransformer expects a function that accepts one argument");var r={},o=_n.resetId,i=function(o){function i(t,n){var r=o.call(this,function(){return e(n)},void 0,Nn.default,"Transformer-"+e.name+"-"+t,void 0)||this;return r.sourceIdentifier=t,r.sourceObject=n,r}return n(i,o),i.prototype.onBecomeUnobserved=function(){var e=this.value;o.prototype.onBecomeUnobserved.call(this),delete r[this.sourceIdentifier],t&&t(e,this.sourceObject)},i}(gn);return function(e){o!==_n.resetId&&(r={},o=_n.resetId);var t=Yt(e),n=r[t];return n?n.get():(n=r[t]=new i(t,e),n.get())}}function Yt(e){if("string"==typeof e||"number"==typeof e)return e;if(null===e||"object"!==(void 0===e?"undefined":Wt(e)))throw Error("[mobx] transform expected some kind of object or primitive value, got: "+e);var t=e.$transformId;return void 0===t&&(t=je(),Ee(e,"$transformId",t)),t}function Pt(e){return console.log(e),e}function Bt(e,t){switch(arguments.length){case 0:if(!(e=_n.trackingDerivation))return Pt(T("m024"));break;case 2:e=xt(e,t)}return e=xt(e),dn(e)?Pt(e.whyRun()):Jn(e)?Pt(e.whyRun()):he(T("m025"))}function Rt(e,t){return Gt(xt(e,t))}function Gt(e){var t={name:e.name};return e.observing&&e.observing.length>0&&(t.dependencies=we(e.observing).map(Gt)),t}function Ht(e,t){return Zt(xt(e,t))}function Zt(e){var t={name:e.name};return Je(e)&&(t.observers=Fe(e).map(Zt)),t}function Vt(e,t,n){var r;if(Ln(e)||h(e)||Mn(e))r=mt(e);else{if(!te(e))return he("Expected observable map, object or array as first array");if("string"!=typeof t)return he("InterceptReads can only be used with a specific property, not with an object in general");r=mt(e,t)}return void 0!==r.dehancer?he("An intercept reader was already established"):(r.dehancer="function"==typeof t?t:n,function(){r.dehancer=void 0})}Object.defineProperty(t,"__esModule",{value:!0});var Wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},Ft=function(){function e(e){void 0===e&&(e="Atom@"+je()),this.name=e,this.isPendingUnobservation=!0,this.observers=[],this.observersIndexes={},this.diffValue=0,this.lastAccessedBy=0,this.lowestObserverState=Gn.NOT_TRACKING}return e.prototype.onBecomeUnobserved=function(){},e.prototype.reportObserved=function(){tt(this)},e.prototype.reportChanged=function(){Ke(),nt(this),et()},e.prototype.toString=function(){return this.name},e}(),$t=function(e){function t(t,n,r){void 0===t&&(t="Atom@"+je()),void 0===n&&(n=Sn),void 0===r&&(r=Sn);var o=e.call(this,t)||this;return o.name=t,o.onBecomeObservedHandler=n,o.onBecomeUnobservedHandler=r,o.isPendingUnobservation=!1,o.isBeingTracked=!1,o}return n(t,e),t.prototype.reportObserved=function(){return Ke(),e.prototype.reportObserved.call(this),this.isBeingTracked||(this.isBeingTracked=!0,this.onBecomeObservedHandler()),et(),!!_n.trackingDerivation},t.prototype.onBecomeUnobserved=function(){this.isBeingTracked=!1,this.onBecomeUnobservedHandler()},t}(Ft),qt=Ce("Atom",Ft),Xt={spyReportEnd:!0},Kt="__$$iterating",en=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,!1===e}(),tn=0,nn=function(){function e(){}return e}();!function(e,t){void 0!==Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):void 0!==e.prototype.__proto__?e.prototype.__proto__=t:e.prototype=t}(nn,Array.prototype),Object.isFrozen(Array)&&["constructor","push","shift","concat","pop","unshift","replace","find","findIndex","splice","reverse","sort"].forEach(function(e){Object.defineProperty(nn.prototype,e,{configurable:!0,writable:!0,value:Array.prototype[e]})});var rn=function(){function e(e,t,n,r){this.array=n,this.owned=r,this.values=[],this.lastKnownLength=0,this.interceptors=null,this.changeListeners=null,this.atom=new Ft(e||"ObservableArray@"+je()),this.enhancer=function(n,r){return t(n,r,e+"[..]")}}return e.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},e.prototype.dehanceValues=function(e){return void 0!==this.dehancer?e.map(this.dehancer):e},e.prototype.intercept=function(e){return o(this,e)},e.prototype.observe=function(e,t){return void 0===t&&(t=!1),t&&e({object:this.array,type:"splice",index:0,added:this.values.slice(),addedCount:this.values.length,removed:[],removedCount:0}),s(this,e)},e.prototype.getArrayLength=function(){return this.atom.reportObserved(),this.values.length},e.prototype.setArrayLength=function(e){if("number"!=typeof e||0>e)throw Error("[mobx.array] Out of range: "+e);var t=this.values.length;if(e!==t)if(e>t){for(var n=Array(e-t),r=0;e-t>r;r++)n[r]=void 0;this.spliceWithArray(t,0,n)}else this.spliceWithArray(e,t-e)},e.prototype.updateArrayLength=function(e,t){if(e!==this.lastKnownLength)throw Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");this.lastKnownLength+=t,t>0&&e+t+1>tn&&j(e+t+1)},e.prototype.spliceWithArray=function(e,t,n){var o=this;ut(this.atom);var a=this.values.length;if(void 0===e?e=0:e>a?e=a:0>e&&(e=Math.max(0,a+e)),t=1===arguments.length?a-e:void 0===t||null===t?0:Math.max(0,Math.min(t,a-e)),void 0===n&&(n=[]),r(this)){var s=i(this,{object:this.array,type:"splice",index:e,removedCount:t,added:n});if(!s)return kn;t=s.removedCount,n=s.added}n=n.map(function(e){return o.enhancer(e,void 0)}),this.updateArrayLength(a,n.length-t);var u=this.spliceItemsIntoValues(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice(e,n,u),this.dehanceValues(u)},e.prototype.spliceItemsIntoValues=function(e,t,n){if(1e4>n.length)return(o=this.values).splice.apply(o,[e,t].concat(n));var r=this.values.slice(e,e+t);return this.values=this.values.slice(0,e).concat(n,this.values.slice(e+t)),r;var o},e.prototype.notifyArrayChildUpdate=function(e,t,n){var r=!this.owned&&c(),o=a(this),i=o||r?{object:this.array,type:"update",index:e,newValue:t,oldValue:n}:null;r&&l(i),this.atom.reportChanged(),o&&u(this,i),r&&p()},e.prototype.notifyArraySplice=function(e,t,n){var r=!this.owned&&c(),o=a(this),i=o||r?{object:this.array,type:"splice",index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;r&&l(i),this.atom.reportChanged(),o&&u(this,i),r&&p()},e}(),on=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableArray@"+je()),void 0===o&&(o=!1);var i=e.call(this)||this,a=new rn(r,n,i,o);return Le(i,"$mobx",a),t&&t.length&&i.spliceWithArray(0,0,t),en&&Object.defineProperty(a.array,"0",an),i}return n(t,e),t.prototype.intercept=function(e){return this.$mobx.intercept(e)},t.prototype.observe=function(e,t){return void 0===t&&(t=!1),this.$mobx.observe(e,t)},t.prototype.clear=function(){return this.splice(0)},t.prototype.concat=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];return this.$mobx.atom.reportObserved(),Array.prototype.concat.apply(this.peek(),e.map(function(e){return h(e)?e.peek():e}))},t.prototype.replace=function(e){return this.$mobx.spliceWithArray(0,this.$mobx.values.length,e)},t.prototype.toJS=function(){return this.slice()},t.prototype.toJSON=function(){return this.toJS()},t.prototype.peek=function(){return this.$mobx.atom.reportObserved(),this.$mobx.dehanceValues(this.$mobx.values)},t.prototype.find=function(e,t,n){void 0===n&&(n=0);var r=this.findIndex.apply(this,arguments);return-1===r?void 0:this.get(r)},t.prototype.findIndex=function(e,t,n){void 0===n&&(n=0);for(var r=this.peek(),o=r.length,i=n;o>i;i++)if(e.call(t,r[i],i,this))return i;return-1},t.prototype.splice=function(e,t){for(var n=[],r=2;arguments.length>r;r++)n[r-2]=arguments[r];switch(arguments.length){case 0:return[];case 1:return this.$mobx.spliceWithArray(e);case 2:return this.$mobx.spliceWithArray(e,t)}return this.$mobx.spliceWithArray(e,t,n)},t.prototype.spliceWithArray=function(e,t,n){return this.$mobx.spliceWithArray(e,t,n)},t.prototype.push=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(n.values.length,0,e),n.values.length},t.prototype.pop=function(){return this.splice(Math.max(this.$mobx.values.length-1,0),1)[0]},t.prototype.shift=function(){return this.splice(0,1)[0]},t.prototype.unshift=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(0,0,e),n.values.length},t.prototype.reverse=function(){var e=this.slice();return e.reverse.apply(e,arguments)},t.prototype.sort=function(){var e=this.slice();return e.sort.apply(e,arguments)},t.prototype.remove=function(e){var t=this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);return t>-1&&(this.splice(t,1),!0)},t.prototype.move=function(e,t){function n(e){if(0>e)throw Error("[mobx.array] Index out of bounds: "+e+" is negative");var t=this.$mobx.values.length;if(e>=t)throw Error("[mobx.array] Index out of bounds: "+e+" is not smaller than "+t)}if(n.call(this,e),n.call(this,t),e!==t){var r,o=this.$mobx.values;r=t>e?o.slice(0,e).concat(o.slice(e+1,t+1),[o[e]],o.slice(t+1)):o.slice(0,t).concat([o[e]],o.slice(t,e),o.slice(e+1)),this.replace(r)}},t.prototype.get=function(e){var t=this.$mobx;if(t){if(t.values.length>e)return t.atom.reportObserved(),t.dehanceValue(t.values[e]);console.warn("[mobx.array] Attempt to read an array index ("+e+") that is out of bounds ("+t.values.length+"). Please check length first. Out of bound indices will not be tracked by MobX")}},t.prototype.set=function(e,t){var n=this.$mobx,o=n.values;if(o.length>e){ut(n.atom);var a=o[e];if(r(n)){var s=i(n,{type:"update",object:this,index:e,newValue:t});if(!s)return;t=s.newValue}t=n.enhancer(t,a);t!==a&&(o[e]=t,n.notifyArrayChildUpdate(e,t,a))}else{if(e!==o.length)throw Error("[mobx.array] Index out of bounds, "+e+" is larger than "+o.length);n.spliceWithArray(e,0,[t])}},t}(nn);g(on.prototype,function(){return N(this.slice())}),Object.defineProperty(on.prototype,"length",{enumerable:!1,configurable:!0,get:function(){return this.$mobx.getArrayLength()},set:function(e){this.$mobx.setArrayLength(e)}}),["every","filter","forEach","indexOf","join","lastIndexOf","map","reduce","reduceRight","slice","some","toString","toLocaleString"].forEach(function(e){var t=Array.prototype[e];Te("function"==typeof t,"Base function not defined on Array prototype: '"+e+"'"),Ee(on.prototype,e,function(){return t.apply(this.peek(),arguments)})}),function(e,t){for(var n=0;t.length>n;n++)Ee(e,t[n],e[t[n]])}(on.prototype,["constructor","intercept","observe","clear","concat","get","replace","toJS","toJSON","peek","find","findIndex","splice","spliceWithArray","push","pop","set","shift","unshift","reverse","sort","remove","move","toString","toLocaleString"]);var an=d(0);j(1e3);var sn=Ce("ObservableArrayAdministration",rn),un={},cn=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableValue@"+je()),void 0===o&&(o=!0);var i=e.call(this,r)||this;return i.enhancer=n,i.hasUnreportedChange=!1,i.dehancer=void 0,i.value=n(t,void 0,r),o&&c()&&M({type:"create",object:i,newValue:i.value}),i}return n(t,e),t.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.prototype.set=function(e){var t=this.value;if((e=this.prepareNewValue(e))!==un){var n=c();n&&l({type:"update",object:this,newValue:e,oldValue:t}),this.setNewValue(e),n&&p()}},t.prototype.prepareNewValue=function(e){if(ut(this),r(this)){var t=i(this,{object:this,type:"update",newValue:e});if(!t)return un;e=t.newValue}return e=this.enhancer(e,this.value,this.name),this.value!==e?e:un},t.prototype.setNewValue=function(e){var t=this.value;this.value=e,this.reportChanged(),a(this)&&u(this,{type:"update",object:this,newValue:e,oldValue:t})},t.prototype.get=function(){return this.reportObserved(),this.dehanceValue(this.value)},t.prototype.intercept=function(e){return o(this,e)},t.prototype.observe=function(e,t){return t&&e({object:this,type:"update",newValue:this.value,oldValue:void 0}),s(this,e)},t.prototype.toJSON=function(){return this.get()},t.prototype.toString=function(){return this.name+"["+this.value+"]"},t.prototype.valueOf=function(){return Ge(this.get())},t}(Ft);cn.prototype[Re()]=cn.prototype.valueOf;var Mn=Ce("ObservableValue",cn),ln={m001:"It is not allowed to assign new values to @action fields",m002:"`runInAction` expects a function",m003:"`runInAction` expects a function without arguments",m004:"autorun expects a function",m005:"Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m006:"Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m007:"reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",m008:"wrapping reaction expression in `asReference` is no longer supported, use options object instead",m009:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",m010:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",m011:"First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",m012:"computed takes one or two arguments if used as function",m013:"[mobx.expr] 'expr' should only be used inside other reactive functions.",m014:"extendObservable expected 2 or more arguments",m015:"extendObservable expects an object as first argument",m016:"extendObservable should not be used on maps, use map.merge instead",m017:"all arguments of extendObservable should be objects",m018:"extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",m019:"[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",m020:"modifiers can only be used for individual object properties",m021:"observable expects zero or one arguments",m022:"@observable can not be used on getters, use @computed instead",m024:"whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",m025:"whyRun can only be used on reactions and computed values",m026:"`action` can only be invoked on functions",m028:"It is not allowed to set `useStrict` when a derivation is running",m029:"INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",m030a:"Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",m030b:"Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",m031:"Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",m032:"* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",m033:"`observe` doesn't support the fire immediately property for observable maps.",m034:"`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",m035:"Cannot make the designated object observable; it is not extensible",m036:"It is not possible to get index atoms from arrays",m037:'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',m038:"Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"},pn=L(function(e,t,n,r){Ee(e,t,yn(r&&1===r.length?r[0]:n.name||t||"<unnamed action>",n))},function(e){return this[e]},function(){Te(!1,T("m001"))},!1,!0),fn=L(function(e,t,n){_(e,t,n)},function(e){return this[e]},function(){Te(!1,T("m001"))},!1,!1),yn=function(e,t){return 1===arguments.length&&"function"==typeof e?z(e.name||"<unnamed action>",e):2===arguments.length&&"function"==typeof t?z(e,t):1===arguments.length&&"string"==typeof e?U(e):U(t).apply(null,arguments)};yn.bound=function(e){if("function"==typeof e){var t=z("<not yet bound action>",e);return t.autoBind=!0,t}return fn.apply(null,arguments)};var Nn={identity:Y,structural:P,default:B},gn=function(){function e(e,t,n,r,o){this.derivation=e,this.scope=t,this.equals=n,this.dependenciesState=Gn.NOT_TRACKING,this.observing=[],this.newObserving=null,this.isPendingUnobservation=!1,this.observers=[],this.observersIndexes={},this.diffValue=0,this.runId=0,this.lastAccessedBy=0,this.lowestObserverState=Gn.UP_TO_DATE,this.unboundDepsCount=0,this.__mapid="#"+je(),this.value=new Hn(null),this.isComputing=!1,this.isRunningSetter=!1,this.name=r||"ComputedValue@"+je(),o&&(this.setter=z(r+"-setter",o))}return e.prototype.onBecomeStale=function(){ot(this)},e.prototype.onBecomeUnobserved=function(){lt(this),this.value=void 0},e.prototype.get=function(){Te(!this.isComputing,"Cycle detected in computation "+this.name,this.derivation),0===_n.inBatch?(Ke(),at(this)&&(this.value=this.computeValue(!1)),et()):(tt(this),at(this)&&this.trackAndCompute()&&rt(this));var e=this.value;if(it(e))throw e.cause;return e},e.prototype.peek=function(){var e=this.computeValue(!1);if(it(e))throw e.cause;return e},e.prototype.set=function(e){if(this.setter){Te(!this.isRunningSetter,"The setter of computed value '"+this.name+"' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),this.isRunningSetter=!0;try{this.setter.call(this.scope,e)}finally{this.isRunningSetter=!1}}else Te(!1,"[ComputedValue '"+this.name+"'] It is not possible to assign a new value to a computed value.")},e.prototype.trackAndCompute=function(){c()&&M({object:this.scope,type:"compute",fn:this.derivation});var e=this.value,t=this.dependenciesState===Gn.NOT_TRACKING,n=this.value=this.computeValue(!0);return t||it(e)||it(n)||!this.equals(e,n)},e.prototype.computeValue=function(e){this.isComputing=!0,_n.computationDepth++;var t;if(e)t=ct(this,this.derivation,this.scope);else try{t=this.derivation.call(this.scope)}catch(e){t=new Hn(e)}return _n.computationDepth--,this.isComputing=!1,t},e.prototype.observe=function(e,t){var n=this,r=!0,o=void 0;return R(function(){var i=n.get();if(!r||t){var a=ft();e({type:"update",object:n,newValue:i,oldValue:o}),yt(a)}r=!1,o=i})},e.prototype.toJSON=function(){return this.get()},e.prototype.toString=function(){return this.name+"["+this.derivation+"]"},e.prototype.valueOf=function(){return Ge(this.get())},e.prototype.whyRun=function(){var e=!!_n.trackingDerivation,t=we(this.isComputing?this.newObserving:this.observing).map(function(e){return e.name}),n=we(Fe(this).map(function(e){return e.name}));return"\nWhyRun? computation '"+this.name+"':\n * Running because: "+(e?"[active] the value of this computation is needed by a reaction":this.isComputing?"[get] The value of this computed was requested outside a reaction":"[idle] not running at the moment")+"\n"+(this.dependenciesState===Gn.NOT_TRACKING?T("m032"):" * This computation will re-run if any of the following observables changes:\n    "+ve(t)+"\n    "+(this.isComputing&&e?" (... or any observable accessed during the remainder of the current run)":"")+"\n    "+T("m038")+"\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    "+ve(n)+"\n")},e}();gn.prototype[Re()]=gn.prototype.valueOf;var dn=Ce("ComputedValue",gn),Dn=function(){function e(e,t){this.target=e,this.name=t,this.values={},this.changeListeners=null,this.interceptors=null}return e.prototype.observe=function(e,t){return Te(!0!==t,"`observe` doesn't support the fire immediately property for observable objects."),s(this,e)},e.prototype.intercept=function(e){return o(this,e)},e}(),jn={},hn={},Tn=Ce("ObservableObjectAdministration",Dn),zn=re(le),bn=re(pe),wn=re(fe),vn=re(ye),xn=re(Ne),mn={box:function(e,t){return arguments.length>2&&ue("box"),new cn(e,le,t)},shallowBox:function(e,t){return arguments.length>2&&ue("shallowBox"),new cn(e,fe,t)},array:function(e,t){return arguments.length>2&&ue("array"),new on(e,le,t)},shallowArray:function(e,t){return arguments.length>2&&ue("shallowArray"),new on(e,fe,t)},map:function(e,t){return arguments.length>2&&ue("map"),new En(e,le,t)},shallowMap:function(e,t){return arguments.length>2&&ue("shallowMap"),new En(e,fe,t)},object:function(e,t){arguments.length>2&&ue("object");var n={};return V(n,t),oe(n,e),n},shallowObject:function(e,t){arguments.length>2&&ue("shallowObject");var n={};return V(n,t),ie(n,e),n},ref:function(){return 2>arguments.length?Me(fe,arguments[0]):wn.apply(null,arguments)},shallow:function(){return 2>arguments.length?Me(pe,arguments[0]):bn.apply(null,arguments)},deep:function(){return 2>arguments.length?Me(le,arguments[0]):zn.apply(null,arguments)},struct:function(){return 2>arguments.length?Me(ye,arguments[0]):vn.apply(null,arguments)}},In=se;Object.keys(mn).forEach(function(e){return In[e]=mn[e]}),In.deep.struct=In.struct,In.ref.struct=function(){return 2>arguments.length?Me(Ne,arguments[0]):xn.apply(null,arguments)};var On={},En=function(){function e(e,t,n){void 0===t&&(t=le),void 0===n&&(n="ObservableMap@"+je()),this.enhancer=t,this.name=n,this.$mobx=On,this._data=Object.create(null),this._hasMap=Object.create(null),this._keys=new on(void 0,fe,this.name+".keys()",!0),this.interceptors=null,this.changeListeners=null,this.dehancer=void 0,this.merge(e)}return e.prototype._has=function(e){return void 0!==this._data[e]},e.prototype.has=function(e){return!!this.isValidKey(e)&&(e=""+e,this._hasMap[e]?this._hasMap[e].get():this._updateHasMapEntry(e,!1).get())},e.prototype.set=function(e,t){this.assertValidKey(e),e=""+e;var n=this._has(e);if(r(this)){var o=i(this,{type:n?"update":"add",object:this,newValue:t,name:e});if(!o)return this;t=o.newValue}return n?this._updateValue(e,t):this._addValue(e,t),this},e.prototype.delete=function(e){var t=this;if(this.assertValidKey(e),e=""+e,r(this)){var n=i(this,{type:"delete",object:this,name:e});if(!n)return!1}if(this._has(e)){var o=c(),s=a(this),n=s||o?{type:"delete",object:this,oldValue:this._data[e].value,name:e}:null;return o&&l(n),ge(function(){t._keys.remove(e),t._updateHasMapEntry(e,!1),t._data[e].setNewValue(void 0),t._data[e]=void 0}),s&&u(this,n),o&&p(),!0}return!1},e.prototype._updateHasMapEntry=function(e,t){var n=this._hasMap[e];return n?n.setNewValue(t):n=this._hasMap[e]=new cn(t,fe,this.name+"."+e+"?",!1),n},e.prototype._updateValue=function(e,t){var n=this._data[e];if((t=n.prepareNewValue(t))!==un){var r=c(),o=a(this),i=o||r?{type:"update",object:this,oldValue:n.value,name:e,newValue:t}:null;r&&l(i),n.setNewValue(t),o&&u(this,i),r&&p()}},e.prototype._addValue=function(e,t){var n=this;ge(function(){var r=n._data[e]=new cn(t,n.enhancer,n.name+"."+e,!1);t=r.value,n._updateHasMapEntry(e,!0),n._keys.push(e)});var r=c(),o=a(this),i=o||r?{type:"add",object:this,name:e,newValue:t}:null;r&&l(i),o&&u(this,i),r&&p()},e.prototype.get=function(e){return e=""+e,this.dehanceValue(this.has(e)?this._data[e].get():void 0)},e.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},e.prototype.keys=function(){return N(this._keys.slice())},e.prototype.values=function(){return N(this._keys.map(this.get,this))},e.prototype.entries=function(){var e=this;return N(this._keys.map(function(t){return[t,e.get(t)]}))},e.prototype.forEach=function(e,t){var n=this;this.keys().forEach(function(r){return e.call(t,n.get(r),r,n)})},e.prototype.merge=function(e){var t=this;return Ln(e)&&(e=e.toJS()),ge(function(){me(e)?Object.keys(e).forEach(function(n){return t.set(n,e[n])}):Array.isArray(e)?e.forEach(function(e){return t.set(e[0],e[1])}):Pe(e)?e.forEach(function(e,n){return t.set(n,e)}):null!==e&&void 0!==e&&he("Cannot initialize map from "+e)}),this},e.prototype.clear=function(){var e=this;ge(function(){pt(function(){e.keys().forEach(e.delete,e)})})},e.prototype.replace=function(e){var t=this;return ge(function(){var n=Be(e);t.keys().filter(function(e){return-1===n.indexOf(e)}).forEach(function(e){return t.delete(e)}),t.merge(e)}),this},Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.toJS=function(){var e=this,t={};return this.keys().forEach(function(n){return t[n]=e.get(n)}),t},e.prototype.toJSON=function(){return this.toJS()},e.prototype.isValidKey=function(e){return null!==e&&void 0!==e&&("string"==typeof e||"number"==typeof e||"boolean"==typeof e)},e.prototype.assertValidKey=function(e){if(!this.isValidKey(e))throw Error("[mobx.map] Invalid key: '"+e+"', only strings, numbers and booleans are accepted as key in observable maps.")},e.prototype.toString=function(){var e=this;return this.name+"[{ "+this.keys().map(function(t){return t+": "+e.get(t)}).join(", ")+" }]"},e.prototype.observe=function(e,t){return Te(!0!==t,T("m033")),s(this,e)},e.prototype.intercept=function(e){return o(this,e)},e}();g(En.prototype,function(){return this.entries()});var Ln=Ce("ObservableMap",En),kn=[];Object.freeze(kn);var An=[],Sn=function(){},Un=Object.prototype.hasOwnProperty,Cn=["mobxGuid","resetId","spyListeners","strictMode","runId"],Qn=function(){function e(){this.version=5,this.trackingDerivation=null,this.computationDepth=0,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!0,this.strictMode=!1,this.resetId=0,this.spyListeners=[],this.globalReactionErrorHandlers=[]}return e}(),_n=new Qn,Yn=!1,Pn=!1,Bn=!1,Rn=De();Rn.__mobxInstanceCount?(Rn.__mobxInstanceCount++,setTimeout(function(){Yn||Pn||Bn||(Bn=!0,console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details."))})):Rn.__mobxInstanceCount=1;var Gn;!function(e){e[e.NOT_TRACKING=-1]="NOT_TRACKING",e[e.UP_TO_DATE=0]="UP_TO_DATE",e[e.POSSIBLY_STALE=1]="POSSIBLY_STALE",e[e.STALE=2]="STALE"}(Gn||(t.IDerivationState=Gn={}));var Hn=function(){function e(e){this.cause=e}return e}(),Zn=function(){function e(e,t){void 0===e&&(e="Reaction@"+je()),this.name=e,this.onInvalidate=t,this.observing=[],this.newObserving=[],this.dependenciesState=Gn.NOT_TRACKING,this.diffValue=0,this.runId=0,this.unboundDepsCount=0,this.__mapid="#"+je(),this.isDisposed=!1,this._isScheduled=!1,this._isTrackPending=!1,this._isRunning=!1}return e.prototype.onBecomeStale=function(){this.schedule()},e.prototype.schedule=function(){this._isScheduled||(this._isScheduled=!0,_n.pendingReactions.push(this),Dt())},e.prototype.isScheduled=function(){return this._isScheduled},e.prototype.runReaction=function(){this.isDisposed||(Ke(),this._isScheduled=!1,at(this)&&(this._isTrackPending=!0,this.onInvalidate(),this._isTrackPending&&c()&&M({object:this,type:"scheduled-reaction"})),et())},e.prototype.track=function(e){Ke();var t,n=c();n&&(t=Date.now(),l({object:this,type:"reaction",fn:e})),this._isRunning=!0;var r=ct(this,e,void 0);this._isRunning=!1,this._isTrackPending=!1,this.isDisposed&&lt(this),it(r)&&this.reportExceptionInDerivation(r.cause),n&&p({time:Date.now()-t}),et()},e.prototype.reportExceptionInDerivation=function(e){var t=this;if(this.errorHandler)return void this.errorHandler(e,this);var n="[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '"+this,r=T("m037");console.error(n||r,e),c()&&M({type:"error",message:n,error:e,object:this}),_n.globalReactionErrorHandlers.forEach(function(n){return n(e,t)})},e.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._isRunning||(Ke(),lt(this),et()))},e.prototype.getDisposer=function(){var e=this.dispose.bind(this);return e.$mobx=this,e.onError=gt,e},e.prototype.toString=function(){return"Reaction["+this.name+"]"},e.prototype.whyRun=function(){var e=we(this._isRunning?this.newObserving:this.observing).map(function(e){return e.name});return"\nWhyRun? reaction '"+this.name+"':\n * Status: ["+(this.isDisposed?"stopped":this._isRunning?"running":this.isScheduled()?"scheduled":"idle")+"]\n * This reaction will re-run if any of the following observables changes:\n    "+ve(e)+"\n    "+(this._isRunning?" (... or any observable accessed during the remainder of the current run)":"")+"\n\t"+T("m038")+"\n"},e}(),Vn=100,Wn=function(e){return e()},Jn=Ce("Reaction",Zn),Fn=vt(Nn.default),$n=vt(Nn.structural),qn=function(e,t){if("string"==typeof t)return Fn.apply(null,arguments);Te("function"==typeof e,T("m011")),Te(3>arguments.length,T("m012"));var n="object"===(void 0===t?"undefined":Wt(t))?t:{};return n.setter="function"==typeof t?t:n.setter,new gn(e,n.context,n.equals?n.equals:n.compareStructural||n.struct?Nn.structural:Nn.default,n.name||e.name||"",n.setter)};qn.struct=$n,qn.equals=vt;var Xn={allowStateChanges:I,deepEqual:Ue,getAtom:xt,getDebugName:It,getDependencyTree:Rt,getAdministration:mt,getGlobalState:Ve,getObserverTree:Ht,interceptReads:Vt,isComputingDerivation:st,isSpyEnabled:c,onReactionError:dt,reserveArrayBuffer:j,resetGlobalState:We,isolateGlobalState:He,shareGlobalState:Ze,spyReport:M,spyReportEnd:p,spyReportStart:l,setReactionScheduler:ht},Kn={Reaction:Zn,untracked:pt,Atom:$t,BaseAtom:Ft,useStrict:x,isStrictModeEnabled:m,spy:f,comparer:Nn,asReference:Tt,asFlat:bt,asStructure:zt,asMap:wt,isModifierDescriptor:ce,isObservableObject:te,isBoxedObservable:Mn,isObservableArray:h,ObservableMap:En,isObservableMap:Ln,map:de,transaction:ge,observable:In,computed:qn,isObservable:ne,isComputed:Ot,extendObservable:oe,extendShallowObservable:ie,observe:Et,intercept:At,autorun:R,autorunAsync:H,when:G,reaction:Z,action:yn,isAction:Q,runInAction:C,expr:Ct,toJS:Qt,createTransformer:_t,whyRun:Bt,isArrayLike:_e,extras:Xn},er=!1;for(var tr in Kn)!function(e){var t=Kn[e];Object.defineProperty(Kn,e,{get:function(){return er||(er=!0,console.warn("Using default export (`import mobx from 'mobx'`) is deprecated and won’t work in mobx@4.0.0\nUse `import * as mobx from 'mobx'` instead")),t}})}(tr);"object"===("undefined"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":Wt(__MOBX_DEVTOOLS_GLOBAL_HOOK__))&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:f,extras:Xn}),t.extras=Xn,t.Reaction=Zn,t.untracked=pt,t.IDerivationState=Gn,t.Atom=$t,t.BaseAtom=Ft,t.useStrict=x,t.isStrictModeEnabled=m,t.spy=f,t.comparer=Nn,t.asReference=Tt,t.asFlat=bt,t.asStructure=zt,t.asMap=wt,t.isModifierDescriptor=ce,t.isObservableObject=te,t.isBoxedObservable=Mn,t.isObservableArray=h,t.ObservableMap=En,t.isObservableMap=Ln,t.map=de,t.transaction=ge,t.observable=In,t.computed=qn,t.isObservable=ne,t.isComputed=Ot,t.extendObservable=oe,t.extendShallowObservable=ie,t.observe=Et,t.intercept=At,t.autorun=R,t.autorunAsync=H,t.when=G,t.reaction=Z,t.action=yn,t.isAction=Q,t.runInAction=C,t.expr=Ct,t.toJS=Qt,t.createTransformer=_t,t.whyRun=Bt,t.isArrayLike=_e,t.default=Kn}).call(t,n(10))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=t.inject=t.connect=t.useStaticRendering=t.Observer=t.observer=void 0;var r=n(3);Object.defineProperty(t,"observer",{enumerable:!0,get:function(){return r.observer}}),Object.defineProperty(t,"Observer",{enumerable:!0,get:function(){return r.Observer}}),Object.defineProperty(t,"useStaticRendering",{enumerable:!0,get:function(){return r.useStaticRendering}});var o=n(11);Object.defineProperty(t,"connect",{enumerable:!0,get:function(){return o.connect}});var i=n(5);Object.defineProperty(t,"inject",{enumerable:!0,get:function(){return i.inject}});var a=n(13);Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return a.Provider}});var s=n(1);if(!n(0).Component)throw Error("mobx-preact requires Preact to be available");if(!s.extras)throw Error("mobx-preact requires mobx to be available")},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":y(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":y(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){h=e}function s(e){var t=d.extras.getGlobalState().allowStateChanges;return d.extras.getGlobalState().allowStateChanges=e,t}function u(e){d.extras.getGlobalState().allowStateChanges=e}function c(e,t,n,r,o){var i=s(e),a=void 0;try{a=t(n,r,o)}finally{u(i)}return a}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e[t],o=z[t];e[t]=r?!0===n?function(){o.apply(this,arguments),r.apply(this,arguments)}:function(){r.apply(this,arguments),o.apply(this,arguments)}:o}function l(e,t){if(null==e||null==t||"object"!==(void 0===e?"undefined":g(e))||"object"!==(void 0===t?"undefined":g(t)))return e!==t;var n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(var r=void 0,o=n.length-1;r=n[o];o--)if(t[r]!==e[r])return!0;return!1}function p(e){if(arguments.length>1&&T.warn('Mobx observer: Using observer to inject stores is not supported. Use `@connect(["store1", "store2"]) ComponentClass instead or preferably, use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))``'),!0===e.isMobxInjector&&T.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),(0,j.isStateless)(e)){var t,n;return p((n=t=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),N(n,[{key:"render",value:function(){return e.call(this,this.props,this.context)}}]),n}(D.Component),t.displayName=(0,j.makeDisplayName)(e),n))}if(!e)throw Error("Please pass a valid component to 'observer'");return f(e.prototype||e),e.isMobXReactObserver=!0,e}function f(e){M(e,"componentWillMount",!0),M(e,"componentDidMount"),e.shouldComponentUpdate||(e.shouldComponentUpdate=z.shouldComponentUpdate)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;var N=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g="function"==typeof Symbol&&"symbol"===y(Symbol.iterator)?function(e){return void 0===e?"undefined":y(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":y(e)};t.useStaticRendering=a,t.observer=p;var d=n(1),D=n(0),j=n(4),h=!1,T=console,z={componentWillMount:function(){function e(e){var t=this[e],n=new d.Atom("reactive "+e);Object.defineProperty(this,e,{configurable:!0,enumerable:!0,get:function(){return n.reportObserved(),t},set:function(e){!o&&l(t,e)?(t=e,r=!0,n.reportChanged(),r=!1):t=e}})}var t=this;if(!0!==h){var n=(0,j.makeDisplayName)(this),r=!1,o=!1;e.call(this,"props"),e.call(this,"state");var i=this.render.bind(this),a=null,s=!1,u=function(){return a=new d.Reaction(n+".render()",function(){if(!s&&(s=!0,"function"==typeof t.componentWillReact&&t.componentWillReact(),!0!==t.__$mobxIsUnmounted)){var e=!0;try{o=!0,r||D.Component.prototype.forceUpdate.call(t),e=!1}finally{o=!1,e&&a.dispose()}}}),a.reactComponent=t,M.$mobx=a,t.render=M,M(t.props,t.state,t.context)},M=function(e,t,n){s=!1;var r=void 0,o=void 0;if(a.track(function(){try{o=c(!1,i,e,t,n)}catch(e){r=e}}),r)throw r;return o};this.render=u}},componentWillUnmount:function(){!0!==h&&(this.render.$mobx&&this.render.$mobx.dispose(),this.__$mobxIsUnmounted=!0)},componentDidMount:function(){},componentDidUpdate:function(){},shouldComponentUpdate:function(e,t){return h&&T.warn("[mobx-preact] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||l(this.props,e)}};(t.Observer=p(function(e){return e.children[0]()})).displayName="Observer"},function(e,t,n){"use strict";function r(e){return!(e.prototype&&e.prototype.render||i.Component.isPrototypeOf(e))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.prefix,r=void 0===n?"":n,o=t.suffix,i=void 0===o?"":o;return r+(e.displayName||e.name||e.constructor&&e.constructor.name||"<component>")+i}Object.defineProperty(t,"__esModule",{value:!0}),t.isStateless=r,t.makeDisplayName=o;var i=n(0)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){var a,s,u=n?"-with-"+n:"",c=(0,N.makeDisplayName)(t,{prefix:"inject-",suffix:u}),p=(s=a=function(n){function a(){return r(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,n),M(a,[{key:"render",value:function(){var n={};for(var r in this.props)this.props.hasOwnProperty(r)&&(n[r]=this.props[r]);var o=e(this.context.mobxStores||{},n,this.context)||{};for(var i in o)n[i]=o[i];return(0,l.h)(t,n)}}]),a}(l.Component),a.displayName=c,s);return(0,f.default)(p,t),p.wrappedComponent=t,Object.defineProperties(p,g),p}function s(e){return function(t,n){return e.forEach(function(e){if(!(e in n)){if(!(e in t))throw Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");n[e]=t[e]}}),n}}function u(){var e=void 0;if("function"==typeof arguments[0])return e=arguments[0],function(t){var n=a(e,t);return n.isMobxInjector=!1,n=(0,y.observer)(n),n.isMobxInjector=!0,n};for(var t=[],n=0;arguments.length>n;n++)t[n]=arguments[n];return e=s(t),function(n){return a(e,n,t.join("-"))}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var M=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.inject=u;var l=n(0),p=n(12),f=function(e){return e&&e.__esModule?e:{default:e}}(p),y=n(3),N=n(4),g={isMobxInjector:{value:!0,writable:!0,configurable:!0,enumerable:!0}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.JSONHTTPError=t.TextHTTPError=t.HTTPError=void 0;var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(15),c=t.HTTPError=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.statusText));return n.name=n.constructor.name,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(n,n.constructor):n.stack=Error(e.statusText).stack,n.status=e.status,n}return i(t,e),t}(function(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}(Error)),M=t.TextHTTPError=function(e){function t(e,n){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.data=n,i}return i(t,e),t}(c),l=t.JSONHTTPError=function(e){function t(e,n){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.json=n,i}return i(t,e),t}(c);t.default=function(){function e(t,n){r(this,e),this.apiURL=t,this.apiURL.match(/\/[^\/]?/)&&(this._sameOrigin=!0),this.defaultHeaders=n&&n.defaultHeaders||{}}return s(e,[{key:"headers",value:function(){return a({},this.defaultHeaders,{"Content-Type":"application/json"},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}},{key:"parseJsonResponse",value:function(e){return e.json().then(function(t){if(!e.ok)return Promise.reject(new l(e,t));var n=(0,u.getPagination)(e);return n?{pagination:n,items:t}:t})}},{key:"request",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.headers(n.headers||{});return this._sameOrigin&&(n.credentials=n.credentials||"same-origin"),fetch(this.apiURL+e,a({},n,{headers:r})).then(function(e){var n=e.headers.get("Content-Type");return n&&n.match(/json/)?t.parseJsonResponse(e):e.ok?e.text().then(function(){}):e.text().then(function(t){return Promise.reject(new M(e,t))})})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0);t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.saving,n=e.text,r=e.saving_text;return(0,s.h)("button",{type:"submit",className:"btn"+(t?" saving":"")},t?r||"Saving":n||"Save")}}]),t}(s.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u={confirm:{type:"success",text:"A confirmation message was sent to your email, click the link there to continue."},password_mail:{type:"success",text:"We've sent a recovery email to your account, follow the link there to reset your password."},email_changed:{type:"sucess",text:"Your email address has been updated!"},verfication_error:{type:"error",text:"There was an error verifying your account. Please try again or contact an administrator."},signup_disabled:{type:"error",text:"Public signups are disabled. Contact an administrator and ask for an invite."}};t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.type,t=u[e];return(0,s.h)("div",{className:"flashMessage "+t.type},(0,s.h)("span",null,t.text))}}]),t}(s.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments;(b[e]||[]).forEach(function(e){e.apply(e,Array.prototype.slice.call(t,1))})}function i(e,t){var n="";for(var r in t)n+=r+": "+t[r]+"; ";e?e.setAttribute("style",n):x=n}function a(e){var t=m[document.location.host.split(":").shift()],n=t&&localStorage.getItem("netlifySiteURL");if(e)return new y.default({APIUrl:e,setCookie:!t});if(t&&n){var r=[n];return n.match(/\/$/)||r.push("/"),r.push(".netlify/identity"),new y.default({APIUrl:r.join(""),setCookie:!t})}return t?null:new y.default({setCookie:!t})}function s(){var e=(document.location.hash||"").replace(/^#\/?/,"");if(e){var t=e.match(L);t&&(D.default.verifyToken(t[1],t[2]),document.location.hash="");e.match(k)&&(D.default.openModal("signup"),document.location.hash="");if(e.match(A)){var n={};e.split("&").forEach(function(e){var t=e.split("="),r=c(t,2);n[r[0]]=r[1]}),document.location.hash="",D.default.openModal("login"),D.default.completeExternalLogin(n)}}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.APIUrl,n=e.logo,r=void 0===n||n,o=document.querySelectorAll("[data-netlify-identity-menu],[data-netlify-identity-button]");Array.prototype.slice.call(o).forEach(function(e){var t=null===e.getAttribute("data-netlify-identity-menu")?"button":"menu";(0,M.render)((0,M.h)(p.Provider,{store:D.default},(0,M.h)(h.default,{mode:t,text:e.innerText.trim()})),e,null)}),D.default.init(a(t)),D.default.modal.logo=r,O=document.createElement("iframe"),O.id="netlify-identity-widget",O.onload=function(){var e=O.contentDocument.createElement("style");e.innerHTML=""+z.default,O.contentDocument.head.appendChild(e),I=(0,M.render)((0,M.h)(p.Provider,{store:D.default},(0,M.h)(g.default,null)),O.contentDocument.body,I),s()},i(O,E),O.src="about:blank",(e.container?document.querySelector(e.container):document.body).appendChild(O),x&&(O.setAttribute("style",x),x=null)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=n(0),l=n(1),p=n(2),f=n(14),y=r(f),N=n(18),g=r(N),d=n(24),D=r(d),j=n(25),h=r(j),T=n(26),z=r(T),b={},w={login:!0,signup:!0,error:!0},v={on:function(e,t){b[e]=b[e]||[],b[e].push(t)},open:function(e){if(e=e||"login",!w[e])throw Error("Invalid action for open: "+e);D.default.openModal(D.default.user?"user":e)},close:function(){D.default.closeModal()},currentUser:function(){return D.default.gotrue&&D.default.gotrue.currentUser()},logout:function(){return D.default.logout()},get gotrue(){return D.default.gotrue||D.default.openModal("login"),D.default.gotrue},init:function(e){u(e)},store:D.default},x=null,m={localhost:!0,"127.0.0.1":!0,"0.0.0.0":!0},I=void 0,O=void 0,E={position:"fixed",top:0,left:0,border:"none",width:"100%",height:"100%",overflow:"visible",background:"transparent",display:"none","z-index":99};(0,l.observe)(D.default.modal,"isOpen",function(){D.default.settings||D.default.loadSettings(),i(O,Object.assign({},E,{display:D.default.modal.isOpen?"block !important":"none"})),D.default.modal.isOpen?o("open",D.default.modal.page):o("close")}),(0,l.observe)(D.default,"siteURL",function(){localStorage.setItem("netlifySiteURL",D.default.siteURL),D.default.init(a(),!0)}),(0,l.observe)(D.default,"user",function(){D.default.user?o("login",D.default.user):o("logout")}),(0,l.observe)(D.default,"gotrue",function(){D.default.gotrue&&o("init",D.default.gotrue.currentUser())}),(0,l.observe)(D.default,"error",function(){o("error",D.default.error)});var L=/(confirmation|invite|recovery|email_change)_token=([^&]+)/,k=/error=access_denied&error_description=403/,A=/access_token=/;t.default=v},function(e){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(t=window)}e.exports=t},function(e,t,n){"use strict";function r(e,t){if("string"==typeof e)throw Error("Store names should be provided as array");return Array.isArray(e)?t?i.inject.apply(null,e)(r(t)):function(t){return r(e,t)}:(0,o.observer)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.connect=r;var o=n(3),i=n(5)},function(e){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(c,M,l){if("string"!=typeof M){if(u){var p=s(M);p&&p!==u&&e(c,p,l)}var f=o(M);i&&(f=f.concat(i(M)));for(var y=0;f.length>y;++y){var N=f[y];if(!(t[N]||n[N]||l&&l[N])){var g=a(M,N);try{r(c,N,g)}catch(e){}}}return c}return c}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c={children:!0,key:!0,ref:!0},M=console;t.Provider=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(e){var t=e.children;return t.length>1?(0,u.h)("div",null," ",t," "):t[0]}},{key:"getChildContext",value:function(){var e={},t=this.context.mobxStores;if(t)for(var n in t)e[n]=t[n];for(var r in this.props)c[r]||"suppressChangedStoreWarning"===r||(e[r]=this.props[r]);return{mobxStores:e}}},{key:"componentWillReceiveProps",value:function(e){if(Object.keys(e).length!==Object.keys(this.props).length&&M.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"),!e.suppressChangedStoreWarning)for(var t in e)c[t]||this.props[t]===e[t]||M.warn("MobX Provider: Provided store '"+t+"' has changed. Please avoid replacing stores as the change might not propagate to all children")}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),s=r(a),u=n(16),c=r(u),M=/^http:\/\//,l="/.netlify/identity",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.APIUrl,r=void 0===n?l:n,i=t.audience,a=void 0===i?"":i,u=t.setCookie,c=void 0!==u&&u;o(this,e),r.match(M)&&console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."),a&&(this.audience=a),console.log("setCookie: %o",c),this.setCookie=c,this.api=new s.default(r)}return i(e,[{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers=t.headers||{};var n=t.audience||this.audience;return n&&(t.headers["X-JWT-AUD"]=n),this.api.request(e,t).catch(function(e){return e instanceof a.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)})}},{key:"settings",value:function(){return this._request("/settings")}},{key:"signup",value:function(e,t,n){return this._request("/signup",{method:"POST",body:JSON.stringify({email:e,password:t,data:n})})}},{key:"login",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=password&username="+encodeURIComponent(e)+"&password="+encodeURIComponent(t)}).then(function(e){return c.default.removeSavedSession(),r.createUser(e,n)})}},{key:"loginExternalUrl",value:function(e){return this.api.apiURL+"/authorize?provider="+e}},{key:"confirm",value:function(e,t){return this._setRememberHeaders(t),this.verify("signup",e,t)}},{key:"requestPasswordRecovery",value:function(e){return this._request("/recover",{method:"POST",body:JSON.stringify({email:e})})}},{key:"recover",value:function(e,t){return this._setRememberHeaders(t),this.verify("recovery",e,t)}},{key:"acceptInvite",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/verify",{method:"POST",body:JSON.stringify({token:e,password:t,type:"signup"})}).then(function(e){return r.createUser(e,n)})}},{key:"acceptInviteExternalUrl",value:function(e,t){return this.api.apiURL+"/authorize?provider="+e+"&invite_token="+t}},{key:"createUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._setRememberHeaders(t),new c.default(this.api,e,this.audience).getUserData().then(function(e){return t&&e._saveSession(),e})}},{key:"currentUser",value:function(){var e=c.default.recoverSession(this.api);return e&&this._setRememberHeaders(e._fromStorage),e}},{key:"verify",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/verify",{method:"POST",body:JSON.stringify({token:t,type:e})}).then(function(e){return r.createUser(e,n)})}},{key:"_setRememberHeaders",value:function(e){this.setCookie&&(this.api.defaultHeaders=this.api.defaultHeaders||{},this.api.defaultHeaders["X-Use-Cookie"]=e?"1":"session")}}]),e}();t.default=p,"undefined"!=typeof window&&(window.GoTrue=p)},function(e,t){"use strict";function n(e){var t=e.headers.get("Link"),n={};if(null==t)return null;t=t.split(",");for(var o=e.headers.get("X-Total-Count"),i=0,a=t.length;a>i;i++){var s=t[i].replace(/(^\s*|\s*$)/,""),u=s.split(";"),c=r(u,2),M=c[0],l=c[1],p=M.match(/page=(\d+)/),f=p&&parseInt(p[1],10);l.match(/last/)?n.last=f:l.match(/next/)?n.next=f:l.match(/prev/)?n.prev=f:l.match(/first/)&&(n.first=f)}return n.last=Math.max(n.last||0,n.prev&&n.prev+1||0),n.current=n.next?n.next-1:n.last||1,n.total=o?parseInt(o,10):null,n}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getPagination=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}var n=window.atob(t);try{return decodeURIComponent(escape(n))}catch(e){return n}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),c=r(u),M=n(17),l=r(M),p={},f=null,y={api:1,token:1,audience:1,url:1},N={api:1};t.default=function(){function e(t,n,r){o(this,e),this.api=t,this.url=t.apiURL,this.audience=r,this._processTokenResponse(n),f=this}return s(e,[{key:"update",value:function(e){var t=this;return this._request("/user",{method:"PUT",body:JSON.stringify(e)}).then(function(e){return t._saveUserData(e)._refreshSavedSession()})}},{key:"jwt",value:function(e){var t=this.tokenDetails(),n=t.expires_at,r=t.refresh_token,o=t.access_token;return e||n-6e4<Date.now()?this._refreshToken(r):Promise.resolve(o)}},{key:"logout",value:function(){return this._request("/logout",{method:"POST"}).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this))}},{key:"_refreshToken",value:function(e){var t=this;return p[e]?p[e]:p[e]=this.api.request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token="+e}).then(function(n){return delete p[e],t._processTokenResponse(n),t._refreshSavedSession(),t.token.access_token}).catch(function(n){return delete p[e],t.clearSession(),Promise.reject(n)})}},{key:"_request",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.headers=n.headers||{};var r=n.audience||this.audience;return r&&(n.headers["X-JWT-AUD"]=r),this.jwt().then(function(r){return t.api.request(e,a({headers:Object.assign(n.headers,{Authorization:"Bearer "+r})},n)).catch(function(e){return e instanceof u.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)})})}},{key:"getUserData",value:function(){return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this))}},{key:"_saveUserData",value:function(t,n){for(var r in t)r in e.prototype||r in y||(this[r]=t[r]);return n&&(this._fromStorage=!0),this}},{key:"_processTokenResponse",value:function(e){this.token=e;var t=void 0;try{t=JSON.parse(i(e.access_token.split(".")[1])),this.token.expires_at=1e3*t.exp}catch(t){console.error(Error("Gotrue-js: Failed to parse tokenResponse claims: "+JSON.stringify(e)))}}},{key:"_refreshSavedSession",value:function(){return localStorage.getItem("gotrue.user")&&this._saveSession(),this}},{key:"_saveSession",value:function(){return localStorage.setItem("gotrue.user",JSON.stringify(this._details)),this}},{key:"tokenDetails",value:function(){return this.token}},{key:"clearSession",value:function(){e.removeSavedSession(),this.token=null,f=null}},{key:"admin",get:function(){return new l.default(this)}},{key:"_details",get:function(){var t={};for(var n in this)n in e.prototype||n in N||(t[n]=this[n]);return t}}],[{key:"removeSavedSession",value:function(){localStorage.removeItem("gotrue.user")}},{key:"recoverSession",value:function(t){if(f)return f;var n=localStorage.getItem("gotrue.user");if(n)try{var r=JSON.parse(n),o=r.url,i=r.token,a=r.audience;if(!o||!i)return null;return new e(t||new c.default(o,{}),i,a)._saveUserData(r,!0)}catch(e){return console.error(Error("Gotrue-js: Error recovering session: "+e)),null}return null}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(){function e(t){n(this,e),this.user=t}return r(e,[{key:"listUsers",value:function(e){return this.user._request("/admin/users",{method:"GET",audience:e})}},{key:"getUser",value:function(e){return this.user._request("/admin/users/"+e.id)}},{key:"updateUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.user._request("/admin/users/"+e.id,{method:"PUT",body:JSON.stringify(t)})}},{key:"createUser",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.email=e,n.password=t,this.user._request("/admin/users",{method:"POST",body:JSON.stringify(n)})}},{key:"deleteUser",value:function(e){return this.user._request("/admin/users/"+e.id,{method:"DELETE"})}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),M=n(2),l=n(19),p=r(l),f=n(20),y=r(f),N=n(21),g=r(N),d=n(22),D=r(d),j=n(23),h=r(j),T=n(8),z=r(T),b={login:!0,signup:!0},w={login:{login:!0,button:"Log in",button_saving:"Logging in",email:!0,password:!0,link:"amnesia",link_text:"Forgot password?",providers:!0},signup:{signup:!0,button:"Sign up",button_saving:"Signing Up",name:!0,email:!0,password:!0,providers:!0},amnesia:{title:"Recover password",button:"Send recovery email",button_saving:"Sending recovery email",email:!0,link:"login",link_text:"Never mind"},recovery:{title:"Recover password",button:"Update password",button_saving:"Updating password",password:!0,link:"login",link_text:"Never mind"},invite:{title:"Complete your signup",button:"Sign up",button_saving:"Signing Up",password:!0,providers:!0},user:{title:"Logged in"}};t.default=(0,M.connect)(["store"])(s=function(e){function t(){var e,n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleClose=function(){return r.props.store.closeModal()},r.handlePage=function(e){return r.props.store.openModal(e)},r.handleLogout=function(){return r.props.store.logout()},r.handleSiteURL=function(e){return r.props.store.setSiteURL(e)},r.handleExternalLogin=function(e){return r.props.store.externalLogin(e)},r.handleUser=function(e){var t=e.name,n=e.email,o=e.password,i=r.props.store;switch(i.modal.page){case"login":i.login(n,o);break;case"signup":i.signup(t,n,o);break;case"amnesia":i.requestPasswordRecovery(n);break;case"invite":i.acceptInvite(o);break;case"recovery":i.updatePassword(o)}},a=n,i(r,a)}return a(t,e),u(t,[{key:"renderBody",value:function(){var e=this.props.store;if(!e.gotrue)return(0,c.h)(y.default,{onSiteURL:this.handleSiteURL});if(e.settings)return e.user?(0,c.h)(g.default,{user:e.user,saving:e.saving,onLogout:this.handleLogout}):"signup"===e.modal.page&&e.settings.disable_signup?(0,c.h)(z.default,{type:"signup_disabled"}):(0,c.h)(D.default,{page:w[e.modal.page]||{},message:e.message,saving:e.saving,onSubmit:this.handleUser})}},{key:"renderProviders",value:function(){var e=this.props.store;if(!e.gotrue||!e.settings)return null;if("signup"===e.modal.page&&e.settings.disable_signup)return null;if(!(w[e.modal.page]||{}).providers)return null;var t=["Google","GitHub","GitLab","BitBucket"].filter(function(t){return e.settings.external[t.toLowerCase()]});return t.length?(0,c.h)(h.default,{providers:t,onLogin:this.handleExternalLogin}):null}},{key:"render",value:function(){var e=this,t=this.props.store,n=b[t.modal.page],r=t.settings&&!t.settings.disable_signup,o=w[t.modal.page]||{},i=function(){return e.handlePage(o.link)};return(0,c.h)("div",null,(0,c.h)(p.default,{page:o,error:t.error,showHeader:n,showSignup:r,devSettings:!t.gotrue,loading:!t.error&&t.gotrue&&!t.settings,isOpen:t.modal.isOpen,onPage:this.handlePage,onClose:this.handleClose,logo:t.modal.logo},this.renderBody(),this.renderProviders(),!t.user&&o.link&&t.gotrue&&(0,c.h)("button",{onclick:i,className:"btnLink forgotPasswordLink"},o.link_text)))}}]),t}(c.Component))||s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return e.json&&e.json.error_description||e.message||""+e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleClose=function(e){e.preventDefault(),i.props.onClose()},i.blockEvent=function(e){e.stopPropagation()},i.linkHandler=function(e){return function(t){t.preventDefault(),i.props.onPage(e)}},a=n,o(i,a)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.page,n=e.error,r=e.loading,o=e.showHeader,i=e.showSignup,s=e.devSettings,c=e.isOpen,M=e.children,l=e.logo;return(0,u.h)("div",{className:"modalContainer",role:"dialog","aria-hidden":""+(r||!c),onClick:this.handleClose},(0,u.h)("div",{className:"modalDialog"+(r?" visuallyHidden":""),onClick:this.blockEvent},(0,u.h)("div",{className:"modalContent"},(0,u.h)("button",{onclick:this.handleClose,className:"btn btnClose"},(0,u.h)("span",{className:"visuallyHidden"},"Close")),o&&(0,u.h)("div",{className:"header"},i&&(0,u.h)("button",{className:"btn btnHeader "+(t.signup?"active":""),onclick:this.linkHandler("signup")},"Sign up"),!s&&(0,u.h)("button",{className:"btn btnHeader "+(t.login?"active":""),onclick:this.linkHandler("login")},"Log in")),t.title&&(0,u.h)("div",{className:"header"},(0,u.h)("button",{className:"btn btnHeader active"},t.title)),s&&(0,u.h)("div",{className:"header"},(0,u.h)("button",{className:"btn btnHeader active"},"Development Settings")),n&&(0,u.h)("div",{className:"flashMessage error"},(0,u.h)("span",null,a(n))),M)),l&&(0,u.h)("a",{href:"https://www.netlify.com",className:"callOut"+(r?" visuallyHidden":"")},(0,u.h)("span",{className:"netlifyLogo"}),"Coded by Netlify"))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState(r({},e.target.name,e.target.value))},n.handleSiteURL=function(e){e.preventDefault(),n.props.onSiteURL(n.state.url)},n.state={url:""},n}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state.url;return(0,u.h)("form",{onsubmit:this.handleSiteURL,className:"form"},(0,u.h)("div",{className:"flashMessage"},"Looks like you're running a local server. Please let us know the URL of your site."),(0,u.h)("div",{className:"formGroup"},(0,u.h)("label",null,(0,u.h)("span",{className:"visuallyHidden"},"Enter your Netlify Site URL"),(0,u.h)("input",{className:"formControl",type:"url",name:"url",value:e,placeholder:"URL of your Netlify site",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,u.h)("div",{className:"inputFieldIcon inputFieldUrl"}))),(0,u.h)("button",{type:"submit",className:"btn"},"Set site's URL"))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=n(7),c=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleLogout=function(e){e.preventDefault(),i.props.onLogout()},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.saving;return(0,s.h)("form",{onSubmit:this.handleLogout,className:"form "+(n?"disabled":"")},(0,s.h)("p",{className:"infoText"},"Logged in as ",(0,s.h)("br",null),(0,s.h)("span",{className:"infoTextEmail"},t.user_metadata.full_name||t.user_metadata.name||t.email)),(0,s.h)(c.default,{saving:n,text:"Log out",saving_text:"Logging out"}))}}]),t}(s.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),M=n(8),l=r(M),p=n(7),f=r(p);t.default=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState(o({},e.target.name,e.target.value))},n.handleLogin=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.state={name:"",email:"",password:""},n}return s(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.page,n=e.message,r=e.saving,o=this.state,i=o.name,a=o.email,s=o.password;return(0,c.h)("form",{onsubmit:this.handleLogin,className:"form "+(r?"disabled":"")},n&&(0,c.h)(l.default,{type:n}),t.name&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your name"),(0,c.h)("input",{className:"formControl",type:"name",name:"name",value:i,placeholder:"Name",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldEmail"}))),t.email&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your email"),(0,c.h)("input",{className:"formControl",type:"email",name:"email",value:a,placeholder:"Email",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldEmail"}))),t.password&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your password"),(0,c.h)("input",{className:"formControl",type:"password",name:"password",value:s,placeholder:"Password",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldPassword"}))),(0,c.h)(f.default,{saving:r,text:t.button,saving_text:t.button_saving}))}}]),t}(c.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleLogin=function(e){e.preventDefault(),i.props.onLogin(i.props.provider.toLowerCase())},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.provider;return(0,s.h)("button",{onClick:this.handleLogin,className:"provider"+e+" btn btnProvider"},"Continue with ",e)}}]),t}(s.Component);t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.providers,n=e.onLogin;return(0,s.h)("div",{className:"providersGroup"},(0,s.h)("hr",{className:"hr"}),t.map(function(e){return(0,s.h)(u,{key:e,provider:e,onLogin:n})}))}}]),t}(s.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(0,r.observable)({user:null,recovered_user:null,message:null,settings:null,gotrue:null,error:null,siteURL:null,remember:!0,saving:!1,invite_token:null,email_change_token:null,modal:{page:"login",isOpen:!1,logo:!0}});o.startAction=(0,r.action)(function(){o.saving=!0,o.error=null,o.message=null}),o.setError=(0,r.action)(function(e){o.saving=!1,o.error=e}),o.init=(0,r.action)(function(e,t){e&&(o.gotrue=e,(o.user=e.currentUser())&&(o.modal.page="user")),t&&o.loadSettings()}),o.loadSettings=(0,r.action)(function(){o.settings||o.gotrue&&o.gotrue.settings().then((0,r.action)(function(e){return o.settings=e})).catch((0,r.action)(function(){o.error=Error("Failed to load settings from "+o.gotrue.api.apiURL)}))}),o.setSiteURL=(0,r.action)(function(e){o.siteURL=e}),o.login=(0,r.action)(function(e,t){return o.startAction(),o.gotrue.login(e,t,o.remember).then((0,r.action)(function(e){o.user=e,o.modal.page="user",o.invite_token=null,o.email_change_token&&o.doEmailChange(),o.saving=!1})).catch(o.setError)}),o.externalLogin=(0,r.action)(function(e){o.error=null,o.message=null;var t=o.invite_token?o.gotrue.acceptInviteExternalUrl(e,o.invite_token):o.gotrue.loginExternalUrl(e);window.location.href=t}),o.completeExternalLogin=(0,r.action)(function(e){o.startAction(),o.gotrue.createUser(e,o.remember).then(function(e){o.user=e,o.modal.page="user",o.saving=!1}).catch(o.setError)}),o.signup=(0,r.action)(function(e,t,n){return o.startAction(),o.gotrue.signup(t,n,{full_name:e}).then((0,r.action)(function(){o.settings.autoconfirm?o.login(t,n,o.remember):o.message="confirm",o.saving=!1})).catch(o.setError)}),o.logout=(0,r.action)(function(){if(o.user)return o.startAction(),o.user.logout().then((0,r.action)(function(){o.user=null,o.modal.page="login",o.saving=!1})).catch(o.setError);o.modal.page="login",o.saving=!1}),o.updatePassword=(0,r.action)(function(e){o.startAction(),(o.recovered_user||o.user).update({password:e}).then(function(e){o.user=e,o.recovered_user=null,o.modal.page="user",o.saving=!1}).catch(o.setError)}),o.acceptInvite=(0,r.action)(function(e){o.startAction(),o.gotrue.acceptInvite(o.invite_token,e,o.remember).then(function(e){o.saving=!1,o.invite_token=null,o.user=e,o.modal.page="user"}).catch(o.setError)}),o.doEmailChange=(0,r.action)(function(){return o.startAction(),o.user.update({email_change_token:o.email_change_token}).then((0,r.action)(function(e){o.user=e,o.email_change_token=null,o.message="email_changed",o.saving=!1})).catch(o.setError)}),o.verifyToken=(0,r.action)(function(e,t){var n=o.gotrue;switch(o.modal.isOpen=!0,e){case"confirmation":o.startAction(),o.modal.page="signup",n.confirm(t,o.remember).then((0,r.action)(function(e){o.user=e,o.saving=!1})).catch((0,r.action)(function(e){console.error(e),o.message="verfication_error",o.modal.page="signup",o.saving=!1}));break;case"email_change":o.email_change_token=t,o.modal.page="message",o.user?o.doEmailChange():o.modal.page="login";break;case"invite":o.modal.page=e,o.invite_token=t;break;case"recovery":o.startAction(),o.modal.page=e,o.gotrue.recover(t,o.remember).then(function(e){o.saving=!1,o.recovered_user=e}).catch(function(e){o.saving=!1,o.error=e,o.modal.page="login"});break;default:o.error="Unkown token type"}}),o.requestPasswordRecovery=(0,r.action)(function(e){o.startAction(),o.gotrue.requestPasswordRecovery(e).then((0,r.action)(function(){o.message="password_mail",o.saving=!1})).catch(o.setError)}),o.openModal=(0,r.action)(function(e){o.modal.page=e,o.modal.isOpen=!0}),o.closeModal=(0,r.action)(function(){o.modal.isOpen=!1,o.error=null,o.message=null,o.saving=!1}),t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=(0,n(2).connect)(["store"])(a=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleSignup=function(e){e.preventDefault(),i.props.store.openModal("signup")},i.handleLogin=function(e){e.preventDefault(),i.props.store.openModal("login")},i.handleLogout=function(e){e.preventDefault(),i.props.store.openModal("user")},i.handleButton=function(e){e.preventDefault(),i.props.store.openModal(i.props.store.user?"user":"login")},a=n,o(i,a)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.store.user;return"button"===this.props.mode?(0,u.h)("a",{className:"netlify-identity-button",href:"#",onClick:this.handleButton},this.props.text||(e?"Log out":"Log in")):e?(0,u.h)("ul",{className:"netlify-identity-menu"},(0,u.h)("li",{className:"netlify-identity-item netlify-identity-user-details"},"Logged in as"," ",(0,u.h)("span",{className:"netlify-identity-user"},e.user_metadata.name||e.email)),(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-logout",href:"#",onClick:this.handleLogout},"Log out"))):(0,u.h)("ul",{className:"netlify-identity-menu"},(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-signup",href:"#",onClick:this.handleSignup},"Sign up")),(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-login",href:"#",onClick:this.handleLogin},"Log in")))}}]),t}(u.Component))||a},function(e,t,n){t=e.exports=n(27)(!1),t.push([e.i,'::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n.modalContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  line-height: 1.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 99999;\n}\n\n.modalContainer::before {\n  content: "";\n  display: block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  z-index: -1;\n}\n\n.modalDialog {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.modalContent {\n  position: relative;\n  padding: 32px;\n  opacity: 0;\n  -webkit-transform: translateY(10px) scale(1);\n          transform: translateY(10px) scale(1);\n  background: #fff;\n}\n\n[aria-hidden="false"] .modalContent {\n    -webkit-animation: bouncyEntrance 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n            animation: bouncyEntrance 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n@-webkit-keyframes bouncyEntrance {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px) scale(0.9);\n            transform: translateY(10px) scale(0.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes bouncyEntrance {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px) scale(0.9);\n            transform: translateY(10px) scale(0.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n  }\n}\n\n@media (min-width: 480px) {\n  .modalContainer::before {\n    background-color: rgb(14, 30, 37);\n    -webkit-animation: fadeIn 0.1s ease-in;\n            animation: fadeIn 0.1s ease-in;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n  .modalDialog {\n    max-width: 364px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n\n  .modalContent {\n    background: #fff;\n    -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .07),\n      0 12px 32px 0 rgba(14, 30, 37, .1);\n            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .07),\n      0 12px 32px 0 rgba(14, 30, 37, .1);\n    border-radius: 8px;\n    margin-top: 32px;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.67;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.67;\n  }\n}\n\n.flashMessage {\n  text-align: center;\n  color: rgb(14, 30, 37);\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #f2f3f3;\n  padding: 6px;\n  border-radius: 4px;\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n}\n\n.flashMessage:hover,\n.flashMessage:focus {\n  opacity: 1;\n}\n\n.error {\n  color: #fa3946;\n  background-color: #fceef0;\n  opacity: 1;\n}\n\n.error span::before {\n  content: "";\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  margin-right: 4px;\n  width: 16px;\n  height: 16px;\n  background: no-repeat center center;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjRkEzOTQ2IiBkPSJNOCwxLjMzMzMzMzMzIEMxMS42NzYsMS4zMzMzMzMzMyAxNC42NjY2NjY3LDQuMzI0IDE0LjY2NjY2NjcsOCBDMTQuNjY2NjY2NywxMS42NzYgMTEuNjc2LDE0LjY2NjY2NjcgOCwxNC42NjY2NjY3IEM0LjMyNCwxNC42NjY2NjY3IDEuMzMzMzMzMzMsMTEuNjc2IDEuMzMzMzMzMzMsOCBDMS4zMzMzMzMzMyw0LjMyNCA0LjMyNCwxLjMzMzMzMzMzIDgsMS4zMzMzMzMzMyBaIE04LDAgQzMuNTgyLDAgMCwzLjU4MiAwLDggQzAsMTIuNDE4IDMuNTgyLDE2IDgsMTYgQzEyLjQxOCwxNiAxNiwxMi40MTggMTYsOCBDMTYsMy41ODIgMTIuNDE4LDAgOCwwIFogTTcuMTI2NjY2NjcsNS4wMTczMzMzMyBDNy4wNjA2NjY2Nyw0LjQ3OTMzMzMzIDcuNDc4NjY2NjcsNCA4LjAyNTMzMzMzLDQgQzguNTM5MzMzMzMsNCA4Ljk0MzMzMzMzLDQuNDUwNjY2NjcgOC44Nzg2NjY2Nyw0Ljk2NzMzMzMzIEw4LjM3NCw5LjAwMjY2NjY3IEM4LjM1MDY2NjY3LDkuMTkxMzMzMzMgOC4xOSw5LjMzMzMzMzMzIDgsOS4zMzMzMzMzMyBDNy44MSw5LjMzMzMzMzMzIDcuNjQ5MzMzMzMsOS4xOTEzMzMzMyA3LjYyNTMzMzMzLDkuMDAyNjY2NjcgTDcuMTI2NjY2NjcsNS4wMTczMzMzMyBMNy4xMjY2NjY2Nyw1LjAxNzMzMzMzIFogTTgsMTIuMTY2NjY2NyBDNy41NCwxMi4xNjY2NjY3IDcuMTY2NjY2NjcsMTEuNzkzMzMzMyA3LjE2NjY2NjY3LDExLjMzMzMzMzMgQzcuMTY2NjY2NjcsMTAuODczMzMzMyA3LjU0LDEwLjUgOCwxMC41IEM4LjQ2LDEwLjUgOC44MzMzMzMzMywxMC44NzMzMzMzIDguODMzMzMzMzMsMTEuMzMzMzMzMyBDOC44MzMzMzMzMywxMS43OTMzMzMzIDguNDYsMTIuMTY2NjY2NyA4LDEyLjE2NjY2NjcgWiIvPgo8L3N2Zz4K);\n}\n\n.success {\n}\n\n.disabled {\n  opacity: 0.38;\n  pointer-events: none;\n}\n\n.infoText {\n  text-align: center;\n  margin: 32px 0;\n}\n\n.infoTextEmail {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.saving {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAMAAACeYYN3AAAAxlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DTx3aAAAAQnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEGgjKRfAAACk0lEQVR4AYXQDXP5WhAG8CUhiSQqSv4RRRMVL1Fa1VZf3PL9v9Tde9wc9M8+P8/M7s6czJiHgNIvVCJO6YiAMlAiWckASiQrm4bJMZTDrmbBIEC9qpgVjp6n4B+oyEwCzKrMQBVaQIlkpmXZln1dhQB+49gOh5dLexlV6MhsAqyazEQVugCqsOK5nsQmwPWZ53ucvyczSGb4l9T9OsdnLgFOXVZFFd4AqEKrIasR4AdBI2hw1GR6VzMwSWY2A60ZNDl6KnUC3KbMRhXeAqhCpyXzCAjarNVucdqXVEhWaRfCdsj5vQcE1EOZQ7Jy+EcUlklWi2Q3BLQ6nagTcTra2Y0qrHZirRN3OOezTUAjvq4bd7suqpDfSGJUoXcnCwiIerIqqlC96vf6HD1ZsUcE3PYH/QGnrx3uYnqoQn4l6aMK/XtZi4BuIrNIZqVJkiapkhx37Y6AcDgcpsNU44Nz3OuoQn4jSVGFNw+ykID+SGaTzM5G2YiTFVM73AMConE2zjhj7XAXs4EqHE/4d12GKgwmsoiAZCpzSObMptPZdHZVSkCc5/ksnym8cPRUmiQzpvNcmedzTl4o7qlBsuZc1iVg9ChDFdYWshEBveV/FssFZ/l7Z7eowsfl0/JJ4UXj43A/ogpbT7IeAZNnWQ1VuJJNCBi8HKxeVhw9tRaq8JkfrV/WHDULxb1CFbbX7HX9yllfck9A/ipzSea+yeYEJO+yEFX4tim8b94VXjj/zzdU4Z/NmY/NB+fkTglYfMg8knmfsiUBD1+yCFX4+X309f3FOds/UYVR8fH2e6vwovExIuB5K/NJ5v8jWxGQ/chiVOF2d+pn98M5zt3WJFm83+/2O4UXjprabkzAWn+o56k9qvBfX4hMaM+SxOMAAAAASUVORK5CYII=);\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-origin: border-box;\n  background-position: 0% 0%;\n  -webkit-animation: loading 20s linear infinite;\n          animation: loading 20s linear infinite;\n  pointer-events: none;\n}\n\n.saving::after {\n  content: "\\2026";\n}\n\n@-webkit-keyframes loading {\n  0% {\n    background-position: 0% 0%;\n  }\n\n  100% {\n    background-position: 700% 0%;\n  }\n}\n\n@keyframes loading {\n  0% {\n    background-position: 0% 0%;\n  }\n\n  100% {\n    background-position: 700% 0%;\n  }\n}\n\n.btn {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 14px 0 0;\n  padding: 6px;\n  outline: 0;\n  cursor: pointer;\n  border: 2px solid rgb(14, 30, 37);\n  border-radius: 4px;\n  background-color: #2d3b41;\n  color: #fff;\n  -webkit-transition: background-color 0.2s ease;\n  transition: background-color 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.btn:hover,\n.btn:focus {\n  background-color: rgb(14, 30, 37);\n  text-decoration: none;\n}\n\n.btnClose {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 6px;\n  background: #fff;\n  color: #a3a9ac;\n}\n\n.btnClose::before {\n  content: "\\D7";\n  font-size: 20px;\n  line-height: 22px;\n}\n\n.btnClose:hover,\n.btnClose:focus {\n  background: #e9ebeb;\n  color: rgb(14, 30, 37);\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: -8px;\n  margin-bottom: 32px;\n}\n\n.btnHeader {\n  font-size: 16px;\n  line-height: 24px;\n  background: #fff;\n  color: #a3a9ac;\n  border: 0;\n  border-bottom: 2px solid #e9ebeb;\n  border-radius: 4px 4px 0 0;\n  margin: 0;\n}\n\n.btnHeader:focus,\n.btnHeader.active {\n  background: #fff;\n  color: rgb(14, 30, 37);\n  border-color: rgb(14, 30, 37);\n  font-weight: 700;\n}\n\n.btnHeader:not(:only-child):hover {\n  background-color: #e9ebeb;\n  color: rgb(14, 30, 37);\n}\n\n.btnHeader:only-child {\n  cursor: auto;\n}\n\n.btnLink {\n  display: block;\n  position: relative;\n  width: auto;\n  height: auto;\n  margin: 14px auto 0;\n  padding: 6px;\n  padding-bottom: 0;\n  outline: 0;\n  cursor: pointer;\n  color: rgb(14, 30, 37);\n  border: none;\n  border-bottom: 2px solid #e9ebeb;\n  border-radius: 0;\n  background-color: inherit;\n  -webkit-transition: border-color 0.2s ease;\n  transition: border-color 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.btnLink:hover,\n.btnLink:focus {\n  background-color: inherit;\n  border-color: #a3a9ac;\n}\n\n.form {\n}\n\n.formGroup {\n  position: relative;\n  margin-top: 14px;\n}\n\n.formControl {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: 40px;\n  margin: 0;\n  padding: 6px 12px 6px 34px;\n  border: 2px solid #e9ebeb;\n  border-radius: 4px;\n  background: #fff;\n  color: rgb(14, 30, 37);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  -webkit-transition: -webkit-box-shadow ease-in-out 0.15s;\n  transition: -webkit-box-shadow ease-in-out 0.15s;\n  transition: box-shadow ease-in-out 0.15s;\n  transition: box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.inputFieldIcon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n  pointer-events: none;\n}\n\n.inputFieldName {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsNyBDNi4zNDMxNDU3NSw3IDUsNS42NTY4NTQyNSA1LDQgQzUsMi4zNDMxNDU3NSA2LjM0MzE0NTc1LDEgOCwxIEM5LjY1Njg1NDI1LDEgMTEsMi4zNDMxNDU3NSAxMSw0IEMxMSw1LjY1Njg1NDI1IDkuNjU2ODU0MjUsNyA4LDcgWiBNOCwxNSBMMS41LDE1IEMxLjUsMTEuMTM0MDA2OCA0LjQxMDE0OTEzLDggOCw4IEMxMS41ODk4NTA5LDggMTQuNSwxMS4xMzQwMDY4IDE0LjUsMTUgTDgsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIi8+PC9zdmc+);\n}\n\n.inputFieldEmail {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE2IDExIj4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xLjE3MDczMTcxLDMgQzAuNTIyMTQ2MzQxLDMgMy45MDI0NTk4N2UtMDgsMy41NDUxMTA4MSAzLjkwMjQ1OTg3ZS0wOCw0LjIyMjIyMTU0IEwzLjkwMjQ1OTg3ZS0wOCwxMi43Nzc3Nzg1IEMzLjkwMjQ1OTg3ZS0wOCwxMy40NTQ4ODkyIDAuNTIyMTQ2MzQxLDE0IDEuMTcwNzMxNzEsMTQgTDE0LjgyOTI2ODMsMTQgQzE1LjQ3Nzg1MzcsMTQgMTYsMTMuNDU0ODg5MiAxNiwxMi43Nzc3Nzg1IEwxNiw0LjIyMjIyMTU0IEMxNiwzLjU0NTExMDgxIDE1LjQ3Nzg1MzcsMyAxNC44MjkyNjgzLDMgTDEuMTcwNzMxNzEsMyBaIE0yLjMzNzQyMTE5LDUuMDAxODY1NjYgQzIuNDU3NTExNzUsNC45ODk1NTIxNCAyLjU2MDcxNDU3LDUuMDM5MzM5OCAyLjYzNjM1OTg1LDUuMTE3Mjg0MzcgTDcuNDgyNjA2MTcsMTAuMTEzMjU0NSBDNy43ODQ0ODgyMiwxMC40MjQ3NDU1IDguMjAzMjc4MjksMTAuNDI0NzY2IDguNTA1ODk2MTksMTAuMTEzMjU0NSBMMTMuMzYzNjQwMiw1LjExNzI4NDM3IEMxMy41MDUxMjU1LDQuOTcxMjA0OTkgMTMuNzUyOTc3OSw0Ljk4MTg5NzIzIDEzLjg4MzkyMjIsNS4xMzk3MzYwMiBDMTQuMDE0ODY2NSw1LjI5NzU3NDgxIDE0LjAwNTI4MjEsNS41NzQwNzQ4OCAxMy44NjM3OTY3LDUuNzIwMTU0MjYgTDExLjExNTg2MDYsOC41NDg0MTE1MiBMMTMuODU4MDU3MSwxMS4yNjc2NDY5IEMxNC4wMjE3ODM1LDExLjQwMzE5ODIgMTQuMDQ4OTM2MywxMS43MDE0OTMyIDEzLjkxMjk4ODIsMTEuODcwOTg4OCBDMTMuNzc3MDQwMSwxMi4wNDA1MDQ5IDEzLjUwODI4OTcsMTIuMDQzNDE5MSAxMy4zNjkzOTgyLDExLjg3Njk0MDQgTDEwLjU3NTQ3MTUsOS4xMDYzOTg2MiBMOS4wMDYwNTI3NSwxMC43MTYxMjQ0IEM4LjQzNDk0MTk1LDExLjMwNDAzMzQgNy41NTMzMDI4NiwxMS4zMDUxNjIxIDYuOTgyNDY4LDEwLjcxNjEyNDQgTDUuNDI0NTI4NSw5LjEwNjM5ODYyIEwyLjYzMDYwMTgzLDExLjg3Njk0MDQgQzIuNDkxNzEwMzMsMTIuMDQzNDM5NyAyLjIyMjk1OTg4LDEyLjA0MDUyNTUgMi4wODcwMTE3OCwxMS44NzA5ODg4IEMxLjk1MTA2MzY3LDExLjcwMTQ5MzIgMS45NzgyMTY1LDExLjQwMzE5ODIgMi4xNDE5NDI5LDExLjI2NzY0NjkgTDQuODg0MTM5MzksOC41NDg0MTE1MiBMMi4xMzYyMDMyOCw1LjcyMDE1NDI2IEMyLjAyODcxNDE0LDUuNjE2MjI4MTYgMS45ODM1NTE0MSw1LjQzODk1NDUzIDIuMDI1OTkxNSw1LjI4NzQ5ODI1IEMyLjA2ODQxMzE5LDUuMTM2MDYyNDkgMi4xOTYwMjc4MSw1LjAxOTAyMjQ5IDIuMzM3NDIxMTksNS4wMDE4NjU2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjwvc3ZnPg==);\n}\n\n.inputFieldPassword {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDEyIDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0yLjQ0NTkxMDQ1LDMuNjQzMDg0MjcgQzIuNDQ1OTEwMzgsMi42NzY2MjEzNyAyLjgxODk3NTQ2LDEuNzQ5NzYzOTMgMy40ODI5OTUxOCwxLjA2NjUxMDUyIEM0LjE0NzAxNDksMC4zODMyNTcxMTEgNS4wNDc1NjY0MywtMC4wMDAzOTMwNDg2MTggNS45ODY0NDEwNSwzLjAyMTc0MDY5ZS0wNyBMNi4xMTc1MTg0NywzLjAyMTc0MDY5ZS0wNyBDOC4wNjkyOTIwNSwwLjAwMjQ1Mjc4Mzg0IDkuNjUwNzAwMTMsMS42MzA5OTI4MyA5LjY1MjI4NzQyLDMuNjQwMTE4NzkgTDkuNjUyMjg3NDIsNC42NzgwMzQ0NSBDOS4xMzk1MDEwNSw0LjcwMzI0MDk4IDguNjM2Nzk3NTYsNC43NDYyNDAzNCA4LjEzMTIxMzI1LDQuODAxMTAxNiBMOC4xMzEyMTMyNSwzLjY0MzA4NDI3IEM4LjEzMTIxMzI1LDIuNDk2NjM0MjkgNy4yMjgzNjE2LDEuNTY3MjUyOTUgNi4xMTQ2Mzc2NCwxLjU2NzI1Mjk1IEw1Ljk4MzU2MDIzLDEuNTY3MjUyOTUgQzQuODY5ODM2MjgsMS41NjcyNTI5NSAzLjk2Njk4NDYyLDIuNDk2NjM0MjkgMy45NjY5ODQ2MiwzLjY0MzA4NDI3IEwzLjk2Njk4NDYyLDMuOTYwMzg5OTEgQzMuOTY3NTc5ODgsNC4zNTY0OTE4MiAzLjY3NzAzNTY1LDQuNjg4ODc1OTUgMy4yOTQzMTI2Miw0LjcyOTkzMDI0IEwzLjI3ODQ2ODEsNC43Mjk5MzAyNCBDMy4wNjYyNDA5Miw0Ljc1MzUwMjk2IDIuODU0MjgyODcsNC42ODMxMDg3IDIuNjk1NDU2MTMsNC41MzYzMDM3NiBDMi41MzY2Mjk0LDQuMzg5NDk4ODIgMi40NDU5MDUzMyw0LjE4MDEyMTMzIDIuNDQ1OTEwNDUsMy45NjAzODk5MSBMMi40NDU5MTA0NSwzLjY0MzA4NDI3IFogTTExLjQxNjY2Niw3LjExNTY1MzUyIEwxMS40MTY2NjYsMTIuNjkwNzQzMyBDMTEuNDE3MDQwOCwxMy4wODMxMTQzIDExLjE0NTkyMDMsMTMuNDIwMTM3MSAxMC43NzEzNjE4LDEzLjQ5MjkwMzkgTDEwLjI5MDI2NDQsMTMuNTg2MzE2MyBDOC44NzYwNzU2NCwxMy44NjE1OTU5IDcuNDM5OTcxMzMsMTQuMDAwMDkzNyA2LjAwMDcyMDA1LDEzLjk5OTk5OTggQzQuNTYwOTg3NTgsMTQuMDAwMTg2MiAzLjEyNDM5Njg0LDEzLjg2MTY4OCAxLjcwOTczNTI0LDEzLjU4NjMxNjMgTDEuMjI4NjM3OTIsMTMuNDkyOTAzOSBDMC44NTQwNzk0MDcsMTMuNDIwMTM3MSAwLjU4Mjk1ODg2NywxMy4wODMxMTQzIDAuNTgzMzMzNzIyLDEyLjY5MDc0MzMgTDAuNTgzMzMzNzIyLDcuMTE1NjUzNTIgQzAuNTgyOTU4ODY3LDYuNzIzMjgyNTYgMC44NTQwNzk0MDcsNi4zODYyNTk4MSAxLjIyODYzNzkyLDYuMzEzNDkyOTkgTDEuMjk5MjE4MDYsNi4zMDAxNDgzNiBDNC40MDU5OTg0Nyw1LjY5NTEyMTY3IDcuNTk1NDQxNjIsNS42OTUxMjE2NyAxMC43MDIyMjIsNi4zMDAxNDgzNiBMMTAuNzcyODAyMiw2LjMxMzQ5Mjk5IEMxMS4xNDY3ODgsNi4zODY4ODY0NSAxMS40MTcxNzE2LDYuNzIzNzQ1MTYgMTEuNDE2NjY2LDcuMTE1NjUzNTIgWiIvPjwvc3ZnPg==);\n}\n\n.inputFieldUrl {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xMCw1IEMxMCwzLjg5NTQzMDUgOS4xMDQ1Njk1LDMgOCwzIEM2Ljg5NTQzMDUsMyA2LDMuODk1NDMwNSA2LDUgTTQsMTAgTDQsMTEgTDYsMTEgTDYsMTAgQzYsOS40NDc3MTUyNSA1LjU1MjI4NDc1LDkgNSw5IEM0LjQ0NzcxNTI1LDkgNCw5LjQ0NzcxNTI1IDQsMTAgWiBNMTIsMTAgQzEyLDkuNDQ3NzE1MjUgMTEuNTUyMjg0Nyw5IDExLDkgQzEwLjQ0NzcxNTMsOSAxMCw5LjQ0NzcxNTI1IDEwLDEwIEwxMCwxMSBMMTIsMTEgTDEyLDEwIFogTTYsNiBMNiw1IEw0LDUgTDQsNiBDNCw2LjU1MjI4NDc1IDQuNDQ3NzE1MjUsNyA1LDcgQzUuNTUyMjg0NzUsNyA2LDYuNTUyMjg0NzUgNiw2IFogTTEwLDYgQzEwLDYuNTUyMjg0NzUgMTAuNDQ3NzE1Myw3IDExLDcgQzExLjU1MjI4NDcsNyAxMiw2LjU1MjI4NDc1IDEyLDYgTDEyLDUgTDEwLDUgTDEwLDYgWiBNNCw1IEM0LDIuNzkwODYxIDUuNzkwODYxLDEgOCwxIEMxMC4yMDkxMzksMSAxMiwyLjc5MDg2MSAxMiw1IEw0LDUgWiBNNCwxMSBMMTIsMTEgQzEyLDEzLjIwOTEzOSAxMC4yMDkxMzksMTUgOCwxNSBDNS43OTA4NjEsMTUgNCwxMy4yMDkxMzkgNCwxMSBaIE0xMCwxMSBMNiwxMSBDNiwxMi4xMDQ1Njk1IDYuODk1NDMwNSwxMyA4LDEzIEM5LjEwNDU2OTUsMTMgMTAsMTIuMTA0NTY5NSAxMCwxMSBaIE04LDExIEM3LjQ0NzcxNTI1LDExIDcsMTAuNTUyMjg0NyA3LDEwIEw3LDYgQzcsNS40NDc3MTUyNSA3LjQ0NzcxNTI1LDUgOCw1IEM4LjU1MjI4NDc1LDUgOSw1LjQ0NzcxNTI1IDksNiBMOSwxMCBDOSwxMC41NTIyODQ3IDguNTUyMjg0NzUsMTEgOCwxMSBaIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA4LjcwNyA2LjI5MykiLz48L3N2Zz4=);\n}\n\n.formLabel {\n}\n\n.hr {\n  border: 0;\n  border-top: 2px solid #e9ebeb;\n  margin: 32px 0 -1px;\n  text-align: center;\n  overflow: visible;\n}\n\n.hr::before {\n  content: "or";\n  position: relative;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1;\n  text-transform: uppercase;\n  background-color: #fff;\n  color: rgb(14, 30, 37);\n  padding: 4px;\n  top: -11px;\n}\n\n.btnProvider {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.btnProvider::before {\n  content: "";\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 40px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  top: -2px;\n  left: 14px;\n}\n\n.providerGoogle {\n  background-color: #4285f4;\n  border-color: #366dc7;\n}\n\n.providerGoogle:hover,\n.providerGoogle:focus {\n  background-color: #366dc7;\n}\n\n.providerGitHub {\n  background-color: #333;\n  border-color: #000;\n}\n\n.providerGitHub:hover,\n.providerGitHub:focus {\n  background-color: #000;\n}\n\n.providerGitLab {\n  background-color: #e24329;\n  border-color: #b03320;\n}\n\n.providerGitLab:hover,\n.providerGitLab:focus {\n  background-color: #b03320;\n}\n\n.providerBitbucket {\n  background-color: #205081;\n  border-color: #14314f;\n}\n\n.providerBitbucket:hover,\n.providerBitbucket:focus {\n  background-color: #14314f;\n}\n\n.providerGoogle:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDg4IC0yKSI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wLjY1MjczNDM3NSwzLjI5NTI4MjQ0IEMwLjIzNzk4NDM3NSw0LjEwNTgzMjA2IDIuODQyMTcwOTRlLTE0LDUuMDE2MDQ1OCAyLjg0MjE3MDk0ZS0xNCw1Ljk3OTM4OTMxIEMyLjg0MjE3MDk0ZS0xNCw2Ljk0MjczMjgyIDAuMjM3OTg0Mzc1LDcuODUyOTAwNzYgMC42NTI3MzQzNzUsOC42NjM0NTAzOCBDMS42NTkwNDY4NywxMC42MTY3MDIzIDMuNzI2MDkzNzUsMTEuOTU4Nzc4NiA2LjExOTUzMTI1LDExLjk1ODc3ODYgQzcuNzcxNzgxMjUsMTEuOTU4Nzc4NiA5LjE1ODg1OTM3LDExLjQyNzI1MTkgMTAuMTcyMDE1NiwxMC41MTA0NDI3IEMxMS4zMjc5MDYyLDkuNDY3MzU4NzggMTEuOTk0MjgxMiw3LjkzMjY0MTIyIDExLjk5NDI4MTIsNi4xMTIyNTk1NCBDMTEuOTk0MjgxMiw1LjYyMDYyNTk1IDExLjk1MzQ1MzEsNS4yNjE4NjI2IDExLjg2NTA5MzcsNC44ODk4MTY3OSBMNi4xMTk1MzEyNSw0Ljg4OTgxNjc5IEw2LjExOTUzMTI1LDcuMTA4ODA5MTYgTDkuNDkyMDQ2ODcsNy4xMDg4MDkxNiBDOS40MjQwNzgxMiw3LjY2MDI1OTU0IDkuMDU2OTA2MjUsOC40OTA3MzI4MiA4LjI0MDk1MzEyLDkuMDQ4Nzc4NjMgQzcuNzI0MjAzMTIsOS40MDA5MDA3NiA3LjAzMDY0MDYyLDkuNjQ2NzE3NTYgNi4xMTk1MzEyNSw5LjY0NjcxNzU2IEM0LjUwMTI2NTYyLDkuNjQ2NzE3NTYgMy4xMjc3ODEyNSw4LjYwMzY3OTM5IDIuNjM4MTcxODcsNy4xNjE5ODQ3MyBMMi42Mjg3MTIwNSw3LjE2Mjc2OTU5IEMyLjUwNTM0MTU4LDYuNzk3Mjk0NjggMi40MzQyMTg3NSw2LjM4MTEyMjg1IDIuNDM0MjE4NzUsNS45NzkzODkzMSBDMi40MzQyMTg3NSw1LjU2NzQ1MDM4IDIuNTA4OTg0MzgsNS4xNjg4Mzk2OSAyLjYzMTM3NSw0Ljc5Njc5Mzg5IEMzLjEyNzc4MTI1LDMuMzU1MDk5MjQgNC41MDEyNjU2MiwyLjMxMjAxNTI3IDYuMTE5NTMxMjUsMi4zMTIwMTUyNyBDNy4yNjg2MjUsMi4zMTIwMTUyNyA4LjA0Mzc1LDIuNzk3MDA3NjMgOC40ODU3MzQzNywzLjIwMjMwNTM0IEwxMC4yMTI3OTY5LDEuNTU0NjQxMjIgQzkuMTUyMTA5MzcsMC41OTEyOTc3MSA3Ljc3MTc4MTI1LDguODgxNzg0MmUtMTYgNi4xMTk1MzEyNSw4Ljg4MTc4NDJlLTE2IEMzLjcyNjA5Mzc1LDguODgxNzg0MmUtMTYgMS42NTkwNDY4NywxLjM0MjAzMDUzIDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgTDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPiAgPC9nPjwvc3ZnPg==);\n}\n\n.providerGitHub:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjAwMDA2NjI1LDAgQzMuNTgyMzMwNzksMCAwLDMuNjcyMzE1ODUgMCw4LjIwMjUzNzczIEMwLDExLjgyNjYzMzggMi4yOTIyNjI0OCwxNC45MDEyOTUgNS40NzA5MzM1NiwxNS45ODU5MDIzIEM1Ljg3MDc1MTM5LDE2LjA2MTgzMTUgNi4wMTc1MzY3NSwxNS44MDc5NjQyIDYuMDE3NTM2NzUsMTUuNTkxMzE0NCBDNi4wMTc1MzY3NSwxNS4zOTU3MTgzIDYuMDEwMTE3OTksMTQuNzQ5NTcyMiA2LjAwNjY3MzU2LDE0LjA2NDE3MTEgQzMuNzgxMDQ3NDEsMTQuNTYwMzYwMiAzLjMxMTQxMzc5LDEzLjA5NjM3ODEgMy4zMTE0MTM3OSwxMy4wOTYzNzgxIEMyLjk0NzQ5NzQsMTIuMTQ4MjgwNiAyLjQyMzE1MDUsMTEuODk2MTc5IDIuNDIzMTUwNSwxMS44OTYxNzkgQzEuNjk3MzA0OTEsMTEuMzg3MDg2IDIuNDc3ODYzNzksMTEuMzk3NTQ0OSAyLjQ3Nzg2Mzc5LDExLjM5NzU0NDkgQzMuMjgxMjA4ODcsMTEuNDU1NDA4NyAzLjcwNDIxMDMxLDEyLjI0MjgxODcgMy43MDQyMTAzMSwxMi4yNDI4MTg3IEM0LjQxNzczNTQ3LDEzLjQ5NjgwNjcgNS41NzU3MjM0NiwxMy4xMzQyNzQ4IDYuMDMyMjQxNzgsMTIuOTI0Njg4MiBDNi4xMDQwNDQ3MiwxMi4zOTQ1NDE0IDYuMzExMzcyNDQsMTIuMDMyNjg4NyA2LjU0MDE2MTQ0LDExLjgyNzg1NjIgQzQuNzYzMjM3NDQsMTEuNjIwNDQyOCAyLjg5NTMwMTE5LDEwLjkxNzExMjEgMi44OTUzMDExOSw3Ljc3NDEyNzk5IEMyLjg5NTMwMTE5LDYuODc4NTk2ODggMy4yMDc4MTYxOCw2LjE0Njg3NzU3IDMuNzE5NTc3NzMsNS41NzI0NDk5OSBDMy42MzY1MTQxNyw1LjM2NTg1MTY2IDMuMzYyNjgyNjgsNC41MzE1ODAxNyAzLjc5NzA3NzIxLDMuNDAxNzQxMzMgQzMuNzk3MDc3MjEsMy40MDE3NDEzMyA0LjQ2ODg3MTg4LDMuMTgxMjg4MjcgNS45OTc2NjUwNyw0LjI0MjUzMjY3IEM2LjYzNTgxMDQ0LDQuMDYwNzkxMzQgNy4zMjAxOTA0NCwzLjk2OTY0OTAyIDguMDAwMDY2MjUsMy45NjY1MjQ5MiBDOC42Nzk5NDIwNiwzLjk2OTY0OTAyIDkuMzY0ODUyLDQuMDYwNzkxMzQgMTAuMDA0MTg5Niw0LjI0MjUzMjY3IEMxMS41MzExMjgxLDMuMTgxMjg4MjcgMTIuMjAxOTk1NCwzLjQwMTc0MTMzIDEyLjIwMTk5NTQsMy40MDE3NDEzMyBDMTIuNjM3NDQ5OCw0LjUzMTU4MDE3IDEyLjM2MzQ4NTgsNS4zNjU4NTE2NiAxMi4yODA0MjIzLDUuNTcyNDQ5OTkgQzEyLjc5MzM3NjEsNi4xNDY4Nzc1NyAxMy4xMDM3NzE0LDYuODc4NTk2ODggMTMuMTAzNzcxNCw3Ljc3NDEyNzk5IEMxMy4xMDM3NzE0LDEwLjkyNDU4MjggMTEuMjMyMjU4MywxMS42MTgyNjk2IDkuNDUwODMwMDYsMTEuODIxMzM2MyBDOS43Mzc3NzY4NywxMi4wNzU4ODI5IDkuOTkzNDU4ODcsMTIuNTc1MDYwMiA5Ljk5MzQ1ODg3LDEzLjM0MDMyOTggQzkuOTkzNDU4ODcsMTQuNDM3ODQxMSA5Ljk4NDE4NTUsMTUuMzIxMTQ3MyA5Ljk4NDE4NTUsMTUuNTkxMzE0NCBDOS45ODQxODU1LDE1LjgwOTU5NDIgMTAuMTI4MTg4NywxNi4wNjUzNjMxIDEwLjUzMzcwMzEsMTUuOTg0ODE1NiBDMTMuNzEwNjUyLDE0Ljg5ODk4NTggMTYsMTEuODI1NDExMyAxNiw4LjIwMjUzNzczIEMxNiwzLjY3MjMxNTg1IDEyLjQxODE5OTIsMCA4LjAwMDA2NjI1LDAgWiBNMi45OTYyODQ5NiwxMS42ODQ2ODgyIEMyLjk3ODY2NTQxLDExLjcyNTQzNzMgMi45MTYxMzU5MSwxMS43Mzc2NjIxIDIuODU5MTcwNDgsMTEuNzA5NjgxIEMyLjgwMTE0NTIyLDExLjY4MjkyMjMgMi43Njg1NTU3MSwxMS42MjczNjc2IDIuNzg3MzY3NTUsMTEuNTg2NDgyNyBDMi44MDQ1ODk2NSwxMS41NDQ1MTEgMi44NjcyNTE2MiwxMS41MzI4Mjk1IDIuOTI1MTQ0MzksMTEuNTYwOTQ2NSBDMi45ODMzMDIxNCwxMS41ODc3MDUxIDMuMDE2NDIxNTcsMTEuNjQzODAzMSAyLjk5NjI4NDk2LDExLjY4NDY4ODIgWiBNMy4zODk3OTkzMiwxMi4wNDQ3MDI0IEMzLjM1MTY0NTc0LDEyLjA4MDk2OTEgMy4yNzcwNjA3NywxMi4wNjQxMjYxIDMuMjI2NDU0MjYsMTIuMDA2ODA1NyBDMy4xNzQxMjU1NSwxMS45NDk2MjEgMy4xNjQzMjIyMSwxMS44NzMxNDg0IDMuMjAzMDA1NywxMS44MzYzMzgyIEMzLjI0MjM1MTU5LDExLjgwMDA3MTUgMy4zMTQ2ODQ0NSwxMS44MTcwNTAzIDMuMzY3MTQ1NjQsMTEuODc0MjM1IEMzLjQxOTQ3NDMyLDExLjkzMjA5ODggMy40Mjk2NzUxMiwxMi4wMDgwMjgxIDMuMzg5Nzk5MzIsMTIuMDQ0NzAyNCBaIE0zLjY1OTc2NTA4LDEyLjUwNTMyODMgQzMuNjEwNzQ4MzMsMTIuNTQwMjM2OCAzLjUzMDU5OTI5LDEyLjUwNzUwMTUgMy40ODEwNTI2MSwxMi40MzQ1NjA2IEMzLjQzMjAzNTgzLDEyLjM2MTYxOTUgMy40MzIwMzU4MywxMi4yNzQxNDQ2IDMuNDgyMTEyNDQsMTIuMjM5MTAwMyBDMy41MzE3OTE1NywxMi4yMDQwNTYgMy42MTA3NDgzMywxMi4yMzU1Njg4IDMuNjYwOTU3MzgsMTIuMzA3OTY2NSBDMy43MDk4NDE2OCwxMi4zODIxMjk5IDMuNzA5ODQxNjgsMTIuNDY5NjA0OCAzLjY1OTc2NTA4LDEyLjUwNTMyODMgWiBNNC4xMTYzMzQ5NSwxMy4wMzg3OTgxIEM0LjA3MjQ4NDgyLDEzLjA4ODM3NjQgMy45NzkwODgwMiwxMy4wNzUwNjUgMy45MTA3Mjk0OCwxMy4wMDc0MjE0IEMzLjg0MDc4MTI0LDEyLjk0MTI3MTggMy44MjEzMDcwMSwxMi44NDc0MTI5IDMuODY1Mjg5NjMsMTIuNzk3ODM0NyBDMy45MDk2Njk2NiwxMi43NDgxMjA3IDQuMDAzNTk2MzksMTIuNzYyMTExMyA0LjA3MjQ4NDgyLDEyLjgyOTIxMTYgQzQuMTQxOTAzMTYsMTIuODk1MjI1MyA0LjE2MzA5OTYsMTIuOTg5NzYzNCA0LjExNjMzNDk1LDEzLjAzODc5ODEgWiBNNC43MDY0MDcxOSwxMy4yMTg4OTE2IEM0LjY4NzA2NTQ2LDEzLjI4MzEzOTUgNC41OTcxMTMwNiwxMy4zMTIzNDMgNC41MDY0OTgyNywxMy4yODUwNDExIEM0LjQxNjAxNTk3LDEzLjI1NjkyNDIgNC4zNTY3OTg0MiwxMy4xODE2NzQxIDQuMzc1MDgwMzYsMTMuMTE2NzQ3IEM0LjM5Mzg5MjE5LDEzLjA1MjA5MTcgNC40ODQyNDIwMSwxMy4wMjE2NjU2IDQuNTc1NTE5MTgsMTMuMDUwODY5MiBDNC42NjU4NjkwMSwxMy4wNzg4NTAzIDQuNzI1MjE5MDUsMTMuMTUzNTU3MSA0LjcwNjQwNzE5LDEzLjIxODg5MTYgWiBNNS4zNzc5MzQxOSwxMy4yOTUyODI1IEM1LjM4MDE4NjI5LDEzLjM2MjkyNjEgNS4zMDMzNDkxOSwxMy40MTkwMjQxIDUuMjA4MjMwMTgsMTMuNDIwMjQ2NyBDNS4xMTI1ODEyNSwxMy40MjI0MiA1LjAzNTIxNDI1LDEzLjM2NzY4MDMgNS4wMzQxNTQ0MiwxMy4zMDExMjMyIEM1LjAzNDE1NDQyLDEzLjIzMjgwMDUgNS4xMDkyNjkzLDEzLjE3NzI0NTggNS4yMDQ5MTgyMywxMy4xNzU2MTU4IEM1LjMwMDAzNzI2LDEzLjE3MzcxNDIgNS4zNzc5MzQxOSwxMy4yMjgwNDY0IDUuMzc3OTM0MTksMTMuMjk1MjgyNSBaIE02LjAzNzYzNDE5LDEzLjI2OTM1NDggQzYuMDQ5MDI3MjksMTMuMzM1MzY4NSA1Ljk4MjkyMDg4LDEzLjQwMzE0NzkgNS44ODg0NjQyNSwxMy40MjEyMTM0IEM1Ljc5NTU5NzM2LDEzLjQzODU5OTcgNS43MDk2MTkyOSwxMy4zOTc4NTA1IDUuNjk3ODI4NzcsMTMuMzMyMzgwMiBDNS42ODYzMDMyMiwxMy4yNjQ3MzY1IDUuNzUzNjAxOTEsMTMuMTk2OTU3MSA1Ljg0NjMzNjMzLDEzLjE3OTQzNSBDNS45NDA5MjU0NCwxMy4xNjI1OTIgNi4wMjU1Nzg3MiwxMy4yMDIyNTQ1IDYuMDM3NjM0MTksMTMuMjY5MzU0OCBaIi8+ICA8L2c+PC9zdmc+);\n}\n\n.providerGitLab:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBMNC40MjgwOTMzMyw0Ljk5NzI4MjU0IEw5LjU4MDA5MzM2LDQuOTk3MjgyNTQgTDcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBaIE03LjAwNDA5MzM2LDEyLjk0OTIzIEwwLjgxNzg5MzMzMyw0Ljk5NzI2OTE3IEw0LjQyODA5MzMzLDQuOTk3MjY5MTcgTDcuMDA0MDkzMzYsMTIuOTQ5MjMgWiBNMC44MTc4OTk5OTksNC45OTcyODkyMyBMNy4wMDQwOTk5OCwxMi45NDkyNSBMMC4yMjg4MzMzMzMsOC4wMTE4ODA4IEMwLjA0MTksNy44NzU2NzE1MiAtMC4wMzYzLDcuNjM0MjEyNyAwLjAzNTEsNy40MTM4MTcxMiBMMC44MTc4OTk5OTksNC45OTcyODkyMyBaIE0wLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIEwyLjM2OTM2NjY3LDAuMjA3OTA0NzE0IEMyLjQ0OTE2NjY3LC0wLjAzODUwMjM1ODggMi43OTY3NjY2NywtMC4wMzg1NjkyMjY1IDIuODc2NTY2NjcsMC4yMDc5MDQ3MTQgTDQuNDI4MSw0Ljk5NzI5NTkxIEwwLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIFogTTcuMDA0MDkzMzYsMTIuOTQ5MjMgTDkuNTgwMDkzMzYsNC45OTcyNjkxNyBMMTMuMTkwMjkzMyw0Ljk5NzI2OTE3IEw3LjAwNDA5MzM2LDEyLjk0OTIzIFogTTEzLjE5MDI5MzMsNC45OTcyODkyMyBMMTMuOTczMDkzMyw3LjQxMzgxNzEyIEMxNC4wNDQ0OTMzLDcuNjM0MjEyNyAxMy45NjYyOTM0LDcuODc1NjcxNTIgMTMuNzc5MzYsOC4wMTE4ODA4IEw3LjAwNDA5MzM2LDEyLjk0OTI1IEwxMy4xOTAyOTMzLDQuOTk3Mjg5MjMgWiBNMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIEw5LjU4MDA5MzM2LDQuOTk3Mjk1OTEgTDExLjEzMTYyNjcsMC4yMDc5MDQ3MTQgQzExLjIxMTQyNjcsLTAuMDM4NTY5MjI2NSAxMS41NTkwMjY3LC0wLjAzODUwMjM1ODggMTEuNjM4ODI2NywwLjIwNzkwNDcxNCBMMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4gIDwvZz48L3N2Zz4=);\n}\n\n.providerBitbucket:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICAgIDxwYXRoIGQ9Ik03LDIuNDk4OTQxODdlLTA3IEw3LDIuNDk4OTQxODdlLTA3IEMzLjE1NzIxMjI5LDIuNDk4OTQxODdlLTA3IDAuMDAwNjM2NTM1NDM1LDEuMDIwODQ0MjQgMC4wMDA2MzY1MzU0MzUsMi4zMTM5MTM1OSBDMC4wMDA2MzY1MzU0MzUsMi42NTQxOTUxMyAwLjgyNDA5MTAyMyw3LjQ4NjE5MiAxLjE2NzE5NzE3LDkuMzkxNzY3NTkgQzEuMzA0NDM5MzcsMTAuMjc2NDk5OSAzLjU2ODkzOTUzLDExLjUwMTUxMyA3LDExLjUwMTUxMyBMNywxMS41MDE1MTMgQzEwLjQzMTA2MDIsMTEuNTAxNTEzIDEyLjYyNjkzODYsMTAuMjc2NDk5OSAxMi44MzI4MDMyLDkuMzkxNzY3NTkgQzEzLjE3NTkwODYsNy40ODYxOTIgMTMuOTk5MzYzMiwyLjY1NDE5NTEzIDEzLjk5OTM2MzIsMi4zMTM5MTM1OSBDMTMuOTMwNzQyMSwxLjAyMDg0NDI0IDEwLjg0Mjc4NzQsMi40OTg5NDE4N2UtMDcgNywyLjQ5ODk0MTg3ZS0wNyBMNywyLjQ5ODk0MTg3ZS0wNyBaIE03LDkuOTM2MjE4MzEgQzUuNzY0ODE4MjgsOS45MzYyMTgzMSA0LjgwNDEyMTI2LDguOTgzNDI5ODYgNC44MDQxMjEyNiw3Ljc1ODQxNjcxIEM0LjgwNDEyMTI2LDYuNTMzNDAzNTUgNS43NjQ4MTgyOCw1LjU4MDYxNTk3IDcsNS41ODA2MTU5NyBDOC4yMzUxODExMiw1LjU4MDYxNTk3IDkuMTk1ODc4NCw2LjUzMzQwMzU1IDkuMTk1ODc4NCw3Ljc1ODQxNjcxIEM5LjE5NTg3ODQsOC45MTUzNzM3MiA4LjIzNTE4MTEyLDkuOTM2MjE4MzEgNyw5LjkzNjIxODMxIEw3LDkuOTM2MjE4MzEgWiBNNywyLjk5NDQ3NjY3IEM0LjUyOTYzNjIyLDIuOTk0NDc2NjcgMi41Mzk2MjExLDIuNTg2MTM4OTUgMi41Mzk2MjExLDIuMDQxNjg4ODYgQzIuNTM5NjIxMSwxLjQ5NzIzODE1IDQuNTI5NjM2MjIsMS4wODg5MDA0MyA3LDEuMDg4OTAwNDMgQzkuNDcwMzYyODQsMS4wODg5MDA0MyAxMS40NjAzNzg2LDEuNDk3MjM4MTUgMTEuNDYwMzc4NiwyLjA0MTY4ODg2IEMxMS40NjAzNzg2LDIuNTg2MTM4OTUgOS40NzAzNjI4NCwyLjk5NDQ3NjY3IDcsMi45OTQ0NzY2NyBMNywyLjk5NDQ3NjY3IFoiLz4gICAgICA8cGF0aCBkPSJNMTIuMDY0NTA5NiwxMS4yMjkyODc2IEMxMS45MjcyNjY3LDExLjIyOTI4NzYgMTEuODU4NjQ1NywxMS4yOTczNDM4IDExLjg1ODY0NTcsMTEuMjk3MzQzOCBDMTEuODU4NjQ1NywxMS4yOTczNDM4IDEwLjE0MzExNTYsMTIuNjU4NDcgNy4wNTUxNjA5MywxMi42NTg0NyBDMy45NjcyMDY4NywxMi42NTg0NyAyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4yNTE2NzYxNiwxMS4yOTczNDM4IEMyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4xMTQ0MzM5NSwxMS4yMjkyODc2IDIuMDQ1ODEyODUsMTEuMjI5Mjg3NiBDMS45MDg1NzAwMiwxMS4yMjkyODc2IDEuNzcxMzI3ODEsMTEuMjk3MzQzOCAxLjc3MTMyNzgxLDExLjUwMTUxMyBMMS43NzEzMjc4MSwxMS41Njk1NjkyIEMyLjA0NTgxMjg1LDEyLjk5ODc1MTYgMi4yNTE2NzYxNiwxNC4wMTk1OTU2IDIuMjUxNjc2MTYsMTQuMTU1NzA3OSBDMi40NTc1NDAwOSwxNS4xNzY1NTI1IDQuNTE2MTc2MzIsMTUuOTkzMjI4IDYuOTg2NTM5ODIsMTUuOTkzMjI4IEw2Ljk4NjUzOTgyLDE1Ljk5MzIyOCBDOS40NTY5MDMzMSwxNS45OTMyMjggMTEuNTE1NTM5NSwxNS4xNzY1NTI1IDExLjcyMTQwMzUsMTQuMTU1NzA3OSBDMTEuNzIxNDAzNSwxNC4wMTk1OTU2IDExLjkyNzI2NjcsMTIuOTk4NzUxNiAxMi4yMDE3NTE4LDExLjU2OTU2OTIgTDEyLjIwMTc1MTgsMTEuNTAxNTEzIEMxMi4yNzAzNzI5LDExLjM2NTQgMTIuMjAxNzUxOCwxMS4yMjkyODc2IDEyLjA2NDUwOTYsMTEuMjI5Mjg3NiBMMTIuMDY0NTA5NiwxMS4yMjkyODc2IFoiLz4gICAgICA8ZWxsaXBzZSBjeD0iNyIgY3k9IjcuNjkiIHJ4PSIxLjA5OCIgcnk9IjEuMDg5Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=);\n}\n\n.callOut {\n  display: block;\n  padding: 32px;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  color: #a3a9ac;\n  text-align: center;\n}\n\n.callOut:after {\n  content: " \\2665";\n  -webkit-transition: color 4s ease;\n  transition: color 4s ease;\n}\n\n.callOut:hover:after {\n  color: red;\n}\n\n.callOut .netlifyLogo {\n  display: block;\n  margin: auto;\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4gIDxkZWZzPiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN5PSIwJSIgcj0iMTAwJSIgZng9IjUwJSIgZnk9IjAlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMS4xNTE4NSAwIC41IC0uNSkiPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMEM2QjciIG9mZnNldD0iMCUiLz4gICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEQ5QUJGIiBvZmZzZXQ9IjEwMCUiLz4gICAgPC9yYWRpYWxHcmFkaWVudD4gIDwvZGVmcz4gIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjk4MDYyMywxMS42MjYyMzc3IEMyMi44NzE3MTA3LDExLjUwNTEzMDYgMjIuNzM1NTcwNCwxMS4zOTc0Nzk4IDIyLjU3MjIwMjEsMTEuMzE2NzQxOCBDMjIuNTU4NTg4MSwxMS4zMTY3NDE4IDIyLjU0NDk3NCwxMS4yODk4MjkxIDIyLjUzMTM2LDExLjI3NjM3MjcgTDIzLjE3MTIxOTQsNy4zNjA1NzY2MSBDMjMuMTcxMjE5NCw3LjMzMzY2MzkyIDIzLjE4NDgzMzQsNy4zMjAyMDc1OCAyMy4xOTg0NDc1LDcuMzIwMjA3NTggTDIzLjIxMjA2MTUsNy4zMjAyMDc1OCBDMjMuMjEyMDYxNSw3LjMyMDIwNzU4IDIzLjIyNTY3NTUsNy4zMjAyMDc1OCAyMy4yMzkyODk2LDcuMzMzNjYzOTIgTDI2LjE2NjMwNiwxMC4yMjY3Nzc5IEMyNi4xNzk5MiwxMC4yNDAyMzQzIDI2LjE3OTkyLDEwLjI1MzY5MDYgMjYuMTc5OTIsMTAuMjY3MTQ2OSBDMjYuMTc5OTIsMTAuMjgwNjAzMyAyNi4xNjYzMDYsMTAuMjk0MDU5NiAyNi4xNTI2OTE5LDEwLjMwNzUxNiBMMjMuMDIxNDY1MSwxMS42Mzk2OTQgTDIzLjAwNzg1MSwxMS42Mzk2OTQgQzIyLjk5NDIzNywxMS42Mzk2OTQgMjIuOTk0MjM3LDExLjYzOTY5NCAyMi45ODA2MjMsMTEuNjI2MjM3NyBaIE0xNi4zNTA1NzM2LDkuNDU5NzM4MSBDMTYuMzIzMzQ1Myw5LjE5MDYxMjc0IDE2LjIyODA0NjMsOC45MjE0ODczOCAxNi4wNzgyOTA2LDguNjkyNzMwODMgQzE2LjA2NDY3NjUsOC42NzkyNzQ1NiAxNi4wNjQ2NzY1LDguNjUyMzYyMDIgMTYuMDc4MjkwNiw4LjYyNTQ0OTQ5IEwxOS4zNTkzMDEsMy41Mzg5ODAyMiBDMTkuMzU5MzAxLDMuNTI1NTIzOTUgMTkuMzcyOTE1MSwzLjUxMjA2NzY4IDE5LjM4NjUyOTMsMy41MTIwNjc2OCBDMTkuNDAwMTQzNCwzLjUxMjA2NzY4IDE5LjQwMDE0MzQsMy41MTIwNjc2OCAxOS40MTM3NTc2LDMuNTI1NTIzOTUgTDIyLjMyNzE4NTgsNi40MTg2MjE1NSBDMjIuMzQwOCw2LjQzMjA3NzgyIDIyLjM0MDgsNi40NDU1MzQwOSAyMi4zNDA4LDYuNDU4OTkwMzUgTDIxLjU3ODQwNzYsMTEuMTgyMTQwNCBDMjEuNTc4NDA3NiwxMS4yMDkwNTI5IDIxLjU2NDc5MzQsMTEuMjIyNTA5MiAyMS41NTExNzkzLDExLjIyMjUwOTIgQzIxLjM3NDE5NTMsMTEuMjc2MzM0MyAyMS4yMTA4MjU1LDExLjM1NzA3MTkgMjEuMDc0Njg0LDExLjQ2NDcyMiBDMjEuMDc0Njg0LDExLjQ3ODE3ODMgMjEuMDYxMDY5OCwxMS40NzgxNzgzIDIxLjAzMzg0MTUsMTEuNDc4MTc4MyBMMTYuMzc3ODAxOSw5LjUwMDEwNjkgQzE2LjM2NDE4NzgsOS40ODY2NTA2MyAxNi4zNTA1NzM2LDkuNDczMTk0MzcgMTYuMzUwNTczNiw5LjQ1OTczODEgWiBNMjYuOTgzMTkwNywxMS4wMjA3NjY5IEwzMS45Nzk1Nzg4LDE1Ljk3MjY2NCBDMzIuMDA2ODA3MSwxNS45ODYxMjAyIDMyLjAwNjgwNzEsMTYuMDI2NDg4OSAzMS45Nzk1Nzg4LDE2LjAyNjQ4ODkgTDMxLjk1MjM1MDUsMTYuMDUzNDAxNCBDMzEuOTUyMzUwNSwxNi4wNjY4NTc3IDMxLjkzODczNjQsMTYuMDY2ODU3NyAzMS45MTE1MDgxLDE2LjA2Njg1NzcgTDIzLjU1MjQyODMsMTIuNTI3ODY2IEMyMy41Mzg4MTQxLDEyLjUyNzg2NiAyMy41MjUyLDEyLjUwMDk1MzUgMjMuNTI1MiwxMi40ODc0OTczIEMyMy41MjUyLDEyLjQ3NDA0MSAyMy41Mzg4MTQxLDEyLjQ2MDU4NDggMjMuNTUyNDI4MywxMi40NDcxMjg2IEwyNi45NTU5NjI0LDExLjAwNzMxMDcgQzI2Ljk1NTk2MjQsMTEuMDA3MzEwNyAyNi45Njk1NzY1LDExLjAwNzMxMDcgMjYuOTgzMTkwNywxMS4wMjA3NjY5IFogTTIzLjEzMDQzNjMsMTMuMzg5MDg4MSBMMzEuMTQ5MTg1OCwxNi43ODAwNzYxIEMzMS4xNjI4LDE2Ljc5MzUzMjQgMzEuMTYyOCwxNi44MDY5ODg3IDMxLjE2MjgsMTYuODIwNDQ1IEMzMS4xNjI4LDE2LjgzMzkwMTMgMzEuMTYyOCwxNi44NDczNTc2IDMxLjE0OTE4NTgsMTYuODYwODEzOSBMMjYuNzEwOTY0NSwyMS4yNjEwMjQ1IEMyNi43MTA5NjQ1LDIxLjI3NDQ4MDggMjYuNjk3MzUwMywyMS4yNzQ0ODA4IDI2LjY3MDEyMiwyMS4yNzQ0ODA4IEwyMS44MjM0NzU0LDIwLjI2NTI1ODIgQzIxLjc5NjI0NywyMC4yNjUyNTgyIDIxLjc4MjYzMjksMjAuMjUxODAxOSAyMS43ODI2MzI5LDIwLjIyNDg4OTMgQzIxLjc0MTc5MDMsMTkuODQ4MTEyOCAyMS41NjQ4MDYsMTkuNTExNzA1MyAyMS4yNjUyOTQyLDE5LjI4Mjk0ODEgQzIxLjI1MTY4LDE5LjI2OTQ5MTggMjEuMjUxNjgsMTkuMjU2MDM1NSAyMS4yNTE2OCwxOS4yNDI1NzkyIEwyMi4xMDkzNzMxLDEzLjk4MTE2NTMgQzIyLjEwOTM3MzEsMTMuOTU0MjUyNyAyMi4xMzY2MDE0LDEzLjk0MDc5NjQgMjIuMTUwMjE1NiwxMy45NDA3OTY0IEMyMi41MzE0MTI1LDEzLjg4Njk3MTIgMjIuODU4MTUyNywxMy42OTg1ODMgMjMuMDc1OTc5NiwxMy40MDI1NDQ0IEMyMy4wODk1OTM3LDEzLjM4OTA4ODEgMjMuMTAzMjA3OSwxMy4zODkwODgxIDIzLjEzMDQzNjMsMTMuMzg5MDg4MSBaIE0xNi4xNDYzNzksMTAuNDI4Njg1OSBMMjAuNTMwMTMxNywxMi4yODU2NTMyIEMyMC41NDM3NDU5LDEyLjI5OTEwOTUgMjAuNTU3MzYsMTIuMzEyNTY1OCAyMC41NTczNiwxMi4zMzk0NzgzIEMyMC41NDM3NDU5LDEyLjQwNjc1OTggMjAuNTMwMTMxNywxMi40ODc0OTc1IDIwLjUzMDEzMTcsMTIuNTY4MjM1MiBMMjAuNTMwMTMxNywxMi42MzU1MTY2IEwyMC41MzAxMzE3LDEyLjY4OTM0MTcgQzIwLjUzMDEzMTcsMTIuNzAyNzk4IDIwLjUxNjUxNzYsMTIuNzE2MjU0MyAyMC41MDI5MDM0LDEyLjcyOTcxMDYgQzIwLjUwMjkwMzQsMTIuNzI5NzEwNiAxMC44Nzc3MDcyLDE2LjgzMzg3NzUgMTAuODY0MDkzLDE2LjgzMzg3NzUgQzEwLjg1MDQ3ODksMTYuODMzODc3NSAxMC44MzY4NjQ3LDE2LjgzMzg3NzUgMTAuODIzMjUwNiwxNi44MjA0MjEyIEMxMC44MDk2MzY1LDE2LjgwNjk2NDkgMTAuODA5NjM2NSwxNi43ODAwNTI0IDEwLjgyMzI1MDYsMTYuNzY2NTk2MSBMMTQuNDMwOTk3NCwxMS4xODIyMzc4IEMxNC40NDQ2MTE2LDExLjE2ODc4MTUgMTQuNDU4MjI1NywxMS4xNTUzMjUzIDE0LjQ4NTQ1NCwxMS4xNTUzMjUzIEMxNC41ODA3NTMsMTEuMTY4NzgxNSAxNC42NjI0Mzc4LDExLjE4MjIzNzggMTQuNzQ0MTIyNiwxMS4xODIyMzc4IEMxNS4yODg2ODgyLDExLjE4MjIzNzggMTUuNzkyNDExMywxMC45MTMxMTIxIDE2LjA5MTkyMjQsMTAuNDU1NTk4NCBDMTYuMTA1NTM2NSwxMC40NDIxNDIyIDE2LjExOTE1MDcsMTAuNDI4Njg1OSAxNi4xNDYzNzksMTAuNDI4Njg1OSBaIE0yMS41NTExNDI5LDIxLjE4MDI0MzMgTDI1LjgxMjM3MTcsMjIuMDU0OTA1MyBDMjUuODI1OTg1OSwyMi4wNTQ5MDUzIDI1LjgzOTYsMjIuMDY4MzYxNiAyNS44Mzk2LDIyLjEwODczMDcgQzI1LjgzOTYsMjIuMTIyMTg3IDI1LjgzOTYsMjIuMTM1NjQzMyAyNS44MjU5ODU5LDIyLjE0OTA5OTcgTDE5LjkxNzQ0NDksMjguMDAyNjA3MiBDMTkuOTE3NDQ0OSwyOC4wMTYwNjM2IDE5LjkwMzgzMDcsMjguMDE2MDYzNiAxOS44OTAyMTY2LDI4LjAxNjA2MzYgTDE5Ljg2Mjk4ODMsMjguMDE2MDYzNiBDMTkuODQ5Mzc0MSwyOC4wMDI2MDcyIDE5LjgzNTc2LDI3Ljk4OTE1MDkgMTkuODM1NzYsMjcuOTYyMjM4MiBMMjAuODU2ODIxMiwyMS42OTE1ODQxIEMyMC44NTY4MjEyLDIxLjY3ODEyNzggMjAuODcwNDM1NCwyMS42NTEyMTUxIDIwLjg4NDA0OTUsMjEuNjUxMjE1MSBDMjEuMTI5MTA0MiwyMS41NTcwMjA4IDIxLjMzMzMxNjUsMjEuMzk1NTQ0NyAyMS40OTY2ODYzLDIxLjE5MzY5OTYgQzIxLjUxMDMwMDQsMjEuMTkzNjk5NiAyMS41MjM5MTQ2LDIxLjE4MDI0MzMgMjEuNTUxMTQyOSwyMS4xODAyNDMzIFogTTE5LjA0NjE2NzksMjAuNjgyNDAzIEMxOS4xNTUwODE0LDIxLjA5OTU0ODcgMTkuNDU0NTkzMywyMS40NjI4NjkyIDE5Ljg2MzAxODcsMjEuNjI0MzQ0OSBDMTkuODkwMjQ3MSwyMS42Mzc4MDEyIDE5Ljg5MDI0NzEsMjEuNjY0NzEzOSAxOS44NjMwMTg3LDIxLjY2NDcxMzkgQzE5Ljg2MzAxODcsMjEuNjY0NzEzOSAxOC42MjQxMjgzLDI5LjIxMzcwNTQgMTguNjI0MTI4MywyOS4yMjcxNjE3IEwxOC4xODg0NzQ2LDI5LjY1Nzc2MzcgQzE4LjE4ODQ3NDYsMjkuNjcxMjIwMSAxOC4xNzQ4NjA0LDI5LjY3MTIyMDEgMTguMTYxMjQ2MiwyOS42NzEyMjAxIEMxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xMzQwMTc4LDI5LjY1Nzc2MzcgTDEwLjk0NTczMDYsMTkuMjY5NDkwMSBDMTAuOTMyMTE2NSwxOS4yNTYwMzM4IDEwLjkzMjExNjUsMTkuMjI5MTIxMiAxMC45NDU3MzA2LDE5LjIxNTY2NDkgQzEwLjk4NjU3MzIsMTkuMTYxODM5NiAxMS4wMTM4MDE1LDE5LjEwODAxNDQgMTEuMDU0NjQ0MSwxOS4wNDA3MzI4IEMxMS4wNjgyNTgzLDE5LjAyNzI3NjUgMTEuMDgxODcyNCwxOS4wMTM4MjAyIDExLjEwOTEwMDgsMTkuMDEzODIwMiBMMTkuMDA1MzI1NCwyMC42NDIwMzQxIEMxOS4wMzI1NTM3LDIwLjY1NTQ5MDQgMTkuMDQ2MTY3OSwyMC42Njg5NDY3IDE5LjA0NjE2NzksMjAuNjgyNDAzIFogTTExLjMxMzM2NDcsMTguMDk4NzI4NiBDMTEuMjg2MTM2NSwxOC4wOTg3Mjg2IDExLjI3MjUyMjQsMTguMDg1MjcyNCAxMS4yNzI1MjI0LDE4LjA1ODM1OTggQzExLjI3MjUyMjQsMTcuOTUwNzA5NiAxMS4yNDUyOTQxLDE3Ljg1NjUxNTcgMTEuMjMxNjgsMTcuNzQ4ODY1NCBDMTEuMjMxNjgsMTcuNzIxOTUyOSAxMS4yMzE2OCwxNy43MDg0OTY2IDExLjI1ODkwODIsMTcuNjk1MDQwMyBDMTEuMjU4OTA4MiwxNy42OTUwNDAzIDIwLjkzODU0NTksMTMuNTYzOTYzNSAyMC45NTIxNiwxMy41NjM5NjM1IEMyMC45NTIxNiwxMy41NjM5NjM1IDIwLjk2NTc3NDEsMTMuNTYzOTYzNSAyMC45NzkzODgyLDEzLjU3NzQxOTcgQzIxLjA0NzQ1ODgsMTMuNjQ0NzAxMSAyMS4xMDE5MTUzLDEzLjY4NTA2OTkgMjEuMTU2MzcxOCwxMy43MjU0Mzg4IEMyMS4xODM2LDEzLjcyNTQzODggMjEuMTgzNiwxMy43NTIzNTEzIDIxLjE4MzYsMTMuNzY1ODA3NiBMMjAuMzM5NTI0NywxOC45NDY0NzQxIEMyMC4zMzk1MjQ3LDE4Ljk3MzM4NjYgMjAuMzI1OTEwNiwxOC45ODY4NDI5IDIwLjI5ODY4MjQsMTguOTg2ODQyOSBDMTkuODM1ODAyNCwxOS4wMTM3NTU0IDE5LjQyNzM3ODgsMTkuMjgyODgxIDE5LjE5NTkzODgsMTkuNjg2NTY5MyBDMTkuMTgyMzI0NywxOS43MDAwMjU1IDE5LjE2ODcxMDYsMTkuNzEzNDgxOCAxOS4xNDE0ODI0LDE5LjcxMzQ4MTggTDExLjMxMzM2NDcsMTguMDk4NzI4NiBaIE03Ljg2ODk3NzU4LDE5LjE4ODcyOTEgQzcuOTA5ODIwMywxOS4yNTYwMTExIDcuOTUwNjYzMDMsMTkuMzA5ODM2NyA3Ljk5MTUwNTc2LDE5LjM2MzY2MjMgQzguMDA1MTIsMTkuMzc3MTE4NyA4LjAwNTEyLDE5LjM5MDU3NTEgOC4wMDUxMiwxOS4zOTA1NzUxIEw2LjEzOTk2ODc5LDIyLjI4MzcwMDcgQzYuMTI2MzU0NTUsMjIuMjk3MTU3MSA2LjExMjc0MDMsMjIuMzEwNjEzNSA2LjA5OTEyNjA2LDIyLjMxMDYxMzUgQzYuMDk5MTI2MDYsMjIuMzEwNjEzNSA2LjA4NTUxMTgyLDIyLjMxMDYxMzUgNi4wNzE4OTc1OCwyMi4yOTcxNTcxIEw0LjQyNDU3NDI0LDIwLjY2ODkzMjkgQzQuNDEwOTYsMjAuNjU1NDc2NSA0LjQxMDk2LDIwLjY0MjAyMDEgNC40MTA5NiwyMC42Mjg1NjM3IEM0LjQxMDk2LDIwLjYxNTEwNzMgNC40MjQ1NzQyNCwyMC42MDE2NTA5IDQuNDM4MTg4NDgsMjAuNjAxNjUwOSBMNy44MTQ1MjA2MSwxOS4xNjE4MTYzIEw3LjgyODEzNDg1LDE5LjE2MTgxNjMgQzcuODQxNzQ5MDksMTkuMTYxODE2MyA3Ljg1NTM2MzMzLDE5LjE3NTI3MjcgNy44Njg5Nzc1OCwxOS4xODg3MjkxIFogTTEwLjE4MzMxOTEsMTkuODYxNTU3OSBDMTAuMTk2OTMzMiwxOS44NjE1NTc5IDEwLjIxMDU0NzMsMTkuODc1MDE0MiAxMC4yMjQxNjE0LDE5Ljg4ODQ3MDYgTDE3LjQzOTYyOTQsMzAuMzU3NDg3OCBDMTcuNDUzMjQzNSwzMC4zNzA5NDQxIDE3LjQ1MzI0MzUsMzAuMzk3ODU2NyAxNy40Mzk2Mjk0LDMwLjQxMTMxMzEgTDE1Ljg2MDM5NDksMzEuOTg1NzAyNSBDMTUuODYwMzk0OSwzMS45OTkxNTg5IDE1Ljg0Njc4MDgsMzEuOTk5MTU4OSAxNS44MDU5Mzg2LDMxLjk4NTcwMjUgTDYuNzkzNDEwNTcsMjMuMDY0MTYyMiBDNi43Nzk3OTY0OCwyMy4wNTA3MDU4IDYuNzc5Nzk2NDgsMjMuMDIzNzkzMiA2LjgwNzAyNDY2LDIyLjk5Njg4MDYgTDguNzY3NDUzNzEsMTkuOTU1NzUyMiBDOC43ODEwNjc4LDE5Ljk0MjI5NTggOC43OTQ2ODE4OSwxOS45Mjg4Mzk1IDguODIxOTEwMDcsMTkuOTI4ODM5NSBDOS4wMjYxMjE0MywxOS45OTYxMjExIDkuMjE2NzE4NywyMC4wMjMwMzM4IDkuNDIwOTMwMDYsMjAuMDIzMDMzOCBDOS42Nzk1OTc3OCwyMC4wMjMwMzM4IDkuOTI0NjUxNDEsMTkuOTY5MjA4NSAxMC4xODMzMTkxLDE5Ljg2MTU1NzkgWiBNOC45OTg5MTg1NiwxNi40MDMyMzIyIEM4Ljk4NTMwNDM5LDE2LjQwMzIzMjIgOC45NzE2OTAyMiwxNi4zODk3NzU5IDguOTU4MDc2MDQsMTYuMzc2MzE5NiBMNS4wOTE2NTA2MywxMC43MzgxMzg4IEM1LjA3ODAzNjQ2LDEwLjcyNDY4MjUgNS4wNzgwMzY0NiwxMC42OTc3NyA1LjA5MTY1MDYzLDEwLjY4NDMxMzcgTDguNTYzMjY1LDcuMjM5NTA2MzMgQzguNTYzMjY1LDcuMjI2MDUwMDYgOC41NzY4NzkxNyw3LjIyNjA1MDA2IDguNjA0MTA3NTIsNy4yMjYwNTAwNiBDOC42MDQxMDc1Miw3LjIzOTUwNjMzIDEyLjcwMTk3MzksOC45NjE5MTAwMiAxMy4xNjQ4NTU4LDkuMTYzNzU0MiBDMTMuMTc4NDcsOS4xNzcyMTA0OCAxMy4xOTIwODQyLDkuMTkwNjY2NzYgMTMuMTkyMDg0Miw5LjIxNzU3OTMyIEMxMy4xNjQ4NTU4LDkuMzM4Njg1ODMgMTMuMTUxMjQxNiw5LjQ1OTc5MjM0IDEzLjE1MTI0MTYsOS41ODA4OTg4NCBDMTMuMTUxMjQxNiw5Ljk5ODA0MzQ5IDEzLjMxNDYxMTcsMTAuMzg4Mjc1NiAxMy42MDA1MDk0LDEwLjY4NDMxMzcgQzEzLjYxNDEyMzUsMTAuNjk3NzcgMTMuNjE0MTIzNSwxMC43MjQ2ODI1IDEzLjYwMDUwOTQsMTAuNzM4MTM4OCBMOS45NTE5MTA3NCwxNi4zODk3NzU5IEM5LjkzODI5NjU3LDE2LjQwMzIzMjIgOS45MjQ2ODIzOSwxNi40MTY2ODg1IDkuODk3NDU0MDUsMTYuNDE2Njg4NSBDOS43NDc2OTgxMywxNi4zNzYzMTk2IDkuNTg0MzI4MDQsMTYuMzQ5NDA3MSA5LjQzNDU3MjEzLDE2LjM0OTQwNzEgQzkuMjk4NDMwMzksMTYuMzQ5NDA3MSA5LjE0ODY3NDQ4LDE2LjM3NjMxOTYgOC45OTg5MTg1NiwxNi40MDMyMzIyIFogTTEzLjY2ODYwMTksOC4zNTY0MjAzNCBDMTMuNDkxNjE4Niw4LjI3NTY4MTk4IDkuMzUyOTMzMjQsNi41MjYzNTA4MyA5LjM1MjkzMzI0LDYuNTI2MzUwODMgQzkuMzM5MzE5MTQsNi41MTI4OTQ0NCA5LjMyNTcwNTA1LDYuNTEyODk0NDQgOS4zMzkzMTkxNCw2LjQ4NTk4MTY1IEM5LjMzOTMxOTE0LDYuNDcyNTI1MjYgOS4zMzkzMTkxNCw2LjQ1OTA2ODg2IDkuMzUyOTMzMjQsNi40NDU2MTI0NyBMMTUuODMzMjQzMiwwLjAxMzQ1NjM5MzUgQzE1LjgzMzI0MzIsMCAxNS44NDY4NTczLDAgMTUuODYwNDcxNCwwIEMxNS44NzQwODU1LDAgMTUuODc0MDg1NSwwIDE1Ljg4NzY5OTYsMC4wMTM0NTYzOTM1IEwxOC42Nzg1ODk0LDIuNzcyMDE3MDUgQzE4LjY5MjIwMzUsMi43ODU0NzM0NSAxOC42OTIyMDM1LDIuODEyMzg2MjMgMTguNjc4NTg5NCwyLjgyNTg0MjYzIEwxNS4zMTU5MDc2LDguMDMzNDY2OSBDMTUuMzAyMjkzNSw4LjA0NjkyMzI5IDE1LjI4ODY3OTQsOC4wNjAzNzk2OSAxNS4yNjE0NTEyLDguMDYwMzc5NjkgQzE1LjA4NDQ2NzksOC4wMDY1NTQxMSAxNC45MDc0ODQ3LDcuOTc5NjQxMzMgMTQuNzMwNTAxNCw3Ljk3OTY0MTMzIEMxNC4zNjI5MjA4LDcuOTc5NjQxMzMgMTMuOTk1MzQwMiw4LjExNDIwNTI2IDEzLjcwOTQ0NDIsOC4zNDI5NjM5NSBDMTMuNjk1ODMwMSw4LjM1NjQyMDM0IDEzLjY5NTgzMDEsOC4zNTY0MjAzNCAxMy42Njg2MDE5LDguMzU2NDIwMzQgWiBNNy43ODcyODk5NSwxNy4zMzE3NTExIEM3Ljc3MzY3NTgxLDE3LjM0NTIwNzQgNy43NjAwNjE2NywxNy4zNTg2NjM3IDcuNzQ2NDQ3NTIsMTcuMzU4NjYzNyBMMC4wNDA4NDI0Mjk4LDE1Ljc0MzkwOCBDMC4wMTM2MTQxNDMzLDE1Ljc0MzkwOCAwLDE1LjczMDQ1MTcgMCwxNS43MTY5OTU0IEMwLDE1LjcwMzUzOTEgMCwxNS42OTAwODI4IDAuMDEzNjE0MTQzMywxNS42NzY2MjY1IEw0LjMxNTY4MzQyLDExLjQyNDQzNjMgQzQuMzE1NjgzNDIsMTEuNDEwOTgwMSA0LjMyOTI5NzU2LDExLjQxMDk4MDEgNC4zNDI5MTE3MSwxMS40MTA5ODAxIEM0LjM3MDEzOTk5LDExLjQyNDQzNjMgNC4zNzAxMzk5OSwxMS40MjQ0MzYzIDQuMzgzNzU0MTMsMTEuNDM3ODkyNiBDNC4zODM3NTQxMywxMS40NTEzNDg5IDguMDczMTg2OTYsMTYuNzgwMDQyOSA4LjExNDAyOTM5LDE2LjgzMzg2ODEgQzguMTI3NjQzNTQsMTYuODQ3MzI0NCA4LjEyNzY0MzU0LDE2Ljg3NDIzNyA4LjExNDAyOTM5LDE2Ljg4NzY5MzMgQzcuOTkxNTAyMSwxNy4wMjIyNTYzIDcuODY4OTc0ODEsMTcuMTcwMjc1NSA3Ljc4NzI4OTk1LDE3LjMzMTc1MTEgWiBNNy4zNTE1NTc4MywxOC4yNDY3NDY0IEM3LjM3ODc4NTk0LDE4LjI0Njc0NjQgNy4zOTI0LDE4LjI2MDIwMjcgNy4zOTI0LDE4LjI4NzExNTEgQzcuMzkyNCwxOC4zMDA1NzEzIDcuMzc4Nzg1OTQsMTguMzE0MDI3NSA3LjM1MTU1NzgzLDE4LjM0MDkzOTkgTDMuNjM0OTIsMTkuOTE1MzE2NSBDMy42MzQ5MiwxOS45MTUzMTY1IDMuNjIxMzA1OTQsMTkuOTE1MzE2NSAzLjYwNzY5MTg4LDE5LjkwMTg2MDMgTDAuNjI2MjEzMTg1LDE2Ljk0MTQ5NDEgQzAuNjEyNTk5MTI3LDE2LjkyODAzNzggMC41OTg5ODUwNjksMTYuOTAxMTI1NCAwLjYxMjU5OTEyNywxNi44ODc2NjkyIEMwLjYyNjIxMzE4NSwxNi44NzQyMTMgMC42Mzk4MjcyNDMsMTYuODYwNzU2OCAwLjY2NzA1NTM1OSwxNi44NjA3NTY4IEw3LjM1MTU1NzgzLDE4LjI0Njc0NjQgWiIvPjwvc3ZnPg==);\n}\n\n.visuallyHidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  #fff-space: nowrap;\n}\n',""])},function(e){"use strict";function t(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return""+r}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;this.length>o;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;e.length>o;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}}]).default});
//# sourceMappingURL=netlify-identity.js.map

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["b"] = getBookId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scroll_into_view__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(42);



const uiTocModal = ".toc.ui.modal";
const uiOpenTocModal = ".toc-modal-open";
const uiModalOpacity = 0.5;

//generate html for questions
function renderQuestions(questions) {
  return `
    <div class="list">
      ${questions.map(q => `<a class="item" href="${q.url}">${q.title}</a>`).join("")}
    </div>
  `;
}

//generate html for Contents
function makeContents(contents) {
  return `
    <div class="ui ordered relaxed list">
      ${contents.map(unit => `
        <div class="item"> 
          <a href="${unit.url}">${unit.title}</a>
          ${unit.questions ? renderQuestions(unit.questions) : ""}
        </div>
      `).join("")}
    </div>
  `;
}

/*
  If we're on a transcript page, highlight the 
  current transcript in the list

  THIS IS NOT WORKING...
*/
function highlightCurrentTranscript() {
  if ($(".transcript").length > 0) {
    let page = location.pathname;
    let $el = $(`.toc-list a[href='${page}']`);

    //remove href to deactivate link for current page and
    //scroll into middle of viewport
    $el.addClass("current-unit").removeAttr("href");
    __WEBPACK_IMPORTED_MODULE_0_scroll_into_view___default()($el.get(0));
  }
}

/*
  Calls to this function are valid for transcript pages.
*/
function getBookId() {
  return $(uiOpenTocModal).attr("data-book");
}

/* harmony default export */ __webpack_exports__["a"] = ({

  /*
   * Init the modal dialog with data from JSON file 
   * or local storage
   */
  initialize: function () {
    //dialog settings
    $(uiTocModal).modal({
      dimmerSettings: { opacity: uiModalOpacity },
      observeChanges: true
    });

    /*
     * TOC populated by JSON file from AJAX call if not found
     * in local storage.
     * 
     * Read value of data-book attribute to identify name of file
     * with contents.
     */
    $(uiOpenTocModal).on("click", e => {
      e.preventDefault();
      let book = $(e.currentTarget).attr("data-book").toLowerCase();

      Object(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* getConfig */])(book).then(contents => {
        $(".toc-image").attr("src", `${contents.image}`);
        $(".toc-title").html(`Table of Contents: <em>${contents.title}</em>`);
        $(".toc-list").html(makeContents(contents.contents));
        highlightCurrentTranscript();
        $(uiTocModal).modal("show");
      }).catch(error => {
        $(".toc-image").attr("src", "/public/img/cmi/toc_modal.png");
        $(".toc-title").html("Table of Contents: <em>Error</em>");
        $(".toc-list").html(`<p>Error: ${error.message}</p><p>Failed to get ${url}`);
        $(uiTocModal).modal("show");
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(177);


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_url__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_bookmark__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_search_search__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_contents_toc__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_user_netlify__ = __webpack_require__(151);
/* eslint no-console: off */


window.$ = window.jQuery = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;

//import "../vendor/semantic/semantic.min.js";
window.semantic = __webpack_require__(117);







/*
  Fix main menu to top of page when scrolled
*/
function initStickyMenu() {
  // fix main menu to page on passing
  $(".main.menu").visibility({
    type: "fixed"
  });

  // show dropdown on hover
  $(".main.menu  .ui.dropdown").dropdown({
    on: "hover"
  });
}

$(document).ready(() => {
  initStickyMenu();
  __WEBPACK_IMPORTED_MODULE_2__modules_bookmark__["a" /* default */].initialize();
  __WEBPACK_IMPORTED_MODULE_3__modules_search_search__["a" /* default */].initialize();
  __WEBPACK_IMPORTED_MODULE_4__modules_contents_toc__["a" /* default */].initialize();
  __WEBPACK_IMPORTED_MODULE_5__modules_user_netlify__["a" /* default */].initialize();
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ })
/******/ ]);
//# sourceMappingURL=page.js.map