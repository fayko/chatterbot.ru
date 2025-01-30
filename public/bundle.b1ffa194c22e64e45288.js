/*! For license information please see bundle.b1ffa194c22e64e45288.js.LICENSE.txt */
(()=>{var e={4448:(e,t,n)=>{"use strict";var r=n(7294),o=n(3840);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){b[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];b[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){b[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){b[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){b[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){b[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){b[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){b[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){b[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function g(e){return e[1].toUpperCase()}function _(e,t,n,r){var o=b.hasOwnProperty(t)?b[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,g);b[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,g);b[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,g);b[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){b[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),b.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){b[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function U(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=D&&e[D]||e["@@iterator"])?e:null}var A,j=Object.assign;function R(e){if(void 0===A)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var z=!1;function V(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function F(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case x:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case T:return"Suspense";case N:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case S:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case I:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return B(e(t))}catch(e){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function G(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function $(e){e._valueTracker||(e._valueTracker=function(e){var t=G(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&_(e,"checked",t,!1)}function Z(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function K(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ie(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function be(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(i(62))}}function _e(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,xe=null,Ee=null;function Ce(e){if(e=yo(e)){if("function"!=typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Se(e){xe?Ee?Ee.push(e):Ee=[e]:xe=e}function Oe(){if(xe){var e=xe,t=Ee;if(Ee=xe=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function Te(){}var Ne=!1;function Ie(e,t,n){if(Ne)return e(t,n);Ne=!0;try{return Pe(e,t,n)}finally{Ne=!1,(null!==xe||null!==Ee)&&(Te(),Oe())}}function Me(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(i(231,t,typeof n));return n}var Le=!1;if(c)try{var De={};Object.defineProperty(De,"passive",{get:function(){Le=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ce){Le=!1}function Ue(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Ae=!1,je=null,Re=!1,ze=null,Ve={onError:function(e){Ae=!0,je=e}};function Fe(e,t,n,r,o,i,a,l,s){Ae=!1,je=null,Ue.apply(Ve,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Be(e)!==e)throw Error(i(188))}function Ge(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return We(o),e;if(a===r)return We(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?$e(e):null}function $e(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=$e(e);if(null!==t)return t;e=e.sibling}return null}var Ye=o.unstable_scheduleCallback,Je=o.unstable_cancelCallback,qe=o.unstable_shouldYield,Xe=o.unstable_requestPaint,Qe=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,Ke=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0==(4194240&(ut<<=1))&&(ut=64),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var _t=0;function yt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var wt,kt,xt,Et,Ct,St=!1,Ot=[],Pt=null,Tt=null,Nt=null,It=new Map,Mt=new Map,Lt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ut(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":It.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(t.pointerId)}}function At(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=yo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function jt(e){var t=_o(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,(function(){xt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Rt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function zt(e,t,n){Rt(e)&&n.delete(t)}function Vt(){St=!1,null!==Pt&&Rt(Pt)&&(Pt=null),null!==Tt&&Rt(Tt)&&(Tt=null),null!==Nt&&Rt(Nt)&&(Nt=null),It.forEach(zt),Mt.forEach(zt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,St||(St=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vt)))}function Bt(e){function t(t){return Ft(t,e)}if(0<Ot.length){Ft(Ot[0],e);for(var n=1;n<Ot.length;n++){var r=Ot[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ft(Pt,e),null!==Tt&&Ft(Tt,e),null!==Nt&&Ft(Nt,e),It.forEach(t),Mt.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)jt(n),null===n.blockedOn&&Lt.shift()}var Ht=y.ReactCurrentBatchConfig,Wt=!0;function Gt(e,t,n,r){var o=_t,i=Ht.transition;Ht.transition=null;try{_t=1,Yt(e,t,n,r)}finally{_t=o,Ht.transition=i}}function $t(e,t,n,r){var o=_t,i=Ht.transition;Ht.transition=null;try{_t=4,Yt(e,t,n,r)}finally{_t=o,Ht.transition=i}}function Yt(e,t,n,r){if(Wt){var o=qt(e,t,n,r);if(null===o)Wr(e,t,r,Jt,n),Ut(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Pt=At(Pt,e,t,n,r,o),!0;case"dragenter":return Tt=At(Tt,e,t,n,r,o),!0;case"mouseover":return Nt=At(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return It.set(i,At(It.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mt.set(i,At(Mt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Ut(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==o;){var i=yo(o);if(null!==i&&wt(i),null===(i=qt(e,t,n,r))&&Wr(e,t,r,Jt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Jt=null;function qt(e,t,n,r){if(Jt=null,null!==(e=_o(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Ke:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Zt=null,Kt=null;function en(){if(Kt)return Kt;var e,t,n=Zt,r=n.length,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Kt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=j({},un,{view:0,detail:0}),pn=on(dn),fn=j({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=on(fn),hn=on(j({},fn,{dataTransfer:0})),bn=on(j({},dn,{relatedTarget:0})),vn=on(j({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),gn=j({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_n=on(gn),yn=on(j({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xn[e])&&!!t[e]}function Cn(){return En}var Sn=j({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),On=on(Sn),Pn=on(j({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=on(j({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Nn=on(j({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=j({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mn=on(In),Ln=[9,13,27,32],Dn=c&&"CompositionEvent"in window,Un=null;c&&"documentMode"in document&&(Un=document.documentMode);var An=c&&"TextEvent"in window&&!Un,jn=c&&(!Dn||Un&&8<Un&&11>=Un),Rn=String.fromCharCode(32),zn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Gn(e,t,n,r){Se(r),0<(t=$r(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Yn=null;function Jn(e){Rr(e,0)}function qn(e){if(Y(wo(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(c){var Zn;if(c){var Kn="oninput"in document;if(!Kn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Kn="function"==typeof er.oninput}Zn=Kn}else Zn=!1;Qn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){$n&&($n.detachEvent("onpropertychange",nr),Yn=$n=null)}function nr(e){if("value"===e.propertyName&&qn(Yn)){var t=[];Gn(t,Yn,e,we(e)),Ie(Jn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,($n=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Yn)}function ir(e,t){if("click"===e)return qn(t)}function ar(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function sr(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cr(n,i);var a=cr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,br=null,vr=null,gr=null,_r=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;_r||null==br||br!==J(r)||("selectionStart"in(r=br)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},gr&&sr(gr,r)||(gr=r,0<(r=$r(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},xr={},Er={};function Cr(e){if(xr[e])return xr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return xr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Sr=Cr("animationend"),Or=Cr("animationiteration"),Pr=Cr("animationstart"),Tr=Cr("transitionend"),Nr=new Map,Ir="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Nr.set(e,t),s(t,[e])}for(var Lr=0;Lr<Ir.length;Lr++){var Dr=Ir[Lr];Mr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Mr(Sr,"onAnimationEnd"),Mr(Or,"onAnimationIteration"),Mr(Pr,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function jr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,u){if(Fe.apply(this,arguments),Ae){if(!Ae)throw Error(i(198));var c=je;Ae=!1,je=null,Re||(Re=!0,ze=c)}}(r,t,void 0,e),e.currentTarget=null}function Rr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;jr(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;jr(o,l,u),i=s}}}if(Re)throw e=ze,Re=!1,ze=null,e}function zr(e,t){var n=t[bo];void 0===n&&(n=t[bo]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Fr]){e[Fr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Ar.has(t)||Vr(t,!1,e),Vr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Vr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Xt(t)){case 1:var o=Gt;break;case 4:o=$t;break;default:o=Yt}n=o.bind(null,t,n,e),o=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,o){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=_o(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Ie((function(){var r=i,o=we(n),a=[];e:{var l=Nr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=On;break;case"focusin":u="focus",s=bn;break;case"focusout":u="blur",s=bn;break;case"beforeblur":case"afterblur":s=bn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case Sr:case Or:case Pr:s=vn;break;case Tr:s=Nn;break;case"scroll":s=pn;break;case"wheel":s=Mn;break;case"copy":case"cut":case"paste":s=_n;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!=(4&t),d=!c&&"scroll"===e,p=c?null!==l?l+"Capture":null:l;c=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Me(m,p))&&c.push(Gr(m,h,f)))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0==(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(u=n.relatedTarget||n.fromElement)||!_o(u)&&!u[ho])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?_o(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:wo(s),f=null==u?l:wo(u),(l=new c(h,m+"leave",s,n,o)).target=d,l.relatedTarget=f,h=null,_o(o)===r&&((c=new c(p,m+"enter",u,n,o)).target=f,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(p=u,m=0,f=c=s;f;f=Yr(f))m++;for(f=0,h=p;h;h=Yr(h))f++;for(;0<m-f;)c=Yr(c),m--;for(;0<f-m;)p=Yr(p),f--;for(;m--;){if(c===p||null!==p&&c===p.alternate)break e;c=Yr(c),p=Yr(p)}c=null}else c=null;null!==s&&Jr(a,l,s,c,!1),null!==u&&null!==d&&Jr(a,d,u,c,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var b=Xn;else if(Wn(l))if(Qn)b=ar;else{b=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(b=ir);switch(b&&(b=b(e,r))?Gn(a,b,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(br=v,vr=r,gr=null);break;case"focusout":gr=vr=br=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,yr(a,n,o);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":yr(a,n,o)}var g;if(Dn)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Bn?Vn(e,n)&&(_="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(_="onCompositionStart");_&&(jn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==_?"onCompositionEnd"===_&&Bn&&(g=en()):(Zt="value"in(Qt=o)?Qt.value:Qt.textContent,Bn=!0)),0<(v=$r(r,_)).length&&(_=new yn(_,e,null,n,o),a.push({event:_,listeners:v}),g?_.data=g:null!==(g=Fn(n))&&(_.data=g))),(g=An?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(zn=!0,Rn);case"textInput":return(e=t.data)===Rn&&zn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Dn&&Vn(e,t)?(e=en(),Kt=Zt=Qt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=$r(r,"onBeforeInput")).length&&(o=new yn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=g))}Rr(a,t)}))}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Me(e,n))&&r.unshift(Gr(e,i,o)),null!=(i=Me(e,t))&&r.push(Gr(e,i,o))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Jr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=Me(n,i))&&a.unshift(Gr(n,s,l)):o||null!=(s=Me(n,i))&&a.push(Gr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"==typeof e?e:""+e).replace(qr,"\n").replace(Xr,"")}function Zr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(i(425))}function Kr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"==typeof setTimeout?setTimeout:void 0,oo="function"==typeof clearTimeout?clearTimeout:void 0,io="function"==typeof Promise?Promise:void 0,ao="function"==typeof queueMicrotask?queueMicrotask:void 0!==io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,mo="__reactProps$"+po,ho="__reactContainer$"+po,bo="__reactEvents$"+po,vo="__reactListeners$"+po,go="__reactHandles$"+po;function _o(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ho]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[fo])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function yo(e){return!(e=e[fo]||e[ho])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[mo]||null}var xo=[],Eo=-1;function Co(e){return{current:e}}function So(e){0>Eo||(e.current=xo[Eo],xo[Eo]=null,Eo--)}function Oo(e,t){Eo++,xo[Eo]=e.current,e.current=t}var Po={},To=Co(Po),No=Co(!1),Io=Po;function Mo(e,t){var n=e.type.contextTypes;if(!n)return Po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Lo(e){return null!=(e=e.childContextTypes)}function Do(){So(No),So(To)}function Uo(e,t,n){if(To.current!==Po)throw Error(i(168));Oo(To,t),Oo(No,n)}function Ao(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,H(e)||"Unknown",o));return j({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,Io=To.current,Oo(To,e),Oo(No,No.current),!0}function Ro(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ao(e,t,Io),r.__reactInternalMemoizedMergedChildContext=e,So(No),So(To),Oo(To,e)):So(No),Oo(No,n)}var zo=null,Vo=!1,Fo=!1;function Bo(e){null===zo?zo=[e]:zo.push(e)}function Ho(){if(!Fo&&null!==zo){Fo=!0;var e=0,t=_t;try{var n=zo;for(_t=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}zo=null,Vo=!1}catch(t){throw null!==zo&&(zo=zo.slice(e+1)),Ye(Ke,Ho),t}finally{_t=t,Fo=!1}}return null}var Wo=[],Go=0,$o=null,Yo=0,Jo=[],qo=0,Xo=null,Qo=1,Zo="";function Ko(e,t){Wo[Go++]=Yo,Wo[Go++]=$o,$o=e,Yo=t}function ei(e,t,n){Jo[qo++]=Qo,Jo[qo++]=Zo,Jo[qo++]=Xo,Xo=e;var r=Qo;e=Zo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Qo=1<<32-at(t)+o|n<<o|r,Zo=i+e}else Qo=1<<i|n<<o|r,Zo=e}function ti(e){null!==e.return&&(Ko(e,1),ei(e,1,0))}function ni(e){for(;e===$o;)$o=Wo[--Go],Wo[Go]=null,Yo=Wo[--Go],Wo[Go]=null;for(;e===Xo;)Xo=Jo[--qo],Jo[qo]=null,Zo=Jo[--qo],Jo[qo]=null,Qo=Jo[--qo],Jo[qo]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Mu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xo?{id:Qo,overflow:Zo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ui(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ui(e))throw Error(i(418));t=uo(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw fi(),Error(i(418));for(;t;)li(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?uo(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=uo(e.nextSibling)}function mi(){oi=ri=null,ii=!1}function hi(e){null===ai?ai=[e]:ai.push(e)}var bi=y.ReactCurrentBatchConfig;function vi(e,t){if(e&&e.defaultProps){for(var n in t=j({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var gi=Co(null),_i=null,yi=null,wi=null;function ki(){wi=yi=_i=null}function xi(e){var t=gi.current;So(gi),e._currentValue=t}function Ei(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ci(e,t){_i=e,wi=yi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Si(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},null===yi){if(null===_i)throw Error(i(308));yi=e,_i.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var Oi=null;function Pi(e){null===Oi?Oi=[e]:Oi.push(e)}function Ti(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ni(e,r)}function Ni(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ii=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ui(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Ts)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ni(e,n)}return null===(o=r.interleaved)?(t.next=t,Pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ni(e,n)}function Ai(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,gt(e,n)}}function ji(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ri(e,t,n,r){var o=e.updateQueue;Ii=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(p=t,f=n,h.tag){case 1:if("function"==typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(p="function"==typeof(m=h.payload)?m.call(f,d,p):m))break e;d=j({},d,p);break e;case 2:Ii=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=f,s=d):c=c.next=f,a|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);js|=a,e.lanes=a,e.memoizedState=d}}function zi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(i(191,o));o.call(r)}}}var Vi=(new r.Component).refs;function Fi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:j({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),o=nu(e),i=Di(r,o);i.payload=t,null!=n&&(i.callback=n),null!==(t=Ui(e,i,o))&&(ru(t,e,o,r),Ai(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),o=nu(e),i=Di(r,o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Ui(e,i,o))&&(ru(t,e,o,r),Ai(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),o=Di(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=Ui(e,o,r))&&(ru(t,e,r,n),Ai(t,e,r))}};function Hi(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function Wi(e,t,n){var r=!1,o=Po,i=t.contextType;return"object"==typeof i&&null!==i?i=Si(i):(o=Lo(t)?Io:To.current,i=(r=null!=(r=t.contextTypes))?Mo(e,o):Po),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Gi(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function $i(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Vi,Mi(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=Si(i):(i=Lo(t)?Io:To.current,o.context=Mo(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(Fi(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Bi.enqueueReplaceState(o,o.state,null),Ri(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function Yi(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;t===Vi&&(t=o.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!=typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qi(e){return(0,e._init)(e._payload)}function Xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Du(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ru(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===x?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===M&&qi(i)===t.type)?((r=o(t,n.props)).ref=Yi(e,t,n),r.return=e,r):((r=Uu(n.type,n.key,n.props,null,e.mode,r)).ref=Yi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=zu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Au(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Ru(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Uu(t.type,t.key,t.props,null,e.mode,n)).ref=Yi(e,null,t),n.return=e,n;case k:return(t=zu(t,e.mode,n)).return=e,t;case M:return p(e,(0,t._init)(t._payload),n)}if(te(t)||U(t))return(t=Au(t,e.mode,n,null)).return=e,t;Ji(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case k:return n.key===o?c(e,t,n,r):null;case M:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||U(n))return null!==o?null:d(e,t,n,r,null);Ji(e,n)}return null}function m(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case M:return m(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||U(r))return d(t,e=e.get(n)||null,r,o,null);Ji(t,r)}return null}function h(o,i,l,s){for(var u=null,c=null,d=i,h=i=0,b=null;null!==d&&h<l.length;h++){d.index>h?(b=d,d=null):b=d.sibling;var v=f(o,d,l[h],s);if(null===v){null===d&&(d=b);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,h),null===c?u=v:c.sibling=v,c=v,d=b}if(h===l.length)return n(o,d),ii&&Ko(o,h),u;if(null===d){for(;h<l.length;h++)null!==(d=p(o,l[h],s))&&(i=a(d,i,h),null===c?u=d:c.sibling=d,c=d);return ii&&Ko(o,h),u}for(d=r(o,d);h<l.length;h++)null!==(b=m(d,o,h,l[h],s))&&(e&&null!==b.alternate&&d.delete(null===b.key?h:b.key),i=a(b,i,h),null===c?u=b:c.sibling=b,c=b);return e&&d.forEach((function(e){return t(o,e)})),ii&&Ko(o,h),u}function b(o,l,s,u){var c=U(s);if("function"!=typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,h=l,b=l=0,v=null,g=s.next();null!==h&&!g.done;b++,g=s.next()){h.index>b?(v=h,h=null):v=h.sibling;var _=f(o,h,g.value,u);if(null===_){null===h&&(h=v);break}e&&h&&null===_.alternate&&t(o,h),l=a(_,l,b),null===d?c=_:d.sibling=_,d=_,h=v}if(g.done)return n(o,h),ii&&Ko(o,b),c;if(null===h){for(;!g.done;b++,g=s.next())null!==(g=p(o,g.value,u))&&(l=a(g,l,b),null===d?c=g:d.sibling=g,d=g);return ii&&Ko(o,b),c}for(h=r(o,h);!g.done;b++,g=s.next())null!==(g=m(h,o,b,g.value,u))&&(e&&null!==g.alternate&&h.delete(null===g.key?b:g.key),l=a(g,l,b),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach((function(e){return t(o,e)})),ii&&Ko(o,b),c}return function e(r,i,a,s){if("object"==typeof a&&null!==a&&a.type===x&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===x){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===M&&qi(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=Yi(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===x?((i=Au(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Uu(a.type,a.key,a.props,null,r.mode,s)).ref=Yi(r,i,a),s.return=r,r=s)}return l(r);case k:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=zu(a,r.mode,s)).return=r,r=i}return l(r);case M:return e(r,i,(c=a._init)(a._payload),s)}if(te(a))return h(r,i,a,s);if(U(a))return b(r,i,a,s);Ji(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Ru(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var Qi=Xi(!0),Zi=Xi(!1),Ki={},ea=Co(Ki),ta=Co(Ki),na=Co(Ki);function ra(e){if(e===Ki)throw Error(i(174));return e}function oa(e,t){switch(Oo(na,t),Oo(ta,e),Oo(ea,Ki),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}So(ea),Oo(ea,t)}function ia(){So(ea),So(ta),So(na)}function aa(e){ra(na.current);var t=ra(ea.current),n=se(t,e.type);t!==n&&(Oo(ta,e),Oo(ea,n))}function la(e){ta.current===e&&(So(ea),So(ta))}var sa=Co(0);function ua(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function da(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var pa=y.ReactCurrentDispatcher,fa=y.ReactCurrentBatchConfig,ma=0,ha=null,ba=null,va=null,ga=!1,_a=!1,ya=0,wa=0;function ka(){throw Error(i(321))}function xa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function Ea(e,t,n,r,o,a){if(ma=a,ha=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=null===e||null===e.memoizedState?ll:sl,e=n(r,o),_a){a=0;do{if(_a=!1,ya=0,25<=a)throw Error(i(301));a+=1,va=ba=null,t.updateQueue=null,pa.current=ul,e=n(r,o)}while(_a)}if(pa.current=al,t=null!==ba&&null!==ba.next,ma=0,va=ba=ha=null,ga=!1,t)throw Error(i(300));return e}function Ca(){var e=0!==ya;return ya=0,e}function Sa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===va?ha.memoizedState=va=e:va=va.next=e,va}function Oa(){if(null===ba){var e=ha.alternate;e=null!==e?e.memoizedState:null}else e=ba.next;var t=null===va?ha.memoizedState:va.next;if(null!==t)va=t,ba=e;else{if(null===e)throw Error(i(310));e={memoizedState:(ba=e).memoizedState,baseState:ba.baseState,baseQueue:ba.baseQueue,queue:ba.queue,next:null},null===va?ha.memoizedState=va=e:va=va.next=e}return va}function Pa(e,t){return"function"==typeof t?t(e):t}function Ta(e){var t=Oa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=ba,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((ma&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=p,l=r):u=u.next=p,ha.lanes|=d,js|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,ha.lanes|=a,js|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=Oa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ia(){}function Ma(e,t){var n=ha,r=Oa(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,yl=!0),r=r.queue,Wa(Ua.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==va&&1&va.memoizedState.tag){if(n.flags|=2048,za(9,Da.bind(null,n,r,o,t),void 0,null),null===Ns)throw Error(i(349));0!=(30&ma)||La(n,t,o)}return o}function La(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ha.updateQueue)?(t={lastEffect:null,stores:null},ha.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Da(e,t,n,r){t.value=n,t.getSnapshot=r,Aa(t)&&ja(e)}function Ua(e,t,n){return n((function(){Aa(t)&&ja(e)}))}function Aa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(e){return!0}}function ja(e){var t=Ni(e,1);null!==t&&ru(t,e,1,-1)}function Ra(e){var t=Sa();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,ha,e),[t.memoizedState,e]}function za(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ha.updateQueue)?(t={lastEffect:null,stores:null},ha.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Va(){return Oa().memoizedState}function Fa(e,t,n,r){var o=Sa();ha.flags|=e,o.memoizedState=za(1|t,n,void 0,void 0===r?null:r)}function Ba(e,t,n,r){var o=Oa();r=void 0===r?null:r;var i=void 0;if(null!==ba){var a=ba.memoizedState;if(i=a.destroy,null!==r&&xa(r,a.deps))return void(o.memoizedState=za(t,n,i,r))}ha.flags|=e,o.memoizedState=za(1|t,n,i,r)}function Ha(e,t){return Fa(8390656,8,e,t)}function Wa(e,t){return Ba(2048,8,e,t)}function Ga(e,t){return Ba(4,2,e,t)}function $a(e,t){return Ba(4,4,e,t)}function Ya(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ja(e,t,n){return n=null!=n?n.concat([e]):null,Ba(4,4,Ya.bind(null,t,e),n)}function qa(){}function Xa(e,t){var n=Oa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qa(e,t){var n=Oa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Za(e,t,n){return 0==(21&ma)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=ht(),ha.lanes|=n,js|=n,e.baseState=!0),t)}function Ka(e,t){var n=_t;_t=0!==n&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{_t=n,fa.transition=r}}function el(){return Oa().memoizedState}function tl(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))ol(t,n);else if(null!==(n=Ti(e,t,n,r))){ru(n,e,r,tu()),il(n,t,r)}}function nl(e,t,n){var r=nu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))ol(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,Pi(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(e){}null!==(n=Ti(e,t,o,r))&&(ru(n,e,r,o=tu()),il(n,t,r))}}function rl(e){var t=e.alternate;return e===ha||null!==t&&t===ha}function ol(e,t){_a=ga=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function il(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,gt(e,n)}}var al={readContext:Si,useCallback:ka,useContext:ka,useEffect:ka,useImperativeHandle:ka,useInsertionEffect:ka,useLayoutEffect:ka,useMemo:ka,useReducer:ka,useRef:ka,useState:ka,useDebugValue:ka,useDeferredValue:ka,useTransition:ka,useMutableSource:ka,useSyncExternalStore:ka,useId:ka,unstable_isNewReconciler:!1},ll={readContext:Si,useCallback:function(e,t){return Sa().memoizedState=[e,void 0===t?null:t],e},useContext:Si,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Fa(4194308,4,Ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fa(4,2,e,t)},useMemo:function(e,t){var n=Sa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Sa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,ha,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Sa().memoizedState=e},useState:Ra,useDebugValue:qa,useDeferredValue:function(e){return Sa().memoizedState=e},useTransition:function(){var e=Ra(!1),t=e[0];return e=Ka.bind(null,e[1]),Sa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ha,o=Sa();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ns)throw Error(i(349));0!=(30&ma)||La(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Ha(Ua.bind(null,r,a,e),[e]),r.flags|=2048,za(9,Da.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Sa(),t=Ns.identifierPrefix;if(ii){var n=Zo;t=":"+t+"R"+(n=(Qo&~(1<<32-at(Qo)-1)).toString(32)+n),0<(n=ya++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=wa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sl={readContext:Si,useCallback:Xa,useContext:Si,useEffect:Wa,useImperativeHandle:Ja,useInsertionEffect:Ga,useLayoutEffect:$a,useMemo:Qa,useReducer:Ta,useRef:Va,useState:function(){return Ta(Pa)},useDebugValue:qa,useDeferredValue:function(e){return Za(Oa(),ba.memoizedState,e)},useTransition:function(){return[Ta(Pa)[0],Oa().memoizedState]},useMutableSource:Ia,useSyncExternalStore:Ma,useId:el,unstable_isNewReconciler:!1},ul={readContext:Si,useCallback:Xa,useContext:Si,useEffect:Wa,useImperativeHandle:Ja,useInsertionEffect:Ga,useLayoutEffect:$a,useMemo:Qa,useReducer:Na,useRef:Va,useState:function(){return Na(Pa)},useDebugValue:qa,useDeferredValue:function(e){var t=Oa();return null===ba?t.memoizedState=e:Za(t,ba.memoizedState,e)},useTransition:function(){return[Na(Pa)[0],Oa().memoizedState]},useMutableSource:Ia,useSyncExternalStore:Ma,useId:el,unstable_isNewReconciler:!1};function cl(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function pl(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var fl="function"==typeof WeakMap?WeakMap:Map;function ml(e,t,n){(n=Di(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,$s=r),pl(0,t)},n}function hl(e,t,n){(n=Di(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pl(0,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){pl(0,t),"function"!=typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function bl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Su.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,r,o){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Di(-1,1)).tag=2,Ui(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var _l=y.ReactCurrentOwner,yl=!1;function wl(e,t,n,r){t.child=null===e?Zi(t,null,n,r):Qi(t,e.child,n,r)}function kl(e,t,n,r,o){n=n.render;var i=t.ref;return Ci(t,o),r=Ea(e,t,n,r,i,o),n=Ca(),null===e||yl?(ii&&n&&ti(t),t.flags|=1,wl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gl(e,t,o))}function xl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!=typeof i||Lu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Uu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,El(e,t,i,r,o))}if(i=e.child,0==(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Gl(e,t,o)}return t.flags|=1,(e=Du(i,r)).ref=t.ref,e.return=t,t.child=e}function El(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0==(e.lanes&o))return t.lanes=e.lanes,Gl(e,t,o);0!=(131072&e.flags)&&(yl=!0)}}return Ol(e,t,n,r,o)}function Cl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oo(Ds,Ls),Ls|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oo(Ds,Ls),Ls|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Oo(Ds,Ls),Ls|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oo(Ds,Ls),Ls|=r;return wl(e,t,o,n),t.child}function Sl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,o){var i=Lo(n)?Io:To.current;return i=Mo(t,i),Ci(t,o),n=Ea(e,t,n,r,i,o),r=Ca(),null===e||yl?(ii&&r&&ti(t),t.flags|=1,wl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gl(e,t,o))}function Pl(e,t,n,r,o){if(Lo(n)){var i=!0;jo(t)}else i=!1;if(Ci(t,o),null===t.stateNode)Wl(e,t),Wi(t,n,r),$i(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=Si(u):u=Mo(t,u=Lo(n)?Io:To.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||s!==u)&&Gi(t,a,r,u),Ii=!1;var p=t.memoizedState;a.state=p,Ri(t,r,a,o),s=t.memoizedState,l!==r||p!==s||No.current||Ii?("function"==typeof c&&(Fi(t,n,c,r),s=t.memoizedState),(l=Ii||Hi(t,n,l,r,p,s,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Li(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:vi(t.type,l),a.props=u,d=t.pendingProps,p=a.context,"object"==typeof(s=n.contextType)&&null!==s?s=Si(s):s=Mo(t,s=Lo(n)?Io:To.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==d||p!==s)&&Gi(t,a,r,s),Ii=!1,p=t.memoizedState,a.state=p,Ri(t,r,a,o);var m=t.memoizedState;l!==d||p!==m||No.current||Ii?("function"==typeof f&&(Fi(t,n,f,r),m=t.memoizedState),(u=Ii||Hi(t,n,u,r,p,m,s)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,m,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,m,s)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,i,o)}function Tl(e,t,n,r,o,i){Sl(e,t);var a=0!=(128&t.flags);if(!r&&!a)return o&&Ro(t,n,!1),Gl(e,t,i);r=t.stateNode,_l.current=t;var l=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Qi(t,e.child,null,i),t.child=Qi(t,null,l,i)):wl(e,t,l,i),t.memoizedState=r.state,o&&Ro(t,n,!0),t.child}function Nl(e){var t=e.stateNode;t.pendingContext?Uo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Uo(0,t.context,!1),oa(e,t.containerInfo)}function Il(e,t,n,r,o){return mi(),hi(o),t.flags|=256,wl(e,t,n,r),t.child}var Ml,Ll,Dl,Ul,Al={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rl(e,t,n){var r,o=t.pendingProps,a=sa.current,l=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Oo(sa,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0==(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=ju(s,o,0,null),e=Au(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=jl(n),t.memoizedState=Al,e):zl(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,Vl(e,t,l,r=dl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ju({mode:"visible",children:r.children},o,0,null),(a=Au(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&Qi(t,e.child,null,l),t.child.memoizedState=jl(l),t.memoizedState=Al,a);if(0==(1&t.mode))return Vl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Vl(e,t,l,r=dl(a=Error(i(419)),r,void 0))}if(s=0!=(l&e.childLanes),yl||s){if(null!==(r=Ns)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ni(e,o),ru(r,e,o,-1))}return bu(),Vl(e,t,l,r=dl(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Jo[qo++]=Qo,Jo[qo++]=Zo,Jo[qo++]=Xo,Qo=e.id,Zo=e.overflow,Xo=t),t=zl(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0==(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Du(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Du(r,l):(l=Au(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?jl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Al,o}return e=(l=e.child).sibling,o=Du(l,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function zl(e,t){return(t=ju({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Vl(e,t,n,r){return null!==r&&hi(r),Qi(t,e.child,null,n),(e=zl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ei(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(wl(e,t,r.children,n),0!=(2&(r=sa.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,n,t);else if(19===e.tag)Fl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oo(sa,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ua(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ua(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),js|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Du(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Du(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $l(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Lo(t.type)&&Do(),Yl(t),null;case 3:return r=t.stateNode,ia(),So(No),So(To),da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==ai&&(lu(ai),ai=null))),Ll(e,t),Yl(t),null;case 5:la(t);var o=ra(na.current);if(n=t.type,null!==e&&null!=t.stateNode)Dl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Yl(t),null}if(e=ra(ea.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[mo]=a,e=0!=(1&t.mode),n){case"dialog":zr("cancel",r),zr("close",r);break;case"iframe":case"object":case"embed":zr("load",r);break;case"video":case"audio":for(o=0;o<Ur.length;o++)zr(Ur[o],r);break;case"source":zr("error",r);break;case"img":case"image":case"link":zr("error",r),zr("load",r);break;case"details":zr("toggle",r);break;case"input":X(r,a),zr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},zr("invalid",r);break;case"textarea":oe(r,a),zr("invalid",r)}for(var s in ge(n,a),o=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"==typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,u,e),o=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&zr("scroll",r)}switch(n){case"input":$(r),K(r,a,!0);break;case"textarea":$(r),ae(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=Kr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fo]=t,e[mo]=r,Ml(e,t,!1,!1),t.stateNode=e;e:{switch(s=_e(n,r),n){case"dialog":zr("cancel",e),zr("close",e),o=r;break;case"iframe":case"object":case"embed":zr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ur.length;o++)zr(Ur[o],e);o=r;break;case"source":zr("error",e),o=r;break;case"img":case"image":case"link":zr("error",e),zr("load",e),o=r;break;case"details":zr("toggle",e),o=r;break;case"input":X(e,r),o=q(e,r),zr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=j({},r,{value:void 0}),zr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),zr("invalid",e)}for(a in ge(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?be(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"==typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"==typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&zr("scroll",e):null!=c&&_(e,a,c,s))}switch(n){case"input":$(e),K(e,r,!1);break;case"textarea":$(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof o.onClick&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Ul(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(i(166));if(n=ra(na.current),ra(ea.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Zr(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!=(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Yl(t),null;case 13:if(So(sa),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!=(1&t.mode)&&0==(128&t.flags))fi(),mi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else mi(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),a=!1}else null!==ai&&(lu(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&sa.current)?0===Us&&(Us=3):bu())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return ia(),Ll(e,t),null===e&&Br(t.stateNode.containerInfo),Yl(t),null;case 10:return xi(t.type._context),Yl(t),null;case 19:if(So(sa),null===(a=t.memoizedState))return Yl(t),null;if(r=0!=(128&t.flags),null===(s=a.rendering))if(r)$l(a,!1);else{if(0!==Us||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ua(e))){for(t.flags|=128,$l(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oo(sa,1&sa.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Hs&&(t.flags|=128,r=!0,$l(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ua(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),$l(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Yl(t),null}else 2*Qe()-a.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,$l(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=sa.current,Oo(sa,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return pu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Ls)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function ql(e,t){switch(ni(t),t.tag){case 1:return Lo(t.type)&&Do(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ia(),So(No),So(To),da(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return la(t),null;case 13:if(So(sa),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));mi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return So(sa),null;case 4:return ia(),null;case 10:return xi(t.type._context),null;case 22:case 23:return pu(),null;default:return null}}Ml=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ll=function(){},Dl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ra(ea.current);var i,a=null;switch(n){case"input":o=q(e,o),r=q(e,r),a=[];break;case"select":o=j({},o,{value:void 0}),r=j({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=Kr)}for(c in ge(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&zr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ul=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,Ql=!1,Zl="function"==typeof WeakSet?WeakSet:Set,Kl=null;function es(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Cu(e,t,n)}else n.current=null}function ts(e,t,n){try{n()}catch(n){Cu(e,t,n)}}var ns=!1;function rs(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&ts(t,n,i)}o=o.next}while(o!==r)}}function os(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[mo],delete t[bo],delete t[vo],delete t[go])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function ss(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Kr));else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var ds=null,ps=!1;function fs(e,t,n){for(n=n.child;null!==n;)ms(e,t,n),n=n.sibling}function ms(e,t,n){if(it&&"function"==typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(e){}switch(n.tag){case 5:Ql||es(n,t);case 6:var r=ds,o=ps;ds=null,fs(e,t,n),ps=o,null!==(ds=r)&&(ps?(e=ds,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ds.removeChild(n.stateNode));break;case 18:null!==ds&&(ps?(e=ds,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Bt(e)):so(ds,n.stateNode));break;case 4:r=ds,o=ps,ds=n.stateNode.containerInfo,ps=!0,fs(e,t,n),ds=r,ps=o;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!=(2&i)||0!=(4&i))&&ts(n,t,a),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Ql&&(es(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Cu(n,t,e)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Ql=(r=Ql)||null!==n.memoizedState,fs(e,t,n),Ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zl),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function bs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:ds=s.stateNode,ps=!1;break e;case 3:case 4:ds=s.stateNode.containerInfo,ps=!0;break e}s=s.return}if(null===ds)throw Error(i(160));ms(a,l,o),ds=null,ps=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(e){Cu(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vs(t,e),t=t.sibling}function vs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bs(t,e),gs(e),4&r){try{rs(3,e,e.return),os(3,e)}catch(t){Cu(e,e.return,t)}try{rs(5,e,e.return)}catch(t){Cu(e,e.return,t)}}break;case 1:bs(t,e),gs(e),512&r&&null!==n&&es(n,n.return);break;case 5:if(bs(t,e),gs(e),512&r&&null!==n&&es(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(t){Cu(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&Q(o,a),_e(s,l);var c=_e(s,a);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];"style"===d?be(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):_(o,d,p,c)}switch(s){case"input":Z(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var m=a.value;null!=m?ne(o,!!a.multiple,m,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[mo]=a}catch(t){Cu(e,e.return,t)}}break;case 6:if(bs(t,e),gs(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(t){Cu(e,e.return,t)}}break;case 3:if(bs(t,e),gs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(t){Cu(e,e.return,t)}break;case 4:default:bs(t,e),gs(e);break;case 13:bs(t,e),gs(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Bs=Qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(c=Ql)||d,bs(t,e),Ql=c):bs(t,e),gs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!=(1&e.mode))for(Kl=e,d=e.child;null!==d;){for(p=Kl=d;null!==Kl;){switch(m=(f=Kl).child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:es(f,f.return);var h=f.stateNode;if("function"==typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Cu(r,n,e)}}break;case 5:es(f,f.return);break;case 22:if(null!==f.memoizedState){ks(p);continue}}null!==m?(m.return=f,Kl=m):ks(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,c?"function"==typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=null!=(u=p.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",l))}catch(t){Cu(e,e.return,t)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(t){Cu(e,e.return,t)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bs(t,e),gs(e),4&r&&hs(e);case 21:}}function gs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ls(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cs(e,ss(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;us(e,ss(e),a);break;default:throw Error(i(161))}}catch(t){Cu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function _s(e,t,n){Kl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!=(1&e.mode);null!==Kl;){var o=Kl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Xl;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Ql;l=Xl;var u=Ql;if(Xl=a,(Ql=s)&&!u)for(Kl=o;null!==Kl;)s=(a=Kl).child,22===a.tag&&null!==a.memoizedState?xs(o):null!==s?(s.return=a,Kl=s):xs(o);for(;null!==i;)Kl=i,ys(i,t,n),i=i.sibling;Kl=o,Xl=l,Ql=u}ws(e)}else 0!=(8772&o.subtreeFlags)&&null!==i?(i.return=o,Kl=i):ws(e)}}function ws(e){for(;null!==Kl;){var t=Kl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ql||os(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ql)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vi(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&zi(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}zi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(i(163))}Ql||512&t.flags&&is(t)}catch(e){Cu(t,t.return,e)}}if(t===e){Kl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Kl=n;break}Kl=t.return}}function ks(e){for(;null!==Kl;){var t=Kl;if(t===e){Kl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Kl=n;break}Kl=t.return}}function xs(e){for(;null!==Kl;){var t=Kl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{os(4,t)}catch(e){Cu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){Cu(t,o,e)}}var i=t.return;try{is(t)}catch(e){Cu(t,i,e)}break;case 5:var a=t.return;try{is(t)}catch(e){Cu(t,a,e)}}}catch(e){Cu(t,t.return,e)}if(t===e){Kl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Kl=l;break}Kl=t.return}}var Es,Cs=Math.ceil,Ss=y.ReactCurrentDispatcher,Os=y.ReactCurrentOwner,Ps=y.ReactCurrentBatchConfig,Ts=0,Ns=null,Is=null,Ms=0,Ls=0,Ds=Co(0),Us=0,As=null,js=0,Rs=0,zs=0,Vs=null,Fs=null,Bs=0,Hs=1/0,Ws=null,Gs=!1,$s=null,Ys=null,Js=!1,qs=null,Xs=0,Qs=0,Zs=null,Ks=-1,eu=0;function tu(){return 0!=(6&Ts)?Qe():-1!==Ks?Ks:Ks=Qe()}function nu(e){return 0==(1&e.mode)?1:0!=(2&Ts)&&0!==Ms?Ms&-Ms:null!==bi.transition?(0===eu&&(eu=ht()),eu):0!==(e=_t)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function ru(e,t,n,r){if(50<Qs)throw Qs=0,Zs=null,Error(i(185));vt(e,n,r),0!=(2&Ts)&&e===Ns||(e===Ns&&(0==(2&Ts)&&(Rs|=n),4===Us&&su(e,Ms)),ou(e,r),1===n&&0===Ts&&0==(1&t.mode)&&(Hs=Qe()+500,Vo&&Ho()))}function ou(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!=(l&n)&&0==(l&r)||(o[a]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=pt(e,e===Ns?Ms:0);if(0===r)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){Vo=!0,Bo(e)}(uu.bind(null,e)):Bo(uu.bind(null,e)),ao((function(){0==(6&Ts)&&Ho()})),n=null;else{switch(yt(r)){case 1:n=Ke;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Nu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Ks=-1,eu=0,0!=(6&Ts))throw Error(i(327));var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var r=pt(e,e===Ns?Ms:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=vu(e,r);else{t=r;var o=Ts;Ts|=2;var a=hu();for(Ns===e&&Ms===t||(Ws=null,Hs=Qe()+500,fu(e,t));;)try{_u();break}catch(t){mu(e,t)}ki(),Ss.current=a,Ts=o,null!==Is?t=0:(Ns=null,Ms=0,t=Us)}if(0!==t){if(2===t&&(0!==(o=mt(e))&&(r=o,t=au(e,o))),1===t)throw n=As,fu(e,0),su(e,r),ou(e,Qe()),n;if(6===t)su(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=vu(e,r))&&(0!==(a=mt(e))&&(r=a,t=au(e,a))),1===t))throw n=As,fu(e,0),su(e,r),ou(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:ku(e,Fs,Ws);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Bs+500-Qe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){tu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(ku.bind(null,e,Fs,Ws),t);break}ku(e,Fs,Ws);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ro(ku.bind(null,e,Fs,Ws),r);break}ku(e,Fs,Ws);break;default:throw Error(i(329))}}}return ou(e,Qe()),e.callbackNode===n?iu.bind(null,e):null}function au(e,t){var n=Vs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Fs,Fs=n,null!==t&&lu(t)),e}function lu(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function su(e,t){for(t&=~zs,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(0!=(6&Ts))throw Error(i(327));xu();var t=pt(e,0);if(0==(1&t))return ou(e,Qe()),null;var n=vu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=As,fu(e,0),su(e,t),ou(e,Qe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Fs,Ws),ou(e,Qe()),null}function cu(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Hs=Qe()+500,Vo&&Ho())}}function du(e){null!==qs&&0===qs.tag&&0==(6&Ts)&&xu();var t=Ts;Ts|=1;var n=Ps.transition,r=_t;try{if(Ps.transition=null,_t=1,e)return e()}finally{_t=r,Ps.transition=n,0==(6&(Ts=t))&&Ho()}}function pu(){Ls=Ds.current,So(Ds)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Is)for(n=Is.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Do();break;case 3:ia(),So(No),So(To),da();break;case 5:la(r);break;case 4:ia();break;case 13:case 19:So(sa);break;case 10:xi(r.type._context);break;case 22:case 23:pu()}n=n.return}if(Ns=e,Is=e=Du(e.current,null),Ms=Ls=t,Us=0,As=null,zs=Rs=js=0,Fs=Vs=null,null!==Oi){for(t=0;t<Oi.length;t++)if(null!==(r=(n=Oi[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Oi=null}return e}function mu(e,t){for(;;){var n=Is;try{if(ki(),pa.current=al,ga){for(var r=ha.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ga=!1}if(ma=0,va=ba=ha=null,_a=!1,ya=0,Os.current=null,null===n||null===n.return){Us=1,As=t,Is=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=Ms,s.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=s,p=d.tag;if(0==(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vl(l);if(null!==m){m.flags&=-257,gl(m,l,s,0,t),1&m.mode&&bl(a,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var b=new Set;b.add(u),t.updateQueue=b}else h.add(u);break e}if(0==(1&t)){bl(a,c,t),bu();break e}u=Error(i(426))}else if(ii&&1&s.mode){var v=vl(l);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),gl(v,l,s,0,t),hi(cl(u,s));break e}}a=u=cl(u,s),4!==Us&&(Us=2),null===Vs?Vs=[a]:Vs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,ji(a,ml(0,u,t));break e;case 1:s=u;var g=a.type,_=a.stateNode;if(0==(128&a.flags)&&("function"==typeof g.getDerivedStateFromError||null!==_&&"function"==typeof _.componentDidCatch&&(null===Ys||!Ys.has(_)))){a.flags|=65536,t&=-t,a.lanes|=t,ji(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}wu(n)}catch(e){t=e,Is===n&&null!==n&&(Is=n=n.return);continue}break}}function hu(){var e=Ss.current;return Ss.current=al,null===e?al:e}function bu(){0!==Us&&3!==Us&&2!==Us||(Us=4),null===Ns||0==(268435455&js)&&0==(268435455&Rs)||su(Ns,Ms)}function vu(e,t){var n=Ts;Ts|=2;var r=hu();for(Ns===e&&Ms===t||(Ws=null,fu(e,t));;)try{gu();break}catch(t){mu(e,t)}if(ki(),Ts=n,Ss.current=r,null!==Is)throw Error(i(261));return Ns=null,Ms=0,Us}function gu(){for(;null!==Is;)yu(Is)}function _u(){for(;null!==Is&&!qe();)yu(Is)}function yu(e){var t=Es(e.alternate,e,Ls);e.memoizedProps=e.pendingProps,null===t?wu(e):Is=t,Os.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Jl(n,t,Ls)))return void(Is=n)}else{if(null!==(n=ql(n,t)))return n.flags&=32767,void(Is=n);if(null===e)return Us=6,void(Is=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Is=t);Is=t=e}while(null!==t);0===Us&&(Us=5)}function ku(e,t,n){var r=_t,o=Ps.transition;try{Ps.transition=null,_t=1,function(e,t,n,r){do{xu()}while(null!==qs);if(0!=(6&Ts))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ns&&(Is=Ns=null,Ms=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Js||(Js=!0,Nu(tt,(function(){return xu(),null}))),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=Ps.transition,Ps.transition=null;var l=_t;_t=1;var s=Ts;Ts|=4,Os.current=null,function(e,t){if(eo=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==a||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++c===o&&(s=l),f===a&&++d===r&&(u=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Wt=!1,Kl=t;null!==Kl;)if(e=(t=Kl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Kl=e;else for(;null!==Kl;){t=Kl;try{var h=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var b=h.memoizedProps,v=h.memoizedState,g=t.stateNode,_=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:vi(t.type,b),v);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(i(163))}}catch(e){Cu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Kl=e;break}Kl=t.return}h=ns,ns=!1}(e,n),vs(n,e),mr(to),Wt=!!eo,to=eo=null,e.current=n,_s(n,e,o),Xe(),Ts=s,_t=l,Ps.transition=a}else e.current=n;if(Js&&(Js=!1,qs=e,Xs=o),a=e.pendingLanes,0===a&&(Ys=null),function(e){if(it&&"function"==typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),ou(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Gs)throw Gs=!1,e=$s,$s=null,e;0!=(1&Xs)&&0!==e.tag&&xu(),a=e.pendingLanes,0!=(1&a)?e===Zs?Qs++:(Qs=0,Zs=e):Qs=0,Ho()}(e,t,n,r)}finally{Ps.transition=o,_t=r}return null}function xu(){if(null!==qs){var e=yt(Xs),t=Ps.transition,n=_t;try{if(Ps.transition=null,_t=16>e?16:e,null===qs)var r=!1;else{if(e=qs,qs=null,Xs=0,0!=(6&Ts))throw Error(i(331));var o=Ts;for(Ts|=4,Kl=e.current;null!==Kl;){var a=Kl,l=a.child;if(0!=(16&Kl.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Kl=c;null!==Kl;){var d=Kl;switch(d.tag){case 0:case 11:case 15:rs(8,d,a)}var p=d.child;if(null!==p)p.return=d,Kl=p;else for(;null!==Kl;){var f=(d=Kl).sibling,m=d.return;if(as(d),d===c){Kl=null;break}if(null!==f){f.return=m,Kl=f;break}Kl=m}}}var h=a.alternate;if(null!==h){var b=h.child;if(null!==b){h.child=null;do{var v=b.sibling;b.sibling=null,b=v}while(null!==b)}}Kl=a}}if(0!=(2064&a.subtreeFlags)&&null!==l)l.return=a,Kl=l;else e:for(;null!==Kl;){if(0!=(2048&(a=Kl).flags))switch(a.tag){case 0:case 11:case 15:rs(9,a,a.return)}var g=a.sibling;if(null!==g){g.return=a.return,Kl=g;break e}Kl=a.return}}var _=e.current;for(Kl=_;null!==Kl;){var y=(l=Kl).child;if(0!=(2064&l.subtreeFlags)&&null!==y)y.return=l,Kl=y;else e:for(l=_;null!==Kl;){if(0!=(2048&(s=Kl).flags))try{switch(s.tag){case 0:case 11:case 15:os(9,s)}}catch(e){Cu(s,s.return,e)}if(s===l){Kl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Kl=w;break e}Kl=s.return}}if(Ts=o,Ho(),it&&"function"==typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(e){}r=!0}return r}finally{_t=n,Ps.transition=t}}return!1}function Eu(e,t,n){e=Ui(e,t=ml(0,t=cl(n,t),1),1),t=tu(),null!==e&&(vt(e,1,t),ou(e,t))}function Cu(e,t,n){if(3===e.tag)Eu(e,e,n);else for(;null!==t;){if(3===t.tag){Eu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=Ui(t,e=hl(t,e=cl(n,e),1),1),e=tu(),null!==t&&(vt(t,1,e),ou(t,e));break}}t=t.return}}function Su(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Ns===e&&(Ms&n)===n&&(4===Us||3===Us&&(130023424&Ms)===Ms&&500>Qe()-Bs?fu(e,0):zs|=n),ou(e,t)}function Ou(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ct,0==(130023424&(ct<<=1))&&(ct=4194304)));var n=tu();null!==(e=Ni(e,t))&&(vt(e,t,n),ou(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ou(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Ou(e,n)}function Nu(e,t){return Ye(e,t)}function Iu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mu(e,t,n,r){return new Iu(e,t,n,r)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Du(e,t){var n=e.alternate;return null===n?((n=Mu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uu(e,t,n,r,o,a){var l=2;if(r=e,"function"==typeof e)Lu(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case x:return Au(n.children,o,a,t);case E:l=8,o|=8;break;case C:return(e=Mu(12,n,t,2|o)).elementType=C,e.lanes=a,e;case T:return(e=Mu(13,n,t,o)).elementType=T,e.lanes=a,e;case N:return(e=Mu(19,n,t,o)).elementType=N,e.lanes=a,e;case L:return ju(n,o,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case S:l=10;break e;case O:l=9;break e;case P:l=11;break e;case I:l=14;break e;case M:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Mu(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Au(e,t,n,r){return(e=Mu(7,e,r,t)).lanes=n,e}function ju(e,t,n,r){return(e=Mu(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Ru(e,t,n){return(e=Mu(6,e,null,t)).lanes=n,e}function zu(e,t,n){return(t=Mu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,o,i,a,l,s){return e=new Vu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Mu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(i),e}function Bu(e){if(!e)return Po;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Lo(n))return Ao(e,n,t)}return t}function Hu(e,t,n,r,o,i,a,l,s){return(e=Fu(n,r,!0,e,0,i,0,l,s)).context=Bu(null),n=e.current,(i=Di(r=tu(),o=nu(n))).callback=null!=t?t:null,Ui(n,i,o),e.current.lanes=o,vt(e,o,r),ou(e,r),e}function Wu(e,t,n,r){var o=t.current,i=tu(),a=nu(o);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Di(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ui(o,t,a))&&(ru(e,o,a,i),Ai(e,o,a)),a}function Gu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function $u(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}Es=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||No.current)yl=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Nl(t),mi();break;case 5:aa(t);break;case 1:Lo(t.type)&&jo(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oo(gi,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Oo(sa,1&sa.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Rl(e,t,n):(Oo(sa,1&sa.current),null!==(e=Gl(e,t,n))?e.sibling:null);Oo(sa,1&sa.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oo(sa,sa.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return Gl(e,t,n)}(e,t,n);yl=0!=(131072&e.flags)}else yl=!1,ii&&0!=(1048576&t.flags)&&ei(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=Mo(t,To.current);Ci(t,n),o=Ea(null,t,r,e,o,n);var a=Ca();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(r)?(a=!0,jo(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Mi(t),o.updater=Bi,t.stateNode=o,o._reactInternals=t,$i(t,r,e,n),t=Tl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),wl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return Lu(e)?1:0;if(null!=e){if((e=e.$$typeof)===P)return 11;if(e===I)return 14}return 2}(r),e=vi(r,e),o){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=kl(null,t,r,e,n);break e;case 14:t=xl(null,t,r,vi(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ol(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 1:return r=t.type,o=t.pendingProps,Pl(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 3:e:{if(Nl(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Li(e,t),Ri(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Il(e,t,r,n,o=cl(Error(i(423)),t));break e}if(r!==o){t=Il(e,t,r,n,o=cl(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=Zi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mi(),r===o){t=Gl(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return aa(t),null===e&&ci(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),Sl(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Rl(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Qi(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,kl(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,Oo(gi,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!No.current){t=Gl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Di(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Ei(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Ei(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}wl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ci(t,n),r=r(o=Si(o)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return o=vi(r=t.type,t.pendingProps),xl(e,t,r,o=vi(r.type,o),n);case 15:return El(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vi(r,o),Wl(e,t),t.tag=1,Lo(r)?(e=!0,jo(t)):e=!1,Ci(t,n),Wi(t,r,o),$i(t,r,o,n),Tl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Cl(e,t,n)}throw Error(i(156,t.tag))};var Ju="function"==typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ku(){}function ec(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"==typeof o){var l=o;o=function(){var e=Gu(a);l.call(e)}}Wu(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"==typeof r){var i=r;r=function(){var e=Gu(a);i.call(e)}}var a=Hu(t,r,e,0,null,!1,0,"",Ku);return e._reactRootContainer=a,e[ho]=a.current,Br(8===e.nodeType?e.parentNode:e),du(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var l=r;r=function(){var e=Gu(s);l.call(e)}}var s=Fu(e,0,!1,null,0,!1,0,"",Ku);return e._reactRootContainer=s,e[ho]=s.current,Br(8===e.nodeType?e.parentNode:e),du((function(){Wu(t,s,n,r)})),s}(n,t,e,o,r);return Gu(a)}Xu.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},Xu.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du((function(){Wu(null,e,null,null)})),t[ho]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&jt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(gt(t,1|n),ou(t,Qe()),0==(6&Ts)&&(Hs=Qe()+500,Ho()))}break;case 13:du((function(){var t=Ni(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}})),Yu(e,1)}},kt=function(e){if(13===e.tag){var t=Ni(e,134217728);if(null!==t)ru(t,e,134217728,tu());Yu(e,134217728)}},xt=function(e){if(13===e.tag){var t=nu(e),n=Ni(e,t);if(null!==n)ru(n,e,t,tu());Yu(e,t)}},Et=function(){return _t},Ct=function(e,t){var n=_t;try{return _t=e,t()}finally{_t=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));Y(r),Z(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cu,Te=du;var tc={usingClientEntryPoint:!1,Events:[yo,wo,ko,Se,Oe,cu]},nc={findFiberByHostInstance:_o,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ge(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{ot=oc.inject(rc),it=oc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qu(e))throw Error(i(299));var n=!1,r="",o=Ju;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fu(e,1,!1,null,0,n,0,r,o),e[ho]=t.current,Br(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ge(t))?null:e.stateNode},t.flushSync=function(e){return du(e)},t.hydrate=function(e,t,n){if(!Zu(t))throw Error(i(200));return ec(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=Ju;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,o,0,a,l),e[ho]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xu(t)},t.render=function(e,t,n){if(!Zu(t))throw Error(i(200));return ec(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zu(e))throw Error(i(40));return!!e._reactRootContainer&&(du((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[ho]=null}))})),!0)},t.unstable_batchedUpdates=cu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return ec(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},745:(e,t,n)=>{"use strict";var r=n(3935);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},3935:(e,t,n)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(4448)},2408:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function g(){}function _(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var y=_.prototype=new g;y.constructor=_,h(y,v.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+P(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),T(a,t,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+P(l=e[u],u);s+=T(l,t,o,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,o,c=i+P(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function N(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},L={transition:null},D={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:L,ReactCurrentOwner:x};t.Children={map:N,forEach:function(e,t,n){N(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!E.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},7294:(e,t,n)=>{"use strict";e.exports=n(2408)},53:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<o&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,p=null,f=3,m=!1,h=!1,b=!1,v="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null;function y(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(b=!1,y(e),!h)if(null!==r(u))h=!0,L(k);else{var t=r(c);null!==t&&D(w,t.startTime-e)}}function k(e,n){h=!1,b&&(b=!1,g(S),S=-1),m=!0;var i=f;try{for(y(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!T());){var a=p.callback;if("function"==typeof a){p.callback=null,f=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?p.callback=l:p===r(u)&&o(u),y(n)}else o(u);p=r(u)}if(null!==p)var s=!0;else{var d=r(c);null!==d&&D(w,d.startTime-n),s=!1}return s}finally{p=null,f=i,m=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,E=!1,C=null,S=-1,O=5,P=-1;function T(){return!(t.unstable_now()-P<O)}function N(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?x():(E=!1,C=null)}}else E=!1}if("function"==typeof _)x=function(){_(N)};else if("undefined"!=typeof MessageChannel){var I=new MessageChannel,M=I.port2;I.port1.onmessage=N,x=function(){M.postMessage(null)}}else x=function(){v(N,0)};function L(e){C=e,E||(E=!0,x())}function D(e,n){S=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(b?(g(S),S=-1):b=!0,D(w,i-a))):(e.sortIndex=l,n(u,e),h||m||(h=!0,L(k))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},3840:(e,t,n)=>{"use strict";e.exports=n(53)},6774:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},394:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ServerStyleSheet:()=>Zt,StyleSheetConsumer:()=>xt,StyleSheetContext:()=>kt,StyleSheetManager:()=>St,ThemeConsumer:()=>jt,ThemeContext:()=>At,ThemeProvider:()=>zt,__PRIVATE__:()=>Kt,createGlobalStyle:()=>qt,css:()=>Wt,default:()=>Yt,isStyledComponent:()=>Ge,keyframes:()=>Xt,styled:()=>Yt,useTheme:()=>Rt,version:()=>ce,withTheme:()=>Qt});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=n(7294),a=n(6774),l=n.n(a),s="-ms-",u="-moz-",c="-webkit-",d="comm",p="rule",f="decl",m="@import",h="@keyframes",b="@layer",v=Math.abs,g=String.fromCharCode,_=Object.assign;function y(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function x(e,t){return e.indexOf(t)}function E(e,t){return 0|e.charCodeAt(t)}function C(e,t,n){return e.slice(t,n)}function S(e){return e.length}function O(e){return e.length}function P(e,t){return t.push(e),e}function T(e,t){return e.filter((function(e){return!w(e,t)}))}var N=1,I=1,M=0,L=0,D=0,U="";function A(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:N,column:I,length:a,return:"",siblings:l}}function j(e,t){return _(A("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=j(e.root,{children:[e]});P(e,e.siblings)}function z(){return D=L>0?E(U,--L):0,I--,10===D&&(I=1,N--),D}function V(){return D=L<M?E(U,L++):0,I++,10===D&&(I=1,N++),D}function F(){return E(U,L)}function B(){return L}function H(e,t){return C(U,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return N=I=1,M=S(U=e),L=0,[]}function $(e){return U="",e}function Y(e){return y(H(L-1,X(91===e?e+2:40===e?e+1:e)))}function J(e){for(;(D=F())&&D<33;)V();return W(e)>2||W(D)>3?"":" "}function q(e,t){for(;--t&&V()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return H(e,B()+(t<6&&32==F()&&32==V()))}function X(e){for(;V();)switch(D){case e:return L;case 34:case 39:34!==e&&39!==e&&X(D);break;case 40:41===e&&X(e);break;case 92:V()}return L}function Q(e,t){for(;V()&&e+D!==57&&(e+D!==84||47!==F()););return"/*"+H(t,L-1)+"*"+g(47===e?e:V())}function Z(e){for(;!W(F());)V();return H(e,L)}function K(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case b:if(e.children.length)break;case m:case f:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+K(e.children,r)+"}";case p:if(!S(e.value=e.props.join(",")))return""}return S(n=K(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+u+e+s+e+e;case 5936:switch(E(e,t+11)){case 114:return c+e+s+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+s+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+s+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+s+e+e;case 6165:return c+e+s+"flex-"+e+e;case 5187:return c+e+k(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return c+e+s+"flex-item-"+k(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":s+"grid-row-"+k(e,/flex-|-self/g,""))+e;case 4675:return c+e+s+"flex-line-pack"+k(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+s+k(e,"shrink","negative")+e;case 5292:return c+e+s+k(e,"basis","preferred-size")+e;case 6060:return c+"box-"+k(e,"-grow","")+c+e+s+k(e,"grow","positive")+e;case 4554:return c+k(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!w(e,/flex-|baseline/))return s+"grid-column-align"+C(e,t)+e;break;case 2592:case 3360:return s+k(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,w(e.props,/grid-\w+-end/)}))?~x(e+(n=n[t].value),"span")?e:s+k(e,"-start","")+e+s+"grid-row-span:"+(~x(n,"span")?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":s+k(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:s+k(k(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+u+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch")?te(k(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return s+n+":"+r+l+(o?s+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===E(e,t+6))return k(e,":",":"+c)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===E(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+e;case 100:return k(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=te(e.value,e.length,n));case h:return K([j(e,{value:k(e.value,"@","@"+c)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(w(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(j(e,{props:[k(t,/:(read-\w+)/,":"+u+"$1")]})),R(j(e,{props:[t]})),_(e,{props:T(n,r)});break;case"::placeholder":R(j(e,{props:[k(t,/:(plac\w+)/,":"+c+"input-$1")]})),R(j(e,{props:[k(t,/:(plac\w+)/,":"+u+"$1")]})),R(j(e,{props:[k(t,/:(plac\w+)/,s+"input-$1")]})),R(j(e,{props:[t]})),_(e,{props:T(n,r)})}return""}))}}function re(e){return $(oe("",null,null,null,[""],e=G(e),0,[0],e))}function oe(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,d=a,p=0,f=0,m=0,h=1,b=1,v=1,_=0,y="",w=o,C=i,O=r,T=y;b;)switch(m=_,_=V()){case 40:if(108!=m&&58==E(T,d-1)){-1!=x(T+=k(Y(_),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:T+=Y(_);break;case 9:case 10:case 13:case 32:T+=J(m);break;case 92:T+=q(B()-1,7);continue;case 47:switch(F()){case 42:case 47:P(ae(Q(V(),B()),t,n,s),s);break;default:T+="/"}break;case 123*h:l[u++]=S(T)*v;case 125*h:case 59:case 0:switch(_){case 0:case 125:b=0;case 59+c:-1==v&&(T=k(T,/\f/g,"")),f>0&&S(T)-d&&P(f>32?le(T+";",r,n,d-1,s):le(k(T," ","")+";",r,n,d-2,s),s);break;case 59:T+=";";default:if(P(O=ie(T,t,n,u,c,o,l,y,w=[],C=[],d,i),i),123===_)if(0===c)oe(T,t,O,O,w,i,d,l,C);else switch(99===p&&110===E(T,3)?100:p){case 100:case 108:case 109:case 115:oe(e,O,O,r&&P(ie(e,O,O,0,0,o,l,y,o,w=[],d,C),C),o,C,d,l,r?w:C);break;default:oe(T,O,O,O,[""],C,0,l,C)}}u=c=f=0,h=v=1,y=T="",d=a;break;case 58:d=1+S(T),f=m;default:if(h<1)if(123==_)--h;else if(125==_&&0==h++&&125==z())continue;switch(T+=g(_),_*h){case 38:v=c>0?1:(T+="\f",-1);break;case 44:l[u++]=(S(T)-1)*v,v=1;break;case 64:45===F()&&(T+=Y(V())),p=F(),c=d=S(y=T+=Z(B())),_++;break;case 45:45===m&&2==S(T)&&(h=0)}}return i}function ie(e,t,n,r,o,i,a,l,s,u,c,d){for(var f=o-1,m=0===o?i:[""],h=O(m),b=0,g=0,_=0;b<r;++b)for(var w=0,x=C(e,f+1,f=v(g=a[b])),E=e;w<h;++w)(E=y(g>0?m[w]+" "+x:k(x,/&\f/g,m[w])))&&(s[_++]=E);return A(e,t,n,0===o?p:l,s,u,c,d)}function ae(e,t,n,r){return A(e,t,n,d,g(D),C(e,2,-2),0,r)}function le(e,t,n,r,o){return A(e,t,n,f,C(e,0,r),C(e,r+1,-1),r,o)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}&&({WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.REACT_APP_SC_ATTR||{WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.SC_ATTR)||"data-styled",ce="6.1.0",de="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}&&void 0!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY&&{WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}&&void 0!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.SC_DISABLE_SPEEDY&&""!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.SC_DISABLE_SPEEDY&&("false"!=={WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.SC_DISABLE_SPEEDY&&{WEBIDE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webide.vmoptions",PYCHARM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/pycharm.vmoptions",NODE:"/opt/homebrew/Cellar/node/23.6.1/bin/node",INIT_CWD:"/Users/fike/Projects/chatterbot.ru",ANDROID_HOME:"/Users/fike/Library/Android/Sdk",SHELL:"/bin/zsh",TERM:"xterm-256color",JETBRAINSCLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrainsclient.vmoptions",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/b6/35jxzrg15bq474mbfhd5vlkh0000gn/T/",npm_config_global_prefix:"/opt/homebrew",COLOR:"1",TERM_SESSION_ID:"49ddb635-88b1-4dc8-998d-c4a426957b0b",npm_config_noproxy:"",npm_config_local_prefix:"/Users/fike/Projects/chatterbot.ru",USER:"fike",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/opt/homebrew/etc/npmrc",PHPSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/phpstorm.vmoptions",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.WW8azIidGH/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x7:0x31",npm_execpath:"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js",GOLAND_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/goland.vmoptions",APPCODE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/appcode.vmoptions",FIG_JETBRAINS_SHELL_INTEGRATION:"1",DEVECOSTUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/devecostudio.vmoptions",PATH:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Projects/node_modules/.bin:/Users/fike/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/opt/libiconv/bin:/opt/homebrew/opt/mysql-client@5.7/bin:/opt/homebrew/lib/ruby/gems/2.7.0/bin:/Users/fike/.yarn/bin:/Users/fike/.config/yarn/global/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:/Users/fike/Projects/chatterbot.ru/node_modules/.bin:/Users/fike/Library/Android/sdk/platform-tools:/Users/fike/.dotnet/tools:/Users/fike/Library/Android/Sdk/emulator:/Users/fike/Library/Android/Sdk/tools:/Users/fike/Library/Android/Sdk/tools/bin:/Users/fike/Library/Android/Sdk/platform-tools",TERMINAL_EMULATOR:"JetBrains-JediTerm",npm_package_json:"/Users/fike/Projects/chatterbot.ru/package.json",_:"/Users/fike/Projects/chatterbot.ru/node_modules/.bin/cross-env",npm_config_userconfig:"/Users/fike/.npmrc",npm_config_init_module:"/Users/fike/.npm-init.js",__CFBundleIdentifier:"com.jetbrains.PhpStorm",npm_command:"run-script",PWD:"/Users/fike/Projects/chatterbot.ru",JAVA_HOME:"/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/export",npm_lifecycle_event:"build-prod",EDITOR:"vi",npm_package_name:"chatter",IDEA_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/idea.vmoptions",CLION_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/clion.vmoptions",npm_config_npm_version:"10.9.2",XPC_FLAGS:"0x0",WEBSTORM_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/webstorm.vmoptions",DATASPELL_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/dataspell.vmoptions",npm_config_node_gyp:"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.0.1",XPC_SERVICE_NAME:"0",SHLVL:"2",HOME:"/Users/fike",STUDIO_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/studio.vmoptions",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/fike/.npm",LOGNAME:"fike",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",LC_CTYPE:"UTF-8",GATEWAY_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/gateway.vmoptions",DATAGRIP_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/datagrip.vmoptions",npm_config_user_agent:"npm/10.9.2 node/v23.6.1 darwin arm64 workspaces/false",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",JETBRAINS_CLIENT_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/jetbrains_client.vmoptions",RIDER_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rider.vmoptions",RUBYMINE_VM_OPTIONS:"/Users/fike/Downloads/jetbra/vmoptions/rubymine.vmoptions",npm_node_execpath:"/opt/homebrew/Cellar/node/23.6.1/bin/node",npm_config_prefix:"/opt/homebrew",NODE_ENV:"production"}.SC_DISABLE_SPEEDY)),fe={},me=(new Set,Object.freeze([])),he=Object.freeze({});function be(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ge=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_e=/(^-|-$)/g;function ye(e){return e.replace(ge,"-").replace(_e,"")}var we=/(a)(d)/gi,ke=function(e){return String.fromCharCode(e+(e>25?39:97))};function xe(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ke(t%52)+n;return(ke(t%52)+n).replace(we,"$1-$2")}var Ee,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Se=function(e){return Ce(5381,e)};function Oe(e){return xe(Se(e)>>>0)}function Pe(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Ne=Te?Symbol.for("react.memo"):60115,Ie=Te?Symbol.for("react.forward_ref"):60112,Me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue=((Ee={})[Ie]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Ne]=De,Ee);function Ae(e){return("type"in(t=e)&&t.type.$$typeof)===Ne?De:"$$typeof"in e?Ue[e.$$typeof]:Me;var t}var je=Object.defineProperty,Re=Object.getOwnPropertyNames,ze=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,Fe=Object.getPrototypeOf,Be=Object.prototype;function He(e,t,n){if("string"!=typeof t){if(Be){var r=Fe(t);r&&r!==Be&&He(e,r,n)}var o=Re(t);ze&&(o=o.concat(ze(t)));for(var i=Ae(e),a=Ae(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Le||n&&n[s]||a&&s in a||i&&s in i)){var u=Ve(t,s);try{je(e,s,u)}catch(e){}}}}return e}function We(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function $e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Je(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qe(e[r],t[r]);else if(Je(t))for(var r in t)e[r]=qe(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Qe(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),Ke=new Map,et=new Map,tt=1,nt=function(e){if(Ke.has(e))return Ke.get(e);for(;et.has(tt);)tt++;var t=tt++;return Ke.set(e,t),et.set(t,e),t},rt=function(e,t){Ke.set(e,t),et.set(t,e)},ot="style[".concat(ue,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),it=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),at=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(it);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),at(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function st(){return n.nc}var ut=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(ue,"active"),r.setAttribute("data-styled-version","6.1.0");var a=st();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ct=function(){function e(e){this.element=ut(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),dt=function(){function e(e){this.element=ut(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ft=de,mt={isServer:!de,useCSSOMInjection:!pe},ht=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var o=this;this.options=r(r({},mt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ft&&(ft=!1,function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(ue)&&(lt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Xe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return et.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||0===a.length)return"continue";var l="".concat(ue,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat("/*!sc*/\n")},i=0;i<n;i++)o(i);return r}(o)}))}return e.registerId=function(e){return nt(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pt(n):t?new ct(n):new dt(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,vt=/^\s*\/\/.*$/gm;function gt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=gt(e.children,t)),e}))}function _t(e){var t,n,r,o=void 0===e?he:e,i=o.options,a=void 0===i?he:i,l=o.plugins,s=void 0===l?me:l,u=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,u))})),a.prefix&&c.push(ne),c.push(ee);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(vt,""),u=re(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(u=gt(u,a.namespace));var d,p,f,m=[];return K(u,(d=c.concat((f=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&f(e)})),p=O(d),function(e,t,n,r){for(var o="",i=0;i<p;i++)o+=d[i](e,t,n,r)||"";return o})),m};return d.hash=s.length?s.reduce((function(e,t){return t.name||Qe(15),Ce(e,t.name)}),5381).toString():"",d}var yt=new ht,wt=_t(),kt=i.createContext({shouldForwardProp:void 0,styleSheet:yt,stylis:wt}),xt=kt.Consumer,Et=i.createContext(void 0);function Ct(){return(0,i.useContext)(kt)}function St(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Ct().styleSheet,a=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,i.useMemo)((function(){return _t({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,i.useEffect)((function(){l()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,i.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return i.createElement(kt.Provider,{value:u},i.createElement(Et.Provider,{value:s},e.children))}var Ot=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=wt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,(function(){throw Qe(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=wt),this.name+e.hash},e}(),Pt=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Pt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nt=function(e){return null==e||!1===e||""===e},It=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Nt(a)&&(Array.isArray(a)&&a.isCss||We(a)?r.push("".concat(Tt(i),":"),a,";"):Je(a)?r.push.apply(r,o(o(["".concat(i," {")],It(a),!1),["}"],!1)):r.push("".concat(Tt(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in se||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mt(e,t,n,r){return Nt(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:We(e)?!We(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Mt(e(t),t,n,r):e instanceof Ot?n?(e.inject(n,r),[e.getName(r)]):[e]:Je(e)?It(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return Mt(e,t,n,r)}))):[e.toString()];var o}function Lt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(We(n)&&!Ge(n))return!1}return!0}var Dt=Se("6.1.0"),Ut=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Lt(e),this.componentId=t,this.baseHash=Ce(Dt,t),this.baseStyle=n,ht.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=$e(r,this.staticRulesId);else{var o=Ye(Mt(this.rules,e,t,n)),i=xe(Ce(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=$e(r,i),this.staticRulesId=i}else{for(var l=Ce(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Ye(Mt(c,e,t,n));l=Ce(l,d+u),s+=d}}if(s){var p=xe(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=$e(r,p)}}return r},e}(),At=i.createContext(void 0),jt=At.Consumer;function Rt(){var e=(0,i.useContext)(At);if(!e)throw Qe(18);return e}function zt(e){var t=i.useContext(At),n=(0,i.useMemo)((function(){return function(e,t){if(!e)throw Qe(14);if(We(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Qe(8);return t?r(r({},t),e):e}(e.theme,t)}),[e.theme,t]);return e.children?i.createElement(At.Provider,{value:n},e.children):null}var Vt={};new Set;function Ft(e,t,n){var o=Ge(e),a=e,l=!Pe(e),s=t.attrs,u=void 0===s?me:s,c=t.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ye(e);Vt[n]=(Vt[n]||0)+1;var r="".concat(n,"-").concat(Oe("6.1.0"+n+Vt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,p=t.displayName,f=(void 0===p&&function(e){Pe(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e),t.displayName&&t.componentId?"".concat(ye(t.displayName),"-").concat(t.componentId):t.componentId||d),m=o&&a.attrs?a.attrs.concat(u).filter(Boolean):u,h=t.shouldForwardProp;if(o&&a.shouldForwardProp){var b=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(e,t){return b(e,t)&&v(e,t)}}else h=b}var g=new Ut(n,f,o?a.componentStyle:void 0);var _=i.forwardRef((function(e,t){return function(e,t,n){var o=e.attrs,a=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=i.useContext(At),p=Ct(),f=e.shouldForwardProp||p.shouldForwardProp,m=function(e,t,n){for(var o,i=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var l=We(o=e[a])?o(i):o;for(var s in l)i[s]="className"===s?$e(i[s],l[s]):"style"===s?r(r({},i[s]),l[s]):l[s]}return t.className&&(i.className=$e(i.className,t.className)),i}(o,t,be(t,d,l)||he),h=m.as||c,b={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?b.as=m.forwardedAs:f&&!f(v,h)||(b[v]=m[v]));var g=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,m),_=$e(s,u);return g&&(_+=" "+g),m.className&&(_+=" "+m.className),b[Pe(h)&&!ve.has(h)?"class":"className"]=_,b.ref=n,(0,i.createElement)(h,b)}(_,e,t)}));return _.attrs=m,_.componentStyle=g,_.shouldForwardProp=h,_.foldedComponentIds=o?$e(a.foldedComponentIds,a.styledComponentId):"",_.styledComponentId=f,_.target=o?a.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)qe(e,o[r],!0);return e}({},a.defaultProps,e):e}}),Xe(_,(function(){return".".concat(_.styledComponentId)})),l&&He(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Bt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ht=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(We(e)||Je(e))return Ht(Mt(Bt(me,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Mt(r):Ht(Mt(Bt(r,t)))}function Gt(e,t,n){if(void 0===n&&(n=he),!t)throw Qe(1,t);var i=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Wt.apply(void 0,o([r],i,!1)))};return i.attrs=function(o){return Gt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Gt(e,t,r(r({},n),o))},i}var $t=function(e){return Gt(Ft,e)},Yt=$t;ve.forEach((function(e){Yt[e]=$t(e)}));var Jt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lt(e),ht.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(Ye(Mt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ht.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function qt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Wt.apply(void 0,o([e],t,!1)),l="sc-global-".concat(Oe(JSON.stringify(a))),s=new Jt(a,l),u=function(e){var t=Ct(),n=i.useContext(At),r=i.useRef(t.styleSheet.allocateGSInstance(l)).current;return t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis),i.useLayoutEffect((function(){if(!t.styleSheet.server)return c(r,e,t.styleSheet,n,t.stylis),function(){return s.removeStyles(r,t.styleSheet)}}),[r,e,t.styleSheet,n,t.stylis]),null};function c(e,t,n,o,i){if(s.isStatic)s.renderStyles(e,fe,n,i);else{var a=r(r({},t),{theme:be(t,o,u.defaultProps)});s.renderStyles(e,a,n,i)}}return i.memo(u)}function Xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ye(Wt.apply(void 0,o([e],t,!1))),i=Oe(r);return new Ot(i,r)}function Qt(e){return He(i.forwardRef((function(t,n){var o=be(t,i.useContext(At),e.defaultProps);return i.createElement(e,r({},t,{theme:o,ref:n}))})),e)}var Zt=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=st(),r=Ye([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Qe(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Qe(2);var n=((t={})[ue]="",t["data-styled-version"]="6.1.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=st();return o&&(n.nonce=o),[i.createElement("style",r({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ht({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Qe(2);return i.createElement(St,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Qe(3)},e}(),Kt={StyleSheet:ht,mainSheet:yt};"__sc-".concat(ue,"__")},1703:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(4735),i=n(3547);t.default=function(){return r.createElement(i.AppContainer,{className:"App"},r.createElement(i.GlobalStyles,null),r.createElement(o.default,null))}},8360:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1703);t.default=r.default},3547:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppContainer=t.GlobalStyles=void 0;const r=n(394);t.GlobalStyles=r.createGlobalStyle`
  html, body, div#root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  & *::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  & *::-webkit-scrollbar-thumb {
    background-color: #dddddd;
  }

  @font-face {
    font-family: "Catallina";
    src: url("/assets/Catallina2.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal; 
  } 
  
  @media screen and (max-width: 480px) {
    & *::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }
`,t.AppContainer=r.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  font-family: Raleway;
  font-style: normal;
  color: #000;
`},7237:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(5928),i=n(9573);t.default=function(e){const{type:t=1,title:n="Хочу начать говорить!"}=e;return r.createElement(i.ButtonContainer,{className:"Button "+(1===t?"one":"two"),onClick:o.GenerateEvent},n,r.createElement("svg",{width:"19",height:"15",fill:"none",viewBox:"0 0 19 15",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.999194 6.44957L-0.000806017 6.45003L0.000105968 8.45002L1.00011 8.44957L0.999194 6.44957ZM18.5985 8.14865C18.9889 7.75795 18.9886 7.12478 18.5979 6.73444L12.231 0.37338C11.8403 -0.0169665 11.2071 -0.0166779 10.8168 0.374024C10.4264 0.764727 10.4267 1.39789 10.8174 1.78824L16.4769 7.44251L10.8226 13.1019C10.4323 13.4926 10.4325 14.1258 10.8232 14.5162C11.2139 14.9065 11.8471 14.9062 12.2375 14.5155L18.5985 8.14865ZM1.00011 8.44957L17.8915 8.44187L17.8906 6.44187L0.999194 6.44957L1.00011 8.44957Z",fill:"white"})))}},9508:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7237);t.default=r.default},9573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonContainer=void 0;const r=n(394);t.ButtonContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  max-width: 320px;
  margin: 10px 0;
  border-radius: 22px;
  color: #fff;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
  background-color: #7270ff;

  & > svg {
    margin: 0 0 0 10px;
  }

  &:hover {
    filter: saturate(5%);
  }

  &.two {
    background-color: #fff181;
    color: #7270ff;

    & > svg > path {
      fill: #7270ff;
    }
  }

  @media screen and (min-width: 480px) {
    display: none;
  }
`},400:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(3366),i=n(5928),a=n(4485);t.default=function(e){const{onClick:t=(()=>null)}=e;function n(e){let n;t(),(0,i.getDocument)((()=>{n=null===document||void 0===document?void 0:document.getElementById(e)})),n&&n.scrollIntoView()}return r.createElement(a.LinksMapContainer,{className:"LinksMap"},r.createElement(a.CustomLink,{onClick:()=>n(o.CONTAINER_IDS.advantages)},"Преимущества"),r.createElement(a.CustomLink,{onClick:()=>n(o.CONTAINER_IDS.aboutUs)},"О нас"),r.createElement(a.CustomLink,{onClick:()=>n(o.CONTAINER_IDS.howItWorks)},"Как это работает"),r.createElement(a.CustomLink,{onClick:()=>n(o.CONTAINER_IDS.prices)},"Тарифы и оплата"),r.createElement(a.CustomLink,{onClick:()=>n(o.CONTAINER_IDS.languages)},"Языки"))}},876:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(400);t.default=r.default},4485:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomLink=t.LinksMapContainer=void 0;const r=n(394);t.LinksMapContainer=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
  max-width: 700px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 25px;
    gap: 20px;
    margin: 30% 0px;
  }
`,t.CustomLink=r.default.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #0000d1;
  }

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    color: #000;
  }
`},2523:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(3366),a=n(751),l=n(9646),s=n(8490),u=n(916),c=n(5079),d=n(6702),p=n(5928),f=n(1919);t.default=function(){return r.createElement(f.AboutUsBlockContainer,{className:"AboutUsBlock",id:i.CONTAINER_IDS.aboutUs},r.createElement(u.default,{color:"green"}),r.createElement(d.default,null),r.createElement(c.default,null),r.createElement(l.default,{type:"Blue"}),r.createElement(f.Img,{src:"/assets/MobilePhone.png"}),r.createElement(f.ContentWrapper,null,r.createElement(f.TitleContainer,null,r.createElement(s.default,{type:2}),r.createElement(f.Title,null,"Мы эксперты и методисты\nв области преподавания\nанглийского языка")),r.createElement(f.Text,{className:"text1"},"Мы уверены, что наш метод языковой практики более простой\nи быстрый. Нашей целью является помочь вам избежать чрезмерной зависимости\nот репетиторов по достижению уровня Intermediate или выше."),r.createElement(f.Text,{className:"text2"},"С нами вам удастся преобразовать пассивные знания\n с изученной лексикой и грамматикой в свободную речь"),r.createElement(f.CustomLink,{onClick:p.GenerateEvent},r.createElement(f.LinkTitle,null,"Хочу начать\nговорить"),r.createElement(a.default,null))),r.createElement(o.default,null))}},9433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2523);t.default=r.default},1919:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkTitle=t.CustomLink=t.Text=t.Title=t.TitleContainer=t.ContentWrapper=t.Img=t.AboutUsBlockContainer=void 0;const r=n(394);t.AboutUsBlockContainer=r.default.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  padding: 25vh 0 10vh 0;
  box-sizing: border-box;

  & {
    & > svg {
      position: absolute;
    }

    & > svg.DotedCircleGreen {
      top: -5%;
      left: -8%;
      zoom: 3;
    }

    & > svg.PinkLines {
      top: 12%;
      left: 45%;
    }

    & > svg.CustomArrowBlue {
      top: 76%;
      left: 80%;
      zoom: 0.8;
    }

    & > svg.PinkCircle {
      top: 84%;
      left: 77%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 60px 30px 100px 30px;

    & > svg.DotedCircleGreen {
      zoom: 2.5;
    }

    & > svg.CustomArrowBlue {
      zoom: 0.5;
    }

    & > svg.PinkLines {
      display: none;
    }

    & > svg.PinkCircle {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 80px 30px 80px 30px;

    & > svg.DotedCircleGreen {
      zoom: 2.5;
    }

    & > svg.CustomArrowBlue {
      zoom: 0.5;
    }

    & > svg.PinkLines {
      display: none;
    }

    & > svg.PinkCircle {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

    & > svg {
      display: none;
    }
  }
`,t.Img=r.default.img`
  position: absolute;
  top: 10vh;
  left: 8vw;
  zoom: 0.75;
  max-height: 90%;

  @media screen and (max-width: 1100px) {
    zoom: 0.6;
    top: 100px;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.55;
    top: 100px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.ContentWrapper=r.default.div`
  position: relative;
  margin: 0 0 0 45%;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 15px;
  }
`,t.TitleContainer=r.default.div`
  position: relative;
  font-size: 48px;
  white-space: pre-wrap;
  font-weight: 500;
  color: #000;

  & > svg.CustomLine2 {
    position: absolute;
    scale: 0.78;
    transform-origin: 0 0;
  }

  @media screen and (max-width: 1100px) {
    font-size: 40px;

    & > svg.CustomLine2 {
      zoom: 0.7;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 32px;

    & > svg.CustomLine2 {
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    text-align: center;
    white-space: initial;

    & > svg.CustomLine2 {
      position: absolute;
      left: 0;
      scale: 0.5;
      transform-origin: 0 0;
    }
  }
`,t.Title=r.default.div`
  position: relative;
  line-height: 120%;
`,t.Text=r.default.div`
  position: relative;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  white-space: pre-wrap;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    white-space: normal;
    margin: 30px 0 0 0;

    &.text1 {
      margin: 20px 10px 0 10px;
    }

    &.text2 {
      white-space: normal;
      padding: 0 20px;
      margin: 20px 0 0 0;
    }
  }
`,t.CustomLink=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 30px 0 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.5;
    transform: rotate(45deg);
  }

  &:hover {
    & > div {
      color: #7270ff;
    }

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.LinkTitle=r.default.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 30px;
  white-space: pre-wrap;
  text-decoration-line: underline;
`},444:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(3366),i=n(5981),a=n(9646),l=n(8490),s=n(828),u=n(7715),c=n(3854),d=n(7786);t.default=function(){return r.createElement(d.AdvantagesBlockContainer,{className:"AdvantagesBlock",id:o.CONTAINER_IDS.advantages},r.createElement(a.default,{type:"Pink"}),r.createElement(i.default,null),r.createElement(u.default,null),r.createElement(s.default,null),r.createElement(d.TitleContainer,null,r.createElement(l.default,{type:1}),r.createElement(d.Title,null,"Что вы получите?")),r.createElement(d.MessagesContainer,{className:"MessagesContainer"},r.createElement(c.default,{corner:"left",type:"uniqueEnv"}),r.createElement(c.default,{corner:"right",type:"fastProgress"}),r.createElement(c.default,{corner:"left",type:"oneYear"})))}},4567:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(3070),i=n(5904);t.default=function(e){const{type:t,corner:n}=e;return r.createElement(i.MessageContainer,{className:function(){let e="Message";return e+=` ${i.MESSAGE_CLASSES[t]}`,e}()},r.createElement(i.MessageTitle,null,o.TITLES[t]),r.createElement(i.MessageText,null,o.MESSAGE[t]))}},3070:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MESSAGE=t.TITLES=void 0,t.TITLES={uniqueEnv:"Уникальную языковую среду",fastProgress:"Быстрый прогресс в свободной речи",oneYear:"52 собеседника за 1 год практики"},t.MESSAGE={uniqueEnv:"Chatter-bot дает возможность общаться с разными собеседниками, распознавать и понимать все структуры языка, говорить новыми фразами и понимать сленг",fastProgress:"Используя Chatter-bot, ты будешь постоянно практиковать свои навыки в разговорной речи, тем самым повысишь свою уверенность и преобразуешь текущий навык на следующий уровень!",oneYear:"Каждую неделю ты будешь разговаривать c новым собеседником. Это более пятидесяти уникальных коммуникаторов для общения."}},3854:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4567);t.default=r.default},5904:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageText=t.MessageTitle=t.MessageContainer=t.MESSAGE_CLASSES=void 0;const r=n(394);t.MESSAGE_CLASSES={uniqueEnv:"unique_enviroment",fastProgress:"fast_progress",oneYear:"one_year"},t.MessageContainer=r.default.div`
  position: relative;
  padding: 32px 46px;
  border-radius: 30px 30px 30px 30px;
  margin: 0 0 20px 0;
  max-width: 95vw;

  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -16px;
    width: 0;
    height: 0;
    border: solid 8px transparent;
    border-bottom: solid 8px #ffdcf0;
    border-left: solid 8px #ffdcf0;
  } */

  &.${t.MESSAGE_CLASSES.uniqueEnv} {
    width: 640px;
    margin: 0 0 20px 5%;
    color: #070;
    background-color: #e5fbe4;
  }

  &.${t.MESSAGE_CLASSES.fastProgress} {
    align-self: flex-end;
    width: 700px;
    color: #d20076;
    background-color: #ffdcf0;
  }

  &.${t.MESSAGE_CLASSES.oneYear} {
    width: 700px;
    color: #0000d1;
    background-color: #d4d5ff;
  }

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 25px;
    border-radius: 20px 20px 20px 20px;
    margin: 0 0 20px 0;
    text-align: center;
    zoom: 1;

    &.${t.MESSAGE_CLASSES.uniqueEnv} {
      width: 90%;
      margin: 0;
    }

    &.${t.MESSAGE_CLASSES.fastProgress} {
      width: 90%;
      margin: 0;
      align-self: center;
    }

    &.${t.MESSAGE_CLASSES.oneYear} {
      width: 90%;
    }
  }
`,t.MessageTitle=r.default.div`
  margin: 0 0 15px 0;
  font-size: 36px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
`,t.MessageText=r.default.div`
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 130%;
  }
`},2308:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(444);t.default=r.default},7786:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesContainer=t.Title=t.TitleContainer=t.AdvantagesBlockContainer=void 0;const r=n(394);t.AdvantagesBlockContainer=r.default.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  padding: 10vh 0 10vh 0;
  box-sizing: border-box;

  & > svg.BlueLines {
    position: absolute;
    top: 20%;
    left: 80%;
    transform: rotate(90deg);
  }

  & > svg.YellowTrapezoid {
    position: absolute;
    top: 93%;
    left: 78%;
    transform: scale(-1.2, 1.2);
  }

  & > svg.GreenTrapezoid {
    position: absolute;
    top: 85%;
    left: 86%;
    zoom: 1.5;
    transform: rotate(-5deg);
  }

  & > svg.CustomArrowPink {
    zoom: 0.8;
  }

  @media screen and (max-width: 900px) {
    padding: 40px 0 120px 0;

    & > svg.CustomArrowPink {
      zoom: 0.5;
    }

    & > svg.BlueLines {
      top: 15%;
      zoom: 0.6;
    }

    & > svg.GreenTrapezoid {
      zoom: 1;
      top: 88%;
    }

    & > svg.YellowTrapezoid {
      zoom: 0.7;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 40px 0 0 0;
    padding: 0 0 20px 0;

    & > svg {
      display: none;
    }
  }
`,t.TitleContainer=r.default.div`
  position: relative;
  top: -70px;
  left: 50%;
  transform: translate(-50%);

  & > svg.CustomLine1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    top: 30px;
    margin: 0 0 50px 0;

    & > svg.CustomLine1 {
      zoom: 0.44;
    }
  }
`,t.Title=r.default.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    white-space: nowrap;
  }
`,t.MessagesContainer=r.default.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 30px 0 0 0;
  width: 78%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 40px 0 0 0;
    gap: 20px;
    align-items: center;
  }
`},4104:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(751),a=n(8490),l=n(7983),s=n(6702),u=n(5928),c=n(5431);t.default=function(){return r.createElement(c.ContactsBlockContainer,{className:"ContactsBlock"},r.createElement(s.default,null),r.createElement(a.default,{type:4}),r.createElement(l.default,{type:"type1"}),r.createElement(c.MainTitle,null,"Контакты, которые вы устанавливаете через Chatter,\nмогут стать вашими долгосрочными партнерами\nдля практики разговорного английского."),r.createElement(c.FlexContainer,null,r.createElement(c.CustomLink,{onClick:u.GenerateEvent},r.createElement(c.LinkTitle,null,"Хочу начать\nговорить"),r.createElement(i.default,null)),r.createElement(c.Description,null,"Мы понимаем, что, если вы достигли уровня Intermediate и выше, каждый из\nвас представляет из себя интересного, разностороннего собеседника.\nВы сможете продолжать общаться и развиваться вместе, создавая полезные\nсвязи и поддерживая мотивацию.")),r.createElement(o.default,null))}},91:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4104);t.default=r.default},5431:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Description=t.LinkTitle=t.CustomLink=t.MainTitle=t.FlexContainer=t.ContactsBlockContainer=void 0;const r=n(394);t.ContactsBlockContainer=r.default.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  background-color: #f9f6ea;
  padding: 8vh 10% 6vh 5%;
  box-sizing: border-box;

  & > svg {
    position: absolute;
  }

  & > svg.PinkLines {
    top: 95%;
    left: 80%;
  }

  & > svg.CustomLine4 {
    top: 10%;
    transform: translate(30%, 0px);
    right: 0;
    zoom: 2;
  }

  & > svg.Group {
    display: none;
  }

  @media screen and (max-width: 900px) {
    & > svg.CustomLine4 {
      zoom: 0.8;
    }
  }

  @media screen and (max-width: 480px) {
    background-color: #fff;
    padding: 8vh 10% 6vh 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > svg.PinkLines {
      display: none;
    }

    & > svg.CustomLine4 {
      display: none;
    }

    & > svg.Group {
      display: block;
    }
  }
`,t.FlexContainer=r.default.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 40px 0 50px 0;
  }
`,t.MainTitle=r.default.div`
  position: relative;
  font-size: 40px;
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 120%;

  @media screen and (max-width: 1240px) {
    font-size: 34px;
    white-space: normal;
  }

  @media screen and (max-width: 900px) {
    font-size: 32px;
    white-space: normal;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    white-space: normal;
    text-align: center;
    margin: 140px 0 0 0;
  }
`,t.CustomLink=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 30px 30px 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.4;
    overflow: visible;
    transform: rotate(45deg);
  }

  &:hover {
    & > div {
      color: #7270ff;
    }

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 900px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.LinkTitle=r.default.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 26px;
  white-space: pre-wrap;
  text-decoration-line: underline;
`,t.Description=r.default.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  white-space: pre-wrap;
  line-height: 120%;

  @media screen and (max-width: 900px) {
    font-size: 18px;
    white-space: normal;
  }

  @media screen and (max-width: 480px) {
    white-space: normal;
    text-align: center;
    font-size: 16px;
  }
`},7922:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(876),i=n(1864),a=n(1979),l=n(1869);t.default=function(){return r.createElement(l.FooterBlockContainer,{className:"FooterBlock"},r.createElement(l.FlexBlock,null,r.createElement(i.default,null),r.createElement(o.default,null)),r.createElement(l.FlexBlock,null,r.createElement(l.Rights,null,"©2023, Chatter. All rights reserved."),r.createElement(l.Container,null,r.createElement(l.Politica,null,"Политика обработки данных"),r.createElement(l.Design,null,"Design: DDYAGEL"))),r.createElement(a.default,{color:"green"}))}},2416:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7922);t.default=r.default},1869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Container=t.Politica=t.Design=t.Rights=t.FlexBlock=t.FooterBlockContainer=void 0;const r=n(394);t.FooterBlockContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 10%;
  min-height: 120px;
  background-color: #e3e3ff;
  padding: 0 80px;
  box-sizing: border-box;

  & > svg.TelegramLogo {
    display: none;
  }

  @media screen and (max-width: 900px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 15px 15px 30px 15px;

    & > svg.TelegramLogo {
      display: block;
      position: absolute;
      top: 40px;
      zoom: 0.8;
      right: 30px;
    }
  }
`,t.FlexBlock=r.default.div`
  position: relative;
  width: 100%;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin: 10px 0 10px 0;
  }

  & > svg {
    margin: 0 30px 0 0;
  }

  @media screen and (max-width: 900px) {
    & > svg {
      max-width: 120px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    & > svg {
      margin: 0;
      width: 150px;
      align-self: flex-start;
    }

    & > div.LinksMap {
      margin: 10px 0 0 0;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: row;

      & > div {
        zoom: 1;
        min-width: 40%;
        font-size: 14px;
        text-align: start;
        font-weight: 500;
      }
    }
  }
`,t.Rights=r.default.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 0;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 300;
  }
`,t.Design=r.default.div`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-end;
    font-weight: 300;
    font-size: 12px;
  }
`,t.Politica=r.default.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 0;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 300;
  }
`,t.Container=r.default.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`},7238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(3366),a=n(8490),l=n(6986),s=n(7983),u=n(5079),c=n(6702),d=n(2689),p=n(3749),f=n(7818),m=n(5612);t.default=function(){return r.createElement(f.HowItWorksBlockContainer,{className:"HowItWorksBlock",id:i.CONTAINER_IDS.howItWorks},r.createElement(f.SvgContainer,null,r.createElement(c.default,null),r.createElement(c.default,null),r.createElement(u.default,null),r.createElement(d.default,null),r.createElement(l.default,null),r.createElement(s.default,{type:"type1"})),r.createElement(f.LeftPartContainer,null,r.createElement(f.TitleContainer,null,r.createElement(a.default,{type:3}),r.createElement(a.default,{type:2}),r.createElement(f.Title,null,"Как мы\nработаем?")),r.createElement(p.default,null)),r.createElement(f.TestingWrapper,null,r.createElement(m.default,null)),r.createElement(o.default,null))}},9386:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(5928),i=n(5355),a=n(2078);t.default=function(){const[e,t]=r.useState({});function n(t){let n="InfoWrapper";return e[t]&&(n+=" opened"),n}return r.createElement(a.TestingContainer,{className:"Testing"},i.TEST.map(((i,l)=>r.createElement(a.TestContainer,{key:i.key,onClick:()=>function(n){const r=Object.assign({},e);r[n]?delete r[n]:r[n]=!0,t(r)}(l),className:"Test"},r.createElement(a.TestNumber,null,l+1),r.createElement(a.TestInfo,null,r.createElement(a.TestTitle,null,i.title),r.createElement(a.InfoWrapper,{className:n(l)},r.createElement(a.TestText,null,i.text),i.link?r.createElement(a.TestLink,{onClick:o.GenerateEvent},i.link):null)),r.createElement(a.PlusButton,null,"+"),r.createElement("svg",{width:"15",height:"8",fill:"none",viewBox:"0 0 15 8",className:"arrayNext",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1 1L7.80952 6L14 1",stroke:"#C0BDAE",strokeWidth:"2",strokeLinecap:"round"}))))))}},5355:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEST=void 0,t.TEST=[{key:"test_1",title:"Тестирование",text:"Ты приходишь в Телеграмм, бесплатно проходишь\nтест на уровень языка, и, если твой уровень\nIntermediate и выше, мы сможем предложить тебе\nпользоваться сервисом.",link:"Пройти тест прямо сейчас!"},{key:"test_2",title:"Оплата и регистрация",text:"После подтверждения твоего уровня знания языка\nвыбери подходящий тариф, перейди на страницу\nоплаты и внеси платеж."},{key:"test_3",title:"Заполнение анкеты",text:"Здесь потребуется ответить на несколько вопросов о себе.\nЭто позволит нам создать мини-анкету, содержащую информацию\nо тебе и твоих интересах. Таким образом вам будет проще\nузнать друг о друге ещё до начала общения."},{key:"test_4",title:"Подбор собеседника",text:"Алгоритм мэтчит тебя со случайным пользователем\nкаждую неделю, который имеет такой же уровень\nвладения языком, как и ты. После этого тебе\nнужно просто начать общение и договориться о\nличной встрече или онлайн-созвоне."},{key:"test_5",title:"Получение темы для общения",text:"После удачного метчинга каждую неделю ты будешь получать PDF-файл\nс темой для обсуждения. В каждой теме будут присутствовать\nспорные и дискуссионные вопросы, чтобы общение было интересным,\nпо-настоящему живым и нескучным.",link:"Хочу начать говорить!"}]},5612:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9386);t.default=r.default},2078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InfoWrapper=t.TestText=t.PlusButton=t.TestTitle=t.TestInfo=t.TestNumber=t.TestContainer=t.TestLink=t.TestingContainer=void 0;const r=n(394);t.TestingContainer=r.default.div`
  position: relative;
  width: 100%;
`,t.TestLink=r.default.div`
  margin: 20px 0 0 0;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  text-decoration-line: underline;

  &:hover {
    color: #7270ff;
  }
`,t.TestContainer=r.default.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: auto;
  cursor: pointer;
  border-bottom: solid 1px #000;

  &:last-child {
    border: none;
  }

  & > svg.arrayNext {
    display: none;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    border-bottom: none;

    &:last-of-type ${t.TestLink}, &:last-of-type svg.arrayNext {
      display: none;
    }

    & > svg.arrayNext {
      display: block;
      margin: 0 0 30px 0;
    }
  }
`,t.TestNumber=r.default.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
  border: solid 1px #000;
  border-radius: 15px;

  @media screen and (max-width: 480px) {
    margin: 0;
    border: none;
    background-color: #7270ff;
    color: #fff;
  }
`,t.TestInfo=r.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  flex: 2;

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`,t.TestTitle=r.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 28px;
  font-weight: 400;
  color: #000;
  user-select: none;

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    font-weight: 500;
    text-align: center;
  }
`,t.PlusButton=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin: 20px 20px;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  border-radius: 15px;
  background-color: #7270ff;

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.TestText=r.default.div`
  margin: 20px 0 0 0;
  white-space: pre-wrap;
  color: #000;
  font-size: 22px;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    white-space: normal;
    text-align: center;
  }
`,t.InfoWrapper=r.default.div`
  display: none;

  &.opened {
    display: block;
  }

  @media screen and (max-width: 480px) {
    &,
    &.opened {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`},1361:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7238);t.default=r.default},7818:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SvgContainer=t.TestingWrapper=t.Title=t.TitleContainer=t.LeftPartContainer=t.HowItWorksBlockContainer=void 0;const r=n(394);t.HowItWorksBlockContainer=r.default.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 1% 6% 30px 6%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    background-color: #f9f6ea;
  }
`,t.LeftPartContainer=r.default.div`
  & > svg.TwoCircles {
    zoom: 0.5;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;

    & > svg.TwoCircles {
      display: none;
    }
  }
`,t.TitleContainer=r.default.div`
  display: inline-block;
  position: relative;
  margin: 20px 20px 60px 3%;

  & > svg.CustomLine3 {
    position: absolute;
    zoom: 0.8;
  }

  & > svg.CustomLine2 {
    display: none;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    & > svg.CustomLine3 {
      display: none;
    }

    & > svg.CustomLine2 {
      display: block;
      position: absolute;
      zoom: 0.35;
      transform: rotate(180deg);
      top: 30%;
    }
  }
`,t.Title=r.default.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    white-space: nowrap;
  }
`,t.TestingWrapper=r.default.div`
  position: relative;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`,t.SvgContainer=r.default.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > svg {
      position: absolute;
    }

    & > svg.PinkLines:first-child {
      top: 76%;
      left: 0;
      transform: rotate(90deg);
      zoom: 0.65;
    }

    & > svg.PinkLines:nth-child(2) {
      top: 6%;
      left: 0;
      transform: rotate(90deg);
      zoom: 0.65;
    }

    & > svg.GreenCircle {
      top: 25%;
      left: 92%;
    }

    & > svg.PinkTriangle {
      top: 40%;
      left: 6%;
      zoom: 0.35;
    }

    & > svg.PinkCircle {
      top: 39%;
      left: 14%;
      zoom: 0.3;
    }

    & > svg.Group.type1 {
      top: 55%;
      left: 76%;
      zoom: 0.8;
    }
  }
`},9707:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(3366),a=n(751),l=n(5981),s=n(9646),u=n(8490),c=n(916),d=n(9870),p=n(6702),f=n(5928),m=n(8508);t.default=function(){return r.createElement(m.LanguagesBlockContainer,{className:"LanguagesBlock",id:i.CONTAINER_IDS.languages},r.createElement(s.default,{type:"Pink"}),r.createElement(p.default,null),r.createElement(l.default,null),r.createElement(c.default,{color:"yellow"}),r.createElement(c.default,{color:"green"}),r.createElement(d.default,{color:"green",rotateDeg:90}),r.createElement(m.Wrapper,null,r.createElement(m.TitleContainer,null,r.createElement(u.default,{type:2}),r.createElement(m.Title,null,"Мы не ограничиваемся\nодним английским!")),r.createElement(m.Message,null,"Выбери язык, который ты знаешь на уровне Intermediate"),r.createElement(m.CustomLink,{onClick:f.GenerateEvent},r.createElement(m.LinkTitle,null,"Выбрать прямо сейчас!"),r.createElement(a.default,null)),r.createElement(o.default,{type:2})))}},8054:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9707);t.default=r.default},8508:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=t.Message=t.LinkTitle=t.CustomLink=t.Title=t.TitleContainer=t.LanguagesBlockContainer=void 0;const r=n(394);t.LanguagesBlockContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f6ea;
  padding: 8vh 0;
  box-sizing: border-box;

  & > svg {
    position: absolute;
  }

  & > svg.CustomArrowPink {
    top: 20%;
    left: 7%;
    zoom: 0.6;
  }

  & > svg.PinkLines {
    top: 20%;
    left: 80%;
    zoom: 0.8;
  }

  & > svg.BlueLines {
    top: 70%;
    left: 20%;
    zoom: 0.7;
  }

  & > svg.DotedCircleYellow {
    top: 70%;
    right: 7%;
    zoom: 0.6;
  }

  & > svg.DotedCircleGreen {
    display: none;
  }

  & > svg.FourLines.green {
    display: none;
  }

  @media (orientation: landscape) {
    padding: 60px 0;
  }

  @media screen and (max-width: 1100px) {
    & > svg.CustomArrowPink {
      top: 7%;
      left: 3%;
      zoom: 0.4;
    }

    & > svg.BlueLines {
      top: 78%;
      left: 10%;
      zoom: 0.4;
    }

    & > svg.PinkLines {
      top: 10%;
      left: 80%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 50px 0 20px 0;
    background-color: #fff;

    & > svg.PinkLines {
      display: none;
    }

    & > svg.BlueLines {
      display: none;
    }

    & > svg.CustomArrowPink {
      top: -10px;
      left: 40%;
      zoom: 0.3;
      transform: translate(-50%, 0px);
    }

    & > svg.DotedCircleGreen {
      display: block;
      z-index: 2;
      zoom: 0.34;
      top: 90%;
      left: 45%;
    }

    & > svg.DotedCircleYellow {
      display: none;
    }

    & > svg.FourLines.green {
      display: block;
      z-index: 2;
      zoom: 0.55;
      top: 55px;
      left: 70%;
    }
  }
`,t.TitleContainer=r.default.div`
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg.CustomLine2 {
    position: absolute;
    top: 10px;
    zoom: 0.7;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    zoom: 0.7;
  }
`,t.Title=r.default.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  text-align: center;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 22px;
    color: #fff;
  }
`,t.CustomLink=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 30px 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.3;
    transform: rotate(45deg);
  }

  &:hover {
    & > div {
      color: #7270ff;
    }

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.LinkTitle=r.default.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 22px;
  white-space: pre-wrap;
  text-decoration-line: underline;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin: 0 10px 0 0;
  }
`,t.Message=r.default.div`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 0 30px;
    font-weight: 400;
    color: #fff;
  }
`,t.Wrapper=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 280px;
    background: #7270ff;
    gap: 10px;

    & > div.Button {
      width: 78%;
    }
  }
`},7992:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(751),i=n(9646),a=n(8490),l=n(916),s=n(828),u=n(6702),c=n(7715),d=n(5928),p=n(5767);t.default=function(){return r.createElement(p.LastBlockContainer,{className:"LastBlock"},r.createElement(i.default,{type:"Pink"}),r.createElement(l.default,{color:"grey"}),r.createElement(a.default,{type:6}),r.createElement(c.default,null),r.createElement(s.default,null),r.createElement(u.default,null),r.createElement(u.default,null),r.createElement(p.CustomLink,{onClick:d.GenerateEvent},r.createElement(o.default,null),"ХоЧУ начать\nговорить!"))}},9514:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7992);t.default=r.default},5767:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomLink=t.LastBlockContainer=void 0;const r=n(394);t.LastBlockContainer=r.default.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;

  & > svg {
    position: absolute;
  }

  & > svg.CustomArrowPink {
    top: 80%;
    left: 70%;
    zoom: 0.8;
    transform: rotate(180deg);
  }

  & > svg.DotedCircleGrey {
    top: 40%;
    left: -20px;
    zoom: 5;
  }

  & > svg.CustomLine6 {
    top: 60%;
    left: 15%;
    zoom: 0.7;
  }

  & > svg.YellowTrapezoid {
    top: 10%;
    left: 15%;
    zoom: 0.9;
  }

  & > svg.GreenTrapezoid {
    top: 20%;
    left: 23%;
    zoom: 0.9;
  }

  & > svg.PinkLines {
    top: 8%;
    left: 18%;
    zoom: 0.8;
  }

  & > svg.PinkLines:last-of-type {
    top: 5%;
    left: 55%;
    zoom: 0.9;
  }

  @media screen and (max-width: 900px) {
    height: 400px;

    & > svg.YellowTrapezoid {
      top: 10%;
      left: 15%;
      zoom: 0.6;
    }

    & > svg.GreenTrapezoid {
      top: 20%;
      left: 23%;
      zoom: 0.6;
    }

    & > svg.PinkLines {
      top: 8%;
      left: 18%;
      zoom: 0.5;
    }

    & > svg.PinkLines:last-of-type {
      display: block;
      top: 10%;
      left: 55%;
      zoom: 0.7;
    }

    & > svg.CustomLine6 {
      top: 60%;
      left: 5%;
      zoom: 0.6;
    }

    & > svg.CustomArrowPink {
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    min-height: 300px;
    max-height: 300px;

    & > svg.DotedCircleGrey {
      top: 50%;
      left: -25px;
      zoom: 2.5;
    }

    & > svg.PinkLines,
    & > svg.GreenTrapezoid,
    & > svg.YellowTrapezoid,
    & > svg.PinkLines:last-of-type {
      display: none;
    }

    & > svg.CustomLine6 {
      top: 20%;
      left: 70%;
      zoom: 0.3;
    }

    & > svg.CustomArrowPink {
      zoom: 0.3;
      transform: rotate(0deg);
      left: 75%;
    }
  }
`,t.CustomLink=r.default.div`
  position: absolute;
  top: 40%;
  right: 15vw;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: #000;
  font-size: 100px;
  font-weight: 400;
  font-family: Catallina;
  white-space: pre-wrap;
  cursor: pointer;

  & > svg.ArrowIncircle {
    position: absolute;
    top: -50%;
    right: -20%;
    zoom: 0.6;
    transform: rotate(45deg);
  }

  &:hover {
    color: #7270ff;

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    zoom: 0.8;
    right: 20vw;
  }

  @media screen and (max-width: 1100px) {
    zoom: 0.7;
    right: 25vw;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.6;
    right: 35vw;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    right: auto;
    font-size: 42px;
    font-weight: 500;
    text-decoration-line: underline;
    text-align: center;
    zoom: 1;

    & > svg.ArrowIncircle {
      display: none;
    }
  }
`},3382:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(3366),a=n(8490),l=n(5928),s=n(2949);t.default=function(){function e(){return r.createElement(r.Fragment,null,r.createElement(s.Button,{onClick:l.GenerateEvent},"Выбрать и пройти тест!"),r.createElement(o.default,{title:"Выбрать и пройти тест"}))}return r.createElement(s.PricesBlockContainer,{className:"PricesBlock",id:i.CONTAINER_IDS.prices},r.createElement(s.TitleContainer,null,r.createElement(a.default,{type:5}),r.createElement(s.Title,null,"Тарифы")),r.createElement(s.PricesContainer,null,r.createElement(s.PriceBlock,null,r.createElement(s.PriceTitle,null,"НАЧАТЬ ГОВОРИТЬ"),r.createElement(s.Price,null,"5000 р."),r.createElement(s.PriceDescription,null,"4 месяца практики\n16-18 собеседников"),e()),r.createElement(s.PriceBlock,null,r.createElement(s.PriceTitle,null,"ГОВОРИТЬ УВЕРЕННО"),r.createElement(s.Price,null,"7000 р."),r.createElement(s.PriceDescription,null,"12 месяцев практики\n52-53 собеседника"),e())))}},5942:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3382);t.default=r.default},2949:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PriceDescription=t.PricesContainer=t.TitleContainer=t.PriceTitle=t.PriceBlock=t.Button=t.Title=t.Price=t.PricesBlockContainer=void 0;const r=n(394);t.PricesBlockContainer=r.default.div`
  position: relative;
  padding: 10vh 0;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`,t.Price=r.default.div`
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 80px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`,t.Title=r.default.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`,t.Button=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  height: 60px;
  min-height: 60px;
  border-radius: 30px;
  border: solid 1px #000;
  cursor: pointer;
  user-select: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: #7270ff;
    border: solid 1px transparent;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.PriceBlock=r.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 2% 0 0;
  width: 400px;
  height: 400px;
  border-radius: 10%;
  background-color: #f9f6ea;
  padding: 25px;
  box-sizing: border-box;
  overflow: hidden;

  &:last-child {
    margin: 0 0 0 0;
  }

  @media screen and (max-width: 900px) {
    width: 340px;
    height: 340px;
    padding: 30px 20px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 80vw;
    height: 80vw;
    padding: 30px 20px;
  }
`,t.PriceTitle=r.default.div`
  text-align: center;
  color: #000;
  font-size: 32px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`,t.TitleContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 8vh 0;

  & > svg.CustomLine5 {
    position: absolute;
    top: 35px;
    zoom: 0.8;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.8;
    margin: 0 0 50px 0;
  }

  @media screen and (max-width: 480px) {
    & > svg.CustomLine5 {
      top: 0px;
      zoom: 0.7;
    }
  }
`,t.PricesContainer=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`,t.PriceDescription=r.default.div`
  flex-grow: 2;
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  white-space: pre-wrap;

  @media screen and (max-width: 900px) {
    font-size: 16;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`},3570:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(876),i=n(1864),a=n(3301),l=n(4935),s=n(1979),u=n(8917);t.default=function(){const[e,t]=r.useState(!1);return r.createElement(u.HeaderContainer,{className:"Header"},r.createElement(i.default,null),r.createElement(o.default,null),r.createElement(u.TelegrammBlock,null,r.createElement(s.default,null),r.createElement(u.SubscribeButton,null,"Подписывайся на новости")),r.createElement(l.default,{onClick:()=>t(!0)}),r.createElement(u.MobileModalMenu,{className:function(){let t="MobileModalMenu";return e||(t+=" hidden"),t}()},r.createElement(u.HeaderContainer,null,r.createElement(i.default,null),r.createElement(u.CloseWrapper,{onClick:()=>t(!1)},r.createElement(a.default,null))),r.createElement(o.default,{onClick:()=>t(!1)})))}},8051:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3570);t.default=r.default},8917:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MobileModalMenu=t.CloseWrapper=t.SubscribeButton=t.TelegrammBlock=t.HeaderContainer=void 0;const r=n(394);t.HeaderContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg.ChatterLogo {
    margin: 0 20px 0 0;
    min-width: 130px;
  }

  & > svg.MobileMenu {
    display: none;
  }

  @media screen and (max-width: 900px) {
    & > svg.ChatterLogo {
      margin: 0 15px 0 0;
      min-width: 100px;
      max-width: 120px;
    }
  }

  @media screen and (max-width: 480px) {
    & > svg.ChatterLogo {
      margin: 0 20px 0 0;
      min-width: 100px;
      max-width: 150px;
    }

    & > div.LinksMap {
      display: none;
    }

    & > svg.MobileMenu {
      display: block;
    }
  }
`,t.TelegrammBlock=r.default.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;

  &:hover {
    & > svg > path {
      fill: #7270ff;
    }

    & > div {
      color: #fff;
      background-color: #7270ff;
      border: solid 1px transparent;
    }
  }

  @media screen and (max-width: 1400px) {
    scale: 0.8;
  }

  @media screen and (max-width: 900px) {
    scale: 0.6;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.SubscribeButton=r.default.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
  min-width: 290px;
  width: 290px;
  height: 53px;
  border-radius: 30px;
  border: 1px solid #000;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #00000007;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`,t.CloseWrapper=r.default.div``,t.MobileModalMenu=r.default.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 5% 7% 10% 7%;
    box-sizing: border-box;
    background: linear-gradient(180deg, #f8f5e9 0%, #fff 100%);
    z-index: 3;

    &.hidden {
      display: none;
    }

    &.LinksMap {
      display: none;
    }
  }
`},2572:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(9508),i=n(751),a=n(5981),l=n(916),s=n(828),u=n(5079),c=n(6702),d=n(2689),p=n(1979),f=n(7715),m=n(5928),h=n(8051),b=n(2636);t.default=function(){return r.createElement(b.WelcomeBlockContainer,{className:"WelcomeBlock"},r.createElement(u.default,null),r.createElement(d.default,null),r.createElement(l.default,{color:"yellow"}),r.createElement(p.default,{color:"pink"}),r.createElement(f.default,null),r.createElement(s.default,null),r.createElement(c.default,null),r.createElement(h.default,null),r.createElement(b.WelcomeTitle,null,function(){const e=(0,m.getScreenWidth)();return!e||e>480?"Привет,\nя – CHATTER BoT!":"Привет,\nя – CHATTER\nBoT!"}()),r.createElement(b.Text,{className:"free"},"ГОВОРИ СВОБОДНО!"),r.createElement(b.Wrapper,null,r.createElement(b.Text,{className:"your-level"},"Твой уровень знания языка intermediate и выше?\nХочешь развить разговорный или бизнес-английский?\nЯ здесь, чтобы помочь тебе в этом!")),r.createElement(a.default,null),r.createElement(b.TestLink,{onClick:function(){(0,m.GenerateEvent)()}},"Пройти тест\nпрямо сейчас!",r.createElement(i.default,null)),r.createElement(o.default,null))}},9509:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2572);t.default=r.default},2636:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=t.TestLink=t.Text=t.WelcomeTitle=t.WelcomeBlockContainer=void 0;const r=n(394);t.WelcomeBlockContainer=r.default.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 5vh 100px 10vh 100px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #f8f5e9 0%, #fff 100%);

  & {
    & > svg {
      position: absolute;
      zoom: 0.9;
    }

    & > svg.DotedCircleYellow {
      top: 20%;
      left: 42%;
    }

    & > svg.PinkCircle {
      top: 12%;
      left: 84%;
    }

    & > svg.PinkTriangle {
      top: 18%;
      left: 80%;
    }

    & > svg.PinkLines {
      top: 80%;
      left: 82%;
    }

    & > svg.BlueLines {
      position: relative;
      margin: 50px 0 0 0;
      left: 40%;
    }

    & > svg.GreenTrapezoid {
      top: 90%;
      left: 81%;
    }

    & > svg.YellowTrapezoid {
      top: 82%;
      left: 75%;
    }

    & > svg.TelegramLogo {
      display: none;
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 3vh 50px 6vh 50px;

    & > svg {
      zoom: 0.8;
    }
  }

  @media screen and (max-width: 1130px) {
    & > svg {
      zoom: 0.7;
    }

    & > svg.PinkCircle {
      zoom: 0.4;
      top: 15%;
    }

    & > svg.PinkTriangle {
      top: 22%;
      left: 80%;
      zoom: 0.5;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 30px 15px 50px 15px;

    & > svg {
      zoom: 0.6;
    }

    & > svg.PinkCircle {
      zoom: 0.35;
      top: 17%;
    }

    & > svg.PinkTriangle {
      top: 22%;
      left: 80%;
      zoom: 0.5;
    }

    & > svg.DotedCircleYellow {
      top: 20%;
      left: 42%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 5% 7% 20% 7%;

    & > svg.BlueLines {
      display: none;
    }

    & > svg.PinkCircle {
      top: 15%;
      left: 15%;
    }

    & > svg.PinkTriangle {
      top: 20%;
      left: 5%;
      zoom: 0.4;
    }

    & > svg.DotedCircleYellow {
      top: 16%;
      left: 80%;
    }

    & > svg.PinkLines {
      top: 94%;
      left: 82%;
      zoom: 0.5;
    }

    & > svg.GreenTrapezoid {
      top: 100%;
      left: 84%;
    }

    & > svg.YellowTrapezoid {
      zoom: 0.5;
      top: 95%;
      left: 72%;
    }

    & > svg.TelegramLogo {
      display: block;
      zoom: 0.8;
      top: 95%;
      left: 10%;
    }
  }
`,t.WelcomeTitle=r.default.div`
  position: relative;
  font-size: 120px;
  font-family: Catallina;
  white-space: pre-wrap;
  text-transform: lowercase;
  margin: 8% 0 0 0;

  @media screen and (max-width: 1400px) {
    font-size: 105px;
  }

  @media screen and (max-width: 1130px) {
    font-size: 80px;
  }

  @media screen and (max-width: 900px) {
    font-size: 60px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
    line-height: 55px;
    margin: 35% 0 0 0;
    text-align: center;
  }
`,t.Text=r.default.div`
  color: #000;
  font-weight: 400;
  font-style: normal;
  font-family: Raleway;

  &.free {
    margin: 10px 0 0 0;
    font-size: 48px;

    @media screen and (max-width: 1400px) {
      font-size: 42px;
    }

    @media screen and (max-width: 1130px) {
      font-size: 38px;
    }

    @media screen and (max-width: 900px) {
      font-size: 34px;
    }

    @media screen and (max-width: 480px) {
      margin: 0;
      width: fit-content;
      align-self: center;
      font-size: 28px;
      text-align: center;
      padding: 10px 15px;
      border-radius: 10px;
      color: #000;
      font-weight: 500;
    }
  }

  &.your-level {
    position: relative;
    right: 0;
    width: fit-content;
    margin: 20px 0 0 0;
    font-size: 32px;
    white-space: pre-wrap;

    @media screen and (max-width: 1400px) {
      font-size: 28px;
    }

    @media screen and (max-width: 1130px) {
      font-size: 24px;
    }

    @media screen and (max-width: 900px) {
      font-size: 20px;
    }

    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      margin: 20px 0 40px 0;
      white-space: normal;
    }
  }
`,t.TestLink=r.default.div`
  position: absolute;
  bottom: 2%;
  left: 6%;
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  color: #000;
  text-decoration-line: underline;
  white-space: pre-wrap;
  cursor: pointer;

  & > svg.ArrowIncircle {
    position: absolute;
    zoom: 0.7;
    bottom: 20%;
    left: 100%;
    transform: rotate(45deg);
  }

  &:hover {
    color: #7270ff;

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 1130px) {
    zoom: 0.6;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.5;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`,t.Wrapper=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`},6300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(1391),i=n(9433),a=n(2308),l=n(91),s=n(2416),u=n(1361),c=n(8054),d=n(9514),p=n(5942),f=n(9509),m=n(299);t.default=function(){return r.createElement(m.MainLayoutContainer,{className:"MainLayout"},r.createElement(f.default,null),r.createElement(a.default,null),r.createElement(i.default,null),r.createElement(u.default,null),r.createElement(l.default,null),r.createElement(p.default,null),r.createElement(c.default,null),r.createElement(d.default,null),r.createElement(s.default,null),r.createElement(o.default,null))}},4735:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6300);t.default=r.default},299:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainLayoutContainer=void 0;const r=n(394);t.MainLayoutContainer=r.default.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`},4915:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294),o=n(3366),i=n(3301),a=n(9094);t.default=function(){const e=r.useRef(null),[t,n]=r.useState(!1),[l,s]=r.useState(null);return r.useEffect((()=>{t||s(null);const n={capture:!0},r=t=>{var n;(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.contains(t.target))||(t.stopPropagation(),t.stopImmediatePropagation())};return t&&document.addEventListener("click",r,n),()=>document.removeEventListener("click",r,n)}),[t]),r.useEffect((()=>{const e=()=>n(!0);return document.addEventListener("open_popup",e),()=>document.removeEventListener("open_popup",e)}),[]),t?r.createElement(r.Fragment,null,r.createElement(a.Substrate,null),r.createElement(a.ModalContainer,{className:"Modal",ref:e},r.createElement(i.default,{onClick:()=>n(!1)}),l?null:r.createElement(a.Img,{src:"/assets/PopUp_Header.svg"}),l?"english"===l?r.createElement(a.ContentContainer,{className:"stage2"},r.createElement(a.Title,null,"Ура! Язык выбран!"),r.createElement(a.Text,null,"Проверим твой уровень знания языка?"),r.createElement(a.Button,{className:"highlighted",onClick:()=>{window.location.href="https://t.me/english_chatter_bot"}},"Пройти тест")):r.createElement(a.ContentContainer,{className:"stage2"},r.createElement(a.Title,null,"Ура! Язык выбран!"),r.createElement(a.Text,null,"Бот под этот язык находится в разработке. Но совсем скоро он будет доступен для вас!")):r.createElement(a.ContentContainer,{className:"stage1"},r.createElement(a.Title,null,"Выбери язык, который\nхочешь практиковать!"),o.LANGUAGES.map((e=>r.createElement(a.Button,{key:e.key,onClick:()=>s(e.key),className:l===e.key?"highlighted":""},e.title)))))):null}},1391:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4915);t.default=r.default},9094:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Substrate=t.Text=t.Button=t.Title=t.Img=t.ContentContainer=t.ModalContainer=void 0;const r=n(394);t.ModalContainer=r.default.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 800px;
  height: auto;
  z-index: 5;

  & > svg.Close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    cursor: pointer;
    margin: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);

    & > svg.Close {
      position: absolute;
      top: 10px;
      right: 10px;
      transform: translate3d(0, 0, 0);
    }
  }
`,t.ContentContainer=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 30px;

  @media screen and (max-width: 480px) {
    padding: 10px 0 0 0;

    &.stage2 {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`,t.Img=r.default.img`
  position: relative;
  background-color: #f8f5e9;
  user-select: none;
`,t.Title=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;
  font-size: 35px;
  font-weight: 500;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    font-weight: 500;
  }
`,t.Button=r.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 400;
  background-color: #f0f0f0;
  cursor: pointer;

  &.highlighted {
    background-color: #7270ff;
    color: #fff;
  }
`,t.Text=r.default.div`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 20px 0;
  max-width: 80%;
  text-align: center;
`,t.Substrate=r.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;

  @media screen and (max-width: 480px) {
    display: none;
  }
`},94:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANGUAGES=t.CONTAINER_IDS=void 0,t.CONTAINER_IDS={advantages:"AdvantagesBlock",aboutUs:"AboutUsBlock",howItWorks:"HowItWorksBlock",prices:"PricesBlock",languages:"LanguagesBlock"},t.LANGUAGES=[{key:"english",title:"Английский"},{key:"spanish",title:"Испанский"},{key:"kazakh",title:"Казахский"}]},3366:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(94),t)},751:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"186",height:"186",xmlns:"http://www.w3.org/2000/svg",className:"ArrowIncircle"},r.createElement("g",null,r.createElement("circle",{r:"92",cy:"93",cx:"93",id:"svg_1",opacity:"1",fill:"none",stroke:"black",strokeWidth:"2"}),r.createElement("g",{id:"svg_6"},r.createElement("path",{id:"svg_5",fill:"black",d:"m65.202483,118.301571l-1.247994,1.247976l2.495979,2.495953l1.247985,-1.247976l-2.49597,-2.495953zm56.843026,-52.582143c0,-0.97474 -0.790156,-1.764922 -1.764922,-1.764922l-15.884297,0c-0.974766,0 -1.764922,0.790182 -1.764922,1.764922c0,0.97474 0.790156,1.764922 1.764922,1.764922l14.119376,0l0,14.119376c0,0.974766 0.790156,1.764922 1.764922,1.764922c0.974766,0 1.764922,-0.790156 1.764922,-1.764922l0,-15.884297zm-54.347056,55.078095l53.83011,-53.83011l-2.495953,-2.49597l-53.830128,53.830128l2.49597,2.495953z"}))))}},5981:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"73",height:"63",fill:"none",viewBox:"0 0 73 63",className:"BlueLines",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M71 61L2 61",stroke:"#7270FF",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 41.334L2 41.334",stroke:"#7270FF",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 21.666L2 21.666",stroke:"#7270FF",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 2L2 1.99999",stroke:"#7270FF",strokeWidth:"3",strokeLinecap:"square"}))}},1864:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"232",height:"54",viewBox:"0 0 232 54",fill:"none",className:"ChatterLogo"},r.createElement("path",{d:"M68.3934 7.65287e-05C66.5694 0.0079704 64.7889 0.562659 63.2768 1.59406C61.7646 2.62546 60.5888 4.08737 59.898 5.79456C59.2072 7.50195 59.0324 9.37819 59.3958 11.1859C59.7592 12.9938 60.6445 14.6519 61.9397 15.9507C63.235 17.2497 64.8818 18.131 66.6721 18.4831C68.4625 18.8352 70.3158 18.6427 71.9979 17.9294C73.68 17.2162 75.1152 16.0146 76.122 14.4763C77.1289 12.9381 77.6621 11.1326 77.6544 9.2877C77.6434 6.81403 76.6617 4.44606 74.9251 2.7044C73.1884 0.962743 70.839 -0.00993521 68.3934 7.65287e-05ZM71.2513 9.32736C71.3401 8.18082 73.0125 8.1891 73.0951 9.32736C73.06 10.4406 71.1996 10.5449 71.2513 9.32736ZM67.553 9.34199C67.6397 8.19545 69.3122 8.20585 69.3928 9.34199C69.3576 10.4552 67.5013 10.57 67.553 9.34199ZM63.8506 9.35874C63.9373 8.2122 65.612 8.22048 65.6946 9.35874C65.6596 10.472 63.7991 10.57 63.8506 9.35874Z",fill:"white"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.6945 9.37435C58.6959 9.36723 58.6959 9.35994 58.6945 9.35282C60.5053 10.0316 62.0231 11.3352 62.982 13.0355C63.941 14.7359 64.28 16.7242 63.9397 18.6528C63.5993 20.5812 62.6015 22.3266 61.1209 23.5835C59.64 24.8403 57.7708 25.5283 55.8405 25.5269H55.7769C54.5724 25.5252 53.3832 25.255 52.2931 24.7353C51.203 24.2156 50.2387 23.4591 49.4684 22.5195C48.698 21.5798 48.1403 20.4798 47.835 19.2975C47.5297 18.1151 47.484 16.8789 47.7012 15.6767C47.9184 14.4742 48.3931 13.3349 49.0919 12.3394C49.7906 11.3438 50.6965 10.5161 51.7451 9.91494C52.7939 9.31377 53.9597 8.95376 55.1606 8.86034C56.3615 8.76694 57.5679 8.9424 58.6945 9.37435ZM56.2254 20.8561C56.2254 21.8585 55.4041 22.6713 54.3909 22.6713C53.3777 22.6713 52.5561 21.8585 52.5561 20.8561C52.5561 19.8536 53.3777 19.0408 54.3909 19.0408C55.4041 19.0408 56.2254 19.8536 56.2254 20.8561Z",fill:"#00FF00"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M63.8649 17.7673C63.9823 16.1012 63.6086 14.43 62.7807 12.9688C61.8854 11.3886 60.5112 10.1468 58.8672 9.42188C58.8691 10.044 58.9318 10.6673 59.0562 11.2829C59.4278 13.122 60.3331 14.8088 61.6577 16.1301C62.3138 16.7847 63.0582 17.335 63.8649 17.7673Z",fill:"#80FF5C"}),r.createElement("path",{d:"M43.5009 46.1194L38.686 46.1462C38.598 46.1462 29.2832 46.1462 23.0358 46.1462H22.7345C19.7602 46.1462 17.5542 46.1462 17.5169 46.1462C14.0491 46.1462 11.0375 45.7539 11.7551 42.6255L11.9686 41.478C12.1366 40.403 12.3286 39.4354 12.5367 38.4948C14.0545 31.4935 16.7727 28.0452 20.1017 26.938C20.9935 26.641 21.9286 26.4966 22.8679 26.5107C30.3207 26.5538 39.7023 35.1378 45.7841 41.4726C47.6273 42.9804 46.0937 46.1115 43.5009 46.1194Z",fill:"#7270FF"}),r.createElement("path",{d:"M66.304 49.2504L66.3735 49.1684C66.3894 49.1329 66.4108 49.0974 66.4267 49.0618C66.4374 49.0412 66.4489 49.0212 66.4616 49.0018C66.6197 48.6655 66.7482 48.3155 66.8457 47.9559C66.9979 47.2278 67.0178 46.477 66.9045 45.7415L66.8137 45.217C66.6243 43.8845 66.4055 42.6638 66.1761 41.487C64.4736 32.7485 61.5411 28.4423 57.9975 27.0442C49.7259 23.7672 38.1214 36.2712 30.9276 45.1898C28.9904 47.1013 30.6607 51.0144 33.409 51.0254L38.5189 51.0554C38.6123 51.0554 48.501 51.0554 55.1291 51.0554C58.446 51.0554 60.9488 51.0554 60.9994 51.0554C60.9994 51.0554 64.2894 50.9188 66.0692 49.5262C66.136 49.4252 66.2239 49.3404 66.304 49.2504Z",fill:"#00FF00"}),r.createElement("path",{d:"M43.5586 46.1214L38.8528 46.1458C38.7927 46.1458 34.6544 46.1458 30.0898 46.1458C30.2174 45.8899 30.3863 45.6584 30.5891 45.4609C33.159 42.2527 36.3014 38.5701 39.6527 35.3457C41.9038 37.3812 44.003 39.5109 45.8068 41.4304C47.6001 42.9699 46.0971 46.1134 43.5586 46.1214Z",fill:"#73FFF5"}),r.createElement("path",{d:"M8.65512 1.61547L13.0193 3.63716C13.3518 3.79301 13.6107 4.07532 13.7404 4.42347C13.8701 4.77147 13.8602 5.1576 13.7128 5.4988L8.58617 17.3271C8.51182 17.4984 8.40491 17.653 8.27157 17.7822C8.13824 17.9114 7.98113 18.0125 7.80928 18.0797C7.63746 18.1469 7.45424 18.1791 7.27025 18.1741C7.08628 18.1689 6.90513 18.127 6.73723 18.0505L1.15981 15.4986C0.982537 15.4177 0.823942 15.2998 0.694163 15.1529C0.564385 15.0058 0.466316 14.8329 0.406281 14.6449C0.346247 14.457 0.325574 14.2582 0.345548 14.0616C0.365522 13.865 0.425736 13.6749 0.522334 13.5032L6.86218 2.20502C7.03492 1.89696 7.31469 1.66563 7.64648 1.55653C7.97827 1.44743 8.33808 1.46846 8.65512 1.61547Z",fill:"#F1E600"}),r.createElement("path",{d:"M93.1893 29.9519C93.1607 28.2162 93.4805 26.4927 94.1295 24.8834C94.7785 23.274 95.7436 21.8117 96.9673 20.5838C98.1564 19.323 99.5955 18.3257 101.192 17.6559C102.789 16.9857 104.507 16.6583 106.238 16.694C107.973 16.6709 109.695 17.0105 111.292 17.6921C112.889 18.3737 114.327 19.3814 115.514 20.6516L113.258 22.9133C112.361 21.9563 111.279 21.1927 110.078 20.6687C108.877 20.1447 107.582 19.8713 106.272 19.8648C104.962 19.8583 103.665 20.1195 102.459 20.6317C101.253 21.1443 100.163 21.8974 99.2567 22.8455C97.4593 24.7709 96.4593 27.3092 96.4593 29.9462C96.4593 32.5837 97.4593 35.122 99.2567 37.0474C100.163 37.9954 101.253 38.7485 102.459 39.2607C103.665 39.7734 104.962 40.0341 106.272 40.028C107.582 40.0215 108.877 39.7482 110.078 39.2238C111.279 38.6998 112.361 37.9361 113.258 36.9795L115.514 39.2408C114.327 40.511 112.889 41.5192 111.292 42.2008C109.695 42.882 107.973 43.222 106.238 43.1984C104.511 43.2313 102.797 42.9023 101.204 42.2325C99.6118 41.5627 98.1764 40.5667 96.9899 39.3087C95.7634 38.084 94.795 36.6245 94.1421 35.0172C93.4892 33.4099 93.1652 31.6872 93.1893 29.9519Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M133.867 32.1524V17.6738H136.869V43.2013H133.867V35.1111H123.37V43.2013H120.367V17.6738H123.37V32.1524H133.867Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M159.195 25.8167V43.2007H156.016V35.0243H144.917V43.2007H141.725V25.8167C141.696 24.6291 141.9 23.4477 142.325 22.342C142.751 21.2363 143.389 20.2288 144.202 19.3781C145.015 18.5279 145.987 17.852 147.061 17.3906C148.134 16.9293 149.287 16.6914 150.452 16.6914C151.617 16.6914 152.77 16.9293 153.843 17.3906C154.917 17.852 155.889 18.5279 156.702 19.3781C157.515 20.2288 158.154 21.2363 158.579 22.342C159.004 23.4477 159.208 24.6291 159.179 25.8167H159.195ZM144.917 25.8167V32.0215H156.016V25.8167C156.035 24.2799 155.458 22.7972 154.411 21.6915C153.914 21.1331 153.307 20.6873 152.631 20.3819C151.954 20.0769 151.223 19.9193 150.483 19.9193C149.743 19.9193 149.011 20.0769 148.335 20.3819C147.658 20.6873 147.051 21.1331 146.554 21.6915C145.496 22.7927 144.907 24.275 144.917 25.8167Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M161.137 17.6738H175.697V20.6325H169.884V43.2013H166.95V20.6325H161.137V17.6738Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M177.637 17.6738H193.168V20.6325H186.968V43.2013H183.864V20.6325H177.637V17.6738Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M209.672 17.6738V20.6325H200.964V32.1524H208.181V35.1111H200.938V40.2483H209.646V43.2013H198.023V17.6738H209.672Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M227.5 34.0395L231.706 43.1113H228.278L224.423 34.7469L224.006 34.7804H218.573V43.2013H215.496V17.6809H223.552C225.799 17.5882 227.993 18.4077 229.668 19.9654C231.219 21.5376 231.998 23.6257 231.998 26.2474C231.998 30.0089 230.499 32.606 227.5 34.0395ZM218.573 20.6394V31.8219H223.552C224.065 31.8255 224.576 31.7574 225.072 31.6198C225.704 31.4771 226.307 31.2165 226.85 30.8507C228.235 29.9077 228.925 28.3734 228.921 26.2474C228.918 24.1218 228.227 22.5758 226.85 21.6106C226.306 21.2472 225.703 20.9871 225.072 20.8415C224.575 20.7092 224.065 20.6414 223.552 20.6394H218.573Z",fill:"#1D1D1B"}),r.createElement("path",{d:"M68.4401 53.9842L62.3468 53.9998C62.1387 54.0076 61.9322 53.9587 61.7499 53.858C61.5673 53.7575 61.4158 53.6091 61.3113 53.4287C61.2066 53.2484 61.1531 53.0429 61.1564 52.8344C61.1597 52.6258 61.2198 52.4221 61.3301 52.2454L64.3026 47.5988L67.3973 42.7597C67.5086 42.5932 67.6592 42.4568 67.8355 42.3624C68.0121 42.2681 68.2089 42.2188 68.409 42.2188C68.6091 42.2188 68.8061 42.2681 68.9824 42.3624C69.159 42.4568 69.3095 42.5932 69.4206 42.7597L72.5416 47.5779L75.5401 52.2088C75.6512 52.3851 75.7121 52.5884 75.7167 52.7966C75.721 53.005 75.6688 53.2106 75.5653 53.3914C75.4618 53.5723 75.3111 53.7215 75.1294 53.8233C74.9477 53.9248 74.7418 53.9752 74.5336 53.9686L68.4401 53.9842Z",fill:"#FF0090"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.9202 11.2557V11.2393C18.4375 11.8042 17.1966 12.8785 16.4134 14.2753C15.6302 15.6723 15.3541 17.3034 15.6335 18.8854C15.9127 20.4674 16.7296 21.9 17.942 22.9342C19.1542 23.9683 20.6855 24.5389 22.2694 24.5463H22.3231C23.318 24.5494 24.3012 24.3302 25.203 23.9041C25.8319 23.607 26.4103 23.2144 26.9191 22.7414C26.5284 22.4322 26.2781 21.957 26.2781 21.424C26.2781 20.4918 27.0437 19.7362 27.9884 19.7362C28.2614 19.7362 28.5193 19.7992 28.7482 19.9115C28.8027 19.7509 28.8515 19.588 28.8942 19.423C29.1474 18.447 29.1856 17.4264 29.0062 16.4335C28.8266 15.4408 28.4338 14.5002 27.8556 13.679C27.2774 12.8576 26.5282 12.1755 25.6608 11.6813C24.7934 11.187 23.8294 10.8926 22.8373 10.8191C21.8451 10.7455 20.8493 10.8946 19.9202 11.2557Z",fill:"#7270FF"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M66.3485 49.3248L66.2759 49.4062C66.2539 49.4298 66.2313 49.453 66.2087 49.4762C66.1455 49.5411 66.0821 49.6063 66.0307 49.6801C64.9346 50.4963 63.2899 50.8782 62.125 51.0544L64.4727 47.46L66.6132 44.1816C66.6808 44.5779 66.746 44.9828 66.8082 45.3988L66.903 45.9197C67.0213 46.6507 67.0005 47.3965 66.8416 48.1201C66.7398 48.4774 66.6056 48.8252 66.4405 49.1593C66.4273 49.1786 66.4153 49.1985 66.4043 49.2189C66.3959 49.2367 66.3861 49.2542 66.3763 49.2719C66.3665 49.2895 66.3569 49.3072 66.3485 49.3248Z",fill:"#F1E600"}),r.createElement("path",{d:"M2.33863 43.2211C1.59601 44.3524 2.00738 46.0302 2.58172 47.1539C3.09994 48.1755 4.0696 49.3043 5.37852 49.1969C6.11848 49.1331 6.71416 48.6632 7.29116 48.2494C8.01774 47.7182 8.74966 47.1957 9.48693 46.6814C10.2242 46.1673 10.9685 45.6565 11.7202 45.1491C12.3719 44.7124 13.0958 44.2016 13.9266 44.1838C15.468 44.1506 16.0636 45.7774 16.3039 46.9548C16.5871 48.2597 16.9183 49.58 18.2353 50.2747C19.3814 50.8747 20.789 50.8646 22.0526 50.7215C23.784 50.5028 25.4926 50.143 27.1601 49.6465C28.1111 49.3911 29.0834 49.1101 30.0825 49.1127C30.8932 49.1193 31.6898 49.3149 32.4037 49.6821C33.8489 50.4176 34.9254 51.6971 35.7775 53.0022C35.8498 53.1093 35.9031 52.6829 35.9031 52.6675C35.9299 52.4682 35.8985 52.2659 35.8124 52.0827C35.1234 50.9521 34.2106 49.9606 33.125 49.1637C32.5584 48.7624 31.9143 48.4722 31.2298 48.3102C30.5452 48.148 29.8339 48.117 29.1369 48.2188C28.317 48.3601 27.5082 48.5555 26.7165 48.8037C25.8965 49.0334 25.0684 49.2353 24.2297 49.4011C22.8486 49.6771 21.4034 49.9375 19.9877 49.7997C18.7055 49.6745 17.4687 49.1485 16.921 47.9659C16.3735 46.7836 16.4483 45.361 15.6629 44.2273C15.3639 43.7545 14.8854 43.4104 14.3272 43.267C13.5846 43.1138 12.8715 43.456 12.265 43.8288C10.8493 44.6946 9.50029 45.6803 8.15397 46.6381C7.46478 47.1335 6.76493 47.7847 5.95286 48.0911C5.61896 48.2153 5.2573 48.2549 4.90266 48.2067C4.54803 48.1584 4.21238 48.0236 3.92804 47.8153C3.36676 47.3979 2.92255 46.8539 2.63514 46.232C2.31191 45.5757 1.98869 44.7891 2.42677 44.12C2.49839 43.9363 2.51322 43.7369 2.46952 43.5453C2.46952 43.5095 2.39206 43.1215 2.32793 43.216L2.33863 43.2211Z",fill:"#2A292D"}),r.createElement("path",{d:"M11.6758 16.8763L8.37864 25.0431C8.28965 25.2569 8.12342 25.4279 7.91445 25.5203C7.70549 25.6128 7.4698 25.6196 7.25633 25.5394L3.41936 24.0526C3.30409 24.0067 3.1996 23.9365 3.11262 23.8467C3.02562 23.7571 2.95808 23.6497 2.91435 23.5316C2.8706 23.4135 2.85165 23.2872 2.85867 23.1612C2.86573 23.0349 2.8986 22.9117 2.95519 22.7992L7.27366 14.4434C7.32983 14.3373 7.40624 14.2438 7.49835 14.1681C7.59048 14.0924 7.69645 14.0365 7.81003 14.0033C7.92363 13.9701 8.04257 13.9603 8.15981 13.9747C8.27706 13.9889 8.39025 14.0272 8.49275 14.0869L11.3204 15.7754C11.4969 15.887 11.6291 16.0584 11.6941 16.2596C11.759 16.4609 11.7525 16.6792 11.6758 16.8763Z",fill:"#00FF00"}),r.createElement("path",{d:"M9.75051 14.8416L8.65386 17.3379C8.5791 17.5086 8.47128 17.6628 8.33663 17.7913C8.20195 17.9199 8.04308 18.0206 7.86922 18.0874C7.69531 18.1544 7.50985 18.1861 7.32347 18.1809C7.13711 18.1756 6.95349 18.1337 6.78324 18.0573L5.61912 17.5294L7.24422 14.4408C7.29922 14.3346 7.37534 14.2408 7.46791 14.1654C7.56053 14.0898 7.66761 14.034 7.78263 14.0015C7.89766 13.969 8.01817 13.9604 8.13678 13.9761C8.2554 13.9919 8.3696 14.0316 8.47237 14.0931L9.75051 14.8416Z",fill:"#FF0090"}))}},3301:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{onClick:t}=e;return r.createElement("svg",{width:"16",height:"16",fill:"none",onClick:t,className:"Close",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.55869 8.01589C5.16512 7.62826 4.81391 7.28742 4.46623 6.9404C3.05787 5.53584 1.65097 4.1301 0.245545 2.72318C-0.0836037 2.3947 -0.0818388 2.27638 0.250839 1.94084L1.99541 0.200441C2.26014 -0.0644592 2.41634 -0.0644592 2.68195 0.200441C4.39505 1.91288 6.10697 3.6262 7.81772 5.3404C7.87481 5.41149 7.92559 5.48742 7.9695 5.56733C8.47955 5.05166 8.94018 4.58631 9.3964 4.1245C10.7024 2.81531 12.0093 1.5067 13.3171 0.198675C13.5818 -0.0662252 13.7327 -0.0662252 14.0027 0.198675C14.6092 0.804415 15.2164 1.41192 15.8241 2.02119C16.0588 2.25695 16.0579 2.41413 15.8161 2.65695C14.1348 4.33878 12.4529 6.02002 10.7704 7.70066C10.6821 7.78896 10.5692 7.86932 10.4377 7.97704C10.7977 8.33024 11.118 8.64018 11.4331 8.95453C12.8714 10.3915 14.3089 11.829 15.7455 13.2671C16.0861 13.6079 16.0853 13.7166 15.7402 14.0618C15.1702 14.6334 14.5995 15.2044 14.0283 15.7748C13.7265 16.0759 13.5941 16.0742 13.2968 15.7748C11.5907 14.0677 9.88468 12.3606 8.17864 10.6534C8.12507 10.5923 8.07526 10.5281 8.02951 10.4609C7.94126 10.5492 7.8742 10.6066 7.81419 10.6667C6.10815 12.3738 4.40211 14.0809 2.69607 15.7881C2.41634 16.0689 2.27515 16.0689 1.99806 15.7881C1.39624 15.1947 0.797067 14.5996 0.20054 14.0026C-0.0694847 13.7316 -0.0641901 13.5921 0.205835 13.3183C1.90717 11.6159 3.60939 9.91317 5.31249 8.21015C5.37426 8.15011 5.45015 8.10155 5.55869 8.01589Z",fill:"black"}))}},9646:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{type:t}=e;return"Pink"===t?r.createElement("svg",{width:"226",height:"102",fill:"none",viewBox:"0 0 226 102",className:"CustomArrowPink",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-0.336136 102C-7.97682 102 -10.8969 92.0319 -4.464 87.9091L38.6622 60.2786C40.1459 59.2848 41.3621 57.9408 42.2029 56.3664C43.0437 54.79 43.4833 53.0331 43.4833 51.2466C43.4833 49.4601 43.0437 47.7013 42.2029 46.1268C41.3621 44.5505 40.1459 43.2065 38.6622 42.2146L-4.27718 14.35C-10.797 10.1207 -7.80199 0 -0.0305338 0H148.483C154.558 0 159.483 4.92487 159.483 11V91C159.483 97.0751 154.558 102 148.483 102H-0.336136Z",fill:"#FFDCF0"}),r.createElement("path",{d:"M142.6 50.9751L142.49 93.6597C142.435 95.1178 142.78 96.5643 143.489 97.8416C144.197 99.1204 145.243 100.182 146.514 100.914C147.784 101.647 149.232 102.022 150.7 101.999C152.17 101.976 153.604 101.555 154.85 100.782L187.583 79.9595L221.673 58.2801C222.846 57.5004 223.808 56.4459 224.472 55.2105C225.137 53.9737 225.484 52.5952 225.484 51.1935C225.484 49.7918 225.137 48.4118 224.472 47.1764C223.808 45.9396 222.846 44.8851 221.673 44.1069L187.731 22.2438L155.107 1.23851C153.865 0.460271 152.433 0.0335661 150.966 0.00174387C149.498 -0.0286364 148.05 0.337346 146.776 1.06206C145.502 1.78678 144.451 2.84275 143.734 4.1157C143.019 5.38866 142.664 6.83088 142.71 8.289L142.6 50.9751Z",fill:"#F942A9"})):"Blue"===t?r.createElement("svg",{width:"202",height:"88",fill:"none",viewBox:"0 0 202 88",className:"CustomArrowBlue",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M194.875 0.000397306C201.464 0.00039673 203.983 8.59648 198.435 12.1518L161.243 35.9803C159.964 36.8373 158.915 37.9964 158.19 39.3542C157.465 40.7136 157.085 42.2288 157.085 43.7694C157.085 45.3101 157.465 46.8269 158.19 48.1847C158.915 49.5441 159.964 50.7032 161.243 51.5586L198.274 75.589C203.897 79.2365 201.314 87.9648 194.612 87.9648L68.0483 87.9649C61.9731 87.9649 57.0483 83.04 57.0483 76.9648L57.0483 11.0004C57.0483 4.92528 61.9731 0.000408925 68.0483 0.000408394L194.875 0.000397306Z",fill:"#E3E3FF"}),r.createElement("path",{d:"M71.608 44.0037L71.7029 7.19265C71.7504 5.93518 71.4532 4.6877 70.8413 3.58616C70.2307 2.48337 69.3291 1.56772 68.2328 0.93649C67.1377 0.30401 65.889 -0.019091 64.6228 0.00086899C63.3554 0.020829 62.1179 0.383854 61.044 1.05002L32.8148 19.0077L3.41546 37.7039C2.40402 38.3763 1.5749 39.2857 1.00175 40.3511C0.428601 41.4177 0.128908 42.6065 0.128908 43.8153C0.128908 45.0242 0.428602 46.2143 1.00175 47.2796C1.5749 48.3463 2.40402 49.2557 3.41546 49.9268L32.6874 68.7814L60.8218 86.8964C61.8931 87.5675 63.1281 87.9355 64.393 87.9629C65.6592 87.9891 66.9079 87.6735 68.0068 87.0485C69.1056 86.4235 70.0122 85.5129 70.6303 84.4151C71.2471 83.3173 71.5531 82.0735 71.5131 80.816L71.608 44.0037Z",fill:"#7270FF"})):void 0}},8490:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{type:t}=e;return 1===t?r.createElement("svg",{width:"532",height:"88",fill:"none",viewBox:"0 0 532 88",className:"CustomLine1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9 61.5009C44.3333 28.0009 114.8 -23.5991 114 38.0009C113 115.001 262.5 62 325 44.5C375 30.5 478.167 50.0006 523.5 61.5009",stroke:"#FFF181",strokeWidth:"17",strokeLinecap:"round"})):2===t?r.createElement("svg",{width:"817",height:"70",fill:"none",viewBox:"0 0 817 70",className:"CustomLine2",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M10 56.5841C51.3333 34.5841 129.2 0.984119 110 42.5841C86 94.5841 240.5 -5.41662 269.5 12.0834C298.5 29.5834 233 70.5841 300 56.5841C367 42.5841 514.5 28.5841 604.5 42.5841C676.5 53.7841 769.5 47.2508 807 42.5841",stroke:"#FFF181",strokeWidth:"20",strokeLinecap:"round"})):3===t?r.createElement("svg",{width:"353",height:"143",fill:"none",viewBox:"0 0 353 143",className:"CustomLine3",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M41.1185 32.2996C56.4318 32.2996 71.2045 29.9718 86.2981 27.4562C114.138 22.8163 141.78 16.9313 169.619 12.1693C171.078 11.9199 211.414 4.69675 208.366 12.9261C204.093 24.4642 181.924 29.4642 172.268 32.8293C142.588 43.1723 116.387 57.4024 89.8549 74.5277C70.3219 87.1354 51.0934 100.156 32.4913 114.107C27.4857 117.861 11.1045 126.743 9.03123 133.481C8.21791 136.124 23.5585 132.155 23.864 132.043C44.0277 124.63 61.8773 111.228 81.0006 101.62C143.797 70.0706 213.545 49.674 282.833 38.6565C284.989 38.3137 311.216 31.2318 305.839 41.9863C298.956 55.7527 281.613 63.3523 272.995 76.4953C271.205 79.2248 257.379 100.281 264.897 103.664C277.377 109.279 291.473 94.3833 301.752 89.8146C307.745 87.1512 308.109 88.7708 308.109 94.2796C308.109 98.4451 322.25 92.8449 324.758 92.539C328.358 92.1 346.912 93.228 343.526 88.1497",stroke:"#FFF181",strokeWidth:"17",strokeLinecap:"round"})):4===t?r.createElement("svg",{width:"240",height:"95",fill:"none",viewBox:"0 0 240 95",className:"CustomLine4",xmlns:"http://www.w3.org/2000/svg"},r.createElement("mask",{id:"mask0_1021_1507",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"95"},r.createElement("rect",{x:"0.652344",y:"8.99805",width:"235.614",height:"85.2812",transform:"rotate(-2.18846 0.652344 8.99805)",fill:"#D9D9D9"})),r.createElement("g",{mask:"url(#mask0_1021_1507)"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M214.105 47.5061C211.818 52.7131 208.714 58.3483 205.662 63.2536C202.769 67.9039 204.194 74.0189 208.844 76.9118C213.494 79.8047 219.609 78.3801 222.502 73.7298C225.903 68.2629 229.498 61.7773 232.263 55.4819C234.856 49.5782 237.367 42.4379 237.261 36.1829C237.206 32.9296 236.415 28.4353 232.954 24.8285C229.297 21.018 224.486 20.0638 220.41 20.2605C213.072 20.6145 203.877 24.8297 192.918 31.6007C188.575 34.2846 184.333 36.9308 180.203 39.5069C171.17 45.1411 162.675 50.4399 154.835 55.0641C143.271 61.8846 134.13 66.6227 127.731 68.6344C126.759 68.9401 125.925 69.1576 125.22 69.3059C125.27 68.5421 125.382 67.5609 125.601 66.3247C126.284 62.477 127.826 57.1706 130.546 50.0871C133.508 42.3757 135.46 35.7828 136.336 30.2399C137.176 24.9297 137.248 19.2946 135.006 14.4187C132.37 8.6867 127.381 5.72223 122.092 4.98047C117.477 4.33308 112.747 5.34276 108.744 6.62127C100.6 9.22229 91.0371 14.4447 82.0254 19.7852C77.4182 22.5154 72.7456 25.4059 68.2602 28.1828L67.9763 28.3586C63.5604 31.0925 59.343 33.7036 55.3983 36.0421C47.8859 40.4955 40.476 43.4927 34.1478 45.1042C29.1024 46.3892 25.3215 46.6494 22.9063 46.4559C23.9556 44.5688 26.0981 41.5404 30.351 37.303C34.2307 33.4374 34.2421 27.1587 30.3766 23.2791C26.5111 19.3994 20.2324 19.3879 16.3527 23.2534C8.74346 30.835 3.1388 38.6835 2.25651 46.5026C1.7592 50.9099 2.77641 55.4075 5.79335 59.1006C8.62755 62.5701 12.4591 64.3917 15.9383 65.323C22.7128 67.1365 30.9979 66.3723 39.0423 64.3237C47.3575 62.2061 56.5135 58.4368 65.5119 53.1024C69.6233 50.6651 73.9822 47.9664 78.3354 45.2713L78.7001 45.0455C83.208 42.2546 87.7206 39.464 92.1364 36.8471C101.171 31.4933 109.006 27.3573 114.777 25.514C115.627 25.2427 116.369 25.0424 117.008 24.9002C116.968 25.5043 116.889 26.2451 116.747 27.1419C116.173 30.7733 114.741 35.9251 112.032 42.9759C109.083 50.6547 107.065 57.2726 106.073 62.8581C105.125 68.2006 104.877 73.8434 106.801 78.7791C109.09 84.6534 113.886 88.1294 119.535 89.1042C124.347 89.9344 129.359 88.9124 133.679 87.5543C142.493 84.7834 153.398 78.9373 164.911 72.1469C172.968 67.3945 181.81 61.8797 190.959 56.1732C195.04 53.6276 199.182 51.0438 203.344 48.4725C208.549 45.2564 212.639 43.1124 215.782 41.7758C215.995 41.6851 216.202 41.5991 216.402 41.5176C215.875 43.1834 215.124 45.1854 214.105 47.5061ZM217.419 36.326C217.419 36.3267 217.42 36.3449 217.425 36.3785C217.423 36.3422 217.42 36.3254 217.419 36.326ZM20.514 45.9737C20.5135 45.9738 20.5204 45.9778 20.5357 45.9851C20.5221 45.9772 20.5146 45.9736 20.514 45.9737Z",fill:"#FFF181"}))):5===t?r.createElement("svg",{width:"234",height:"63",fill:"none",viewBox:"0 0 234 63",className:"CustomLine5",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M194.355 54.0948C182.576 52.5438 171.07 52.1332 159.306 51.7778C137.607 51.1221 115.983 51.0671 94.2774 50.4684C93.1401 50.4371 61.6704 49.7205 64.5202 46.191C68.5158 41.2425 85.8745 41.1558 93.5088 40.5643C116.973 38.7465 138.001 34.7633 159.461 29.4634C175.26 25.5616 190.849 21.4365 206.015 16.8136C210.096 15.5697 223.241 13.0866 225.25 10.154C226.038 9.00355 213.994 9.30086 213.752 9.3223C197.787 10.7375 183.235 15.18 167.935 17.7242C117.696 26.0787 62.7932 28.5272 8.82149 26.648",stroke:"#FFF181",strokeWidth:"17",strokeLinecap:"round"})):6===t?r.createElement("svg",{width:"450",height:"271",fill:"none",viewBox:"0 0 450 271",className:"CustomLine6",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M14.261 0.864244C-0.619982 13.7659 -1.46261 38.8771 2.16611 56.8758C5.40974 73.2247 14.5654 92.8579 33.3552 96.5286C43.9899 98.5593 54.2012 94.3359 63.9289 90.8247C76.2184 86.2608 88.5489 81.8388 100.922 77.5535C113.294 73.2708 125.753 69.0623 138.3 64.9313C149.167 61.3945 161.338 57.1049 173.066 60.1393C194.825 65.7665 196.769 90.8917 195.5 108.323C194.327 127.709 193.77 147.5 209.51 162.429C223.227 175.357 243.018 180.779 261.313 183.77C286.47 187.551 311.863 189.267 337.219 188.908C351.57 189.091 366.321 189.002 380.33 192.986C391.679 196.283 402.087 202.17 410.656 210.13C428.035 226.139 438.096 248.303 444.907 269.939C445.498 271.725 447.927 265.967 447.988 265.751C449.15 263.068 449.507 260.111 449.021 257.207C443.812 238.658 434.912 221.17 422.822 205.726C416.453 197.869 408.559 191.26 399.593 186.287C390.627 181.311 380.767 178.065 370.586 176.736C358.524 175.473 346.405 175.012 334.318 175.358C321.905 175.333 309.489 174.885 297.067 173.892C276.599 172.296 255.294 170.229 235.973 162.705C218.474 155.886 203.194 143.634 200.171 124.916C197.151 106.202 203.809 86.5846 197.259 67.6106C194.927 59.81 189.569 53.1032 182.302 48.8885C172.486 43.8088 161.131 45.7806 151.15 48.6024C127.872 55.1276 105.056 63.5932 82.3888 71.6791C70.7649 75.8899 58.3772 82.2391 45.7742 83.3188C40.5994 83.738 35.3682 82.8633 30.5823 80.7862C25.7964 78.7091 21.6183 75.4948 18.4496 71.4559C12.2196 63.3945 8.13139 54.0236 6.55023 44.1834C4.60235 33.7188 3.16837 21.4306 11.9537 13.7951C13.6828 11.5072 14.6773 8.77402 14.8193 5.91989C14.9604 5.41905 15.4035 -0.319278 14.1312 0.750016L14.261 0.864244Z",fill:"#2A292D"})):void 0}},916:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{color:t}=e;return r.createElement("svg",{width:"120",height:"120",fill:"none",viewBox:"0 0 120 120",className:function(){let e="DotedCircle";return"green"===t&&(e+="Green"),"yellow"===t&&(e+="Yellow"),"grey"===t&&(e+="Grey"),e}(),xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M59.7443 0.000492287C47.8771 0.0512713 36.292 3.61942 26.454 10.2541C16.6148 16.8888 8.96494 26.2929 4.47038 37.2747C-0.0241744 48.2579 -1.16138 60.3272 1.20295 71.9555C3.56727 83.5852 9.32714 94.2512 17.7544 102.606C26.1817 110.962 36.897 116.631 48.5449 118.896C60.194 121.162 72.2522 119.923 83.1966 115.334C94.141 110.747 103.479 103.017 110.03 93.1217C116.581 83.2272 120.05 71.6125 119.999 59.745C119.928 43.8327 113.541 28.6002 102.242 17.3966C90.9426 6.19305 75.6564 -0.0639103 59.7443 0.000492287ZM78.3386 60.0002C78.9164 52.6249 89.798 52.6781 90.3351 60.0002C90.1072 67.1613 78.0022 67.8325 78.3386 60.0002ZM54.2764 60.0943C54.8407 52.719 65.7223 52.7859 66.2471 60.0943C66.018 67.2554 53.9401 67.9935 54.2764 60.0943ZM30.1872 60.2021C30.7515 52.8267 41.6478 52.88 42.185 60.2021C41.9571 67.3631 29.852 67.9935 30.1872 60.2021Z",fill:"green"===t?"#3EF43E":"grey"===t?"#F9F6EA":"#FEE92F"}))}},9870:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{color:t="blue",rotateDeg:n=0}=e;let o="#7270FF";return"green"===t&&(o="#3EF43E"),"pink"===t&&(o="#F942A9"),r.createElement("svg",{width:"73",height:"63",fill:"none",viewBox:"0 0 73 63",className:`FourLines ${t}`,xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${n}deg)`}},r.createElement("path",{d:"M71 61L2 61",stroke:o,strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 41.334L2 41.334",stroke:o,strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 21.666L2 21.666",stroke:o,strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M71 2L2 1.99999",stroke:o,strokeWidth:"3",strokeLinecap:"square"}))}},6986:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"31",height:"39",fill:"none",viewBox:"0 0 31 39",className:"GreenCircle",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"19.5",cy:"19.5",r:"18.5",stroke:"#3EF43E",strokeWidth:"2"}))}},828:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"173",height:"99",fill:"none",viewBox:"0 0 173 99",className:"GreenTrapezoid",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1.5 20C1.5 9.78273 9.78273 1.5 20 1.5H153C163.217 1.5 171.5 9.78273 171.5 20V78.1909C171.5 89.0387 162.209 97.5588 151.402 96.6217L18.402 85.0899C8.83997 84.2608 1.5 76.2569 1.5 66.6591V20Z",stroke:"#3EF43E",strokeWidth:"3"}))}},7983:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{type:t}=e;return r.createElement("svg",{width:"177",height:"119",fill:"none",viewBox:"0 0 177 119",className:`Group ${t}`,xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M135.586 28.7228C135.586 23.3383 131.322 18.9205 125.941 18.7291L10.3548 14.6183C4.69621 14.417 -0.000595093 18.9498 -0.000595093 24.612V83.5486C-0.000595093 89.3343 4.89455 93.9127 10.6674 93.5262L126.254 85.7882C131.506 85.4366 135.586 81.0741 135.586 75.8105V28.7228Z",fill:"#FEE92F"}),r.createElement("path",{d:"M79.8555 69.3359C79.8555 65.4699 82.9895 62.3359 86.8555 62.3359H169C172.866 62.3359 176 65.4699 176 69.3359V109.343C176 113.448 172.484 116.671 168.395 116.317L86.2508 109.195C82.6328 108.881 79.8555 105.852 79.8555 102.221V69.3359Z",stroke:"#3EF43E",strokeWidth:"2"}),r.createElement("path",{d:"M45.4141 1L45.4141 27.5796",stroke:"#F942A9",strokeWidth:"2",strokeLinecap:"square"}),r.createElement("path",{d:"M37.6445 1L37.6445 27.5796",stroke:"#F942A9",strokeWidth:"2",strokeLinecap:"square"}),r.createElement("path",{d:"M29.875 1L29.875 27.5796",stroke:"#F942A9",strokeWidth:"2",strokeLinecap:"square"}),r.createElement("path",{d:"M22.1055 1L22.1055 27.5796",stroke:"#F942A9",strokeWidth:"2",strokeLinecap:"square"}))}},4935:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{onClick:t=(()=>null)}=e;return r.createElement("svg",{width:"35",height:"18",fill:"none",onClick:t,viewBox:"0 0 35 18",className:"MobileMenu",xmlns:"http://www.w3.org/2000/svg"},r.createElement("line",{x1:"35",y1:"1",x2:"14",y2:"1",stroke:"black",strokeWidth:"2"}),r.createElement("line",{x1:"35",y1:"9",x2:"6.99383e-08",y2:"9",stroke:"black",strokeWidth:"2"}),r.createElement("line",{x1:"35",y1:"17",x2:"8.74228e-08",y2:"17",stroke:"black",strokeWidth:"2"}))}},5079:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"70",height:"70",fill:"none",viewBox:"0 0 70 70",className:"PinkCircle",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"35",cy:"35",r:"33",stroke:"#F942A9",strokeWidth:"4"}))}},6702:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"45",height:"50",fill:"none",viewBox:"0 0 45 50",className:"PinkLines",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M43.0469 1.64453L43.0469 48.4967",stroke:"#F942A9",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M29.3516 1.64453L29.3516 48.4967",stroke:"#F942A9",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M15.6562 1.64453L15.6562 48.4967",stroke:"#F942A9",strokeWidth:"3",strokeLinecap:"square"}),r.createElement("path",{d:"M1.96094 1.64453L1.96094 48.4967",stroke:"#F942A9",strokeWidth:"3",strokeLinecap:"square"}))}},2689:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"124",fill:"none",height:"144",viewBox:"0 0 124 144",className:"PinkTriangle",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.172946 71.9648L0.00849966 132.225C-0.0736995 134.284 0.44114 136.326 1.50111 138.129C2.5589 139.935 4.1207 141.434 6.01997 142.467C7.91708 143.502 10.0803 144.031 12.2738 143.999C14.4694 143.966 16.6131 143.372 18.4735 142.281L67.3765 112.884L118.307 82.2778C120.059 81.1771 121.495 79.6883 122.488 77.9443C123.481 76.1982 124 74.2521 124 72.2732C124 70.2943 123.481 68.3461 122.488 66.602C121.495 64.856 120.059 63.3672 118.307 62.2685L67.5972 31.403L18.8585 1.74848C17.0025 0.649791 14.8631 0.047389 12.6718 0.00246706C10.4783 -0.0404255 8.31512 0.476252 6.41151 1.49938C4.50791 2.52252 2.93748 4.0133 1.8667 5.8104C0.798086 7.60752 0.268103 9.6436 0.337324 11.7021L0.172946 71.9648Z",fill:"#F942A9"}))}},1979:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(e){const{color:t="black"}=e;let n="#000";return"pink"===t&&(n="#F942A9"),"green"===t&&(n="#3EF43E"),r.createElement("svg",{width:"53",height:"53",fill:"none",viewBox:"0 0 53 53",className:"TelegramLogo",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M26.5493 0C42.1428 0.187681 53.0656 12.7425 52.9997 26.5881C52.9305 40.8287 41.8694 53.0115 26.429 53C11.8385 52.9868 0 41.5646 0 26.4564C0 12.1564 11.2176 0.164632 26.5493 0ZM34.4218 20.1773L34.5486 20.4226C34.3691 20.6136 34.2011 20.8177 34.0084 20.9955C30.3258 24.3622 26.6514 27.7454 22.944 31.0809C22.3412 31.6242 21.9773 32.1642 21.9394 33.0071C21.8537 34.8888 21.6676 36.7673 21.5095 38.8087C23.5254 37.9855 24.5202 36.1746 26.121 35.0584C26.3105 35.1884 26.5163 35.3235 26.714 35.4683C28.5866 36.8545 30.4493 38.2539 32.3318 39.6286C33.8058 40.7036 34.6853 40.3793 35.1086 38.6408C35.1284 38.5601 35.158 38.4762 35.1745 38.4037C35.7235 35.8344 36.267 33.265 36.805 30.6956C37.6834 26.5744 38.5618 22.4536 39.4402 18.3334C39.6048 17.5959 39.6987 16.8419 39.0366 16.2722C38.4223 15.7438 37.8014 16.0763 37.1854 16.315C30.2319 18.9963 23.2811 21.6798 16.3331 24.3655C14.724 24.9862 13.1083 25.5871 11.5272 26.2736C11.1863 26.4218 10.7828 26.9025 10.7893 27.2236C10.7893 27.487 11.323 27.859 11.6869 27.9809C13.4772 28.5735 15.3103 29.0362 17.0857 29.6733C18.0179 30.0025 18.6948 29.828 19.4903 29.3193C24.1019 26.3675 28.7546 23.4634 33.4007 20.5576C33.7004 20.3617 34.0792 20.2975 34.4218 20.1773Z",fill:n}))}},3749:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"300",height:"347",fill:"none",viewBox:"0 0 300 347",className:"TwoCircles",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M96.994 207.991L96.9947 207.999L96.9951 208.008C97.1959 212.685 95.5346 216.143 92.8805 218.396C90.2407 220.638 86.6641 221.652 83.0787 221.552C75.9317 221.353 68.4848 216.689 68.2097 208.045L68.2088 208.019L68.2107 207.993C69.5003 190.416 95.6075 190.293 96.994 207.991ZM216.39 93.2235L216.669 92.809L216.39 93.2235C193.685 77.9117 166.949 69.6769 139.561 69.5597C102.839 69.4111 67.5604 83.8512 41.4836 109.707C15.4067 135.563 0.666534 170.717 0.501617 207.441C0.38504 234.829 8.392 261.634 23.5104 284.469C38.6287 307.307 60.1789 325.145 85.4368 335.732C110.695 346.322 138.523 349.18 165.408 343.953C192.289 338.725 217.018 325.642 236.467 306.358L236.819 306.713L236.467 306.358C255.916 287.076 269.209 262.46 274.665 235.621L275.155 235.72L274.665 235.621C280.122 208.784 277.497 180.93 267.124 155.583C256.752 130.238 239.097 108.535 216.39 93.2235ZM152.726 208.209L152.727 208.218L152.727 208.226C152.928 212.94 151.272 216.417 148.624 218.679C145.989 220.929 142.419 221.938 138.84 221.828C131.707 221.609 124.278 216.904 124.002 208.264L124.001 208.238L124.003 208.212C125.262 190.672 151.372 190.504 152.726 208.209ZM208.521 208.459L208.522 208.467L208.522 208.476C208.722 213.13 207.06 216.575 204.406 218.824C201.766 221.061 198.189 222.078 194.604 221.984C187.457 221.797 180.009 217.158 179.734 208.513L179.733 208.487L179.735 208.461C181.024 190.891 207.166 190.753 208.521 208.459Z",fill:"#4EFA4E",stroke:"#3EF43E"}),r.createElement("circle",{cx:"74.1744",cy:"74.1744",r:"74.1744",transform:"matrix(-1 0 0 1 299.254 0)",fill:"#FEF42F"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M225.139 148.576C184.206 148.576 151.024 115.394 151.024 74.4617C151.024 73.0039 151.066 71.5561 151.149 70.1191C174.439 72.202 196.893 80.143 216.383 93.287C234.296 105.366 249.072 121.412 259.621 140.083C249.321 145.507 237.588 148.576 225.139 148.576Z",fill:"#F942A9"}))}},7715:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7294);t.default=function(){return r.createElement("svg",{width:"239",height:"140",fill:"none",viewBox:"0 0 239 140",className:"YellowTrapezoid",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M239 27.8013C239 17.0323 230.473 8.19674 219.711 7.81398L20.7109 0.736579C9.39363 0.334083 0 9.39955 0 20.7239V119.616C0 131.188 9.79028 140.345 21.3359 139.572L220.336 126.249C230.84 125.546 239 116.821 239 106.294V27.8013Z",fill:"#FEE92F"}))}},3555:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenWidth=t.GenerateEvent=t.getDocument=void 0,t.getDocument=function(e){"undefined"!=typeof document&&e()},t.GenerateEvent=function(){const e=new Event("open_popup");document.dispatchEvent(e)},t.getScreenWidth=function(){let e,t;return e=document.getElementById("root").getBoundingClientRect(),t=document.getElementById("root").clientWidth,t}},5928:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(3555),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;(()=>{"use strict";const e=n(7294),t=n(745),r=n(8360);t.createRoot(document.getElementById("root")).render(e.createElement(r.default,null))})()})();
//# sourceMappingURL=bundle.b1ffa194c22e64e45288.js.map