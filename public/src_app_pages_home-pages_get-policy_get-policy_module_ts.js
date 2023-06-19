"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home-pages_get-policy_get-policy_module_ts"],{

/***/ 9933:
/*!**************************************************************************!*\
  !*** ./src/app/pages/home-pages/get-policy/get-policy-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPolicyPageRoutingModule": () => (/* binding */ GetPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _get_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-policy.page */ 9981);




const routes = [
    {
        path: '',
        component: _get_policy_page__WEBPACK_IMPORTED_MODULE_0__.GetPolicyPage
    }
];
let GetPolicyPageRoutingModule = class GetPolicyPageRoutingModule {
};
GetPolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetPolicyPageRoutingModule);



/***/ }),

/***/ 2399:
/*!******************************************************************!*\
  !*** ./src/app/pages/home-pages/get-policy/get-policy.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPolicyPageModule": () => (/* binding */ GetPolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _get_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-policy-routing.module */ 9933);
/* harmony import */ var _get_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-policy.page */ 9981);







let GetPolicyPageModule = class GetPolicyPageModule {
};
GetPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _get_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetPolicyPageRoutingModule
        ],
        declarations: [_get_policy_page__WEBPACK_IMPORTED_MODULE_1__.GetPolicyPage]
    })
], GetPolicyPageModule);



/***/ }),

/***/ 9981:
/*!****************************************************************!*\
  !*** ./src/app/pages/home-pages/get-policy/get-policy.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPolicyPage": () => (/* binding */ GetPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _get_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-policy.page.html?ngResource */ 5085);
/* harmony import */ var _get_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-policy.page.scss?ngResource */ 6303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GetPolicyPage = class GetPolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
GetPolicyPage.ctorParameters = () => [];
GetPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-get-policy',
        template: _get_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_get_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetPolicyPage);



/***/ }),

/***/ 6303:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/get-policy/get-policy.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtcG9saWN5LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5085:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/get-policy/get-policy.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>get-policy</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_get-policy_get-policy_module_ts.js.map