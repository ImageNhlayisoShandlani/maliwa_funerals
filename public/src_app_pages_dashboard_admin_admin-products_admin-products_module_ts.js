"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_admin-products_admin-products_module_ts"],{

/***/ 324:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-products/admin-products-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductsPageRoutingModule": () => (/* binding */ AdminProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-products.page */ 7264);




const routes = [
    {
        path: '',
        component: _admin_products_page__WEBPACK_IMPORTED_MODULE_0__.AdminProductsPage
    }
];
let AdminProductsPageRoutingModule = class AdminProductsPageRoutingModule {
};
AdminProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminProductsPageRoutingModule);



/***/ }),

/***/ 5937:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-products/admin-products.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductsPageModule": () => (/* binding */ AdminProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-products-routing.module */ 324);
/* harmony import */ var _admin_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-products.page */ 7264);







let AdminProductsPageModule = class AdminProductsPageModule {
};
AdminProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminProductsPageRoutingModule
        ],
        declarations: [_admin_products_page__WEBPACK_IMPORTED_MODULE_1__.AdminProductsPage]
    })
], AdminProductsPageModule);



/***/ }),

/***/ 7264:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-products/admin-products.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductsPage": () => (/* binding */ AdminProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-products.page.html?ngResource */ 497);
/* harmony import */ var _admin_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-products.page.scss?ngResource */ 6689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AdminProductsPage = class AdminProductsPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminProductsPage.ctorParameters = () => [];
AdminProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-products',
        template: _admin_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminProductsPage);



/***/ }),

/***/ 6689:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-products/admin-products.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 497:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-products/admin-products.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>admin-products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_admin-products_admin-products_module_ts.js.map