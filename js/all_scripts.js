/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

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

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
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
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

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
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
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
		return flat( ret );
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
function( _i, name ) {
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
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
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
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

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
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
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
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
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

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
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
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

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
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
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
		return ( cache[ key + " " ] = value );
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
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
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
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
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
		while ( ( cur = cur.nextSibling ) ) {
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
		return ( name === "input" || name === "button" ) && elem.type === type;
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
					inDisabledFieldset( elem ) === disabled;
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
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
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
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
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
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
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
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
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
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
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

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

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
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

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
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
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
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
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

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
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
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
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
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
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
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
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
		while ( ( elem = results[ i++ ] ) ) {
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
		while ( ( node = elem[ i++ ] ) ) {

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
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
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
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
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

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
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
								while ( ( node = node[ dir ] ) ) {
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
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

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
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

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
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
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
			return !Expr.pseudos[ "empty" ]( elem );
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
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

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
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
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
		selector += tokens[ i ].value;
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
			while ( ( elem = elem[ dir ] ) ) {
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
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
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
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
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
		if ( ( elem = unmatched[ i ] ) ) {
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
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

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
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
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
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
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
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
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
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
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
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
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
					if ( ( elem = !matcher && elem ) ) {
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
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
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
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

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
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

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
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
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


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



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


// Initialize a jQuery object


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
	parentsUntil: function( elem, _i, until ) {
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
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

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
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



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
						jQuery.each( tuples, function( _i, tuple ) {

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




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




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
				fn = function( elem, _key, value ) {
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


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




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
var dataPriv = new Data();

var dataUser = new Data();



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
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

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
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



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
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
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
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



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

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


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


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
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

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
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

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
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

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
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
			events = elemData.events = Object.create( null );
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

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
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

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

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
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
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

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

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
	code: true,
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

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

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


var

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
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

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
	args = flat( args );

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
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
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
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

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
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



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
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
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
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


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

		if ( ret === "" && !isAttached( elem ) ) {
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


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

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

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


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
	};

function setPositiveNumber( _elem, value, subtract ) {

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

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
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
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
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
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
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

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
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

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
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
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
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
		if ( clearQueue ) {
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

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
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

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
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




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


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




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


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
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
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

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
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
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



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

	if ( a == null ) {
		return "";
	}

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
		.map( function( _i, elem ) {
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
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
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
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
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

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
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

jQuery.each( [ "get", "post" ], function( _i, method ) {
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

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


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


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




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

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

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




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
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




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




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
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
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
jQuery.each( [ "top", "left" ], function( _i, prop ) {
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


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




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
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

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

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



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

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




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
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*!
 * Bootstrap v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery"], e)
        : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }
    function o() {
        return (o =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    function r(t) {
        var n = this,
            i = !1;
        return (
            e(this).one(s.TRANSITION_END, function () {
                i = !0;
            }),
            setTimeout(function () {
                i || s.triggerTransitionEnd(n);
            }, t),
            this
        );
    }
    var s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            e(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        a =
                            r && s.isElement(r)
                                ? "element"
                                : null === (l = r) || "undefined" == typeof l
                                ? "" + l
                                : {}.toString
                                      .call(l)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
                }
            var l;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        },
    };
    s.jQueryDetection(),
        (e.fn.emulateTransitionEnd = r),
        (e.event.special[s.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            },
        });
    var a = "alert",
        l = e.fn[a],
        c = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.alert"), (this._element = null);
                }),
                (n._getRootElement = function (t) {
                    var n = s.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
                }),
                (n._triggerCloseEvent = function (t) {
                    var n = e.Event("close.bs.alert");
                    return e(t).trigger(n), n;
                }),
                (n._removeElement = function (t) {
                    var n = this;
                    if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                        var i = s.getTransitionDurationFromElement(t);
                        e(t)
                            .one(s.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e);
                            })
                            .emulateTransitionEnd(i);
                    } else this._destroyElement(t);
                }),
                (n._destroyElement = function (t) {
                    e(t).detach().trigger("closed.bs.alert").remove();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.alert");
                        o || ((o = new t(this)), i.data("bs.alert", o)), "close" === n && o[n](this);
                    });
                }),
                (t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c())),
        (e.fn[a] = c._jQueryInterface),
        (e.fn[a].Constructor = c),
        (e.fn[a].noConflict = function () {
            return (e.fn[a] = l), c._jQueryInterface;
        });
    var h = e.fn.button,
        u = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var o = this._element.querySelector('input:not([type="hidden"])');
                        if (o) {
                            if ("radio" === o.type)
                                if (o.checked && this._element.classList.contains("active")) t = !1;
                                else {
                                    var r = i.querySelector(".active");
                                    r && e(r).removeClass("active");
                                }
                            t && (("checkbox" !== o.type && "radio" !== o.type) || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), (n = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"));
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.button"), (this._element = null);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.button");
                        i || ((i = new t(this)), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = t.target,
                i = n;
            if ((e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))) t.preventDefault();
            else {
                var o = n.querySelector('input:not([type="hidden"])');
                if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
                ("LABEL" !== i.tagName || (o && "checkbox" !== o.type)) && u._jQueryInterface.call(e(n), "toggle");
            }
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = e(t.target).closest(".btn")[0];
            e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
        }),
        e(window).on("load.bs.button.data-api", function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
            }
            for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                var a = t[r];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
            }
        }),
        (e.fn.button = u._jQueryInterface),
        (e.fn.button.Constructor = u),
        (e.fn.button.noConflict = function () {
            return (e.fn.button = h), u._jQueryInterface;
        });
    var f = "carousel",
        d = ".bs.carousel",
        p = e.fn[f],
        m = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        g = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        _ = { TOUCH: "touch", PEN: "pen" },
        v = (function () {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                    this._addEventListeners();
            }
            var n = t.prototype;
            return (
                (n.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (n.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
                }),
                (n.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (n.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (n.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            e(this._element).one("slid.bs.carousel", function () {
                                return n.to(t);
                            });
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var o = t > i ? "next" : "prev";
                            this._slide(o, this._items[t]);
                        }
                }),
                (n.dispose = function () {
                    e(this._element).off(d),
                        e.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, m, t)), s.typeCheckConfig(f, t, g), t;
                }),
                (n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
                    }
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        e(this._element).on("keydown.bs.carousel", function (e) {
                            return t._keydown(e);
                        }),
                        "hover" === this._config.pause &&
                            e(this._element)
                                .on("mouseenter.bs.carousel", function (e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function (e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                                t._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                            },
                            i = function (e) {
                                t._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout && clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function (e) {
                                            return t.cycle(e);
                                        }, 500 + t._config.interval)));
                            };
                        e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                            return t.preventDefault();
                        }),
                            this._pointerEvent
                                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("pointerup.bs.carousel", function (t) {
                                      return i(t);
                                  }),
                                  this._element.classList.add("pointer-event"))
                                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("touchmove.bs.carousel", function (e) {
                                      return (function (e) {
                                          e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                                      })(e);
                                  }),
                                  e(this._element).on("touchend.bs.carousel", function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (n._getItemIndex = function (t) {
                    return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
                }),
                (n._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                    var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }),
                (n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t),
                        o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        r = e.Event("slide.bs.carousel", { relatedTarget: t, direction: n, from: o, to: i });
                    return e(this._element).trigger(r), r;
                }),
                (n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        e(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass("active");
                    }
                }),
                (n._slide = function (t, n) {
                    var i,
                        o,
                        r,
                        a = this,
                        l = this._element.querySelector(".active.carousel-item"),
                        c = this._getItemIndex(l),
                        h = n || (l && this._getItemByDirection(t, l)),
                        u = this._getItemIndex(h),
                        f = Boolean(this._interval);
                    if (("next" === t ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (r = "left")) : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (r = "right")), h && e(h).hasClass("active"))) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
                        (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(h);
                        var d = e.Event("slid.bs.carousel", { relatedTarget: h, direction: r, from: c, to: u });
                        if (e(this._element).hasClass("slide")) {
                            e(h).addClass(o), s.reflow(h), e(l).addClass(i), e(h).addClass(i);
                            var p = parseInt(h.getAttribute("data-interval"), 10);
                            p ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = p)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                            var m = s.getTransitionDurationFromElement(l);
                            e(l)
                                .one(s.TRANSITION_END, function () {
                                    e(h)
                                        .removeClass(i + " " + o)
                                        .addClass("active"),
                                        e(l).removeClass("active " + o + " " + i),
                                        (a._isSliding = !1),
                                        setTimeout(function () {
                                            return e(a._element).trigger(d);
                                        }, 0);
                                })
                                .emulateTransitionEnd(m);
                        } else e(l).removeClass("active"), e(h).addClass("active"), (this._isSliding = !1), e(this._element).trigger(d);
                        f && this.cycle();
                    }
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.carousel"),
                            r = o({}, m, e(this).data());
                        "object" == typeof n && (r = o({}, r, n));
                        var s = "string" == typeof n ? n : r.slide;
                        if ((i || ((i = new t(this, r)), e(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                        else if ("string" == typeof s) {
                            if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]();
                        } else r.interval && r.ride && (i.pause(), i.cycle());
                    });
                }),
                (t._dataApiClickHandler = function (n) {
                    var i = s.getSelectorFromElement(this);
                    if (i) {
                        var r = e(i)[0];
                        if (r && e(r).hasClass("carousel")) {
                            var a = o({}, e(r).data(), e(this).data()),
                                l = this.getAttribute("data-slide-to");
                            l && (a.interval = !1), t._jQueryInterface.call(e(r), a), l && e(r).data("bs.carousel").to(l), n.preventDefault();
                        }
                    }
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return m;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler),
        e(window).on("load.bs.carousel.data-api", function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
                var o = e(t[n]);
                v._jQueryInterface.call(o, o.data());
            }
        }),
        (e.fn[f] = v._jQueryInterface),
        (e.fn[f].Constructor = v),
        (e.fn[f].noConflict = function () {
            return (e.fn[f] = p), v._jQueryInterface;
        });
    var b = "collapse",
        y = e.fn[b],
        w = { toggle: !0, parent: "" },
        E = { toggle: "boolean", parent: "(string|element)" },
        T = (function () {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        a = s.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
                            return e === t;
                        });
                    null !== a && l.length > 0 && ((this._selector = a), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    e(this._element).hasClass("show") ? this.hide() : this.show();
                }),
                (n.show = function () {
                    var n,
                        i,
                        o = this;
                    if (
                        !this._isTransitioning &&
                        !e(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                                    return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
                                })).length &&
                            (n = null),
                        !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))
                    ) {
                        var r = e.Event("show.bs.collapse");
                        if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                            n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            e(this._element).removeClass("collapse").addClass("collapsing"),
                                (this._element.style[a] = 0),
                                this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                c = s.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    e(o._element).removeClass("collapsing").addClass("collapse show"), (o._element.style[a] = ""), o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(c),
                                (this._element.style[a] = this._element[l] + "px");
                        }
                    }
                }),
                (n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass("show")) {
                        var n = e.Event("hide.bs.collapse");
                        if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                            var i = this._getDimension();
                            (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), s.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var r = 0; r < o; r++) {
                                    var a = this._triggerArray[r],
                                        l = s.getSelectorFromElement(a);
                                    if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var c = s.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(c);
                        }
                    }
                }),
                (n.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (n._getConfig = function (t) {
                    return ((t = o({}, w, t)).toggle = Boolean(t.toggle)), s.typeCheckConfig(b, t, E), t;
                }),
                (n._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height";
                }),
                (n._getParent = function () {
                    var n,
                        i = this;
                    s.isElement(this._config.parent) ? ((n = this._config.parent), "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(n.querySelectorAll(o));
                    return (
                        e(r).each(function (e, n) {
                            i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                        }),
                        n
                    );
                }),
                (n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass("show");
                    n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
                }),
                (t._getTargetFromElement = function (t) {
                    var e = s.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            r = i.data("bs.collapse"),
                            s = o({}, w, i.data(), "object" == typeof n && n ? n : {});
                        if ((!r && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), r || ((r = new t(this, s)), i.data("bs.collapse", r)), "string" == typeof n)) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return w;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
            i = s.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        e(o).each(function () {
            var t = e(this),
                i = t.data("bs.collapse") ? "toggle" : n.data();
            T._jQueryInterface.call(t, i);
        });
    }),
        (e.fn[b] = T._jQueryInterface),
        (e.fn[b].Constructor = T),
        (e.fn[b].noConflict = function () {
            return (e.fn[b] = y), T._jQueryInterface;
        });
    var C = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        S = (function () {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (C && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0;
        })();
    var D =
        C && window.Promise
            ? function (t) {
                  var e = !1;
                  return function () {
                      e ||
                          ((e = !0),
                          window.Promise.resolve().then(function () {
                              (e = !1), t();
                          }));
                  };
              }
            : function (t) {
                  var e = !1;
                  return function () {
                      e ||
                          ((e = !0),
                          setTimeout(function () {
                              (e = !1), t();
                          }, S));
                  };
              };
    function N(t) {
        return t && "[object Function]" === {}.toString.call(t);
    }
    function k(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
    }
    function A(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function I(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body;
        }
        var e = k(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : I(A(t));
    }
    function O(t) {
        return t && t.referenceNode ? t.referenceNode : t;
    }
    var x = C && !(!window.MSInputMethodContext || !document.documentMode),
        j = C && /MSIE 10/.test(navigator.userAgent);
    function L(t) {
        return 11 === t ? x : 10 === t ? j : x || j;
    }
    function P(t) {
        if (!t) return document.documentElement;
        for (var e = L(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; ) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === k(n, "position") ? P(n) : n) : t ? t.ownerDocument.documentElement : document.documentElement;
    }
    function F(t) {
        return null !== t.parentNode ? F(t.parentNode) : t;
    }
    function R(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s,
            a,
            l = r.commonAncestorContainer;
        if ((t !== l && e !== l) || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || ("HTML" !== a && P(s.firstElementChild) !== s) ? P(l) : l;
        var c = F(t);
        return c.host ? R(c.host, e) : R(t, F(e).host);
    }
    function H(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement,
                r = t.ownerDocument.scrollingElement || o;
            return r[n];
        }
        return t[n];
    }
    function M(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = H(e, "top"),
            o = H(e, "left"),
            r = n ? -1 : 1;
        return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
    }
    function B(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
    }
    function q(t, e, n, i) {
        return Math.max(
            e["offset" + t],
            e["scroll" + t],
            n["client" + t],
            n["offset" + t],
            n["scroll" + t],
            L(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
        );
    }
    function Q(t) {
        var e = t.body,
            n = t.documentElement,
            i = L(10) && getComputedStyle(n);
        return { height: q("Height", e, n, i), width: q("Width", e, n, i) };
    }
    var W = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        },
        U = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            };
        })(),
        V = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        },
        Y =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            };
    function z(t) {
        return Y({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function X(t) {
        var e = {};
        try {
            if (L(10)) {
                e = t.getBoundingClientRect();
                var n = H(t, "top"),
                    i = H(t, "left");
                (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } else e = t.getBoundingClientRect();
        } catch (t) {}
        var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? Q(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.width,
            a = r.height || t.clientHeight || o.height,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var h = k(t);
            (l -= B(h, "x")), (c -= B(h, "y")), (o.width -= l), (o.height -= c);
        }
        return z(o);
    }
    function K(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = L(10),
            o = "HTML" === e.nodeName,
            r = X(t),
            s = X(e),
            a = I(t),
            l = k(e),
            c = parseFloat(l.borderTopWidth),
            h = parseFloat(l.borderLeftWidth);
        n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
        var u = z({ top: r.top - s.top - c, left: r.left - s.left - h, width: r.width, height: r.height });
        if (((u.marginTop = 0), (u.marginLeft = 0), !i && o)) {
            var f = parseFloat(l.marginTop),
                d = parseFloat(l.marginLeft);
            (u.top -= c - f), (u.bottom -= c - f), (u.left -= h - d), (u.right -= h - d), (u.marginTop = f), (u.marginLeft = d);
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = M(u, e)), u;
    }
    function G(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = K(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : H(n),
            a = e ? 0 : H(n, "left"),
            l = { top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r };
        return z(l);
    }
    function $(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === k(t, "position")) return !0;
        var n = A(t);
        return !!n && $(n);
    }
    function J(t) {
        if (!t || !t.parentElement || L()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === k(e, "transform"); ) e = e.parentElement;
        return e || document.documentElement;
    }
    function Z(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? J(t) : R(t, O(e));
        if ("viewport" === i) r = G(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = I(A(e))).nodeName && (a = t.ownerDocument.documentElement) : (a = "window" === i ? t.ownerDocument.documentElement : i);
            var l = K(a, s, o);
            if ("HTML" !== a.nodeName || $(s)) r = l;
            else {
                var c = Q(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                (r.top += l.top - l.marginTop), (r.bottom = h + l.top), (r.left += l.left - l.marginLeft), (r.right = u + l.left);
            }
        }
        var f = "number" == typeof (n = n || 0);
        return (r.left += f ? n : n.left || 0), (r.top += f ? n : n.top || 0), (r.right -= f ? n : n.right || 0), (r.bottom -= f ? n : n.bottom || 0), r;
    }
    function tt(t) {
        return t.width * t.height;
    }
    function et(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = Z(n, i, r, o),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a)
                .map(function (t) {
                    return Y({ key: t }, a[t], { area: tt(a[t]) });
                })
                .sort(function (t, e) {
                    return e.area - t.area;
                }),
            c = l.filter(function (t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight;
            }),
            h = c.length > 0 ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return h + (u ? "-" + u : "");
    }
    function nt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? J(e) : R(e, O(n));
        return K(n, o, i);
    }
    function it(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function ot(t) {
        var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
        });
    }
    function rt(t, e, n) {
        n = n.split("-")[0];
        var i = it(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return (o[s] = e[s] + e[l] / 2 - i[l] / 2), (o[a] = n === a ? e[a] - i[c] : e[ot(a)]), o;
    }
    function st(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function at(t, e, n) {
        return (
            (void 0 === n
                ? t
                : t.slice(
                      0,
                      (function (t, e, n) {
                          if (Array.prototype.findIndex)
                              return t.findIndex(function (t) {
                                  return t[e] === n;
                              });
                          var i = st(t, function (t) {
                              return t[e] === n;
                          });
                          return t.indexOf(i);
                      })(t, "name", n)
                  )
            ).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t.function || t.fn;
                t.enabled && N(n) && ((e.offsets.popper = z(e.offsets.popper)), (e.offsets.reference = z(e.offsets.reference)), (e = n(e, t)));
            }),
            e
        );
    }
    function lt() {
        if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            (t.offsets.reference = nt(this.state, this.popper, this.reference, this.options.positionFixed)),
                (t.placement = et(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                (t.originalPlacement = t.placement),
                (t.positionFixed = this.options.positionFixed),
                (t.offsets.popper = rt(this.popper, t.offsets.reference, t.placement)),
                (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                (t = at(this.modifiers, t)),
                this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
        }
    }
    function ct(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e;
        });
    }
    function ht(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function ut() {
        return (
            (this.state.isDestroyed = !0),
            ct(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[ht("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function ft(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
    }
    function dt(t, e, n, i) {
        (n.updateBound = i), ft(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = I(t);
        return (
            (function t(e, n, i, o) {
                var r = "BODY" === e.nodeName,
                    s = r ? e.ownerDocument.defaultView : e;
                s.addEventListener(n, i, { passive: !0 }), r || t(I(s.parentNode), n, i, o), o.push(s);
            })(o, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = o),
            (n.eventsEnabled = !0),
            n
        );
    }
    function pt() {
        this.state.eventsEnabled || (this.state = dt(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function mt() {
        var t, e;
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
                ((t = this.reference),
                (e = this.state),
                ft(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach(function (t) {
                    t.removeEventListener("scroll", e.updateBound);
                }),
                (e.updateBound = null),
                (e.scrollParents = []),
                (e.scrollElement = null),
                (e.eventsEnabled = !1),
                e)));
    }
    function gt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function _t(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && gt(e[n]) && (i = "px"), (t.style[n] = e[n] + i);
        });
    }
    var vt = C && /Firefox/i.test(navigator.userAgent);
    function bt(t, e, n) {
        var i = st(t, function (t) {
                return t.name === e;
            }),
            o =
                !!i &&
                t.some(function (t) {
                    return t.name === n && t.enabled && t.order < i.order;
                });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return o;
    }
    var yt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        wt = yt.slice(3);
    function Et(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = wt.indexOf(t),
            i = wt.slice(n + 1).concat(wt.slice(0, n));
        return e ? i.reverse() : i;
    }
    var Tt = "flip",
        Ct = "clockwise",
        St = "counterclockwise";
    function Dt(t, e, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function (t) {
                return t.trim();
            }),
            a = s.indexOf(
                st(s, function (t) {
                    return -1 !== t.search(/,|\s/);
                })
            );
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (
            (c = c.map(function (t, i) {
                var o = (1 === i ? !r : r) ? "height" : "width",
                    s = !1;
                return t
                    .reduce(function (t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (s = !0), t) : s ? ((t[t.length - 1] += e), (s = !1), t) : t.concat(e);
                    }, [])
                    .map(function (t) {
                        return (function (t, e, n, i) {
                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return t;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i;
                                }
                                return (z(a)[e] / 100) * r;
                            }
                            if ("vh" === s || "vw" === s) {
                                return (("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r;
                            }
                            return r;
                        })(t, o, e, n);
                    });
            })).forEach(function (t, e) {
                t.forEach(function (n, i) {
                    gt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                });
            }),
            o
        );
    }
    var Nt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = { start: V({}, l, r[l]), end: V({}, l, r[l] + r[c] - s[c]) };
                            t.offsets.popper = Y({}, s, h[i]);
                        }
                        return t;
                    },
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return (
                            (l = gt(+n) ? [+n, 0] : Dt(n, r, s, a)),
                            "left" === a
                                ? ((r.top += l[0]), (r.left -= l[1]))
                                : "right" === a
                                ? ((r.top += l[0]), (r.left += l[1]))
                                : "top" === a
                                ? ((r.left += l[0]), (r.top -= l[1]))
                                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                            (t.popper = r),
                            t
                        );
                    },
                    offset: 0,
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.boundariesElement || P(t.instance.popper);
                        t.instance.reference === n && (n = P(n));
                        var i = ht("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[i];
                        (o.top = ""), (o.left = ""), (o[i] = "");
                        var l = Z(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
                        var c = e.priority,
                            h = t.offsets.popper,
                            u = {
                                primary: function (t) {
                                    var n = h[t];
                                    return h[t] < l[t] && !e.escapeWithReference && (n = Math.max(h[t], l[t])), V({}, t, n);
                                },
                                secondary: function (t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = h[n];
                                    return h[t] > l[t] && !e.escapeWithReference && (i = Math.min(h[n], l[t] - ("right" === t ? h.width : h.height))), V({}, n, i);
                                },
                            };
                        return (
                            c.forEach(function (t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                h = Y({}, h, u[e](t));
                            }),
                            (t.offsets.popper = h),
                            t
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (t, e) {
                        var n;
                        if (!bt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t;
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = it(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]), (t.offsets.popper = z(t.offsets.popper));
                        var m = a[u] + a[c] / 2 - p / 2,
                            g = k(t.instance.popper),
                            _ = parseFloat(g["margin" + h]),
                            v = parseFloat(g["border" + h + "Width"]),
                            b = m - t.offsets.popper[u] - _ - v;
                        return (b = Math.max(Math.min(s[c] - p, b), 0)), (t.arrowElement = i), (t.offsets.arrow = (V((n = {}), u, Math.round(b)), V(n, f, ""), n)), t;
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (t, e) {
                        if (ct(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = Z(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            o = ot(i),
                            r = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case Tt:
                                s = [i, o];
                                break;
                            case Ct:
                                s = Et(i);
                                break;
                            case St:
                                s = Et(i, !0);
                                break;
                            default:
                                s = e.behavior;
                        }
                        return (
                            s.forEach(function (a, l) {
                                if (i !== a || s.length === l + 1) return t;
                                (i = t.placement.split("-")[0]), (o = ot(i));
                                var c = t.offsets.popper,
                                    h = t.offsets.reference,
                                    u = Math.floor,
                                    f = ("left" === i && u(c.right) > u(h.left)) || ("right" === i && u(c.left) < u(h.right)) || ("top" === i && u(c.bottom) > u(h.top)) || ("bottom" === i && u(c.top) < u(h.bottom)),
                                    d = u(c.left) < u(n.left),
                                    p = u(c.right) > u(n.right),
                                    m = u(c.top) < u(n.top),
                                    g = u(c.bottom) > u(n.bottom),
                                    _ = ("left" === i && d) || ("right" === i && p) || ("top" === i && m) || ("bottom" === i && g),
                                    v = -1 !== ["top", "bottom"].indexOf(i),
                                    b = !!e.flipVariations && ((v && "start" === r && d) || (v && "end" === r && p) || (!v && "start" === r && m) || (!v && "end" === r && g)),
                                    y = !!e.flipVariationsByContent && ((v && "start" === r && p) || (v && "end" === r && d) || (!v && "start" === r && g) || (!v && "end" === r && m)),
                                    w = b || y;
                                (f || _ || w) &&
                                    ((t.flipped = !0),
                                    (f || _) && (i = s[l + 1]),
                                    w &&
                                        (r = (function (t) {
                                            return "end" === t ? "start" : "start" === t ? "end" : t;
                                        })(r)),
                                    (t.placement = i + (r ? "-" + r : "")),
                                    (t.offsets.popper = Y({}, t.offsets.popper, rt(t.instance.popper, t.offsets.reference, t.placement))),
                                    (t = at(t.instance.modifiers, t, "flip")));
                            }),
                            t
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return (o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0)), (t.placement = ot(e)), (t.offsets.popper = z(o)), t;
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (t) {
                        if (!bt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = st(t.instance.modifiers, function (t) {
                                return "preventOverflow" === t.name;
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === t.hide) return t;
                            (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                        }
                        return t;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = st(t.instance.modifiers, function (t) {
                                return "applyStyle" === t.name;
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== r ? r : e.gpuAcceleration,
                            a = P(t.instance.popper),
                            l = X(a),
                            c = { position: o.position },
                            h = (function (t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    s = Math.floor,
                                    a = function (t) {
                                        return t;
                                    },
                                    l = r(o.width),
                                    c = r(i.width),
                                    h = -1 !== ["left", "right"].indexOf(t.placement),
                                    u = -1 !== t.placement.indexOf("-"),
                                    f = e ? (h || u || l % 2 == c % 2 ? r : s) : a,
                                    d = e ? r : a;
                                return { left: f(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left), top: d(i.top), bottom: d(i.bottom), right: f(i.right) };
                            })(t, window.devicePixelRatio < 2 || !vt),
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            d = ht("transform"),
                            p = void 0,
                            m = void 0;
                        if (
                            ((m = "bottom" === u ? ("HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom) : h.top),
                            (p = "right" === f ? ("HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right) : h.left),
                            s && d)
                        )
                            (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"), (c[u] = 0), (c[f] = 0), (c.willChange = "transform");
                        else {
                            var g = "bottom" === u ? -1 : 1,
                                _ = "right" === f ? -1 : 1;
                            (c[u] = m * g), (c[f] = p * _), (c.willChange = u + ", " + f);
                        }
                        var v = { "x-placement": t.placement };
                        return (t.attributes = Y({}, v, t.attributes)), (t.styles = Y({}, c, t.styles)), (t.arrowStyles = Y({}, t.offsets.arrow, t.arrowStyles)), t;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (t) {
                        var e, n;
                        return (
                            _t(t.instance.popper, t.styles),
                            (e = t.instance.popper),
                            (n = t.attributes),
                            Object.keys(n).forEach(function (t) {
                                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                            }),
                            t.arrowElement && Object.keys(t.arrowStyles).length && _t(t.arrowElement, t.arrowStyles),
                            t
                        );
                    },
                    onLoad: function (t, e, n, i, o) {
                        var r = nt(o, e, t, n.positionFixed),
                            s = et(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), _t(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                    },
                    gpuAcceleration: void 0,
                },
            },
        },
        kt = (function () {
            function t(e, n) {
                var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                W(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = D(this.update.bind(this))),
                    (this.options = Y({}, t.Defaults, o)),
                    (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                    (this.reference = e && e.jquery ? e[0] : e),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(Y({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                        i.options.modifiers[e] = Y({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (t) {
                            return Y({ name: t }, i.options.modifiers[t]);
                        })
                        .sort(function (t, e) {
                            return t.order - e.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && N(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                    }),
                    this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), (this.state.eventsEnabled = r);
            }
            return (
                U(t, [
                    {
                        key: "update",
                        value: function () {
                            return lt.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return ut.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return pt.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return mt.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    (kt.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (kt.placements = yt), (kt.Defaults = Nt);
    var At = "dropdown",
        It = e.fn[At],
        Ot = new RegExp("38|40|27"),
        xt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        jt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        Lt = (function () {
            function t(t, e) {
                (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                        var n = e(this._menu).hasClass("show");
                        t._clearMenus(), n || this.show(!0);
                    }
                }),
                (n.show = function (n) {
                    if ((void 0 === n && (n = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show")))) {
                        var i = { relatedTarget: this._element },
                            o = e.Event("show.bs.dropdown", i),
                            r = t._getParentFromElement(this._element);
                        if ((e(r).trigger(o), !o.isDefaultPrevented())) {
                            if (!this._inNavbar && n) {
                                if ("undefined" == typeof kt) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? (a = r) : s.isElement(this._config.reference) && ((a = this._config.reference), "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && e(r).addClass("position-static"),
                                    (this._popper = new kt(a, this._menu, this._getPopperConfig()));
                            }
                            "ontouchstart" in document.documentElement && 0 === e(r).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                e(this._menu).toggleClass("show"),
                                e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", i));
                        }
                    }
                }),
                (n.hide = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                        var n = { relatedTarget: this._element },
                            i = e.Event("hide.bs.dropdown", n),
                            o = t._getParentFromElement(this._element);
                        e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
                    }
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (n.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    e(this._element).on("click.bs.dropdown", function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, this.constructor.Default, e(this._element).data(), t)), s.typeCheckConfig(At, t, this.constructor.DefaultType), t;
                }),
                (n._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (n._getPlacement = function () {
                    var t = e(this._element.parentNode),
                        n = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                            : t.hasClass("dropright")
                            ? (n = "right-start")
                            : t.hasClass("dropleft")
                            ? (n = "left-start")
                            : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                        n
                    );
                }),
                (n._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0;
                }),
                (n._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {})), e;
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (n._getPopperConfig = function () {
                    var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                    return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), o({}, t, this._config.popperConfig);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.dropdown");
                        if ((i || ((i = new t(this, "object" == typeof n ? n : null)), e(this).data("bs.dropdown", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                (t._clearMenus = function (n) {
                    if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
                            var s = t._getParentFromElement(i[o]),
                                a = e(i[o]).data("bs.dropdown"),
                                l = { relatedTarget: i[o] };
                            if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                var c = a._menu;
                                if (e(s).hasClass("show") && !(n && (("click" === n.type && /input|textarea/i.test(n.target.tagName)) || ("keyup" === n.type && 9 === n.which)) && e.contains(s, n.target))) {
                                    var h = e.Event("hide.bs.dropdown", l);
                                    e(s).trigger(h),
                                        h.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                            i[o].setAttribute("aria-expanded", "false"),
                                            a._popper && a._popper.destroy(),
                                            e(c).removeClass("show"),
                                            e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function (t) {
                    var e,
                        n = s.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (t._dataApiKeydownHandler = function (n) {
                    if (
                        !(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || e(n.target).closest(".dropdown-menu").length)) : !Ot.test(n.which)) &&
                        !this.disabled &&
                        !e(this).hasClass("disabled")
                    ) {
                        var i = t._getParentFromElement(this),
                            o = e(i).hasClass("show");
                        if (o || 27 !== n.which) {
                            if ((n.preventDefault(), n.stopPropagation(), !o || (o && (27 === n.which || 32 === n.which))))
                                return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                            var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                                return e(t).is(":visible");
                            });
                            if (0 !== r.length) {
                                var s = r.indexOf(n.target);
                                38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
                            }
                        }
                    }
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return xt;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return jt;
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Lt._dataApiKeydownHandler)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", Lt._dataApiKeydownHandler)
        .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Lt._clearMenus)
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
            t.preventDefault(), t.stopPropagation(), Lt._jQueryInterface.call(e(this), "toggle");
        })
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
        }),
        (e.fn[At] = Lt._jQueryInterface),
        (e.fn[At].Constructor = Lt),
        (e.fn[At].noConflict = function () {
            return (e.fn[At] = It), Lt._jQueryInterface;
        });
    var Pt = e.fn.modal,
        Ft = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Rt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        Ht = (function () {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var n = t.prototype;
            return (
                (n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = e.Event("show.bs.modal", { relatedTarget: t });
                        e(this._element).trigger(i),
                            this._isShown ||
                                i.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
                                    return n.hide(t);
                                }),
                                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                    e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return n._showElement(t);
                                }));
                    }
                }),
                (n.hide = function (t) {
                    var n = this;
                    if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var i = e.Event("hide.bs.modal");
                        if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass("fade");
                            if (
                                (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(document).off("focusin.bs.modal"),
                                e(this._element).removeClass("show"),
                                e(this._element).off("click.dismiss.bs.modal"),
                                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                                o)
                            ) {
                                var r = s.getTransitionDurationFromElement(this._element);
                                e(this._element)
                                    .one(s.TRANSITION_END, function (t) {
                                        return n._hideModal(t);
                                    })
                                    .emulateTransitionEnd(r);
                            } else this._hideModal();
                        }
                    }
                }),
                (n.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return e(t).off(".bs.modal");
                    }),
                        e(document).off("focusin.bs.modal"),
                        e.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (n.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, Ft, t)), s.typeCheckConfig("modal", t, Rt), t;
                }),
                (n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event("hidePrevented.bs.modal");
                        if ((e(this._element).trigger(n), n.defaultPrevented)) return;
                        var i = this._element.scrollHeight > document.documentElement.clientHeight;
                        i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                        var o = s.getTransitionDurationFromElement(this._dialog);
                        e(this._element).off(s.TRANSITION_END),
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    t._element.classList.remove("modal-static"),
                                        i ||
                                            e(t._element)
                                                .one(s.TRANSITION_END, function () {
                                                    t._element.style.overflowY = "";
                                                })
                                                .emulateTransitionEnd(t._element, o);
                                })
                                .emulateTransitionEnd(o),
                            this._element.focus();
                    } else this.hide();
                }),
                (n._showElement = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade"),
                        o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        e(this._dialog).hasClass("modal-dialog-scrollable") && o ? (o.scrollTop = 0) : (this._element.scrollTop = 0),
                        i && s.reflow(this._element),
                        e(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = e.Event("shown.bs.modal", { relatedTarget: t }),
                        a = function () {
                            n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(r);
                        };
                    if (i) {
                        var l = s.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l);
                    } else a();
                }),
                (n._enforceFocus = function () {
                    var t = this;
                    e(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                        });
                }),
                (n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                              t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                          })
                        : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
                }),
                (n._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(window).on("resize.bs.modal", function (e) {
                              return t.handleUpdate(e);
                          })
                        : e(window).off("resize.bs.modal");
                }),
                (n._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
                        });
                }),
                (n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (n._showBackdrop = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            i && this._backdrop.classList.add(i),
                            e(this._backdrop).appendTo(document.body),
                            e(this._element).on("click.dismiss.bs.modal", function (t) {
                                n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && n._triggerBackdropTransition();
                            }),
                            i && s.reflow(this._backdrop),
                            e(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!i) return void t();
                        var o = s.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(o);
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass("show");
                        var r = function () {
                            n._removeBackdrop(), t && t();
                        };
                        if (e(this._element).hasClass("fade")) {
                            var a = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                    } else t && t();
                }),
                (n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (n._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        e(n).each(function (n, i) {
                            var o = i.style.paddingRight,
                                r = e(i).css("padding-right");
                            e(i)
                                .data("padding-right", o)
                                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                        }),
                            e(i).each(function (n, i) {
                                var o = i.style.marginRight,
                                    r = e(i).css("margin-right");
                                e(i)
                                    .data("margin-right", o)
                                    .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                            });
                        var o = document.body.style.paddingRight,
                            r = e(document.body).css("padding-right");
                        e(document.body)
                            .data("padding-right", o)
                            .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                    }
                    e(document.body).addClass("modal-open");
                }),
                (n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    e(t).each(function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                    });
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each(function (t, n) {
                        var i = e(n).data("margin-right");
                        "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
                    });
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                }),
                (n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var r = e(this).data("bs.modal"),
                            s = o({}, Ft, e(this).data(), "object" == typeof n && n ? n : {});
                        if ((r || ((r = new t(this, s)), e(this).data("bs.modal", r)), "string" == typeof n)) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i);
                        } else s.show && r.show(i);
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Ft;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n,
            i = this,
            r = s.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var a = e(n).data("bs.modal") ? "toggle" : o({}, e(n).data(), e(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var l = e(n).one("show.bs.modal", function (t) {
            t.isDefaultPrevented() ||
                l.one("hidden.bs.modal", function () {
                    e(i).is(":visible") && i.focus();
                });
        });
        Ht._jQueryInterface.call(e(n), a, this);
    }),
        (e.fn.modal = Ht._jQueryInterface),
        (e.fn.modal.Constructor = Ht),
        (e.fn.modal.noConflict = function () {
            return (e.fn.modal = Pt), Ht._jQueryInterface;
        });
    var Mt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Bt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Qt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Wt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                r = [].slice.call(i.body.querySelectorAll("*")),
                s = function (t, n) {
                    var i = r[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[s] || []);
                    a.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === Mt.indexOf(n) || Boolean(t.nodeValue.match(qt) || t.nodeValue.match(Qt));
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, l) || i.removeAttribute(t.nodeName);
                    });
                },
                a = 0,
                l = r.length;
            a < l;
            a++
        )
            s(a);
        return i.body.innerHTML;
    }
    var Ut = "tooltip",
        Vt = e.fn[Ut],
        Yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        zt = ["sanitize", "whiteList", "sanitizeFn"],
        Xt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        Kt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Gt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Bt,
            popperConfig: null,
        },
        $t = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        Jt = (function () {
            function t(t, e) {
                if ("undefined" == typeof kt) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
            }
            var n = t.prototype;
            return (
                (n.enable = function () {
                    this._isEnabled = !0;
                }),
                (n.disable = function () {
                    this._isEnabled = !1;
                }),
                (n.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (n.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                                (i._activeTrigger.click = !i._activeTrigger.click),
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                        } else {
                            if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (n.dispose = function () {
                    clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && e(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (n.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);
                        var i = s.findShadowRoot(this.element),
                            o = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !o) return;
                        var r = this.getTipElement(),
                            a = s.getUID(this.constructor.NAME);
                        r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(r).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var h = this._getContainer();
                        e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new kt(this.element, r, this._getPopperConfig(c))),
                            e(r).addClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var u = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            (t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
                        };
                        if (e(this.tip).hasClass("fade")) {
                            var f = s.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(f);
                        } else u();
                    }
                }),
                (n.hide = function (t) {
                    var n = this,
                        i = this.getTipElement(),
                        o = e.Event(this.constructor.Event.HIDE),
                        r = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                n._cleanTipClass(),
                                n.element.removeAttribute("aria-describedby"),
                                e(n.element).trigger(n.constructor.Event.HIDDEN),
                                null !== n._popper && n._popper.destroy(),
                                t && t();
                        };
                    if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
                        if (
                            (e(i).removeClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            e(this.tip).hasClass("fade"))
                        ) {
                            var a = s.getTransitionDurationFromElement(i);
                            e(i).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                        this._hoverState = "";
                    }
                }),
                (n.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (n.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (n.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (n.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (n.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
                }),
                (n.setElementContent = function (t, n) {
                    "object" != typeof n || (!n.nodeType && !n.jquery)
                        ? this.config.html
                            ? (this.config.sanitize && (n = Wt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n))
                            : t.text(n)
                        : this.config.html
                        ? e(n).parent().is(t) || t.empty().append(n)
                        : t.text(e(n).text());
                }),
                (n.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }),
                (n._getPopperConfig = function (t) {
                    var e = this;
                    return o(
                        {},
                        {
                            placement: t,
                            modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t);
                            },
                        },
                        this.config.popperConfig
                    );
                }),
                (n._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {})), e;
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (n._getContainer = function () {
                    return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
                }),
                (n._getAttachment = function (t) {
                    return Kt[t.toUpperCase()];
                }),
                (n._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                        if ("click" === n)
                            e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e);
                            });
                        else if ("manual" !== n) {
                            var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element)
                                .on(i, t.config.selector, function (e) {
                                    return t._enter(e);
                                })
                                .on(o, t.config.selector, function (e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t.element && t.hide();
                        }),
                        e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? (this.config = o({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (n._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (n._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                        e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                            ? (n._hoverState = "show")
                            : (clearTimeout(n._timeout),
                              (n._hoverState = "show"),
                              n.config.delay && n.config.delay.show
                                  ? (n._timeout = setTimeout(function () {
                                        "show" === n._hoverState && n.show();
                                    }, n.config.delay.show))
                                  : n.show());
                }),
                (n._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
                        n._isWithActiveTrigger() ||
                            (clearTimeout(n._timeout),
                            (n._hoverState = "out"),
                            n.config.delay && n.config.delay.hide
                                ? (n._timeout = setTimeout(function () {
                                      "out" === n._hoverState && n.hide();
                                  }, n.config.delay.hide))
                                : n.hide());
                }),
                (n._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (n._getConfig = function (t) {
                    var n = e(this.element).data();
                    return (
                        Object.keys(n).forEach(function (t) {
                            -1 !== zt.indexOf(t) && delete n[t];
                        }),
                        "number" == typeof (t = o({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        s.typeCheckConfig(Ut, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Wt(t.template, t.whiteList, t.sanitizeFn)),
                        t
                    );
                }),
                (n._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (n._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(Yt);
                    null !== n && n.length && t.removeClass(n.join(""));
                }),
                (n._handlePopperPlacementChange = function (t) {
                    (this.tip = t.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (n._fixTransition = function () {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.tooltip"),
                            o = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Gt;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Ut;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return $t;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Xt;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn[Ut] = Jt._jQueryInterface),
        (e.fn[Ut].Constructor = Jt),
        (e.fn[Ut].noConflict = function () {
            return (e.fn[Ut] = Vt), Jt._jQueryInterface;
        });
    var Zt = "popover",
        te = e.fn[Zt],
        ee = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        ne = o({}, Jt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        ie = o({}, Jt.DefaultType, { content: "(string|element|function)" }),
        oe = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        re = (function (t) {
            var n, o;
            function r() {
                return t.apply(this, arguments) || this;
            }
            (o = t), ((n = r).prototype = Object.create(o.prototype)), (n.prototype.constructor = n), (n.__proto__ = o);
            var s = r.prototype;
            return (
                (s.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (s.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (s.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (s.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
                }),
                (s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (s._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(ee);
                    null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (r._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if ((n || !/dispose|hide/.test(t)) && (n || ((n = new r(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]();
                        }
                    });
                }),
                i(r, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ne;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Zt;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return oe;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ie;
                        },
                    },
                ]),
                r
            );
        })(Jt);
    (e.fn[Zt] = re._jQueryInterface),
        (e.fn[Zt].Constructor = re),
        (e.fn[Zt].noConflict = function () {
            return (e.fn[Zt] = te), re._jQueryInterface;
        });
    var se = "scrollspy",
        ae = e.fn[se],
        le = { offset: 10, method: "auto", target: "" },
        ce = { offset: "number", method: "string", target: "(string|element)" },
        he = (function () {
            function t(t, n) {
                var i = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(n)),
                    (this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                        return i._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var n = t.prototype;
            return (
                (n.refresh = function () {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = "position" === i ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var n,
                                    r = s.getSelectorFromElement(t);
                                if ((r && (n = document.querySelector(r)), n)) {
                                    var a = n.getBoundingClientRect();
                                    if (a.width || a.height) return [e(n)[i]().top + o, r];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (n._getConfig = function (t) {
                    if ("string" != typeof (t = o({}, le, "object" == typeof t && t ? t : {})).target && s.isElement(t.target)) {
                        var n = e(t.target).attr("id");
                        n || ((n = s.getUID(se)), e(t.target).attr("id", n)), (t.target = "#" + n);
                    }
                    return s.typeCheckConfig(se, t, ce), t;
                }),
                (n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (n._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                        }
                    }
                }),
                (n._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var n = this._selector.split(",").map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                        }),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item")
                        ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active"))
                        : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        e(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
                }),
                (n._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.scrollspy");
                        if ((i || ((i = new t(this, "object" == typeof n && n)), e(this).data("bs.scrollspy", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return le;
                        },
                    },
                ]),
                t
            );
        })();
    e(window).on("load.bs.scrollspy.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
            var i = e(t[n]);
            he._jQueryInterface.call(i, i.data());
        }
    }),
        (e.fn[se] = he._jQueryInterface),
        (e.fn[se].Constructor = he),
        (e.fn[se].noConflict = function () {
            return (e.fn[se] = ae), he._jQueryInterface;
        });
    var ue = e.fn.tab,
        fe = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active")) || e(this._element).hasClass("disabled"))) {
                        var n,
                            i,
                            o = e(this._element).closest(".nav, .list-group")[0],
                            r = s.getSelectorFromElement(this._element);
                        if (o) {
                            var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                            i = (i = e.makeArray(e(o).find(a)))[i.length - 1];
                        }
                        var l = e.Event("hide.bs.tab", { relatedTarget: this._element }),
                            c = e.Event("show.bs.tab", { relatedTarget: i });
                        if ((i && e(i).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented())) {
                            r && (n = document.querySelector(r)), this._activate(this._element, o);
                            var h = function () {
                                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                    o = e.Event("shown.bs.tab", { relatedTarget: i });
                                e(i).trigger(n), e(t._element).trigger(o);
                            };
                            n ? this._activate(n, n.parentNode, h) : h();
                        }
                    }
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (n._activate = function (t, n, i) {
                    var o = this,
                        r = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? e(n).children(".active") : e(n).find("> li > .active"))[0],
                        a = i && r && e(r).hasClass("fade"),
                        l = function () {
                            return o._transitionComplete(t, r, i);
                        };
                    if (r && a) {
                        var c = s.getTransitionDurationFromElement(r);
                        e(r).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(c);
                    } else l();
                }),
                (n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass("active");
                        var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                        o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                    }
                    if (
                        (e(t).addClass("active"),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        s.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var r = e(t).closest(".dropdown")[0];
                        if (r) {
                            var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                            e(a).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.tab");
                        if ((o || ((o = new t(this)), i.data("bs.tab", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
        t.preventDefault(), fe._jQueryInterface.call(e(this), "show");
    }),
        (e.fn.tab = fe._jQueryInterface),
        (e.fn.tab.Constructor = fe),
        (e.fn.tab.noConflict = function () {
            return (e.fn.tab = ue), fe._jQueryInterface;
        });
    var de = e.fn.toast,
        pe = { animation: "boolean", autohide: "boolean", delay: "number" },
        me = { animation: !0, autohide: !0, delay: 500 },
        ge = (function () {
            function t(t, e) {
                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this,
                        n = e.Event("show.bs.toast");
                    if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                e(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if ((this._element.classList.remove("hide"), s.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                            var o = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, i).emulateTransitionEnd(o);
                        } else i();
                    }
                }),
                (n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = e.Event("hide.bs.toast");
                        e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                    }
                }),
                (n.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        e(this._element).off("click.dismiss.bs.toast"),
                        e.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, me, e(this._element).data(), "object" == typeof t && t ? t : {})), s.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
                }),
                (n._setListeners = function () {
                    var t = this;
                    e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                        return t.hide();
                    });
                }),
                (n._close = function () {
                    var t = this,
                        n = function () {
                            t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
                        };
                    if ((this._element.classList.remove("show"), this._config.animation)) {
                        var i = s.getTransitionDurationFromElement(this._element);
                        e(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i);
                    } else n();
                }),
                (n._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.toast");
                        if ((o || ((o = new t(this, "object" == typeof n && n)), i.data("bs.toast", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](this);
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return pe;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return me;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn.toast = ge._jQueryInterface),
        (e.fn.toast.Constructor = ge),
        (e.fn.toast.noConflict = function () {
            return (e.fn.toast = de), ge._jQueryInterface;
        }),
        (t.Alert = c),
        (t.Button = u),
        (t.Carousel = v),
        (t.Collapse = T),
        (t.Dropdown = Lt),
        (t.Modal = Ht),
        (t.Popover = re),
        (t.Scrollspy = he),
        (t.Tab = fe),
        (t.Toast = ge),
        (t.Tooltip = Jt),
        (t.Util = s),
        Object.defineProperty(t, "__esModule", { value: !0 });
});

/* ============================================================
 * retina-replace.min.js v1.0
 * http://github.com/leonsmith/retina-replace-js
 * ============================================================
 * Author: Leon Smith
 * Twitter: @nullUK
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
(function (a) {
    var e = function (d, c) {
        this.options = c;
        var b = a(d),
            g = b.is("img"),
            f = g ? b.attr("src") : b.backgroundImageUrl(),
            f = this.options.generateUrl(b, f);
        a("<img/>")
            .attr("src", f)
            .load(function () {
                g ? b.attr("src", a(this).attr("src")) : (b.backgroundImageUrl(a(this).attr("src")), b.backgroundSize(a(this)[0].width, a(this)[0].height));
                b.attr("data-retina", "complete");
            });
    };
    e.prototype = { constructor: e };
    a.fn.retinaReplace = function (d) {
        var c;
        c = void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio;
        return 1 >= c
            ? this
            : this.each(function () {
                  var b = a(this),
                      c = b.data("retinaReplace"),
                      f = a.extend({}, a.fn.retinaReplace.defaults, b.data(), "object" == typeof d && d);
                  c || b.data("retinaReplace", (c = new e(this, f)));
                  if ("string" == typeof d) c[d]();
              });
    };
    a.fn.retinaReplace.defaults = {
        suffix: "_2x",
        generateUrl: function (a, c) {
            var b = c.lastIndexOf("."),
                e = c.substr(b + 1);
            return c.substr(0, b) + this.suffix + "." + e;
        },
    };
    a.fn.retinaReplace.Constructor = e;
    a.fn.backgroundImageUrl = function (d) {
        return d
            ? this.each(function () {
                  a(this).css("background-image", 'url("' + d + '")');
              })
            : a(this)
                  .css("background-image")
                  .replace(/url\(|\)|"|'/g, "");
    };
    a.fn.backgroundSize = function (d, c) {
        var b = Math.floor(d / 2) + "px " + Math.floor(c / 2) + "px";
        a(this).css("background-size", b);
        a(this).css("-webkit-background-size", b);
    };
    a(function () {
        a("[data-retina='true']").retinaReplace();
    });
})(window.jQuery);

/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!(function (e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e);
    }
    if (!e.jQuery) {
        var $ = function (e, t) {
            return new $.fn.init(e, t);
        };
        ($.isWindow = function (e) {
            return null != e && e == e.window;
        }),
            ($.type = function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e;
            }),
            ($.isArray =
                Array.isArray ||
                function (e) {
                    return "array" === $.type(e);
                }),
            ($.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
                try {
                    if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (r) {
                    return !1;
                }
                for (t in e);
                return void 0 === t || n.call(e, t);
            }),
            ($.each = function (e, r, a) {
                var n,
                    o = 0,
                    i = e.length,
                    s = t(e);
                if (a) {
                    if (s) for (; i > o && ((n = r.apply(e[o], a)), n !== !1); o++);
                    else for (o in e) if (((n = r.apply(e[o], a)), n === !1)) break;
                } else if (s) for (; i > o && ((n = r.call(e[o], o, e[o])), n !== !1); o++);
                else for (o in e) if (((n = r.call(e[o], o, e[o])), n === !1)) break;
                return e;
            }),
            ($.data = function (e, t, a) {
                if (void 0 === a) {
                    var n = e[$.expando],
                        o = n && r[n];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t];
                } else if (void 0 !== t) {
                    var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                    return (r[n] = r[n] || {}), (r[n][t] = a), a;
                }
            }),
            ($.removeData = function (e, t) {
                var a = e[$.expando],
                    n = a && r[a];
                n &&
                    $.each(t, function (e, t) {
                        delete n[t];
                    });
            }),
            ($.extend = function () {
                var e,
                    t,
                    r,
                    a,
                    n,
                    o,
                    i = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof i && ((u = i), (i = arguments[s] || {}), s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && ((i = this), s--); l > s; s++)
                    if (null != (n = arguments[s]))
                        for (a in n)
                            (e = i[a]),
                                (r = n[a]),
                                i !== r &&
                                    (u && r && ($.isPlainObject(r) || (t = $.isArray(r)))
                                        ? (t ? ((t = !1), (o = e && $.isArray(e) ? e : [])) : (o = e && $.isPlainObject(e) ? e : {}), (i[a] = $.extend(u, o, r)))
                                        : void 0 !== r && (i[a] = r));
                return i;
            }),
            ($.queue = function (e, r, a) {
                function n(e, r) {
                    var a = r || [];
                    return (
                        null != e &&
                            (t(Object(e))
                                ? !(function (e, t) {
                                      for (var r = +t.length, a = 0, n = e.length; r > a; ) e[n++] = t[a++];
                                      if (r !== r) for (; void 0 !== t[a]; ) e[n++] = t[a++];
                                      return (e.length = n), e;
                                  })(a, "string" == typeof e ? [e] : e)
                                : [].push.call(a, e)),
                        a
                    );
                }
                if (e) {
                    r = (r || "fx") + "queue";
                    var o = $.data(e, r);
                    return a ? (!o || $.isArray(a) ? (o = $.data(e, r, n(a))) : o.push(a), o) : o || [];
                }
            }),
            ($.dequeue = function (e, t) {
                $.each(e.nodeType ? [e] : e, function (e, r) {
                    t = t || "fx";
                    var a = $.queue(r, t),
                        n = a.shift();
                    "inprogress" === n && (n = a.shift()),
                        n &&
                            ("fx" === t && a.unshift("inprogress"),
                            n.call(r, function () {
                                $.dequeue(r, t);
                            }));
                });
            }),
            ($.fn = $.prototype = {
                init: function (e) {
                    if (e.nodeType) return (this[0] = e), this;
                    throw new Error("Not a DOM node.");
                },
                offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                    return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
                },
                position: function () {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                        return e || document;
                    }
                    var t = this[0],
                        e = e.apply(t),
                        r = this.offset(),
                        a = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : $(e).offset();
                    return (
                        (r.top -= parseFloat(t.style.marginTop) || 0),
                        (r.left -= parseFloat(t.style.marginLeft) || 0),
                        e.style && ((a.top += parseFloat(e.style.borderTopWidth) || 0), (a.left += parseFloat(e.style.borderLeftWidth) || 0)),
                        { top: r.top - a.top, left: r.left - a.left }
                    );
                },
            });
        var r = {};
        ($.expando = "velocity" + new Date().getTime()), ($.uuid = 0);
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        ($.fn.init.prototype = $.fn), (e.Velocity = { Utilities: $ });
    }
})(window),
    (function (e) {
        "object" == typeof module && "object" == typeof module.exports ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : e();
    })(function () {
        return (function (e, t, r, a) {
            function n(e) {
                for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                    var n = e[t];
                    n && a.push(n);
                }
                return a;
            }
            function o(e) {
                return g.isWrapped(e) ? (e = [].slice.call(e)) : g.isNode(e) && (e = [e]), e;
            }
            function i(e) {
                var t = $.data(e, "velocity");
                return null === t ? a : t;
            }
            function s(e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e);
                };
            }
            function l(e, r, a, n) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e;
                }
                function i(e, t) {
                    return 3 * t - 6 * e;
                }
                function s(e) {
                    return 3 * e;
                }
                function l(e, t, r) {
                    return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
                }
                function u(e, t, r) {
                    return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
                }
                function c(t, r) {
                    for (var n = 0; m > n; ++n) {
                        var o = u(r, e, a);
                        if (0 === o) return r;
                        var i = l(r, e, a) - t;
                        r -= i / o;
                    }
                    return r;
                }
                function p() {
                    for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a);
                }
                function f(t, r, n) {
                    var o,
                        i,
                        s = 0;
                    do (i = r + (n - r) / 2), (o = l(i, e, a) - t), o > 0 ? (n = i) : (r = i);
                    while (Math.abs(o) > h && ++s < v);
                    return i;
                }
                function d(t) {
                    for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                    --n;
                    var i = (t - w[n]) / (w[n + 1] - w[n]),
                        s = r + i * x,
                        l = u(s, e, a);
                    return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
                }
                function g() {
                    (V = !0), (e != r || a != n) && p();
                }
                var m = 4,
                    y = 0.001,
                    h = 1e-7,
                    v = 10,
                    b = 11,
                    x = 1 / (b - 1),
                    S = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var P = 0; 4 > P; ++P) if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
                (e = Math.min(e, 1)), (a = Math.min(a, 1)), (e = Math.max(e, 0)), (a = Math.max(a, 0));
                var w = S ? new Float32Array(b) : new Array(b),
                    V = !1,
                    C = function (t) {
                        return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
                    };
                C.getControlPoints = function () {
                    return [
                        { x: e, y: r },
                        { x: a, y: n },
                    ];
                };
                var T = "generateBezier(" + [e, r, a, n] + ")";
                return (
                    (C.toString = function () {
                        return T;
                    }),
                    C
                );
            }
            function u(e, t) {
                var r = e;
                return (
                    g.isString(e) ? v.Easings[e] || (r = !1) : (r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1),
                    r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h),
                    r
                );
            }
            function c(e) {
                if (e)
                    for (var t = new Date().getTime(), r = 0, n = v.State.calls.length; n > r; r++)
                        if (v.State.calls[r]) {
                            var o = v.State.calls[r],
                                s = o[0],
                                l = o[2],
                                u = o[3],
                                f = !!u;
                            u || (u = v.State.calls[r][3] = t - 16);
                            for (var d = Math.min((t - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                                var h = s[m],
                                    b = h.element;
                                if (i(b)) {
                                    var S = !1;
                                    if (l.display !== a && null !== l.display && "none" !== l.display) {
                                        if ("flex" === l.display) {
                                            var w = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            $.each(w, function (e, t) {
                                                x.setPropertyValue(b, "display", t);
                                            });
                                        }
                                        x.setPropertyValue(b, "display", l.display);
                                    }
                                    l.visibility !== a && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                                    for (var V in h)
                                        if ("element" !== V) {
                                            var C = h[V],
                                                T,
                                                k = g.isString(C.easing) ? v.Easings[C.easing] : C.easing;
                                            if (1 === d) T = C.endValue;
                                            else if (((T = C.startValue + (C.endValue - C.startValue) * k(d)), !f && T === C.currentValue)) continue;
                                            if (((C.currentValue = T), x.Hooks.registered[V])) {
                                                var A = x.Hooks.getRoot(V),
                                                    F = i(b).rootPropertyValueCache[A];
                                                F && (C.rootPropertyValue = F);
                                            }
                                            var E = x.setPropertyValue(b, V, C.currentValue + (0 === parseFloat(T) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                            x.Hooks.registered[V] && (i(b).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, E[1]) : E[1]), "transform" === E[0] && (S = !0);
                                        }
                                    l.mobileHA && i(b).transformCache.translate3d === a && ((i(b).transformCache.translate3d = "(0px, 0px, 0px)"), (S = !0)), S && x.flushTransformCache(b);
                                }
                            }
                            l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1),
                                l.visibility !== a && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1),
                                l.progress && l.progress.call(o[1], o[1], d, Math.max(0, u + l.duration - t), u),
                                1 === d && p(r);
                        }
                v.State.isTicking && P(c);
            }
            function p(e, t) {
                if (!v.State.calls[e]) return !1;
                for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                    var p = r[u].element;
                    if (
                        (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)),
                        o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p))
                    ) {
                        (i(p).isAnimating = !1), (i(p).rootPropertyValueCache = {});
                        var f = !1;
                        $.each(x.Lists.transforms3D, function (e, t) {
                            var r = /^scale/.test(t) ? 1 : 0,
                                n = i(p).transformCache[t];
                            i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && ((f = !0), delete i(p).transformCache[t]);
                        }),
                            o.mobileHA && ((f = !0), delete i(p).transformCache.translate3d),
                            f && x.flushTransformCache(p),
                            x.Values.removeClass(p, "velocity-animating");
                    }
                    if (!t && o.complete && !o.loop && u === c - 1)
                        try {
                            o.complete.call(n, n);
                        } catch (d) {
                            setTimeout(function () {
                                throw d;
                            }, 1);
                        }
                    s && o.loop !== !0 && s(n),
                        o.loop !== !0 ||
                            t ||
                            ($.each(i(p).tweensContainer, function (e, t) {
                                /^rotate/.test(e) && 360 === parseFloat(t.endValue) && ((t.endValue = 0), (t.startValue = 360));
                            }),
                            v(p, "reverse", { loop: !0, delay: o.delay })),
                        o.queue !== !1 && $.dequeue(p, o.queue);
                }
                v.State.calls[e] = !1;
                for (var g = 0, m = v.State.calls.length; m > g; g++)
                    if (v.State.calls[g] !== !1) {
                        l = !0;
                        break;
                    }
                l === !1 && ((v.State.isTicking = !1), delete v.State.calls, (v.State.calls = []));
            }
            var f = (function () {
                    if (r.documentMode) return r.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = r.createElement("div");
                        if (((t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->"), t.getElementsByTagName("span").length)) return (t = null), e;
                    }
                    return a;
                })(),
                d = (function () {
                    var e = 0;
                    return (
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        function (t) {
                            var r = new Date().getTime(),
                                a;
                            return (
                                (a = Math.max(0, 16 - (r - e))),
                                (e = r + a),
                                setTimeout(function () {
                                    t(r + a);
                                }, a)
                            );
                        }
                    );
                })(),
                g = {
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    isArray:
                        Array.isArray ||
                        function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e);
                        },
                    isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e);
                    },
                    isNode: function (e) {
                        return e && e.nodeType;
                    },
                    isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || ("object" == typeof e[0] && e[0].nodeType > 0));
                    },
                    isWrapped: function (e) {
                        return e && (e.jquery || (t.Zepto && t.Zepto.zepto.isZ(e)));
                    },
                    isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement;
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0;
                    },
                },
                $,
                m = !1;
            if ((e.fn && e.fn.jquery ? (($ = e), (m = !0)) : ($ = t.Velocity.Utilities), 8 >= f && !m)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);
            var y = 400,
                h = "swing",
                v = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: r.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                    },
                    CSS: {},
                    Utilities: $,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: { queue: "", duration: y, easing: h, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 },
                    init: function (e) {
                        $.data(e, "velocity", { isSVG: g.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                    },
                    hook: null,
                    mock: !1,
                    version: { major: 1, minor: 1, patch: 0 },
                    debug: !1,
                };
            t.pageYOffset !== a
                ? ((v.State.scrollAnchor = t), (v.State.scrollPropertyLeft = "pageXOffset"), (v.State.scrollPropertyTop = "pageYOffset"))
                : ((v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body), (v.State.scrollPropertyLeft = "scrollLeft"), (v.State.scrollPropertyTop = "scrollTop"));
            var b = (function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v;
                }
                function t(t, r, a) {
                    var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };
                    return { dx: n.v, dv: e(n) };
                }
                function r(r, a) {
                    var n = { dx: r.v, dv: e(r) },
                        o = t(r, 0.5 * a, n),
                        i = t(r, 0.5 * a, o),
                        s = t(r, a, i),
                        l = (1 / 6) * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                        u = (1 / 6) * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                    return (r.x = r.x + l * a), (r.v = r.v + u * a), r;
                }
                return function a(e, t, n) {
                    var o = { x: -1, v: 0, tension: null, friction: null },
                        i = [0],
                        s = 0,
                        l = 1e-4,
                        u = 0.016,
                        c,
                        p,
                        f;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? ((s = a(e, t)), (p = (s / n) * u)) : (p = u); ; )
                        if (((f = r(f || o, p)), i.push(1 + f.x), (s += 16), !(Math.abs(f.x) > l && Math.abs(f.v) > l))) break;
                    return c
                        ? function (e) {
                              return i[(e * (i.length - 1)) | 0];
                          }
                        : s;
                };
            })();
            (v.Easings = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                },
            }),
                $.each(
                    [
                        ["ease", [0.25, 0.1, 0.25, 1]],
                        ["ease-in", [0.42, 0, 1, 1]],
                        ["ease-out", [0, 0, 0.58, 1]],
                        ["ease-in-out", [0.42, 0, 0.58, 1]],
                        ["easeInSine", [0.47, 0, 0.745, 0.715]],
                        ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                        ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                        ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                        ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                        ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                        ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                        ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                        ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                        ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                        ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                        ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                        ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                        ["easeOutQuint", [0.23, 1, 0.32, 1]],
                        ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                        ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                        ["easeOutExpo", [0.19, 1, 0.22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                        ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                        ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                    ],
                    function (e, t) {
                        v.Easings[t[0]] = l.apply(null, t[1]);
                    }
                );
            var x = (v.CSS = {
                RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"],
                    },
                    registered: {},
                    register: function () {
                        for (var e = 0; e < x.Lists.colors.length; e++) {
                            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t];
                        }
                        var r, a, n;
                        if (f)
                            for (r in x.Hooks.templates) {
                                (a = x.Hooks.templates[r]), (n = a[0].split(" "));
                                var o = a[1].match(x.RegEx.valueSplit);
                                "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), (x.Hooks.templates[r] = [n.join(" "), o.join(" ")]));
                            }
                        for (r in x.Hooks.templates) {
                            (a = x.Hooks.templates[r]), (n = a[0].split(" "));
                            for (var e in n) {
                                var i = r + n[e],
                                    s = e;
                                x.Hooks.registered[i] = [r, s];
                            }
                        }
                    },
                    getRoot: function (e) {
                        var t = x.Hooks.registered[e];
                        return t ? t[0] : e;
                    },
                    cleanRootPropertyValue: function (e, t) {
                        return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t;
                    },
                    extractValue: function (e, t) {
                        var r = x.Hooks.registered[e];
                        if (r) {
                            var a = r[0],
                                n = r[1];
                            return (t = x.Hooks.cleanRootPropertyValue(a, t)), t.toString().match(x.RegEx.valueSplit)[n];
                        }
                        return t;
                    },
                    injectValue: function (e, t, r) {
                        var a = x.Hooks.registered[e];
                        if (a) {
                            var n = a[0],
                                o = a[1],
                                i,
                                s;
                            return (r = x.Hooks.cleanRootPropertyValue(n, r)), (i = r.toString().match(x.RegEx.valueSplit)), (i[o] = t), (s = i.join(" "));
                        }
                        return r;
                    },
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var a;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? (a = r) : ((a = r.toString().match(x.RegEx.valueUnwrap)), (a = a ? a[1].replace(/,(\s+)?/g, " ") : r)), a;
                                case "inject":
                                    return "rect(" + r + ")";
                            }
                        },
                        blur: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return "-webkit-filter";
                                case "extract":
                                    var a = parseFloat(r);
                                    if (!a && 0 !== a) {
                                        var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        a = n ? n[1] : 0;
                                    }
                                    return a;
                                case "inject":
                                    return parseFloat(r) ? "blur(" + r + ")" : "none";
                            }
                        },
                        opacity: function (e, t, r) {
                            if (8 >= f)
                                switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return (r = a ? a[1] / 100 : 1);
                                    case "inject":
                                        return (t.style.zoom = 1), parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";
                                }
                            else
                                switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return r;
                                    case "inject":
                                        return r;
                                }
                        },
                    },
                    register: function () {
                        9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e = 0; e < x.Lists.transformsBase.length; e++)
                            !(function () {
                                var t = x.Lists.transformsBase[e];
                                x.Normalizations.registered[t] = function (e, r, n) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return i(r) === a || i(r).transformCache[t] === a ? (/^scale/i.test(t) ? 1 : 0) : i(r).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var o = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), (o = !/(\d)$/i.test(n));
                                                    break;
                                                case "skew":
                                                    o = !/(deg|\d)$/i.test(n);
                                                    break;
                                                case "rotate":
                                                    o = !/(deg|\d)$/i.test(n);
                                            }
                                            return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];
                                    }
                                };
                            })();
                        for (var e = 0; e < x.Lists.colors.length; e++)
                            !(function () {
                                var t = x.Lists.colors[e];
                                x.Normalizations.registered[t] = function (e, r, n) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var o;
                                            if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                            else {
                                                var i,
                                                    s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };
                                                /^[A-z]+$/i.test(n) ? (i = s[n] !== a ? s[n] : s.black) : x.RegEx.isHex.test(n) ? (i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")") : /^rgba?\(/i.test(n) || (i = s.black),
                                                    (o = (i || n)
                                                        .toString()
                                                        .match(x.RegEx.valueUnwrap)[1]
                                                        .replace(/,(\s+)?/g, " "));
                                            }
                                            return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                        case "inject":
                                            return (
                                                8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"),
                                                (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                            );
                                    }
                                };
                            })();
                    },
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase();
                        });
                    },
                    SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || (v.State.isAndroid && !v.State.isChrome)) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                    },
                    prefixCheck: function (e) {
                        if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                            var n;
                            if (
                                ((n =
                                    0 === r
                                        ? e
                                        : t[r] +
                                          e.replace(/^\w/, function (e) {
                                              return e.toUpperCase();
                                          })),
                                g.isString(v.State.prefixElement.style[n]))
                            )
                                return (v.State.prefixMatches[e] = n), [n, !0];
                        }
                        return [e, !1];
                    },
                },
                Values: {
                    hexToRgb: function (e) {
                        var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                            a;
                        return (
                            (e = e.replace(t, function (e, t, r, a) {
                                return t + t + r + r + a + a;
                            })),
                            (a = r.exec(e)),
                            a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                        );
                    },
                    isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                    },
                    getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                    },
                    getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)
                            ? "inline"
                            : /^(li)$/i.test(t)
                            ? "list-item"
                            : /^(tr)$/i.test(t)
                            ? "table-row"
                            : "block";
                    },
                    addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : (e.className += (e.className.length ? " " : "") + t);
                    },
                    removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : (e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " "));
                    },
                },
                getPropertyValue: function (e, r, n, o) {
                    function s(e, r) {
                        function n() {
                            u && x.setPropertyValue(e, "display", "none");
                        }
                        var l = 0;
                        if (8 >= f) l = $.css(e, r);
                        else {
                            var u = !1;
                            if ((/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && ((u = !0), x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o)) {
                                if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c =
                                        e.offsetHeight -
                                        (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                    return n(), c;
                                }
                                if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p =
                                        e.offsetWidth -
                                        (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) -
                                        (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                    return n(), p;
                                }
                            }
                            var d;
                            (d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : (i(e).computedStyle = t.getComputedStyle(e, null))),
                                (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"),
                                (l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r]),
                                ("" === l || null === l) && (l = e.style[r]),
                                n();
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                            var g = s(e, "position");
                            ("fixed" === g || ("absolute" === g && /top|left/i.test(r))) && (l = $(e).position()[r] + "px");
                        }
                        return l;
                    }
                    var l;
                    if (x.Hooks.registered[r]) {
                        var u = r,
                            c = x.Hooks.getRoot(u);
                        n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), (l = x.Hooks.extractValue(u, n));
                    } else if (x.Normalizations.registered[r]) {
                        var p, d;
                        (p = x.Normalizations.registered[r]("name", e)),
                            "transform" !== p && ((d = s(e, x.Names.prefixCheck(p)[0])), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])),
                            (l = x.Normalizations.registered[r]("extract", e, d));
                    }
                    return (
                        /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? (/^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r)) : s(e, x.Names.prefixCheck(r)[0])),
                        x.Values.isCSSNullValue(l) && (l = 0),
                        v.debug >= 2 && console.log("Get " + r + ": " + l),
                        l
                    );
                },
                setPropertyValue: function (e, r, a, n, o) {
                    var s = r;
                    if ("scroll" === r) o.container ? (o.container["scroll" + o.direction] = a) : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                    else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), (s = "transform"), (a = i(e).transformCache[r]);
                    else {
                        if (x.Hooks.registered[r]) {
                            var l = r,
                                u = x.Hooks.getRoot(r);
                            (n = n || x.getPropertyValue(e, u)), (a = x.Hooks.injectValue(l, a, n)), (r = u);
                        }
                        if ((x.Normalizations.registered[r] && ((a = x.Normalizations.registered[r]("inject", e, a)), (r = x.Normalizations.registered[r]("name", e))), (s = x.Names.prefixCheck(r)[0]), 8 >= f))
                            try {
                                e.style[s] = a;
                            } catch (c) {
                                v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
                            }
                        else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : (e.style[s] = a);
                        v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
                    }
                    return [s, a];
                },
                flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(x.getPropertyValue(e, t));
                    }
                    var r = "";
                    if ((f || (v.State.isAndroid && !v.State.isChrome)) && i(e).isSVG) {
                        var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };
                        $.each(i(e).transformCache, function (e) {
                            /^translate/i.test(e) ? (e = "translate") : /^scale/i.test(e) ? (e = "scale") : /^rotate/i.test(e) && (e = "rotate"), a[e] && ((r += e + "(" + a[e].join(" ") + ") "), delete a[e]);
                        });
                    } else {
                        var n, o;
                        $.each(i(e).transformCache, function (t) {
                            return (n = i(e).transformCache[t]), "transformPerspective" === t ? ((o = n), !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
                        }),
                            o && (r = "perspective" + o + " " + r);
                    }
                    x.setPropertyValue(e, "transform", r);
                },
            });
            x.Hooks.register(),
                x.Normalizations.register(),
                (v.hook = function (e, t, r) {
                    var n = a;
                    return (
                        (e = o(e)),
                        $.each(e, function (e, o) {
                            if ((i(o) === a && v.init(o), r === a)) n === a && (n = v.CSS.getPropertyValue(o, t));
                            else {
                                var s = v.CSS.setPropertyValue(o, t, r);
                                "transform" === s[0] && v.CSS.flushTransformCache(o), (n = s);
                            }
                        }),
                        n
                    );
                });
            var S = function () {
                function e() {
                    return f ? k.promise || null : d;
                }
                function s() {
                    function e(e) {
                        function f(e, t) {
                            var r = a,
                                n = a,
                                i = a;
                            return (
                                g.isArray(e)
                                    ? ((r = e[0]),
                                      (!g.isArray(e[1]) && /^[\d-]/.test(e[1])) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1])
                                          ? (i = e[1])
                                          : ((g.isString(e[1]) && !x.RegEx.isHex.test(e[1])) || g.isArray(e[1])) && ((n = t ? e[1] : u(e[1], s.duration)), e[2] !== a && (i = e[2])))
                                    : (r = e),
                                t || (n = n || s.easing),
                                g.isFunction(r) && (r = r.call(o, V, w)),
                                g.isFunction(i) && (i = i.call(o, V, w)),
                                [r || 0, n, i]
                            );
                        }
                        function d(e, t) {
                            var r, a;
                            return (
                                (a = (t || "0")
                                    .toString()
                                    .toLowerCase()
                                    .replace(/[%A-z]+$/, function (e) {
                                        return (r = e), "";
                                    })),
                                r || (r = x.Values.getUnitType(e)),
                                [a, r]
                            );
                        }
                        function m() {
                            var e = { myParent: o.parentNode || r.body, position: x.getPropertyValue(o, "position"), fontSize: x.getPropertyValue(o, "fontSize") },
                                a = e.position === L.lastPosition && e.myParent === L.lastParent,
                                n = e.fontSize === L.lastFontSize;
                            (L.lastParent = e.myParent), (L.lastPosition = e.position), (L.lastFontSize = e.fontSize);
                            var s = 100,
                                l = {};
                            if (n && a) (l.emToPx = L.lastEmToPx), (l.percentToPxWidth = L.lastPercentToPxWidth), (l.percentToPxHeight = L.lastPercentToPxHeight);
                            else {
                                var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                v.init(u),
                                    e.myParent.appendChild(u),
                                    $.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                        v.CSS.setPropertyValue(u, t, "hidden");
                                    }),
                                    v.CSS.setPropertyValue(u, "position", e.position),
                                    v.CSS.setPropertyValue(u, "fontSize", e.fontSize),
                                    v.CSS.setPropertyValue(u, "boxSizing", "content-box"),
                                    $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                        v.CSS.setPropertyValue(u, t, s + "%");
                                    }),
                                    v.CSS.setPropertyValue(u, "paddingLeft", s + "em"),
                                    (l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s),
                                    (l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s),
                                    (l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s),
                                    e.myParent.removeChild(u);
                            }
                            return (
                                null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16),
                                null === L.vwToPx && ((L.vwToPx = parseFloat(t.innerWidth) / 100), (L.vhToPx = parseFloat(t.innerHeight) / 100)),
                                (l.remToPx = L.remToPx),
                                (l.vwToPx = L.vwToPx),
                                (l.vhToPx = L.vhToPx),
                                v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o),
                                l
                            );
                        }
                        if (s.begin && 0 === V)
                            try {
                                s.begin.call(h, h);
                            } catch (y) {
                                setTimeout(function () {
                                    throw y;
                                }, 1);
                            }
                        if ("scroll" === A) {
                            var S = /^x$/i.test(s.axis) ? "Left" : "Top",
                                C = parseFloat(s.offset) || 0,
                                T,
                                F,
                                E;
                            s.container
                                ? g.isWrapped(s.container) || g.isNode(s.container)
                                    ? ((s.container = s.container[0] || s.container), (T = s.container["scroll" + S]), (E = T + $(o).position()[S.toLowerCase()] + C))
                                    : (s.container = null)
                                : ((T = v.State.scrollAnchor[v.State["scrollProperty" + S]]), (F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]]), (E = $(o).offset()[S.toLowerCase()] + C)),
                                (l = { scroll: { rootPropertyValue: !1, startValue: T, currentValue: T, endValue: E, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: S, alternateValue: F } }, element: o }),
                                v.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
                        } else if ("reverse" === A) {
                            if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
                            "none" === i(o).opts.display && (i(o).opts.display = "auto"),
                                "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"),
                                (i(o).opts.loop = !1),
                                (i(o).opts.begin = null),
                                (i(o).opts.complete = null),
                                P.easing || delete s.easing,
                                P.duration || delete s.duration,
                                (s = $.extend({}, i(o).opts, s));
                            var j = $.extend(!0, {}, i(o).tweensContainer);
                            for (var H in j)
                                if ("element" !== H) {
                                    var N = j[H].startValue;
                                    (j[H].startValue = j[H].currentValue = j[H].endValue),
                                        (j[H].endValue = N),
                                        g.isEmptyObject(P) || (j[H].easing = s.easing),
                                        v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o);
                                }
                            l = j;
                        } else if ("start" === A) {
                            var j;
                            i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer),
                                $.each(b, function (e, t) {
                                    if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                        var r = f(t, !0),
                                            n = r[0],
                                            o = r[1],
                                            i = r[2];
                                        if (x.RegEx.isHex.test(n)) {
                                            for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                                var p = [l[c]];
                                                o && p.push(o), u !== a && p.push(u[c]), (b[e + s[c]] = p);
                                            }
                                            delete b[e];
                                        }
                                    }
                                });
                            for (var O in b) {
                                var z = f(b[O]),
                                    q = z[0],
                                    M = z[1],
                                    I = z[2];
                                O = x.Names.camelCase(O);
                                var B = x.Hooks.getRoot(O),
                                    W = !1;
                                if (i(o).isSVG || x.Names.prefixCheck(B)[1] !== !1 || x.Normalizations.registered[B] !== a) {
                                    ((s.display !== a && null !== s.display && "none" !== s.display) || (s.visibility !== a && "hidden" !== s.visibility)) && /opacity|filter/.test(O) && !I && 0 !== q && (I = 0),
                                        s._cacheValues && j && j[O]
                                            ? (I === a && (I = j[O].endValue + j[O].unitType), (W = i(o).rootPropertyValueCache[B]))
                                            : x.Hooks.registered[O]
                                            ? I === a
                                                ? ((W = x.getPropertyValue(o, B)), (I = x.getPropertyValue(o, O, W)))
                                                : (W = x.Hooks.templates[B][1])
                                            : I === a && (I = x.getPropertyValue(o, O));
                                    var G,
                                        D,
                                        X,
                                        Y = !1;
                                    if (
                                        ((G = d(O, I)),
                                        (I = G[0]),
                                        (X = G[1]),
                                        (G = d(O, q)),
                                        (q = G[0].replace(/^([+-\/*])=/, function (e, t) {
                                            return (Y = t), "";
                                        })),
                                        (D = G[1]),
                                        (I = parseFloat(I) || 0),
                                        (q = parseFloat(q) || 0),
                                        "%" === D && (/^(fontSize|lineHeight)$/.test(O) ? ((q /= 100), (D = "em")) : /^scale/.test(O) ? ((q /= 100), (D = "")) : /(Red|Green|Blue)$/i.test(O) && ((q = (q / 100) * 255), (D = ""))),
                                        /[\/*]/.test(Y))
                                    )
                                        D = X;
                                    else if (X !== D && 0 !== I)
                                        if (0 === q) D = X;
                                        else {
                                            p = p || m();
                                            var Q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                            switch (X) {
                                                case "%":
                                                    I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    I *= p[X + "ToPx"];
                                            }
                                            switch (D) {
                                                case "%":
                                                    I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    I *= 1 / p[D + "ToPx"];
                                            }
                                        }
                                    switch (Y) {
                                        case "+":
                                            q = I + q;
                                            break;
                                        case "-":
                                            q = I - q;
                                            break;
                                        case "*":
                                            q = I * q;
                                            break;
                                        case "/":
                                            q = I / q;
                                    }
                                    (l[O] = { rootPropertyValue: W, startValue: I, currentValue: I, endValue: q, unitType: D, easing: M }), v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o);
                                } else v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.");
                            }
                            l.element = o;
                        }
                        l.element &&
                            (x.Values.addClass(o, "velocity-animating"),
                            R.push(l),
                            "" === s.queue && ((i(o).tweensContainer = l), (i(o).opts = s)),
                            (i(o).isAnimating = !0),
                            V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([R, h, s, null, k.resolver]), v.State.isTicking === !1 && ((v.State.isTicking = !0), c())) : V++);
                    }
                    var o = this,
                        s = $.extend({}, v.defaults, P),
                        l = {},
                        p;
                    switch (
                        (i(o) === a && v.init(o),
                        parseFloat(s.delay) &&
                            s.queue !== !1 &&
                            $.queue(o, s.queue, function (e) {
                                (v.velocityQueueEntryFlag = !0), (i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e });
                            }),
                        s.duration.toString().toLowerCase())
                    ) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = y;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1;
                    }
                    v.mock !== !1 && (v.mock === !0 ? (s.duration = s.delay = 1) : ((s.duration *= parseFloat(v.mock) || 1), (s.delay *= parseFloat(v.mock) || 1))),
                        (s.easing = u(s.easing, s.duration)),
                        s.begin && !g.isFunction(s.begin) && (s.begin = null),
                        s.progress && !g.isFunction(s.progress) && (s.progress = null),
                        s.complete && !g.isFunction(s.complete) && (s.complete = null),
                        s.display !== a && null !== s.display && ((s.display = s.display.toString().toLowerCase()), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))),
                        s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()),
                        (s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread),
                        s.queue === !1
                            ? s.delay
                                ? setTimeout(e, s.delay)
                                : e()
                            : $.queue(o, s.queue, function (t, r) {
                                  return r === !0 ? (k.promise && k.resolver(h), !0) : ((v.velocityQueueEntryFlag = !0), void e(t));
                              }),
                        ("" !== s.queue && "fx" !== s.queue) || "inprogress" === $.queue(o)[0] || $.dequeue(o);
                }
                var l = arguments[0] && (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || g.isString(arguments[0].properties)),
                    f,
                    d,
                    m,
                    h,
                    b,
                    P;
                if ((g.isWrapped(this) ? ((f = !1), (m = 0), (h = this), (d = this)) : ((f = !0), (m = 1), (h = l ? arguments[0].elements : arguments[0])), (h = o(h)))) {
                    l ? ((b = arguments[0].properties), (P = arguments[0].options)) : ((b = arguments[m]), (P = arguments[m + 1]));
                    var w = h.length,
                        V = 0;
                    if ("stop" !== b && !$.isPlainObject(P)) {
                        var C = m + 1;
                        P = {};
                        for (var T = C; T < arguments.length; T++)
                            g.isArray(arguments[T]) || (!/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]))
                                ? g.isString(arguments[T]) || g.isArray(arguments[T])
                                    ? (P.easing = arguments[T])
                                    : g.isFunction(arguments[T]) && (P.complete = arguments[T])
                                : (P.duration = arguments[T]);
                    }
                    var k = { promise: null, resolver: null, rejecter: null };
                    f &&
                        v.Promise &&
                        (k.promise = new v.Promise(function (e, t) {
                            (k.resolver = e), (k.rejecter = t);
                        }));
                    var A;
                    switch (b) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "stop":
                            $.each(h, function (e, t) {
                                i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
                            });
                            var F = [];
                            return (
                                $.each(v.State.calls, function (e, t) {
                                    t &&
                                        $.each(t[1], function (r, n) {
                                            var o = g.isString(P) ? P : "";
                                            return P !== a && t[2].queue !== o
                                                ? !0
                                                : void $.each(h, function (t, r) {
                                                      r === n &&
                                                          (P !== a &&
                                                              ($.each($.queue(r, o), function (e, t) {
                                                                  g.isFunction(t) && t(null, !0);
                                                              }),
                                                              $.queue(r, o, [])),
                                                          i(r) &&
                                                              "" === o &&
                                                              $.each(i(r).tweensContainer, function (e, t) {
                                                                  t.endValue = t.currentValue;
                                                              }),
                                                          F.push(e));
                                                  });
                                        });
                                }),
                                $.each(F, function (e, t) {
                                    p(t, !0);
                                }),
                                k.promise && k.resolver(h),
                                e()
                            );
                        default:
                            if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                                if (g.isString(b) && v.Redirects[b]) {
                                    var E = $.extend({}, P),
                                        j = E.duration,
                                        H = E.delay || 0;
                                    return (
                                        E.backwards === !0 && (h = $.extend(!0, [], h).reverse()),
                                        $.each(h, function (e, t) {
                                            parseFloat(E.stagger) ? (E.delay = H + parseFloat(E.stagger) * e) : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)),
                                                E.drag && ((E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y)), (E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), 0.75 * E.duration, 200))),
                                                v.Redirects[b].call(t, t, E || {}, e, w, h, k.promise ? k : a);
                                        }),
                                        e()
                                    );
                                }
                                var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
                            }
                            A = "start";
                    }
                    var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                        R = [];
                    $.each(h, function (e, t) {
                        g.isNode(t) && s.call(t);
                    });
                    var E = $.extend({}, v.defaults, P),
                        O;
                    if (((E.loop = parseInt(E.loop)), (O = 2 * E.loop - 1), E.loop))
                        for (var z = 0; O > z; z++) {
                            var q = { delay: E.delay, progress: E.progress };
                            z === O - 1 && ((q.display = E.display), (q.visibility = E.visibility), (q.complete = E.complete)), S(h, "reverse", q);
                        }
                    return e();
                }
            };
            (v = $.extend(S, v)), (v.animate = S);
            var P = t.requestAnimationFrame || d;
            return (
                v.State.isMobile ||
                    r.hidden === a ||
                    r.addEventListener("visibilitychange", function () {
                        r.hidden
                            ? ((P = function (e) {
                                  return setTimeout(function () {
                                      e(!0);
                                  }, 16);
                              }),
                              c())
                            : (P = t.requestAnimationFrame || d);
                    }),
                (e.Velocity = v),
                e !== t && ((e.fn.velocity = S), (e.fn.velocity.defaults = v.defaults)),
                $.each(["Down", "Up"], function (e, t) {
                    v.Redirects["slide" + t] = function (e, r, n, o, i, s) {
                        var l = $.extend({}, r),
                            u = l.begin,
                            c = l.complete,
                            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                            f = {};
                        l.display === a && (l.display = "Down" === t ? ("inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block") : "none"),
                            (l.begin = function () {
                                u && u.call(i, i);
                                for (var r in p) {
                                    f[r] = e.style[r];
                                    var a = v.CSS.getPropertyValue(e, r);
                                    p[r] = "Down" === t ? [a, 0] : [0, a];
                                }
                                (f.overflow = e.style.overflow), (e.style.overflow = "hidden");
                            }),
                            (l.complete = function () {
                                for (var t in f) e.style[t] = f[t];
                                c && c.call(i, i), s && s.resolver(i);
                            }),
                            v(e, p, l);
                    };
                }),
                $.each(["In", "Out"], function (e, t) {
                    v.Redirects["fade" + t] = function (e, r, n, o, i, s) {
                        var l = $.extend({}, r),
                            u = { opacity: "In" === t ? 1 : 0 },
                            c = l.complete;
                        (l.complete =
                            n !== o - 1
                                ? (l.begin = null)
                                : function () {
                                      c && c.call(i, i), s && s.resolver(i);
                                  }),
                            l.display === a && (l.display = "In" === t ? "auto" : "none"),
                            v(this, u, l);
                    };
                }),
                v
            );
        })(window.jQuery || window.Zepto || window, window, document);
    });

/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
    function c(b, c) {
        var e = b.nodeName.toLowerCase();
        if ("area" === e) {
            var f = b.parentNode,
                g = f.name,
                h;
            return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : ((h = a("img[usemap=#" + g + "]")[0]), !!h && d(h));
        }
        return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b);
    }
    function d(b) {
        return !a(b)
            .parents()
            .andSelf()
            .filter(function () {
                return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this);
            }).length;
    }
    a.ui = a.ui || {};
    if (a.ui.version) return;
    a.extend(a.ui, {
        version: "1.8.22",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
        },
    }),
        a.fn.extend({
            propAttr: a.fn.prop || a.fn.attr,
            _focus: a.fn.focus,
            focus: function (b, c) {
                return typeof b == "number"
                    ? this.each(function () {
                          var d = this;
                          setTimeout(function () {
                              a(d).focus(), c && c.call(d);
                          }, b);
                      })
                    : this._focus.apply(this, arguments);
            },
            scrollParent: function () {
                var b;
                return (
                    (a.browser.msie && /(static|relative)/.test(this.css("position"))) || /absolute/.test(this.css("position"))
                        ? (b = this.parents()
                              .filter(function () {
                                  return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
                              })
                              .eq(0))
                        : (b = this.parents()
                              .filter(function () {
                                  return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
                              })
                              .eq(0)),
                    /fixed/.test(this.css("position")) || !b.length ? a(document) : b
                );
            },
            zIndex: function (c) {
                if (c !== b) return this.css("zIndex", c);
                if (this.length) {
                    var d = a(this[0]),
                        e,
                        f;
                    while (d.length && d[0] !== document) {
                        e = d.css("position");
                        if (e === "absolute" || e === "relative" || e === "fixed") {
                            f = parseInt(d.css("zIndex"), 10);
                            if (!isNaN(f) && f !== 0) return f;
                        }
                        d = d.parent();
                    }
                }
                return 0;
            },
            disableSelection: function () {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault();
                });
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection");
            },
        }),
        a("<a>").outerWidth(1).jquery ||
            a.each(["Width", "Height"], function (c, d) {
                function h(b, c, d, f) {
                    return (
                        a.each(e, function () {
                            (c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0), d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0);
                        }),
                        c
                    );
                }
                var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                    f = d.toLowerCase(),
                    g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight };
                (a.fn["inner" + d] = function (c) {
                    return c === b
                        ? g["inner" + d].call(this)
                        : this.each(function () {
                              a(this).css(f, h(this, c) + "px");
                          });
                }),
                    (a.fn["outer" + d] = function (b, c) {
                        return typeof b != "number"
                            ? g["outer" + d].call(this, b)
                            : this.each(function () {
                                  a(this).css(f, h(this, b, !0, c) + "px");
                              });
                    });
            }),
        a.extend(a.expr[":"], {
            data: a.expr.createPseudo
                ? a.expr.createPseudo(function (b) {
                      return function (c) {
                          return !!a.data(c, b);
                      };
                  })
                : function (b, c, d) {
                      return !!a.data(b, d[3]);
                  },
            focusable: function (b) {
                return c(b, !isNaN(a.attr(b, "tabindex")));
            },
            tabbable: function (b) {
                var d = a.attr(b, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && c(b, !e);
            },
        }),
        a(function () {
            var b = document.body,
                c = b.appendChild((c = document.createElement("div")));
            c.offsetHeight,
                a.extend(c.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }),
                (a.support.minHeight = c.offsetHeight === 100),
                (a.support.selectstart = "onselectstart" in c),
                (b.removeChild(c).style.display = "none");
        }),
        a.curCSS || (a.curCSS = a.css),
        a.extend(a.ui, {
            plugin: {
                add: function (b, c, d) {
                    var e = a.ui[b].prototype;
                    for (var f in d) (e.plugins[f] = e.plugins[f] || []), e.plugins[f].push([c, d[f]]);
                },
                call: function (a, b, c) {
                    var d = a.plugins[b];
                    if (!d || !a.element[0].parentNode) return;
                    for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c);
                },
            },
            contains: function (a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b);
            },
            hasScroll: function (b, c) {
                if (a(b).css("overflow") === "hidden") return !1;
                var d = c && c === "left" ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 ? !0 : ((b[d] = 1), (e = b[d] > 0), (b[d] = 0), e);
            },
            isOverAxis: function (a, b, c) {
                return a > b && a < b + c;
            },
            isOver: function (b, c, d, e, f, g) {
                return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g);
            },
        });
})(jQuery),
    (function (a, b) {
        if (a.cleanData) {
            var c = a.cleanData;
            a.cleanData = function (b) {
                for (var d = 0, e; (e = b[d]) != null; d++)
                    try {
                        a(e).triggerHandler("remove");
                    } catch (f) {}
                c(b);
            };
        } else {
            var d = a.fn.remove;
            a.fn.remove = function (b, c) {
                return this.each(function () {
                    return (
                        c ||
                            ((!b || a.filter(b, [this]).length) &&
                                a("*", this)
                                    .add([this])
                                    .each(function () {
                                        try {
                                            a(this).triggerHandler("remove");
                                        } catch (b) {}
                                    })),
                        d.call(a(this), b, c)
                    );
                });
            };
        }
        (a.widget = function (b, c, d) {
            var e = b.split(".")[0],
                f;
            (b = b.split(".")[1]),
                (f = e + "-" + b),
                d || ((d = c), (c = a.Widget)),
                (a.expr[":"][f] = function (c) {
                    return !!a.data(c, b);
                }),
                (a[e] = a[e] || {}),
                (a[e][b] = function (a, b) {
                    arguments.length && this._createWidget(a, b);
                });
            var g = new c();
            (g.options = a.extend(!0, {}, g.options)), (a[e][b].prototype = a.extend(!0, g, { namespace: e, widgetName: b, widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass: f }, d)), a.widget.bridge(b, a[e][b]);
        }),
            (a.widget.bridge = function (c, d) {
                a.fn[c] = function (e) {
                    var f = typeof e == "string",
                        g = Array.prototype.slice.call(arguments, 1),
                        h = this;
                    return (
                        (e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e),
                        f && e.charAt(0) === "_"
                            ? h
                            : (f
                                  ? this.each(function () {
                                        var d = a.data(this, c),
                                            f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                                        if (f !== d && f !== b) return (h = f), !1;
                                    })
                                  : this.each(function () {
                                        var b = a.data(this, c);
                                        b ? b.option(e || {})._init() : a.data(this, c, new d(e, this));
                                    }),
                              h)
                    );
                };
            }),
            (a.Widget = function (a, b) {
                arguments.length && this._createWidget(a, b);
            }),
            (a.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                options: { disabled: !1 },
                _createWidget: function (b, c) {
                    a.data(c, this.widgetName, this), (this.element = a(c)), (this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b));
                    var d = this;
                    this.element.bind("remove." + this.widgetName, function () {
                        d.destroy();
                    }),
                        this._create(),
                        this._trigger("create"),
                        this._init();
                },
                _getCreateOptions: function () {
                    return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
                },
                _create: function () {},
                _init: function () {},
                destroy: function () {
                    this.element.unbind("." + this.widgetName).removeData(this.widgetName),
                        this.widget()
                            .unbind("." + this.widgetName)
                            .removeAttr("aria-disabled")
                            .removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled");
                },
                widget: function () {
                    return this.element;
                },
                option: function (c, d) {
                    var e = c;
                    if (arguments.length === 0) return a.extend({}, this.options);
                    if (typeof c == "string") {
                        if (d === b) return this.options[c];
                        (e = {}), (e[c] = d);
                    }
                    return this._setOptions(e), this;
                },
                _setOptions: function (b) {
                    var c = this;
                    return (
                        a.each(b, function (a, b) {
                            c._setOption(a, b);
                        }),
                        this
                    );
                },
                _setOption: function (a, b) {
                    return (
                        (this.options[a] = b),
                        a === "disabled" &&
                            this.widget()
                                [b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled")
                                .attr("aria-disabled", b),
                        this
                    );
                },
                enable: function () {
                    return this._setOption("disabled", !1);
                },
                disable: function () {
                    return this._setOption("disabled", !0);
                },
                _trigger: function (b, c, d) {
                    var e,
                        f,
                        g = this.options[b];
                    (d = d || {}), (c = a.Event(c)), (c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase()), (c.target = this.element[0]), (f = c.originalEvent);
                    if (f) for (e in f) e in c || (c[e] = f[e]);
                    return this.element.trigger(c, d), !((a.isFunction(g) && g.call(this.element[0], c, d) === !1) || c.isDefaultPrevented());
                },
            });
    })(jQuery),
    (function (a, b) {
        var c = !1;
        a(document).mouseup(function (a) {
            c = !1;
        }),
            a.widget("ui.mouse", {
                options: { cancel: ":input,option", distance: 1, delay: 0 },
                _mouseInit: function () {
                    var b = this;
                    this.element
                        .bind("mousedown." + this.widgetName, function (a) {
                            return b._mouseDown(a);
                        })
                        .bind("click." + this.widgetName, function (c) {
                            if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1;
                        }),
                        (this.started = !1);
                },
                _mouseDestroy: function () {
                    this.element.unbind("." + this.widgetName),
                        a(document)
                            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function (b) {
                    if (c) return;
                    this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
                    var d = this,
                        e = b.which == 1,
                        f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    if (!e || f || !this._mouseCapture(b)) return !0;
                    (this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                            (this._mouseDelayTimer = setTimeout(function () {
                                d.mouseDelayMet = !0;
                            }, this.options.delay));
                    if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
                        this._mouseStarted = this._mouseStart(b) !== !1;
                        if (!this._mouseStarted) return b.preventDefault(), !0;
                    }
                    return (
                        !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"),
                        (this._mouseMoveDelegate = function (a) {
                            return d._mouseMove(a);
                        }),
                        (this._mouseUpDelegate = function (a) {
                            return d._mouseUp(a);
                        }),
                        a(document)
                            .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                            .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        b.preventDefault(),
                        (c = !0),
                        !0
                    );
                },
                _mouseMove: function (b) {
                    return !a.browser.msie || document.documentMode >= 9 || !!b.button
                        ? this._mouseStarted
                            ? (this._mouseDrag(b), b.preventDefault())
                            : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)),
                              !this._mouseStarted)
                        : this._mouseUp(b);
                },
                _mouseUp: function (b) {
                    return (
                        a(document)
                            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && ((this._mouseStarted = !1), b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
                        !1
                    );
                },
                _mouseDistanceMet: function (a) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function (a) {
                    return this.mouseDelayMet;
                },
                _mouseStart: function (a) {},
                _mouseDrag: function (a) {},
                _mouseStop: function (a) {},
                _mouseCapture: function (a) {
                    return !0;
                },
            });
    })(jQuery),
    (function (a, b) {
        a.widget("ui.draggable", a.ui.mouse, {
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
            },
            _create: function () {
                this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
                    this.options.addClasses && this.element.addClass("ui-draggable"),
                    this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                    this._mouseInit();
            },
            destroy: function () {
                if (!this.element.data("draggable")) return;
                return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this;
            },
            _mouseCapture: function (b) {
                var c = this.options;
                return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle")
                    ? !1
                    : ((this.handle = this._getHandle(b)),
                      this.handle
                          ? (c.iframeFix &&
                                a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                                    a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>')
                                        .css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 })
                                        .css(a(this).offset())
                                        .appendTo("body");
                                }),
                            !0)
                          : !1);
            },
            _mouseStart: function (b) {
                var c = this.options;
                return (
                    (this.helper = this._createHelper(b)),
                    this.helper.addClass("ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    a.ui.ddmanager && (a.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    (this.cssPosition = this.helper.css("position")),
                    (this.scrollParent = this.helper.scrollParent()),
                    (this.offset = this.positionAbs = this.element.offset()),
                    (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
                    a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                    (this.originalPosition = this.position = this._generatePosition(b)),
                    (this.originalPageX = b.pageX),
                    (this.originalPageY = b.pageY),
                    c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
                    c.containment && this._setContainment(),
                    this._trigger("start", b) === !1
                        ? (this._clear(), !1)
                        : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
                );
            },
            _mouseDrag: function (b, c) {
                (this.position = this._generatePosition(b)), (this.positionAbs = this._convertPositionTo("absolute"));
                if (!c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                    this.position = d.position;
                }
                if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
                return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
            },
            _mouseStop: function (b) {
                var c = !1;
                a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && ((c = this.dropped), (this.dropped = !1));
                var d = this.element[0],
                    e = !1;
                while (d && (d = d.parentNode)) d == document && (e = !0);
                if (!e && this.options.helper === "original") return !1;
                if ((this.options.revert == "invalid" && !c) || (this.options.revert == "valid" && c) || this.options.revert === !0 || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, c))) {
                    var f = this;
                    a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                        f._trigger("stop", b) !== !1 && f._clear();
                    });
                } else this._trigger("stop", b) !== !1 && this._clear();
                return !1;
            },
            _mouseUp: function (b) {
                return (
                    this.options.iframeFix === !0 &&
                        a("div.ui-draggable-iframeFix").each(function () {
                            this.parentNode.removeChild(this);
                        }),
                    a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
                    a.ui.mouse.prototype._mouseUp.call(this, b)
                );
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
            },
            _getHandle: function (b) {
                var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
                return (
                    a(this.options.handle, this.element)
                        .find("*")
                        .andSelf()
                        .each(function () {
                            this == b.target && (c = !0);
                        }),
                    c
                );
            },
            _createHelper: function (b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
                return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d;
            },
            _adjustOffsetFromHelper: function (b) {
                typeof b == "string" && (b = b.split(" ")),
                    a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
                    "left" in b && (this.offset.click.left = b.left + this.margins.left),
                    "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
                    "top" in b && (this.offset.click.top = b.top + this.margins.top),
                    "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && ((b.left += this.scrollParent.scrollLeft()), (b.top += this.scrollParent.scrollTop()));
                if (this.offsetParent[0] == document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) b = { top: 0, left: 0 };
                return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
            },
            _getRelativeOffset: function () {
                if (this.cssPosition == "relative") {
                    var a = this.element.position();
                    return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
                }
                return { top: 0, left: 0 };
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
            },
            _setContainment: function () {
                var b = this.options;
                b.containment == "parent" && (b.containment = this.helper[0].parentNode);
                if (b.containment == "document" || b.containment == "window")
                    this.containment = [
                        b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                        b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                        (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
                        (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                    ];
                if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
                    var c = a(b.containment),
                        d = c[0];
                    if (!d) return;
                    var e = c.offset(),
                        f = a(d).css("overflow") != "hidden";
                    (this.containment = [
                        (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0),
                        (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0),
                        (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
                            (parseInt(a(d).css("borderLeftWidth"), 10) || 0) -
                            (parseInt(a(d).css("paddingRight"), 10) || 0) -
                            this.helperProportions.width -
                            this.margins.left -
                            this.margins.right,
                        (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
                            (parseInt(a(d).css("borderTopWidth"), 10) || 0) -
                            (parseInt(a(d).css("paddingBottom"), 10) || 0) -
                            this.helperProportions.height -
                            this.margins.top -
                            this.margins.bottom,
                    ]),
                        (this.relative_container = c);
                } else b.containment.constructor == Array && (this.containment = b.containment);
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = b == "absolute" ? 1 : -1,
                    e = this.options,
                    f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    g = /(html|body)/i.test(f[0].tagName);
                return {
                    top:
                        c.top +
                        this.offset.relative.top * d +
                        this.offset.parent.top * d -
                        (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
                    left:
                        c.left +
                        this.offset.relative.left * d +
                        this.offset.parent.left * d -
                        (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d),
                };
            },
            _generatePosition: function (b) {
                var c = this.options,
                    d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    e = /(html|body)/i.test(d[0].tagName),
                    f = b.pageX,
                    g = b.pageY;
                if (this.originalPosition) {
                    var h;
                    if (this.containment) {
                        if (this.relative_container) {
                            var i = this.relative_container.offset();
                            h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top];
                        } else h = this.containment;
                        b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left),
                            b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top),
                            b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left),
                            b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top);
                    }
                    if (c.grid) {
                        var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
                        g = h ? (j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? (j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1]) : j) : j;
                        var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
                        f = h ? (k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? (k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0]) : k) : k;
                    }
                }
                return {
                    top:
                        g -
                        this.offset.click.top -
                        this.offset.relative.top -
                        this.offset.parent.top +
                        (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                    left:
                        f -
                        this.offset.click.left -
                        this.offset.relative.left -
                        this.offset.parent.left +
                        (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()),
                };
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), (this.helper = null), (this.cancelHelperRemoval = !1);
            },
            _trigger: function (b, c, d) {
                return (d = d || this._uiHash()), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d);
            },
            plugins: {},
            _uiHash: function (a) {
                return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
            },
        }),
            a.extend(a.ui.draggable, { version: "1.8.22" }),
            a.ui.plugin.add("draggable", "connectToSortable", {
                start: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = d.options,
                        f = a.extend({}, c, { item: d.element });
                    (d.sortables = []),
                        a(e.connectToSortable).each(function () {
                            var c = a.data(this, "sortable");
                            c && !c.options.disabled && (d.sortables.push({ instance: c, shouldRevert: c.options.revert }), c.refreshPositions(), c._trigger("activate", b, f));
                        });
                },
                stop: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = a.extend({}, c, { item: d.element });
                    a.each(d.sortables, function () {
                        this.instance.isOver
                            ? ((this.instance.isOver = 0),
                              (d.cancelHelperRemoval = !0),
                              (this.instance.cancelHelperRemoval = !1),
                              this.shouldRevert && (this.instance.options.revert = !0),
                              this.instance._mouseStop(b),
                              (this.instance.options.helper = this.instance.options._helper),
                              d.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" }))
                            : ((this.instance.cancelHelperRemoval = !1), this.instance._trigger("deactivate", b, e));
                    });
                },
                drag: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = this,
                        f = function (b) {
                            var c = this.offset.click.top,
                                d = this.offset.click.left,
                                e = this.positionAbs.top,
                                f = this.positionAbs.left,
                                g = b.height,
                                h = b.width,
                                i = b.top,
                                j = b.left;
                            return a.ui.isOver(e + c, f + d, i, j, g, h);
                        };
                    a.each(d.sortables, function (f) {
                        (this.instance.positionAbs = d.positionAbs),
                            (this.instance.helperProportions = d.helperProportions),
                            (this.instance.offset.click = d.offset.click),
                            this.instance._intersectsWith(this.instance.containerCache)
                                ? (this.instance.isOver ||
                                      ((this.instance.isOver = 1),
                                      (this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0)),
                                      (this.instance.options._helper = this.instance.options.helper),
                                      (this.instance.options.helper = function () {
                                          return c.helper[0];
                                      }),
                                      (b.target = this.instance.currentItem[0]),
                                      this.instance._mouseCapture(b, !0),
                                      this.instance._mouseStart(b, !0, !0),
                                      (this.instance.offset.click.top = d.offset.click.top),
                                      (this.instance.offset.click.left = d.offset.click.left),
                                      (this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left),
                                      (this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top),
                                      d._trigger("toSortable", b),
                                      (d.dropped = this.instance.element),
                                      (d.currentItem = d.element),
                                      (this.instance.fromOutside = d)),
                                  this.instance.currentItem && this.instance._mouseDrag(b))
                                : this.instance.isOver &&
                                  ((this.instance.isOver = 0),
                                  (this.instance.cancelHelperRemoval = !0),
                                  (this.instance.options.revert = !1),
                                  this.instance._trigger("out", b, this.instance._uiHash(this.instance)),
                                  this.instance._mouseStop(b, !0),
                                  (this.instance.options.helper = this.instance.options._helper),
                                  this.instance.currentItem.remove(),
                                  this.instance.placeholder && this.instance.placeholder.remove(),
                                  d._trigger("fromSortable", b),
                                  (d.dropped = !1));
                    });
                },
            }),
            a.ui.plugin.add("draggable", "cursor", {
                start: function (b, c) {
                    var d = a("body"),
                        e = a(this).data("draggable").options;
                    d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor);
                },
                stop: function (b, c) {
                    var d = a(this).data("draggable").options;
                    d._cursor && a("body").css("cursor", d._cursor);
                },
            }),
            a.ui.plugin.add("draggable", "opacity", {
                start: function (b, c) {
                    var d = a(c.helper),
                        e = a(this).data("draggable").options;
                    d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity);
                },
                stop: function (b, c) {
                    var d = a(this).data("draggable").options;
                    d._opacity && a(c.helper).css("opacity", d._opacity);
                },
            }),
            a.ui.plugin.add("draggable", "scroll", {
                start: function (b, c) {
                    var d = a(this).data("draggable");
                    d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset());
                },
                drag: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = d.options,
                        f = !1;
                    if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
                        if (!e.axis || e.axis != "x")
                            d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity
                                ? (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed)
                                : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed);
                        if (!e.axis || e.axis != "y")
                            d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity
                                ? (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed)
                                : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed);
                    } else {
                        if (!e.axis || e.axis != "x")
                            b.pageY - a(document).scrollTop() < e.scrollSensitivity
                                ? (f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed))
                                : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed));
                        if (!e.axis || e.axis != "y")
                            b.pageX - a(document).scrollLeft() < e.scrollSensitivity
                                ? (f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed))
                                : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed));
                    }
                    f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
                },
            }),
            a.ui.plugin.add("draggable", "snap", {
                start: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = d.options;
                    (d.snapElements = []),
                        a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function () {
                            var b = a(this),
                                c = b.offset();
                            this != d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left });
                        });
                },
                drag: function (b, c) {
                    var d = a(this).data("draggable"),
                        e = d.options,
                        f = e.snapTolerance,
                        g = c.offset.left,
                        h = g + d.helperProportions.width,
                        i = c.offset.top,
                        j = i + d.helperProportions.height;
                    for (var k = d.snapElements.length - 1; k >= 0; k--) {
                        var l = d.snapElements[k].left,
                            m = l + d.snapElements[k].width,
                            n = d.snapElements[k].top,
                            o = n + d.snapElements[k].height;
                        if (
                            !(
                                (l - f < g && g < m + f && n - f < i && i < o + f) ||
                                (l - f < g && g < m + f && n - f < j && j < o + f) ||
                                (l - f < h && h < m + f && n - f < i && i < o + f) ||
                                (l - f < h && h < m + f && n - f < j && j < o + f)
                            )
                        ) {
                            d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })), (d.snapElements[k].snapping = !1);
                            continue;
                        }
                        if (e.snapMode != "inner") {
                            var p = Math.abs(n - j) <= f,
                                q = Math.abs(o - i) <= f,
                                r = Math.abs(l - h) <= f,
                                s = Math.abs(m - g) <= f;
                            p && (c.position.top = d._convertPositionTo("relative", { top: n - d.helperProportions.height, left: 0 }).top - d.margins.top),
                                q && (c.position.top = d._convertPositionTo("relative", { top: o, left: 0 }).top - d.margins.top),
                                r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l - d.helperProportions.width }).left - d.margins.left),
                                s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m }).left - d.margins.left);
                        }
                        var t = p || q || r || s;
                        if (e.snapMode != "outer") {
                            var p = Math.abs(n - i) <= f,
                                q = Math.abs(o - j) <= f,
                                r = Math.abs(l - g) <= f,
                                s = Math.abs(m - h) <= f;
                            p && (c.position.top = d._convertPositionTo("relative", { top: n, left: 0 }).top - d.margins.top),
                                q && (c.position.top = d._convertPositionTo("relative", { top: o - d.helperProportions.height, left: 0 }).top - d.margins.top),
                                r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l }).left - d.margins.left),
                                s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m - d.helperProportions.width }).left - d.margins.left);
                        }
                        !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })),
                            (d.snapElements[k].snapping = p || q || r || s || t);
                    }
                },
            }),
            a.ui.plugin.add("draggable", "stack", {
                start: function (b, c) {
                    var d = a(this).data("draggable").options,
                        e = a.makeArray(a(d.stack)).sort(function (b, c) {
                            return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
                        });
                    if (!e.length) return;
                    var f = parseInt(e[0].style.zIndex) || 0;
                    a(e).each(function (a) {
                        this.style.zIndex = f + a;
                    }),
                        (this[0].style.zIndex = f + e.length);
                },
            }),
            a.ui.plugin.add("draggable", "zIndex", {
                start: function (b, c) {
                    var d = a(c.helper),
                        e = a(this).data("draggable").options;
                    d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex);
                },
                stop: function (b, c) {
                    var d = a(this).data("draggable").options;
                    d._zIndex && a(c.helper).css("zIndex", d._zIndex);
                },
            });
    })(jQuery),
    (function (a, b) {
        a.widget("ui.droppable", {
            widgetEventPrefix: "drop",
            options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect" },
            _create: function () {
                var b = this.options,
                    c = b.accept;
                (this.isover = 0),
                    (this.isout = 1),
                    (this.accept = a.isFunction(c)
                        ? c
                        : function (a) {
                              return a.is(c);
                          }),
                    (this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }),
                    (a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || []),
                    a.ui.ddmanager.droppables[b.scope].push(this),
                    b.addClasses && this.element.addClass("ui-droppable");
            },
            destroy: function () {
                var b = a.ui.ddmanager.droppables[this.options.scope];
                for (var c = 0; c < b.length; c++) b[c] == this && b.splice(c, 1);
                return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this;
            },
            _setOption: function (b, c) {
                b == "accept" &&
                    (this.accept = a.isFunction(c)
                        ? c
                        : function (a) {
                              return a.is(c);
                          }),
                    a.Widget.prototype._setOption.apply(this, arguments);
            },
            _activate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
            },
            _deactivate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c));
            },
            _over: function (b) {
                var c = a.ui.ddmanager.current;
                if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
                this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)));
            },
            _out: function (b) {
                var c = a.ui.ddmanager.current;
                if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
                this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)));
            },
            _drop: function (b, c) {
                var d = c || a.ui.ddmanager.current;
                if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1;
                var e = !1;
                return (
                    this.element
                        .find(":data(droppable)")
                        .not(".ui-draggable-dragging")
                        .each(function () {
                            var b = a.data(this, "droppable");
                            if (
                                b.options.greedy &&
                                !b.options.disabled &&
                                b.options.scope == d.options.scope &&
                                b.accept.call(b.element[0], d.currentItem || d.element) &&
                                a.ui.intersect(d, a.extend(b, { offset: b.element.offset() }), b.options.tolerance)
                            )
                                return (e = !0), !1;
                        }),
                    e
                        ? !1
                        : this.accept.call(this.element[0], d.currentItem || d.element)
                        ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element)
                        : !1
                );
            },
            ui: function (a) {
                return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs };
            },
        }),
            a.extend(a.ui.droppable, { version: "1.8.22" }),
            (a.ui.intersect = function (b, c, d) {
                if (!c.offset) return !1;
                var e = (b.positionAbs || b.position.absolute).left,
                    f = e + b.helperProportions.width,
                    g = (b.positionAbs || b.position.absolute).top,
                    h = g + b.helperProportions.height,
                    i = c.offset.left,
                    j = i + c.proportions.width,
                    k = c.offset.top,
                    l = k + c.proportions.height;
                switch (d) {
                    case "fit":
                        return i <= e && f <= j && k <= g && h <= l;
                    case "intersect":
                        return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
                    case "pointer":
                        var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left,
                            n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top,
                            o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
                        return o;
                    case "touch":
                        return ((g >= k && g <= l) || (h >= k && h <= l) || (g < k && h > l)) && ((e >= i && e <= j) || (f >= i && f <= j) || (e < i && f > j));
                    default:
                        return !1;
                }
            }),
            (a.ui.ddmanager = {
                current: null,
                droppables: { default: [] },
                prepareOffsets: function (b, c) {
                    var d = a.ui.ddmanager.droppables[b.options.scope] || [],
                        e = c ? c.type : null,
                        f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
                    g: for (var h = 0; h < d.length; h++) {
                        if (d[h].options.disabled || (b && !d[h].accept.call(d[h].element[0], b.currentItem || b.element))) continue;
                        for (var i = 0; i < f.length; i++)
                            if (f[i] == d[h].element[0]) {
                                d[h].proportions.height = 0;
                                continue g;
                            }
                        d[h].visible = d[h].element.css("display") != "none";
                        if (!d[h].visible) continue;
                        e == "mousedown" && d[h]._activate.call(d[h], c), (d[h].offset = d[h].element.offset()), (d[h].proportions = { width: d[h].element[0].offsetWidth, height: d[h].element[0].offsetHeight });
                    }
                },
                drop: function (b, c) {
                    var d = !1;
                    return (
                        a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                            if (!this.options) return;
                            !this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d),
                                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && ((this.isout = 1), (this.isover = 0), this._deactivate.call(this, c));
                        }),
                        d
                    );
                },
                dragStart: function (b, c) {
                    b.element.parents(":not(body,html)").bind("scroll.droppable", function () {
                        b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
                    });
                },
                drag: function (b, c) {
                    b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c),
                        a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                            if (this.options.disabled || this.greedyChild || !this.visible) return;
                            var d = a.ui.intersect(b, this, this.options.tolerance),
                                e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null;
                            if (!e) return;
                            var f;
                            if (this.options.greedy) {
                                var g = this.element.parents(":data(droppable):eq(0)");
                                g.length && ((f = a.data(g[0], "droppable")), (f.greedyChild = e == "isover" ? 1 : 0));
                            }
                            f && e == "isover" && ((f.isover = 0), (f.isout = 1), f._out.call(f, c)),
                                (this[e] = 1),
                                (this[e == "isout" ? "isover" : "isout"] = 0),
                                this[e == "isover" ? "_over" : "_out"].call(this, c),
                                f && e == "isout" && ((f.isout = 0), (f.isover = 1), f._over.call(f, c));
                        });
                },
                dragStop: function (b, c) {
                    b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
                },
            });
    })(jQuery),
    (function (a, b) {
        a.widget("ui.resizable", a.ui.mouse, {
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 1e3,
            },
            _create: function () {
                var b = this,
                    c = this.options;
                this.element.addClass("ui-resizable"),
                    a.extend(this, {
                        _aspectRatio: !!c.aspectRatio,
                        aspectRatio: c.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null,
                    }),
                    this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) &&
                        (this.element.wrap(
                            a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                                position: this.element.css("position"),
                                width: this.element.outerWidth(),
                                height: this.element.outerHeight(),
                                top: this.element.css("top"),
                                left: this.element.css("left"),
                            })
                        ),
                        (this.element = this.element.parent().data("resizable", this.element.data("resizable"))),
                        (this.elementIsWrapper = !0),
                        this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom"),
                        }),
                        this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }),
                        (this.originalResizeStyle = this.originalElement.css("resize")),
                        this.originalElement.css("resize", "none"),
                        this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })),
                        this.originalElement.css({ margin: this.originalElement.css("margin") }),
                        this._proportionallyResize()),
                    (this.handles =
                        c.handles ||
                        (a(".ui-resizable-handle", this.element).length
                            ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" }
                            : "e,s,se"));
                if (this.handles.constructor == String) {
                    this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    var d = this.handles.split(",");
                    this.handles = {};
                    for (var e = 0; e < d.length; e++) {
                        var f = a.trim(d[e]),
                            g = "ui-resizable-" + f,
                            h = a('<div class="ui-resizable-handle ' + g + '"></div>');
                        h.css({ zIndex: c.zIndex }), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), (this.handles[f] = ".ui-resizable-" + f), this.element.append(h);
                    }
                }
                (this._renderAxis = function (b) {
                    b = b || this.element;
                    for (var c in this.handles) {
                        this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show());
                        if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                            var d = a(this.handles[c], this.element),
                                e = 0;
                            e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
                            var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
                            b.css(f, e), this._proportionallyResize();
                        }
                        if (!a(this.handles[c]).length) continue;
                    }
                }),
                    this._renderAxis(this.element),
                    (this._handles = a(".ui-resizable-handle", this.element).disableSelection()),
                    this._handles.mouseover(function () {
                        if (!b.resizing) {
                            if (this.className) var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                            b.axis = a && a[1] ? a[1] : "se";
                        }
                    }),
                    c.autoHide &&
                        (this._handles.hide(),
                        a(this.element)
                            .addClass("ui-resizable-autohide")
                            .hover(
                                function () {
                                    if (c.disabled) return;
                                    a(this).removeClass("ui-resizable-autohide"), b._handles.show();
                                },
                                function () {
                                    if (c.disabled) return;
                                    b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide());
                                }
                            )),
                    this._mouseInit();
            },
            destroy: function () {
                this._mouseDestroy();
                var b = function (b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
                };
                if (this.elementIsWrapper) {
                    b(this.element);
                    var c = this.element;
                    c.after(this.originalElement.css({ position: c.css("position"), width: c.outerWidth(), height: c.outerHeight(), top: c.css("top"), left: c.css("left") })).remove();
                }
                return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this;
            },
            _mouseCapture: function (b) {
                var c = !1;
                for (var d in this.handles) a(this.handles[d])[0] == b.target && (c = !0);
                return !this.options.disabled && c;
            },
            _mouseStart: function (b) {
                var d = this.options,
                    e = this.element.position(),
                    f = this.element;
                (this.resizing = !0),
                    (this.documentScroll = { top: a(document).scrollTop(), left: a(document).scrollLeft() }),
                    (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({ position: "absolute", top: e.top, left: e.left }),
                    this._renderProxy();
                var g = c(this.helper.css("left")),
                    h = c(this.helper.css("top"));
                d.containment && ((g += a(d.containment).scrollLeft() || 0), (h += a(d.containment).scrollTop() || 0)),
                    (this.offset = this.helper.offset()),
                    (this.position = { left: g, top: h }),
                    (this.size = this._helper ? { width: f.outerWidth(), height: f.outerHeight() } : { width: f.width(), height: f.height() }),
                    (this.originalSize = this._helper ? { width: f.outerWidth(), height: f.outerHeight() } : { width: f.width(), height: f.height() }),
                    (this.originalPosition = { left: g, top: h }),
                    (this.sizeDiff = { width: f.outerWidth() - f.width(), height: f.outerHeight() - f.height() }),
                    (this.originalMousePosition = { left: b.pageX, top: b.pageY }),
                    (this.aspectRatio = typeof d.aspectRatio == "number" ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1);
                var i = a(".ui-resizable-" + this.axis).css("cursor");
                return a("body").css("cursor", i == "auto" ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", b), !0;
            },
            _mouseDrag: function (b) {
                var c = this.helper,
                    d = this.options,
                    e = {},
                    f = this,
                    g = this.originalMousePosition,
                    h = this.axis,
                    i = b.pageX - g.left || 0,
                    j = b.pageY - g.top || 0,
                    k = this._change[h];
                if (!k) return !1;
                var l = k.apply(this, [b, i, j]),
                    m = a.browser.msie && a.browser.version < 7,
                    n = this.sizeDiff;
                this._updateVirtualBoundaries(b.shiftKey);
                if (this._aspectRatio || b.shiftKey) l = this._updateRatio(l, b);
                return (
                    (l = this._respectSize(l, b)),
                    this._propagate("resize", b),
                    c.css({ top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px" }),
                    !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                    this._updateCache(l),
                    this._trigger("resize", b, this.ui()),
                    !1
                );
            },
            _mouseStop: function (b) {
                this.resizing = !1;
                var c = this.options,
                    d = this;
                if (this._helper) {
                    var e = this._proportionallyResizeElements,
                        f = e.length && /textarea/i.test(e[0].nodeName),
                        g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height,
                        h = f ? 0 : d.sizeDiff.width,
                        i = { width: d.helper.width() - h, height: d.helper.height() - g },
                        j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
                        k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                    c.animate || this.element.css(a.extend(i, { top: k, left: j })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize();
                }
                return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1;
            },
            _updateVirtualBoundaries: function (a) {
                var b = this.options,
                    c,
                    e,
                    f,
                    g,
                    h;
                h = { minWidth: d(b.minWidth) ? b.minWidth : 0, maxWidth: d(b.maxWidth) ? b.maxWidth : Infinity, minHeight: d(b.minHeight) ? b.minHeight : 0, maxHeight: d(b.maxHeight) ? b.maxHeight : Infinity };
                if (this._aspectRatio || a)
                    (c = h.minHeight * this.aspectRatio),
                        (f = h.minWidth / this.aspectRatio),
                        (e = h.maxHeight * this.aspectRatio),
                        (g = h.maxWidth / this.aspectRatio),
                        c > h.minWidth && (h.minWidth = c),
                        f > h.minHeight && (h.minHeight = f),
                        e < h.maxWidth && (h.maxWidth = e),
                        g < h.maxHeight && (h.maxHeight = g);
                this._vBoundaries = h;
            },
            _updateCache: function (a) {
                var b = this.options;
                (this.offset = this.helper.offset()), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width);
            },
            _updateRatio: function (a, b) {
                var c = this.options,
                    e = this.position,
                    f = this.size,
                    g = this.axis;
                return (
                    d(a.height) ? (a.width = a.height * this.aspectRatio) : d(a.width) && (a.height = a.width / this.aspectRatio),
                    g == "sw" && ((a.left = e.left + (f.width - a.width)), (a.top = null)),
                    g == "nw" && ((a.top = e.top + (f.height - a.height)), (a.left = e.left + (f.width - a.width))),
                    a
                );
            },
            _respectSize: function (a, b) {
                var c = this.helper,
                    e = this._vBoundaries,
                    f = this._aspectRatio || b.shiftKey,
                    g = this.axis,
                    h = d(a.width) && e.maxWidth && e.maxWidth < a.width,
                    i = d(a.height) && e.maxHeight && e.maxHeight < a.height,
                    j = d(a.width) && e.minWidth && e.minWidth > a.width,
                    k = d(a.height) && e.minHeight && e.minHeight > a.height;
                j && (a.width = e.minWidth), k && (a.height = e.minHeight), h && (a.width = e.maxWidth), i && (a.height = e.maxHeight);
                var l = this.originalPosition.left + this.originalSize.width,
                    m = this.position.top + this.size.height,
                    n = /sw|nw|w/.test(g),
                    o = /nw|ne|n/.test(g);
                j && n && (a.left = l - e.minWidth), h && n && (a.left = l - e.maxWidth), k && o && (a.top = m - e.minHeight), i && o && (a.top = m - e.maxHeight);
                var p = !a.width && !a.height;
                return p && !a.left && a.top ? (a.top = null) : p && !a.top && a.left && (a.left = null), a;
            },
            _proportionallyResize: function () {
                var b = this.options;
                if (!this._proportionallyResizeElements.length) return;
                var c = this.helper || this.element;
                for (var d = 0; d < this._proportionallyResizeElements.length; d++) {
                    var e = this._proportionallyResizeElements[d];
                    if (!this.borderDif) {
                        var f = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
                            g = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                        this.borderDif = a.map(f, function (a, b) {
                            var c = parseInt(a, 10) || 0,
                                d = parseInt(g[b], 10) || 0;
                            return c + d;
                        });
                    }
                    if (!a.browser.msie || (!a(c).is(":hidden") && !a(c).parents(":hidden").length)) e.css({ height: c.height() - this.borderDif[0] - this.borderDif[2] || 0, width: c.width() - this.borderDif[1] - this.borderDif[3] || 0 });
                    else continue;
                }
            },
            _renderProxy: function () {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset();
                if (this._helper) {
                    this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
                    var d = a.browser.msie && a.browser.version < 7,
                        e = d ? 1 : 0,
                        f = d ? 2 : -1;
                    this.helper
                        .addClass(this._helper)
                        .css({ width: this.element.outerWidth() + f, height: this.element.outerHeight() + f, position: "absolute", left: this.elementOffset.left - e + "px", top: this.elementOffset.top - e + "px", zIndex: ++c.zIndex }),
                        this.helper.appendTo("body").disableSelection();
                } else this.helper = this.element;
            },
            _change: {
                e: function (a, b, c) {
                    return { width: this.originalSize.width + b };
                },
                w: function (a, b, c) {
                    var d = this.options,
                        e = this.originalSize,
                        f = this.originalPosition;
                    return { left: f.left + b, width: e.width - b };
                },
                n: function (a, b, c) {
                    var d = this.options,
                        e = this.originalSize,
                        f = this.originalPosition;
                    return { top: f.top + c, height: e.height - c };
                },
                s: function (a, b, c) {
                    return { height: this.originalSize.height + c };
                },
                se: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
                },
                sw: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
                },
                ne: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
                },
                nw: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
                },
            },
            _propagate: function (b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), b != "resize" && this._trigger(b, c, this.ui());
            },
            plugins: {},
            ui: function () {
                return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
            },
        }),
            a.extend(a.ui.resizable, { version: "1.8.22" }),
            a.ui.plugin.add("resizable", "alsoResize", {
                start: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = function (b) {
                            a(b).each(function () {
                                var b = a(this);
                                b.data("resizable-alsoresize", { width: parseInt(b.width(), 10), height: parseInt(b.height(), 10), left: parseInt(b.css("left"), 10), top: parseInt(b.css("top"), 10) });
                            });
                        };
                    typeof e.alsoResize == "object" && !e.alsoResize.parentNode
                        ? e.alsoResize.length
                            ? ((e.alsoResize = e.alsoResize[0]), f(e.alsoResize))
                            : a.each(e.alsoResize, function (a) {
                                  f(a);
                              })
                        : f(e.alsoResize);
                },
                resize: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d.originalSize,
                        g = d.originalPosition,
                        h = { height: d.size.height - f.height || 0, width: d.size.width - f.width || 0, top: d.position.top - g.top || 0, left: d.position.left - g.left || 0 },
                        i = function (b, d) {
                            a(b).each(function () {
                                var b = a(this),
                                    e = a(this).data("resizable-alsoresize"),
                                    f = {},
                                    g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                a.each(g, function (a, b) {
                                    var c = (e[b] || 0) + (h[b] || 0);
                                    c && c >= 0 && (f[b] = c || null);
                                }),
                                    b.css(f);
                            });
                        };
                    typeof e.alsoResize == "object" && !e.alsoResize.nodeType
                        ? a.each(e.alsoResize, function (a, b) {
                              i(a, b);
                          })
                        : i(e.alsoResize);
                },
                stop: function (b, c) {
                    a(this).removeData("resizable-alsoresize");
                },
            }),
            a.ui.plugin.add("resizable", "animate", {
                stop: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d._proportionallyResizeElements,
                        g = f.length && /textarea/i.test(f[0].nodeName),
                        h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
                        i = g ? 0 : d.sizeDiff.width,
                        j = { width: d.size.width - i, height: d.size.height - h },
                        k = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
                        l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                    d.element.animate(a.extend(j, l && k ? { top: l, left: k } : {}), {
                        duration: e.animateDuration,
                        easing: e.animateEasing,
                        step: function () {
                            var c = { width: parseInt(d.element.css("width"), 10), height: parseInt(d.element.css("height"), 10), top: parseInt(d.element.css("top"), 10), left: parseInt(d.element.css("left"), 10) };
                            f && f.length && a(f[0]).css({ width: c.width, height: c.height }), d._updateCache(c), d._propagate("resize", b);
                        },
                    });
                },
            }),
            a.ui.plugin.add("resizable", "containment", {
                start: function (b, d) {
                    var e = a(this).data("resizable"),
                        f = e.options,
                        g = e.element,
                        h = f.containment,
                        i = h instanceof a ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h;
                    if (!i) return;
                    e.containerElement = a(i);
                    if (/document/.test(h) || h == document)
                        (e.containerOffset = { left: 0, top: 0 }),
                            (e.containerPosition = { left: 0, top: 0 }),
                            (e.parentData = { element: a(document), left: 0, top: 0, width: a(document).width(), height: a(document).height() || document.body.parentNode.scrollHeight });
                    else {
                        var j = a(i),
                            k = [];
                        a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) {
                            k[a] = c(j.css("padding" + b));
                        }),
                            (e.containerOffset = j.offset()),
                            (e.containerPosition = j.position()),
                            (e.containerSize = { height: j.innerHeight() - k[3], width: j.innerWidth() - k[1] });
                        var l = e.containerOffset,
                            m = e.containerSize.height,
                            n = e.containerSize.width,
                            o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n,
                            p = a.ui.hasScroll(i) ? i.scrollHeight : m;
                        e.parentData = { element: i, left: l.left, top: l.top, width: o, height: p };
                    }
                },
                resize: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d.containerSize,
                        g = d.containerOffset,
                        h = d.size,
                        i = d.position,
                        j = d._aspectRatio || b.shiftKey,
                        k = { top: 0, left: 0 },
                        l = d.containerElement;
                    l[0] != document && /static/.test(l.css("position")) && (k = g),
                        i.left < (d._helper ? g.left : 0) &&
                            ((d.size.width = d.size.width + (d._helper ? d.position.left - g.left : d.position.left - k.left)), j && (d.size.height = d.size.width / d.aspectRatio), (d.position.left = e.helper ? g.left : 0)),
                        i.top < (d._helper ? g.top : 0) &&
                            ((d.size.height = d.size.height + (d._helper ? d.position.top - g.top : d.position.top)), j && (d.size.width = d.size.height * d.aspectRatio), (d.position.top = d._helper ? g.top : 0)),
                        (d.offset.left = d.parentData.left + d.position.left),
                        (d.offset.top = d.parentData.top + d.position.top);
                    var m = Math.abs((d._helper ? d.offset.left - k.left : d.offset.left - k.left) + d.sizeDiff.width),
                        n = Math.abs((d._helper ? d.offset.top - k.top : d.offset.top - g.top) + d.sizeDiff.height),
                        o = d.containerElement.get(0) == d.element.parent().get(0),
                        p = /relative|absolute/.test(d.containerElement.css("position"));
                    o && p && (m -= d.parentData.left),
                        m + d.size.width >= d.parentData.width && ((d.size.width = d.parentData.width - m), j && (d.size.height = d.size.width / d.aspectRatio)),
                        n + d.size.height >= d.parentData.height && ((d.size.height = d.parentData.height - n), j && (d.size.width = d.size.height * d.aspectRatio));
                },
                stop: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d.position,
                        g = d.containerOffset,
                        h = d.containerPosition,
                        i = d.containerElement,
                        j = a(d.helper),
                        k = j.offset(),
                        l = j.outerWidth() - d.sizeDiff.width,
                        m = j.outerHeight() - d.sizeDiff.height;
                    d._helper && !e.animate && /relative/.test(i.css("position")) && a(this).css({ left: k.left - h.left - g.left, width: l, height: m }),
                        d._helper && !e.animate && /static/.test(i.css("position")) && a(this).css({ left: k.left - h.left - g.left, width: l, height: m });
                },
            }),
            a.ui.plugin.add("resizable", "ghost", {
                start: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d.size;
                    (d.ghost = d.originalElement.clone()),
                        d.ghost
                            .css({ opacity: 0.25, display: "block", position: "relative", height: f.height, width: f.width, margin: 0, left: 0, top: 0 })
                            .addClass("ui-resizable-ghost")
                            .addClass(typeof e.ghost == "string" ? e.ghost : ""),
                        d.ghost.appendTo(d.helper);
                },
                resize: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options;
                    d.ghost && d.ghost.css({ position: "relative", height: d.size.height, width: d.size.width });
                },
                stop: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options;
                    d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0));
                },
            }),
            a.ui.plugin.add("resizable", "grid", {
                resize: function (b, c) {
                    var d = a(this).data("resizable"),
                        e = d.options,
                        f = d.size,
                        g = d.originalSize,
                        h = d.originalPosition,
                        i = d.axis,
                        j = e._aspectRatio || b.shiftKey;
                    e.grid = typeof e.grid == "number" ? [e.grid, e.grid] : e.grid;
                    var k = Math.round((f.width - g.width) / (e.grid[0] || 1)) * (e.grid[0] || 1),
                        l = Math.round((f.height - g.height) / (e.grid[1] || 1)) * (e.grid[1] || 1);
                    /^(se|s|e)$/.test(i)
                        ? ((d.size.width = g.width + k), (d.size.height = g.height + l))
                        : /^(ne)$/.test(i)
                        ? ((d.size.width = g.width + k), (d.size.height = g.height + l), (d.position.top = h.top - l))
                        : /^(sw)$/.test(i)
                        ? ((d.size.width = g.width + k), (d.size.height = g.height + l), (d.position.left = h.left - k))
                        : ((d.size.width = g.width + k), (d.size.height = g.height + l), (d.position.top = h.top - l), (d.position.left = h.left - k));
                },
            });
        var c = function (a) {
                return parseInt(a, 10) || 0;
            },
            d = function (a) {
                return !isNaN(parseInt(a, 10));
            };
    })(jQuery),
    (function (a, b) {
        a.widget("ui.selectable", a.ui.mouse, {
            options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch" },
            _create: function () {
                var b = this;
                this.element.addClass("ui-selectable"), (this.dragged = !1);
                var c;
                (this.refresh = function () {
                    (c = a(b.options.filter, b.element[0])),
                        c.addClass("ui-selectee"),
                        c.each(function () {
                            var b = a(this),
                                c = b.offset();
                            a.data(this, "selectable-item", {
                                element: this,
                                $element: b,
                                left: c.left,
                                top: c.top,
                                right: c.left + b.outerWidth(),
                                bottom: c.top + b.outerHeight(),
                                startselected: !1,
                                selected: b.hasClass("ui-selected"),
                                selecting: b.hasClass("ui-selecting"),
                                unselecting: b.hasClass("ui-unselecting"),
                            });
                        });
                }),
                    this.refresh(),
                    (this.selectees = c.addClass("ui-selectee")),
                    this._mouseInit(),
                    (this.helper = a("<div class='ui-selectable-helper'></div>"));
            },
            destroy: function () {
                return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this;
            },
            _mouseStart: function (b) {
                var c = this;
                this.opos = [b.pageX, b.pageY];
                if (this.options.disabled) return;
                var d = this.options;
                (this.selectees = a(d.filter, this.element[0])),
                    this._trigger("start", b),
                    a(d.appendTo).append(this.helper),
                    this.helper.css({ left: b.clientX, top: b.clientY, width: 0, height: 0 }),
                    d.autoRefresh && this.refresh(),
                    this.selectees.filter(".ui-selected").each(function () {
                        var d = a.data(this, "selectable-item");
                        (d.startselected = !0),
                            !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), (d.selected = !1), d.$element.addClass("ui-unselecting"), (d.unselecting = !0), c._trigger("unselecting", b, { unselecting: d.element }));
                    }),
                    a(b.target)
                        .parents()
                        .andSelf()
                        .each(function () {
                            var d = a.data(this, "selectable-item");
                            if (d) {
                                var e = (!b.metaKey && !b.ctrlKey) || !d.$element.hasClass("ui-selected");
                                return (
                                    d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"),
                                    (d.unselecting = !e),
                                    (d.selecting = e),
                                    (d.selected = e),
                                    e ? c._trigger("selecting", b, { selecting: d.element }) : c._trigger("unselecting", b, { unselecting: d.element }),
                                    !1
                                );
                            }
                        });
            },
            _mouseDrag: function (b) {
                var c = this;
                this.dragged = !0;
                if (this.options.disabled) return;
                var d = this.options,
                    e = this.opos[0],
                    f = this.opos[1],
                    g = b.pageX,
                    h = b.pageY;
                if (e > g) {
                    var i = g;
                    (g = e), (e = i);
                }
                if (f > h) {
                    var i = h;
                    (h = f), (f = i);
                }
                return (
                    this.helper.css({ left: e, top: f, width: g - e, height: h - f }),
                    this.selectees.each(function () {
                        var i = a.data(this, "selectable-item");
                        if (!i || i.element == c.element[0]) return;
                        var j = !1;
                        d.tolerance == "touch" ? (j = !(i.left > g || i.right < e || i.top > h || i.bottom < f)) : d.tolerance == "fit" && (j = i.left > e && i.right < g && i.top > f && i.bottom < h),
                            j
                                ? (i.selected && (i.$element.removeClass("ui-selected"), (i.selected = !1)),
                                  i.unselecting && (i.$element.removeClass("ui-unselecting"), (i.unselecting = !1)),
                                  i.selecting || (i.$element.addClass("ui-selecting"), (i.selecting = !0), c._trigger("selecting", b, { selecting: i.element })))
                                : (i.selecting &&
                                      ((b.metaKey || b.ctrlKey) && i.startselected
                                          ? (i.$element.removeClass("ui-selecting"), (i.selecting = !1), i.$element.addClass("ui-selected"), (i.selected = !0))
                                          : (i.$element.removeClass("ui-selecting"),
                                            (i.selecting = !1),
                                            i.startselected && (i.$element.addClass("ui-unselecting"), (i.unselecting = !0)),
                                            c._trigger("unselecting", b, { unselecting: i.element }))),
                                  i.selected &&
                                      !b.metaKey &&
                                      !b.ctrlKey &&
                                      !i.startselected &&
                                      (i.$element.removeClass("ui-selected"), (i.selected = !1), i.$element.addClass("ui-unselecting"), (i.unselecting = !0), c._trigger("unselecting", b, { unselecting: i.element })));
                    }),
                    !1
                );
            },
            _mouseStop: function (b) {
                var c = this;
                this.dragged = !1;
                var d = this.options;
                return (
                    a(".ui-unselecting", this.element[0]).each(function () {
                        var d = a.data(this, "selectable-item");
                        d.$element.removeClass("ui-unselecting"), (d.unselecting = !1), (d.startselected = !1), c._trigger("unselected", b, { unselected: d.element });
                    }),
                    a(".ui-selecting", this.element[0]).each(function () {
                        var d = a.data(this, "selectable-item");
                        d.$element.removeClass("ui-selecting").addClass("ui-selected"), (d.selecting = !1), (d.selected = !0), (d.startselected = !0), c._trigger("selected", b, { selected: d.element });
                    }),
                    this._trigger("stop", b),
                    this.helper.remove(),
                    !1
                );
            },
        }),
            a.extend(a.ui.selectable, { version: "1.8.22" });
    })(jQuery),
    (function (a, b) {
        a.widget("ui.sortable", a.ui.mouse, {
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
            },
            _create: function () {
                var a = this.options;
                (this.containerCache = {}),
                    this.element.addClass("ui-sortable"),
                    this.refresh(),
                    (this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1),
                    (this.offset = this.element.offset()),
                    this._mouseInit(),
                    (this.ready = !0);
            },
            destroy: function () {
                a.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var b = this.items.length - 1; b >= 0; b--) this.items[b].item.removeData(this.widgetName + "-item");
                return this;
            },
            _setOption: function (b, c) {
                b === "disabled" ? ((this.options[b] = c), this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments);
            },
            _mouseCapture: function (b, c) {
                var d = this;
                if (this.reverting) return !1;
                if (this.options.disabled || this.options.type == "static") return !1;
                this._refreshItems(b);
                var e = null,
                    f = this,
                    g = a(b.target)
                        .parents()
                        .each(function () {
                            if (a.data(this, d.widgetName + "-item") == f) return (e = a(this)), !1;
                        });
                a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
                if (!e) return !1;
                if (this.options.handle && !c) {
                    var h = !1;
                    a(this.options.handle, e)
                        .find("*")
                        .andSelf()
                        .each(function () {
                            this == b.target && (h = !0);
                        });
                    if (!h) return !1;
                }
                return (this.currentItem = e), this._removeCurrentsFromItems(), !0;
            },
            _mouseStart: function (b, c, d) {
                var e = this.options,
                    f = this;
                (this.currentContainer = this),
                    this.refreshPositions(),
                    (this.helper = this._createHelper(b)),
                    this._cacheHelperProportions(),
                    this._cacheMargins(),
                    (this.scrollParent = this.helper.scrollParent()),
                    (this.offset = this.currentItem.offset()),
                    (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
                    a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                    this.helper.css("position", "absolute"),
                    (this.cssPosition = this.helper.css("position")),
                    (this.originalPosition = this._generatePosition(b)),
                    (this.originalPageX = b.pageX),
                    (this.originalPageY = b.pageY),
                    e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
                    (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
                    this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
                    this._createPlaceholder(),
                    e.containment && this._setContainment(),
                    e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)),
                    e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)),
                    e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)),
                    this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()),
                    this._trigger("start", b, this._uiHash()),
                    this._preserveHelperProportions || this._cacheHelperProportions();
                if (!d) for (var g = this.containers.length - 1; g >= 0; g--) this.containers[g]._trigger("activate", b, f._uiHash(this));
                return (
                    a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), (this.dragging = !0), this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
                );
            },
            _mouseDrag: function (b) {
                (this.position = this._generatePosition(b)), (this.positionAbs = this._convertPositionTo("absolute")), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
                if (this.options.scroll) {
                    var c = this.options,
                        d = !1;
                    this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML"
                        ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity
                              ? (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed)
                              : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed),
                          this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity
                              ? (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed)
                              : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed))
                        : (b.pageY - a(document).scrollTop() < c.scrollSensitivity
                              ? (d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed))
                              : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)),
                          b.pageX - a(document).scrollLeft() < c.scrollSensitivity
                              ? (d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed))
                              : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))),
                        d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b);
                }
                this.positionAbs = this._convertPositionTo("absolute");
                if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
                for (var e = this.items.length - 1; e >= 0; e--) {
                    var f = this.items[e],
                        g = f.item[0],
                        h = this._intersectsWithPointer(f);
                    if (!h) continue;
                    if (g != this.currentItem[0] && this.placeholder[h == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : !0)) {
                        this.direction = h == 1 ? "down" : "up";
                        if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) this._rearrange(b, f);
                        else break;
                        this._trigger("change", b, this._uiHash());
                        break;
                    }
                }
                return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), (this.lastPositionAbs = this.positionAbs), !1;
            },
            _mouseStop: function (b, c) {
                if (!b) return;
                a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);
                if (this.options.revert) {
                    var d = this,
                        e = d.placeholder.offset();
                    (d.reverting = !0),
                        a(this.helper).animate(
                            {
                                left: e.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                                top: e.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop),
                            },
                            parseInt(this.options.revert, 10) || 500,
                            function () {
                                d._clear(b);
                            }
                        );
                } else this._clear(b, c);
                return !1;
            },
            cancel: function () {
                var b = this;
                if (this.dragging) {
                    this._mouseUp({ target: null }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var c = this.containers.length - 1; c >= 0; c--)
                        this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), (this.containers[c].containerCache.over = 0));
                }
                return (
                    this.placeholder &&
                        (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
                        a.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
                        this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)),
                    this
                );
            },
            serialize: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return (
                    (b = b || {}),
                    a(c).each(function () {
                        var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                        c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
                    }),
                    !d.length && b.key && d.push(b.key + "="),
                    d.join("&")
                );
            },
            toArray: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected),
                    d = [];
                return (
                    (b = b || {}),
                    c.each(function () {
                        d.push(a(b.item || this).attr(b.attribute || "id") || "");
                    }),
                    d
                );
            },
            _intersectsWith: function (a) {
                var b = this.positionAbs.left,
                    c = b + this.helperProportions.width,
                    d = this.positionAbs.top,
                    e = d + this.helperProportions.height,
                    f = a.left,
                    g = f + a.width,
                    h = a.top,
                    i = h + a.height,
                    j = this.offset.click.top,
                    k = this.offset.click.left,
                    l = d + j > h && d + j < i && b + k > f && b + k < g;
                return this.options.tolerance == "pointer" ||
                    this.options.forcePointerForContainers ||
                    (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"])
                    ? l
                    : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
            },
            _intersectsWithPointer: function (b) {
                var c = this.options.axis === "x" || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height),
                    d = this.options.axis === "y" || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width),
                    e = c && d,
                    f = this._getDragVerticalDirection(),
                    g = this._getDragHorizontalDirection();
                return e ? (this.floating ? ((g && g == "right") || f == "down" ? 2 : 1) : f && (f == "down" ? 2 : 1)) : !1;
            },
            _intersectsWithSides: function (b) {
                var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height),
                    d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width),
                    e = this._getDragVerticalDirection(),
                    f = this._getDragHorizontalDirection();
                return this.floating && f ? (f == "right" && d) || (f == "left" && !d) : e && ((e == "down" && c) || (e == "up" && !c));
            },
            _getDragVerticalDirection: function () {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return a != 0 && (a > 0 ? "down" : "up");
            },
            _getDragHorizontalDirection: function () {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return a != 0 && (a > 0 ? "right" : "left");
            },
            refresh: function (a) {
                return this._refreshItems(a), this.refreshPositions(), this;
            },
            _connectWith: function () {
                var a = this.options;
                return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith;
            },
            _getItemsAsjQuery: function (b) {
                var c = this,
                    d = [],
                    e = [],
                    f = this._connectWith();
                if (f && b)
                    for (var g = f.length - 1; g >= 0; g--) {
                        var h = a(f[g]);
                        for (var i = h.length - 1; i >= 0; i--) {
                            var j = a.data(h[i], this.widgetName);
                            j && j != this && !j.options.disabled && e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element) : a(j.options.items, j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j]);
                        }
                    }
                e.push([
                    a.isFunction(this.options.items)
                        ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
                        : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                    this,
                ]);
                for (var g = e.length - 1; g >= 0; g--)
                    e[g][0].each(function () {
                        d.push(this);
                    });
                return a(d);
            },
            _removeCurrentsFromItems: function () {
                var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
                for (var b = 0; b < this.items.length; b++) for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1);
            },
            _refreshItems: function (b) {
                (this.items = []), (this.containers = [this]);
                var c = this.items,
                    d = this,
                    e = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, { item: this.currentItem }) : a(this.options.items, this.element), this]],
                    f = this._connectWith();
                if (f && this.ready)
                    for (var g = f.length - 1; g >= 0; g--) {
                        var h = a(f[g]);
                        for (var i = h.length - 1; i >= 0; i--) {
                            var j = a.data(h[i], this.widgetName);
                            j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, { item: this.currentItem }) : a(j.options.items, j.element), j]), this.containers.push(j));
                        }
                    }
                for (var g = e.length - 1; g >= 0; g--) {
                    var k = e[g][1],
                        l = e[g][0];
                    for (var i = 0, m = l.length; i < m; i++) {
                        var n = a(l[i]);
                        n.data(this.widgetName + "-item", k), c.push({ item: n, instance: k, width: 0, height: 0, left: 0, top: 0 });
                    }
                }
            },
            refreshPositions: function (b) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var c = this.items.length - 1; c >= 0; c--) {
                    var d = this.items[c];
                    if (d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0]) continue;
                    var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                    b || ((d.width = e.outerWidth()), (d.height = e.outerHeight()));
                    var f = e.offset();
                    (d.left = f.left), (d.top = f.top);
                }
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (var c = this.containers.length - 1; c >= 0; c--) {
                        var f = this.containers[c].element.offset();
                        (this.containers[c].containerCache.left = f.left),
                            (this.containers[c].containerCache.top = f.top),
                            (this.containers[c].containerCache.width = this.containers[c].element.outerWidth()),
                            (this.containers[c].containerCache.height = this.containers[c].element.outerHeight());
                    }
                return this;
            },
            _createPlaceholder: function (b) {
                var c = b || this,
                    d = c.options;
                if (!d.placeholder || d.placeholder.constructor == String) {
                    var e = d.placeholder;
                    d.placeholder = {
                        element: function () {
                            var b = a(document.createElement(c.currentItem[0].nodeName))
                                .addClass(e || c.currentItem[0].className + " ui-sortable-placeholder")
                                .removeClass("ui-sortable-helper")[0];
                            return e || (b.style.visibility = "hidden"), b;
                        },
                        update: function (a, b) {
                            if (e && !d.forcePlaceholderSize) return;
                            b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)),
                                b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10));
                        },
                    };
                }
                (c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem))), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder);
            },
            _contactContainers: function (b) {
                var c = null,
                    d = null;
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    if (a.ui.contains(this.currentItem[0], this.containers[e].element[0])) continue;
                    if (this._intersectsWith(this.containers[e].containerCache)) {
                        if (c && a.ui.contains(this.containers[e].element[0], c.element[0])) continue;
                        (c = this.containers[e]), (d = e);
                    } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), (this.containers[e].containerCache.over = 0));
                }
                if (!c) return;
                if (this.containers.length === 1) this.containers[d]._trigger("over", b, this._uiHash(this)), (this.containers[d].containerCache.over = 1);
                else if (this.currentContainer != this.containers[d]) {
                    var f = 1e4,
                        g = null,
                        h = this.positionAbs[this.containers[d].floating ? "left" : "top"];
                    for (var i = this.items.length - 1; i >= 0; i--) {
                        if (!a.ui.contains(this.containers[d].element[0], this.items[i].item[0])) continue;
                        var j = this.containers[d].floating ? this.items[i].item.offset().left : this.items[i].item.offset().top;
                        Math.abs(j - h) < f && ((f = Math.abs(j - h)), (g = this.items[i]), (this.direction = j - h > 0 ? "down" : "up"));
                    }
                    if (!g && !this.options.dropOnEmpty) return;
                    (this.currentContainer = this.containers[d]),
                        g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0),
                        this._trigger("change", b, this._uiHash()),
                        this.containers[d]._trigger("change", b, this._uiHash(this)),
                        this.options.placeholder.update(this.currentContainer, this.placeholder),
                        this.containers[d]._trigger("over", b, this._uiHash(this)),
                        (this.containers[d].containerCache.over = 1);
                }
            },
            _createHelper: function (b) {
                var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
                return (
                    d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]),
                    d[0] == this.currentItem[0] &&
                        (this._storedCSS = {
                            width: this.currentItem[0].style.width,
                            height: this.currentItem[0].style.height,
                            position: this.currentItem.css("position"),
                            top: this.currentItem.css("top"),
                            left: this.currentItem.css("left"),
                        }),
                    (d[0].style.width == "" || c.forceHelperSize) && d.width(this.currentItem.width()),
                    (d[0].style.height == "" || c.forceHelperSize) && d.height(this.currentItem.height()),
                    d
                );
            },
            _adjustOffsetFromHelper: function (b) {
                typeof b == "string" && (b = b.split(" ")),
                    a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
                    "left" in b && (this.offset.click.left = b.left + this.margins.left),
                    "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
                    "top" in b && (this.offset.click.top = b.top + this.margins.top),
                    "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && ((b.left += this.scrollParent.scrollLeft()), (b.top += this.scrollParent.scrollTop()));
                if (this.offsetParent[0] == document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) b = { top: 0, left: 0 };
                return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
            },
            _getRelativeOffset: function () {
                if (this.cssPosition == "relative") {
                    var a = this.currentItem.position();
                    return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
                }
                return { top: 0, left: 0 };
            },
            _cacheMargins: function () {
                this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
            },
            _setContainment: function () {
                var b = this.options;
                b.containment == "parent" && (b.containment = this.helper[0].parentNode);
                if (b.containment == "document" || b.containment == "window")
                    this.containment = [
                        0 - this.offset.relative.left - this.offset.parent.left,
                        0 - this.offset.relative.top - this.offset.parent.top,
                        a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
                        (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                    ];
                if (!/^(document|window|parent)$/.test(b.containment)) {
                    var c = a(b.containment)[0],
                        d = a(b.containment).offset(),
                        e = a(c).css("overflow") != "hidden";
                    this.containment = [
                        d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left,
                        d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top,
                        d.left +
                            (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) -
                            (parseInt(a(c).css("borderLeftWidth"), 10) || 0) -
                            (parseInt(a(c).css("paddingRight"), 10) || 0) -
                            this.helperProportions.width -
                            this.margins.left,
                        d.top +
                            (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) -
                            (parseInt(a(c).css("borderTopWidth"), 10) || 0) -
                            (parseInt(a(c).css("paddingBottom"), 10) || 0) -
                            this.helperProportions.height -
                            this.margins.top,
                    ];
                }
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = b == "absolute" ? 1 : -1,
                    e = this.options,
                    f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    g = /(html|body)/i.test(f[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
                    left:
                        c.left +
                        this.offset.relative.left * d +
                        this.offset.parent.left * d -
                        (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d),
                };
            },
            _generatePosition: function (b) {
                var c = this.options,
                    d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    e = /(html|body)/i.test(d[0].tagName);
                this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
                var f = b.pageX,
                    g = b.pageY;
                if (this.originalPosition) {
                    this.containment &&
                        (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
                        b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top),
                        b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
                        b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top));
                    if (c.grid) {
                        var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
                        g = this.containment ? (h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? (h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1]) : h) : h;
                        var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
                        f = this.containment
                            ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2]
                                ? i - this.offset.click.left < this.containment[0]
                                    ? i + c.grid[0]
                                    : i - c.grid[0]
                                : i
                            : i;
                    }
                }
                return {
                    top:
                        g -
                        this.offset.click.top -
                        this.offset.relative.top -
                        this.offset.parent.top +
                        (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                    left:
                        f -
                        this.offset.click.left -
                        this.offset.relative.left -
                        this.offset.parent.left +
                        (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()),
                };
            },
            _rearrange: function (a, b, c, d) {
                c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), (this.counter = this.counter ? ++this.counter : 1);
                var e = this,
                    f = this.counter;
                window.setTimeout(function () {
                    f == e.counter && e.refreshPositions(!d);
                }, 0);
            },
            _clear: function (b, c) {
                this.reverting = !1;
                var d = [],
                    e = this;
                !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), (this._noFinalSort = null);
                if (this.helper[0] == this.currentItem[0]) {
                    for (var f in this._storedCSS) if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static") this._storedCSS[f] = "";
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else this.currentItem.show();
                this.fromOutside &&
                    !c &&
                    d.push(function (a) {
                        this._trigger("receive", a, this._uiHash(this.fromOutside));
                    }),
                    (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) &&
                        !c &&
                        d.push(function (a) {
                            this._trigger("update", a, this._uiHash());
                        });
                if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                    c ||
                        d.push(function (a) {
                            this._trigger("remove", a, this._uiHash());
                        });
                    for (var f = this.containers.length - 1; f >= 0; f--)
                        a.ui.contains(this.containers[f].element[0], this.currentItem[0]) &&
                            !c &&
                            (d.push(
                                function (a) {
                                    return function (b) {
                                        a._trigger("receive", b, this._uiHash(this));
                                    };
                                }.call(this, this.containers[f])
                            ),
                            d.push(
                                function (a) {
                                    return function (b) {
                                        a._trigger("update", b, this._uiHash(this));
                                    };
                                }.call(this, this.containers[f])
                            ));
                }
                for (var f = this.containers.length - 1; f >= 0; f--)
                    c ||
                        d.push(
                            function (a) {
                                return function (b) {
                                    a._trigger("deactivate", b, this._uiHash(this));
                                };
                            }.call(this, this.containers[f])
                        ),
                        this.containers[f].containerCache.over &&
                            (d.push(
                                function (a) {
                                    return function (b) {
                                        a._trigger("out", b, this._uiHash(this));
                                    };
                                }.call(this, this.containers[f])
                            ),
                            (this.containers[f].containerCache.over = 0));
                this._storedCursor && a("body").css("cursor", this._storedCursor),
                    this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                    this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex),
                    (this.dragging = !1);
                if (this.cancelHelperRemoval) {
                    if (!c) {
                        this._trigger("beforeStop", b, this._uiHash());
                        for (var f = 0; f < d.length; f++) d[f].call(this, b);
                        this._trigger("stop", b, this._uiHash());
                    }
                    return (this.fromOutside = !1), !1;
                }
                c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), (this.helper = null);
                if (!c) {
                    for (var f = 0; f < d.length; f++) d[f].call(this, b);
                    this._trigger("stop", b, this._uiHash());
                }
                return (this.fromOutside = !1), !0;
            },
            _trigger: function () {
                a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
            },
            _uiHash: function (b) {
                var c = b || this;
                return { helper: c.helper, placeholder: c.placeholder || a([]), position: c.position, originalPosition: c.originalPosition, offset: c.positionAbs, item: c.currentItem, sender: b ? b.element : null };
            },
        }),
            a.extend(a.ui.sortable, { version: "1.8.22" });
    })(jQuery),
    jQuery.effects ||
        (function (a, b) {
            function c(b) {
                var c;
                return b && b.constructor == Array && b.length == 3
                    ? b
                    : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))
                    ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)]
                    : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))
                    ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55]
                    : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))
                    ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
                    : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))
                    ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)]
                    : (c = /rgba\(0, 0, 0, 0\)/.exec(b))
                    ? e.transparent
                    : e[a.trim(b).toLowerCase()];
            }
            function d(b, d) {
                var e;
                do {
                    e = (a.curCSS || a.css)(b, d);
                    if ((e != "" && e != "transparent") || a.nodeName(b, "body")) break;
                    d = "backgroundColor";
                } while ((b = b.parentNode));
                return c(e);
            }
            function h() {
                var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                    b = {},
                    c,
                    d;
                if (a && a.length && a[0] && a[a[0]]) {
                    var e = a.length;
                    while (e--)
                        (c = a[e]),
                            typeof a[c] == "string" &&
                                ((d = c.replace(/\-(\w)/g, function (a, b) {
                                    return b.toUpperCase();
                                })),
                                (b[d] = a[c]));
                } else for (c in a) typeof a[c] == "string" && (b[c] = a[c]);
                return b;
            }
            function i(b) {
                var c, d;
                for (c in b) (d = b[c]), (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || (!/color/i.test(c) && isNaN(parseFloat(d)))) && delete b[c];
                return b;
            }
            function j(a, b) {
                var c = { _: 0 },
                    d;
                for (d in b) a[d] != b[d] && (c[d] = b[d]);
                return c;
            }
            function k(b, c, d, e) {
                typeof b == "object" && ((e = c), (d = null), (c = b), (b = c.effect)), a.isFunction(c) && ((e = c), (d = null), (c = {}));
                if (typeof c == "number" || a.fx.speeds[c]) (e = d), (d = c), (c = {});
                return (
                    a.isFunction(d) && ((e = d), (d = null)),
                    (c = c || {}),
                    (d = d || c.duration),
                    (d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default),
                    (e = e || c.complete),
                    [b, c, d, e]
                );
            }
            function l(b) {
                return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1;
            }
            (a.effects = {}),
                a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (b, e) {
                    a.fx.step[e] = function (a) {
                        a.colorInit || ((a.start = d(a.elem, e)), (a.end = c(a.end)), (a.colorInit = !0)),
                            (a.elem.style[e] =
                                "rgb(" +
                                Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) +
                                "," +
                                Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) +
                                "," +
                                Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) +
                                ")");
                    };
                });
            var e = {
                    aqua: [0, 255, 255],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    black: [0, 0, 0],
                    blue: [0, 0, 255],
                    brown: [165, 42, 42],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgrey: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkviolet: [148, 0, 211],
                    fuchsia: [255, 0, 255],
                    gold: [255, 215, 0],
                    green: [0, 128, 0],
                    indigo: [75, 0, 130],
                    khaki: [240, 230, 140],
                    lightblue: [173, 216, 230],
                    lightcyan: [224, 255, 255],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    navy: [0, 0, 128],
                    olive: [128, 128, 0],
                    orange: [255, 165, 0],
                    pink: [255, 192, 203],
                    purple: [128, 0, 128],
                    violet: [128, 0, 128],
                    red: [255, 0, 0],
                    silver: [192, 192, 192],
                    white: [255, 255, 255],
                    yellow: [255, 255, 0],
                    transparent: [255, 255, 255],
                },
                f = ["add", "remove", "toggle"],
                g = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            (a.effects.animateClass = function (b, c, d, e) {
                return (
                    a.isFunction(d) && ((e = d), (d = null)),
                    this.queue(function () {
                        var g = a(this),
                            k = g.attr("style") || " ",
                            l = i(h.call(this)),
                            m,
                            n = g.attr("class") || "";
                        a.each(f, function (a, c) {
                            b[c] && g[c + "Class"](b[c]);
                        }),
                            (m = i(h.call(this))),
                            g.attr("class", n),
                            g.animate(j(l, m), {
                                queue: !1,
                                duration: c,
                                easing: d,
                                complete: function () {
                                    a.each(f, function (a, c) {
                                        b[c] && g[c + "Class"](b[c]);
                                    }),
                                        typeof g.attr("style") == "object" ? ((g.attr("style").cssText = ""), (g.attr("style").cssText = k)) : g.attr("style", k),
                                        e && e.apply(this, arguments),
                                        a.dequeue(this);
                                },
                            });
                    })
                );
            }),
                a.fn.extend({
                    _addClass: a.fn.addClass,
                    addClass: function (b, c, d, e) {
                        return c ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e]) : this._addClass(b);
                    },
                    _removeClass: a.fn.removeClass,
                    removeClass: function (b, c, d, e) {
                        return c ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e]) : this._removeClass(b);
                    },
                    _toggleClass: a.fn.toggleClass,
                    toggleClass: function (c, d, e, f, g) {
                        return typeof d == "boolean" || d === b ? (e ? a.effects.animateClass.apply(this, [d ? { add: c } : { remove: c }, e, f, g]) : this._toggleClass(c, d)) : a.effects.animateClass.apply(this, [{ toggle: c }, d, e, f]);
                    },
                    switchClass: function (b, c, d, e, f) {
                        return a.effects.animateClass.apply(this, [{ add: c, remove: b }, d, e, f]);
                    },
                }),
                a.extend(a.effects, {
                    version: "1.8.22",
                    save: function (a, b) {
                        for (var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]);
                    },
                    restore: function (a, b) {
                        for (var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]));
                    },
                    setMode: function (a, b) {
                        return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b;
                    },
                    getBaseline: function (a, b) {
                        var c, d;
                        switch (a[0]) {
                            case "top":
                                c = 0;
                                break;
                            case "middle":
                                c = 0.5;
                                break;
                            case "bottom":
                                c = 1;
                                break;
                            default:
                                c = a[0] / b.height;
                        }
                        switch (a[1]) {
                            case "left":
                                d = 0;
                                break;
                            case "center":
                                d = 0.5;
                                break;
                            case "right":
                                d = 1;
                                break;
                            default:
                                d = a[1] / b.width;
                        }
                        return { x: d, y: c };
                    },
                    createWrapper: function (b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                        var c = { width: b.outerWidth(!0), height: b.outerHeight(!0), float: b.css("float") },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            e = document.activeElement;
                        try {
                            e.id;
                        } catch (f) {
                            e = document.body;
                        }
                        return (
                            b.wrap(d),
                            (b[0] === e || a.contains(b[0], e)) && a(e).focus(),
                            (d = b.parent()),
                            b.css("position") == "static"
                                ? (d.css({ position: "relative" }), b.css({ position: "relative" }))
                                : (a.extend(c, { position: b.css("position"), zIndex: b.css("z-index") }),
                                  a.each(["top", "left", "bottom", "right"], function (a, d) {
                                      (c[d] = b.css(d)), isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                                  }),
                                  b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })),
                            d.css(c).show()
                        );
                    },
                    removeWrapper: function (b) {
                        var c,
                            d = document.activeElement;
                        return b.parent().is(".ui-effects-wrapper") ? ((c = b.parent().replaceWith(b)), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b;
                    },
                    setTransition: function (b, c, d, e) {
                        return (
                            (e = e || {}),
                            a.each(c, function (a, c) {
                                var f = b.cssUnit(c);
                                f[0] > 0 && (e[c] = f[0] * d + f[1]);
                            }),
                            e
                        );
                    },
                }),
                a.fn.extend({
                    effect: function (b, c, d, e) {
                        var f = k.apply(this, arguments),
                            g = { options: f[1], duration: f[2], callback: f[3] },
                            h = g.options.mode,
                            i = a.effects[b];
                        return a.fx.off || !i
                            ? h
                                ? this[h](g.duration, g.callback)
                                : this.each(function () {
                                      g.callback && g.callback.call(this);
                                  })
                            : i.call(this, g);
                    },
                    _show: a.fn.show,
                    show: function (a) {
                        if (l(a)) return this._show.apply(this, arguments);
                        var b = k.apply(this, arguments);
                        return (b[1].mode = "show"), this.effect.apply(this, b);
                    },
                    _hide: a.fn.hide,
                    hide: function (a) {
                        if (l(a)) return this._hide.apply(this, arguments);
                        var b = k.apply(this, arguments);
                        return (b[1].mode = "hide"), this.effect.apply(this, b);
                    },
                    __toggle: a.fn.toggle,
                    toggle: function (b) {
                        if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                        var c = k.apply(this, arguments);
                        return (c[1].mode = "toggle"), this.effect.apply(this, c);
                    },
                    cssUnit: function (b) {
                        var c = this.css(b),
                            d = [];
                        return (
                            a.each(["em", "px", "%", "pt"], function (a, b) {
                                c.indexOf(b) > 0 && (d = [parseFloat(c), b]);
                            }),
                            d
                        );
                    },
                }),
                (a.easing.jswing = a.easing.swing),
                a.extend(a.easing, {
                    def: "easeOutQuad",
                    swing: function (b, c, d, e, f) {
                        return a.easing[a.easing.def](b, c, d, e, f);
                    },
                    easeInQuad: function (a, b, c, d, e) {
                        return d * (b /= e) * b + c;
                    },
                    easeOutQuad: function (a, b, c, d, e) {
                        return -d * (b /= e) * (b - 2) + c;
                    },
                    easeInOutQuad: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c;
                    },
                    easeInCubic: function (a, b, c, d, e) {
                        return d * (b /= e) * b * b + c;
                    },
                    easeOutCubic: function (a, b, c, d, e) {
                        return d * ((b = b / e - 1) * b * b + 1) + c;
                    },
                    easeInOutCubic: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (d / 2) * b * b * b + c : (d / 2) * ((b -= 2) * b * b + 2) + c;
                    },
                    easeInQuart: function (a, b, c, d, e) {
                        return d * (b /= e) * b * b * b + c;
                    },
                    easeOutQuart: function (a, b, c, d, e) {
                        return -d * ((b = b / e - 1) * b * b * b - 1) + c;
                    },
                    easeInOutQuart: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b + c : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
                    },
                    easeInQuint: function (a, b, c, d, e) {
                        return d * (b /= e) * b * b * b * b + c;
                    },
                    easeOutQuint: function (a, b, c, d, e) {
                        return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
                    },
                    easeInOutQuint: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b * b + c : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
                    },
                    easeInSine: function (a, b, c, d, e) {
                        return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
                    },
                    easeOutSine: function (a, b, c, d, e) {
                        return d * Math.sin((b / e) * (Math.PI / 2)) + c;
                    },
                    easeInOutSine: function (a, b, c, d, e) {
                        return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
                    },
                    easeInExpo: function (a, b, c, d, e) {
                        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
                    },
                    easeOutExpo: function (a, b, c, d, e) {
                        return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
                    },
                    easeInOutExpo: function (a, b, c, d, e) {
                        return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
                    },
                    easeInCirc: function (a, b, c, d, e) {
                        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
                    },
                    easeOutCirc: function (a, b, c, d, e) {
                        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
                    },
                    easeInOutCirc: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
                    },
                    easeInElastic: function (a, b, c, d, e) {
                        var f = 1.70158,
                            g = 0,
                            h = d;
                        if (b == 0) return c;
                        if ((b /= e) == 1) return c + d;
                        g || (g = e * 0.3);
                        if (h < Math.abs(d)) {
                            h = d;
                            var f = g / 4;
                        } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
                        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g)) + c;
                    },
                    easeOutElastic: function (a, b, c, d, e) {
                        var f = 1.70158,
                            g = 0,
                            h = d;
                        if (b == 0) return c;
                        if ((b /= e) == 1) return c + d;
                        g || (g = e * 0.3);
                        if (h < Math.abs(d)) {
                            h = d;
                            var f = g / 4;
                        } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
                        return h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * 2 * Math.PI) / g) + d + c;
                    },
                    easeInOutElastic: function (a, b, c, d, e) {
                        var f = 1.70158,
                            g = 0,
                            h = d;
                        if (b == 0) return c;
                        if ((b /= e / 2) == 2) return c + d;
                        g || (g = e * 0.3 * 1.5);
                        if (h < Math.abs(d)) {
                            h = d;
                            var f = g / 4;
                        } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
                        return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g) * 0.5 + d + c;
                    },
                    easeInBack: function (a, c, d, e, f, g) {
                        return g == b && (g = 1.70158), e * (c /= f) * c * ((g + 1) * c - g) + d;
                    },
                    easeOutBack: function (a, c, d, e, f, g) {
                        return g == b && (g = 1.70158), e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d;
                    },
                    easeInOutBack: function (a, c, d, e, f, g) {
                        return g == b && (g = 1.70158), (c /= f / 2) < 1 ? (e / 2) * c * c * (((g *= 1.525) + 1) * c - g) + d : (e / 2) * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d;
                    },
                    easeInBounce: function (b, c, d, e, f) {
                        return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d;
                    },
                    easeOutBounce: function (a, b, c, d, e) {
                        return (b /= e) < 1 / 2.75
                            ? d * 7.5625 * b * b + c
                            : b < 2 / 2.75
                            ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
                            : b < 2.5 / 2.75
                            ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
                            : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
                    },
                    easeInOutBounce: function (b, c, d, e, f) {
                        return c < f / 2 ? a.easing.easeInBounce(b, c * 2, 0, e, f) * 0.5 + d : a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * 0.5 + e * 0.5 + d;
                    },
                });
        })(jQuery),
    (function (a, b) {
        a.effects.blind = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "vertical";
                a.effects.save(c, d), c.show();
                var g = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                    h = f == "vertical" ? "height" : "width",
                    i = f == "vertical" ? g.height() : g.width();
                e == "show" && g.css(h, 0);
                var j = {};
                (j[h] = e == "show" ? i : 0),
                    g.animate(j, b.duration, b.options.easing, function () {
                        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
                    });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.bounce = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "effect"),
                    f = b.options.direction || "up",
                    g = b.options.distance || 20,
                    h = b.options.times || 5,
                    i = b.duration || 250;
                /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var j = f == "up" || f == "down" ? "top" : "left",
                    k = f == "up" || f == "left" ? "pos" : "neg",
                    g = b.options.distance || (j == "top" ? c.outerHeight(!0) / 3 : c.outerWidth(!0) / 3);
                e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--;
                if (e == "show") {
                    var l = { opacity: 1 };
                    (l[j] = (k == "pos" ? "+=" : "-=") + g), c.animate(l, i / 2, b.options.easing), (g = g / 2), h--;
                }
                for (var m = 0; m < h; m++) {
                    var n = {},
                        p = {};
                    (n[j] = (k == "pos" ? "-=" : "+=") + g), (p[j] = (k == "pos" ? "+=" : "-=") + g), c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), (g = e == "hide" ? g * 2 : g / 2);
                }
                if (e == "hide") {
                    var l = { opacity: 0 };
                    (l[j] = (k == "pos" ? "-=" : "+=") + g),
                        c.animate(l, i / 2, b.options.easing, function () {
                            c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
                        });
                } else {
                    var n = {},
                        p = {};
                    (n[j] = (k == "pos" ? "-=" : "+=") + g),
                        (p[j] = (k == "pos" ? "+=" : "-=") + g),
                        c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function () {
                            a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
                        });
                }
                c.queue("fx", function () {
                    c.dequeue();
                }),
                    c.dequeue();
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.clip = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right", "height", "width"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "vertical";
                a.effects.save(c, d), c.show();
                var g = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                    h = c[0].tagName == "IMG" ? g : c,
                    i = { size: f == "vertical" ? "height" : "width", position: f == "vertical" ? "top" : "left" },
                    j = f == "vertical" ? h.height() : h.width();
                e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
                var k = {};
                (k[i.size] = e == "show" ? j : 0),
                    (k[i.position] = e == "show" ? 0 : j / 2),
                    h.animate(k, {
                        queue: !1,
                        duration: b.duration,
                        easing: b.options.easing,
                        complete: function () {
                            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
                        },
                    });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.drop = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right", "opacity"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "left";
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var g = f == "up" || f == "down" ? "top" : "left",
                    h = f == "up" || f == "left" ? "pos" : "neg",
                    i = b.options.distance || (g == "top" ? c.outerHeight(!0) / 2 : c.outerWidth(!0) / 2);
                e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
                var j = { opacity: e == "show" ? 1 : 0 };
                (j[g] = (e == "show" ? (h == "pos" ? "+=" : "-=") : h == "pos" ? "-=" : "+=") + i),
                    c.animate(j, {
                        queue: !1,
                        duration: b.duration,
                        easing: b.options.easing,
                        complete: function () {
                            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
                        },
                    });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.explode = function (b) {
            return this.queue(function () {
                var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
                    d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
                b.options.mode = b.options.mode == "toggle" ? (a(this).is(":visible") ? "hide" : "show") : b.options.mode;
                var e = a(this).show().css("visibility", "hidden"),
                    f = e.offset();
                (f.top -= parseInt(e.css("marginTop"), 10) || 0), (f.left -= parseInt(e.css("marginLeft"), 10) || 0);
                var g = e.outerWidth(!0),
                    h = e.outerHeight(!0);
                for (var i = 0; i < c; i++)
                    for (var j = 0; j < d; j++)
                        e.clone()
                            .appendTo("body")
                            .wrap("<div></div>")
                            .css({ position: "absolute", visibility: "visible", left: -j * (g / d), top: -i * (h / c) })
                            .parent()
                            .addClass("ui-effects-explode")
                            .css({
                                position: "absolute",
                                overflow: "hidden",
                                width: g / d,
                                height: h / c,
                                left: f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0),
                                top: f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0),
                                opacity: b.options.mode == "show" ? 0 : 1,
                            })
                            .animate(
                                {
                                    left: f.left + j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)),
                                    top: f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)),
                                    opacity: b.options.mode == "show" ? 1 : 0,
                                },
                                b.duration || 500
                            );
                setTimeout(function () {
                    b.options.mode == "show" ? e.css({ visibility: "visible" }) : e.css({ visibility: "visible" }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove();
                }, b.duration || 500);
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.fade = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "hide");
                c.animate(
                    { opacity: d },
                    {
                        queue: !1,
                        duration: b.duration,
                        easing: b.options.easing,
                        complete: function () {
                            b.callback && b.callback.apply(this, arguments), c.dequeue();
                        },
                    }
                );
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.fold = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.size || 15,
                    g = !!b.options.horizFirst,
                    h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
                a.effects.save(c, d), c.show();
                var i = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                    j = (e == "show") != g,
                    k = j ? ["width", "height"] : ["height", "width"],
                    l = j ? [i.width(), i.height()] : [i.height(), i.width()],
                    m = /([0-9]+)%/.exec(f);
                m && (f = (parseInt(m[1], 10) / 100) * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? { height: 0, width: f } : { height: f, width: 0 });
                var n = {},
                    p = {};
                (n[k[0]] = e == "show" ? l[0] : f),
                    (p[k[1]] = e == "show" ? l[1] : 0),
                    i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function () {
                        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
                    });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.highlight = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["backgroundImage", "backgroundColor", "opacity"],
                    e = a.effects.setMode(c, b.options.mode || "show"),
                    f = { backgroundColor: c.css("backgroundColor") };
                e == "hide" && (f.opacity = 0),
                    a.effects.save(c, d),
                    c
                        .show()
                        .css({ backgroundImage: "none", backgroundColor: b.options.color || "#ffff99" })
                        .animate(f, {
                            queue: !1,
                            duration: b.duration,
                            easing: b.options.easing,
                            complete: function () {
                                e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue();
                            },
                        });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.pulsate = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "show"),
                    e = (b.options.times || 5) * 2 - 1,
                    f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2,
                    g = c.is(":visible"),
                    h = 0;
                g || (c.css("opacity", 0).show(), (h = 1)), ((d == "hide" && g) || (d == "show" && !g)) && e--;
                for (var i = 0; i < e; i++) c.animate({ opacity: h }, f, b.options.easing), (h = (h + 1) % 2);
                c.animate({ opacity: h }, f, b.options.easing, function () {
                    h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments);
                }),
                    c
                        .queue("fx", function () {
                            c.dequeue();
                        })
                        .dequeue();
            });
        };
    })(jQuery),
    (function (a, b) {
        (a.effects.puff = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "hide"),
                    e = parseInt(b.options.percent, 10) || 150,
                    f = e / 100,
                    g = { height: c.height(), width: c.width() };
                a.extend(b.options, { fade: !0, mode: d, percent: d == "hide" ? e : 100, from: d == "hide" ? g : { height: g.height * f, width: g.width * f } }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue();
            });
        }),
            (a.effects.scale = function (b) {
                return this.queue(function () {
                    var c = a(this),
                        d = a.extend(!0, {}, b.options),
                        e = a.effects.setMode(c, b.options.mode || "effect"),
                        f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100),
                        g = b.options.direction || "both",
                        h = b.options.origin;
                    e != "effect" && ((d.origin = h || ["middle", "center"]), (d.restore = !0));
                    var i = { height: c.height(), width: c.width() };
                    c.from = b.options.from || (e == "show" ? { height: 0, width: 0 } : i);
                    var j = { y: g != "horizontal" ? f / 100 : 1, x: g != "vertical" ? f / 100 : 1 };
                    (c.to = { height: i.height * j.y, width: i.width * j.x }),
                        b.options.fade && (e == "show" && ((c.from.opacity = 0), (c.to.opacity = 1)), e == "hide" && ((c.from.opacity = 1), (c.to.opacity = 0))),
                        (d.from = c.from),
                        (d.to = c.to),
                        (d.mode = e),
                        c.effect("size", d, b.duration, b.callback),
                        c.dequeue();
                });
            }),
            (a.effects.size = function (b) {
                return this.queue(function () {
                    var c = a(this),
                        d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                        e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                        f = ["width", "height", "overflow"],
                        g = ["fontSize"],
                        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                        i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                        j = a.effects.setMode(c, b.options.mode || "effect"),
                        k = b.options.restore || !1,
                        l = b.options.scale || "both",
                        m = b.options.origin,
                        n = { height: c.height(), width: c.width() };
                    (c.from = b.options.from || n), (c.to = b.options.to || n);
                    if (m) {
                        var p = a.effects.getBaseline(m, n);
                        (c.from.top = (n.height - c.from.height) * p.y), (c.from.left = (n.width - c.from.width) * p.x), (c.to.top = (n.height - c.to.height) * p.y), (c.to.left = (n.width - c.to.width) * p.x);
                    }
                    var q = { from: { y: c.from.height / n.height, x: c.from.width / n.width }, to: { y: c.to.height / n.height, x: c.to.width / n.width } };
                    if (l == "box" || l == "both")
                        q.from.y != q.to.y && ((d = d.concat(h)), (c.from = a.effects.setTransition(c, h, q.from.y, c.from)), (c.to = a.effects.setTransition(c, h, q.to.y, c.to))),
                            q.from.x != q.to.x && ((d = d.concat(i)), (c.from = a.effects.setTransition(c, i, q.from.x, c.from)), (c.to = a.effects.setTransition(c, i, q.to.x, c.to)));
                    (l == "content" || l == "both") && q.from.y != q.to.y && ((d = d.concat(g)), (c.from = a.effects.setTransition(c, g, q.from.y, c.from)), (c.to = a.effects.setTransition(c, g, q.to.y, c.to))),
                        a.effects.save(c, k ? d : e),
                        c.show(),
                        a.effects.createWrapper(c),
                        c.css("overflow", "hidden").css(c.from);
                    if (l == "content" || l == "both")
                        (h = h.concat(["marginTop", "marginBottom"]).concat(g)),
                            (i = i.concat(["marginLeft", "marginRight"])),
                            (f = d.concat(h).concat(i)),
                            c.find("*[width]").each(function () {
                                var c = a(this);
                                k && a.effects.save(c, f);
                                var d = { height: c.height(), width: c.width() };
                                (c.from = { height: d.height * q.from.y, width: d.width * q.from.x }),
                                    (c.to = { height: d.height * q.to.y, width: d.width * q.to.x }),
                                    q.from.y != q.to.y && ((c.from = a.effects.setTransition(c, h, q.from.y, c.from)), (c.to = a.effects.setTransition(c, h, q.to.y, c.to))),
                                    q.from.x != q.to.x && ((c.from = a.effects.setTransition(c, i, q.from.x, c.from)), (c.to = a.effects.setTransition(c, i, q.to.x, c.to))),
                                    c.css(c.from),
                                    c.animate(c.to, b.duration, b.options.easing, function () {
                                        k && a.effects.restore(c, f);
                                    });
                            });
                    c.animate(c.to, {
                        queue: !1,
                        duration: b.duration,
                        easing: b.options.easing,
                        complete: function () {
                            c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
                        },
                    });
                });
            });
    })(jQuery),
    (function (a, b) {
        a.effects.shake = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "effect"),
                    f = b.options.direction || "left",
                    g = b.options.distance || 20,
                    h = b.options.times || 3,
                    i = b.duration || b.options.duration || 140;
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var j = f == "up" || f == "down" ? "top" : "left",
                    k = f == "up" || f == "left" ? "pos" : "neg",
                    l = {},
                    m = {},
                    n = {};
                (l[j] = (k == "pos" ? "-=" : "+=") + g), (m[j] = (k == "pos" ? "+=" : "-=") + g * 2), (n[j] = (k == "pos" ? "-=" : "+=") + g * 2), c.animate(l, i, b.options.easing);
                for (var p = 1; p < h; p++) c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
                c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function () {
                    a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
                }),
                    c.queue("fx", function () {
                        c.dequeue();
                    }),
                    c.dequeue();
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.slide = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "show"),
                    f = b.options.direction || "left";
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({ overflow: "hidden" });
                var g = f == "up" || f == "down" ? "top" : "left",
                    h = f == "up" || f == "left" ? "pos" : "neg",
                    i = b.options.distance || (g == "top" ? c.outerHeight(!0) : c.outerWidth(!0));
                e == "show" && c.css(g, h == "pos" ? (isNaN(i) ? "-" + i : -i) : i);
                var j = {};
                (j[g] = (e == "show" ? (h == "pos" ? "+=" : "-=") : h == "pos" ? "-=" : "+=") + i),
                    c.animate(j, {
                        queue: !1,
                        duration: b.duration,
                        easing: b.options.easing,
                        complete: function () {
                            e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
                        },
                    });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.effects.transfer = function (b) {
            return this.queue(function () {
                var c = a(this),
                    d = a(b.options.to),
                    e = d.offset(),
                    f = { top: e.top, left: e.left, height: d.innerHeight(), width: d.innerWidth() },
                    g = c.offset(),
                    h = a('<div class="ui-effects-transfer"></div>')
                        .appendTo(document.body)
                        .addClass(b.options.className)
                        .css({ top: g.top, left: g.left, height: c.innerHeight(), width: c.innerWidth(), position: "absolute" })
                        .animate(f, b.duration, b.options.easing, function () {
                            h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
                        });
            });
        };
    })(jQuery),
    (function (a, b) {
        a.widget("ui.accordion", {
            options: {
                active: 0,
                animated: "slide",
                autoHeight: !0,
                clearStyle: !1,
                collapsible: !1,
                event: "click",
                fillSpace: !1,
                header: "> li > :first-child,> :not(li):even",
                icons: { header: "ui-icon-triangle-1-e", headerSelected: "ui-icon-triangle-1-s" },
                navigation: !1,
                navigationFilter: function () {
                    return this.href.toLowerCase() === location.href.toLowerCase();
                },
            },
            _create: function () {
                var b = this,
                    c = b.options;
                (b.running = 0),
                    b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),
                    (b.headers = b.element
                        .find(c.header)
                        .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all")
                        .bind("mouseenter.accordion", function () {
                            if (c.disabled) return;
                            a(this).addClass("ui-state-hover");
                        })
                        .bind("mouseleave.accordion", function () {
                            if (c.disabled) return;
                            a(this).removeClass("ui-state-hover");
                        })
                        .bind("focus.accordion", function () {
                            if (c.disabled) return;
                            a(this).addClass("ui-state-focus");
                        })
                        .bind("blur.accordion", function () {
                            if (c.disabled) return;
                            a(this).removeClass("ui-state-focus");
                        })),
                    b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
                if (c.navigation) {
                    var d = b.element.find("a").filter(c.navigationFilter).eq(0);
                    if (d.length) {
                        var e = d.closest(".ui-accordion-header");
                        e.length ? (b.active = e) : (b.active = d.closest(".ui-accordion-content").prev());
                    }
                }
                (b.active = b
                    ._findActive(b.active || c.active)
                    .addClass("ui-state-default ui-state-active")
                    .toggleClass("ui-corner-all")
                    .toggleClass("ui-corner-top")),
                    b.active.next().addClass("ui-accordion-content-active"),
                    b._createIcons(),
                    b.resize(),
                    b.element.attr("role", "tablist"),
                    b.headers
                        .attr("role", "tab")
                        .bind("keydown.accordion", function (a) {
                            return b._keydown(a);
                        })
                        .next()
                        .attr("role", "tabpanel"),
                    b.headers
                        .not(b.active || "")
                        .attr({ "aria-expanded": "false", "aria-selected": "false", tabIndex: -1 })
                        .next()
                        .hide(),
                    b.active.length ? b.active.attr({ "aria-expanded": "true", "aria-selected": "true", tabIndex: 0 }) : b.headers.eq(0).attr("tabIndex", 0),
                    a.browser.safari || b.headers.find("a").attr("tabIndex", -1),
                    c.event &&
                        b.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function (a) {
                            b._clickHandler.call(b, a, this), a.preventDefault();
                        });
            },
            _createIcons: function () {
                var b = this.options;
                b.icons &&
                    (a("<span></span>")
                        .addClass("ui-icon " + b.icons.header)
                        .prependTo(this.headers),
                    this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),
                    this.element.addClass("ui-accordion-icons"));
            },
            _destroyIcons: function () {
                this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons");
            },
            destroy: function () {
                var b = this.options;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                    this.headers
                        .unbind(".accordion")
                        .removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top")
                        .removeAttr("role")
                        .removeAttr("aria-expanded")
                        .removeAttr("aria-selected")
                        .removeAttr("tabIndex"),
                    this.headers.find("a").removeAttr("tabIndex"),
                    this._destroyIcons();
                var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
                return (b.autoHeight || b.fillHeight) && c.css("height", ""), a.Widget.prototype.destroy.call(this);
            },
            _setOption: function (b, c) {
                a.Widget.prototype._setOption.apply(this, arguments),
                    b == "active" && this.activate(c),
                    b == "icons" && (this._destroyIcons(), c && this._createIcons()),
                    b == "disabled" && this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled");
            },
            _keydown: function (b) {
                if (this.options.disabled || b.altKey || b.ctrlKey) return;
                var c = a.ui.keyCode,
                    d = this.headers.length,
                    e = this.headers.index(b.target),
                    f = !1;
                switch (b.keyCode) {
                    case c.RIGHT:
                    case c.DOWN:
                        f = this.headers[(e + 1) % d];
                        break;
                    case c.LEFT:
                    case c.UP:
                        f = this.headers[(e - 1 + d) % d];
                        break;
                    case c.SPACE:
                    case c.ENTER:
                        this._clickHandler({ target: b.target }, b.target), b.preventDefault();
                }
                return f ? (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), !1) : !0;
            },
            resize: function () {
                var b = this.options,
                    c;
                if (b.fillSpace) {
                    if (a.browser.msie) {
                        var d = this.element.parent().css("overflow");
                        this.element.parent().css("overflow", "hidden");
                    }
                    (c = this.element.parent().height()),
                        a.browser.msie && this.element.parent().css("overflow", d),
                        this.headers.each(function () {
                            c -= a(this).outerHeight(!0);
                        }),
                        this.headers
                            .next()
                            .each(function () {
                                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
                            })
                            .css("overflow", "auto");
                } else
                    b.autoHeight &&
                        ((c = 0),
                        this.headers
                            .next()
                            .each(function () {
                                c = Math.max(c, a(this).height("").height());
                            })
                            .height(c));
                return this;
            },
            activate: function (a) {
                this.options.active = a;
                var b = this._findActive(a)[0];
                return this._clickHandler({ target: b }, b), this;
            },
            _findActive: function (b) {
                return b ? (typeof b == "number" ? this.headers.filter(":eq(" + b + ")") : this.headers.not(this.headers.not(b))) : b === !1 ? a([]) : this.headers.filter(":eq(0)");
            },
            _clickHandler: function (b, c) {
                var d = this.options;
                if (d.disabled) return;
                if (!b.target) {
                    if (!d.collapsible) return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),
                        this.active.next().addClass("ui-accordion-content-active");
                    var e = this.active.next(),
                        f = { options: d, newHeader: a([]), oldHeader: d.active, newContent: a([]), oldContent: e },
                        g = (this.active = a([]));
                    this._toggle(g, e, f);
                    return;
                }
                var h = a(b.currentTarget || c),
                    i = h[0] === this.active[0];
                d.active = d.collapsible && i ? !1 : this.headers.index(h);
                if (this.running || (!d.collapsible && i)) return;
                var j = this.active,
                    g = h.next(),
                    e = this.active.next(),
                    f = { options: d, newHeader: i && d.collapsible ? a([]) : h, oldHeader: this.active, newContent: i && d.collapsible ? a([]) : g, oldContent: e },
                    k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
                (this.active = i ? a([]) : h),
                    this._toggle(g, e, f, i, k),
                    j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),
                    i ||
                        (h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),
                        h.next().addClass("ui-accordion-content-active"));
                return;
            },
            _toggle: function (b, c, d, e, f) {
                var g = this,
                    h = g.options;
                (g.toShow = b), (g.toHide = c), (g.data = d);
                var i = function () {
                    if (!g) return;
                    return g._completed.apply(g, arguments);
                };
                g._trigger("changestart", null, g.data), (g.running = c.size() === 0 ? b.size() : c.size());
                if (h.animated) {
                    var j = {};
                    h.collapsible && e ? (j = { toShow: a([]), toHide: c, complete: i, down: f, autoHeight: h.autoHeight || h.fillSpace }) : (j = { toShow: b, toHide: c, complete: i, down: f, autoHeight: h.autoHeight || h.fillSpace }),
                        h.proxied || (h.proxied = h.animated),
                        h.proxiedDuration || (h.proxiedDuration = h.duration),
                        (h.animated = a.isFunction(h.proxied) ? h.proxied(j) : h.proxied),
                        (h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(j) : h.proxiedDuration);
                    var k = a.ui.accordion.animations,
                        l = h.duration,
                        m = h.animated;
                    m && !k[m] && !a.easing[m] && (m = "slide"),
                        k[m] ||
                            (k[m] = function (a) {
                                this.slide(a, { easing: m, duration: l || 700 });
                            }),
                        k[m](j);
                } else h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);
                c.prev().attr({ "aria-expanded": "false", "aria-selected": "false", tabIndex: -1 }).blur(), b.prev().attr({ "aria-expanded": "true", "aria-selected": "true", tabIndex: 0 }).focus();
            },
            _completed: function (a) {
                this.running = a ? 0 : --this.running;
                if (this.running) return;
                this.options.clearStyle && this.toShow.add(this.toHide).css({ height: "", overflow: "" }),
                    this.toHide.removeClass("ui-accordion-content-active"),
                    this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className),
                    this._trigger("change", null, this.data);
            },
        }),
            a.extend(a.ui.accordion, {
                version: "1.8.22",
                animations: {
                    slide: function (b, c) {
                        b = a.extend({ easing: "swing", duration: 300 }, b, c);
                        if (!b.toHide.size()) {
                            b.toShow.animate({ height: "show", paddingTop: "show", paddingBottom: "show" }, b);
                            return;
                        }
                        if (!b.toShow.size()) {
                            b.toHide.animate({ height: "hide", paddingTop: "hide", paddingBottom: "hide" }, b);
                            return;
                        }
                        var d = b.toShow.css("overflow"),
                            e = 0,
                            f = {},
                            g = {},
                            h = ["height", "paddingTop", "paddingBottom"],
                            i,
                            j = b.toShow;
                        (i = j[0].style.width),
                            j.width(j.parent().width() - parseFloat(j.css("paddingLeft")) - parseFloat(j.css("paddingRight")) - (parseFloat(j.css("borderLeftWidth")) || 0) - (parseFloat(j.css("borderRightWidth")) || 0)),
                            a.each(h, function (c, d) {
                                g[d] = "hide";
                                var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/);
                                f[d] = { value: e[1], unit: e[2] || "px" };
                            }),
                            b.toShow.css({ height: 0, overflow: "hidden" }).show(),
                            b.toHide
                                .filter(":hidden")
                                .each(b.complete)
                                .end()
                                .filter(":visible")
                                .animate(g, {
                                    step: function (a, c) {
                                        c.prop == "height" && (e = c.end - c.start === 0 ? 0 : (c.now - c.start) / (c.end - c.start)), (b.toShow[0].style[c.prop] = e * f[c.prop].value + f[c.prop].unit);
                                    },
                                    duration: b.duration,
                                    easing: b.easing,
                                    complete: function () {
                                        b.autoHeight || b.toShow.css("height", ""), b.toShow.css({ width: i, overflow: d }), b.complete();
                                    },
                                });
                    },
                    bounceslide: function (a) {
                        this.slide(a, { easing: a.down ? "easeOutBounce" : "swing", duration: a.down ? 1e3 : 200 });
                    },
                },
            });
    })(jQuery),
    (function (a, b) {
        var c = 0;
        a.widget("ui.autocomplete", {
            options: { appendTo: "body", autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null },
            pending: 0,
            _create: function () {
                var b = this,
                    c = this.element[0].ownerDocument,
                    d;
                (this.isMultiLine = this.element.is("textarea")),
                    this.element
                        .addClass("ui-autocomplete-input")
                        .attr("autocomplete", "off")
                        .attr({ role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true" })
                        .bind("keydown.autocomplete", function (c) {
                            if (b.options.disabled || b.element.propAttr("readOnly")) return;
                            d = !1;
                            var e = a.ui.keyCode;
                            switch (c.keyCode) {
                                case e.PAGE_UP:
                                    b._move("previousPage", c);
                                    break;
                                case e.PAGE_DOWN:
                                    b._move("nextPage", c);
                                    break;
                                case e.UP:
                                    b._keyEvent("previous", c);
                                    break;
                                case e.DOWN:
                                    b._keyEvent("next", c);
                                    break;
                                case e.ENTER:
                                case e.NUMPAD_ENTER:
                                    b.menu.active && ((d = !0), c.preventDefault());
                                case e.TAB:
                                    if (!b.menu.active) return;
                                    b.menu.select(c);
                                    break;
                                case e.ESCAPE:
                                    b.element.val(b.term), b.close(c);
                                    break;
                                default:
                                    clearTimeout(b.searching),
                                        (b.searching = setTimeout(function () {
                                            b.term != b.element.val() && ((b.selectedItem = null), b.search(null, c));
                                        }, b.options.delay));
                            }
                        })
                        .bind("keypress.autocomplete", function (a) {
                            d && ((d = !1), a.preventDefault());
                        })
                        .bind("focus.autocomplete", function () {
                            if (b.options.disabled) return;
                            (b.selectedItem = null), (b.previous = b.element.val());
                        })
                        .bind("blur.autocomplete", function (a) {
                            if (b.options.disabled) return;
                            clearTimeout(b.searching),
                                (b.closing = setTimeout(function () {
                                    b.close(a), b._change(a);
                                }, 150));
                        }),
                    this._initSource(),
                    (this.menu = a("<ul></ul>")
                        .addClass("ui-autocomplete")
                        .appendTo(a(this.options.appendTo || "body", c)[0])
                        .mousedown(function (c) {
                            var d = b.menu.element[0];
                            a(c.target).closest(".ui-menu-item").length ||
                                setTimeout(function () {
                                    a(document).one("mousedown", function (c) {
                                        c.target !== b.element[0] && c.target !== d && !a.ui.contains(d, c.target) && b.close();
                                    });
                                }, 1),
                                setTimeout(function () {
                                    clearTimeout(b.closing);
                                }, 13);
                        })
                        .menu({
                            focus: function (a, c) {
                                var d = c.item.data("item.autocomplete");
                                !1 !== b._trigger("focus", a, { item: d }) && /^key/.test(a.originalEvent.type) && b.element.val(d.value);
                            },
                            selected: function (a, d) {
                                var e = d.item.data("item.autocomplete"),
                                    f = b.previous;
                                b.element[0] !== c.activeElement &&
                                    (b.element.focus(),
                                    (b.previous = f),
                                    setTimeout(function () {
                                        (b.previous = f), (b.selectedItem = e);
                                    }, 1)),
                                    !1 !== b._trigger("select", a, { item: e }) && b.element.val(e.value),
                                    (b.term = b.element.val()),
                                    b.close(a),
                                    (b.selectedItem = e);
                            },
                            blur: function (a, c) {
                                b.menu.element.is(":visible") && b.element.val() !== b.term && b.element.val(b.term);
                            },
                        })
                        .zIndex(this.element.zIndex() + 1)
                        .css({ top: 0, left: 0 })
                        .hide()
                        .data("menu")),
                    a.fn.bgiframe && this.menu.element.bgiframe(),
                    (b.beforeunloadHandler = function () {
                        b.element.removeAttr("autocomplete");
                    }),
                    a(window).bind("beforeunload", b.beforeunloadHandler);
            },
            destroy: function () {
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),
                    this.menu.element.remove(),
                    a(window).unbind("beforeunload", this.beforeunloadHandler),
                    a.Widget.prototype.destroy.call(this);
            },
            _setOption: function (b, c) {
                a.Widget.prototype._setOption.apply(this, arguments),
                    b === "source" && this._initSource(),
                    b === "appendTo" && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]),
                    b === "disabled" && c && this.xhr && this.xhr.abort();
            },
            _initSource: function () {
                var b = this,
                    c,
                    d;
                a.isArray(this.options.source)
                    ? ((c = this.options.source),
                      (this.source = function (b, d) {
                          d(a.ui.autocomplete.filter(c, b.term));
                      }))
                    : typeof this.options.source == "string"
                    ? ((d = this.options.source),
                      (this.source = function (c, e) {
                          b.xhr && b.xhr.abort(),
                              (b.xhr = a.ajax({
                                  url: d,
                                  data: c,
                                  dataType: "json",
                                  success: function (a, b) {
                                      e(a);
                                  },
                                  error: function () {
                                      e([]);
                                  },
                              }));
                      }))
                    : (this.source = this.options.source);
            },
            search: function (a, b) {
                (a = a != null ? a : this.element.val()), (this.term = this.element.val());
                if (a.length < this.options.minLength) return this.close(b);
                clearTimeout(this.closing);
                if (this._trigger("search", b) === !1) return;
                return this._search(a);
            },
            _search: function (a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({ term: a }, this._response());
            },
            _response: function () {
                var a = this,
                    b = ++c;
                return function (d) {
                    b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading");
                };
            },
            __response: function (a) {
                !this.options.disabled && a && a.length ? ((a = this._normalize(a)), this._suggest(a), this._trigger("open")) : this.close();
            },
            close: function (a) {
                clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a));
            },
            _change: function (a) {
                this.previous !== this.element.val() && this._trigger("change", a, { item: this.selectedItem });
            },
            _normalize: function (b) {
                return b.length && b[0].label && b[0].value
                    ? b
                    : a.map(b, function (b) {
                          return typeof b == "string" ? { label: b, value: b } : a.extend({ label: b.label || b.value, value: b.value || b.label }, b);
                      });
            },
            _suggest: function (b) {
                var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(c, b),
                    this.menu.deactivate(),
                    this.menu.refresh(),
                    c.show(),
                    this._resizeMenu(),
                    c.position(a.extend({ of: this.element }, this.options.position)),
                    this.options.autoFocus && this.menu.next(new a.Event("mouseover"));
            },
            _resizeMenu: function () {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
            },
            _renderMenu: function (b, c) {
                var d = this;
                a.each(c, function (a, c) {
                    d._renderItem(b, c);
                });
            },
            _renderItem: function (b, c) {
                return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b);
            },
            _move: function (a, b) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, b);
                    return;
                }
                if ((this.menu.first() && /^previous/.test(a)) || (this.menu.last() && /^next/.test(a))) {
                    this.element.val(this.term), this.menu.deactivate();
                    return;
                }
                this.menu[a](b);
            },
            widget: function () {
                return this.menu.element;
            },
            _keyEvent: function (a, b) {
                if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault();
            },
        }),
            a.extend(a.ui.autocomplete, {
                escapeRegex: function (a) {
                    return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                },
                filter: function (b, c) {
                    var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                    return a.grep(b, function (a) {
                        return d.test(a.label || a.value || a);
                    });
                },
            });
    })(jQuery),
    (function (a) {
        a.widget("ui.menu", {
            _create: function () {
                var b = this;
                this.element
                    .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
                    .attr({ role: "listbox", "aria-activedescendant": "ui-active-menuitem" })
                    .click(function (c) {
                        if (!a(c.target).closest(".ui-menu-item a").length) return;
                        c.preventDefault(), b.select(c);
                    }),
                    this.refresh();
            },
            refresh: function () {
                var b = this,
                    c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
                c.children("a")
                    .addClass("ui-corner-all")
                    .attr("tabindex", -1)
                    .mouseenter(function (c) {
                        b.activate(c, a(this).parent());
                    })
                    .mouseleave(function () {
                        b.deactivate();
                    });
            },
            activate: function (a, b) {
                this.deactivate();
                if (this.hasScroll()) {
                    var c = b.offset().top - this.element.offset().top,
                        d = this.element.scrollTop(),
                        e = this.element.height();
                    c < 0 ? this.element.scrollTop(d + c) : c >= e && this.element.scrollTop(d + c - e + b.height());
                }
                (this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end()), this._trigger("focus", a, { item: b });
            },
            deactivate: function () {
                if (!this.active) return;
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), (this.active = null);
            },
            next: function (a) {
                this.move("next", ".ui-menu-item:first", a);
            },
            previous: function (a) {
                this.move("prev", ".ui-menu-item:last", a);
            },
            first: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length;
            },
            last: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length;
            },
            move: function (a, b, c) {
                if (!this.active) {
                    this.activate(c, this.element.children(b));
                    return;
                }
                var d = this.active[a + "All"](".ui-menu-item").eq(0);
                d.length ? this.activate(c, d) : this.activate(c, this.element.children(b));
            },
            nextPage: function (b) {
                if (this.hasScroll()) {
                    if (!this.active || this.last()) {
                        this.activate(b, this.element.children(".ui-menu-item:first"));
                        return;
                    }
                    var c = this.active.offset().top,
                        d = this.element.height(),
                        e = this.element.children(".ui-menu-item").filter(function () {
                            var b = a(this).offset().top - c - d + a(this).height();
                            return b < 10 && b > -10;
                        });
                    e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e);
                } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"));
            },
            previousPage: function (b) {
                if (this.hasScroll()) {
                    if (!this.active || this.first()) {
                        this.activate(b, this.element.children(".ui-menu-item:last"));
                        return;
                    }
                    var c = this.active.offset().top,
                        d = this.element.height(),
                        e = this.element.children(".ui-menu-item").filter(function () {
                            var b = a(this).offset().top - c + d - a(this).height();
                            return b < 10 && b > -10;
                        });
                    e.length || (e = this.element.children(".ui-menu-item:first")), this.activate(b, e);
                } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"));
            },
            hasScroll: function () {
                return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight");
            },
            select: function (a) {
                this._trigger("selected", a, { item: this.active });
            },
        });
    })(jQuery),
    (function (a, b) {
        var c,
            d,
            e,
            f,
            g = "ui-button ui-widget ui-state-default ui-corner-all",
            h = "ui-state-hover ui-state-active ",
            i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            j = function () {
                var b = a(this).find(":ui-button");
                setTimeout(function () {
                    b.button("refresh");
                }, 1);
            },
            k = function (b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                return (
                    c &&
                        (d
                            ? (e = a(d).find("[name='" + c + "']"))
                            : (e = a("[name='" + c + "']", b.ownerDocument).filter(function () {
                                  return !this.form;
                              }))),
                    e
                );
            };
        a.widget("ui.button", {
            options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
            _create: function () {
                this.element.closest("form").unbind("reset.button").bind("reset.button", j),
                    typeof this.options.disabled != "boolean" ? (this.options.disabled = !!this.element.propAttr("disabled")) : this.element.propAttr("disabled", this.options.disabled),
                    this._determineButtonType(),
                    (this.hasTitle = !!this.buttonElement.attr("title"));
                var b = this,
                    h = this.options,
                    i = this.type === "checkbox" || this.type === "radio",
                    l = "ui-state-hover" + (i ? "" : " ui-state-active"),
                    m = "ui-state-focus";
                h.label === null && (h.label = this.buttonElement.html()),
                    this.buttonElement
                        .addClass(g)
                        .attr("role", "button")
                        .bind("mouseenter.button", function () {
                            if (h.disabled) return;
                            a(this).addClass("ui-state-hover"), this === c && a(this).addClass("ui-state-active");
                        })
                        .bind("mouseleave.button", function () {
                            if (h.disabled) return;
                            a(this).removeClass(l);
                        })
                        .bind("click.button", function (a) {
                            h.disabled && (a.preventDefault(), a.stopImmediatePropagation());
                        }),
                    this.element
                        .bind("focus.button", function () {
                            b.buttonElement.addClass(m);
                        })
                        .bind("blur.button", function () {
                            b.buttonElement.removeClass(m);
                        }),
                    i &&
                        (this.element.bind("change.button", function () {
                            if (f) return;
                            b.refresh();
                        }),
                        this.buttonElement
                            .bind("mousedown.button", function (a) {
                                if (h.disabled) return;
                                (f = !1), (d = a.pageX), (e = a.pageY);
                            })
                            .bind("mouseup.button", function (a) {
                                if (h.disabled) return;
                                if (d !== a.pageX || e !== a.pageY) f = !0;
                            })),
                    this.type === "checkbox"
                        ? this.buttonElement.bind("click.button", function () {
                              if (h.disabled || f) return !1;
                              a(this).toggleClass("ui-state-active"), b.buttonElement.attr("aria-pressed", b.element[0].checked);
                          })
                        : this.type === "radio"
                        ? this.buttonElement.bind("click.button", function () {
                              if (h.disabled || f) return !1;
                              a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                              var c = b.element[0];
                              k(c)
                                  .not(c)
                                  .map(function () {
                                      return a(this).button("widget")[0];
                                  })
                                  .removeClass("ui-state-active")
                                  .attr("aria-pressed", "false");
                          })
                        : (this.buttonElement
                              .bind("mousedown.button", function () {
                                  if (h.disabled) return !1;
                                  a(this).addClass("ui-state-active"),
                                      (c = this),
                                      a(document).one("mouseup", function () {
                                          c = null;
                                      });
                              })
                              .bind("mouseup.button", function () {
                                  if (h.disabled) return !1;
                                  a(this).removeClass("ui-state-active");
                              })
                              .bind("keydown.button", function (b) {
                                  if (h.disabled) return !1;
                                  (b.keyCode == a.ui.keyCode.SPACE || b.keyCode == a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active");
                              })
                              .bind("keyup.button", function () {
                                  a(this).removeClass("ui-state-active");
                              }),
                          this.buttonElement.is("a") &&
                              this.buttonElement.keyup(function (b) {
                                  b.keyCode === a.ui.keyCode.SPACE && a(this).click();
                              })),
                    this._setOption("disabled", h.disabled),
                    this._resetButton();
            },
            _determineButtonType: function () {
                this.element.is(":checkbox") ? (this.type = "checkbox") : this.element.is(":radio") ? (this.type = "radio") : this.element.is("input") ? (this.type = "input") : (this.type = "button");
                if (this.type === "checkbox" || this.type === "radio") {
                    var a = this.element.parents().filter(":last"),
                        b = "label[for='" + this.element.attr("id") + "']";
                    (this.buttonElement = a.find(b)),
                        this.buttonElement.length || ((a = a.length ? a.siblings() : this.element.siblings()), (this.buttonElement = a.filter(b)), this.buttonElement.length || (this.buttonElement = a.find(b))),
                        this.element.addClass("ui-helper-hidden-accessible");
                    var c = this.element.is(":checked");
                    c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", c);
                } else this.buttonElement = this.element;
            },
            widget: function () {
                return this.buttonElement;
            },
            destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible"),
                    this.buttonElement
                        .removeClass(g + " " + h + " " + i)
                        .removeAttr("role")
                        .removeAttr("aria-pressed")
                        .html(this.buttonElement.find(".ui-button-text").html()),
                    this.hasTitle || this.buttonElement.removeAttr("title"),
                    a.Widget.prototype.destroy.call(this);
            },
            _setOption: function (b, c) {
                a.Widget.prototype._setOption.apply(this, arguments);
                if (b === "disabled") {
                    c ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                    return;
                }
                this._resetButton();
            },
            refresh: function () {
                var b = this.element.is(":disabled");
                b !== this.options.disabled && this._setOption("disabled", b),
                    this.type === "radio"
                        ? k(this.element[0]).each(function () {
                              a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
                          })
                        : this.type === "checkbox" &&
                          (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
            },
            _resetButton: function () {
                if (this.type === "input") {
                    this.options.label && this.element.val(this.options.label);
                    return;
                }
                var b = this.buttonElement.removeClass(i),
                    c = a("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                    d = this.options.icons,
                    e = d.primary && d.secondary,
                    f = [];
                d.primary || d.secondary
                    ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")),
                      d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"),
                      d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"),
                      this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", c)))
                    : f.push("ui-button-text-only"),
                    b.addClass(f.join(" "));
            },
        }),
            a.widget("ui.buttonset", {
                options: { items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)" },
                _create: function () {
                    this.element.addClass("ui-buttonset");
                },
                _init: function () {
                    this.refresh();
                },
                _setOption: function (b, c) {
                    b === "disabled" && this.buttons.button("option", b, c), a.Widget.prototype._setOption.apply(this, arguments);
                },
                refresh: function () {
                    var b = this.element.css("direction") === "rtl";
                    this.buttons = this.element
                        .find(this.options.items)
                        .filter(":ui-button")
                        .button("refresh")
                        .end()
                        .not(":ui-button")
                        .button()
                        .end()
                        .map(function () {
                            return a(this).button("widget")[0];
                        })
                        .removeClass("ui-corner-all ui-corner-left ui-corner-right")
                        .filter(":first")
                        .addClass(b ? "ui-corner-right" : "ui-corner-left")
                        .end()
                        .filter(":last")
                        .addClass(b ? "ui-corner-left" : "ui-corner-right")
                        .end()
                        .end();
                },
                destroy: function () {
                    this.element.removeClass("ui-buttonset"),
                        this.buttons
                            .map(function () {
                                return a(this).button("widget")[0];
                            })
                            .removeClass("ui-corner-left ui-corner-right")
                            .end()
                            .button("destroy"),
                        a.Widget.prototype.destroy.call(this);
                },
            });
    })(jQuery),
    (function ($, undefined) {
        function Datepicker() {
            (this.debug = !1),
                (this._curInst = null),
                (this._keyEvent = !1),
                (this._disabledInputs = []),
                (this._datepickerShowing = !1),
                (this._inDialog = !1),
                (this._mainDivId = "ui-datepicker-div"),
                (this._inlineClass = "ui-datepicker-inline"),
                (this._appendClass = "ui-datepicker-append"),
                (this._triggerClass = "ui-datepicker-trigger"),
                (this._dialogClass = "ui-datepicker-dialog"),
                (this._disableClass = "ui-datepicker-disabled"),
                (this._unselectableClass = "ui-datepicker-unselectable"),
                (this._currentClass = "ui-datepicker-current-day"),
                (this._dayOverClass = "ui-datepicker-days-cell-over"),
                (this.regional = []),
                (this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: "",
                }),
                (this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1,
                }),
                $.extend(this._defaults, this.regional[""]),
                (this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')));
        }
        function bindHover(a) {
            var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return a
                .bind("mouseout", function (a) {
                    var c = $(a.target).closest(b);
                    if (!c.length) return;
                    c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
                })
                .bind("mouseover", function (c) {
                    var d = $(c.target).closest(b);
                    if ($.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || !d.length) return;
                    d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                        d.addClass("ui-state-hover"),
                        d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"),
                        d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover");
                });
        }
        function extendRemove(a, b) {
            $.extend(a, b);
            for (var c in b) if (b[c] == null || b[c] == undefined) a[c] = b[c];
            return a;
        }
        function isArray(a) {
            return a && (($.browser.safari && typeof a == "object" && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/)));
        }
        $.extend($.ui, { datepicker: { version: "1.8.22" } });
        var PROP_NAME = "datepicker",
            dpuuid = new Date().getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function () {
                this.debug && console.log.apply("", arguments);
            },
            _widgetDatepicker: function () {
                return this.dpDiv;
            },
            setDefaults: function (a) {
                return extendRemove(this._defaults, a || {}), this;
            },
            _attachDatepicker: function (target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue);
                        } catch (err) {
                            inlineSettings[attrName] = attrValue;
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = nodeName == "div" || nodeName == "span";
                target.id || ((this.uuid += 1), (target.id = "dp" + this.uuid));
                var inst = this._newInst($(target), inline);
                (inst.settings = $.extend({}, settings || {}, inlineSettings || {})), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst);
            },
            _newInst: function (a, b) {
                var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: c,
                    input: a,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: b,
                    dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv,
                };
            },
            _connectDatepicker: function (a, b) {
                var c = $(a);
                (b.append = $([])), (b.trigger = $([]));
                if (c.hasClass(this.markerClassName)) return;
                this._attachments(c, b),
                    c
                        .addClass(this.markerClassName)
                        .keydown(this._doKeyDown)
                        .keypress(this._doKeyPress)
                        .keyup(this._doKeyUp)
                        .bind("setData.datepicker", function (a, c, d) {
                            b.settings[c] = d;
                        })
                        .bind("getData.datepicker", function (a, c) {
                            return this._get(b, c);
                        }),
                    this._autoSize(b),
                    $.data(a, PROP_NAME, b),
                    b.settings.disabled && this._disableDatepicker(a);
            },
            _attachments: function (a, b) {
                var c = this._get(b, "appendText"),
                    d = this._get(b, "isRTL");
                b.append && b.append.remove(), c && ((b.append = $('<span class="' + this._appendClass + '">' + c + "</span>")), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
                var e = this._get(b, "showOn");
                (e == "focus" || e == "both") && a.focus(this._showDatepicker);
                if (e == "button" || e == "both") {
                    var f = this._get(b, "buttonText"),
                        g = this._get(b, "buttonImage");
                    (b.trigger = $(
                        this._get(b, "buttonImageOnly")
                            ? $("<img/>").addClass(this._triggerClass).attr({ src: g, alt: f, title: f })
                            : $('<button type="button"></button>')
                                  .addClass(this._triggerClass)
                                  .html(g == "" ? f : $("<img/>").attr({ src: g, alt: f, title: f }))
                    )),
                        a[d ? "before" : "after"](b.trigger),
                        b.trigger.click(function () {
                            return (
                                $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0]
                                    ? $.datepicker._hideDatepicker()
                                    : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0]
                                    ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0]))
                                    : $.datepicker._showDatepicker(a[0]),
                                !1
                            );
                        });
                }
            },
            _autoSize: function (a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b = new Date(2009, 11, 20),
                        c = this._get(a, "dateFormat");
                    if (c.match(/[DM]/)) {
                        var d = function (a) {
                            var b = 0,
                                c = 0;
                            for (var d = 0; d < a.length; d++) a[d].length > b && ((b = a[d].length), (c = d));
                            return c;
                        };
                        b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay());
                    }
                    a.input.attr("size", this._formatDate(a, b).length);
                }
            },
            _inlineDatepicker: function (a, b) {
                var c = $(a);
                if (c.hasClass(this.markerClassName)) return;
                c
                    .addClass(this.markerClassName)
                    .append(b.dpDiv)
                    .bind("setData.datepicker", function (a, c, d) {
                        b.settings[c] = d;
                    })
                    .bind("getData.datepicker", function (a, c) {
                        return this._get(b, c);
                    }),
                    $.data(a, PROP_NAME, b),
                    this._setDate(b, this._getDefaultDate(b), !0),
                    this._updateDatepicker(b),
                    this._updateAlternate(b),
                    b.settings.disabled && this._disableDatepicker(a),
                    b.dpDiv.css("display", "block");
            },
            _dialogDatepicker: function (a, b, c, d, e) {
                var f = this._dialogInst;
                if (!f) {
                    this.uuid += 1;
                    var g = "dp" + this.uuid;
                    (this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>')),
                        this._dialogInput.keydown(this._doKeyDown),
                        $("body").append(this._dialogInput),
                        (f = this._dialogInst = this._newInst(this._dialogInput, !1)),
                        (f.settings = {}),
                        $.data(this._dialogInput[0], PROP_NAME, f);
                }
                extendRemove(f.settings, d || {}), (b = b && b.constructor == Date ? this._formatDate(f, b) : b), this._dialogInput.val(b), (this._pos = e ? (e.length ? e : [e.pageX, e.pageY]) : null);
                if (!this._pos) {
                    var h = document.documentElement.clientWidth,
                        i = document.documentElement.clientHeight,
                        j = document.documentElement.scrollLeft || document.body.scrollLeft,
                        k = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [h / 2 - 100 + j, i / 2 - 150 + k];
                }
                return (
                    this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                    (f.settings.onSelect = c),
                    (this._inDialog = !0),
                    this.dpDiv.addClass(this._dialogClass),
                    this._showDatepicker(this._dialogInput[0]),
                    $.blockUI && $.blockUI(this.dpDiv),
                    $.data(this._dialogInput[0], PROP_NAME, f),
                    this
                );
            },
            _destroyDatepicker: function (a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (!b.hasClass(this.markerClassName)) return;
                var d = a.nodeName.toLowerCase();
                $.removeData(a, PROP_NAME),
                    d == "input"
                        ? (c.append.remove(),
                          c.trigger.remove(),
                          b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp))
                        : (d == "div" || d == "span") && b.removeClass(this.markerClassName).empty();
            },
            _enableDatepicker: function (a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (!b.hasClass(this.markerClassName)) return;
                var d = a.nodeName.toLowerCase();
                if (d == "input")
                    (a.disabled = !1),
                        c.trigger
                            .filter("button")
                            .each(function () {
                                this.disabled = !1;
                            })
                            .end()
                            .filter("img")
                            .css({ opacity: "1.0", cursor: "" });
                else if (d == "div" || d == "span") {
                    var e = b.children("." + this._inlineClass);
                    e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
                }
                this._disabledInputs = $.map(this._disabledInputs, function (b) {
                    return b == a ? null : b;
                });
            },
            _disableDatepicker: function (a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (!b.hasClass(this.markerClassName)) return;
                var d = a.nodeName.toLowerCase();
                if (d == "input")
                    (a.disabled = !0),
                        c.trigger
                            .filter("button")
                            .each(function () {
                                this.disabled = !0;
                            })
                            .end()
                            .filter("img")
                            .css({ opacity: "0.5", cursor: "default" });
                else if (d == "div" || d == "span") {
                    var e = b.children("." + this._inlineClass);
                    e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
                }
                (this._disabledInputs = $.map(this._disabledInputs, function (b) {
                    return b == a ? null : b;
                })),
                    (this._disabledInputs[this._disabledInputs.length] = a);
            },
            _isDisabledDatepicker: function (a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] == a) return !0;
                return !1;
            },
            _getInst: function (a) {
                try {
                    return $.data(a, PROP_NAME);
                } catch (b) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function (a, b, c) {
                var d = this._getInst(a);
                if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? $.extend({}, $.datepicker._defaults) : d ? (b == "all" ? $.extend({}, d.settings) : this._get(d, b)) : null;
                var e = b || {};
                typeof b == "string" && ((e = {}), (e[b] = c));
                if (d) {
                    this._curInst == d && this._hideDatepicker();
                    var f = this._getDateDatepicker(a, !0),
                        g = this._getMinMaxDate(d, "min"),
                        h = this._getMinMaxDate(d, "max");
                    extendRemove(d.settings, e),
                        g !== null && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)),
                        h !== null && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)),
                        this._attachments($(a), d),
                        this._autoSize(d),
                        this._setDate(d, f),
                        this._updateAlternate(d),
                        this._updateDatepicker(d);
                }
            },
            _changeDatepicker: function (a, b, c) {
                this._optionDatepicker(a, b, c);
            },
            _refreshDatepicker: function (a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b);
            },
            _setDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
            },
            _getDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
            },
            _doKeyDown: function (a) {
                var b = $.datepicker._getInst(a.target),
                    c = !0,
                    d = b.dpDiv.is(".ui-datepicker-rtl");
                b._keyEvent = !0;
                if ($.datepicker._datepickerShowing)
                    switch (a.keyCode) {
                        case 9:
                            $.datepicker._hideDatepicker(), (c = !1);
                            break;
                        case 13:
                            var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
                            e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
                            var f = $.datepicker._get(b, "onSelect");
                            if (f) {
                                var g = $.datepicker._formatDate(b);
                                f.apply(b.input ? b.input[0] : null, [g, b]);
                            } else $.datepicker._hideDatepicker();
                            return !1;
                        case 27:
                            $.datepicker._hideDatepicker();
                            break;
                        case 33:
                            $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                            break;
                        case 34:
                            $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                            break;
                        case 35:
                            (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), (c = a.ctrlKey || a.metaKey);
                            break;
                        case 36:
                            (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), (c = a.ctrlKey || a.metaKey);
                            break;
                        case 37:
                            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"),
                                (c = a.ctrlKey || a.metaKey),
                                a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                            break;
                        case 38:
                            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), (c = a.ctrlKey || a.metaKey);
                            break;
                        case 39:
                            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"),
                                (c = a.ctrlKey || a.metaKey),
                                a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                            break;
                        case 40:
                            (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), (c = a.ctrlKey || a.metaKey);
                            break;
                        default:
                            c = !1;
                    }
                else a.keyCode == 36 && a.ctrlKey ? $.datepicker._showDatepicker(this) : (c = !1);
                c && (a.preventDefault(), a.stopPropagation());
            },
            _doKeyPress: function (a) {
                var b = $.datepicker._getInst(a.target);
                if ($.datepicker._get(b, "constrainInput")) {
                    var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
                        d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
                    return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1;
                }
            },
            _doKeyUp: function (a) {
                var b = $.datepicker._getInst(a.target);
                if (b.input.val() != b.lastVal)
                    try {
                        var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
                        c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b));
                    } catch (d) {
                        $.datepicker.log(d);
                    }
                return !0;
            },
            _showDatepicker: function (a) {
                (a = a.target || a), a.nodeName.toLowerCase() != "input" && (a = $("input", a.parentNode)[0]);
                if ($.datepicker._isDisabledDatepicker(a) || $.datepicker._lastInput == a) return;
                var b = $.datepicker._getInst(a);
                $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var c = $.datepicker._get(b, "beforeShow"),
                    d = c ? c.apply(a, [a, b]) : {};
                if (d === !1) return;
                extendRemove(b.settings, d),
                    (b.lastVal = null),
                    ($.datepicker._lastInput = a),
                    $.datepicker._setDateFromField(b),
                    $.datepicker._inDialog && (a.value = ""),
                    $.datepicker._pos || (($.datepicker._pos = $.datepicker._findPos(a)), ($.datepicker._pos[1] += a.offsetHeight));
                var e = !1;
                $(a)
                    .parents()
                    .each(function () {
                        return (e |= $(this).css("position") == "fixed"), !e;
                    }),
                    e && $.browser.opera && (($.datepicker._pos[0] -= document.documentElement.scrollLeft), ($.datepicker._pos[1] -= document.documentElement.scrollTop));
                var f = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
                ($.datepicker._pos = null),
                    b.dpDiv.empty(),
                    b.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
                    $.datepicker._updateDatepicker(b),
                    (f = $.datepicker._checkOffset(b, f, e)),
                    b.dpDiv.css({ position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute", display: "none", left: f.left + "px", top: f.top + "px" });
                if (!b.inline) {
                    var g = $.datepicker._get(b, "showAnim"),
                        h = $.datepicker._get(b, "duration"),
                        i = function () {
                            var a = b.dpDiv.find("iframe.ui-datepicker-cover");
                            if (!!a.length) {
                                var c = $.datepicker._getBorders(b.dpDiv);
                                a.css({ left: -c[0], top: -c[1], width: b.dpDiv.outerWidth(), height: b.dpDiv.outerHeight() });
                            }
                        };
                    b.dpDiv.zIndex($(a).zIndex() + 1),
                        ($.datepicker._datepickerShowing = !0),
                        $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i),
                        (!g || !h) && i(),
                        b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(),
                        ($.datepicker._curInst = b);
                }
            },
            _updateDatepicker: function (a) {
                var b = this;
                b.maxRows = 4;
                var c = $.datepicker._getBorders(a.dpDiv);
                (instActive = a), a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
                var d = a.dpDiv.find("iframe.ui-datepicker-cover");
                !d.length || d.css({ left: -c[0], top: -c[1], width: a.dpDiv.outerWidth(), height: a.dpDiv.outerHeight() }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var e = this._getNumberOfMonths(a),
                    f = e[1],
                    g = 17;
                a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                    f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"),
                    a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                    a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                    a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
                if (a.yearshtml) {
                    var h = a.yearshtml;
                    setTimeout(function () {
                        h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), (h = a.yearshtml = null);
                    }, 0);
                }
            },
            _getBorders: function (a) {
                var b = function (a) {
                    return { thin: 1, medium: 2, thick: 3 }[a] || a;
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))];
            },
            _checkOffset: function (a, b, c) {
                var d = a.dpDiv.outerWidth(),
                    e = a.dpDiv.outerHeight(),
                    f = a.input ? a.input.outerWidth() : 0,
                    g = a.input ? a.input.outerHeight() : 0,
                    h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
                    i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
                return (
                    (b.left -= this._get(a, "isRTL") ? d - f : 0),
                    (b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0),
                    (b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0),
                    (b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0)),
                    (b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0)),
                    b
                );
            },
            _findPos: function (a) {
                var b = this._getInst(a),
                    c = this._get(b, "isRTL");
                while (a && (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a))) a = a[c ? "previousSibling" : "nextSibling"];
                var d = $(a).offset();
                return [d.left, d.top];
            },
            _hideDatepicker: function (a) {
                var b = this._curInst;
                if (!b || (a && b != $.data(a, PROP_NAME))) return;
                if (this._datepickerShowing) {
                    var c = this._get(b, "showAnim"),
                        d = this._get(b, "duration"),
                        e = function () {
                            $.datepicker._tidyDialog(b);
                        };
                    $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv[c == "slideDown" ? "slideUp" : c == "fadeIn" ? "fadeOut" : "hide"](c ? d : null, e),
                        c || e(),
                        (this._datepickerShowing = !1);
                    var f = this._get(b, "onClose");
                    f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]),
                        (this._lastInput = null),
                        this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))),
                        (this._inDialog = !1);
                }
            },
            _tidyDialog: function (a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
            },
            _checkExternalClick: function (a) {
                if (!$.datepicker._curInst) return;
                var b = $(a.target),
                    c = $.datepicker._getInst(b[0]);
                ((b[0].id != $.datepicker._mainDivId &&
                    b.parents("#" + $.datepicker._mainDivId).length == 0 &&
                    !b.hasClass($.datepicker.markerClassName) &&
                    !b.closest("." + $.datepicker._triggerClass).length &&
                    $.datepicker._datepickerShowing &&
                    (!$.datepicker._inDialog || !$.blockUI)) ||
                    (b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c)) &&
                    $.datepicker._hideDatepicker();
            },
            _adjustDate: function (a, b, c) {
                var d = $(a),
                    e = this._getInst(d[0]);
                if (this._isDisabledDatepicker(d[0])) return;
                this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e);
            },
            _gotoToday: function (a) {
                var b = $(a),
                    c = this._getInst(b[0]);
                if (this._get(c, "gotoCurrent") && c.currentDay) (c.selectedDay = c.currentDay), (c.drawMonth = c.selectedMonth = c.currentMonth), (c.drawYear = c.selectedYear = c.currentYear);
                else {
                    var d = new Date();
                    (c.selectedDay = d.getDate()), (c.drawMonth = c.selectedMonth = d.getMonth()), (c.drawYear = c.selectedYear = d.getFullYear());
                }
                this._notifyChange(c), this._adjustDate(b);
            },
            _selectMonthYear: function (a, b, c) {
                var d = $(a),
                    e = this._getInst(d[0]);
                (e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10)), this._notifyChange(e), this._adjustDate(d);
            },
            _selectDay: function (a, b, c, d) {
                var e = $(a);
                if ($(d).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0])) return;
                var f = this._getInst(e[0]);
                (f.selectedDay = f.currentDay = $("a", d).html()), (f.selectedMonth = f.currentMonth = b), (f.selectedYear = f.currentYear = c), this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear));
            },
            _clearDate: function (a) {
                var b = $(a),
                    c = this._getInst(b[0]);
                this._selectDate(b, "");
            },
            _selectDate: function (a, b) {
                var c = $(a),
                    d = this._getInst(c[0]);
                (b = b != null ? b : this._formatDate(d)), d.input && d.input.val(b), this._updateAlternate(d);
                var e = this._get(d, "onSelect");
                e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"),
                    d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), (this._lastInput = d.input[0]), typeof d.input[0] != "object" && d.input.focus(), (this._lastInput = null));
            },
            _updateAlternate: function (a) {
                var b = this._get(a, "altField");
                if (b) {
                    var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                        d = this._getDate(a),
                        e = this.formatDate(c, d, this._getFormatConfig(a));
                    $(b).each(function () {
                        $(this).val(e);
                    });
                }
            },
            noWeekends: function (a) {
                var b = a.getDay();
                return [b > 0 && b < 6, ""];
            },
            iso8601Week: function (a) {
                var b = new Date(a.getTime());
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
            },
            parseDate: function (a, b, c) {
                if (a == null || b == null) throw "Invalid arguments";
                b = typeof b == "object" ? b.toString() : b + "";
                if (b == "") return null;
                var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                d = typeof d != "string" ? d : (new Date().getFullYear() % 100) + parseInt(d, 10);
                var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = -1,
                    j = -1,
                    k = -1,
                    l = -1,
                    m = !1,
                    n = function (b) {
                        var c = s + 1 < a.length && a.charAt(s + 1) == b;
                        return c && s++, c;
                    },
                    o = function (a) {
                        var c = n(a),
                            d = a == "@" ? 14 : a == "!" ? 20 : a == "y" && c ? 4 : a == "o" ? 3 : 2,
                            e = new RegExp("^\\d{1," + d + "}"),
                            f = b.substring(r).match(e);
                        if (!f) throw "Missing number at position " + r;
                        return (r += f[0].length), parseInt(f[0], 10);
                    },
                    p = function (a, c, d) {
                        var e = $.map(n(a) ? d : c, function (a, b) {
                                return [[b, a]];
                            }).sort(function (a, b) {
                                return -(a[1].length - b[1].length);
                            }),
                            f = -1;
                        $.each(e, function (a, c) {
                            var d = c[1];
                            if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) return (f = c[0]), (r += d.length), !1;
                        });
                        if (f != -1) return f + 1;
                        throw "Unknown name at position " + r;
                    },
                    q = function () {
                        if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r;
                        r++;
                    },
                    r = 0;
                for (var s = 0; s < a.length; s++)
                    if (m) a.charAt(s) == "'" && !n("'") ? (m = !1) : q();
                    else
                        switch (a.charAt(s)) {
                            case "d":
                                k = o("d");
                                break;
                            case "D":
                                p("D", e, f);
                                break;
                            case "o":
                                l = o("o");
                                break;
                            case "m":
                                j = o("m");
                                break;
                            case "M":
                                j = p("M", g, h);
                                break;
                            case "y":
                                i = o("y");
                                break;
                            case "@":
                                var t = new Date(o("@"));
                                (i = t.getFullYear()), (j = t.getMonth() + 1), (k = t.getDate());
                                break;
                            case "!":
                                var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                                (i = t.getFullYear()), (j = t.getMonth() + 1), (k = t.getDate());
                                break;
                            case "'":
                                n("'") ? q() : (m = !0);
                                break;
                            default:
                                q();
                        }
                if (r < b.length) throw "Extra/unparsed characters found in date: " + b.substring(r);
                i == -1 ? (i = new Date().getFullYear()) : i < 100 && (i += new Date().getFullYear() - (new Date().getFullYear() % 100) + (i <= d ? 0 : -100));
                if (l > -1) {
                    (j = 1), (k = l);
                    do {
                        var u = this._getDaysInMonth(i, j - 1);
                        if (k <= u) break;
                        j++, (k -= u);
                    } while (!0);
                }
                var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
                if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date";
                return t;
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
            formatDate: function (a, b, c) {
                if (!b) return "";
                var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    e = (c ? c.dayNames : null) || this._defaults.dayNames,
                    f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    g = (c ? c.monthNames : null) || this._defaults.monthNames,
                    h = function (b) {
                        var c = m + 1 < a.length && a.charAt(m + 1) == b;
                        return c && m++, c;
                    },
                    i = function (a, b, c) {
                        var d = "" + b;
                        if (h(a)) while (d.length < c) d = "0" + d;
                        return d;
                    },
                    j = function (a, b, c, d) {
                        return h(a) ? d[b] : c[b];
                    },
                    k = "",
                    l = !1;
                if (b)
                    for (var m = 0; m < a.length; m++)
                        if (l) a.charAt(m) == "'" && !h("'") ? (l = !1) : (k += a.charAt(m));
                        else
                            switch (a.charAt(m)) {
                                case "d":
                                    k += i("d", b.getDate(), 2);
                                    break;
                                case "D":
                                    k += j("D", b.getDay(), d, e);
                                    break;
                                case "o":
                                    k += i("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    k += i("m", b.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    k += j("M", b.getMonth(), f, g);
                                    break;
                                case "y":
                                    k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + (b.getYear() % 100);
                                    break;
                                case "@":
                                    k += b.getTime();
                                    break;
                                case "!":
                                    k += b.getTime() * 1e4 + this._ticksTo1970;
                                    break;
                                case "'":
                                    h("'") ? (k += "'") : (l = !0);
                                    break;
                                default:
                                    k += a.charAt(m);
                            }
                return k;
            },
            _possibleChars: function (a) {
                var b = "",
                    c = !1,
                    d = function (b) {
                        var c = e + 1 < a.length && a.charAt(e + 1) == b;
                        return c && e++, c;
                    };
                for (var e = 0; e < a.length; e++)
                    if (c) a.charAt(e) == "'" && !d("'") ? (c = !1) : (b += a.charAt(e));
                    else
                        switch (a.charAt(e)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                b += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                d("'") ? (b += "'") : (c = !0);
                                break;
                            default:
                                b += a.charAt(e);
                        }
                return b;
            },
            _get: function (a, b) {
                return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
            },
            _setDateFromField: function (a, b) {
                if (a.input.val() == a.lastVal) return;
                var c = this._get(a, "dateFormat"),
                    d = (a.lastVal = a.input ? a.input.val() : null),
                    e,
                    f;
                e = f = this._getDefaultDate(a);
                var g = this._getFormatConfig(a);
                try {
                    e = this.parseDate(c, d, g) || f;
                } catch (h) {
                    this.log(h), (d = b ? "" : d);
                }
                (a.selectedDay = e.getDate()),
                    (a.drawMonth = a.selectedMonth = e.getMonth()),
                    (a.drawYear = a.selectedYear = e.getFullYear()),
                    (a.currentDay = d ? e.getDate() : 0),
                    (a.currentMonth = d ? e.getMonth() : 0),
                    (a.currentYear = d ? e.getFullYear() : 0),
                    this._adjustInstDate(a);
            },
            _getDefaultDate: function (a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
            },
            _determineDate: function (a, b, c) {
                var d = function (a) {
                        var b = new Date();
                        return b.setDate(b.getDate() + a), b;
                    },
                    e = function (b) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a));
                        } catch (c) {}
                        var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date(),
                            e = d.getFullYear(),
                            f = d.getMonth(),
                            g = d.getDate(),
                            h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                            i = h.exec(b);
                        while (i) {
                            switch (i[2] || "d") {
                                case "d":
                                case "D":
                                    g += parseInt(i[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    g += parseInt(i[1], 10) * 7;
                                    break;
                                case "m":
                                case "M":
                                    (f += parseInt(i[1], 10)), (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
                                    break;
                                case "y":
                                case "Y":
                                    (e += parseInt(i[1], 10)), (g = Math.min(g, $.datepicker._getDaysInMonth(e, f)));
                            }
                            i = h.exec(b);
                        }
                        return new Date(e, f, g);
                    },
                    f = b == null || b === "" ? c : typeof b == "string" ? e(b) : typeof b == "number" ? (isNaN(b) ? c : d(b)) : new Date(b.getTime());
                return (f = f && f.toString() == "Invalid Date" ? c : f), f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f);
            },
            _daylightSavingAdjust: function (a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
            },
            _setDate: function (a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
                (a.selectedDay = a.currentDay = g.getDate()),
                    (a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth()),
                    (a.drawYear = a.selectedYear = a.currentYear = g.getFullYear()),
                    (e != a.selectedMonth || f != a.selectedYear) && !c && this._notifyChange(a),
                    this._adjustInstDate(a),
                    a.input && a.input.val(d ? "" : this._formatDate(a));
            },
            _getDate: function (a) {
                var b = !a.currentYear || (a.input && a.input.val() == "") ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b;
            },
            _attachHandlers: function (a) {
                var b = this._get(a, "stepMonths"),
                    c = "#" + a.id;
                a.dpDiv.find("[data-handler]").map(function () {
                    var a = {
                        prev: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M");
                        },
                        next: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M");
                        },
                        hide: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
                        },
                        today: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c);
                        },
                        selectDay: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                        },
                        selectMonth: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1;
                        },
                        selectYear: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1;
                        },
                    };
                    $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")]);
                });
            },
            _generateHTML: function (a) {
                var b = new Date();
                b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
                var c = this._get(a, "isRTL"),
                    d = this._get(a, "showButtonPanel"),
                    e = this._get(a, "hideIfNoPrevNext"),
                    f = this._get(a, "navigationAsDateFormat"),
                    g = this._getNumberOfMonths(a),
                    h = this._get(a, "showCurrentAtPos"),
                    i = this._get(a, "stepMonths"),
                    j = g[0] != 1 || g[1] != 1,
                    k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    l = this._getMinMaxDate(a, "min"),
                    m = this._getMinMaxDate(a, "max"),
                    n = a.drawMonth - h,
                    o = a.drawYear;
                n < 0 && ((n += 12), o--);
                if (m) {
                    var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
                    p = l && p < l ? l : p;
                    while (this._daylightSavingAdjust(new Date(o, n, 1)) > p) n--, n < 0 && ((n = 11), o--);
                }
                (a.drawMonth = n), (a.drawYear = o);
                var q = this._get(a, "prevText");
                q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
                var r = this._canAdjustMonth(a, -1, o, n)
                        ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>"
                        : e
                        ? ""
                        : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
                    s = this._get(a, "nextText");
                s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
                var t = this._canAdjustMonth(a, 1, o, n)
                        ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>"
                        : e
                        ? ""
                        : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
                    u = this._get(a, "currentText"),
                    v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
                u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
                var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>",
                    x = d
                        ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
                          (c ? w : "") +
                          (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") +
                          (c ? "" : w) +
                          "</div>"
                        : "",
                    y = parseInt(this._get(a, "firstDay"), 10);
                y = isNaN(y) ? 0 : y;
                var z = this._get(a, "showWeek"),
                    A = this._get(a, "dayNames"),
                    B = this._get(a, "dayNamesShort"),
                    C = this._get(a, "dayNamesMin"),
                    D = this._get(a, "monthNames"),
                    E = this._get(a, "monthNamesShort"),
                    F = this._get(a, "beforeShowDay"),
                    G = this._get(a, "showOtherMonths"),
                    H = this._get(a, "selectOtherMonths"),
                    I = this._get(a, "calculateWeek") || this.iso8601Week,
                    J = this._getDefaultDate(a),
                    K = "";
                for (var L = 0; L < g[0]; L++) {
                    var M = "";
                    this.maxRows = 4;
                    for (var N = 0; N < g[1]; N++) {
                        var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
                            P = " ui-corner-all",
                            Q = "";
                        if (j) {
                            Q += '<div class="ui-datepicker-group';
                            if (g[1] > 1)
                                switch (N) {
                                    case 0:
                                        (Q += " ui-datepicker-group-first"), (P = " ui-corner-" + (c ? "right" : "left"));
                                        break;
                                    case g[1] - 1:
                                        (Q += " ui-datepicker-group-last"), (P = " ui-corner-" + (c ? "left" : "right"));
                                        break;
                                    default:
                                        (Q += " ui-datepicker-group-middle"), (P = "");
                                }
                            Q += '">';
                        }
                        Q +=
                            '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
                            P +
                            '">' +
                            (/all|left/.test(P) && L == 0 ? (c ? t : r) : "") +
                            (/all|right/.test(P) && L == 0 ? (c ? r : t) : "") +
                            this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) +
                            '</div><table class="ui-datepicker-calendar"><thead>' +
                            "<tr>";
                        var R = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                        for (var S = 0; S < 7; S++) {
                            var T = (S + y) % 7;
                            R += "<th" + ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[T] + '">' + C[T] + "</span></th>";
                        }
                        Q += R + "</tr></thead><tbody>";
                        var U = this._getDaysInMonth(o, n);
                        o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, U));
                        var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
                            W = Math.ceil((V + U) / 7),
                            X = j ? (this.maxRows > W ? this.maxRows : W) : W;
                        this.maxRows = X;
                        var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));
                        for (var Z = 0; Z < X; Z++) {
                            Q += "<tr>";
                            var _ = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(Y) + "</td>" : "";
                            for (var S = 0; S < 7; S++) {
                                var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ""],
                                    bb = Y.getMonth() != n,
                                    bc = (bb && !H) || !ba[0] || (l && Y < l) || (m && Y > m);
                                (_ +=
                                    '<td class="' +
                                    ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                                    (bb ? " ui-datepicker-other-month" : "") +
                                    ((Y.getTime() == O.getTime() && n == a.selectedMonth && a._keyEvent) || (J.getTime() == Y.getTime() && J.getTime() == O.getTime()) ? " " + this._dayOverClass : "") +
                                    (bc ? " " + this._unselectableClass + " ui-state-disabled" : "") +
                                    (bb && !G ? "" : " " + ba[1] + (Y.getTime() == k.getTime() ? " " + this._currentClass : "") + (Y.getTime() == b.getTime() ? " ui-datepicker-today" : "")) +
                                    '"' +
                                    ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") +
                                    (bc ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Y.getMonth() + '" data-year="' + Y.getFullYear() + '"') +
                                    ">" +
                                    (bb && !G
                                        ? "&#xa0;"
                                        : bc
                                        ? '<span class="ui-state-default">' + Y.getDate() + "</span>"
                                        : '<a class="ui-state-default' +
                                          (Y.getTime() == b.getTime() ? " ui-state-highlight" : "") +
                                          (Y.getTime() == k.getTime() ? " ui-state-active" : "") +
                                          (bb ? " ui-priority-secondary" : "") +
                                          '" href="#">' +
                                          Y.getDate() +
                                          "</a>") +
                                    "</td>"),
                                    Y.setDate(Y.getDate() + 1),
                                    (Y = this._daylightSavingAdjust(Y));
                            }
                            Q += _ + "</tr>";
                        }
                        n++, n > 11 && ((n = 0), o++), (Q += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && N == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "")), (M += Q);
                    }
                    K += M;
                }
                return (K += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "")), (a._keyEvent = !1), K;
            },
            _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
                var i = this._get(a, "changeMonth"),
                    j = this._get(a, "changeYear"),
                    k = this._get(a, "showMonthAfterYear"),
                    l = '<div class="ui-datepicker-title">',
                    m = "";
                if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
                else {
                    var n = d && d.getFullYear() == c,
                        o = e && e.getFullYear() == c;
                    m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var p = 0; p < 12; p++) (!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
                    m += "</select>";
                }
                k || (l += m + (f || !i || !j ? "&#xa0;" : ""));
                if (!a.yearshtml) {
                    a.yearshtml = "";
                    if (f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";
                    else {
                        var q = this._get(a, "yearRange").split(":"),
                            r = new Date().getFullYear(),
                            s = function (a) {
                                var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                                return isNaN(b) ? r : b;
                            },
                            t = s(q[0]),
                            u = Math.max(t, s(q[1] || ""));
                        (t = d ? Math.max(t, d.getFullYear()) : t), (u = e ? Math.min(u, e.getFullYear()) : u), (a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">');
                        for (; t <= u; t++) a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
                        (a.yearshtml += "</select>"), (l += a.yearshtml), (a.yearshtml = null);
                    }
                }
                return (l += this._get(a, "yearSuffix")), k && (l += (f || !i || !j ? "&#xa0;" : "") + m), (l += "</div>"), l;
            },
            _adjustInstDate: function (a, b, c) {
                var d = a.drawYear + (c == "Y" ? b : 0),
                    e = a.drawMonth + (c == "M" ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c == "D" ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                (a.selectedDay = g.getDate()), (a.drawMonth = a.selectedMonth = g.getMonth()), (a.drawYear = a.selectedYear = g.getFullYear()), (c == "M" || c == "Y") && this._notifyChange(a);
            },
            _restrictMinMax: function (a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && b < c ? c : b;
                return (e = d && e > d ? d : e), e;
            },
            _notifyChange: function (a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]);
            },
            _getNumberOfMonths: function (a) {
                var b = this._get(a, "numberOfMonths");
                return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b;
            },
            _getMinMaxDate: function (a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null);
            },
            _getDaysInMonth: function (a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
            },
            _getFirstDayOfMonth: function (a, b) {
                return new Date(a, b, 1).getDay();
            },
            _canAdjustMonth: function (a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
                return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f);
            },
            _isInRange: function (a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max");
                return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime());
            },
            _getFormatConfig: function (a) {
                var b = this._get(a, "shortYearCutoff");
                return (
                    (b = typeof b != "string" ? b : (new Date().getFullYear() % 100) + parseInt(b, 10)),
                    { shortYearCutoff: b, dayNamesShort: this._get(a, "dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames") }
                );
            },
            _formatDate: function (a, b, c, d) {
                b || ((a.currentDay = a.selectedDay), (a.currentMonth = a.selectedMonth), (a.currentYear = a.selectedYear));
                var e = b ? (typeof b == "object" ? b : this._daylightSavingAdjust(new Date(d, c, b))) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
            },
        }),
            ($.fn.datepicker = function (a) {
                if (!this.length) return this;
                $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), ($.datepicker.initialized = !0));
                var b = Array.prototype.slice.call(arguments, 1);
                return typeof a != "string" || (a != "isDisabled" && a != "getDate" && a != "widget")
                    ? a == "option" && arguments.length == 2 && typeof arguments[1] == "string"
                        ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
                        : this.each(function () {
                              typeof a == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a);
                          })
                    : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b));
            }),
            ($.datepicker = new Datepicker()),
            ($.datepicker.initialized = !1),
            ($.datepicker.uuid = new Date().getTime()),
            ($.datepicker.version = "1.8.22"),
            (window["DP_jQuery_" + dpuuid] = $);
    })(jQuery),
    (function (a, b) {
        var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            d = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
            e = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
            f = a.attrFn || { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0, click: !0 };
        a.widget("ui.dialog", {
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    collision: "fit",
                    using: function (b) {
                        var c = a(this).css(b).offset().top;
                        c < 0 && a(this).css("top", b.top - c);
                    },
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3,
            },
            _create: function () {
                (this.originalTitle = this.element.attr("title")), typeof this.originalTitle != "string" && (this.originalTitle = ""), (this.options.title = this.options.title || this.originalTitle);
                var b = this,
                    d = b.options,
                    e = d.title || "&#160;",
                    f = a.ui.dialog.getTitleId(b.element),
                    g = (b.uiDialog = a("<div></div>"))
                        .appendTo(document.body)
                        .hide()
                        .addClass(c + d.dialogClass)
                        .css({ zIndex: d.zIndex })
                        .attr("tabIndex", -1)
                        .css("outline", 0)
                        .keydown(function (c) {
                            d.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault());
                        })
                        .attr({ role: "dialog", "aria-labelledby": f })
                        .mousedown(function (a) {
                            b.moveToTop(!1, a);
                        }),
                    h = b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),
                    i = (b.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
                    j = a('<a href="#"></a>')
                        .addClass("ui-dialog-titlebar-close ui-corner-all")
                        .attr("role", "button")
                        .hover(
                            function () {
                                j.addClass("ui-state-hover");
                            },
                            function () {
                                j.removeClass("ui-state-hover");
                            }
                        )
                        .focus(function () {
                            j.addClass("ui-state-focus");
                        })
                        .blur(function () {
                            j.removeClass("ui-state-focus");
                        })
                        .click(function (a) {
                            return b.close(a), !1;
                        })
                        .appendTo(i),
                    k = (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),
                    l = a("<span></span>").addClass("ui-dialog-title").attr("id", f).html(e).prependTo(i);
                a.isFunction(d.beforeclose) && !a.isFunction(d.beforeClose) && (d.beforeClose = d.beforeclose),
                    i.find("*").add(i).disableSelection(),
                    d.draggable && a.fn.draggable && b._makeDraggable(),
                    d.resizable && a.fn.resizable && b._makeResizable(),
                    b._createButtons(d.buttons),
                    (b._isOpen = !1),
                    a.fn.bgiframe && g.bgiframe();
            },
            _init: function () {
                this.options.autoOpen && this.open();
            },
            destroy: function () {
                var a = this;
                return (
                    a.overlay && a.overlay.destroy(),
                    a.uiDialog.hide(),
                    a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
                    a.uiDialog.remove(),
                    a.originalTitle && a.element.attr("title", a.originalTitle),
                    a
                );
            },
            widget: function () {
                return this.uiDialog;
            },
            close: function (b) {
                var c = this,
                    d,
                    e;
                if (!1 === c._trigger("beforeClose", b)) return;
                return (
                    c.overlay && c.overlay.destroy(),
                    c.uiDialog.unbind("keypress.ui-dialog"),
                    (c._isOpen = !1),
                    c.options.hide
                        ? c.uiDialog.hide(c.options.hide, function () {
                              c._trigger("close", b);
                          })
                        : (c.uiDialog.hide(), c._trigger("close", b)),
                    a.ui.dialog.overlay.resize(),
                    c.options.modal &&
                        ((d = 0),
                        a(".ui-dialog").each(function () {
                            this !== c.uiDialog[0] && ((e = a(this).css("z-index")), isNaN(e) || (d = Math.max(d, e)));
                        }),
                        (a.ui.dialog.maxZ = d)),
                    c
                );
            },
            isOpen: function () {
                return this._isOpen;
            },
            moveToTop: function (b, c) {
                var d = this,
                    e = d.options,
                    f;
                return (e.modal && !b) || (!e.stack && !e.modal)
                    ? d._trigger("focus", c)
                    : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex),
                      d.overlay && ((a.ui.dialog.maxZ += 1), d.overlay.$el.css("z-index", (a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ))),
                      (f = { scrollTop: d.element.scrollTop(), scrollLeft: d.element.scrollLeft() }),
                      (a.ui.dialog.maxZ += 1),
                      d.uiDialog.css("z-index", a.ui.dialog.maxZ),
                      d.element.attr(f),
                      d._trigger("focus", c),
                      d);
            },
            open: function () {
                if (this._isOpen) return;
                var b = this,
                    c = b.options,
                    d = b.uiDialog;
                return (
                    (b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null),
                    b._size(),
                    b._position(c.position),
                    d.show(c.show),
                    b.moveToTop(!0),
                    c.modal &&
                        d.bind("keydown.ui-dialog", function (b) {
                            if (b.keyCode !== a.ui.keyCode.TAB) return;
                            var c = a(":tabbable", this),
                                d = c.filter(":first"),
                                e = c.filter(":last");
                            if (b.target === e[0] && !b.shiftKey) return d.focus(1), !1;
                            if (b.target === d[0] && b.shiftKey) return e.focus(1), !1;
                        }),
                    a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get())))
                        .eq(0)
                        .focus(),
                    (b._isOpen = !0),
                    b._trigger("open"),
                    b
                );
            },
            _createButtons: function (b) {
                var c = this,
                    d = !1,
                    e = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    g = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
                c.uiDialog.find(".ui-dialog-buttonpane").remove(),
                    typeof b == "object" &&
                        b !== null &&
                        a.each(b, function () {
                            return !(d = !0);
                        }),
                    d &&
                        (a.each(b, function (b, d) {
                            d = a.isFunction(d) ? { click: d, text: b } : d;
                            var e = a('<button type="button"></button>')
                                .click(function () {
                                    d.click.apply(c.element[0], arguments);
                                })
                                .appendTo(g);
                            a.each(d, function (a, b) {
                                if (a === "click") return;
                                a in f ? e[a](b) : e.attr(a, b);
                            }),
                                a.fn.button && e.button();
                        }),
                        e.appendTo(c.uiDialog));
            },
            _makeDraggable: function () {
                function f(a) {
                    return { position: a.position, offset: a.offset };
                }
                var b = this,
                    c = b.options,
                    d = a(document),
                    e;
                b.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (d, g) {
                        (e = c.height === "auto" ? "auto" : a(this).height()), a(this).height(a(this).height()).addClass("ui-dialog-dragging"), b._trigger("dragStart", d, f(g));
                    },
                    drag: function (a, c) {
                        b._trigger("drag", a, f(c));
                    },
                    stop: function (g, h) {
                        (c.position = [h.position.left - d.scrollLeft(), h.position.top - d.scrollTop()]), a(this).removeClass("ui-dialog-dragging").height(e), b._trigger("dragStop", g, f(h)), a.ui.dialog.overlay.resize();
                    },
                });
            },
            _makeResizable: function (c) {
                function h(a) {
                    return { originalPosition: a.originalPosition, originalSize: a.originalSize, position: a.position, size: a.size };
                }
                c = c === b ? this.options.resizable : c;
                var d = this,
                    e = d.options,
                    f = d.uiDialog.css("position"),
                    g = typeof c == "string" ? c : "n,e,s,w,se,sw,ne,nw";
                d.uiDialog
                    .resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: d.element,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight,
                        minWidth: e.minWidth,
                        minHeight: d._minHeight(),
                        handles: g,
                        start: function (b, c) {
                            a(this).addClass("ui-dialog-resizing"), d._trigger("resizeStart", b, h(c));
                        },
                        resize: function (a, b) {
                            d._trigger("resize", a, h(b));
                        },
                        stop: function (b, c) {
                            a(this).removeClass("ui-dialog-resizing"), (e.height = a(this).height()), (e.width = a(this).width()), d._trigger("resizeStop", b, h(c)), a.ui.dialog.overlay.resize();
                        },
                    })
                    .css("position", f)
                    .find(".ui-resizable-se")
                    .addClass("ui-icon ui-icon-grip-diagonal-se");
            },
            _minHeight: function () {
                var a = this.options;
                return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height);
            },
            _position: function (b) {
                var c = [],
                    d = [0, 0],
                    e;
                if (b) {
                    if (typeof b == "string" || (typeof b == "object" && "0" in b))
                        (c = b.split ? b.split(" ") : [b[0], b[1]]),
                            c.length === 1 && (c[1] = c[0]),
                            a.each(["left", "top"], function (a, b) {
                                +c[a] === c[a] && ((d[a] = c[a]), (c[a] = b));
                            }),
                            (b = { my: c.join(" "), at: c.join(" "), offset: d.join(" ") });
                    b = a.extend({}, a.ui.dialog.prototype.options.position, b);
                } else b = a.ui.dialog.prototype.options.position;
                (e = this.uiDialog.is(":visible")), e || this.uiDialog.show(), this.uiDialog.css({ top: 0, left: 0 }).position(a.extend({ of: window }, b)), e || this.uiDialog.hide();
            },
            _setOptions: function (b) {
                var c = this,
                    f = {},
                    g = !1;
                a.each(b, function (a, b) {
                    c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b);
                }),
                    g && this._size(),
                    this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f);
            },
            _setOption: function (b, d) {
                var e = this,
                    f = e.uiDialog;
                switch (b) {
                    case "beforeclose":
                        b = "beforeClose";
                        break;
                    case "buttons":
                        e._createButtons(d);
                        break;
                    case "closeText":
                        e.uiDialogTitlebarCloseText.text("" + d);
                        break;
                    case "dialogClass":
                        f.removeClass(e.options.dialogClass).addClass(c + d);
                        break;
                    case "disabled":
                        d ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        var g = f.is(":data(draggable)");
                        g && !d && f.draggable("destroy"), !g && d && e._makeDraggable();
                        break;
                    case "position":
                        e._position(d);
                        break;
                    case "resizable":
                        var h = f.is(":data(resizable)");
                        h && !d && f.resizable("destroy"), h && typeof d == "string" && f.resizable("option", "handles", d), !h && d !== !1 && e._makeResizable(d);
                        break;
                    case "title":
                        a(".ui-dialog-title", e.uiDialogTitlebar).html("" + (d || "&#160;"));
                }
                a.Widget.prototype._setOption.apply(e, arguments);
            },
            _size: function () {
                var b = this.options,
                    c,
                    d,
                    e = this.uiDialog.is(":visible");
                this.element.show().css({ width: "auto", minHeight: 0, height: 0 }), b.minWidth > b.width && (b.width = b.minWidth), (c = this.uiDialog.css({ height: "auto", width: b.width }).height()), (d = Math.max(0, b.minHeight - c));
                if (b.height === "auto")
                    if (a.support.minHeight) this.element.css({ minHeight: d, height: "auto" });
                    else {
                        this.uiDialog.show();
                        var f = this.element.css("height", "auto").height();
                        e || this.uiDialog.hide(), this.element.height(Math.max(f, d));
                    }
                else this.element.height(Math.max(b.height - c, 0));
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
            },
        }),
            a.extend(a.ui.dialog, {
                version: "1.8.22",
                uuid: 0,
                maxZ: 0,
                getTitleId: function (a) {
                    var b = a.attr("id");
                    return b || ((this.uuid += 1), (b = this.uuid)), "ui-dialog-title-" + b;
                },
                overlay: function (b) {
                    this.$el = a.ui.dialog.overlay.create(b);
                },
            }),
            a.extend(a.ui.dialog.overlay, {
                instances: [],
                oldInstances: [],
                maxZ: 0,
                events: a
                    .map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) {
                        return a + ".dialog-overlay";
                    })
                    .join(" "),
                create: function (b) {
                    this.instances.length === 0 &&
                        (setTimeout(function () {
                            a.ui.dialog.overlay.instances.length &&
                                a(document).bind(a.ui.dialog.overlay.events, function (b) {
                                    if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1;
                                });
                        }, 1),
                        a(document).bind("keydown.dialog-overlay", function (c) {
                            b.options.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault());
                        }),
                        a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
                    var c = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({ width: this.width(), height: this.height() });
                    return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c;
                },
                destroy: function (b) {
                    var c = a.inArray(b, this.instances);
                    c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]), this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay"), b.remove();
                    var d = 0;
                    a.each(this.instances, function () {
                        d = Math.max(d, this.css("z-index"));
                    }),
                        (this.maxZ = d);
                },
                height: function () {
                    var b, c;
                    return a.browser.msie && a.browser.version < 7
                        ? ((b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)), (c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight)), b < c ? a(window).height() + "px" : b + "px")
                        : a(document).height() + "px";
                },
                width: function () {
                    var b, c;
                    return a.browser.msie
                        ? ((b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)), (c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth)), b < c ? a(window).width() + "px" : b + "px")
                        : a(document).width() + "px";
                },
                resize: function () {
                    var b = a([]);
                    a.each(a.ui.dialog.overlay.instances, function () {
                        b = b.add(this);
                    }),
                        b.css({ width: 0, height: 0 }).css({ width: a.ui.dialog.overlay.width(), height: a.ui.dialog.overlay.height() });
                },
            }),
            a.extend(a.ui.dialog.overlay.prototype, {
                destroy: function () {
                    a.ui.dialog.overlay.destroy(this.$el);
                },
            });
    })(jQuery),
    (function (a, b) {
        a.ui = a.ui || {};
        var c = /left|center|right/,
            d = /top|center|bottom/,
            e = "center",
            f = {},
            g = a.fn.position,
            h = a.fn.offset;
        (a.fn.position = function (b) {
            if (!b || !b.of) return g.apply(this, arguments);
            b = a.extend({}, b);
            var h = a(b.of),
                i = h[0],
                j = (b.collision || "flip").split(" "),
                k = b.offset ? b.offset.split(" ") : [0, 0],
                l,
                m,
                n;
            return (
                i.nodeType === 9
                    ? ((l = h.width()), (m = h.height()), (n = { top: 0, left: 0 }))
                    : i.setTimeout
                    ? ((l = h.width()), (m = h.height()), (n = { top: h.scrollTop(), left: h.scrollLeft() }))
                    : i.preventDefault
                    ? ((b.at = "left top"), (l = m = 0), (n = { top: b.of.pageY, left: b.of.pageX }))
                    : ((l = h.outerWidth()), (m = h.outerHeight()), (n = h.offset())),
                a.each(["my", "at"], function () {
                    var a = (b[this] || "").split(" ");
                    a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), (a[0] = c.test(a[0]) ? a[0] : e), (a[1] = d.test(a[1]) ? a[1] : e), (b[this] = a);
                }),
                j.length === 1 && (j[1] = j[0]),
                (k[0] = parseInt(k[0], 10) || 0),
                k.length === 1 && (k[1] = k[0]),
                (k[1] = parseInt(k[1], 10) || 0),
                b.at[0] === "right" ? (n.left += l) : b.at[0] === e && (n.left += l / 2),
                b.at[1] === "bottom" ? (n.top += m) : b.at[1] === e && (n.top += m / 2),
                (n.left += k[0]),
                (n.top += k[1]),
                this.each(function () {
                    var c = a(this),
                        d = c.outerWidth(),
                        g = c.outerHeight(),
                        h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
                        i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
                        o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
                        p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
                        q = a.extend({}, n),
                        r;
                    b.my[0] === "right" ? (q.left -= d) : b.my[0] === e && (q.left -= d / 2),
                        b.my[1] === "bottom" ? (q.top -= g) : b.my[1] === e && (q.top -= g / 2),
                        f.fractions || ((q.left = Math.round(q.left)), (q.top = Math.round(q.top))),
                        (r = { left: q.left - h, top: q.top - i }),
                        a.each(["left", "top"], function (c, e) {
                            a.ui.position[j[c]] && a.ui.position[j[c]][e](q, { targetWidth: l, targetHeight: m, elemWidth: d, elemHeight: g, collisionPosition: r, collisionWidth: o, collisionHeight: p, offset: k, my: b.my, at: b.at });
                        }),
                        a.fn.bgiframe && c.bgiframe(),
                        c.offset(a.extend(q, { using: b.using }));
                })
            );
        }),
            (a.ui.position = {
                fit: {
                    left: function (b, c) {
                        var d = a(window),
                            e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                        b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left);
                    },
                    top: function (b, c) {
                        var d = a(window),
                            e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                        b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top);
                    },
                },
                flip: {
                    left: function (b, c) {
                        if (c.at[0] === e) return;
                        var d = a(window),
                            f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
                            g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
                            h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
                            i = -2 * c.offset[0];
                        b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0;
                    },
                    top: function (b, c) {
                        if (c.at[1] === e) return;
                        var d = a(window),
                            f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
                            g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
                            h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
                            i = -2 * c.offset[1];
                        b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0;
                    },
                },
            }),
            a.offset.setOffset ||
                ((a.offset.setOffset = function (b, c) {
                    /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
                    var d = a(b),
                        e = d.offset(),
                        f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
                        g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
                        h = { top: c.top - e.top + f, left: c.left - e.left + g };
                    "using" in c ? c.using.call(b, h) : d.css(h);
                }),
                (a.fn.offset = function (b) {
                    var c = this[0];
                    return !c || !c.ownerDocument
                        ? null
                        : b
                        ? a.isFunction(b)
                            ? this.each(function (c) {
                                  a(this).offset(b.call(this, c, a(this).offset()));
                              })
                            : this.each(function () {
                                  a.offset.setOffset(this, b);
                              })
                        : h.call(this);
                })),
            (function () {
                var b = document.getElementsByTagName("body")[0],
                    c = document.createElement("div"),
                    d,
                    e,
                    g,
                    h,
                    i;
                (d = document.createElement(b ? "div" : "body")), (g = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }), b && a.extend(g, { position: "absolute", left: "-1000px", top: "-1000px" });
                for (var j in g) d.style[j] = g[j];
                d.appendChild(c),
                    (e = b || document.documentElement),
                    e.insertBefore(d, e.firstChild),
                    (c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;"),
                    (h = a(c)
                        .offset(function (a, b) {
                            return b;
                        })
                        .offset()),
                    (d.innerHTML = ""),
                    e.removeChild(d),
                    (i = h.top + h.left + (b ? 2e3 : 0)),
                    (f.fractions = i > 21 && i < 22);
            })();
    })(jQuery),
    (function (a, b) {
        a.widget("ui.progressbar", {
            options: { value: 0, max: 100 },
            min: 0,
            _create: function () {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value() }),
                    (this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element)),
                    (this.oldValue = this._value()),
                    this._refreshValue();
            },
            destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.valueDiv.remove(),
                    a.Widget.prototype.destroy.apply(this, arguments);
            },
            value: function (a) {
                return a === b ? this._value() : (this._setOption("value", a), this);
            },
            _setOption: function (b, c) {
                b === "value" && ((this.options.value = c), this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a.Widget.prototype._setOption.apply(this, arguments);
            },
            _value: function () {
                var a = this.options.value;
                return typeof a != "number" && (a = 0), Math.min(this.options.max, Math.max(this.min, a));
            },
            _percentage: function () {
                return (100 * this._value()) / this.options.max;
            },
            _refreshValue: function () {
                var a = this.value(),
                    b = this._percentage();
                this.oldValue !== a && ((this.oldValue = a), this._trigger("change")),
                    this.valueDiv
                        .toggle(a > this.min)
                        .toggleClass("ui-corner-right", a === this.options.max)
                        .width(b.toFixed(0) + "%"),
                    this.element.attr("aria-valuenow", a);
            },
        }),
            a.extend(a.ui.progressbar, { version: "1.8.22" });
    })(jQuery),
    (function (a, b) {
        var c = 5;
        a.widget("ui.slider", a.ui.mouse, {
            widgetEventPrefix: "slide",
            options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null },
            _create: function () {
                var b = this,
                    d = this.options,
                    e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    g = (d.values && d.values.length) || 1,
                    h = [];
                (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")),
                    (this.range = a([])),
                    d.range &&
                        (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])),
                        (this.range = a("<div></div>")
                            .appendTo(this.element)
                            .addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : ""))));
                for (var i = e.length; i < g; i += 1) h.push(f);
                (this.handles = e.add(a(h.join("")).appendTo(b.element))),
                    (this.handle = this.handles.eq(0)),
                    this.handles
                        .add(this.range)
                        .filter("a")
                        .click(function (a) {
                            a.preventDefault();
                        })
                        .hover(
                            function () {
                                d.disabled || a(this).addClass("ui-state-hover");
                            },
                            function () {
                                a(this).removeClass("ui-state-hover");
                            }
                        )
                        .focus(function () {
                            d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"));
                        })
                        .blur(function () {
                            a(this).removeClass("ui-state-focus");
                        }),
                    this.handles.each(function (b) {
                        a(this).data("index.ui-slider-handle", b);
                    }),
                    this.handles
                        .keydown(function (d) {
                            var e = a(this).data("index.ui-slider-handle"),
                                f,
                                g,
                                h,
                                i;
                            if (b.options.disabled) return;
                            switch (d.keyCode) {
                                case a.ui.keyCode.HOME:
                                case a.ui.keyCode.END:
                                case a.ui.keyCode.PAGE_UP:
                                case a.ui.keyCode.PAGE_DOWN:
                                case a.ui.keyCode.UP:
                                case a.ui.keyCode.RIGHT:
                                case a.ui.keyCode.DOWN:
                                case a.ui.keyCode.LEFT:
                                    d.preventDefault();
                                    if (!b._keySliding) {
                                        (b._keySliding = !0), a(this).addClass("ui-state-active"), (f = b._start(d, e));
                                        if (f === !1) return;
                                    }
                            }
                            (i = b.options.step), b.options.values && b.options.values.length ? (g = h = b.values(e)) : (g = h = b.value());
                            switch (d.keyCode) {
                                case a.ui.keyCode.HOME:
                                    h = b._valueMin();
                                    break;
                                case a.ui.keyCode.END:
                                    h = b._valueMax();
                                    break;
                                case a.ui.keyCode.PAGE_UP:
                                    h = b._trimAlignValue(g + (b._valueMax() - b._valueMin()) / c);
                                    break;
                                case a.ui.keyCode.PAGE_DOWN:
                                    h = b._trimAlignValue(g - (b._valueMax() - b._valueMin()) / c);
                                    break;
                                case a.ui.keyCode.UP:
                                case a.ui.keyCode.RIGHT:
                                    if (g === b._valueMax()) return;
                                    h = b._trimAlignValue(g + i);
                                    break;
                                case a.ui.keyCode.DOWN:
                                case a.ui.keyCode.LEFT:
                                    if (g === b._valueMin()) return;
                                    h = b._trimAlignValue(g - i);
                            }
                            b._slide(d, e, h);
                        })
                        .keyup(function (c) {
                            var d = a(this).data("index.ui-slider-handle");
                            b._keySliding && ((b._keySliding = !1), b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"));
                        }),
                    this._refreshValue(),
                    (this._animateOff = !1);
            },
            destroy: function () {
                return (
                    this.handles.remove(),
                    this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),
                    this._mouseDestroy(),
                    this
                );
            },
            _mouseCapture: function (b) {
                var c = this.options,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l;
                return c.disabled
                    ? !1
                    : ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
                      (this.elementOffset = this.element.offset()),
                      (d = { x: b.pageX, y: b.pageY }),
                      (e = this._normValueFromMouse(d)),
                      (f = this._valueMax() - this._valueMin() + 1),
                      (h = this),
                      this.handles.each(function (b) {
                          var c = Math.abs(e - h.values(b));
                          f > c && ((f = c), (g = a(this)), (i = b));
                      }),
                      c.range === !0 && this.values(1) === c.min && ((i += 1), (g = a(this.handles[i]))),
                      (j = this._start(b, i)),
                      j === !1
                          ? !1
                          : ((this._mouseSliding = !0),
                            (h._handleIndex = i),
                            g.addClass("ui-state-active").focus(),
                            (k = g.offset()),
                            (l = !a(b.target).parents().andSelf().is(".ui-slider-handle")),
                            (this._clickOffset = l
                                ? { left: 0, top: 0 }
                                : {
                                      left: b.pageX - k.left - g.width() / 2,
                                      top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0),
                                  }),
                            this.handles.hasClass("ui-state-hover") || this._slide(b, i, e),
                            (this._animateOff = !0),
                            !0));
            },
            _mouseStart: function (a) {
                return !0;
            },
            _mouseDrag: function (a) {
                var b = { x: a.pageX, y: a.pageY },
                    c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1;
            },
            _mouseStop: function (a) {
                return (
                    this.handles.removeClass("ui-state-active"),
                    (this._mouseSliding = !1),
                    this._stop(a, this._handleIndex),
                    this._change(a, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1),
                    !1
                );
            },
            _detectOrientation: function () {
                this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function (a) {
                var b, c, d, e, f;
                return (
                    this.orientation === "horizontal"
                        ? ((b = this.elementSize.width), (c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
                        : ((b = this.elementSize.height), (c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
                    (d = c / b),
                    d > 1 && (d = 1),
                    d < 0 && (d = 0),
                    this.orientation === "vertical" && (d = 1 - d),
                    (e = this._valueMax() - this._valueMin()),
                    (f = this._valueMin() + d * e),
                    this._trimAlignValue(f)
                );
            },
            _start: function (a, b) {
                var c = { handle: this.handles[b], value: this.value() };
                return this.options.values && this.options.values.length && ((c.value = this.values(b)), (c.values = this.values())), this._trigger("start", a, c);
            },
            _slide: function (a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length
                    ? ((d = this.values(b ? 0 : 1)),
                      this.options.values.length === 2 && this.options.range === !0 && ((b === 0 && c > d) || (b === 1 && c < d)) && (c = d),
                      c !== this.values(b) && ((e = this.values()), (e[b] = c), (f = this._trigger("slide", a, { handle: this.handles[b], value: c, values: e })), (d = this.values(b ? 0 : 1)), f !== !1 && this.values(b, c, !0)))
                    : c !== this.value() && ((f = this._trigger("slide", a, { handle: this.handles[b], value: c })), f !== !1 && this.value(c));
            },
            _stop: function (a, b) {
                var c = { handle: this.handles[b], value: this.value() };
                this.options.values && this.options.values.length && ((c.value = this.values(b)), (c.values = this.values())), this._trigger("stop", a, c);
            },
            _change: function (a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = { handle: this.handles[b], value: this.value() };
                    this.options.values && this.options.values.length && ((c.value = this.values(b)), (c.values = this.values())), this._trigger("change", a, c);
                }
            },
            value: function (a) {
                if (arguments.length) {
                    (this.options.value = this._trimAlignValue(a)), this._refreshValue(), this._change(null, 0);
                    return;
                }
                return this._value();
            },
            values: function (b, c) {
                var d, e, f;
                if (arguments.length > 1) {
                    (this.options.values[b] = this._trimAlignValue(c)), this._refreshValue(), this._change(null, b);
                    return;
                }
                if (!arguments.length) return this._values();
                if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
                (d = this.options.values), (e = arguments[0]);
                for (f = 0; f < d.length; f += 1) (d[f] = this._trimAlignValue(e[f])), this._change(null, f);
                this._refreshValue();
            },
            _setOption: function (b, c) {
                var d,
                    e = 0;
                a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments);
                switch (b) {
                    case "disabled":
                        c
                            ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled"))
                            : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
                        break;
                    case "values":
                        (this._animateOff = !0), this._refreshValue();
                        for (d = 0; d < e; d += 1) this._change(null, d);
                        this._animateOff = !1;
                }
            },
            _value: function () {
                var a = this.options.value;
                return (a = this._trimAlignValue(a)), a;
            },
            _values: function (a) {
                var b, c, d;
                if (arguments.length) return (b = this.options.values[a]), (b = this._trimAlignValue(b)), b;
                c = this.options.values.slice();
                for (d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c;
            },
            _trimAlignValue: function (a) {
                if (a <= this._valueMin()) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1,
                    c = (a - this._valueMin()) % b,
                    d = a - c;
                return Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
            },
            _valueMin: function () {
                return this.options.min;
            },
            _valueMax: function () {
                return this.options.max;
            },
            _refreshValue: function () {
                var b = this.options.range,
                    c = this.options,
                    d = this,
                    e = this._animateOff ? !1 : c.animate,
                    f,
                    g = {},
                    h,
                    i,
                    j,
                    k;
                this.options.values && this.options.values.length
                    ? this.handles.each(function (b, i) {
                          (f = ((d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin())) * 100),
                              (g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%"),
                              a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate),
                              d.options.range === !0 &&
                                  (d.orientation === "horizontal"
                                      ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({ left: f + "%" }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({ width: f - h + "%" }, { queue: !1, duration: c.animate }))
                                      : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({ bottom: f + "%" }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({ height: f - h + "%" }, { queue: !1, duration: c.animate }))),
                              (h = f);
                      })
                    : ((i = this.value()),
                      (j = this._valueMin()),
                      (k = this._valueMax()),
                      (f = k !== j ? ((i - j) / (k - j)) * 100 : 0),
                      (g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%"),
                      this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate),
                      b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({ width: f + "%" }, c.animate),
                      b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({ width: 100 - f + "%" }, { queue: !1, duration: c.animate }),
                      b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({ height: f + "%" }, c.animate),
                      b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({ height: 100 - f + "%" }, { queue: !1, duration: c.animate }));
            },
        }),
            a.extend(a.ui.slider, { version: "1.8.22" });
    })(jQuery),
    (function (a, b) {
        function e() {
            return ++c;
        }
        function f() {
            return ++d;
        }
        var c = 0,
            d = 0;
        a.widget("ui.tabs", {
            options: {
                add: null,
                ajaxOptions: null,
                cache: !1,
                cookie: null,
                collapsible: !1,
                disable: null,
                disabled: [],
                enable: null,
                event: "click",
                fx: null,
                idPrefix: "ui-tabs-",
                load: null,
                panelTemplate: "<div></div>",
                remove: null,
                select: null,
                show: null,
                spinner: "<em>Loading&#8230;</em>",
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>",
            },
            _create: function () {
                this._tabify(!0);
            },
            _setOption: function (a, b) {
                if (a == "selected") {
                    if (this.options.collapsible && b == this.options.selected) return;
                    this.select(b);
                } else (this.options[a] = b), this._tabify();
            },
            _tabId: function (a) {
                return (a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "")) || this.options.idPrefix + e();
            },
            _sanitizeSelector: function (a) {
                return a.replace(/:/g, "\\:");
            },
            _cookie: function () {
                var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
                return a.cookie.apply(null, [b].concat(a.makeArray(arguments)));
            },
            _ui: function (a, b) {
                return { tab: a, panel: b, index: this.anchors.index(a) };
            },
            _cleanup: function () {
                this.lis
                    .filter(".ui-state-processing")
                    .removeClass("ui-state-processing")
                    .find("span:data(label.tabs)")
                    .each(function () {
                        var b = a(this);
                        b.html(b.data("label.tabs")).removeData("label.tabs");
                    });
            },
            _tabify: function (c) {
                function m(b, c) {
                    b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter");
                }
                var d = this,
                    e = this.options,
                    f = /^#.+/;
                (this.list = this.element.find("ol,ul").eq(0)),
                    (this.lis = a(" > li:has(a[href])", this.list)),
                    (this.anchors = this.lis.map(function () {
                        return a("a", this)[0];
                    })),
                    (this.panels = a([])),
                    this.anchors.each(function (b, c) {
                        var g = a(c).attr("href"),
                            h = g.split("#")[0],
                            i;
                        h && (h === location.toString().split("#")[0] || ((i = a("base")[0]) && h === i.href)) && ((g = c.hash), (c.href = g));
                        if (f.test(g)) d.panels = d.panels.add(d.element.find(d._sanitizeSelector(g)));
                        else if (g && g !== "#") {
                            a.data(c, "href.tabs", g), a.data(c, "load.tabs", g.replace(/#.*$/, ""));
                            var j = d._tabId(c);
                            c.href = "#" + j;
                            var k = d.element.find("#" + j);
                            k.length ||
                                ((k = a(e.panelTemplate)
                                    .attr("id", j)
                                    .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
                                    .insertAfter(d.panels[b - 1] || d.list)),
                                k.data("destroy.tabs", !0)),
                                (d.panels = d.panels.add(k));
                        } else e.disabled.push(b);
                    }),
                    c
                        ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),
                          this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
                          this.lis.addClass("ui-state-default ui-corner-top"),
                          this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),
                          e.selected === b
                              ? (location.hash &&
                                    this.anchors.each(function (a, b) {
                                        if (b.hash == location.hash) return (e.selected = a), !1;
                                    }),
                                typeof e.selected != "number" && e.cookie && (e.selected = parseInt(d._cookie(), 10)),
                                typeof e.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))),
                                (e.selected = e.selected || (this.lis.length ? 0 : -1)))
                              : e.selected === null && (e.selected = -1),
                          (e.selected = (e.selected >= 0 && this.anchors[e.selected]) || e.selected < 0 ? e.selected : 0),
                          (e.disabled = a
                              .unique(
                                  e.disabled.concat(
                                      a.map(this.lis.filter(".ui-state-disabled"), function (a, b) {
                                          return d.lis.index(a);
                                      })
                                  )
                              )
                              .sort()),
                          a.inArray(e.selected, e.disabled) != -1 && e.disabled.splice(a.inArray(e.selected, e.disabled), 1),
                          this.panels.addClass("ui-tabs-hide"),
                          this.lis.removeClass("ui-tabs-selected ui-state-active"),
                          e.selected >= 0 &&
                              this.anchors.length &&
                              (d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),
                              this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),
                              d.element.queue("tabs", function () {
                                  d._trigger("show", null, d._ui(d.anchors[e.selected], d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]));
                              }),
                              this.load(e.selected)),
                          a(window).bind("unload", function () {
                              d.lis.add(d.anchors).unbind(".tabs"), (d.lis = d.anchors = d.panels = null);
                          }))
                        : (e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))),
                    this.element[e.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"),
                    e.cookie && this._cookie(e.selected, e.cookie);
                for (var g = 0, h; (h = this.lis[g]); g++) a(h)[a.inArray(g, e.disabled) != -1 && !a(h).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
                e.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
                if (e.event !== "mouseover") {
                    var i = function (a, b) {
                            b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a);
                        },
                        j = function (a, b) {
                            b.removeClass("ui-state-" + a);
                        };
                    this.lis.bind("mouseover.tabs", function () {
                        i("hover", a(this));
                    }),
                        this.lis.bind("mouseout.tabs", function () {
                            j("hover", a(this));
                        }),
                        this.anchors.bind("focus.tabs", function () {
                            i("focus", a(this).closest("li"));
                        }),
                        this.anchors.bind("blur.tabs", function () {
                            j("focus", a(this).closest("li"));
                        });
                }
                var k, l;
                e.fx && (a.isArray(e.fx) ? ((k = e.fx[0]), (l = e.fx[1])) : (k = l = e.fx));
                var n = l
                        ? function (b, c) {
                              a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),
                                  c
                                      .hide()
                                      .removeClass("ui-tabs-hide")
                                      .animate(l, l.duration || "normal", function () {
                                          m(c, l), d._trigger("show", null, d._ui(b, c[0]));
                                      });
                          }
                        : function (b, c) {
                              a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), d._trigger("show", null, d._ui(b, c[0]));
                          },
                    o = k
                        ? function (a, b) {
                              b.animate(k, k.duration || "normal", function () {
                                  d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), m(b, k), d.element.dequeue("tabs");
                              });
                          }
                        : function (a, b, c) {
                              d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), d.element.dequeue("tabs");
                          };
                this.anchors.bind(e.event + ".tabs", function () {
                    var b = this,
                        c = a(b).closest("li"),
                        f = d.panels.filter(":not(.ui-tabs-hide)"),
                        g = d.element.find(d._sanitizeSelector(b.hash));
                    if (
                        (c.hasClass("ui-tabs-selected") && !e.collapsible) ||
                        c.hasClass("ui-state-disabled") ||
                        c.hasClass("ui-state-processing") ||
                        d.panels.filter(":animated").length ||
                        d._trigger("select", null, d._ui(this, g[0])) === !1
                    )
                        return this.blur(), !1;
                    (e.selected = d.anchors.index(this)), d.abort();
                    if (e.collapsible) {
                        if (c.hasClass("ui-tabs-selected"))
                            return (
                                (e.selected = -1),
                                e.cookie && d._cookie(e.selected, e.cookie),
                                d.element
                                    .queue("tabs", function () {
                                        o(b, f);
                                    })
                                    .dequeue("tabs"),
                                this.blur(),
                                !1
                            );
                        if (!f.length)
                            return (
                                e.cookie && d._cookie(e.selected, e.cookie),
                                d.element.queue("tabs", function () {
                                    n(b, g);
                                }),
                                d.load(d.anchors.index(this)),
                                this.blur(),
                                !1
                            );
                    }
                    e.cookie && d._cookie(e.selected, e.cookie);
                    if (g.length)
                        f.length &&
                            d.element.queue("tabs", function () {
                                o(b, f);
                            }),
                            d.element.queue("tabs", function () {
                                n(b, g);
                            }),
                            d.load(d.anchors.index(this));
                    else throw "jQuery UI Tabs: Mismatching fragment identifier.";
                    a.browser.msie && this.blur();
                }),
                    this.anchors.bind("click.tabs", function () {
                        return !1;
                    });
            },
            _getIndex: function (a) {
                return typeof a == "string" && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a;
            },
            destroy: function () {
                var b = this.options;
                return (
                    this.abort(),
                    this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),
                    this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
                    this.anchors.each(function () {
                        var b = a.data(this, "href.tabs");
                        b && (this.href = b);
                        var c = a(this).unbind(".tabs");
                        a.each(["href", "load", "cache"], function (a, b) {
                            c.removeData(b + ".tabs");
                        });
                    }),
                    this.lis
                        .unbind(".tabs")
                        .add(this.panels)
                        .each(function () {
                            a.data(this, "destroy.tabs")
                                ? a(this).remove()
                                : a(this).removeClass(
                                      [
                                          "ui-state-default",
                                          "ui-corner-top",
                                          "ui-tabs-selected",
                                          "ui-state-active",
                                          "ui-state-hover",
                                          "ui-state-focus",
                                          "ui-state-disabled",
                                          "ui-tabs-panel",
                                          "ui-widget-content",
                                          "ui-corner-bottom",
                                          "ui-tabs-hide",
                                      ].join(" ")
                                  );
                        }),
                    b.cookie && this._cookie(null, b.cookie),
                    this
                );
            },
            add: function (c, d, e) {
                e === b && (e = this.anchors.length);
                var f = this,
                    g = this.options,
                    h = a(g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)),
                    i = c.indexOf("#") ? this._tabId(a("a", h)[0]) : c.replace("#", "");
                h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
                var j = f.element.find("#" + i);
                return (
                    j.length || (j = a(g.panelTemplate).attr("id", i).data("destroy.tabs", !0)),
                    j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),
                    e >= this.lis.length ? (h.appendTo(this.list), j.appendTo(this.list[0].parentNode)) : (h.insertBefore(this.lis[e]), j.insertBefore(this.panels[e])),
                    (g.disabled = a.map(g.disabled, function (a, b) {
                        return a >= e ? ++a : a;
                    })),
                    this._tabify(),
                    this.anchors.length == 1 &&
                        ((g.selected = 0),
                        h.addClass("ui-tabs-selected ui-state-active"),
                        j.removeClass("ui-tabs-hide"),
                        this.element.queue("tabs", function () {
                            f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]));
                        }),
                        this.load(0)),
                    this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])),
                    this
                );
            },
            remove: function (b) {
                b = this._getIndex(b);
                var c = this.options,
                    d = this.lis.eq(b).remove(),
                    e = this.panels.eq(b).remove();
                return (
                    d.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b + (b + 1 < this.anchors.length ? 1 : -1)),
                    (c.disabled = a.map(
                        a.grep(c.disabled, function (a, c) {
                            return a != b;
                        }),
                        function (a, c) {
                            return a >= b ? --a : a;
                        }
                    )),
                    this._tabify(),
                    this._trigger("remove", null, this._ui(d.find("a")[0], e[0])),
                    this
                );
            },
            enable: function (b) {
                b = this._getIndex(b);
                var c = this.options;
                if (a.inArray(b, c.disabled) == -1) return;
                return (
                    this.lis.eq(b).removeClass("ui-state-disabled"),
                    (c.disabled = a.grep(c.disabled, function (a, c) {
                        return a != b;
                    })),
                    this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b])),
                    this
                );
            },
            disable: function (a) {
                a = this._getIndex(a);
                var b = this,
                    c = this.options;
                return a != c.selected && (this.lis.eq(a).addClass("ui-state-disabled"), c.disabled.push(a), c.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a], this.panels[a]))), this;
            },
            select: function (a) {
                a = this._getIndex(a);
                if (a == -1)
                    if (this.options.collapsible && this.options.selected != -1) a = this.options.selected;
                    else return this;
                return this.anchors.eq(a).trigger(this.options.event + ".tabs"), this;
            },
            load: function (b) {
                b = this._getIndex(b);
                var c = this,
                    d = this.options,
                    e = this.anchors.eq(b)[0],
                    f = a.data(e, "load.tabs");
                this.abort();
                if (!f || (this.element.queue("tabs").length !== 0 && a.data(e, "cache.tabs"))) {
                    this.element.dequeue("tabs");
                    return;
                }
                this.lis.eq(b).addClass("ui-state-processing");
                if (d.spinner) {
                    var g = a("span", e);
                    g.data("label.tabs", g.html()).html(d.spinner);
                }
                return (
                    (this.xhr = a.ajax(
                        a.extend({}, d.ajaxOptions, {
                            url: f,
                            success: function (f, g) {
                                c.element.find(c._sanitizeSelector(e.hash)).html(f), c._cleanup(), d.cache && a.data(e, "cache.tabs", !0), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                                try {
                                    d.ajaxOptions.success(f, g);
                                } catch (h) {}
                            },
                            error: function (a, f, g) {
                                c._cleanup(), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                                try {
                                    d.ajaxOptions.error(a, f, b, e);
                                } catch (g) {}
                            },
                        })
                    )),
                    c.element.dequeue("tabs"),
                    this
                );
            },
            abort: function () {
                return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this;
            },
            url: function (a, b) {
                return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b), this;
            },
            length: function () {
                return this.anchors.length;
            },
        }),
            a.extend(a.ui.tabs, { version: "1.8.22" }),
            a.extend(a.ui.tabs.prototype, {
                rotation: null,
                rotate: function (a, b) {
                    var c = this,
                        d = this.options,
                        e =
                            c._rotate ||
                            (c._rotate = function (b) {
                                clearTimeout(c.rotation),
                                    (c.rotation = setTimeout(function () {
                                        var a = d.selected;
                                        c.select(++a < c.anchors.length ? a : 0);
                                    }, a)),
                                    b && b.stopPropagation();
                            }),
                        f =
                            c._unrotate ||
                            (c._unrotate = b
                                ? function (a) {
                                      e();
                                  }
                                : function (a) {
                                      a.clientX && c.rotate(null);
                                  });
                    return (
                        a
                            ? (this.element.bind("tabsshow", e), this.anchors.bind(d.event + ".tabs", f), e())
                            : (clearTimeout(c.rotation), this.element.unbind("tabsshow", e), this.anchors.unbind(d.event + ".tabs", f), delete this._rotate, delete this._unrotate),
                        this
                    );
                },
            });
    })(jQuery);
/*
jQuery.wizard v1.0.0
https://github.com/kflorence/jquery-wizard/
An asynchronous form wizard that supports branching.

Requires:
 - jQuery 1.3.2+
 - jQuery UI widget 1.8.0+

Copyright (c) 2011 Kyle Florence
Dual licensed under the MIT and GPLv2 licenses.
*/
!(function (t, e) {
    var s = 0,
        n = {},
        r = {},
        i = Array.prototype.slice,
        a = function (e) {
            return t.isArray(e) ? e : [e];
        },
        o = "default",
        d = "number";
    t.each("branch form header step wrapper".split(" "), function () {
        n[this] = "." + (r[this] = "wizard-" + this);
    }),
        t.widget("kf.wizard", {
            version: "1.0.0",
            options: {
                animations: { show: { options: { duration: 0 }, properties: { opacity: "show" } }, hide: { options: { duration: 0 }, properties: { opacity: "hide" } } },
                backward: ".backward",
                branches: ".branch",
                disabled: !1,
                enableSubmit: !1,
                forward: ".forward",
                header: ":header:first",
                initialStep: 0,
                stateAttribute: "data-state",
                stepClasses: { current: "current", exclude: "exclude", stop: "stop", submit: "submit", unidirectional: "unidirectional" },
                steps: ".step",
                submit: ":submit",
                transitions: {},
                unidirectional: !1,
                afterBackward: null,
                afterDestroy: null,
                afterForward: null,
                afterSelect: null,
                beforeBackward: null,
                beforeDestroy: null,
                beforeForward: null,
                beforeSelect: null,
                create: null,
            },
            _create: function () {
                var e,
                    i,
                    d = this,
                    l = d.options,
                    c = d.element,
                    h = c.find(l.steps).eq(0).parent();
                c[0].elements ? (e = c) : (e = c.find("form")).length || (e = c.closest("form")),
                    (i = c.find(l.header)).length || (i = e.find(l.header)),
                    (d.elements = {
                        form: e.addClass(r.form),
                        submit: e.find(l.submit),
                        forward: e.find(l.forward),
                        backward: e.find(l.backward),
                        header: i.addClass(r.header),
                        steps: c.find(l.steps).hide().addClass(r.step),
                        branches: c.find(l.branches).add(h).addClass(r.branch),
                        stepsWrapper: h.addClass(r.wrapper),
                        wizard: c.addClass("wizard"),
                    }),
                    h.attr("id") || h.attr("id", "wizard-" + ++s),
                    d.elements.forward.click(function (t) {
                        t.preventDefault(), d.forward(t);
                    }),
                    d.elements.backward.click(function (t) {
                        t.preventDefault(), d.backward(t);
                    }),
                    (d._currentState = { branchesActivated: [], stepsActivated: [] }),
                    (d._stepCount = d.elements.steps.length),
                    (d._lastStepIndex = d._stepCount - 1),
                    (d._branchLabels = []),
                    d.elements.steps.each(function (e) {
                        d._branchLabels[e] = t(this).parent().attr("id");
                    }),
                    (d._excludesFilter = function () {
                        return !t(this).hasClass(l.stepClasses.exclude);
                    }),
                    l.transitions[o] ||
                        (l.transitions[o] = function (t) {
                            return d.stepIndex(t.nextAll(n.step));
                        }),
                    d.select.apply(d, a(l.initialStep));
            },
            _fastForward: function (s, n, r) {
                var i = 0,
                    a = this,
                    o = a._currentState.stepIndex,
                    d = [o];
                t.isFunction(n) && ((r = n), (n = e)),
                    (function e() {
                        a._transition(o, function (l, c) {
                            if (-1 === (o = a.stepIndex(l, c))) throw new Error('[_fastForward]: Invalid step "' + l + '"');
                            if (t.inArray(o, d) >= 0) throw new Error('[_fastForward]: Recursion detected on step "' + l + '"');
                            d.push(o), o === a._lastStepIndex || (n ? ++i : o) === s ? r.call(a, o, d) : e();
                        });
                    })();
            },
            _find: function (e, s, n) {
                var r,
                    i,
                    o,
                    l,
                    c,
                    h = [],
                    p = s instanceof jQuery ? s : t(s);
                if (null !== e && p.length)
                    for (i = 0, o = (e = a(e)).length; i < o; i++)
                        (r = null),
                            (c = typeof (l = e[i])) === d
                                ? (r = p.get(l))
                                : "string" === c
                                ? (r = document.getElementById(l.replace("#", "")))
                                : "object" === c &&
                                  (l instanceof jQuery && l.length && (l = l[0]),
                                  l.nodeType &&
                                      p.each(function (t, e) {
                                          if (e === l) return (r = e), !1;
                                      })),
                            r && h.push(r);
                return !1 === n ? h : t(h);
            },
            _move: function (s, n, r, i, a) {
                function o(s, n) {
                    a.call(d, s, t.isArray(i) ? i : !1 !== i ? n : e);
                }
                var d = this,
                    l = d._currentState;
                "boolean" == typeof n && ((a = i), (i = r), (r = n), (n = e)),
                    !0 === r ? (s > 0 ? d._fastForward(s, r, o) : a.call(d, l.stepsActivated[Math.max(0, s + (l.stepsActivated.length - 1))])) : -1 !== (s = d.stepIndex(s, n)) && (s > l.stepIndex ? d._fastForward(s, o) : o.call(d, s));
            },
            _state: function (e, s) {
                if (!this.isValidStepIndex(e)) return null;
                this.options;
                var r = t.extend(!0, {}, this._currentState);
                (s = a(s || e)),
                    (r.step = this.elements.steps.eq(e)),
                    (r.branch = r.step.parent()),
                    (r.branchStepCount = r.branch.children(n.step).length),
                    (r.isMovingForward = e > r.stepIndex),
                    (r.stepIndexInBranch = r.branch.children(n.step).index(r.step));
                for (var i, o, d, l = 0, c = s.length; l < c; l++)
                    (e = s[l]),
                        (i = this._branchLabels[e]),
                        !r.stepIndex || r.stepIndex < e
                            ? t.inArray(e, r.stepsActivated) < 0 && (r.stepsActivated.push(e), t.inArray(i, r.branchesActivated) < 0 && r.branchesActivated.push(i))
                            : r.stepIndex > e &&
                              ((o = t.inArray(i, r.branchesActivated) + 1),
                              (d = t.inArray(e, r.stepsActivated) + 1),
                              o > 0 && r.branchesActivated.splice(o, r.branchesActivated.length - 1),
                              d > 0 && r.stepsActivated.splice(d, r.stepsActivated.length - 1)),
                        (r.stepIndex = e),
                        (r.branchLabel = i);
                return (
                    (r.stepsComplete = Math.max(0, this._find(r.stepsActivated, this.elements.steps).filter(this._excludesFilter).length - 1)),
                    (r.stepsPossible = Math.max(0, this._find(r.branchesActivated, this.elements.branches).children(n.step).filter(this._excludesFilter).length - 1)),
                    t.extend(r, {
                        branchLabel: this._branchLabels[e],
                        isFirstStep: 0 === e,
                        isFirstStepInBranch: 0 === r.stepIndexInBranch,
                        isLastStep: e === this._lastStepIndex,
                        isLastStepInBranch: r.stepIndexInBranch === r.branchStepCount - 1,
                        percentComplete: (100 * r.stepsComplete) / r.stepsPossible,
                        stepsRemaining: r.stepsPossible - r.stepsComplete,
                    }),
                    r
                );
            },
            _transition: function (s, n, r) {
                var d = this;
                t.isFunction(s) ? ((r = s), (s = d._currentState.stepIndex), (n = e)) : t.isFunction(n) && ((r = n), (n = e));
                var l,
                    c = d.options,
                    h = d.step(s, n),
                    p = h.attr(c.stateAttribute),
                    u = p ? c.transitions[p] : c.transitions[o];
                return (
                    (l = t.isFunction(u)
                        ? u.call(d, h, function () {
                              return r.apply(d, i.call(arguments));
                          })
                        : p) !== e &&
                        !1 !== l &&
                        r.apply(d, a(l)),
                    l
                );
            },
            _update: function (e, s) {
                var n = this._currentState,
                    r = this.options;
                if (n.step) {
                    if (
                        r.disabled ||
                        !s ||
                        s.stepIndex === n.stepIndex ||
                        !this._trigger("beforeSelect", e, s) ||
                        (s.isMovingForward && !this._trigger("beforeForward", e, s)) ||
                        (!s.isMovingForward && !this._trigger("beforeBackward", e, s))
                    )
                        return;
                    n.step.removeClass(r.stepClasses.current).animate(r.animations.hide.properties, t.extend({}, r.animations.hide.options));
                }
                (this._currentState = s),
                    s.step.addClass(r.stepClasses.current).animate(r.animations.show.properties, t.extend({}, r.animations.show.options)),
                    s.isFirstStep || r.unidirectional || s.step.hasClass(r.stepClasses.unidirectional) ? this.elements.backward.attr("disabled", !0) : this.elements.backward.removeAttr("disabled"),
                    (s.isLastStepInBranch && !s.step.attr(r.stateAttribute)) || s.step.hasClass(r.stepClasses.stop) ? this.elements.forward.attr("disabled", !0) : this.elements.forward.removeAttr("disabled"),
                    r.enableSubmit || s.step.hasClass(r.stepClasses.submit) ? this.elements.submit.removeAttr("disabled") : this.elements.submit.attr("disabled", !0),
                    n.step && (this._trigger("afterSelect", e, s), this._trigger(s.isMovingForward ? "afterForward" : "afterBackward", e, s));
            },
            backward: function (t, s) {
                typeof t === d && ((s = t), (t = e)),
                    s === e && (s = 1),
                    this._currentState.isFirstStep ||
                        typeof s !== d ||
                        this._move(-s, !0, !1, function (e, s) {
                            this._update(t, this._state(e, s));
                        });
            },
            branch: function (t) {
                return arguments.length ? this._find(t, this.elements.branches) : this._currentState.branch;
            },
            branches: function (t) {
                return arguments.length ? this.branch(t).children(n.branch) : this.elements.branches;
            },
            branchesActivated: function () {
                return this._find(this._currentState.branchesActivated, this.elements.branches);
            },
            destroy: function () {
                var e = this.elements;
                this._trigger("beforeDestroy", null, this.state()) &&
                    (this.element.removeClass("wizard"),
                    e.form.removeClass(r.form),
                    e.header.removeClass(r.header),
                    e.steps.show().removeClass(r.step),
                    e.stepsWrapper.removeClass(r.wrapper),
                    e.branches.removeClass(r.branch),
                    t.Widget.prototype.destroy.call(this),
                    this._trigger("afterDestroy"));
            },
            form: function () {
                return this.elements.form;
            },
            forward: function (t, s, n) {
                typeof t === d && ((n = s), (s = t), (t = e)),
                    s === e && (s = 1),
                    this._currentState.isLastStep ||
                        typeof s !== d ||
                        this._move(s, !0, n, function (e, s) {
                            this._update(t, this._state(e, s));
                        });
            },
            isValidStep: function (t, e) {
                return this.isValidStepIndex(this.stepIndex(t, e));
            },
            isValidStepIndex: function (t) {
                return typeof t === d && t >= 0 && t <= this._lastStepIndex;
            },
            stepCount: function () {
                return this._stepCount;
            },
            select: function (s, n, r, i, a) {
                s instanceof t.Event || ((a = i), (i = r), (r = n), (n = s), (s = e)),
                    n !== e &&
                        (t.isArray(n) ? ((a = i), (i = r), (r = n[1]), (n = n[0])) : "boolean" == typeof r ? ((a = i), (i = r), (r = e)) : t.isArray(r) && ((a = r), (r = e)),
                        this._move(n, r, i, a, function (t, e) {
                            this._update(s, this._state(t, e));
                        }));
            },
            state: function (s, n, r) {
                return arguments.length ? (t.isArray(s) ? ((r = n), (n = s[1]), (s = s[0])) : t.isArray(n) && ((r = n), (n = e)), this._state(this.stepIndex(s, n), r)) : this._currentState;
            },
            step: function (s, n) {
                if (!arguments.length) return this._currentState.step;
                t.isArray(s) && ((n = s[1]), (s = s[0]));
                var i;
                return (
                    typeof s === d
                        ? (i = this._find(s, n !== e ? this.steps(n) : this.elements.steps))
                        : (i = this._find(s, this.elements.steps.add(this.elements.branches))) && i.hasClass(r.branch) && (i = this._find(n || 0, this.steps(i))),
                    i
                );
            },
            stepIndex: function (s, r, i) {
                if (!arguments.length) return this._currentState.stepIndex;
                var a;
                return t.isArray(s) ? ((i = r), (r = s[1]), (s = s[0])) : "boolean" == typeof r && ((i = r), (r = e)), (a = this.step(s, r)) ? (i ? a.siblings(n.step).andSelf() : this.elements.steps).index(a) : -1;
            },
            steps: function (t) {
                return arguments.length ? this.branch(t).children(n.step) : this.elements.steps;
            },
            stepsActivated: function () {
                return this._find(this._currentState.stepsActivated, this.elements.steps);
            },
            submit: function () {
                this.elements.form.submit();
            },
        });
})(jQuery);

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
!(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return (
                    i ||
                    (this.attr("novalidate", "novalidate"),
                    (i = new t.validator(e, this[0])),
                    t.data(this[0], "validator", i),
                    i.settings.onsubmit &&
                        (this.validateDelegate(":submit", "click", function (e) {
                            i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
                        }),
                        this.submit(function (e) {
                            function s() {
                                var s;
                                return (
                                    !i.settings.submitHandler ||
                                    (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
                                    i.settings.submitHandler.call(i, i.currentForm, e),
                                    i.submitButton && s.remove(),
                                    !1)
                                );
                            }
                            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? ((i.cancelSubmit = !1), s()) : i.form() ? (i.pendingRequest ? ((i.formSubmitted = !0), !1) : s()) : (i.focusInvalid(), !1);
                        })),
                    i)
                );
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
        },
        valid: function () {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return (
                this.each(function () {
                    e = e && i.element(this);
                }),
                e
            );
        },
        removeAttrs: function (e) {
            var i = {},
                s = this;
            return (
                t.each(e.split(/\s/), function (t, e) {
                    (i[e] = s.attr(e)), s.removeAttr(e);
                }),
                i
            );
        },
        rules: function (e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings,
                    n = r.rules,
                    a = t.validator.staticRules(s);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, (n[s.name] = a), i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete n[s.name], a;
                        var o = {};
                        return (
                            t.each(i.split(/\s/), function (t, e) {
                                (o[e] = a[e]), delete a[e];
                            }),
                            o
                        );
                }
            }
            var u = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (u.required) {
                var l = u.required;
                delete u.required, (u = t.extend({ required: l }, u));
            }
            return u;
        },
    }),
        t.extend(t.expr[":"], {
            blank: function (e) {
                return !t.trim("" + t(e).val());
            },
            filled: function (e) {
                return !!t.trim("" + t(e).val());
            },
            unchecked: function (e) {
                return !t(e).prop("checked");
            },
        }),
        (t.validator = function (e, i) {
            (this.settings = t.extend(!0, {}, t.validator.defaults, e)), (this.currentForm = i), this.init();
        }),
        (t.validator.format = function (e, i) {
            return 1 === arguments.length
                ? function () {
                      var i = t.makeArray(arguments);
                      return i.unshift(e), t.validator.format.apply(this, i);
                  }
                : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
                  i.constructor !== Array && (i = [i]),
                  t.each(i, function (t, i) {
                      e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                          return i;
                      });
                  }),
                  e);
        }),
        t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "span",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t, e) {
                    (this.lastActive = t),
                        this.settings.focusCleanup &&
                            !this.blockFocusCleanup &&
                            (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
                },
                onfocusout: function (t, e) {
                    this.checkable(t) || (!(t.name in this.submitted) && this.optional(t)) || this.element(t);
                },
                onkeyup: function (t, e) {
                    (9 === e.which && "" === this.elementValue(t)) || ((t.name in this.submitted || t === this.lastElement) && this.element(t));
                },
                onclick: function (t, e) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
                },
                highlight: function (e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
                },
                unhighlight: function (e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
                },
            },
            setDefaults: function (e) {
                t.extend(t.validator.defaults, e);
            },
            messages: {
                required: "Required",
                remote: "Please fix this field.",
                email: "Wrong email.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function e(e) {
                        var i = t.data(this[0].form, "validator"),
                            s = "on" + e.type.replace(/^validate/, "");
                        i && i.settings[s] && i.settings[s].call(i, this[0], e);
                    }
                    (this.labelContainer = t(this.settings.errorLabelContainer)),
                        (this.errorContext = (this.labelContainer.length && this.labelContainer) || t(this.currentForm)),
                        (this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var i = (this.groups = {});
                    t.each(this.settings.groups, function (e, s) {
                        "string" == typeof s && (s = s.split(/\s/)),
                            t.each(s, function (t, s) {
                                i[s] = e;
                            });
                    });
                    var s = this.settings.rules;
                    t.each(s, function (e, i) {
                        s[e] = t.validator.normalizeRule(i);
                    }),
                        t(this.currentForm)
                            .validateDelegate(
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                                "focusin focusout keyup",
                                e
                            )
                            .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e),
                        this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                },
                form: function () {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), (this.invalid = t.extend({}, this.errorMap)), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++) this.check(e[t]);
                    return this.valid();
                },
                element: function (e) {
                    (e = this.validationTargetFor(this.clean(e))), (this.lastElement = e), this.prepareElement(e), (this.currentElements = t(e));
                    var i = !1 !== this.check(e);
                    return i ? delete this.invalid[e.name] : (this.invalid[e.name] = !0), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i;
                },
                showErrors: function (e) {
                    if (e) {
                        t.extend(this.errorMap, e), (this.errorList = []);
                        for (var i in e) this.errorList.push({ message: e[i], element: this.findByName(i)[0] });
                        this.successList = t.grep(this.successList, function (t) {
                            return !(t.name in e);
                        });
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                },
                resetForm: function () {
                    t.fn.resetForm && t(this.currentForm).resetForm(),
                        (this.submitted = {}),
                        (this.lastElement = null),
                        this.prepareForm(),
                        this.hideErrors(),
                        this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (t) {
                    var e = 0;
                    for (var i in t) e++;
                    return e;
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            t(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (t) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return (
                        e &&
                        1 ===
                            t.grep(this.errorList, function (t) {
                                return t.element.name === e.name;
                            }).length &&
                        e
                    );
                },
                elements: function () {
                    var e = this,
                        i = {};
                    return t(this.currentForm)
                        .find("input, select, textarea")
                        .not(":submit, :reset, :image, [disabled]")
                        .not(this.settings.ignore)
                        .filter(function () {
                            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && ((i[this.name] = !0), !0);
                        });
                },
                clean: function (e) {
                    return t(e)[0];
                },
                errors: function () {
                    var e = this.settings.errorClass.replace(" ", ".");
                    return t(this.settings.errorElement + "." + e, this.errorContext);
                },
                reset: function () {
                    (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = t([])), (this.toHide = t([])), (this.currentElements = t([]));
                },
                prepareForm: function () {
                    this.reset(), (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (t) {
                    this.reset(), (this.toHide = this.errorsFor(t));
                },
                elementValue: function (e) {
                    var i = t(e).attr("type"),
                        s = t(e).val();
                    return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s;
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i,
                        s = t(e).rules(),
                        r = !1,
                        n = this.elementValue(e);
                    for (var a in s) {
                        var o = { method: a, parameters: s[a] };
                        try {
                            if ("dependency-mismatch" === (i = t.validator.methods[a].call(this, n, e, o.parameters))) {
                                r = !0;
                                continue;
                            }
                            if (((r = !1), "pending" === i)) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, o), !1;
                        } catch (t) {
                            throw (this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", t), t);
                        }
                    }
                    if (!r) return this.objectLength(s) && this.successList.push(e), !0;
                },
                customDataMessage: function (e, i) {
                    return t(e).data("msg-" + i.toLowerCase()) || (e.attributes && t(e).attr("data-msg-" + i.toLowerCase()));
                },
                customMessage: function (t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e]);
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
                },
                defaultMessage: function (e, i) {
                    return this.findDefined(
                        this.customMessage(e.name, i),
                        this.customDataMessage(e, i),
                        (!this.settings.ignoreTitle && e.title) || void 0,
                        t.validator.messages[i],
                        "<strong>Warning: No message defined for " + e.name + "</strong>"
                    );
                },
                formatAndAdd: function (e, i) {
                    var s = this.defaultMessage(e, i.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof s ? (s = s.call(this, i.parameters, e)) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)),
                        this.errorList.push({ message: s, element: e }),
                        (this.errorMap[e.name] = s),
                        (this.submitted[e.name] = s);
                },
                addWrapper: function (t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
                },
                defaultShowErrors: function () {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var i = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    }
                    if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return t(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (e, i) {
                    var s = this.errorsFor(e);
                    s.length
                        ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i))
                        : ((s = t("<" + this.settings.errorElement + ">")
                              .attr("for", this.idOrName(e))
                              .addClass(this.settings.errorClass)
                              .html(i || "")),
                          this.settings.wrapper &&
                              (s = s
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))),
                        !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)),
                        (this.toShow = this.toShow.add(s));
                },
                errorsFor: function (e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function () {
                        return t(this).attr("for") === i;
                    });
                },
                idOrName: function (t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
                },
                validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type);
                },
                findByName: function (e) {
                    return t(this.currentForm).find("[name='" + e + "']");
                },
                getLength: function (e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
                    }
                    return e.length;
                },
                depend: function (t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e);
                },
                dependTypes: {
                    boolean: function (t, e) {
                        return t;
                    },
                    string: function (e, i) {
                        return !!t(e, i.form).length;
                    },
                    function: function (t, e) {
                        return t(e);
                    },
                },
                optional: function (e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
                },
                startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, (this.pending[t.name] = !0));
                },
                stopRequest: function (e, i) {
                    --this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[e.name],
                        i && 0 === this.pendingRequest && this.formSubmitted && this.form()
                            ? (t(this.currentForm).submit(), (this.formSubmitted = !1))
                            : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                },
                previousValue: function (e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, "remote") });
                },
            },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function (e, i) {
                e.constructor === String ? (this.classRuleSettings[e] = i) : t.extend(this.classRuleSettings, e);
            },
            classRules: function (e) {
                var i = {},
                    s = t(e).attr("class");
                return (
                    s &&
                        t.each(s.split(" "), function () {
                            this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
                        }),
                    i
                );
            },
            attributeRules: function (e) {
                var i = {},
                    s = t(e),
                    r = s[0].getAttribute("type");
                for (var n in t.validator.methods) {
                    var a;
                    "required" === n ? ("" === (a = s.get(0).getAttribute(n)) && (a = !0), (a = !!a)) : (a = s.attr(n)),
                        /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)),
                        a ? (i[n] = a) : r === n && "range" !== r && (i[n] = !0);
                }
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
            },
            dataRules: function (e) {
                var i,
                    s,
                    r = {},
                    n = t(e);
                for (i in t.validator.methods) void 0 !== (s = n.data("rule-" + i.toLowerCase())) && (r[i] = s);
                return r;
            },
            staticRules: function (e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i;
            },
            normalizeRules: function (e, i) {
                return (
                    t.each(e, function (s, r) {
                        if (!1 !== r) {
                            if (r.param || r.depends) {
                                var n = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        n = !!t(r.depends, i.form).length;
                                        break;
                                    case "function":
                                        n = r.depends.call(i, i);
                                }
                                n ? (e[s] = void 0 === r.param || r.param) : delete e[s];
                            }
                        } else delete e[s];
                    }),
                    t.each(e, function (s, r) {
                        e[s] = t.isFunction(r) ? r(i) : r;
                    }),
                    t.each(["minlength", "maxlength"], function () {
                        e[this] && (e[this] = Number(e[this]));
                    }),
                    t.each(["rangelength", "range"], function () {
                        var i;
                        e[this] && (t.isArray(e[this]) ? (e[this] = [Number(e[this][0]), Number(e[this][1])]) : "string" == typeof e[this] && ((i = e[this].split(/[\s,]+/)), (e[this] = [Number(i[0]), Number(i[1])])));
                    }),
                    t.validator.autoCreateRanges &&
                        (e.min && e.max && ((e.range = [e.min, e.max]), delete e.min, delete e.max), e.minlength && e.maxlength && ((e.rangelength = [e.minlength, e.maxlength]), delete e.minlength, delete e.maxlength)),
                    e
                );
            },
            normalizeRule: function (e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function () {
                        i[this] = !0;
                    }),
                        (e = i);
                }
                return e;
            },
            addMethod: function (e, i, s) {
                (t.validator.methods[e] = i), (t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e]), i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e));
            },
            methods: {
                required: function (e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0;
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
                },
                email: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                            t
                        )
                    );
                },
                url: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                            t
                        )
                    );
                },
                date: function (t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString());
                },
                dateISO: function (t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
                },
                number: function (t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t);
                },
                creditcard: function (t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    for (var i = 0, s = 0, r = !1, n = (t = t.replace(/\D/g, "")).length - 1; n >= 0; n--) {
                        var a = t.charAt(n);
                        (s = parseInt(a, 10)), r && (s *= 2) > 9 && (s -= 9), (i += s), (r = !r);
                    }
                    return i % 10 == 0;
                },
                minlength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || r >= s;
                },
                maxlength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || r <= s;
                },
                rangelength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || (r >= s[0] && r <= s[1]);
                },
                min: function (t, e, i) {
                    return this.optional(e) || t >= i;
                },
                max: function (t, e, i) {
                    return this.optional(e) || t <= i;
                },
                range: function (t, e, i) {
                    return this.optional(e) || (t >= i[0] && t <= i[1]);
                },
                equalTo: function (e, i, s) {
                    var r = t(s);
                    return (
                        this.settings.onfocusout &&
                            r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                                t(i).valid();
                            }),
                        e === r.val()
                    );
                },
                remote: function (e, i, s) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var r = this.previousValue(i);
                    if (
                        (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                        (r.originalMessage = this.settings.messages[i.name].remote),
                        (this.settings.messages[i.name].remote = r.message),
                        (s = ("string" == typeof s && { url: s }) || s),
                        r.old === e)
                    )
                        return r.valid;
                    r.old = e;
                    var n = this;
                    this.startRequest(i);
                    var a = {};
                    return (
                        (a[i.name] = e),
                        t.ajax(
                            t.extend(
                                !0,
                                {
                                    url: s,
                                    mode: "abort",
                                    port: "validate" + i.name,
                                    dataType: "json",
                                    data: a,
                                    success: function (s) {
                                        n.settings.messages[i.name].remote = r.originalMessage;
                                        var a = !0 === s || "true" === s;
                                        if (a) {
                                            var o = n.formSubmitted;
                                            n.prepareElement(i), (n.formSubmitted = o), n.successList.push(i), delete n.invalid[i.name], n.showErrors();
                                        } else {
                                            var u = {},
                                                l = s || n.defaultMessage(i, "remote");
                                            (u[i.name] = r.message = t.isFunction(l) ? l(e) : l), (n.invalid[i.name] = !0), n.showErrors(u);
                                        }
                                        (r.valid = a), n.stopRequest(i, a);
                                    },
                                },
                                s
                            )
                        ),
                        "pending"
                    );
                },
            },
        }),
        (t.format = t.validator.format);
})(jQuery),
    (function (t) {
        var e = {};
        if (t.ajaxPrefilter)
            t.ajaxPrefilter(function (t, i, s) {
                var r = t.port;
                "abort" === t.mode && (e[r] && e[r].abort(), (e[r] = s));
            });
        else {
            var i = t.ajax;
            t.ajax = function (s) {
                var r = ("mode" in s ? s : t.ajaxSettings).mode,
                    n = ("port" in s ? s : t.ajaxSettings).port;
                return "abort" === r ? (e[n] && e[n].abort(), (e[n] = i.apply(this, arguments)), e[n]) : i.apply(this, arguments);
            };
        }
    })(jQuery),
    (function (t) {
        t.extend(t.fn, {
            validateDelegate: function (e, i, s) {
                return this.bind(i, function (i) {
                    var r = t(i.target);
                    if (r.is(e)) return s.apply(r, arguments);
                });
            },
        });
    })(jQuery);

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
    function A(a, b, d) {
        var c = a[0],
            g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
            e = d == _update ? { checked: c[k], disabled: c[n], indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate) } : c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g);
        else if (/^(un|en|de)/.test(d) && e) q(a, g);
        else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g);
        }
    }
    function x(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            u = b == _indeterminate,
            v = b == n,
            s = u ? _determinate : e ? y : "enabled",
            F = l(a, s + t(c[_type])),
            B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                    p = 'input[name="' + c.name + '"]',
                    p = w.length ? w.find(p) : f(p);
                p.each(function () {
                    this !== c && f(this).data(m) && q(f(this), b);
                });
            }
            u ? ((c[b] = !0), c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d);
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "");
    }
    function q(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            f = b == _indeterminate,
            m = b == n,
            s = f ? _determinate : e ? y : "enabled",
            q = l(a, s + t(c[_type])),
            r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d);
        }
        !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "");
    }
    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]')
                .add(a.closest(_label))
                .off(".i");
        }
    }
    function l(a, b, f) {
        if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")];
    }
    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f));
        }
    }
    var m = "iCheck",
        C = m + "-helper",
        r = "radio",
        k = "checked",
        y = "un" + k,
        n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function (a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
            c = f(),
            g = function (a) {
                a.each(function () {
                    var a = f(this);
                    c = a.is(d) ? c.add(a) : c.add(a.find(d));
                });
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))
            return (
                (a = a.toLowerCase()),
                g(this),
                c.each(function () {
                    var c = f(this);
                    "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
                    f.isFunction(b) && b();
                })
            );
        if ("object" != typeof a && a) return this;
        var e = f.extend({ checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0 }, a),
            l = e.handle,
            v = e.hoverClass || "hover",
            s = e.focusClass || "focus",
            t = e.activeClass || "active",
            B = !!e.labelHover,
            w = e.labelHoverClass || "hover",
            p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]';
        -50 > p && (p = -50);
        g(this);
        return c.each(function () {
            var a = f(this);
            E(a);
            var c = this,
                b = c.id,
                g = -p + "%",
                d = 100 + 2 * p + "%",
                d = { position: "absolute", top: g, left: g, display: "block", width: d, height: d, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 },
                g = _mobile ? { position: "absolute", visibility: "hidden" } : p ? d : { position: "absolute", opacity: 0 },
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
                u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u &&
                z.each(function () {
                    h += 'aria-labelledby="';
                    this.id ? (h += this.id) : ((this.id = y), (h += y));
                    h += '"';
                });
            h = a
                .wrap(h + "/>")
                [_callback]("ifCreated")
                .parent()
                .append(e.insert);
            d = f('<ins class="' + C + '"/>')
                .css(d)
                .appendTo(h);
            a.data(m, { o: e, s: a.attr("style") }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length)
                z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
                    var d = b[_type],
                        e = f(this);
                    if (!c[n]) {
                        if (d == _click) {
                            if (f(b.target).is("a")) return;
                            A(a, !1, !0);
                        } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                        b.stopPropagation();
                    }
                });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return !1;
                if ("keydown" == d && 32 == b) return (c[_type] == r && c[k]) || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);
                else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s);
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
                var d = b[_type],
                    e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d)) h[_add](e);
                        else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w);
                    }
                    b.stopPropagation();
                }
            });
        });
    };
})(window.jQuery || window.Zepto);

// INPUT FIELD INCREMENTER
jQuery(document).ready(function () {
    $(".qtyplus").click(function (e) {
        e.preventDefault(), (fieldName = $(this).attr("name"));
        var a = parseInt($("input[name=" + fieldName + "]").val());
        isNaN(a) ? $("input[name=" + fieldName + "]").val(1) : $("input[name=" + fieldName + "]").val(a + 1);
    }),
        $(".qtyminus").click(function (e) {
            e.preventDefault(), (fieldName = $(this).attr("name"));
            var a = parseInt($("input[name=" + fieldName + "]").val());
            !isNaN(a) && a > 0 ? $("input[name=" + fieldName + "]").val(a - 1) : $("input[name=" + fieldName + "]").val(0);
        });
});


/* GENERATE OPTIONS FOR WEIGHT
//<option value="35">77lb - 35kg</option>
var i;
for (i = 35; i<=150; i++) {
	document.write('<option value="' + i + '">' + Math.round(i*2.2046) + 'lb - ' + i + 'kg</option>\n');
}*/

/* GENERATE OPTIONS FOR AGE
//<option value="35">77lb - 35kg</option>
var i;
for (i = 15; i<=90; i++) {
	document.write('<option value="' + i + '">' + i + 'yrs</option>\n');
}*/

var gender;
var activity_level;
var carb;
var prot;
var fat;
var user_goal;

function generateTable(user_carb, user_prot, user_fat, goal) {
	var table = document.getElementsByClassName("table")[0];
	var rows = table.rows;

	//set protein row
	rows[2].cells[1].innerText = user_prot + 'g';
	rows[2].cells[2].innerText = user_prot + 'g';
	rows[2].cells[3].innerText = user_prot + 'g';
	rows[2].cells[4].innerText = user_prot + 'g';
	rows[2].cells[5].innerText = user_prot + 'g';
	rows[2].cells[6].innerText = user_prot + 'g';
	rows[2].cells[7].innerText = user_prot + 'g';

	if (goal == -500) { //goals 1&5
		//set regular days
		rows[1].cells[3].innerText = user_carb + 'g';
		rows[1].cells[4].innerText = user_carb + 'g';
		rows[1].cells[6].innerText = user_carb + 'g';
		rows[1].cells[7].innerText = user_carb + 'g';

		rows[3].cells[3].innerText = user_fat + 'g';
		rows[3].cells[4].innerText = user_fat + 'g';
		rows[3].cells[6].innerText = user_fat + 'g';
		rows[3].cells[7].innerText = user_fat + 'g';

		//set zero carb days
		rows[1].cells[1].innerText = 0 + 'g';
		rows[1].cells[2].innerText = 0 + 'g';
		rows[1].cells[5].innerText = 0 + 'g';

		//calculate new fat amount
		user_fat = Math.round(user_fat + (user_carb * 4)/9);

		rows[3].cells[1].innerText = user_fat + 'g';
		rows[3].cells[2].innerText = user_fat + 'g';
		rows[3].cells[5].innerText = user_fat + 'g';
	}

	if (goal == -750) { //goal 2
		//set regular days
		rows[1].cells[4].innerText = user_carb + 'g';
		rows[1].cells[6].innerText = user_carb + 'g';
		rows[1].cells[7].innerText = user_carb + 'g';

		rows[3].cells[4].innerText = user_fat + 'g';
		rows[3].cells[6].innerText = user_fat + 'g';
		rows[3].cells[7].innerText = user_fat + 'g';

		//set zero carb days
		rows[1].cells[1].innerText = 0 + 'g';
		rows[1].cells[2].innerText = 0 + 'g';
		rows[1].cells[3].innerText = 0 + 'g';
		rows[1].cells[5].innerText = 0 + 'g';

		//calculate new fat amount
		user_fat = Math.round(user_fat + (user_carb * 4)/9);

		rows[3].cells[1].innerText = user_fat + 'g';
		rows[3].cells[2].innerText = user_fat + 'g';
		rows[3].cells[3].innerText = user_fat + 'g';
		rows[3].cells[5].innerText = user_fat + 'g';
	}

	document.getElementById("resultsTable").style.display = 'block';
}

function hideResultsTable() {
	document.getElementById("resultsTable").style.display = 'none';
}

function calculateAndRedirect() {

	var program_1_url = "";
	var professional_url = "";

	var user_weight = document.getElementById("weight_kg").value;
	var user_height = document.getElementById("height_cm").value;
	var user_age = document.getElementById("age_yrs").value;

	if (user_goal == "professional_plan") {
		return professional_url;
	}

	var calories = 0;
	var user_carb = 0;
	var user_prot = 0;
	var user_fat = 0;

	if (gender == "male") {
		calories = Math.round(66 + (13.7 * user_weight) + (5 * user_height) - (6.8 * user_age)); //step 1 male
	} else {
		calories = 655 + (9.6 * user_weight) + (1.8 * user_height) - (4.7 * user_age); // step 1 female
	}

	calories = Math.round(calories * activity_level); //step 2
	calories = Math.round(calories + user_goal); //step 3
	user_carb = Math.round((calories * carb) / 4);
	user_prot = Math.round((calories * prot) / 4);
	user_fat = Math.round((calories * fat) / 9);

	generateTable(user_carb, user_prot, user_fat, user_goal);

	return program_1_url;

}

function setUserGoal(input) {
	user_goal = parseInt(input.value);
}

function setActivityLevel(input){
	activity_level = input.value;
}

function setBodyType(input){
	if (input.value == "endomorph") {
		carb = 0.45;
		prot = 0.35;
		fat = 0.20;
	} else { //ecto and meso have the same ratios
		carb = 0.50;
		prot = 0.30;
		fat = 0.20;
	}
}

function showMaleGoals(){
	document.getElementById('male_goal').style.display ='';
	document.getElementById('female_goal').style.display ='none';
	gender = "male";
}

function showFemaleGoals(){
	document.getElementById('female_goal').style.display ='';
	document.getElementById('male_goal').style.display ='none';
	gender = "female";
}


(function ($) {

	"use strict";

	$(window).on('load', function () {
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350);
		$(window).scroll();
	});

	/* Scroll to top small screens: change the top position offset based on your content*/
	var $Scrolbt = $('button.backward,button.forward');
	var $Element = $('html, body');

	if (window.innerWidth < 800) {
		$Scrolbt.on("click", function () {
			$Element.animate({
				scrollTop: 100
			}, "slow");
			return false;
		});
	}

    /* Form submit loader */
    $('form').on('submit',function() {
        var form = $("form#wrapped");
        form.validate();
        if (form.valid()) {
            $("#loader_form").fadeIn();
        }
    });


})(window.jQuery);

/*  Wizard */
jQuery(function ($) {
	"use strict";
	// Chose here which method to send the email, available:
	// Simple phpmail text/plain > form_send_without_branch.php (default)
	// PHPMailer text/html > phpmailer/without_branch_phpmailer.php
	// PHPMailer text/html SMTP > phpmailer/without_branch_phpmailer_smtp.php
	// PHPMailer with html template > phpmailer/without_branch_phpmailer_template.php
	// PHPMailer with html template SMTP> phpmailer/without_branch_phpmailer_template_smtp.php
	$('form#wrapped').attr('action', 'form_send_without_branch.php');
	$("#wizard_container").wizard({
		stepsWrapper: "#wrapped",
		submit: ".submit",
		beforeSelect: function (event, state) {
			if ($('input#website').val().length != 0) {
				return false;
			}
			if (!state.isMovingForward)
				return true;
			var inputs = $(this).wizard('state').step.find(':input');
			return !inputs.length || !!inputs.valid();
		}
	}).validate({
		errorPlacement: function (error, element) {
			if (element.is(':radio') || element.is(':checkbox')) {
				error.insertBefore(element.next());
			} else {
				error.insertAfter(element);
			}
		}
	});
});
