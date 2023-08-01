"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home-pages_login_login_module_ts"],{

/***/ 2733:
/*!****************************************************************!*\
  !*** ./src/app/pages/home-pages/login/login-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1737);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 823:
/*!********************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2733);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1737);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1737:
/*!******************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 4186);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let LoginPage = class LoginPage {
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
    goToAdmin() {
        this.router.navigate(['admin-home']);
    }
    goToAdmins() {
        this.router.navigate(['user-home']);
    }
    products() {
        this.router.navigate(['home/products']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7497:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-content.box-wrapper {\n  height: 100vh;\n  --background: #ddd;\n}\nion-content.box-wrapper .cover {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area {\n  margin-top: 1%;\n  width: 50%;\n  height: 60%;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nion-content.box-wrapper .form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div,\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cd9833;\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #cd9833;\n  font-size: 1.5rem;\n  color: #fff;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log button {\n  width: 8rem;\n  height: 2rem;\n  background: #0b1c64;\n  border-radius: 8px;\n  border: 1.5px solid #0b1c64;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .form-area {\n    height: 85% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .form-area {\n    width: 90% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  ion-content.box-wrapper {\n    --background: #111 !important;\n  }\n  ion-content.box-wrapper .form-area {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT25lRHJpdmUlMjAtJTIwU0FCQyUyMFB0eSUyMEx0ZFxcRGVza3RvcFxcb3RoZXJzXFxpb25pY19jb2RlXFxwcm9fcHJhY1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGhvbWUtcGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBVjtBREVVOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHVTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNEWjtBREdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSFY7QURLVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0haO0FETVU7RUFDRSxjQUFBO0FDSlo7QURVSTtFQUNFLGFBQUE7QUNSTjtBRGFBO0VBQ0U7SUFDRSxxQkFBQTtFQ1ZGO0FBQ0Y7QURhQTtFQUNFO0lBQ0Usc0JBQUE7RUNYRjtBQUNGO0FEY0EscUdBQUE7QUFFQTtFQUNFO0lBQ0UscUJBQUE7RUNiRjtBQUNGO0FEZ0JBLDJGQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0VDZEY7QUFDRjtBRGlCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQ2ZGO0FBQ0Y7QURrQkEsK0dBQUE7QUFDQTtFQUNFO0lBQ0UscUJBQUE7RUNoQkY7QUFDRjtBRGtCQSxxQ0FBQTtBQUVBO0VBQ0U7SUFDRSw2QkFBQTtFQ2pCRjtFRG1CRTtJQUNFLDJCQUFBO0VDakJKO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGRkO1xyXG5cclxuICAuY292ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC53cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjUlO1xyXG5cclxuICAgICAgLm9mZmljZS13cmFwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC50ZXN0LXRyciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG5cclxuICAgICAgICAgIGRpdixcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkOTgzMztcclxuICAgICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NkOTgzMztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdHRvbS1sb2cge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGIxYzY0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzBiMWM2NDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wM3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2xlcmstd3JhcCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIGhlaWdodDogODUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qKiBEQVJLIE1PREUgU0NSRUVOIE1FRElBIFFVRVJJUyAqKiovXHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmZvcm0tYXJlYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICAtLWJhY2tncm91bmQ6ICNkZGQ7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgZGl2LFxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkOTgzMztcbiAgY29sb3I6ICNjZDk4MzM7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNjZDk4MzM7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cgYnV0dG9uIHtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZDogIzBiMWM2NDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwYjFjNjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGEge1xuICBjb2xvcjogI2NkOTgzMztcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLmNsZXJrLXdyYXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5mb3JtLWFyZWEge1xuICAgIGhlaWdodDogODUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNNQUxMIFRBQkxFVCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5mb3JtLWFyZWEge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5mb3JtLWFyZWEge1xuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKiogREFSSyBNT0RFIFNDUkVFTiBNRURJQSBRVUVSSVMgKioqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tY29udGVudC5ib3gtd3JhcHBlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSB7XG4gICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 4186:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\" class=\"active\">\r\n          <a>Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"cover\">\r\n    <div class=\"form-area\">\r\n      <h3>Login</h3>\r\n\r\n      <div class=\"wrap\">\r\n        <div class=\"office-wrap\" id=\"off-wrap\">\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"mail-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Admin Email Address\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n\r\n          <div class=\"bottom-log\">\r\n            <button (click)=\"goToAdmin()\">Admin Login</button>\r\n            <button (click)=\"goToAdmins()\">User Login</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_login_login_module_ts.js.map