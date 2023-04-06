"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search/[q]";
exports.ids = ["pages/api/search/[q]"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/search/[q].ts":
/*!*********************************!*\
  !*** ./pages/api/search/[q].ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _youtube_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youtube-api */ \"(api)/./src/services/youtubeApi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_youtube_api__WEBPACK_IMPORTED_MODULE_0__]);\n_youtube_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst handler = async (req, res)=>{\n    const { q  } = req.query;\n    const response = await _youtube_api__WEBPACK_IMPORTED_MODULE_0__.youtubeApi.get(\"/search\", {\n        params: {\n            q\n        }\n    });\n    const yVideoData = response.data;\n    console.log(yVideoData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoL1txXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQztBQUcxQyxNQUFNQyxVQUEyQixPQUFPQyxLQUFLQyxNQUFRO0lBQ2pELE1BQU0sRUFBRUMsRUFBQyxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFDdkIsTUFBTUMsV0FBVyxNQUFNTix3REFBYyxDQUF3QixXQUFXO1FBQ3BFUSxRQUFRO1lBQ0pKO1FBQ0o7SUFDSjtJQUNBLE1BQU1LLGFBQWFILFNBQVNJLElBQUk7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7QUFFaEI7QUFFQSxpRUFBZVIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdXR1YmUtYXBpLy4vcGFnZXMvYXBpL3NlYXJjaC9bcV0udHM/ZmNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHlvdXR1YmVBcGkgfSBmcm9tIFwiQHlvdXR1YmUtYXBpXCI7XHJcbmltcG9ydCB7IFlvdVR1YmVWaWRlbywgWW91dHViZVZpZGVvUmVxdWVzdCB9IGZyb20gXCJAeW91dHViZS1hcGkvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBxIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHlvdXR1YmVBcGkuZ2V0PFlvdXR1YmVWaWRlb1JlcXVlc3RbXT4oXCIvc2VhcmNoXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgcVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgeVZpZGVvRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyh5VmlkZW9EYXRhKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJ5b3V0dWJlQXBpIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInEiLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0IiwicGFyYW1zIiwieVZpZGVvRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search/[q].ts\n");

/***/ }),

/***/ "(api)/./src/services/youtubeApi.ts":
/*!************************************!*\
  !*** ./src/services/youtubeApi.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"youtubeApi\": () => (/* binding */ youtubeApi)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nconst { YOUTUBE_API_KEY  } = process.env;\nconst youtubeApi = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://www.googleapis.com/youtube/v3\",\n    params: {\n        part: \"snippet\",\n        key: YOUTUBE_API_KEY\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMveW91dHViZUFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ007QUFDaENDLDhDQUFNQTtBQUVOLE1BQU0sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHQyxRQUFRQyxHQUFHO0FBRWhDLE1BQU1DLGFBQWFMLG9EQUFZLENBQUM7SUFDbkNPLFNBQVM7SUFDVEMsUUFBUTtRQUNKQyxNQUFNO1FBQ05DLEtBQUtSO0lBQ1Q7QUFDSixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91dHViZS1hcGkvLi9zcmMvc2VydmljZXMveW91dHViZUFwaS50cz80NzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5jb25maWcoKTtcclxuXHJcbmNvbnN0IHsgWU9VVFVCRV9BUElfS0VZIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbmV4cG9ydCBjb25zdCB5b3V0dWJlQXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92M1wiLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgICAgcGFydDogXCJzbmlwcGV0XCIsXHJcbiAgICAgICAga2V5OiBZT1VUVUJFX0FQSV9LRVlcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbImF4aW9zIiwiY29uZmlnIiwiWU9VVFVCRV9BUElfS0VZIiwicHJvY2VzcyIsImVudiIsInlvdXR1YmVBcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicGFyYW1zIiwicGFydCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/youtubeApi.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search/[q].ts"));
module.exports = __webpack_exports__;

})();