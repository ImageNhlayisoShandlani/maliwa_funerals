"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home-pages_contact-us_contact-us_module_ts"],{

/***/ 6765:
/*!**************************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 4442);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 8644:
/*!******************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 6765);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 4442);
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/footer/footer.module */ 8593);








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule,
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage],
    })
], ContactUsPageModule);



/***/ }),

/***/ 4442:
/*!****************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _contact_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page.html?ngResource */ 2747);
/* harmony import */ var _contact_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss?ngResource */ 1789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ContactUsPage = class ContactUsPage {
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
    products() {
        this.router.navigate(['home/products']);
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contact-us',
        template: _contact_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactUsPage);



/***/ }),

/***/ 1789:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".box-wrapper {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.box-wrapper .banner {\n  width: 100%;\n  height: 90vh;\n  background: url('contact.jpg') no-repeat;\n  background-size: cover;\n}\n.box-wrapper .banner img {\n  width: 100%;\n  height: 100%;\n}\n.box-wrapper .banner .over-banner {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ddd;\n}\n.box-wrapper .banner .over-banner #quote-below {\n  width: 26rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n.box-wrapper .banner .over-banner #quote-below p {\n  color: #aaa;\n}\n.box-wrapper .banner .over-banner #quote-below i {\n  color: #cd9833;\n  font-size: 1.8rem;\n}\n.box-wrapper .banner .over-banner #quote-below p.name {\n  position: absolute;\n  left: 50%;\n  top: 95%;\n  color: #cd9833;\n  font-style: italic;\n  font-family: cursive;\n  font-size: 0.8 rem;\n}\n.box-wrapper .contact-area {\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.box-wrapper .contact-area .left,\n.box-wrapper .contact-area .right {\n  width: 47%;\n  height: 95%;\n}\n.box-wrapper .contact-area .left iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n}\n.box-wrapper .contact-area .right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.box-wrapper .contact-area .right input {\n  width: 30rem;\n  height: 2rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.box-wrapper .contact-area .right textarea {\n  width: 100%;\n  border-radius: 12px;\n}\n.box-wrapper .contact-area .right button {\n  margin-top: 1rem;\n  width: 7rem;\n  height: 2rem;\n  border-radius: 10px;\n  background: #3e4093;\n  color: #ddd;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .right,\n.contact-area .left {\n    width: 95% !important;\n    height: 50% !important;\n  }\n  .contact-area input {\n    width: 22rem !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .contact-area {\n    height: 110vh !important;\n  }\n  .contact-area input {\n    width: 100% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .left {\n    height: 80% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n  .contact-area .right {\n    width: 97% !important;\n    height: 39% !important;\n  }\n  .contact-area .right form {\n    width: 100%;\n    height: 100%;\n  }\n  .contact-area .right form input {\n    width: 100% !important;\n    height: 4rem !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  input,\ntextarea {\n    background: #ddd !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOaGxheWlzbyUyMFNob25kbGFuaVxcRGVza3RvcFxcaW9uaWNjb2RlXFx3b3JrXFxuZXctbWstaW5ub3NcXG1hbGl3YV9mdW5lcmFsc1xcc3JjXFxhcHBcXHBhZ2VzXFxob21lLXBhZ2VzXFxjb250YWN0LXVzXFxjb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ047QURDTTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FEQ1E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDVjtBREVRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBVjtBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDSko7QURNSTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtBQ0pOO0FEUU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTlI7QURVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNSTjtBRFVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUlI7QURXTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEWU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNWUjtBRGdCQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxpQ0FBQTtJQUNBLGtDQUFBO0VDYkY7RURlRTs7SUFFRSxxQkFBQTtJQUNBLHNCQUFBO0VDYko7RURnQkU7SUFDRSx1QkFBQTtFQ2RKO0FBQ0Y7QURrQkE7RUFDRTtJQUNFLHdCQUFBO0VDaEJGO0VEa0JFO0lBQ0Usc0JBQUE7RUNoQko7QUFDRjtBRG9CQSxxR0FBQTtBQUVBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGlDQUFBO0lBQ0Esa0NBQUE7RUNuQkY7RURxQkU7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDbkJKO0FBQ0Y7QUR1QkEsMkZBQUE7QUFFQTtFQUNFO0lBQ0Usc0JBQUE7RUN0QkY7QUFDRjtBRHlCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGlDQUFBO0lBQ0Esa0NBQUE7RUN2QkY7RUR5QkU7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDdkJKO0VEMEJFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ3hCSjtFRDBCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDeEJOO0VEMEJNO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ3hCUjtBQUNGO0FEOEJBLCtHQUFBO0FBSUEscUNBQUE7QUFFQTtFQUNFOztJQUVFLDJCQUFBO0VDaENGO0FBQ0YiLCJmaWxlIjoiY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgLmJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY29udGFjdC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAub3Zlci1iYW5uZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2RkZDtcclxuXHJcbiAgICAgICNxdW90ZS1iZWxvdyB7XHJcbiAgICAgICAgd2lkdGg6IDI2cmVtO1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLm5hbWUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdG9wOiA5NSU7XHJcbiAgICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjggcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIC5sZWZ0LFxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB3aWR0aDogN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2U0MDkzO1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIGhlaWdodDogMTA4dmggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnJpZ2h0LFxyXG4gICAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMjJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5jb250YWN0LWFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5sZWZ0IHtcclxuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAzOSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxufVxyXG5cclxuLyoqIERBUksgTU9ERSBTQ1JFRU4gTUVESUEgUVVFUklTICoqKi9cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5ib3gtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NvbnRhY3QuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgLm92ZXItYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNkZGQ7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHtcbiAgd2lkdGg6IDI2cmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHAge1xuICBjb2xvcjogI2FhYTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgaSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgcC5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogOTUlO1xuICBjb2xvcjogI2NkOTgzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAwLjggcmVtO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5sZWZ0LFxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLnJpZ2h0IHtcbiAgd2lkdGg6IDQ3JTtcbiAgaGVpZ2h0OiA5NSU7XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAubGVmdCBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAucmlnaHQgaW5wdXQge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLnJpZ2h0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAucmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzNlNDA5MztcbiAgY29sb3I6ICNkZGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY29udGFjdC1hcmVhIHtcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAucmlnaHQsXG4uY29udGFjdC1hcmVhIC5sZWZ0IHtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIGlucHV0IHtcbiAgICB3aWR0aDogMjJyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY29udGFjdC1hcmVhIHtcbiAgICBoZWlnaHQ6IDExMHZoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNvbnRhY3QtYXJlYSB7XG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLmxlZnQge1xuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmxlZnQge1xuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5jb250YWN0LWFyZWEge1xuICAgIGhlaWdodDogMTA4dmggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5sZWZ0IHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5yaWdodCB7XG4gICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzklICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAucmlnaHQgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb250YWN0LWFyZWEgLnJpZ2h0IGZvcm0gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiBEQVJLIE1PREUgU0NSRUVOIE1FRElBIFFVRVJJUyAqKiovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlucHV0LFxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6ICNkZGQgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 2747:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\" (scroll)=\"onWindowScroll();\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/funeral.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\" class=\"active\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\">\r\n          <a>Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"banner\">\r\n    <div class=\"over-banner\">\r\n      <div>\r\n        <p>Home / Contact US</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contact-area\">\r\n    <div class=\"left\">\r\n      <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.567115601636!2d27.809544514688255!3d-26.275709273264813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a44259966143%3A0x7aa9c9ccd07a406f!2sProtea%20Glen%20Mall!5e0!3m2!1sen!2sza!4v1634576850749!5m2!1sen!2sza\"\r\n        style=\"border: 0\"\r\n        allowfullscreen=\"\"\r\n        loading=\"lazy\"\r\n      ></iframe>\r\n    </div>\r\n    <div class=\"right\">\r\n      <h3>Leave us a message</h3>\r\n      <br />\r\n\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Full Name\" /><br />\r\n        <input type=\"text\" placeholder=\"Subject\" /><br />\r\n        <textarea cols=\"30\" rows=\"7\" placeholder=\"Your Message\"></textarea>\r\n        <br />\r\n        <button class=\"contact-btn\">Send Message</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_contact-us_contact-us_module_ts.js.map