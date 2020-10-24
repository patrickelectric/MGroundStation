// Edited from: https://unpkg.com/vue-flight-indicators@0.1.1/dist/vue-flight-indicators.umd.js
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("vue"));
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["vue-flight-indicators"] = factory(require("vue"));
    else
        root["vue-flight-indicators"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function (__WEBPACK_EXTERNAL_MODULE__8bbf__) {
    return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
                /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/
}
            /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
            /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
            /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
        /******/
})
/************************************************************************/
/******/({

/***/ "0e61":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/fi_circle.svg";

                /***/
}),

/***/ "20c6":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/horizon_ball.svg";

                /***/
}),

/***/ "23d5":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/altitude_pressure.svg";

                /***/
}),

/***/ "2f04":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/heading_mechanics.svg";

                /***/
}),

/***/ "30b2":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("94f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/
}),

/***/ "3a7e":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/fi_needle.svg";

                /***/
}),

/***/ "4e72":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/vertical_mechanics.svg";

                /***/
}),

/***/ "530c":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/heading_yaw.svg";

                /***/
}),

/***/ "6230":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/horizon_back.svg";

                /***/
}),

/***/ "6377":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/horizon_circle.svg";

                /***/
}),

/***/ "8bbf":
/***/ (function (module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

                /***/
}),

/***/ "8fe6":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/altitude_ticks.svg";

                /***/
}),

/***/ "94f7":
/***/ (function (module, exports, __webpack_require__) {

                // extracted by mini-css-extract-plugin

                /***/
}),

/***/ "9d25":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/fi_needle_small.svg";

                /***/
}),

/***/ "b922":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/speed_mechanics.svg";

                /***/
}),

/***/ "c144":
/***/ (function (module, exports, __webpack_require__) {

                module.exports = "https://raw.githubusercontent.com/uCibar/vue-flight-indicators/master/src/assets/img/horizon_mechanics.svg";

                /***/
}),

/***/ "f6fd":
/***/ (function (module, exports) {

                // document.currentScript polyfill by Adam Miller

                // MIT license

                (function (document) {
                    var currentScript = "currentScript",
                        scripts = document.getElementsByTagName('script'); // Live NodeList collection

                    // If browser needs currentScript polyfill, add get currentScript() to the document object
                    if (!(currentScript in document)) {
                        Object.defineProperty(document, currentScript, {
                            get: function () {

                                // IE 6-10 supports script readyState
                                // IE 10+ support stack trace
                                try { throw new Error(); }
                                catch (err) {

                                    // Find the second match for the "at" string to get file src url from stack.
                                    // Specifically works with the format of stack traces in IE.
                                    var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

                                    // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                                    for (i in scripts) {
                                        if (scripts[i].src == res || scripts[i].readyState == "interactive") {
                                            return scripts[i];
                                        }
                                    }

                                    // If no match, return null
                                    return null;
                                }
                            }
                        });
                    }
                })(document);


                /***/
}),

/***/ "fae3":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);

                // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
                // This file is imported into lib/wc client bundles.

                if (typeof window !== 'undefined') {
                    if (true) {
                        __webpack_require__("f6fd")
                    }

                    var i
                    if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
                        __webpack_require__.p = i[1] // eslint-disable-line
                    }
                }

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

                // EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
                var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
                var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Airspeed.vue?vue&type=template&id=1dfa3ac7&scoped=true&
                var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('Wrapper', { attrs: { "size": _vm.size } }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("b922"), "alt": "" } }), _c('div', { staticClass: "speed indicator-box", style: (_vm.indicateAirspeed) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("3a7e"), "alt": "" } })]), _c('div', { staticClass: "mechanics indicator-box" }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("0e61"), "alt": "" } })])]) }
                var staticRenderFns = []


                // CONCATENATED MODULE: ./src/Airspeed.vue?vue&type=template&id=1dfa3ac7&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Wrapper.vue?vue&type=template&id=1bdcef0e&
                var Wrappervue_type_template_id_1bdcef0e_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: "flight-indicator", style: (_vm.indicateSize) }, [_vm._t("default")], 2) }
                var Wrappervue_type_template_id_1bdcef0e_staticRenderFns = []


// CONCATENATED MODULE: ./src/Wrapper.vue?vue&type=template&id=1bdcef0e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Wrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Wrappervue_type_script_lang_js_ = ({
                    name: 'Wrapper',
                    props: {
                        size: { type: Number }
                    },
                    computed: {
                        indicateSize: function () {
                            return { width: this.size + 'px', height: this.size + 'px' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Wrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Wrappervue_type_script_lang_js_ = (Wrappervue_type_script_lang_js_);
                // EXTERNAL MODULE: ./src/Wrapper.vue?vue&type=style&index=0&lang=css&
                var Wrappervue_type_style_index_0_lang_css_ = __webpack_require__("30b2");

                // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
                /* globals __VUE_SSR_CONTEXT__ */

                // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
                // This module is a runtime utility for cleaner component module output and will
                // be included in the final webpack user bundle.

                function normalizeComponent(
                    scriptExports,
                    render,
                    staticRenderFns,
                    functionalTemplate,
                    injectStyles,
                    scopeId,
                    moduleIdentifier, /* server only */
                    shadowMode /* vue-cli only */
                ) {
                    // Vue.extend constructor export interop
                    var options = typeof scriptExports === 'function'
                        ? scriptExports.options
                        : scriptExports

                    // render functions
                    if (render) {
                        options.render = render
                        options.staticRenderFns = staticRenderFns
                        options._compiled = true
                    }

                    // functional template
                    if (functionalTemplate) {
                        options.functional = true
                    }

                    // scopedId
                    if (scopeId) {
                        options._scopeId = 'data-v-' + scopeId
                    }

                    var hook
                    if (moduleIdentifier) { // server build
                        hook = function (context) {
                            // 2.3 injection
                            context =
                                context || // cached call
                                (this.$vnode && this.$vnode.ssrContext) || // stateful
                                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
                            // 2.2 with runInNewContext: true
                            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                                context = __VUE_SSR_CONTEXT__
                            }
                            // inject component styles
                            if (injectStyles) {
                                injectStyles.call(this, context)
                            }
                            // register component module identifier for async chunk inferrence
                            if (context && context._registeredComponents) {
                                context._registeredComponents.add(moduleIdentifier)
                            }
                        }
                        // used by ssr in case component is cached and beforeCreate
                        // never gets called
                        options._ssrRegister = hook
                    } else if (injectStyles) {
                        hook = shadowMode
                            ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
                            : injectStyles
                    }

                    if (hook) {
                        if (options.functional) {
                            // for template-only hot-reload because in that case the render fn doesn't
                            // go through the normalizer
                            options._injectStyles = hook
                            // register for functioal component in vue file
                            var originalRender = options.render
                            options.render = function renderWithStyleInjection(h, context) {
                                hook.call(context)
                                return originalRender(h, context)
                            }
                        } else {
                            // inject component registration as beforeCreate hook
                            var existing = options.beforeCreate
                            options.beforeCreate = existing
                                ? [].concat(existing, hook)
                                : [hook]
                        }
                    }

                    return {
                        exports: scriptExports,
                        options: options
                    }
                }

                // CONCATENATED MODULE: ./src/Wrapper.vue






                /* normalize component */

                var component = normalizeComponent(
                    src_Wrappervue_type_script_lang_js_,
                    Wrappervue_type_template_id_1bdcef0e_render,
                    Wrappervue_type_template_id_1bdcef0e_staticRenderFns,
                    false,
                    null,
                    null,
                    null

                )

/* harmony default export */ var Wrapper = (component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Airspeed.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                const AIRSPEED_BOUND = 160;

/* harmony default export */ var Airspeedvue_type_script_lang_js_ = ({
                    name: 'Airspeed',
                    components: {
                        Wrapper: Wrapper
                    },
                    props: {
                        size: {
                            type: Number,
                            default: 250
                        },
                        airspeed: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        indicateAirspeed: function () {
                            let airspeed = this.airspeed;
                            if (airspeed > AIRSPEED_BOUND) airspeed = AIRSPEED_BOUND;
                            else if (airspeed < 0) airspeed = 0;
                            return { transform: 'rotate(' + (90 + airspeed * 2) + 'deg)' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Airspeed.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Airspeedvue_type_script_lang_js_ = (Airspeedvue_type_script_lang_js_);
                // CONCATENATED MODULE: ./src/Airspeed.vue





                /* normalize component */

                var Airspeed_component = normalizeComponent(
                    src_Airspeedvue_type_script_lang_js_,
                    render,
                    staticRenderFns,
                    false,
                    null,
                    "1dfa3ac7",
                    null

                )

/* harmony default export */ var Airspeed = (Airspeed_component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Altimeter.vue?vue&type=template&id=e86cd328&scoped=true&
                var Altimetervue_type_template_id_e86cd328_scoped_true_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('Wrapper', { attrs: { "size": _vm.size } }, [_c('div', { staticClass: "pressure indicator-box", style: (_vm.indicatePressure) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("23d5"), "alt": "" } })]), _c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("8fe6"), "alt": "" } }), _c('div', { staticClass: "needleSmall indicator-box", style: (_vm.indicateAltitudeSmall) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("9d25"), "alt": "" } })]), _c('div', { staticClass: "needle indicator-box", style: (_vm.indicateAltitude) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("3a7e"), "alt": "" } })]), _c('div', { staticClass: "mechanics indicator-box" }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("0e61"), "alt": "" } })])]) }
                var Altimetervue_type_template_id_e86cd328_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Altimeter.vue?vue&type=template&id=e86cd328&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Altimeter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Altimetervue_type_script_lang_js_ = ({
                    name: 'Altimeter',
                    components: {
                        Wrapper: Wrapper
                    },
                    props: {
                        size: {
                            type: Number,
                            default: 250
                        },
                        altitude: {
                            type: Number,
                            default: 0
                        },
                        pressure: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        indicateAltitude: function () {
                            return { transform: 'rotate(' + (90 + this.altitude % 1000 * 360 / 1000) + 'deg)' };
                        },
                        indicateAltitudeSmall: function () {
                            return { transform: 'rotate(' + (this.altitude / 10000 * 360) + 'deg)' };
                        },
                        indicatePressure: function () {
                            return { transform: 'rotate(' + (2 * this.pressure - 1980) + 'deg)' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Altimeter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Altimetervue_type_script_lang_js_ = (Altimetervue_type_script_lang_js_);
                // CONCATENATED MODULE: ./src/Altimeter.vue





                /* normalize component */

                var Altimeter_component = normalizeComponent(
                    src_Altimetervue_type_script_lang_js_,
                    Altimetervue_type_template_id_e86cd328_scoped_true_render,
                    Altimetervue_type_template_id_e86cd328_scoped_true_staticRenderFns,
                    false,
                    null,
                    "e86cd328",
                    null

                )

/* harmony default export */ var Altimeter = (Altimeter_component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Attitude.vue?vue&type=template&id=3ceea1cc&scoped=true&
                var Attitudevue_type_template_id_3ceea1cc_scoped_true_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('Wrapper', { attrs: { "size": _vm.size } }, [_c('div', { staticClass: "roll indicator-box", style: (_vm.indicateRoll) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("6230"), "alt": "" } }), _c('div', { staticClass: "pitch indicator-box", style: (_vm.indicatePitch) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("20c6"), "alt": "" } })]), _c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("6377"), "alt": "" } })]), _c('div', { staticClass: "mechanics indicator-box" }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("c144"), "alt": "" } }), _c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("0e61"), "alt": "" } })])]) }
                var Attitudevue_type_template_id_3ceea1cc_scoped_true_staticRenderFns = []


                // CONCATENATED MODULE: ./src/Attitude.vue?vue&type=template&id=3ceea1cc&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Attitude.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                const PITCH_BOUND = 30

/* harmony default export */ var Attitudevue_type_script_lang_js_ = ({
                    name: 'Attitude',
                    components: {
                        Wrapper: Wrapper
                    },
                    props: {
                        size: {
                            type: Number,
                            default: 250
                        },
                        roll: {
                            type: Number,
                            default: 0
                        },
                        pitch: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        indicateRoll: function () {
                            return { transform: 'rotate(' + this.roll + 'deg)' };
                        },
                        indicatePitch: function () {
                            let pitch = this.pitch;
                            if (pitch > PITCH_BOUND) pitch = PITCH_BOUND;
                            else if (pitch < -PITCH_BOUND) pitch = -PITCH_BOUND;
                            return { top: (pitch * 0.68) + '%' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Attitude.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Attitudevue_type_script_lang_js_ = (Attitudevue_type_script_lang_js_);
                // CONCATENATED MODULE: ./src/Attitude.vue





                /* normalize component */

                var Attitude_component = normalizeComponent(
                    src_Attitudevue_type_script_lang_js_,
                    Attitudevue_type_template_id_3ceea1cc_scoped_true_render,
                    Attitudevue_type_template_id_3ceea1cc_scoped_true_staticRenderFns,
                    false,
                    null,
                    "3ceea1cc",
                    null

                )

/* harmony default export */ var Attitude = (Attitude_component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Heading.vue?vue&type=template&id=73f560fa&scoped=true&
                var Headingvue_type_template_id_73f560fa_scoped_true_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('Wrapper', { attrs: { "size": _vm.size } }, [_c('div', { staticClass: "heading indicator-box", style: (_vm.indicateHeading) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("530c"), "alt": "" } })]), _c('div', { staticClass: "mechanics indicator-box" }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("2f04"), "alt": "" } }), _c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("0e61"), "alt": "" } })])]) }
                var Headingvue_type_template_id_73f560fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Heading.vue?vue&type=template&id=73f560fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Heading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headingvue_type_script_lang_js_ = ({
                    name: 'Heading',
                    components: {
                        Wrapper: Wrapper
                    },
                    props: {
                        size: {
                            type: Number,
                            default: 250
                        },
                        heading: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        indicateHeading: function () {
                            return { transform: 'rotate(' + this.heading + 'deg)' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Heading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Headingvue_type_script_lang_js_ = (Headingvue_type_script_lang_js_);
                // CONCATENATED MODULE: ./src/Heading.vue





                /* normalize component */

                var Heading_component = normalizeComponent(
                    src_Headingvue_type_script_lang_js_,
                    Headingvue_type_template_id_73f560fa_scoped_true_render,
                    Headingvue_type_template_id_73f560fa_scoped_true_staticRenderFns,
                    false,
                    null,
                    "73f560fa",
                    null

                )

/* harmony default export */ var Heading = (Heading_component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Variometer.vue?vue&type=template&id=3ae50489&scoped=true&
                var Variometervue_type_template_id_3ae50489_scoped_true_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('Wrapper', { attrs: { "size": _vm.size } }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("4e72"), "alt": "" } }), _c('div', { staticClass: "vario indicator-box", style: (_vm.indicateVario) }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("3a7e"), "alt": "" } })]), _c('div', { staticClass: "mechanics indicator-box" }, [_c('img', { staticClass: "indicator-box", attrs: { "src": __webpack_require__("0e61"), "alt": "" } })])]) }
                var Variometervue_type_template_id_3ae50489_scoped_true_staticRenderFns = []


                // CONCATENATED MODULE: ./src/Variometer.vue?vue&type=template&id=3ae50489&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Variometer.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                const VARIO_BOUND = 2

/* harmony default export */ var Variometervue_type_script_lang_js_ = ({
                    name: 'Variometer',
                    components: {
                        Wrapper: Wrapper
                    },
                    props: {
                        size: {
                            type: Number,
                            default: 250
                        },
                        vario: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        indicateVario: function () {
                            let vario = this.vario;
                            if (vario > VARIO_BOUND) vario = VARIO_BOUND;
                            else if (vario < -VARIO_BOUND) vario = -VARIO_BOUND;
                            return { transform: 'rotate(' + (vario * 90) + 'deg)' };
                        }
                    }
                });

// CONCATENATED MODULE: ./src/Variometer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Variometervue_type_script_lang_js_ = (Variometervue_type_script_lang_js_);
                // CONCATENATED MODULE: ./src/Variometer.vue





                /* normalize component */

                var Variometer_component = normalizeComponent(
                    src_Variometervue_type_script_lang_js_,
                    Variometervue_type_template_id_3ae50489_scoped_true_render,
                    Variometervue_type_template_id_3ae50489_scoped_true_staticRenderFns,
                    false,
                    null,
                    "3ae50489",
                    null

                )

/* harmony default export */ var Variometer = (Variometer_component.exports);
                // CONCATENATED MODULE: ./src/_index.js










                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Airspeed', Airspeed)
                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Altimeter', Altimeter)
                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Attitude', Attitude)
                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Heading', Heading)
                external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Variometer', Variometer)


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Airspeed */__webpack_require__.d(__webpack_exports__, "Airspeed", function () { return Airspeed; });
/* concated harmony reexport Altimeter */__webpack_require__.d(__webpack_exports__, "Altimeter", function () { return Altimeter; });
/* concated harmony reexport Attitude */__webpack_require__.d(__webpack_exports__, "Attitude", function () { return Attitude; });
/* concated harmony reexport Heading */__webpack_require__.d(__webpack_exports__, "Heading", function () { return Heading; });
/* concated harmony reexport Variometer */__webpack_require__.d(__webpack_exports__, "Variometer", function () { return Variometer; });




                /***/
})

        /******/
});
});
//# sourceMappingURL=vue-flight-indicators.umd.js.map
