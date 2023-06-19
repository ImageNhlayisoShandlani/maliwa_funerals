"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_admin-add-product_admin-add-product_module_ts"],{

/***/ 2506:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-product/admin-add-product-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddProductPageRoutingModule": () => (/* binding */ AdminAddProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_add_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-product.page */ 3985);




const routes = [
    {
        path: '',
        component: _admin_add_product_page__WEBPACK_IMPORTED_MODULE_0__.AdminAddProductPage
    }
];
let AdminAddProductPageRoutingModule = class AdminAddProductPageRoutingModule {
};
AdminAddProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminAddProductPageRoutingModule);



/***/ }),

/***/ 9379:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-product/admin-add-product.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddProductPageModule": () => (/* binding */ AdminAddProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-product-routing.module */ 2506);
/* harmony import */ var _admin_add_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-add-product.page */ 3985);







let AdminAddProductPageModule = class AdminAddProductPageModule {
};
AdminAddProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_add_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminAddProductPageRoutingModule
        ],
        declarations: [_admin_add_product_page__WEBPACK_IMPORTED_MODULE_1__.AdminAddProductPage]
    })
], AdminAddProductPageModule);



/***/ }),

/***/ 3985:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-product/admin-add-product.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddProductPage": () => (/* binding */ AdminAddProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_add_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-product.page.html?ngResource */ 6780);
/* harmony import */ var _admin_add_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-add-product.page.scss?ngResource */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AdminAddProductPage = class AdminAddProductPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminAddProductPage.ctorParameters = () => [];
AdminAddProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-add-product',
        template: _admin_add_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_add_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminAddProductPage);



/***/ }),

/***/ 7369:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-product/admin-add-product.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1hZGQtcHJvZHVjdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6780:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-product/admin-add-product.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>admin-add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_admin-add-product_admin-add-product_module_ts.js.map