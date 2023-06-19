"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_admin-add-deals_admin-add-deals_module_ts"],{

/***/ 9239:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-deals/admin-add-deals-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddDealsPageRoutingModule": () => (/* binding */ AdminAddDealsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_add_deals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-deals.page */ 2041);




const routes = [
    {
        path: '',
        component: _admin_add_deals_page__WEBPACK_IMPORTED_MODULE_0__.AdminAddDealsPage
    }
];
let AdminAddDealsPageRoutingModule = class AdminAddDealsPageRoutingModule {
};
AdminAddDealsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminAddDealsPageRoutingModule);



/***/ }),

/***/ 7936:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-deals/admin-add-deals.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddDealsPageModule": () => (/* binding */ AdminAddDealsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_add_deals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-deals-routing.module */ 9239);
/* harmony import */ var _admin_add_deals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-add-deals.page */ 2041);







let AdminAddDealsPageModule = class AdminAddDealsPageModule {
};
AdminAddDealsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_add_deals_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminAddDealsPageRoutingModule
        ],
        declarations: [_admin_add_deals_page__WEBPACK_IMPORTED_MODULE_1__.AdminAddDealsPage]
    })
], AdminAddDealsPageModule);



/***/ }),

/***/ 2041:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-deals/admin-add-deals.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAddDealsPage": () => (/* binding */ AdminAddDealsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_add_deals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-add-deals.page.html?ngResource */ 79);
/* harmony import */ var _admin_add_deals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-add-deals.page.scss?ngResource */ 4865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AdminAddDealsPage = class AdminAddDealsPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminAddDealsPage.ctorParameters = () => [];
AdminAddDealsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-add-deals',
        template: _admin_add_deals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_add_deals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminAddDealsPage);



/***/ }),

/***/ 4865:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-deals/admin-add-deals.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1hZGQtZGVhbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 79:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-add-deals/admin-add-deals.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>admin-add-deals</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_admin-add-deals_admin-add-deals_module_ts.js.map