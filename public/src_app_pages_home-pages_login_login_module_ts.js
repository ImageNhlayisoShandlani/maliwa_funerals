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
    getOffer() {
        this.router.navigate(['home/admin-landing']);
    }
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

module.exports = "ion-content.box-wrapper {\n  height: 100vh;\n  --background: #ddd;\n}\nion-content.box-wrapper .cover {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area {\n  margin-top: 1%;\n  width: 50%;\n  height: 60%;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nion-content.box-wrapper .form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div,\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #bc3e19;\n  color: #bc3e19;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #bc3e19;\n  font-size: 1.5rem;\n  color: #fff;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log button {\n  width: 8rem;\n  height: 2.5rem;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .form-area {\n    height: 85% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .form-area {\n    width: 90% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  ion-content.box-wrapper {\n    --background: #111 !important;\n  }\n  ion-content.box-wrapper .form-area {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT25lRHJpdmUlMjAtJTIwU0FCQyUyMFB0eSUyMEx0ZFxcRGVza3RvcFxcb3RoZXJzXFxpb25pY19jb2RlXFxwcm9fcHJhY1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGhvbWUtcGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBVjtBREVVOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHVTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNEWjtBREdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSFY7QURLVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0haO0FETVU7RUFDRSxjQUFBO0FDSlo7QURVSTtFQUNFLGFBQUE7QUNSTjtBRGFBO0VBQ0U7SUFDRSxxQkFBQTtFQ1ZGO0FBQ0Y7QURhQTtFQUNFO0lBQ0Usc0JBQUE7RUNYRjtBQUNGO0FEY0EscUdBQUE7QUFFQTtFQUNFO0lBQ0UscUJBQUE7RUNiRjtBQUNGO0FEZ0JBLDJGQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0VDZEY7QUFDRjtBRGlCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQ2ZGO0FBQ0Y7QURrQkEsK0dBQUE7QUFDQTtFQUNFO0lBQ0UscUJBQUE7RUNoQkY7QUFDRjtBRGtCQSxxQ0FBQTtBQUVBO0VBQ0U7SUFDRSw2QkFBQTtFQ2pCRjtFRG1CRTtJQUNFLDJCQUFBO0VDakJKO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGRkO1xyXG5cclxuICAuY292ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC53cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjUlO1xyXG5cclxuICAgICAgLm9mZmljZS13cmFwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC50ZXN0LXRyciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG5cclxuICAgICAgICAgIGRpdixcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JjM2UxOTtcclxuICAgICAgICAgICAgY29sb3I6ICNiYzNlMTk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JjM2UxOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdHRvbS1sb2cge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMDNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsZXJrLXdyYXAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4vKiogREFSSyBNT0RFIFNDUkVFTiBNRURJQSBRVUVSSVMgKioqL1xyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIGlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzExMSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5mb3JtLWFyZWEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjZGRkO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNjAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdixcbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYzNlMTk7XG4gIGNvbG9yOiAjYmMzZTE5O1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjYmMzZTE5O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGJ1dHRvbiB7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cgYSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAuY2xlcmstd3JhcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKiBEQVJLIE1PREUgU0NSRUVOIE1FRElBIFFVRVJJUyAqKiovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 4186:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.jpg\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n\r\n        <!--\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n      -->\r\n\r\n        <!--\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n      -->\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\" class=\"active\">\r\n          <a>Login</a>\r\n        </li>\r\n\r\n        <div>\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          <p>087 821 3692</p>\r\n        </div>\r\n\r\n        <button (click)=\"getOffer()\">Get Quote</button>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"cover\">\r\n    <div class=\"form-area\">\r\n      <h3>Login</h3>\r\n\r\n      <div class=\"wrap\">\r\n        <div class=\"office-wrap\" id=\"off-wrap\">\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"mail-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Admin Email Address\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n\r\n          <div class=\"bottom-log\">\r\n            <button (click)=\"goToAdmin()\" style=\"background: #1997bc\">\r\n              Admin Login\r\n            </button>\r\n            <button (click)=\"goToAdmins()\" style=\"background: #354461\">\r\n              User Login\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_login_login_module_ts.js.map