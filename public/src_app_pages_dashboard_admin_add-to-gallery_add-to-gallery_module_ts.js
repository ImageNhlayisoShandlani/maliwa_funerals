"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_add-to-gallery_add-to-gallery_module_ts"],{

/***/ 9536:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-to-gallery/add-to-gallery-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToGalleryPageRoutingModule": () => (/* binding */ AddToGalleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_to_gallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-gallery.page */ 4187);




const routes = [
    {
        path: '',
        component: _add_to_gallery_page__WEBPACK_IMPORTED_MODULE_0__.AddToGalleryPage
    }
];
let AddToGalleryPageRoutingModule = class AddToGalleryPageRoutingModule {
};
AddToGalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddToGalleryPageRoutingModule);



/***/ }),

/***/ 1604:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-to-gallery/add-to-gallery.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToGalleryPageModule": () => (/* binding */ AddToGalleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_to_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-gallery-routing.module */ 9536);
/* harmony import */ var _add_to_gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-gallery.page */ 4187);







let AddToGalleryPageModule = class AddToGalleryPageModule {
};
AddToGalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_to_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddToGalleryPageRoutingModule
        ],
        declarations: [_add_to_gallery_page__WEBPACK_IMPORTED_MODULE_1__.AddToGalleryPage]
    })
], AddToGalleryPageModule);



/***/ }),

/***/ 4187:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-to-gallery/add-to-gallery.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToGalleryPage": () => (/* binding */ AddToGalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _add_to_gallery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-to-gallery.page.html?ngResource */ 3155);
/* harmony import */ var _add_to_gallery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-gallery.page.scss?ngResource */ 3126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AddToGalleryPage = class AddToGalleryPage {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
    }
    ngOnInit() { }
    adminMenu(menu) {
        this.menuCtrl.enable(true, 'adminMenu' + menu);
        this.menuCtrl.open('adminMenu' + menu);
    }
    navigate(num) {
        if (num == 1) {
            this.router.navigate(['admin-home']);
        }
        if (num == 2) {
            this.router.navigate(['add-policy-holder']);
        }
        if (num == 3) {
            this.router.navigate(['admin-members']);
        }
        if (num == 4) {
            this.router.navigate(['admin-deals']);
        }
        if (num == 5) {
            this.router.navigate(['update-web']);
        }
        if (num == 6) {
            this.router.navigate(['add-to-gallery']);
        }
        if (num == 7) {
            this.router.navigate(['pages']);
        }
        if (num == 0) {
            this.router.navigate(['home/landing']);
        }
    }
};
AddToGalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AddToGalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-to-gallery',
        template: _add_to_gallery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_to_gallery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddToGalleryPage);



/***/ }),

/***/ 3126:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-to-gallery/add-to-gallery.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".form-area {\n  margin-top: 1%;\n  width: 50%;\n  margin-left: 25%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\n.form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\n.form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\n.form-area .wrap .office-wrap .test-trr div,\n.form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 10vh;\n  border: 1px solid #0b1c64;\n  color: #0b1c64;\n}\n.form-area .wrap .office-wrap .test-trr textarea {\n  border-color: #0b1c64;\n}\n.form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\n.form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0b1c64;\n  font-size: 1.5rem;\n  color: #fff;\n}\n.form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-area .wrap .office-wrap .bottom-log button {\n  width: 8.5rem;\n  height: 3rem;\n  background: #cd9833;\n  border-radius: 8px;\n  border: 1.5px solid #cd9833;\n  color: #eee;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\n.form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\n.form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .form-area {\n    width: 95% !important;\n    margin-top: 4rem !important;\n    margin-left: 2.5% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .form-area {\n    width: 80% !important;\n    margin-top: 3rem !important;\n    margin-left: 10% !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 85% !important;\n    margin-top: 4rem !important;\n    margin-left: 7.5% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 85% !important;\n    margin-top: 4rem !important;\n    margin-left: 7.5% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 70% !important;\n    margin-top: 4rem !important;\n    margin-left: 15% !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #111 !important;\n  }\n  ion-content .form-area {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10by1nYWxsZXJ5LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE9uZURyaXZlJTIwLSUyMFNBQkMlMjBQdHklMjBMdGRcXERlc2t0b3BcXG90aGVyc1xcaW9uaWNfY29kZVxccHJvX3ByYWNcXG1hbGl3YV9mdW5lcmFsc1xcc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGFkbWluXFxhZGQtdG8tZ2FsbGVyeVxcYWRkLXRvLWdhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDUjtBRENROztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ1Y7QURDUTtFQUNFLHFCQUFBO0FDQ1Y7QURDUTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNDVjtBRENRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NWO0FER007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRFI7QURHUTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RWO0FESVE7RUFDRSxjQUFBO0FDRlY7QURRRTtFQUNFLGFBQUE7QUNOSjtBRFVBO0VBQ0U7SUFDRSwyQkFBQTtFQ1BGO0VEU0U7SUFDRSw0QkFBQTtFQ1BKOztFRFdBO0lBQ0UscUJBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0VDUkY7QUFDRjtBRFlBO0VBQ0U7SUFDRSx3QkFBQTtFQ1ZGOztFRGFBO0lBQ0Usd0JBQUE7RUNWRjs7RURhRTtJQUNFLDZCQUFBO0VDVko7O0VEYUE7SUFDRSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7RUNWRjtBQUNGO0FEY0E7RUFDRTtJQUNFLHdCQUFBO0VDWkY7O0VEZUE7SUFDRSx3QkFBQTtFQ1pGOztFRGVBO0lBQ0UscUJBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0VDWkY7QUFDRjtBRGdCQSwyRkFBQTtBQUVBO0VBQ0U7SUFDRSx3QkFBQTtFQ2ZGOztFRGtCQTtJQUNFLHdCQUFBO0VDZkY7QUFDRjtBRGtCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSx3QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUNoQkY7QUFDRjtBRG9CQSwrR0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ2xCRjs7RURxQkE7SUFDRSx3QkFBQTtFQ2xCRjs7RURxQkE7SUFDRSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7RUNsQkY7QUFDRjtBRHNCQTtFQUNFO0lBQ0UsNkJBQUE7RUNwQkY7RURzQkU7SUFDRSwyQkFBQTtFQ3BCSjtBQUNGIiwiZmlsZSI6ImFkZC10by1nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWFyZWEge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC53cmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcblxyXG4gICAgLm9mZmljZS13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC50ZXN0LXRyciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XHJcblxyXG4gICAgICAgIGRpdixcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYjFjNjQ7XHJcbiAgICAgICAgICBjb2xvcjogIzBiMWM2NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGIxYzY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwYjFjNjQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdHRvbS1sb2cge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDguNXJlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNjZDk4MzM7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNjZDk4MzM7XHJcbiAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wM3JlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsZXJrLXdyYXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSUgIWltcG9ydGFudFxyXG4gICAgO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50XHJcbiAgICA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcuNSUgIWltcG9ydGFudFxyXG4gICAgO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3LjUlICFpbXBvcnRhbnRcclxuICAgIDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSUgIWltcG9ydGFudFxyXG4gICAgO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzExMSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5mb3JtLWFyZWEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvcm0tYXJlYSAud3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYsXG4uZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGIxYzY0O1xuICBjb2xvcjogIzBiMWM2NDtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciB0ZXh0YXJlYSB7XG4gIGJvcmRlci1jb2xvcjogIzBiMWM2NDtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBiMWM2NDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyBidXR0b24ge1xuICB3aWR0aDogOC41cmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQ6ICNjZDk4MzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjY2Q5ODMzO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxLjAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG4uZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyBhIHtcbiAgY29sb3I6ICNjZDk4MzM7XG59XG4uZm9ybS1hcmVhIC5jbGVyay13cmFwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuICBpb24taGVhZGVyIGg0IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMi41JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taGVhZGVyIGg0IHtcbiAgICBtYXJnaW4tbGVmdDogMTRyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLWFyZWEge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLWFyZWEge1xuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDcuNSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzExMSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1jb250ZW50IC5mb3JtLWFyZWEge1xuICAgIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 3155:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-to-gallery/add-to-gallery.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"adminMenu-site-gal\"\r\n  contentId=\"admin-site-gal\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img\r\n            src=\"../../../../../assets/new-logos/GZX-01.png\"\r\n            alt=\"\"\r\n          /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Home</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Add Policy Holder</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(6)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>Add to Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(3)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"people-outline\"></ion-icon>\r\n          <p>Members</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(7)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>\r\n          <p>View Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(4)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n          <p>Deals</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(5)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"construct-outline\"></ion-icon>\r\n          <p>Update Website / App</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"admin-site-gal\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Add to Gallery</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"adminMenu('-site-gal')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Add to Gallery</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"admin-cover\">\r\n  <div class=\"form-area two\" id=\"three\">\r\n    <h3>Add Image to Gallery</h3>\r\n\r\n    <div class=\"wrap\">\r\n      <div class=\"office-wrap\" id=\"off-wrap\">\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"Title\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"calendar-number-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"Date\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"time-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"time\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div><ion-icon name=\"location-outline\"></ion-icon></div>\r\n          <input type=\"text\" placeholder=\"place\" />\r\n        </div>\r\n\r\n        <p class=\"descrip\">Select Image :</p>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"camera-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"file\" name=\"\" id=\"\" />\r\n        </div>\r\n\r\n        <hr />\r\n        <div class=\"bottom-log\">\r\n          <button (click)=\"goToAdmin()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_add-to-gallery_add-to-gallery_module_ts.js.map