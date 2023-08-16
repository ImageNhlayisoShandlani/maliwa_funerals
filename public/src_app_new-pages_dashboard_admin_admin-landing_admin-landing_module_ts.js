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
        this.router.navigate(['home/gallery']);
    }
    getOffer() {
        this.router.navigate(['home/admin-landing']);
    }
    products() {
        this.router.navigate(['home/products']);
    }
    apply() {
        window.alert('Application Sent!!! \nAgents Will Be Contact With You');
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

module.exports = "ion-content.box-wrapper {\n  height: 100vh;\n  --background: #ddd;\n}\nion-content.box-wrapper .cover {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area {\n  margin-top: 1%;\n  width: 50%;\n  height: 60%;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nion-content.box-wrapper .form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div,\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cd9833;\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #cd9833;\n  font-size: 1.5rem;\n  color: #fff;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log button {\n  width: 10rem;\n  height: 3rem;\n  background: #3e4093;\n  border-radius: 8px;\n  border: 1.5px solid #3e4093;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\nion-content.box-wrapper .form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\nion-content.box-wrapper .form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .form-area {\n    width: 96% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxhbmRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT25lRHJpdmUlMjAtJTIwU0FCQyUyMFB0eSUyMEx0ZFxcRGVza3RvcFxcb3RoZXJzXFxpb25pY19jb2RlXFxwcm9fcHJhY1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxcbmV3LXBhZ2VzXFxkYXNoYm9hcmRcXGFkbWluXFxhZG1pbi1sYW5kaW5nXFxhZG1pbi1sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBVjtBREVVOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHVTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNEWjtBREdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FES1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSFY7QURLVTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0haO0FETVU7RUFDRSxjQUFBO0FDSlo7QURVSTtFQUNFLGFBQUE7QUNSTjtBRGFBO0VBQ0U7SUFDRSxxQkFBQTtFQ1ZGO0FBQ0YiLCJmaWxlIjoiYWRtaW4tbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5ib3gtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAtLWJhY2tncm91bmQ6ICNkZGQ7XHJcblxyXG4gIC5jb3ZlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAud3JhcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDI1JTtcclxuXHJcbiAgICAgIC5vZmZpY2Utd3JhcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAudGVzdC10cnIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuXHJcbiAgICAgICAgICBkaXYsXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZDk4MzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjZDk4MzM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3R0b20tbG9nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTQwOTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjM2U0MDkzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjAzcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jbGVyay13cmFwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudC5ib3gtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIC0tYmFja2dyb3VuZDogI2RkZDtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDElO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYsXG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAudGVzdC10cnIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2Q5ODMzO1xuICBjb2xvcjogI2NkOTgzMztcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2NkOTgzMztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQuYm94LXdyYXBwZXIgLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLmJvdHRvbS1sb2cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudC5ib3gtd3JhcHBlciAuZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyBidXR0b24ge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZDogIzNlNDA5MztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMzZTQwOTM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGEge1xuICBjb2xvcjogI2NkOTgzMztcbn1cbmlvbi1jb250ZW50LmJveC13cmFwcGVyIC5mb3JtLWFyZWEgLmNsZXJrLXdyYXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 6232:
/*!********************************************************************************************!*\
  !*** ./src/app/new-pages/dashboard/admin/admin-landing/admin-landing.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.jpg\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\">\r\n          <a>Admin</a>\r\n        </li>\r\n\r\n        <div>\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          <p>068 6465 2655</p>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"cover\">\r\n    <div class=\"form-area\">\r\n      <h3>Complete form for policy application</h3>\r\n\r\n      <div class=\"wrap\">\r\n        <div class=\"office-wrap\" id=\"off-wrap\">\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Full Name\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Phone No.\" />\r\n          </div>\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"mail-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Email Address\" />\r\n          </div>\r\n\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"ID No.\" />\r\n          </div>\r\n          <div class=\"test-trr\">\r\n            <div>\r\n              <ion-icon name=\"location-outline\"></ion-icon>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Address\" />\r\n          </div>\r\n\r\n          <div class=\"bottom-log\">\r\n            <button (click)=\"apply()\">Send Request</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-pages_dashboard_admin_admin-landing_admin-landing_module_ts.js.map