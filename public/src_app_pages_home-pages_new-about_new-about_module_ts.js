"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home-pages_new-about_new-about_module_ts"],{

/***/ 2241:
/*!************************************************************************!*\
  !*** ./src/app/pages/home-pages/new-about/new-about-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAboutPageRoutingModule": () => (/* binding */ NewAboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _new_about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-about.page */ 7229);




const routes = [
    {
        path: '',
        component: _new_about_page__WEBPACK_IMPORTED_MODULE_0__.NewAboutPage
    }
];
let NewAboutPageRoutingModule = class NewAboutPageRoutingModule {
};
NewAboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewAboutPageRoutingModule);



/***/ }),

/***/ 7210:
/*!****************************************************************!*\
  !*** ./src/app/pages/home-pages/new-about/new-about.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAboutPageModule": () => (/* binding */ NewAboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-about-routing.module */ 2241);
/* harmony import */ var _new_about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-about.page */ 7229);







let NewAboutPageModule = class NewAboutPageModule {
};
NewAboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_about_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewAboutPageRoutingModule
        ],
        declarations: [_new_about_page__WEBPACK_IMPORTED_MODULE_1__.NewAboutPage]
    })
], NewAboutPageModule);



/***/ }),

/***/ 7229:
/*!**************************************************************!*\
  !*** ./src/app/pages/home-pages/new-about/new-about.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAboutPage": () => (/* binding */ NewAboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _new_about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-about.page.html?ngResource */ 4013);
/* harmony import */ var _new_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-about.page.scss?ngResource */ 422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let NewAboutPage = class NewAboutPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    admin() {
        this.router.navigate(['home/login']);
    }
    home() {
        this.router.navigate(['home/landing']);
    }
    about() {
        this.router.navigate(['new-about']);
    }
    contact() {
        this.router.navigate(['home/contact-us']);
    }
};
NewAboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NewAboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-new-about',
        template: _new_about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewAboutPage);



/***/ }),

/***/ 422:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home-pages/new-about/new-about.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYWJvdXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4013:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home-pages/new-about/new-about.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>new-about</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_new-about_new-about_module_ts.js.map