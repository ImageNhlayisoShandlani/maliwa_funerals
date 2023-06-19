"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-pages_dashboard_admin_admin-landing_admin-landing_module_ts"],{

/***/ 3875:
/*!*****************************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLandingPageRoutingModule": () => (/* binding */ AdminLandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-landing.page */ 9645);




const routes = [
    {
        path: '',
        component: _admin_landing_page__WEBPACK_IMPORTED_MODULE_0__.AdminLandingPage
    }
];
let AdminLandingPageRoutingModule = class AdminLandingPageRoutingModule {
};
AdminLandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminLandingPageRoutingModule);



/***/ }),

/***/ 7111:
/*!*********************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLandingPageModule": () => (/* binding */ AdminLandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-landing-routing.module */ 3875);
/* harmony import */ var _admin_landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-landing.page */ 9645);







let AdminLandingPageModule = class AdminLandingPageModule {
};
AdminLandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminLandingPageRoutingModule
        ],
        declarations: [_admin_landing_page__WEBPACK_IMPORTED_MODULE_1__.AdminLandingPage]
    })
], AdminLandingPageModule);



/***/ }),

/***/ 9645:
/*!*******************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLandingPage": () => (/* binding */ AdminLandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-landing.page.html?ngResource */ 6232);
/* harmony import */ var _admin_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-landing.page.scss?ngResource */ 9220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let AdminLandingPage = class AdminLandingPage {
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
        this.router.navigate(['home/about-us']);
    }
    contact() {
        this.router.navigate(['home/contact-us']);
    }
    gallery() {
        this.router.navigate(['gallery']);
    }
    getOffer() {
        this.router.navigate(['home/admin-landing']);
    }
};
AdminLandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AdminLandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admin-landing',
        template: _admin_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminLandingPage);



/***/ }),

/***/ 9220:
/*!********************************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content.box-wrapper {\n  height: 100vh;\n  --background: #ddd;\n}\nion-content.box-wrapper .cover {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area {\n  margin-top: 1%;\n  width: 50%;\n  height: 60%;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nion-content.box-wrapper .form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div,\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cd9833;\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #cd9833;\n  font-size: 1.5rem;\n  color: #fff;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log button {\n  width: 10rem;\n  height: 3rem;\n  background: #3e4093;\n  border-radius: 8px;\n  border: 1.5px solid #3e4093;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxhbmRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmhsYXlpc28lMjBTaG9uZGxhbmlcXERlc2t0b3BcXGlvbmljY29kZVxcd29ya1xcbmV3LW1rLWlubm9zXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxuZXctcGFnZXNcXGRhc2hib2FyZFxcYWRtaW5cXGFkbWluLWxhbmRpbmdcXGFkbWluLWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FWO0FERVU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNBWjtBREdVO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0RaO0FER1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRFo7QURLUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNIVjtBREtVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSFo7QURNVTtFQUNFLGNBQUE7QUNKWjtBRFVJO0VBQ0UsYUFBQTtBQ1JOO0FEYUE7RUFDRTtJQUNFLHFCQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJhZG1pbi1sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC0tYmFja2dyb3VuZDogI2RkZDtcclxuXHJcbiAgLmNvdmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC53cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjUlO1xyXG5cclxuICAgICAgLm9mZmljZS13cmFwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC50ZXN0LXRyciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG5cclxuICAgICAgICAgIGRpdixcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkOTgzMztcclxuICAgICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NkOTgzMztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdHRvbS1sb2cge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNDA5MztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMzZTQwOTM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMDNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsZXJrLXdyYXAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjZGRkO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdixcbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZDk4MzM7XG4gIGNvbG9yOiAjY2Q5ODMzO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjY2Q5ODMzO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kOiAjM2U0MDkzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzNlNDA5MztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cgYSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAuY2xlcmstd3JhcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 6232:
/*!********************************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\" (scroll)=\"onWindowScroll();\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/funeral.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n        <li (click)=\"admin()\">\r\n          <a>Admin</a>\r\n        </li>\r\n\r\n        <div class=\"search-area\">\r\n          <ion-input placeholder=\"Type a keyword\"></ion-input>\r\n          <ion-button>SEARCH</ion-button>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"cover\">\r\n    <div class=\"form-area\">\r\n      <h3>Complte form for policy application</h3>\r\n\r\n      <div class=\"wrap\">\r\n        <div class=\"office-wrap\" id=\"off-wrap\">\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Full\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Phone No.\" />\r\n          </div>\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"mail-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Admin Email Address\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"location-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Address\" />\r\n          </div>\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"ID No.\" />\r\n          </div>\r\n\r\n          <div class=\"bottom-log\">\r\n            <button (click)=\"goToAdmin()\">Send Request</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-pages_dashboard_admin_admin-landing_admin-landing_module_ts.js.map