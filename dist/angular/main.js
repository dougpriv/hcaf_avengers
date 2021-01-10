(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet { \n  background-color: #013856;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXQgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzg1Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simulator/simulator.component */ "./src/app/simulator/simulator.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var src_components_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/modal.component */ "./src/components/modal.component.ts");










var appRoutes = [
    { path: '', redirectTo: '/vote', pathMatch: 'full' },
    { path: 'vote', component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__["VoteComponent"] },
    { path: 'sim', component: _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_6__["SimulatorComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_6__["SimulatorComponent"],
                _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__["VoteComponent"],
                src_components_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/simulator/simulator.component.css":
/*!***************************************************!*\
  !*** ./src/app/simulator/simulator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Bangers';\n    src: url('bangers.woff2');\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  .bg-img { \n    background: url('hero_auto.png');\n    width: 800px;\n    height: 500px;\n    position: absolute;\n    top: -3%;\n    left: 30%;\n    margin: 0 auto;\n    z-index: -1;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  .wrap { \n      width:100%;\n      background-color: #013856;\n      margin:0;\n      padding:0;\n      margin: 22% 0 10% 0 !important;\n  }\n\n  .container {\n    width: 100%;\n    max-width: 1600px;\n    margin: 0px auto;\n  }\n\n  .panel { \n    max-width: 800px;\n    margin: 0 auto;\n    margin-top:10%;\n    border: 6px solid #000;\n    background: #001825;\n    padding: 50px;\n  }\n\n  .btn {\n    width: 100%;\n    height: 8vh !important;\n    margin: 0px;\n    font-size: 2.5rem;\n    font-family: 'Bangers', Impact, sans-serif;\n    color: #fff;\n    text-shadow: 2px 2px 0px #000;\n    box-shadow: 5px 5px 0px 0px #000;\n    border: 6px solid #000;\n    cursor: pointer;\n    margin-top: 25px;\n    position: relative;\n    left: 0px;\n    top: 0px;\n    transition: box-shadow 0.1s linear;\n    transition: top 0.1s linear;\n    transition: left 0.1s linear;\n  }\n\n  .btn:hover { \n    position: relative;\n    left: 1px;\n    top: 1px;\n    box-shadow: 4px 4px 0px 0px #000;\n    transition: box-shadow 0.1s linear;\n    transition: top 0.1s linear;\n    transition: left 0.1s linear;\n  }\n\n  .btn.green { \n    background-color: #009724;\n  }\n\n  .btn.red {\n    background-color: #d70f1c;\n  }\n\n  .btn.blue { \n    background-color: #007497; \n  }\n\n  .btn.secondary { \n      background-color: #585858;\n      width: 250px !important;\n      height: 6vh !important;\n      font-size: 1.75rem !important;\n  }\n\n  h1, h6 { \n    font-family: 'Bangers', Impact, sans-serif;\n    color: #FFF;\n    font-size: 4rem;\n    text-shadow: 2px 2px 0px #000;\n    text-align: center;\n    letter-spacing: 4px;\n  }\n\n  h6 { \n    font-size: 20px !important;\n  }\n\n  .voteCount { \n    font-size: 3rem;\n    font-family: 'Bangers', Impact, sans-serif;\n    color: #FFF;\n    text-shadow: 2px 2px 0px #000;\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  .modal-btn {\n    width: 100%;\n    height: 8vh !important;\n    margin: 0px;\n    font-size: 2rem;\n    font-family: 'Bangers', Impact, sans-serif;\n    background-color: #009724;\n    color: #fff;\n    text-shadow: 2px 2px 0px #000;\n    border: 6px solid #000;\n  }\n\n  #modal h1, \n  #modal h6 { \n    font-family: 'Bangers', Impact, sans-serif;\n    color: #FFF;\n    font-size: 3rem;\n    text-shadow: 2px 2px 0px #000;\n    text-align: center;\n    letter-spacing: 4px;\n  }\n\n  #modal h6 { \n    font-size: 2.25rem !important;\n  }\n\n  #modal { display:none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhdG9yL3NpbXVsYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0NBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7RUFFQTtNQUNJLFVBQVU7TUFDVix5QkFBeUI7TUFDekIsUUFBUTtNQUNSLFNBQVM7TUFDVCw4QkFBOEI7RUFDbEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtNQUNJLHlCQUF5QjtNQUN6Qix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLDZCQUE2QjtFQUNqQzs7RUFDQTtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUlBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixzQkFBc0I7RUFDeEI7O0VBRUE7O0lBRUUsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUEsU0FBUyxZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9zaW11bGF0b3Ivc2ltdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvYmFuZ2Vycy53b2ZmMicpO1xuICB9XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5iZy1pbWcgeyBcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2hlcm9fYXV0by5wbmcpO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zJTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgei1pbmRleDogLTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC53cmFwIHsgXG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzg1NjtcbiAgICAgIG1hcmdpbjowO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgbWFyZ2luOiAyMiUgMCAxMCUgMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuXG4gIC5wYW5lbCB7IFxuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDoxMCU7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAxODI1O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDh2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIEltcGFjdCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggIzAwMDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjFzIGxpbmVhcjtcbiAgfVxuICAuYnRuOmhvdmVyIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDFweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDBweCAwcHggIzAwMDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMXMgbGluZWFyO1xuICB9XG4gIC5idG4uZ3JlZW4geyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NzI0O1xuICB9XG4gIC5idG4ucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcwZjFjO1xuICB9XG4gIC5idG4uYmx1ZSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0OTc7IFxuICB9XG4gIC5idG4uc2Vjb25kYXJ5IHsgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1ODU4O1xuICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDZ2aCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDEsIGg2IHsgXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgSW1wYWN0LCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgfVxuXG4gIGg2IHsgXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudm90ZUNvdW50IHsgXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIEltcGFjdCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG5cbiAgXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOHZoICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIEltcGFjdCwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NzI0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjMDAwO1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMDA7XG4gIH1cblxuICAjbW9kYWwgaDEsIFxuICAjbW9kYWwgaDYgeyBcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB9XG5cbiAgI21vZGFsIGg2IHsgXG4gICAgZm9udC1zaXplOiAyLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbW9kYWwgeyBkaXNwbGF5Om5vbmU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/simulator/simulator.component.html":
/*!****************************************************!*\
  !*** ./src/app/simulator/simulator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n\n</div>\n<div class=\"wrap\">\n  <div class=\"container\">\n    <div class=\"panel\">\n      <div class=\"panel-heading\">\n        <h1>Control Panel</h1>\n      </div>\n      <button type=\"text\" class=\"btn\" (click)=\"simulate()\"\n        [ngClass]=\"(startstop=='Start') ? 'green' : 'red'\">{{ startstop }}</button>\n      <button type=\"text\" class=\"btn blue\" (click)=\"clean()\">Clear</button>\n      <div style=\"width:100%;text-align:center;\">\n        <div class=\"voteCount\">{{ count }} votes simulated</div>\n        <button class=\"btn secondary\" (click)=\"openModal('modal')\">View Details</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<jw-modal id=\"modal\">\n  <h1>Control Panel Details</h1>\n  <div class=\"avengers\">\n    <div class=\"hero\" *ngFor=\"let hero of heroVotes\" style=\"display: inline-block;width: 25%;text-align: center;\">\n      <img [src]=\"hero.image\" style=\"width:200px;height:250px;\" />\n      <h1>{{ hero.short }}</h1>\n      <h6>{{ hero.votes }} Votes</h6>\n    </div>\n  </div>\n  <div class=\"voteCount\">{{ count }} votes simulated</div>\n  <div class=\"voteCount\" style=\"margin-top:5px;padding-top:5px;\">{{ total }} total votes</div>\n  <button type=\"text\" class=\"btn green\" (click)=\"closeModal('modal');\">Close</button>\n</jw-modal>"

/***/ }),

/***/ "./src/app/simulator/simulator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/simulator/simulator.component.ts ***!
  \**************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal */ "./src/services/modal.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SimulatorComponent = /** @class */ (function () {
    function SimulatorComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.heroVotes = [];
        this.startstop = 'Start';
        this.loop = false;
        this.count = 0;
        var that = this;
        setInterval(function () {
            that.getVotes();
        }, 3000);
    }
    SimulatorComponent.prototype.simulate = function () {
        var that = this;
        if (this.startstop == 'Start') {
            var loop_1 = setInterval(function () {
                if (that.startstop == 'Start')
                    clearInterval(loop_1);
                else
                    that.makeRequest();
            }, 1000);
            this.startstop = "Stop";
        }
        else
            this.startstop = "Start";
    };
    SimulatorComponent.prototype.clean = function () {
        var _this = this;
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + '/cleanVotes')
            .subscribe(function (res) {
            alert('Votes Cleared from Database.');
            _this.count = 0;
        });
    };
    SimulatorComponent.prototype.makeRequest = function () {
        var _this = this;
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + '/votesim')
            .subscribe(function (res) {
            _this.count = _this.count + 1;
        });
    };
    SimulatorComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
        this.getVotes();
    };
    SimulatorComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    SimulatorComponent.prototype.getVotes = function () {
        var _this = this;
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + '/getVoteTotal')
            .subscribe(function (res) {
            _this.total = res['votes'];
        });
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + '/getVotes')
            .subscribe(function (res) {
            _this.heroVotes = res;
        });
    };
    SimulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'simulator',
            template: __webpack_require__(/*! ./simulator.component.html */ "./src/app/simulator/simulator.component.html"),
            styles: [__webpack_require__(/*! ./simulator.component.css */ "./src/app/simulator/simulator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_modal__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], SimulatorComponent);
    return SimulatorComponent;
}());



/***/ }),

/***/ "./src/app/vote/vote.component.css":
/*!*****************************************!*\
  !*** ./src/app/vote/vote.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Bangers';\n    src: url('bangers.woff2');\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html,\n  body {\n    font-family: 'Bangers', Impact, sans-serif;\n    text-transform: uppercase;\n    background-color: #013856;\n    margin: 0;\n  }\n\n  .wrap { \n      width:100%;\n    background-color: #013856;\n      margin:0;\n      padding:0;\n  }\n\n  .container {\n    width: 100%;\n    max-width: 1600px;\n    margin: 0px auto;\n  }\n\n  img.img-fluid {\n    max-width: 100%;\n    margin: 0;\n    border: 6px solid #000;\n    border-bottom: none;\n  }\n\n  .avengers {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    margin-top: -4px;\n    border: 3px solid #000;\n  }\n\n  .hero {\n    flex: 25%;\n    max-width: 25%;\n    padding: 30px;\n    height: auto;\n    background-color: #013856;\n    color: #fff;\n    text-shadow: 2px 2px 0px #000;\n    border: 3px solid #000;\n    text-align: center;\n    align-content: center;\n    justify-content: center;\n    transition: all, 0.5s ease-in-out;\n  }\n\n  /* .hero.winner{background-color: #009724; transition: all, 1s ease-in-out;} */\n\n  .hero.selected {\n    background-color: #16b4f1;\n  }\n\n  .hero img {\n    float: left;\n    margin-right: 30px;\n    max-width: 100%;\n  }\n\n  .hero .votes {\n    display: block;\n    font-size: 3rem;\n  }\n\n  .hero label {\n    display: block;\n    margin-top: 16%;\n    font-size: 1.5rem;\n  }\n\n  input.btn {\n    width: 100%;\n    height: 10vh !important;\n    margin: 0px;\n    font-size: 2rem;\n    font-family: 'Bangers', Impact, sans-serif;\n    background-color: #009724;\n    color: #fff;\n    text-shadow: 2px 2px 0px #000;\n    border: 6px solid #000;\n    border-top: none;\n  }\n\n  .hero-name, .votes { \n    font-family: 'Bangers', Impact, sans-serif;\n  }\n\n  input.btn.red,\n  input#submit:disabled {\n    cursor: default;\n    background-color: #d70f1c;\n  }\n\n  input.btn:hover {\n    cursor: pointer;\n  }\n\n  #admin .hero {\n    border-top: 6px solid #000;\n  }\n\n  #admin .hero:hover {\n    cursor: default;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsU0FBUztFQUNYOztFQUVBO01BQ0ksVUFBVTtJQUNaLHlCQUF5QjtNQUN2QixRQUFRO01BQ1IsU0FBUztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBR1gsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUNBQWlDO0VBQ25DOztFQUVBLDhFQUE4RTs7RUFDOUU7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBOztJQUVFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZvdGUvdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJztcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2JhbmdlcnMud29mZjInKTtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzODU2O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC53cmFwIHsgXG4gICAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTM4NTY7XG4gICAgICBtYXJnaW46MDtcbiAgICAgIHBhZGRpbmc6MDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cblxuICBpbWcuaW1nLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5hdmVuZ2VycyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XG4gIH1cblxuICAuaGVybyB7XG4gICAgZmxleDogMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTM4NTY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICMwMDA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8qIC5oZXJvLndpbm5lcntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NzI0OyB0cmFuc2l0aW9uOiBhbGwsIDFzIGVhc2UtaW4tb3V0O30gKi9cbiAgLmhlcm8uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmI0ZjE7XG4gIH1cblxuICAuaGVybyBpbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaGVybyAudm90ZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC5oZXJvIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxNiU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBpbnB1dC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTcyNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggIzAwMDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAuaGVyby1uYW1lLCAudm90ZXMgeyBcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBpbnB1dC5idG4ucmVkLFxuICBpbnB1dCNzdWJtaXQ6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcwZjFjO1xuICB9XG5cbiAgaW5wdXQuYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAjYWRtaW4gLmhlcm8ge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjMDAwO1xuICB9XG5cbiAgI2FkbWluIC5oZXJvOmhvdmVyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/vote/vote.component.html":
/*!******************************************!*\
  !*** ./src/app/vote/vote.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"container\">\n    <img src=\"../assets/banner.jpg\" class=\"img-fluid\" />\n    <div class=\"avengers\">\n      <div class=\"hero\" *ngFor=\"let hero of allHeros\" (click)=\"clickEvent(hero)\"\n        [ngClass]=\"(!this.hasVoted && selectedHero == hero.short) ? 'selected' : ''\">\n        <img [src]=\"hero.image\" />\n        <label class=\"hero-name\">{{ hero.name }}</label>\n        <p class=\"votes\">{{ heroVotes[hero.short] }} Votes</p>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn\" id=\"submit\" (click)=\"castVote()\" [value]=\"votedText\" [disabled]=\"this.hasVoted\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var VoteComponent = /** @class */ (function () {
    function VoteComponent(http) {
        this.http = http;
        this.hasVoted = false;
        this.selectedHero = null;
        this.heroVotes = [];
        var that = this;
        this.getVotes();
        this.getVoteText();
        this.getVoteAmt();
        setInterval(function () {
            that.getVoteAmt();
        }, 5000);
    }
    VoteComponent.prototype.getVotes = function () {
        var _this = this;
        console.log('meepity meepity meep');
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend);
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + '/getVotes', {})
            .subscribe(function (res) {
            _this.allHeros = res;
        }, function (err) { console.log('err: ' + JSON.stringify(err)); });
    };
    VoteComponent.prototype.getVoteAmt = function () {
        var _this = this;
        console.log('meepity meepity moop');
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend);
        this.http.get('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + '/getVotes', {})
            .subscribe(function (res) {
            console.log(JSON.stringify(res));
            res.forEach(function (r) {
                console.log(r.short + ' has ' + r.votes);
                _this.heroVotes[r.short] = r.votes;
            });
            // this.allHeros = res;
        }, function (err) { console.log('err: ' + JSON.stringify(err)); });
    };
    VoteComponent.prototype.clickEvent = function (x) {
        var _this = this;
        if (localStorage.getItem('voted') !== 'true') {
            if (this.selectedHero == x.short) {
                this.selectedHero = null;
                this.votedText = 'Select a hero';
            }
            else {
                this.selectedHero = x.short;
                this.votedText = 'Vote for ' + this.allHeros.find(function (obj) { return obj.short === _this.selectedHero; }).name;
            }
        }
    };
    VoteComponent.prototype.castVote = function () {
        var _this = this;
        if (this.selectedHero == null)
            this.votedText = "Hey! Pick a Hero!";
        localStorage.setItem('voted', 'true');
        this.http.post('http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + '/castVote', { hero: this.selectedHero })
            .subscribe(function (res) {
            _this.getVotes();
            _this.getVoteText();
        }, function (err) { console.log('err: ' + JSON.stringify(err)); });
    };
    VoteComponent.prototype.getVoteText = function () {
        if (localStorage.getItem('voted') == 'true')
            this.hasVoted = true;
        if (this.hasVoted)
            this.votedText = 'Thanks for Voting!';
        else
            this.votedText = 'Select a Hero';
    };
    VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vote',
            template: __webpack_require__(/*! ./vote.component.html */ "./src/app/vote/vote.component.html"),
            styles: [__webpack_require__(/*! ./vote.component.css */ "./src/app/vote/vote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VoteComponent);
    return VoteComponent;
}());



/***/ }),

/***/ "./src/components/modal.component.css":
/*!********************************************!*\
  !*** ./src/components/modal.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n  max-width: 1000px;\n  margin: 0 auto;\n  margin-top: 3%;\n  border: 6px solid #000;\n  background: #001825;\n  padding: 50px;\n  height: 700px;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7Z0NBQzhCO0FBQ2hDO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjtBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AscURBQXFEO0VBQ3JELGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrREFBK0Q7RUFDL0QsWUFBWTtBQUNkO0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6ICMwMDE4MjU7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGhlaWdodDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/components/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/modal */ "./src/services/modal.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when component is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>",
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/components/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    backend: 'ec2-52-90-8-157.compute-1.amazonaws.com:3000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/modal.ts":
/*!*******************************!*\
  !*** ./src/services/modal.ts ***!
  \*******************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/avengers-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map