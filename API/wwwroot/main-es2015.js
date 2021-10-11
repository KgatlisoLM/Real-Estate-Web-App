(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_estate_details_estate_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/estate-details/estate-details.component */ "./src/app/home/estate-details/estate-details.component.ts");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: ':id', component: _home_estate_details_estate_details_component__WEBPACK_IMPORTED_MODULE_3__["EstateDetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/nav-bar/nav-bar.component */ "./src/app/core/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'RealEstate';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptors/loading,interceptor */ "./src/app/core/interceptors/loading,interceptor.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_7__["LoadingInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_7__["LoadingInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/core/nav-bar/nav-bar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/loading,interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading,interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/busy.service */ "./src/app/core/services/busy.service.ts");




class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.busyService.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 45, vars: 4, consts: [[1, "site-wrap"], [1, "border-bottom", "bg-white", "top-bar"], [1, "container"], [1, "row", "align-items-center"], [1, "col-6", "col-md-6"], [1, "mb-0"], ["href", "#", 1, "mr-3"], [1, "text-dark", "fa", "fa-phone"], [1, "d-none", "d-md-inline-block", "ml-2", "text-dark"], ["href", "#"], [1, "text-dark", "fa", "fa-envelope"], [1, "col-6", "col-md-6", "text-right"], [1, "text-dark", "fa", "fa-facebook"], [1, "text-dark", "fa", "fa-twitter"], ["href", "#", 1, "mr-"], [1, "text-dark", "fa", "fa-linkedin"], [1, "site-navbar", "shadow-sm"], [1, "container", "py-1"], [1, "col-8", "col-md-8", "col-lg-4"], [1, ""], ["routerLink", "", 1, "h5", "text-uppercase", "text-dark"], [1, "fa", "fa-home"], [1, "col-4", "col-md-4", "col-lg-8"], ["role", "navigation", 1, "site-navigation", "text-right", "text-md-right"], [1, "d-inline-block", "d-lg-none", "ml-md-0", "mr-auto", "py-3"], ["href", "#", 1, "site-menu-toggle", "js-menu-toggle", "text-black"], [1, "icon-menu", "h3"], [1, "site-menu", "js-clone-nav", "d-none", "d-lg-block"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["href", "about.html"], ["href", "contact.html"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(011) 945 1224");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "info@domain.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " real estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nav", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@charset \"UTF-8\";\na[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.top-bar[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  border-color: #f2f2f2 !important;\n}\n.site-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.site-wrap[_ngcontent-%COMP%]:before {\n  transition: 0.3s all ease-in-out;\n  background: rgba(0, 0, 0, 0.6);\n  content: \"\";\n  position: absolute;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  visibility: hidden;\n}\n.offcanvas-menu[_ngcontent-%COMP%]   .site-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  overflow: hidden;\n}\n.offcanvas-menu[_ngcontent-%COMP%]   .site-wrap[_ngcontent-%COMP%]:before {\n  opacity: 1;\n  visibility: visible;\n}\n.site-navbar-top[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.top-bar[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.site-navbar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.site-navbar-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n.site-navbar-wrap[_ngcontent-%COMP%]   .site-navbar-top[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.site-navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  width: 100%;\n  border-bottom: #333538;\n  background: #fff;\n  position: relative;\n  z-index: 99;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 200;\n  color: #000;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-left: 0;\n  padding-left: 0;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: green;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  display: inline-block;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 5px;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  letter-spacing: 0.05em;\n  color: rgba(0, 0, 0, 0.6);\n  text-decoration: none !important;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: green;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%] {\n  position: relative;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 20px;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\uE313\";\n  font-size: 16px;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  font-family: \"icomoon\";\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  top: 100%;\n  position: absolute;\n  text-align: left;\n  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.25);\n  border-left: 1px solid #edf0f5;\n  border-right: 1px solid #edf0f5;\n  border-bottom: 1px solid #333538;\n  padding: 10px 0;\n  margin-top: 20px;\n  margin-left: 0px;\n  background: #fff;\n  border-top: 4px solid #f89d13;\n  transition: 0.2s 0s;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown.arrow-top[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown.arrow-top[_ngcontent-%COMP%]:before {\n  bottom: 100%;\n  left: 20%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown.arrow-top[_ngcontent-%COMP%]:before {\n  border-color: rgba(136, 183, 213, 0);\n  border-bottom-color: #fff;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: none;\n  letter-spacing: normal;\n  transition: 0s all;\n  color: #343a40;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  min-width: 200px;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  display: block;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #f89d13;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  content: \"\uE315\";\n  right: 20px;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  left: 100%;\n  top: 0;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]:active    > a[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]:focus    > a[_ngcontent-%COMP%] {\n  color: #f89d13;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:focus    > a[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:active    > a[_ngcontent-%COMP%] {\n  color: #f89d13;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:hover, .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:focus, .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n}\n.site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:hover    > .dropdown[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:focus    > .dropdown[_ngcontent-%COMP%], .site-navbar[_ngcontent-%COMP%]   .site-navigation[_ngcontent-%COMP%]   .site-menu[_ngcontent-%COMP%]   .has-children[_ngcontent-%COMP%]:active    > .dropdown[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n  margin-top: 0px;\n  visibility: visible;\n  opacity: 1;\n}\n.site-mobile-menu[_ngcontent-%COMP%] {\n  width: 300px;\n  position: fixed;\n  right: 0;\n  z-index: 2000;\n  padding-top: 20px;\n  background: #fff;\n  height: calc(100vh);\n  transform: translateX(110%);\n  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);\n  transition: 0.3s all ease-in-out;\n}\n.offcanvas-menu[_ngcontent-%COMP%]   .site-mobile-menu[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-close[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 8px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 0px;\n  line-height: 1;\n  cursor: pointer;\n  transition: 0.3s all ease;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #25262a;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-logo[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  margin-left: 0px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 70px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-header[_ngcontent-%COMP%]   .site-mobile-menu-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-mobile-menu-body[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  padding: 20px;\n  height: calc(100vh - 52px);\n  padding-bottom: 150px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  position: relative;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: block;\n  position: relative;\n  color: #212529;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f89d13;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #f89d13;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   .arrow-collapse[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 20;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   .arrow-collapse[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   .arrow-collapse[_ngcontent-%COMP%]:before {\n  font-size: 12px;\n  z-index: 20;\n  font-family: \"icomoon\";\n  content: \"\uF078\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-180deg);\n  transition: 0.3s all ease;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]   .arrow-collapse.collapsed[_ngcontent-%COMP%]:before {\n  transform: translate(-50%, -50%);\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 20px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  font-size: 16px;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block;\n}\n.site-mobile-menu[_ngcontent-%COMP%]   .site-nav-wrap[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbmF2LWJhci9DOlxcVXNlcnNcXGtnYXRsaXNvIG1hdGVtYVxcc291cmNlXFxyZXBvc1xcUmVhbEVzdGF0ZVxcY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUdFLHlCQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtBREVGO0FDQ0E7RUFHRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBREVGO0FDQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7QURFRjtBQ0NBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBREVGO0FDQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7QURFRjtBQ0NBO0VBQ0UsZ0JBQUE7QURFRjtBQ0NBO0VBQ0UsZ0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtFQUNBLHNCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFHQSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBREVGO0FDQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7RUFDQSxjQUFBO0FERUY7QUNDQTtFQUNFLHNCQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBREVGO0FDQ0E7O0VBRUUsVUFBQTtFQUNBLE1BQUE7QURFRjtBQ0NBOzs7RUFHRSxjQUFBO0FERUY7QUNDQTs7O0VBR0UsY0FBQTtBREVGO0FDQ0E7OztFQUdFLGVBQUE7QURFRjtBQ0NBOzs7RUFLRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUdBLDJCQUFBO0VBRUEsaURBQUE7RUFHQSxnQ0FBQTtBREVGO0FDQ0E7RUFHRSx5QkFBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EseUJBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UscUJBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QURFRjtBQ0NBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnREFBQTtFQUdBLHlCQUFBO0FERUY7QUNDQTtFQUdFLGdDQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBREVGO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FERUY7QUNDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FERUYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmEge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b3AtYmFyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uc2l0ZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2l0ZS13cmFwOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ub2ZmY2FudmFzLW1lbnUgLnNpdGUtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9mZmNhbnZhcy1tZW51IC5zaXRlLXdyYXA6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnNpdGUtbmF2YmFyLXRvcCAuc2l0ZS1sb2dvIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udG9wLWJhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNpdGUtbmF2YmFyLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2l0ZS1uYXZiYXItd3JhcCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zaXRlLW5hdmJhci13cmFwIC5zaXRlLW5hdmJhci10b3Age1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnNpdGUtbmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogIzMzMzUzODtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLWxvZ28ge1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbG9nbyBhIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5hY3RpdmUgPiBhIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51ID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51ID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSA+IGxpOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51ID4gbGk6bGFzdC1jaGlsZCA+IGEge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiA+IGE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIu6Mk1wiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4gLmRyb3Bkb3duIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VkZjBmNTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZjBmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM1Mzg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmODlkMTM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyAwcztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycyAwcztcbiAgdHJhbnNpdGlvbjogMC4ycyAwcztcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93bi5hcnJvdy10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24uYXJyb3ctdG9wOmJlZm9yZSB7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogMjAlO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93bi5hcnJvdy10b3A6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNiwgMTgzLCAyMTMsIDApO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwcyBhbGw7XG4gIHRyYW5zaXRpb246IDBzIGFsbDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gLmFjdGl2ZSA+IGEge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4gLmRyb3Bkb3duID4gbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gPiBsaSA+IGEge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2Y4OWQxMztcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biA+IGxpLmhhcy1jaGlsZHJlbiA+IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLujJVcIjtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gPiBsaS5oYXMtY2hpbGRyZW4gPiAuZHJvcGRvd24sXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4gLmRyb3Bkb3duID4gbGkuaGFzLWNoaWxkcmVuID4gdWwge1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gPiBsaS5oYXMtY2hpbGRyZW46aG92ZXIgPiBhLFxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biA+IGxpLmhhcy1jaGlsZHJlbjphY3RpdmUgPiBhLFxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biA+IGxpLmhhcy1jaGlsZHJlbjpmb2N1cyA+IGEge1xuICBjb2xvcjogI2Y4OWQxMztcbn1cblxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuOmhvdmVyID4gYSxcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjpmb2N1cyA+IGEsXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46YWN0aXZlID4gYSB7XG4gIGNvbG9yOiAjZjg5ZDEzO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46aG92ZXIsXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46Zm9jdXMsXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46YWN0aXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46aG92ZXIgPiAuZHJvcGRvd24sXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46Zm9jdXMgPiAuZHJvcGRvd24sXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46YWN0aXZlID4gLmRyb3Bkb3duIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyMDAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAtMTBweCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5vZmZjYW52YXMtbWVudSAuc2l0ZS1tb2JpbGUtbWVudSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW1vYmlsZS1tZW51LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1tb2JpbGUtbWVudS1oZWFkZXIgLnNpdGUtbW9iaWxlLW1lbnUtY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWNsb3NlIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWNsb3NlIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzI1MjYyYTtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWxvZ28ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWxvZ28gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWxvZ28gYSBpbWcge1xuICBtYXgtd2lkdGg6IDcwcHg7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW1vYmlsZS1tZW51LWhlYWRlciAuc2l0ZS1tb2JpbGUtbWVudS1sb2dvIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW1vYmlsZS1tZW51LWJvZHkge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MnB4KTtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCBhIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjg5ZDEzO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW5hdi13cmFwIGxpLmFjdGl2ZSA+IGEge1xuICBjb2xvcjogI2Y4OWQxMztcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgLmFycm93LWNvbGxhcHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDEwcHg7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCAuYXJyb3ctY29sbGFwc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCAuYXJyb3ctY29sbGFwc2U6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAyMDtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiO1xuICBjb250ZW50OiBcIu+BuFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0xODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgLmFycm93LWNvbGxhcHNlLmNvbGxhcHNlZDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCA+IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCA+IGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCA+IGxpID4gdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW5hdi13cmFwID4gbGkgPiB1bCA+IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW5hdi13cmFwID4gbGkgPiB1bCA+IGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCA+IGxpID4gdWwgPiBsaSA+IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCA+IGxpID4gdWwgPiBsaSA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgPiBsaSA+IHVsID4gbGkgPiB1bCA+IGxpID4gYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufSIsImEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l0ZS13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaXRlLXdyYXA6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm9mZmNhbnZhcy1tZW51IC5zaXRlLXdyYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ub2ZmY2FudmFzLW1lbnUgLnNpdGUtd3JhcDpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyLXRvcCAuc2l0ZS1sb2dvIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi50b3AtYmFyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhci13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyLXdyYXAgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhci13cmFwIC5zaXRlLW5hdmJhci10b3Age1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAjMzMzNTM4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLWxvZ28gYSB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmFjdGl2ZT5hIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51PmxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnU+bGk+YSB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51PmxpPmE6aG92ZXIge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudT5saTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51PmxpOmxhc3QtY2hpbGQ+YSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbj5hIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuPmE6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcXGUzMTNcIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWRmMGY1O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGYwZjU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM1Mzg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZjg5ZDEzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyAwcztcclxuICAtby10cmFuc2l0aW9uOiAwLjJzIDBzO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgMHM7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24uYXJyb3ctdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24uYXJyb3ctdG9wOmJlZm9yZSB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24uYXJyb3ctdG9wOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNiwgMTgzLCAyMTMsIDApO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93biBhIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xyXG4gIC1vLXRyYW5zaXRpb246IDBzIGFsbDtcclxuICB0cmFuc2l0aW9uOiAwcyBhbGw7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24gLmFjdGl2ZT5hIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4gLmRyb3Bkb3duPmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24+bGk+YSB7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24+bGk+YTpob3ZlciB7XHJcbiAgY29sb3I6ICNmODlkMTM7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24+bGkuaGFzLWNoaWxkcmVuPmE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxNVwiO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW4gLmRyb3Bkb3duPmxpLmhhcy1jaGlsZHJlbj4uZHJvcGRvd24sXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24+bGkuaGFzLWNoaWxkcmVuPnVsIHtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93bj5saS5oYXMtY2hpbGRyZW46aG92ZXI+YSxcclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuIC5kcm9wZG93bj5saS5oYXMtY2hpbGRyZW46YWN0aXZlPmEsXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbiAuZHJvcGRvd24+bGkuaGFzLWNoaWxkcmVuOmZvY3VzPmEge1xyXG4gIGNvbG9yOiAjZjg5ZDEzO1xyXG59XHJcblxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46aG92ZXI+YSxcclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuOmZvY3VzPmEsXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjphY3RpdmU+YSB7XHJcbiAgY29sb3I6ICNmODlkMTM7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjpob3ZlcixcclxuLnNpdGUtbmF2YmFyIC5zaXRlLW5hdmlnYXRpb24gLnNpdGUtbWVudSAuaGFzLWNoaWxkcmVuOmZvY3VzLFxyXG4uc2l0ZS1uYXZiYXIgLnNpdGUtbmF2aWdhdGlvbiAuc2l0ZS1tZW51IC5oYXMtY2hpbGRyZW46YWN0aXZlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjpob3Zlcj4uZHJvcGRvd24sXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjpmb2N1cz4uZHJvcGRvd24sXHJcbi5zaXRlLW5hdmJhciAuc2l0ZS1uYXZpZ2F0aW9uIC5zaXRlLW1lbnUgLmhhcy1jaGlsZHJlbjphY3RpdmU+LmRyb3Bkb3duIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zaXRlLW1vYmlsZS1tZW51IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3gtc2hhZG93OiAtMTBweCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vZmZjYW52YXMtbWVudSAuc2l0ZS1tb2JpbGUtbWVudSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW1vYmlsZS1tZW51LWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW1vYmlsZS1tZW51LWhlYWRlciAuc2l0ZS1tb2JpbGUtbWVudS1jbG9zZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWNsb3NlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWNsb3NlIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiAjMjUyNjJhO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1tb2JpbGUtbWVudS1oZWFkZXIgLnNpdGUtbW9iaWxlLW1lbnUtbG9nbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1tb2JpbGUtbWVudS1oZWFkZXIgLnNpdGUtbW9iaWxlLW1lbnUtbG9nbyBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWxvZ28gYSBpbWcge1xyXG4gIG1heC13aWR0aDogNzBweDtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbW9iaWxlLW1lbnUtaGVhZGVyIC5zaXRlLW1vYmlsZS1tZW51LWxvZ28gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1tb2JpbGUtbWVudS1ib2R5IHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUycHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCBhIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCBhOmhvdmVyIHtcclxuICBjb2xvcjogI2Y4OWQxMztcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgbGkuYWN0aXZlPmEge1xyXG4gIGNvbG9yOiAjZjg5ZDEzO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcCAuYXJyb3ctY29sbGFwc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW5hdi13cmFwIC5hcnJvdy1jb2xsYXBzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgLmFycm93LWNvbGxhcHNlOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIjtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTE4MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXAgLmFycm93LWNvbGxhcHNlLmNvbGxhcHNlZDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcD5saSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcD5saT5hIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcD5saT51bCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXA+bGk+dWw+bGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcD5saT51bD5saT5hIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc2l0ZS1tb2JpbGUtbWVudSAuc2l0ZS1uYXYtd3JhcD5saT51bD5saT51bCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaXRlLW1vYmlsZS1tZW51IC5zaXRlLW5hdi13cmFwPmxpPnVsPmxpPnVsPmxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpdGUtbW9iaWxlLW1lbnUgLnNpdGUtbmF2LXdyYXA+bGk+dWw+bGk+dWw+bGk+YSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/busy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/busy.service.ts ***!
  \***********************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");



class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'ball-clip-rotate',
            bdColor: 'rgba(255,255,255,0.7)',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/estate-details/estate-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/estate-details/estate-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: EstateDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateDetailsComponent", function() { return EstateDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nomadreservations/ngx-gallery */ "./node_modules/@nomadreservations/ngx-gallery/__ivy_ngcc__/fesm2015/nomadreservations-ngx-gallery.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EstateDetailsComponent_ng_container_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r1.estate.monthlyPrice, "ZAR", "R"), " p/m");
} }
function EstateDetailsComponent_ng_container_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r2.estate.price, "ZAR", "R"));
} }
function EstateDetailsComponent_ng_container_0_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function EstateDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-gallery", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EstateDetailsComponent_ng_container_0_div_20_Template, 4, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EstateDetailsComponent_ng_container_0_div_22_Template, 4, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EstateDetailsComponent_ng_container_0_li_52_Template, 3, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contact the agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.galleryOptions)("images", ctx_r0.galleryImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.estate.city, ", ", ctx_r0.estate.zipCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.estate.estateCategory === "Rent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.estate.estateCategory === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.estate.estateBedroom, " Bedrooms ", ctx_r0.estate.estateType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.estate.estateBedroom, " Bed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.estate.estateBathroom, " Baths");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.estate.garage, " Garage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 23, ctx_r0.estate.areaSize), " SF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.estateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Built ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 25, ctx_r0.estate.yearBuilt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.estate.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.estate.estateType, " Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.estate.estateFeatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.estate.agentImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.agentFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.agentTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.estate.agentDescription);
} }
class EstateDetailsComponent {
    constructor(homeService, activatedRoute) {
        this.homeService = homeService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.loadEstate();
        this.galleryOptions = [
            {
                width: '640px',
                height: '640px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Slide,
            },
        ];
    }
    loadEstate() {
        this.homeService.getEstate(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(estate => {
            this.estate = estate;
            this.galleryImages = this.getImages();
        }, error => {
            console.log(error);
        });
    }
    getImages() {
        const imageUrls = [];
        for (const item of this.estate.estatePhotos) {
            imageUrls.push({
                small: item.imageUrl,
                medium: item.imageUrl,
                big: item.imageUrl
            });
        }
        return imageUrls;
    }
}
EstateDetailsComponent.ɵfac = function EstateDetailsComponent_Factory(t) { return new (t || EstateDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
EstateDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstateDetailsComponent, selectors: [["app-estate-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "single-property-section", "spad"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "single-property"], [1, "mt-5"], [3, "options", "images"], [1, "row", "mt-4"], [1, "col-lg-6"], [1, "property-header"], [1, "col-lg-4", "text-right", "ml-4"], [1, "col-lg-10", "property-info-bar"], [1, "pi-metas"], [1, "pi-meta"], [1, "property-text"], [1, "property-feature", "mt-4"], [1, "col-lg-10"], [1, "list-inline"], ["class", "list-inline-item", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-8", "sidebar"], [1, "agent-widget"], ["alt", "", 3, "src"], [1, "aw-text"], ["href", "#", 1, "readmore-btn"], [1, "list-inline-item"]], template: function EstateDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EstateDetailsComponent_ng_container_0_Template, 65, 27, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".hero-section[_ngcontent-%COMP%] {\n  height: 424px;\n  padding-top: 325px;\n}\n\n.set-bg[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('herobg.jpg');\n}\n\n.single-property[_ngcontent-%COMP%]   .sp-image[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.single-property[_ngcontent-%COMP%]   .pi-metas[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.single-property[_ngcontent-%COMP%]   .pi-meta[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  font-size: 15px;\n  color: #584d51;\n  padding-right: 15px;\n  margin-right: 14px;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n\n.single-property[_ngcontent-%COMP%]   .pi-meta[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.single-property[_ngcontent-%COMP%]   .pi-meta[_ngcontent-%COMP%]:last-child:after {\n  display: none;\n}\n\n.single-property[_ngcontent-%COMP%]   .pi-meta[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"|\";\n  right: 0;\n  top: 0;\n  font-size: 15px;\n  color: #584d51;\n  font-weight: 700;\n}\n\n.property-header[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n  margin-bottom: 35px;\n}\n\n.property-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.property-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #6a6a6a;\n}\n\n.property-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin-bottom: 0;\n}\n\n.property-info-bar[_ngcontent-%COMP%] {\n  padding: 11px 29px 13px;\n  margin-bottom: 40px;\n  border-top: 2px solid #dfe5e8;\n  background: #f5f8fa;\n}\n\n.offer-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  min-width: 260px;\n  padding: 15px 44px;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: none;\n  color: #322429;\n  border: 2px solid #475069;\n  background: #fff;\n}\n\n.offer-btn[_ngcontent-%COMP%]:hover {\n  color: #322429;\n}\n\n.property-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.property-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.property-feature[_ngcontent-%COMP%]   .pf-box[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.property-feature[_ngcontent-%COMP%]   .pf-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.property-feature[_ngcontent-%COMP%]   .pf-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 0;\n}\n\n.video-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 61px;\n}\n\n.loan-calculator[_ngcontent-%COMP%] {\n  padding: 53px 37px 44px;\n  background: #f5f8fa;\n}\n\n.loan-calculator[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n\n.loan-calculator[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  padding: 0 23px;\n  color: #3a3a3a;\n  font-size: 14px;\n  border: none;\n  margin-bottom: 28px;\n}\n\n.loan-calculator[_ngcontent-%COMP%]   .loan-cal-result[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 20px 15px;\n  margin-bottom: 28px;\n  line-height: 1;\n  background: #fff;\n}\n\n.agent-widget[_ngcontent-%COMP%] {\n  margin-bottom: 37px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.agent-widget[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #6a6a6a;\n  margin-bottom: 25px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   .aw-text[_ngcontent-%COMP%] {\n  padding: 35px 26px 45px;\n  text-align: center;\n  background: #f5f8fa;\n}\n\n.map-widget[_ngcontent-%COMP%] {\n  position: relative;\n  height: 407px;\n}\n\n.map-widget[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.agent-widget[_ngcontent-%COMP%] {\n  margin-bottom: 37px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #6a6a6a;\n  margin-bottom: 25px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.agent-widget[_ngcontent-%COMP%]   .aw-text[_ngcontent-%COMP%] {\n  padding: 35px 26px 45px;\n  text-align: center;\n  background: #f5f8fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lc3RhdGUtZGV0YWlscy9DOlxcVXNlcnNcXGtnYXRsaXNvIG1hdGVtYVxcc291cmNlXFxyZXBvc1xcUmVhbEVzdGF0ZVxcY2xpZW50L3NyY1xcYXBwXFxob21lXFxlc3RhdGUtZGV0YWlsc1xcZXN0YXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZXN0YXRlLWRldGFpbHMvZXN0YXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDSDs7QURFQztFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQ0g7O0FER0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQU47O0FER0k7RUFDRSxpQkFBQTtBQ0ROOztBRElJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBRElRO0VBQ0UsYUFBQTtBQ0ZWOztBRE1NO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSlI7O0FEU0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEUUk7RUFDRSxtQkFBQTtBQ05OOztBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDUE47O0FEVUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNSTjs7QURZRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURXSTtFQUNFLGNBQUE7QUNUTjs7QURjSTtFQUNFLG1CQUFBO0FDWE47O0FEY0k7RUFDRSxtQkFBQTtBQ1pOOztBRGlCSTtFQUNFLG1CQUFBO0FDZE47O0FEZ0JNO0VBQ0Usa0JBQUE7QUNkUjs7QURpQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNmUjs7QURvQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqQko7O0FEb0JFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQ2pCSjs7QURtQkk7RUFDRSxtQkFBQTtBQ2pCTjs7QURvQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2xCTjs7QURxQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNuQk47O0FEdUJFO0VBQ0UsbUJBQUE7QUNwQko7O0FEc0JJO0VBQ0UsZUFBQTtBQ3BCTjs7QUR1Qkk7RUFDRSxtQkFBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUN0Qk47O0FEeUJJO0VBQ0UsbUJBQUE7QUN2Qk47O0FEMEJJO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDeEJOOztBRDRCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ3pCSjs7QUQyQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUN6Qk47O0FENEJDO0VBQ0UsaUJBQUE7QUN6Qkg7O0FENEJDO0VBQ0UsbUJBQUE7QUN6Qkg7O0FEMkJHO0VBQ0UsV0FBQTtBQ3pCTDs7QUQ0Qkc7RUFDRSxtQkFBQTtBQzFCTDs7QUQ2Qkc7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUMzQkw7O0FEOEJHO0VBQ0UsbUJBQUE7QUM1Qkw7O0FEK0JHO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDN0JMIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9lc3RhdGUtZGV0YWlscy9lc3RhdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuaGVyby1zZWN0aW9uIHtcclxuICAgaGVpZ2h0OiA0MjRweDtcclxuICAgcGFkZGluZy10b3A6IDMyNXB4O1xyXG4gfVxyXG5cclxuIC5zZXQtYmcge1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N0YXRpYy9oZXJvYmcuanBnJyk7XHJcbiB9XHJcblxyXG4gIC5zaW5nbGUtcHJvcGVydHkge1xyXG4gICAgLnNwLWltYWdlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5waS1tZXRhcyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5waS1tZXRhIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICM1ODRkNTE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcInxcIjtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTg0ZDUxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9wZXJ0eS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb3BlcnR5LWluZm8tYmFyIHtcclxuICAgIHBhZGRpbmc6IDExcHggMjlweCAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGZlNWU4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjhmYTtcclxuICB9XHJcblxyXG4gIC5vZmZlci1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiAjMzIyNDI5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3NTA2OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMzIyNDI5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb3BlcnR5LXRleHQge1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb3BlcnR5LWZlYXR1cmUge1xyXG4gICAgLnBmLWJveCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYxcHg7XHJcbiAgfVxyXG5cclxuICAubG9hbi1jYWxjdWxhdG9yIHtcclxuICAgIHBhZGRpbmc6IDUzcHggMzdweCA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjhmYTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDIzcHg7XHJcbiAgICAgIGNvbG9yOiAjM2EzYTNhO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9hbi1jYWwtcmVzdWx0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWdlbnQtd2lkZ2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hdy10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMzVweCAyNnB4IDQ1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1ZjhmYTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXAtd2lkZ2V0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNDA3cHg7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gLnNpZGViYXIge1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDtcclxuIH1cclxuXHJcbiAuYWdlbnQtd2lkZ2V0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMzdweDtcclxuXHJcbiAgIGltZyB7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgIH1cclxuXHJcbiAgIGg0IHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICB9XHJcblxyXG4gICBoNiB7XHJcbiAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgfVxyXG5cclxuICAgcCB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgfVxyXG5cclxuICAgLmF3LXRleHQge1xyXG4gICAgIHBhZGRpbmc6IDM1cHggMjZweCA0NXB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kOiAjZjVmOGZhO1xyXG4gICB9XHJcbiB9XHJcbiIsIi5oZXJvLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDQyNHB4O1xuICBwYWRkaW5nLXRvcDogMzI1cHg7XG59XG5cbi5zZXQtYmcge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdGF0aWMvaGVyb2JnLmpwZ1wiKTtcbn1cblxuLnNpbmdsZS1wcm9wZXJ0eSAuc3AtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2luZ2xlLXByb3BlcnR5IC5waS1tZXRhcyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnNpbmdsZS1wcm9wZXJ0eSAucGktbWV0YSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNTg0ZDUxO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc2luZ2xlLXByb3BlcnR5IC5waS1tZXRhOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uc2luZ2xlLXByb3BlcnR5IC5waS1tZXRhOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpbmdsZS1wcm9wZXJ0eSAucGktbWV0YTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJ8XCI7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1ODRkNTE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9wZXJ0eS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnByb3BlcnR5LWhlYWRlciBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvcGVydHktaGVhZGVyIGg1IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG4ucHJvcGVydHktaGVhZGVyIHAge1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnByb3BlcnR5LWluZm8tYmFyIHtcbiAgcGFkZGluZzogMTFweCAyOXB4IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGZlNWU4O1xuICBiYWNrZ3JvdW5kOiAjZjVmOGZhO1xufVxuXG4ub2ZmZXItYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIHBhZGRpbmc6IDE1cHggNDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMzMjI0Mjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NzUwNjk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ub2ZmZXItYnRuOmhvdmVyIHtcbiAgY29sb3I6ICMzMjI0Mjk7XG59XG5cbi5wcm9wZXJ0eS10ZXh0IGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9wZXJ0eS10ZXh0IHAge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4ucHJvcGVydHktZmVhdHVyZSAucGYtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcm9wZXJ0eS1mZWF0dXJlIC5wZi1ib3ggaDYge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvcGVydHktZmVhdHVyZSAucGYtYm94IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi52aWRlby1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MXB4O1xufVxuXG4ubG9hbi1jYWxjdWxhdG9yIHtcbiAgcGFkZGluZzogNTNweCAzN3B4IDQ0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY4ZmE7XG59XG4ubG9hbi1jYWxjdWxhdG9yIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5sb2FuLWNhbGN1bGF0b3IgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5sb2FuLWNhbGN1bGF0b3IgLmxvYW4tY2FsLXJlc3VsdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYWdlbnQtd2lkZ2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzdweDtcbn1cbi5hZ2VudC13aWRnZXQgaW1nIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmFnZW50LXdpZGdldCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWdlbnQtd2lkZ2V0IGg2IHtcbiAgY29sb3I6ICM2YTZhNmE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uYWdlbnQtd2lkZ2V0IHAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmFnZW50LXdpZGdldCAuYXctdGV4dCB7XG4gIHBhZGRpbmc6IDM1cHggMjZweCA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNWY4ZmE7XG59XG5cbi5tYXAtd2lkZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwN3B4O1xufVxuLm1hcC13aWRnZXQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5hZ2VudC13aWRnZXQge1xuICBtYXJnaW4tYm90dG9tOiAzN3B4O1xufVxuLmFnZW50LXdpZGdldCBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbi5hZ2VudC13aWRnZXQgaDQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFnZW50LXdpZGdldCBoNiB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmFnZW50LXdpZGdldCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5hZ2VudC13aWRnZXQgLmF3LXRleHQge1xuICBwYWRkaW5nOiAzNXB4IDI2cHggNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjVmOGZhO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstateDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estate-details',
                templateUrl: './estate-details.component.html',
                styleUrls: ['./estate-details.component.scss']
            }]
    }], function () { return [{ type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/estate-item/estate-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/estate-item/estate-item.component.ts ***!
  \***********************************************************/
/*! exports provided: EstateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateItemComponent", function() { return EstateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function EstateItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r0.estate.monthlyPrice, "ZAR", "R"), " p/m");
} }
function EstateItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r1.estate.price, "ZAR", "R"), "");
} }
const _c0 = function (a0, a1) { return { "bg-danger": a0, "bg-primary": a1 }; };
class EstateItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
EstateItemComponent.ɵfac = function EstateItemComponent_Factory(t) { return new (t || EstateItemComponent)(); };
EstateItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstateItemComponent, selectors: [["app-estate-item"]], inputs: { estate: "estate" }, decls: 33, vars: 24, consts: [[1, "property-item"], [1, "container"], [1, "pi-pic", "set-bg", 3, "routerLink", "src"], [1, "label", "top-left", "ml-3", "mt-3", 3, "ngClass"], [1, "pi-text"], ["class", "pt-price", 4, "ngIf"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-object-group"], [1, "fa", "fa-bathtub"], [1, "fa", "fa-bed"], [1, "fa", "fa-automobile"], [1, "pt-price"]], template: function EstateItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EstateItemComponent_div_7_Template, 3, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EstateItemComponent_div_9_Template, 3, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.estate.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.estate.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.estate.estateCategory === "Rent", ctx.estate.estateCategory === "Buy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.estate.estateCategory, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estate.estateCategory === "Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estate.estateCategory === "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.estate.city, ", ", ctx.estate.estateType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, ctx.estate.dateAdded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.estate.street, " ", ctx.estate.city, " ", ctx.estate.zipCode, " ", ctx.estate.province, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, ctx.estate.areaSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estate.estateBathroom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estate.estateBedroom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estate.garage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.property-item[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-pic[_ngcontent-%COMP%] {\n  height: 240px;\n  width: 350px;\n  position: relative;\n  margin-bottom: 25px;\n  cursor: pointer;\n}\n.property-item[_ngcontent-%COMP%]   .pi-pic[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 3px 10px 2px;\n  display: inline-block;\n  background: #0166D0;\n  color: #ffffff;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 3px 10px 2px;\n  display: inline-block;\n  background: #0166D0;\n  color: #ffffff;\n  margin-top: 40px;\n}\n.top-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-pic[_ngcontent-%COMP%]   .label.c-red[_ngcontent-%COMP%] {\n  background: #D41800;\n}\n.property-item[_ngcontent-%COMP%]   .pi-pic[_ngcontent-%COMP%]   .label.c-magenta[_ngcontent-%COMP%] {\n  background: #103230;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%] {\n  position: relative;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .heart-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  content: \"\uE030\";\n  font-family: \"ElegantIcons\";\n  font-size: 18px;\n  color: #00C89E;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pt-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #00C89E;\n  margin-bottom: 10px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pt-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666666;\n  font-weight: 400;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111111;\n  font-family: \"Montserrat\", sans-serif;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00C89E;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e1e1e1;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #111111;\n  font-weight: 600;\n  list-style: none;\n  display: inline-block;\n  margin-right: 45px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666666;\n  margin-right: 5px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pi-agent[_ngcontent-%COMP%]   .pa-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 10px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pi-agent[_ngcontent-%COMP%]   .pa-item[_ngcontent-%COMP%]   .pa-info[_ngcontent-%COMP%] {\n  float: left;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pi-agent[_ngcontent-%COMP%]   .pa-item[_ngcontent-%COMP%]   .pa-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pi-agent[_ngcontent-%COMP%]   .pa-item[_ngcontent-%COMP%]   .pa-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #111111;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  display: inline-block;\n}\n.property-item[_ngcontent-%COMP%]   .pi-text[_ngcontent-%COMP%]   .pi-agent[_ngcontent-%COMP%]   .pa-item[_ngcontent-%COMP%]   .pa-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #00C89E;\n  font-weight: 600;\n  float: right;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lc3RhdGUtaXRlbS9lc3RhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9lc3RhdGUtaXRlbS9DOlxcVXNlcnNcXGtnYXRsaXNvIG1hdGVtYVxcc291cmNlXFxyZXBvc1xcUmVhbEVzdGF0ZVxcY2xpZW50L3NyY1xcYXBwXFxob21lXFxlc3RhdGUtaXRlbVxcZXN0YXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FERUY7QUNFQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEQ0g7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURDRjtBQ0VBO0VBQ0UsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsbUJBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtBRENGO0FDRUE7RUFDRSxnQkFBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLG9CQUFBO0VBQ0EsZ0NBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXN0YXRlLWl0ZW0vZXN0YXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvcGVydHktaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5wcm9wZXJ0eS1pdGVtIC5waS1waWMge1xuICBoZWlnaHQ6IDI0MHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvcGVydHktaXRlbSAucGktcGljIC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDEwcHggMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMwMTY2RDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMTBweCAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzAxNjZEMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi50b3AtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG59XG5cbi5wcm9wZXJ0eS1pdGVtIC5waS1waWMgLmxhYmVsLmMtcmVkIHtcbiAgYmFja2dyb3VuZDogI0Q0MTgwMDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXBpYyAubGFiZWwuYy1tYWdlbnRhIHtcbiAgYmFja2dyb3VuZDogIzEwMzIzMDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IC5oZWFydC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIu6AsFwiO1xuICBmb250LWZhbWlseTogXCJFbGVnYW50SWNvbnNcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwQzg5RTtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnB0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwQzg5RTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnB0LXByaWNlIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgaDUgYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IHAgc3BhbiB7XG4gIGNvbG9yOiAjMDBDODlFO1xufVxuXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCB1bCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgdWwgbGkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNDVweDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgdWwgbGkgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCAucGktYWdlbnQgLnBhLWl0ZW0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnBpLWFnZW50IC5wYS1pdGVtIC5wYS1pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IC5waS1hZ2VudCAucGEtaXRlbSAucGEtaW5mbyBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCAucGktYWdlbnQgLnBhLWl0ZW0gLnBhLWluZm8gaDYge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMTExMTExO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnBpLWFnZW50IC5wYS1pdGVtIC5wYS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwQzg5RTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn0iLCIucHJvcGVydHktaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXBpYyB7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvcGVydHktaXRlbSAucGktcGljIC5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAzcHggMTBweCAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMwMTY2RDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmxhYmVse1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIHBhZGRpbmc6IDNweCAxMHB4IDJweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBiYWNrZ3JvdW5kOiAjMDE2NkQwO1xyXG4gICBjb2xvcjogI2ZmZmZmZjtcclxuICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRvcC1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMTZweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXBpYyAubGFiZWwuYy1yZWQge1xyXG4gIGJhY2tncm91bmQ6ICNENDE4MDA7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS1waWMgLmxhYmVsLmMtbWFnZW50YSB7XHJcbiAgYmFja2dyb3VuZDogIzEwMzIzMDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLmhlYXJ0LWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29udGVudDogXCLugLBcIjtcclxuICBmb250LWZhbWlseTogXCJFbGVnYW50SWNvbnNcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMEM4OUU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IC5wdC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMEM4OUU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnB0LXByaWNlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCBoNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCBoNSBhIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzExMTExMTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IHAge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IHAgc3BhbiB7XHJcbiAgY29sb3I6ICMwMEM4OUU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IHVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgdWwgbGkge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzExMTExMTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCB1bCBsaSBpIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IC5waS1hZ2VudCAucGEtaXRlbSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnBpLWFnZW50IC5wYS1pdGVtIC5wYS1pbmZvIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnByb3BlcnR5LWl0ZW0gLnBpLXRleHQgLnBpLWFnZW50IC5wYS1pdGVtIC5wYS1pbmZvIGltZyB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvcGVydHktaXRlbSAucGktdGV4dCAucGktYWdlbnQgLnBhLWl0ZW0gLnBhLWluZm8gaDYge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzExMTExMTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIC5waS10ZXh0IC5waS1hZ2VudCAucGEtaXRlbSAucGEtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDBDODlFO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstateItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estate-item',
                templateUrl: './estate-item.component.html',
                styleUrls: ['./estate-item.component.scss']
            }]
    }], function () { return []; }, { estate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_estateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/estateParams */ "./src/app/shared/models/estateParams.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/paging-header/paging-header.component */ "./src/app/shared/components/paging-header/paging-header.component.ts");
/* harmony import */ var _estate_item_estate_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estate-item/estate-item.component */ "./src/app/home/estate-item/estate-item.component.ts");
/* harmony import */ var _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/pager/pager.component */ "./src/app/shared/components/pager/pager.component.ts");








const _c0 = ["search"];
function HomeComponent_ng_container_0_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sort_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r6.name, " ");
} }
const _c1 = function (a0, a1) { return { "bg-danger": a0, "bg-primary": a1 }; };
function HomeComponent_ng_container_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_0_button_14_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onCategorySelected($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r7.id === ctx_r3.estateParams.estateCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, item_r7.name === "Rent", item_r7.name === "Buy"))("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
} }
function HomeComponent_ng_container_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-estate-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("estate", item_r10);
} }
function HomeComponent_ng_container_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pager", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function HomeComponent_ng_container_0_div_23_Template_app_pager_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r5.estateParams.pageSize)("totalCount", ctx_r5.totalCount);
} }
function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HomeComponent_ng_container_0_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_0_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_ng_container_0_Template_select_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSortSelected($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_container_0_option_12_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_container_0_button_14_Template, 2, 8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-paging-header", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_ng_container_0_div_22_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_container_0_div_23_Template, 2, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalCount", ctx_r0.totalCount)("pageSize", ctx_r0.estateParams.pageSize)("pageNumber", ctx_r0.estateParams.pageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.estates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalCount > 0);
} }
class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.estateParams = new _shared_models_estateParams__WEBPACK_IMPORTED_MODULE_1__["EstateParams"]();
        this.sort = [
            { name: 'Newest', value: 'dateDesc' },
            { name: 'Price Low', value: 'priceAsc' },
            { name: 'Price High', value: 'priceDesc' },
        ];
    }
    ngOnInit() {
        this.getEstates();
        this.getCategory();
    }
    getEstates() {
        this.homeService.getEstates(this.estateParams).subscribe(response => {
            this.estates = response.data;
            this.estateParams.pageNumber = response.pageIndex;
            this.estateParams.pageSize = response.pageSize;
            this.totalCount = response.count;
        }, error => {
            console.log(error);
        });
    }
    getCategory() {
        this.homeService.getCategory().subscribe(response => {
            this.category = [{ id: 0, name: 'Select Category' }, ...response];
            this.category.shift();
        }, error => {
            console.log(error);
        });
    }
    onCategorySelected(estateCategoryId) {
        this.estateParams.estateCategoryId = estateCategoryId;
        this.estateParams.pageNumber = 1;
        this.getEstates();
    }
    onSortSelected(sort) {
        this.estateParams.sort = sort;
        this.getEstates();
    }
    onPageChanged(event) {
        if (this.estateParams.pageNumber !== event) {
            this.estateParams.pageNumber = event;
            this.getEstates();
        }
    }
    onSearch() {
        this.estateParams.search = this.searchTerm.nativeElement.value;
        this.estateParams.pageNumber = 1;
        this.getEstates();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTerm = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "background-color", "#171717", "padding-top", "50px"], [1, "container"], [1, "row", "mb-5"], [1, "col-md-7"], ["type", "text", "placeholder", "Search by province, postcode or suburb", 1, "form-control", "d-block", "rounded-0", 3, "keyup.enter"], ["search", ""], [1, "col-md-3"], ["type", "submit", "value", "Search", 1, "btn", "btn-primary", "btn-block", "form-control-same-height", "rounded-0", 3, "click"], [1, "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "mt-3"], [1, "mb-4"], [1, "form-control", "d-block", "rounded-0", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-5", "col-md-4", "col-lg-3", "mb-4", "mt-3"], ["type", "button", "class", "btn text-white mr-3", "style", "width: 100px;", 3, "active", "ngClass", "value", "click", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-12", "mb-5"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "totalCount", "pageSize", "pageNumber"], ["class", "col-md-4 mb-5", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "text-white", "mr-3", 2, "width", "100px", 3, "ngClass", "value", "click"], [1, "col-md-4", "mb-5"], [3, "estate"], [1, "d-flex", "justify-content-center"], [3, "pageSize", "totalCount", "pageChanged"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 24, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category && ctx.estates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _estate_item_estate_item_component__WEBPACK_IMPORTED_MODULE_5__["EstateItemComponent"], _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"]], styles: ["@charset \"UTF-8\";\n.site-blocks-cover[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: #fff;\n  padding: 40px;\n  width: 50%;\n}\n@media (max-width: 991.98px) {\n  .site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding: 20px;\n    left: 10px;\n  }\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 20px;\n  color: #000;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #777;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  color: #7cbd1e;\n}\n.site-blocks-cover.overlay[_ngcontent-%COMP%] {\n  position: relative;\n}\n.site-blocks-cover.overlay[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.4);\n}\n.site-blocks-cover[_ngcontent-%COMP%], .site-blocks-cover[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 600px;\n  height: calc(100vh - 134px);\n}\n.site-blocks-cover.inner-page-cover[_ngcontent-%COMP%], .site-blocks-cover.inner-page-cover[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 200px;\n  height: calc(20vh);\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.7);\n  letter-spacing: 0.2em;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n  font-weight: normal;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n  line-height: 1.5;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.site-blocks-cover.subscribe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 300;\n  color: #fff;\n}\n.site-blocks-cover.subscribe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-weight: 100;\n}\n.site-blocks-cover[_ngcontent-%COMP%]   .property-offer-type[_ngcontent-%COMP%] {\n  letter-spacing: 0.2em;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.caption-text[_ngcontent-%COMP%] {\n  letter-spacing: 0.2em;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .btn-same-height[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-weight: 300;\n  border-color: #fff !important;\n  height: 60px;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 200;\n  font-style: italic;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 200;\n  font-style: italic;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 200;\n  font-style: italic;\n}\n.site-block-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 200;\n  font-style: italic;\n}\n.social-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #eec60a !important;\n  background: #eb9007;\n}\n.property-entry[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n.property-entry[_ngcontent-%COMP%]   .property-body[_ngcontent-%COMP%] {\n  position: relative;\n}\n.property-entry[_ngcontent-%COMP%]   .property-favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  top: -60px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  background: #fff;\n  text-align: center;\n}\n.property-entry[_ngcontent-%COMP%]   .property-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.property-entry[_ngcontent-%COMP%]   .property-favorite[_ngcontent-%COMP%]:hover, .property-entry[_ngcontent-%COMP%]   .property-favorite.active[_ngcontent-%COMP%] {\n  background: #f23a2e;\n  color: #fff;\n}\n.property-entry[_ngcontent-%COMP%]   .offer-type-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 8;\n}\n.property-entry[_ngcontent-%COMP%]   .property-thumbnail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  display: block;\n}\n.property-entry[_ngcontent-%COMP%]   .property-thumbnail[_ngcontent-%COMP%]   .offer-type[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  padding: 1px 7px;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  font-size: 9px;\n  border-radius: 4px;\n}\n.property-entry[_ngcontent-%COMP%]   .property-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n  transform: scale(1);\n}\n.property-entry[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.property-entry[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n.property-entry[_ngcontent-%COMP%]   .property-location[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.property-entry[_ngcontent-%COMP%]   .property-location[_ngcontent-%COMP%]   .property-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n}\n.property-entry[_ngcontent-%COMP%]   .property-specs-number[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #000;\n}\n.property-entry[_ngcontent-%COMP%]   .property-specs-wrap[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.property-entry[_ngcontent-%COMP%]   .property-specs-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.property-entry[_ngcontent-%COMP%]   .property-specs[_ngcontent-%COMP%] {\n  display: block;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n}\n.property-entry[_ngcontent-%COMP%]   .property-price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.property-entry.horizontal[_ngcontent-%COMP%]   .property-thumbnail[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n}\n.property-entry.horizontal[_ngcontent-%COMP%]   .property-favorite[_ngcontent-%COMP%] {\n  top: auto !important;\n  right: auto !important;\n  left: -70px !important;\n}\n@media (max-width: 991.98px) {\n  .property-entry.horizontal[_ngcontent-%COMP%]   .property-favorite[_ngcontent-%COMP%] {\n    left: auto !important;\n    top: -60px !important;\n    right: 10px !important;\n  }\n}\n.property-entry[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.property-specs-wrap[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.property-specs-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.property-specs[_ngcontent-%COMP%] {\n  display: block;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n}\n.property-price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.site-section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #000;\n  font-weight: 700;\n  font-size: 2rem;\n  letter-spacing: 0.1em;\n}\n.form-search[_ngcontent-%COMP%] {\n  background: #364e68;\n  position: relative;\n  z-index: 1;\n  padding: 3rem 2rem;\n  box-shadow: 0 0px 30px 0px rbga(0, 0, 0, 1);\n}\n.form-search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.3);\n}\n.form-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n.form-search[_ngcontent-%COMP%]   .btn[type=submit][_ngcontent-%COMP%] {\n  height: 47px;\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-wrap[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  line-height: 0;\n  font-size: 26px;\n  transform: translateY(-50%);\n}\n.select-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.block-13[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.block-13[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  position: relative;\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.block-13[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .block-13[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 20px;\n  font-size: 30px;\n  color: #fff;\n}\n.block-13[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev.disabled[_ngcontent-%COMP%], .block-13[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next.disabled[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev.disabled[_ngcontent-%COMP%], .slide-one-item[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.block-13[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.block-13[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.block-13[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5px;\n}\n.block-13[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 0;\n  display: inline-block;\n  width: 28px;\n  height: 4px;\n  border: none;\n  float: left;\n  background: #cccccc;\n  transition: 0.3s all ease;\n}\n.block-13[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #f89d13;\n}\n#slider-range[_ngcontent-%COMP%] {\n  height: 8px;\n}\n#slider-range[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: none !important;\n  background: #f89d13;\n}\n#slider-range[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%]:focus, #slider-range[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n#slider-range[_ngcontent-%COMP%]   .ui-slider-range[_ngcontent-%COMP%] {\n  background-color: #f89d13;\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 50% !important;\n  bottom: auto !important;\n  width: 100%;\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%] {\n  left: 10px !important;\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  right: 10px !important;\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute !important;\n  top: 50%;\n  padding: 0px;\n  height: 50px;\n  width: 50px;\n  border-radius: 0%;\n  transform: translateY(-50%);\n  background: rgba(0, 0, 0, 0.2);\n  transition: 0.3s all ease-in-out;\n  line-height: 0;\n  text-align: center;\n  font-size: 25px;\n}\n@media (min-width: 768px) {\n  .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  line-height: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:focus, .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover, .slide-one-item.home-slider[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:focus {\n  background: black;\n}\n.slide-one-item.home-slider[_ngcontent-%COMP%]:hover   .owl-nav[_ngcontent-%COMP%], .slide-one-item.home-slider[_ngcontent-%COMP%]:focus   .owl-nav[_ngcontent-%COMP%], .slide-one-item.home-slider[_ngcontent-%COMP%]:active   .owl-nav[_ngcontent-%COMP%] {\n  opacity: 10;\n  visibility: visible;\n}\n.service[_ngcontent-%COMP%] {\n  display: block;\n}\n.service[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #f89d13;\n}\n.service[_ngcontent-%COMP%]   .service-heading[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.service[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.2em;\n}\n.view-options[_ngcontent-%COMP%]   .icon-view[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: gray;\n}\n.view-options[_ngcontent-%COMP%]   .icon-view.active[_ngcontent-%COMP%] {\n  color: #000;\n}\n.view-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n}\n.view-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.view-options[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #000;\n}\n.site-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  border-radius: 50%;\n  height: 50px;\n  line-height: 50px;\n  background: #fff;\n  color: #333333;\n  border: 1px solid #e6e6e6;\n}\n.site-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #cccccc;\n}\n.site-pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: #f89d13;\n  color: #fff;\n}\n.site-pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:hover {\n  border: 1px solid transparent;\n  box-shadow: none;\n}\n.site-pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding: 10px 0;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 35px;\n  position: relative;\n  color: #000;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  width: 20px;\n  height: 20px;\n  line-height: 18px;\n  border: 1px solid #ccc;\n  text-align: center;\n  font-size: 18px;\n  top: 0.1em;\n  left: 0;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]    > a[aria-expanded=true][_ngcontent-%COMP%]:before {\n  font-family: \"icomoon\";\n  position: absolute;\n  content: \"\uE316\";\n  transition: 0.3s all ease;\n  background: #f89d13;\n  color: #fff;\n  border: 1px solid #f89d13;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]    > a[aria-expanded=false][_ngcontent-%COMP%]:before {\n  content: \"\uE313\";\n  color: #ccc;\n  font-family: \"icomoon\";\n  position: absolute;\n  transition: 0.3s all ease;\n}\n.unit-8[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  padding-left: 30px;\n}\n.widget[_ngcontent-%COMP%] {\n  padding: 40px;\n  margin-bottom: 30px;\n}\n.widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.form-contact-agent[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 37px;\n}\n.property-body[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.gal-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.3s all ease;\n  opacity: 1;\n}\n.gal-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n  opacity: 0.5;\n}\n.prop-entry[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.prop-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .prop-entry[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  width: 100%;\n  z-index: 2;\n  transition: 0.3s all ease;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]:before {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(to bottom, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.8) 99%, rgba(0, 0, 0, 0.8) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\", endColorstr=\"#cc000000\", GradientType=0);\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .prop-more-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #f89d13;\n  position: relative;\n  z-index: 4;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .prop-more-info[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 0;\n  color: #fff;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .prop-more-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  background: #f89d13;\n  color: #fff;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 20px;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #fff;\n  margin-bottom: 0;\n}\n.prop-entry[_ngcontent-%COMP%]   .prop-text[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #e6e6e6;\n}\n.prop-entry[_ngcontent-%COMP%]:hover   .prop-text[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.feature[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 0;\n  position: relative;\n  top: -3px;\n  color: #f89d13;\n}\n.feature[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000;\n}\n.feature[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xca2dhdGxpc28gbWF0ZW1hXFxzb3VyY2VcXHJlcG9zXFxSZWFsRXN0YXRlXFxjbGllbnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFREVGO0FBQ0Y7QUNDQTtFQUNFLHdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBRENGO0FDRUE7O0VBRUUsaUJBQUE7RUFDQSwyQkFBQTtBRENGO0FDRUE7O0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBRENGO0FDRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEQ0Y7QUNFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEQ0Y7QUNFQTtFQUNFLHVCQUFBO0FEQ0Y7QUNFQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsZ0NBQUE7QURDRjtBQ0VBOztFQUVFLG1CQUFBO0VBQ0EsV0FBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRENGO0FDRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNFQTtFQUdFLHlCQUFBO0VBR0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtBRENGO0FDRUE7RUFDRSxpQkFBQTtBRENGO0FDRUE7RUFDRSx5QkFBQTtBRENGO0FDRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRENGO0FDRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEQ0Y7QUNFQTtFQUNFLGlCQUFBO0FEQ0Y7QUNFQTtFQUdFLGFBQUE7QURDRjtBQ0VBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FEQ0Y7QUNFQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0VEQ0Y7QUFDRjtBQ0VBO0VBR0Usc0JBQUE7QURBRjtBQ0dBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREFGO0FDR0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBRjtBQ0dBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEQUY7QUNHQTtFQUNFLGlCQUFBO0FEQUY7QUNHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEQUY7QUNHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQ0FBQTtBREFGO0FDR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FEQUY7QUNHQTtFQUNFLFlBQUE7QURBRjtBQ0dBO0VBQ0UsWUFBQTtBREFGO0FDR0E7RUFDRSxrQkFBQTtBREFGO0FDR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0EsMkJBQUE7QURBRjtBQ0dBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FEQUY7QUNHQTs7RUFFRSxrQkFBQTtFQUNBLFVBQUE7QURBRjtBQ0dBOztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUdBLDJCQUFBO0FEQUY7QUNHQTs7OztFQUlFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURBRjtBQ0dBOzs7O0VBSUUsWUFBQTtBREFGO0FDR0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEQUY7QUNHQTtFQUNFLGtCQUFBO0FEQUY7QUNHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBREFGO0FDR0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFHQSx5QkFBQTtBREFGO0FDR0E7RUFDRSxtQkFBQTtBREFGO0FDR0E7RUFDRSxXQUFBO0FEQUY7QUNHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEQUY7QUNHQTs7RUFFRSxhQUFBO0FEQUY7QUNHQTtFQUNFLHlCQUFBO0FEQUY7QUNHQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QURBRjtBQ0dBO0VBQ0UscUJBQUE7QURBRjtBQ0dBO0VBQ0Usc0JBQUE7QURBRjtBQ0dBOztFQUVFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUdBLDJCQUFBO0VBQ0EsOEJBQUE7RUFHQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURBRjtBQ0dBO0VBRUU7O0lBRUUsZUFBQTtFRERGO0FBQ0Y7QUNJQTs7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0FERkY7QUNLQTs7OztFQUlFLGlCQUFBO0FERkY7QUNLQTs7O0VBR0UsV0FBQTtFQUNBLG1CQUFBO0FERkY7QUNLQTtFQUNFLGNBQUE7QURGRjtBQ0tBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURGRjtBQ0tBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURGRjtBQ0tBO0VBQ0UseUJBQUE7QURGRjtBQ0tBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QURGRjtBQ0tBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURGRjtBQ0tBO0VBQ0UsV0FBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBREZGO0FDS0E7RUFDRSxZQUFBO0FERkY7QUNLQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBREZGO0FDS0E7RUFFRSwrQ0FBQTtFQUNBLHlCQUFBO0FERkY7QUNLQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FERkY7QUNLQTtFQUNFLDZCQUFBO0VBRUEsZ0JBQUE7QURGRjtBQ0tBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FERkY7QUNLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FERkY7QUNLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FERkY7QUNLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0FERkY7QUNLQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBREZGO0FDS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSx5QkFBQTtBREZGO0FDS0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FERkY7QUNLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FERkY7QUNLQTtFQUNFLFlBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtBREZGO0FDS0E7RUFHRSx5QkFBQTtFQUNBLFVBQUE7QURGRjtBQ0tBO0VBRUUsZUFBQTtFQUNBLFlBQUE7QURGRjtBQ0tBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBREZGO0FDS0E7O0VBRUUsZ0JBQUE7QURGRjtBQ0tBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFHQSx5QkFBQTtBREZGO0FDS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FERkY7QUNLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBS0Esd0hBQUE7RUFDQSxzSEFBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FERkY7QUNLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBREZGO0FDS0E7RUFDRSxjQUFBO0FERkY7QUNLQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURGRjtBQ0tBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURGRjtBQ0tBO0VBQ0UsU0FBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURGRjtBQ0tBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURGRjtBQ0tBO0VBQ0UsV0FBQTtBREZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNpdGUtYmxvY2tzLWNvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnNpdGUtYmxvY2tzLWNvdmVyIC50ZXh0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbn1cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zaXRlLWJsb2Nrcy1jb3ZlciAudGV4dCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zaXRlLWJsb2Nrcy1jb3ZlciAudGV4dCAubG9jYXRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uc2l0ZS1ibG9ja3MtY292ZXIgLnRleHQgLmxvY2F0aW9uIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2l0ZS1ibG9ja3MtY292ZXIgLnRleHQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzdjYmQxZTtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyLm92ZXJsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXRlLWJsb2Nrcy1jb3Zlci5vdmVybGF5OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zaXRlLWJsb2Nrcy1jb3Zlcixcbi5zaXRlLWJsb2Nrcy1jb3ZlciAucm93IHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzNHB4KTtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyLmlubmVyLXBhZ2UtY292ZXIsXG4uc2l0ZS1ibG9ja3MtY292ZXIuaW5uZXItcGFnZS1jb3ZlciAucm93IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGhlaWdodDogY2FsYygyMHZoKTtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyIC5zdWItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi5zaXRlLWJsb2Nrcy1jb3ZlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc2l0ZS1ibG9ja3MtY292ZXIgcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyIC5pbnRyby10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc2l0ZS1ibG9ja3MtY292ZXIuc3Vic2NyaWJlIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2l0ZS1ibG9ja3MtY292ZXIuc3Vic2NyaWJlIHAge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnNpdGUtYmxvY2tzLWNvdmVyIC5wcm9wZXJ0eS1vZmZlci10eXBlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jYXB0aW9uLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5idG4ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuYnRuLXNhbWUtaGVpZ2h0IHtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuZm9ybS1jb250cm9sIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIElFIDEwKyAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zb2NpYWwtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc29jaWFsLWljb246aG92ZXIge1xuICBjb2xvcjogI2VlYzYwYSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWI5MDA3O1xufVxuXG4ucHJvcGVydHktZW50cnkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LWZhdm9yaXRlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktZmF2b3JpdGU6aG92ZXIsXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LWZhdm9yaXRlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmMjNhMmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvcGVydHktZW50cnkgLm9mZmVyLXR5cGUtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA4O1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXRodW1ibmFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktdGh1bWJuYWlsIC5vZmZlci10eXBlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS10aHVtYm5haWwgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktdGl0bGUgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktbG9jYXRpb24gLnByb3BlcnR5LWljb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXNwZWNzLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1zcGVjcy13cmFwIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXNwZWNzLXdyYXAgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1zcGVjcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJvcGVydHktZW50cnkuaG9yaXpvbnRhbCAucHJvcGVydHktdGh1bWJuYWlsIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCA1MCU7XG4gIGZsZXg6IDAgMCA1MCU7XG59XG5cbi5wcm9wZXJ0eS1lbnRyeS5ob3Jpem9udGFsIC5wcm9wZXJ0eS1mYXZvcml0ZSB7XG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAtNzBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnByb3BlcnR5LWVudHJ5Lmhvcml6b250YWwgLnByb3BlcnR5LWZhdm9yaXRlIHtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtNjBweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wcm9wZXJ0eS1lbnRyeTpob3ZlciBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucHJvcGVydHktc3BlY3Mtd3JhcCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb3BlcnR5LXNwZWNzLXdyYXAgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb3BlcnR5LXNwZWNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4ucHJvcGVydHktcHJpY2Uge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnNpdGUtc2VjdGlvbi10aXRsZSBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmZvcm0tc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogIzM2NGU2ODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwcHggMzBweCAwcHggcmJnYSgwLCAwLCAwLCAxKTtcbiAgYm94LXNoYWRvdzogMCAwcHggMzBweCAwcHggcmJnYSgwLCAwLCAwLCAxKTtcbn1cblxuLmZvcm0tc2VhcmNoIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5mb3JtLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZm9ybS1zZWFyY2ggLmJ0blt0eXBlPXN1Ym1pdF0ge1xuICBoZWlnaHQ6IDQ3cHg7XG59XG5cbi5zZWxlY3Qtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbGVjdC13cmFwIC5pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uc2VsZWN0LXdyYXAgc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5ibG9jay0xMyxcbi5zbGlkZS1vbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJsb2NrLTEzIC5vd2wtbmF2LFxuLnNsaWRlLW9uZS1pdGVtIC5vd2wtbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLXByZXYsXG4uYmxvY2stMTMgLm93bC1uYXYgLm93bC1uZXh0LFxuLnNsaWRlLW9uZS1pdGVtIC5vd2wtbmF2IC5vd2wtcHJldixcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiAub3dsLW5leHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJsb2NrLTEzIC5vd2wtbmF2IC5vd2wtcHJldi5kaXNhYmxlZCxcbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLW5leHQuZGlzYWJsZWQsXG4uc2xpZGUtb25lLWl0ZW0gLm93bC1uYXYgLm93bC1wcmV2LmRpc2FibGVkLFxuLnNsaWRlLW9uZS1pdGVtIC5vd2wtbmF2IC5vd2wtbmV4dC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmJsb2NrLTEzIC5vd2wtc3RhZ2Utb3V0ZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5ibG9jay0xMyAub3dsLWRvdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibG9jay0xMyAub3dsLWRvdHMgLm93bC1kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmxvY2stMTMgLm93bC1kb3RzIC5vd2wtZG90ID4gc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xufVxuXG4uYmxvY2stMTMgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xufVxuXG4jc2xpZGVyLXJhbmdlIHtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbiNzbGlkZXItcmFuZ2UgLnVpLXNsaWRlci1oYW5kbGUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xufVxuXG4jc2xpZGVyLXJhbmdlIC51aS1zbGlkZXItaGFuZGxlOmZvY3VzLFxuI3NsaWRlci1yYW5nZSAudWktc2xpZGVyLWhhbmRsZTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jc2xpZGVyLXJhbmdlIC51aS1zbGlkZXItcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5ZDEzO1xufVxuXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1wcmV2IHtcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uZXh0IHtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtcHJldixcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLW5leHQge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtcHJldixcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLW5leHQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtcHJldiA+IHNwYW4sXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uZXh0ID4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLXByZXY6aG92ZXIsXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1wcmV2OmZvY3VzLFxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtbmV4dDpob3Zlcixcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLW5leHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyOmhvdmVyIC5vd2wtbmF2LFxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyOmZvY3VzIC5vd2wtbmF2LFxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyOmFjdGl2ZSAub3dsLW5hdiB7XG4gIG9wYWNpdHk6IDEwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc2VydmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VydmljZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICNmODlkMTM7XG59XG5cbi5zZXJ2aWNlIC5zZXJ2aWNlLWhlYWRpbmcge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zZXJ2aWNlIHAge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uc2VydmljZSAucmVhZC1tb3JlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi52aWV3LW9wdGlvbnMgLmljb24tdmlldyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi52aWV3LW9wdGlvbnMgLmljb24tdmlldy5hY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnZpZXctb3B0aW9ucyBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnZpZXctb3B0aW9ucyBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlldy1vcHRpb25zIGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zaXRlLXBhZ2luYXRpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5zaXRlLXBhZ2luYXRpb24gYTpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmODlkMTM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbn1cblxuLnVuaXQtOCAuYWNjb3JkaW9uLWl0ZW0gLmhlYWRpbmcge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4udW5pdC04IC5hY2NvcmRpb24taXRlbSAuaGVhZGluZyA+IGEge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi51bml0LTggLmFjY29yZGlvbi1pdGVtIC5oZWFkaW5nID4gYTpiZWZvcmUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRvcDogMC4xZW07XG4gIGxlZnQ6IDA7XG59XG5cbi51bml0LTggLmFjY29yZGlvbi1pdGVtIC5oZWFkaW5nID4gYVthcmlhLWV4cGFuZGVkPXRydWVdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIu6MllwiO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIGJhY2tncm91bmQ6ICNmODlkMTM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjg5ZDEzO1xufVxuXG4udW5pdC04IC5hY2NvcmRpb24taXRlbSAuaGVhZGluZyA+IGFbYXJpYS1leHBhbmRlZD1mYWxzZV06YmVmb3JlIHtcbiAgY29udGVudDogXCLujJNcIjtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG59XG5cbi51bml0LTggLmFjY29yZGlvbi1pdGVtIC5ib2R5LXRleHQge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ud2lkZ2V0IHtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLndpZGdldCAud2lkZ2V0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmZvcm0tY29udGFjdC1hZ2VudCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAzN3B4O1xufVxuXG4ucHJvcGVydHktYm9keSB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5nYWwtaXRlbSBpbWcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5nYWwtaXRlbTpob3ZlciBpbWcge1xuICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgY3Vyc29yOiB6b29tLWluO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5wcm9wLWVudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvcC1lbnRyeSBpbWcsXG4ucHJvcC1lbnRyeSBmaWd1cmUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnByb3AtZW50cnkgLnByb3AtdGV4dDpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDE4JSwgcmdiYSgwLCAwLCAwLCAwLjgpIDk5JSwgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOCUsIHJnYmEoMCwgMCwgMCwgMC44KSA5OSUsIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMTglLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoOTklLCByZ2JhKDAsIDAsIDAsIDAuOCkpLCB0byhyZ2JhKDAsIDAsIDAsIDAuOCkpKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDE4JSwgcmdiYSgwLCAwLCAwLCAwLjgpIDk5JSwgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgMTglLCByZ2JhKDAsIDAsIDAsIDAuOCkgOTklLCByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjMDAwMDAwMDBcIiwgZW5kQ29sb3JzdHI9XCIjY2MwMDAwMDBcIiwgR3JhZGllbnRUeXBlPTApO1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5wcm9wLW1vcmUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogI2Y4OWQxMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5wcm9wLW1vcmUtaW5mbyAuY29sIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAucHJvcC1tb3JlLWluZm8gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5wcmljZSB7XG4gIGJhY2tncm91bmQ6ICNmODlkMTM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5wcm9wLWVudHJ5OmhvdmVyIC5wcm9wLXRleHQge1xuICBib3R0b206IDA7XG59XG5cbi5mZWF0dXJlIC5pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG4gIGNvbG9yOiAjZjg5ZDEzO1xufVxuXG4uZmVhdHVyZSAudGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5mZWF0dXJlIC50ZXh0IHAge1xuICBjb2xvcjogIzg4ODtcbn0iLCIuc2l0ZS1ibG9ja3MtY292ZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIgLnRleHQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnNpdGUtYmxvY2tzLWNvdmVyIC50ZXh0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2Nrcy1jb3ZlciAudGV4dCBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2Nrcy1jb3ZlciAudGV4dCAubG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLnNpdGUtYmxvY2tzLWNvdmVyIC50ZXh0IC5sb2NhdGlvbiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2Nrcy1jb3ZlciAudGV4dCBzdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjN2NiZDFlO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIub3ZlcmxheTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2Nrcy1jb3ZlcixcclxuLnNpdGUtYmxvY2tzLWNvdmVyIC5yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzNHB4KTtcclxufVxyXG5cclxuLnNpdGUtYmxvY2tzLWNvdmVyLmlubmVyLXBhZ2UtY292ZXIsXHJcbi5zaXRlLWJsb2Nrcy1jb3Zlci5pbm5lci1wYWdlLWNvdmVyIC5yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGhlaWdodDogY2FsYygyMHZoKTtcclxufVxyXG5cclxuLnNpdGUtYmxvY2tzLWNvdmVyIC5zdWItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMmVtO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIgaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNpdGUtYmxvY2tzLWNvdmVyIHAge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIgLmludHJvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIuc3Vic2NyaWJlIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9ja3MtY292ZXIuc3Vic2NyaWJlIHAge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2Nrcy1jb3ZlciAucHJvcGVydHktb2ZmZXItdHlwZSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FwdGlvbi10ZXh0IHtcclxuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuYnRuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5idG4tc2FtZS1oZWlnaHQge1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l0ZS1ibG9jay1zdWJzY3JpYmUgLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaXRlLWJsb2NrLXN1YnNjcmliZSAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNpdGUtYmxvY2stc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc2l0ZS1ibG9jay1zdWJzY3JpYmUgLmZvcm0tY29udHJvbDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbiBzcGFuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNlZWM2MGEgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZWI5MDA3O1xyXG59XHJcblxyXG4ucHJvcGVydHktZW50cnkge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktZmF2b3JpdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiAtNjBweDtcclxuICByaWdodDogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktZmF2b3JpdGUgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1mYXZvcml0ZTpob3ZlcixcclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1mYXZvcml0ZS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmMjNhMmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAub2ZmZXItdHlwZS13cmFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS10aHVtYm5haWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXRodW1ibmFpbCAub2ZmZXItdHlwZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcclxuICBmb250LXNpemU6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktdGh1bWJuYWlsIGltZyB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktdGl0bGUgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktbG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktbG9jYXRpb24gLnByb3BlcnR5LWljb24ge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktc3BlY3MtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1zcGVjcy13cmFwIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJvcGVydHktZW50cnkgLnByb3BlcnR5LXNwZWNzLXdyYXAgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LWVudHJ5IC5wcm9wZXJ0eS1zcGVjcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeSAucHJvcGVydHktcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4ucHJvcGVydHktZW50cnkuaG9yaXpvbnRhbCAucHJvcGVydHktdGh1bWJuYWlsIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgNTAlO1xyXG4gIGZsZXg6IDAgMCA1MCU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeS5ob3Jpem9udGFsIC5wcm9wZXJ0eS1mYXZvcml0ZSB7XHJcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBsZWZ0OiAtNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAucHJvcGVydHktZW50cnkuaG9yaXpvbnRhbCAucHJvcGVydHktZmF2b3JpdGUge1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtNjBweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1lbnRyeTpob3ZlciBpbWcge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4ucHJvcGVydHktc3BlY3Mtd3JhcCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb3BlcnR5LXNwZWNzLXdyYXAgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb3BlcnR5LXNwZWNzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxufVxyXG5cclxuLnByb3BlcnR5LXByaWNlIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLnNpdGUtc2VjdGlvbi10aXRsZSBoMiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxufVxyXG5cclxuLmZvcm0tc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kOiAjMzY0ZTY4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDMwcHggMHB4IHJiZ2EoMCwgMCwgMCwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggMzBweCAwcHggcmJnYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLmZvcm0tc2VhcmNoIGxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uZm9ybS1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1zZWFyY2ggLmJ0blt0eXBlPVwic3VibWl0XCJdIHtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VsZWN0LXdyYXAgLmljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zZWxlY3Qtd3JhcCBzZWxlY3Qge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmJsb2NrLTEzLFxyXG4uc2xpZGUtb25lLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYmxvY2stMTMgLm93bC1uYXYsXHJcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLXByZXYsXHJcbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLW5leHQsXHJcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiAub3dsLXByZXYsXHJcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLXByZXYuZGlzYWJsZWQsXHJcbi5ibG9jay0xMyAub3dsLW5hdiAub3dsLW5leHQuZGlzYWJsZWQsXHJcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiAub3dsLXByZXYuZGlzYWJsZWQsXHJcbi5zbGlkZS1vbmUtaXRlbSAub3dsLW5hdiAub3dsLW5leHQuZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcblxyXG4uYmxvY2stMTMgLm93bC1zdGFnZS1vdXRlciB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ibG9jay0xMyAub3dsLWRvdHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsb2NrLTEzIC5vd2wtZG90cyAub3dsLWRvdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYmxvY2stMTMgLm93bC1kb3RzIC5vd2wtZG90PnNwYW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG59XHJcblxyXG4uYmxvY2stMTMgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZT5zcGFuIHtcclxuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xyXG59XHJcblxyXG4jc2xpZGVyLXJhbmdlIHtcclxuICBoZWlnaHQ6IDhweDtcclxufVxyXG5cclxuI3NsaWRlci1yYW5nZSAudWktc2xpZGVyLWhhbmRsZSB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xyXG59XHJcblxyXG4jc2xpZGVyLXJhbmdlIC51aS1zbGlkZXItaGFuZGxlOmZvY3VzLFxyXG4jc2xpZGVyLXJhbmdlIC51aS1zbGlkZXItaGFuZGxlOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NsaWRlci1yYW5nZSAudWktc2xpZGVyLXJhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5ZDEzO1xyXG59XHJcblxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uYXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLXByZXYge1xyXG4gIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtbmV4dCB7XHJcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtcHJldixcclxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtbmV4dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtcHJldixcclxuICAuc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlciAub3dsLXByZXY+c3BhbixcclxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyIC5vd2wtbmV4dD5zcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1wcmV2OmhvdmVyLFxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1wcmV2OmZvY3VzLFxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uZXh0OmhvdmVyLFxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXIgLm93bC1uZXh0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLnNsaWRlLW9uZS1pdGVtLmhvbWUtc2xpZGVyOmhvdmVyIC5vd2wtbmF2LFxyXG4uc2xpZGUtb25lLWl0ZW0uaG9tZS1zbGlkZXI6Zm9jdXMgLm93bC1uYXYsXHJcbi5zbGlkZS1vbmUtaXRlbS5ob21lLXNsaWRlcjphY3RpdmUgLm93bC1uYXYge1xyXG4gIG9wYWNpdHk6IDEwO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlcnZpY2UgLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogI2Y4OWQxMztcclxufVxyXG5cclxuLnNlcnZpY2UgLnNlcnZpY2UtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnNlcnZpY2UgcCB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLnNlcnZpY2UgLnJlYWQtbW9yZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XHJcbn1cclxuXHJcbi52aWV3LW9wdGlvbnMgLmljb24tdmlldyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udmlldy1vcHRpb25zIC5pY29uLXZpZXcuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnZpZXctb3B0aW9ucyBhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi52aWV3LW9wdGlvbnMgYTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udmlldy1vcHRpb25zIGEuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5zaXRlLXBhZ2luYXRpb24gYTpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi51bml0LTggLmFjY29yZGlvbi1pdGVtIC5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnVuaXQtOCAuYWNjb3JkaW9uLWl0ZW0gLmhlYWRpbmc+YSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnVuaXQtOCAuYWNjb3JkaW9uLWl0ZW0gLmhlYWRpbmc+YTpiZWZvcmUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdG9wOiAuMWVtO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi51bml0LTggLmFjY29yZGlvbi1pdGVtIC5oZWFkaW5nPmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ2ljb21vb24nO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlxcZTMxNlwiO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogI2Y4OWQxMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjg5ZDEzO1xyXG59XHJcblxyXG4udW5pdC04IC5hY2NvcmRpb24taXRlbSAuaGVhZGluZz5hW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzEzXCI7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxufVxyXG5cclxuLnVuaXQtOCAuYWNjb3JkaW9uLWl0ZW0gLmJvZHktdGV4dCB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ud2lkZ2V0IHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi53aWRnZXQgLndpZGdldC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhY3QtYWdlbnQgLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG59XHJcblxyXG4ucHJvcGVydHktYm9keSB7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuLmdhbC1pdGVtIGltZyB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZ2FsLWl0ZW06aG92ZXIgaW1nIHtcclxuICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5wcm9wLWVudHJ5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb3AtZW50cnkgaW1nLFxyXG4ucHJvcC1lbnRyeSBmaWd1cmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9wLWVudHJ5IC5wcm9wLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxufVxyXG5cclxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAuaW5uZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0OmJlZm9yZSB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOCUsIHJnYmEoMCwgMCwgMCwgMC44KSA5OSUsIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOCUsIHJnYmEoMCwgMCwgMCwgMC44KSA5OSUsIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgxOCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg5OSUsIHJnYmEoMCwgMCwgMCwgMC44KSksIHRvKHJnYmEoMCwgMCwgMCwgMC44KSkpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOCUsIHJnYmEoMCwgMCwgMCwgMC44KSA5OSUsIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgMTglLCByZ2JhKDAsIDAsIDAsIDAuOCkgOTklLCByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyNjYzAwMDAwMCcsIEdyYWRpZW50VHlwZT0wKTtcclxufVxyXG5cclxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAucHJvcC1tb3JlLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjg5ZDEzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAucHJvcC1tb3JlLWluZm8gLmNvbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvcC1lbnRyeSAucHJvcC10ZXh0IC5wcm9wLW1vcmUtaW5mbyBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAucHJpY2Uge1xyXG4gIGJhY2tncm91bmQ6ICNmODlkMTM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9wLWVudHJ5IC5wcm9wLXRleHQgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnByb3AtZW50cnkgLnByb3AtdGV4dCAubG9jYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2U2ZTZlNjtcclxufVxyXG5cclxuLnByb3AtZW50cnk6aG92ZXIgLnByb3AtdGV4dCB7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZmVhdHVyZSAuaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgY29sb3I6ICNmODlkMTM7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC50ZXh0IGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC50ZXh0IHAge1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }]; }, { searchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");






class HomeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getEstates(estateParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (estateParams.estateCategoryId !== 0) {
            params = params.append('estateCategoryId', estateParams.estateCategoryId.toString());
        }
        if (estateParams.search) {
            params = params.append('search', estateParams.search);
        }
        params = params.append('sort', estateParams.sort);
        params = params.append('pageIndex', estateParams.pageNumber.toString());
        params = params.append('pageIndex', estateParams.pageSize.toString());
        return this.http.get(this.baseUrl + 'estates', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            return response.body;
        }));
    }
    getEstate(id) {
        return this.http.get(this.baseUrl + 'estates/' + id);
    }
    getCategory() {
        return this.http.get(this.baseUrl + 'estates/category');
    }
    getAgent() {
        return this.http.get(this.baseUrl + 'estates/agents');
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/pager/pager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.ts ***!
  \************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");



class PagerComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onPagerChanged(event) {
        this.pageChanged.emit(event.page);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["app-pager"]], inputs: { totalCount: "totalCount", pageSize: "pageSize" }, outputs: { pageChanged: "pageChanged" }, decls: 1, vars: 3, consts: [["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "pageChanged"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function PagerComponent_Template_pagination_pageChanged_0_listener($event) { return ctx.onPagerChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.totalCount)("itemsPerPage", ctx.pageSize);
    } }, directives: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pager',
                templateUrl: './pager.component.html',
                styleUrls: ['./pager.component.scss'],
            }]
    }], function () { return []; }, { totalCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/paging-header/paging-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: PagingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function() { return PagingHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PagingHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r0.pageNumber - 1) * ctx_r0.pageSize + 1, " - ", ctx_r0.pageNumber * ctx_r0.pageSize > ctx_r0.totalCount ? ctx_r0.totalCount : ctx_r0.pageNumber * ctx_r0.pageSize, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalCount, " ");
} }
function PagingHeaderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " results for this filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PagingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagingHeaderComponent.ɵfac = function PagingHeaderComponent_Factory(t) { return new (t || PagingHeaderComponent)(); };
PagingHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagingHeaderComponent, selectors: [["app-paging-header"]], inputs: { pageNumber: "pageNumber", pageSize: "pageSize", totalCount: "totalCount" }, decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function PagingHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagingHeaderComponent_span_1_Template, 8, 3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagingHeaderComponent_span_2_Template, 5, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount && ctx.totalCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luZy1oZWFkZXIvcGFnaW5nLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagingHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paging-header',
                templateUrl: './paging-header.component.html',
                styleUrls: ['./paging-header.component.scss']
            }]
    }], function () { return []; }, { pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/models/estateParams.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/estateParams.ts ***!
  \***********************************************/
/*! exports provided: EstateParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateParams", function() { return EstateParams; });
class EstateParams {
    constructor() {
        this.estateCategoryId = 0;
        this.pageNumber = 1;
        this.pageSize = 6;
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pager/pager.component */ "./src/app/shared/components/pager/pager.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nomadreservations/ngx-gallery */ "./node_modules/@nomadreservations/ngx-gallery/__ivy_ngcc__/fesm2015/nomadreservations-ngx-gallery.js");
/* harmony import */ var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/paging-header/paging-header.component */ "./src/app/shared/components/paging-header/paging-header.component.ts");











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"]
        ],
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
        ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"], _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__["PagingHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"]], exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"],
        _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
        _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__["PagingHeaderComponent"],
        ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"], _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__["PagingHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"]
                ],
                exports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"],
                    _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_2__["PagerComponent"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _nomadreservations_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                    _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__["PagingHeaderComponent"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiUrl: 'api/'
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kgatliso matema\source\repos\RealEstate\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map