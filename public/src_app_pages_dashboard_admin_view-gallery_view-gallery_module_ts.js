"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_view-gallery_view-gallery_module_ts"],{

/***/ 4225:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/view-gallery/view-gallery-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewGalleryPageRoutingModule": () => (/* binding */ ViewGalleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_gallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-gallery.page */ 2579);




const routes = [
    {
        path: '',
        component: _view_gallery_page__WEBPACK_IMPORTED_MODULE_0__.ViewGalleryPage
    }
];
let ViewGalleryPageRoutingModule = class ViewGalleryPageRoutingModule {
};
ViewGalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewGalleryPageRoutingModule);



/***/ }),

/***/ 4635:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/view-gallery/view-gallery.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewGalleryPageModule": () => (/* binding */ ViewGalleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-gallery-routing.module */ 4225);
/* harmony import */ var _view_gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gallery.page */ 2579);







let ViewGalleryPageModule = class ViewGalleryPageModule {
};
ViewGalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewGalleryPageRoutingModule
        ],
        declarations: [_view_gallery_page__WEBPACK_IMPORTED_MODULE_1__.ViewGalleryPage]
    })
], ViewGalleryPageModule);



/***/ }),

/***/ 2579:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/view-gallery/view-gallery.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewGalleryPage": () => (/* binding */ ViewGalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _view_gallery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-gallery.page.html?ngResource */ 9499);
/* harmony import */ var _view_gallery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gallery.page.scss?ngResource */ 9693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ViewGalleryPage = class ViewGalleryPage {
    constructor() { }
    ngOnInit() {
    }
};
ViewGalleryPage.ctorParameters = () => [];
ViewGalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-view-gallery',
        template: _view_gallery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_gallery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewGalleryPage);



/***/ }),

/***/ 9693:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/view-gallery/view-gallery.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWdhbGxlcnkucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9499:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/view-gallery/view-gallery.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>view-gallery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_view-gallery_view-gallery_module_ts.js.map