module.exports=function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e){n.exports=require("react")},function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a);t(2);e.default=function(){return r.a.createElement("div",{className:"x-wing-pixel"},r.a.createElement("div",{className:"rotate"},r.a.createElement("div",{className:"x-wing"},r.a.createElement("div",{className:"wing"},r.a.createElement("div",{className:"wing-one "}),r.a.createElement("div",{className:"wing-two "}),r.a.createElement("div",{className:"wing-three "}),r.a.createElement("div",{className:"wing-four "})),r.a.createElement("div",{className:"head test"},r.a.createElement("div",{className:"head-zero "}),r.a.createElement("div",{className:"head-one "}),r.a.createElement("div",{className:"head-two "}),r.a.createElement("div",{className:"head-three "}),r.a.createElement("div",{className:"head-four "})),r.a.createElement("div",{className:"tail"},r.a.createElement("div",{className:"tail-one "}),r.a.createElement("div",{className:"tail-two "}),r.a.createElement("div",{className:"tail-three "}),r.a.createElement("div",{className:"tail-four "}),r.a.createElement("div",{className:"tail-five "})),r.a.createElement("div",{className:"side-thruster left-thruster"},r.a.createElement("div",{className:"st-one "}),r.a.createElement("div",{className:"st-separator"}),r.a.createElement("div",{className:"st-two "}),r.a.createElement("div",{className:"st-three "})),r.a.createElement("div",{className:"side-thruster right-thruster"},r.a.createElement("div",{className:"st-one "}),r.a.createElement("div",{className:"st-separator"}),r.a.createElement("div",{className:"st-two "}),r.a.createElement("div",{className:"st-three "})),r.a.createElement("div",{className:"cannon left-cannon "},r.a.createElement("div",{className:"can-one can-top-left"}),r.a.createElement("div",{className:"can-blank "}),r.a.createElement("div",{className:"can-blank  "}),r.a.createElement("div",{className:"can-two"}),r.a.createElement("div",{className:"can-blank  "}),r.a.createElement("div",{className:"can-two"}),r.a.createElement("div",{className:"can-blank "}),r.a.createElement("div",{className:"can-two"})),r.a.createElement("div",{className:"cannon right-cannon "},r.a.createElement("div",{className:"can-one can-top-right"}),r.a.createElement("div",{className:"can-blank "}),r.a.createElement("div",{className:"can-blank  "}),r.a.createElement("div",{className:"can-two"}),r.a.createElement("div",{className:"can-blank  "}),r.a.createElement("div",{className:"can-two"}),r.a.createElement("div",{className:"can-blank "}),r.a.createElement("div",{className:"can-two"})),r.a.createElement("div",{className:"wing-decor wd-left "},r.a.createElement("div",{className:"wd-one"}),r.a.createElement("div",{className:"wd-two"}),r.a.createElement("div",{className:"wd-three"}),r.a.createElement("div",{className:"wd-four"}),r.a.createElement("div",{className:"wd-five"})),r.a.createElement("div",{className:"wing-decor wd-right flip-horizontal "},r.a.createElement("div",{className:"wd-one"}),r.a.createElement("div",{className:"wd-two"}),r.a.createElement("div",{className:"wd-three"}),r.a.createElement("div",{className:"wd-four"}),r.a.createElement("div",{className:"wd-five"})),r.a.createElement("div",{className:"side-stripes"},r.a.createElement("div",{className:"stripes  left-stripes"},r.a.createElement("div",{className:"stripes-big"}),r.a.createElement("div",{className:"stripes-medium"}),r.a.createElement("div",{className:"stripes-small"})),r.a.createElement("div",{className:"stripes right-stripes"},r.a.createElement("div",{className:"stripes-big"}),r.a.createElement("div",{className:"stripes-medium"}),r.a.createElement("div",{className:"stripes-small"}))),r.a.createElement("div",{className:"body-art  "},r.a.createElement("div",{className:"ba-blank-one"}),r.a.createElement("div",{className:"ba-one"}),r.a.createElement("div",{className:"ba-blank-two"}),r.a.createElement("div",{className:"ba-two"}),r.a.createElement("div",{className:"ba-blank-three"}),r.a.createElement("div",{className:"ba-three"}),r.a.createElement("div",{className:"ba-blank-four"}),r.a.createElement("div",{className:"ba-four"})))))}},function(n,e,t){var a=t(3),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function s(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},a=[],r=0;r<n.length;r++){var i=n[r],l=e.base?i[0]+e.base:i[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var m=s(c),g={css:i[1],media:i[2],sourceMap:i[3]};-1!==m?(o[m].references++,o[m].updater(g)):o.push({identifier:c,updater:b(g,e),references:1}),a.push(c)}return a}function d(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,m=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function g(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function p(n,e,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var f=null,h=0;function b(n,e){var t,a,r;if(e.singleton){var i=h++;t=f||(f=d(e)),a=g.bind(null,t,i,!1),r=g.bind(null,t,i,!0)}else t=d(e),a=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=s(t[a]);o[r].references--}for(var i=l(n,e),d=0;d<t.length;d++){var c=s(t[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=i}}}},function(n,e,t){(e=t(5)(!1)).push([n.i,".test {\n  border: 1px solid red;\n}\n\n.rotate {\n  width: inherit;\n  height: inherit;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.x-wing-pixel {\n  width: 1200px;\n  height: 1200px;\n  background: transparent;\n  -webkit-animation: goRight 5s infinite;\n          animation: goRight 5s infinite;\n}\n\n.x-wing {\n  width: inherit;\n  height: inherit;\n  position: relative;\n  -webkit-animation: shake 1s infinite;\n          animation: shake 1s infinite;\n}\n\n.wing {\n  width: 93.33%;\n  height: 26.67%;\n  background-color: rgba(128, 128, 0, 0);\n  right: 3.33%;\n  left: 3.33%;\n  top: 16.667%;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.wing .wing-one {\n  width: 50%;\n  height: 12.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.wing .wing-two {\n  width: 57.143%;\n  height: 12.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.wing .wing-three {\n  width: 92.857%;\n  height: 12.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.wing .wing-four {\n  width: 100%;\n  height: 62.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.head {\n  width: 33.333%;\n  height: 56.667%;\n  background-color: rgba(128, 128, 0, 0);\n  bottom: 3.33%;\n  left: 33.333%;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.head .head-zero {\n  width: 100%;\n  height: 12.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.head .head-one {\n  width: 80%;\n  height: 56.25%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.head .head-two {\n  width: 60%;\n  height: 25%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.head .head-three {\n  width: 50%;\n  height: 12.5%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.head .head-four {\n  width: 20%;\n  height: 6.25%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.side-thruster {\n  width: 13.333%;\n  height: 36.667%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  top: 3.333%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: end;\n  margin: 0;\n  padding: 0;\n}\n\n.side-thruster .st-one {\n  width: 50%;\n  height: 9.091%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.side-thruster .st-separator {\n  width: 100%;\n  height: 36.364%;\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0;\n  padding: 0;\n}\n\n.side-thruster .st-two {\n  width: 100%;\n  height: 45.455%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.side-thruster .st-three {\n  width: 50%;\n  height: 9.091%;\n  background-color: #fe0000;\n  margin: 0;\n  padding: 0;\n}\n\n.left-thruster {\n  left: 30%;\n}\n\n.right-thruster {\n  right: 30%;\n}\n\n.cannon {\n  width: 6.667%;\n  height: 53.333%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  top: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0;\n}\n\n.cannon .can-one {\n  width: 50%;\n  height: 6.25%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.cannon .can-top-right {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.cannon .can-top-left {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n\n.cannon .can-two {\n  width: 100%;\n  height: 6.25%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.cannon .can-blank {\n  width: 100%;\n  height: 18.75%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.left-cannon {\n  left: 6.667%;\n}\n\n.right-cannon {\n  right: 6.667%;\n}\n\n.wing-decor {\n  width: 20%;\n  height: 20%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  top: 23.333%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n}\n\n.wing-decor .wd-one {\n  width: 16.667%;\n  height: 83.333%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.wing-decor .wd-two {\n  width: 16.667%;\n  height: 33.333%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.wing-decor .wd-three {\n  width: 16.667%;\n  height: 100%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.wing-decor .wd-four {\n  width: 33.333%;\n  height: 66.667%;\n  background-color: #fe0000;\n  margin: 0;\n  padding: 0;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.wing-decor .wd-five {\n  width: 16.667%;\n  height: 16.667%;\n  background-color: #fe0000;\n  margin: 0;\n  padding: 0;\n  margin-top: 16.667%;\n}\n\n.wd-left {\n  left: 3.333%;\n}\n\n.wd-right {\n  right: 3.333%;\n}\n\n.flip-horizontal {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.tail {\n  width: 33.333%;\n  height: 13.333%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  right: 33.333%;\n  top: 6.666%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.tail .tail-one {\n  width: 20%;\n  height: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  margin-right: 10%;\n}\n\n.tail .tail-two {\n  width: 10%;\n  height: 75%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.tail .tail-three {\n  width: 20%;\n  height: 50%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.tail .tail-four {\n  width: 10%;\n  height: 75%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.tail .tail-five {\n  width: 20%;\n  height: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  margin-left: 10%;\n}\n\n.side-stripes {\n  width: 20%;\n  height: 50%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  left: 40%;\n  top: 43.333%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n}\n\n.side-stripes .stripes {\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.side-stripes .stripes .stripes-big {\n  width: 33.333%;\n  height: 53.333%;\n  background-color: #fe0000;\n}\n\n.side-stripes .stripes .stripes-medium {\n  margin-top: 268%;\n  width: 33.333%;\n  height: 26.667%;\n  background-color: #fe0000;\n}\n\n.side-stripes .stripes .stripes-small {\n  width: 33.333%;\n  height: 13.333%;\n  background-color: #fe0000;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.side-stripes .right-stripes {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.body-art {\n  width: 6.667%;\n  height: 80%;\n  background-color: rgba(128, 128, 0, 0);\n  position: absolute;\n  top: 13.333%;\n  left: 46.667%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-one {\n  width: 100%;\n  height: 33.333%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-two {\n  width: 100%;\n  height: 4.167%;\n  background-color: #fe0000;\n  margin: 0;\n  padding: 0;\n  margin-top: 8.333%;\n}\n\n.body-art .ba-three {\n  width: 100%;\n  height: 12.5%;\n  background-color: #5a5a5a;\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-four {\n  width: 100%;\n  height: 8.333%;\n  background-color: #fe0000;\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-blank-one {\n  width: 100%;\n  height: 4.167%;\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-blank-two {\n  width: 100%;\n  height: 8.333%;\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0;\n  padding: 0;\n  margin-top: 8.333%;\n}\n\n.body-art .ba-blank-three {\n  width: 100%;\n  height: 4.167%;\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0;\n  padding: 0;\n}\n\n.body-art .ba-blank-four {\n  width: 100%;\n  height: 29.167%;\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0;\n  padding: 0;\n}\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n@-webkit-keyframes goRight {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(110vw, 0);\n            transform: translate(110vw, 0);\n  }\n}\n\n@keyframes goRight {\n  from {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  to {\n    -webkit-transform: translate(110vw, 0);\n            transform: translate(110vw, 0);\n  }\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var o,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}}]);