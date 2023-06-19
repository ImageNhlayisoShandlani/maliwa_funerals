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

module.exports = "ion-content.box-wrapper {\n  height: 100vh;\n  --background: #ddd;\n}\nion-content.box-wrapper .cover {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area {\n  margin-top: 1%;\n  width: 50%;\n  height: 60%;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nion-content.box-wrapper .form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div,\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cd9833;\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #cd9833;\n  font-size: 1.5rem;\n  color: #fff;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log button {\n  width: 8rem;\n  height: 2rem;\n  background: #3e4093;\n  border-radius: 8px;\n  border: 1.5px solid #3e4093;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .form-area {\n    height: 85% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .form-area {\n    width: 90% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  .form-area {\n    width: 85% !important;\n  }\n}\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  ion-content.box-wrapper {\n    --background: #111 !important;\n  }\n  ion-content.box-wrapper .form-area {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmhsYXlpc28lMjBTaG9uZGxhbmlcXERlc2t0b3BcXGlvbmljY29kZVxcd29ya1xcbmV3LW1rLWlubm9zXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FWO0FERVU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNBWjtBREdVO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0RaO0FER1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRFo7QURLUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNIVjtBREtVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSFo7QURNVTtFQUNFLGNBQUE7QUNKWjtBRFVJO0VBQ0UsYUFBQTtBQ1JOO0FEYUE7RUFDRTtJQUNFLHFCQUFBO0VDVkY7QUFDRjtBRGFBO0VBQ0U7SUFDRSxzQkFBQTtFQ1hGO0FBQ0Y7QURjQSxxR0FBQTtBQUVBO0VBQ0U7SUFDRSxxQkFBQTtFQ2JGO0FBQ0Y7QURnQkEsMkZBQUE7QUFDQTtFQUNFO0lBQ0UscUJBQUE7RUNkRjtBQUNGO0FEaUJBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0VDZkY7QUFDRjtBRGtCQSwrR0FBQTtBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQ2hCRjtBQUNGO0FEa0JBLHFDQUFBO0FBRUE7RUFDRTtJQUNFLDZCQUFBO0VDakJGO0VEbUJFO0lBQ0UsMkJBQUE7RUNqQko7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5ib3gtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAtLWJhY2tncm91bmQ6ICNkZGQ7XHJcblxyXG4gIC5jb3ZlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLndyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyNSU7XHJcblxyXG4gICAgICAub2ZmaWNlLXdyYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgLnRlc3QtdHJyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XHJcblxyXG4gICAgICAgICAgZGl2LFxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2Q5ODMzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tLWxvZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTQwOTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjM2U0MDkzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjAzcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jbGVyay13cmFwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNNQUxMIFRBQkxFVCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuZm9ybS1hcmVhIHtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyoqIERBUksgTU9ERSBTQ1JFRU4gTUVESUEgUVVFUklTICoqKi9cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICBpb24tY29udGVudC5ib3gtd3JhcHBlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcclxuXHJcbiAgICAuZm9ybS1hcmVhIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudC5ib3gtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIC0tYmFja2dyb3VuZDogI2RkZDtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDElO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYsXG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2Q5ODMzO1xuICBjb2xvcjogI2NkOTgzMztcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2NkOTgzMztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyBidXR0b24ge1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjM2U0MDkzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzNlNDA5MztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cgYSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAuY2xlcmstd3JhcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKiBEQVJLIE1PREUgU0NSRUVOIE1FRElBIFFVRVJJUyAqKiovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1jb250ZW50LmJveC13cmFwcGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 4186:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home-pages/login/login.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\" (scroll)=\"onWindowScroll();\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/funeral.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\" class=\"active\">\r\n          <a>Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"cover\">\r\n    <div class=\"form-area\">\r\n      <h3>Login</h3>\r\n\r\n      <div class=\"wrap\">\r\n        <div class=\"office-wrap\" id=\"off-wrap\">\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"mail-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Admin Email Address\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"password\" placeholder=\"Password\" />\r\n          </div>\r\n\r\n          <div class=\"bottom-log\">\r\n            <button (click)=\"goToAdmin()\">Admin Login</button>\r\n            <button (click)=\"goToAdmins()\">User Login</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_login_login_module_ts.js.map