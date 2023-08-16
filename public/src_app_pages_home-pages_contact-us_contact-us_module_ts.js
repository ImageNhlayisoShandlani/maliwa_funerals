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

module.exports = ".box-wrapper {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.box-wrapper .banner {\n  width: 100%;\n  height: 90vh;\n  background: url('contact.jpg') no-repeat;\n  background-size: cover;\n}\n.box-wrapper .banner img {\n  width: 100%;\n  height: 100%;\n}\n.box-wrapper .banner .over-banner {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ddd;\n}\n.box-wrapper .banner .over-banner #quote-below {\n  width: 26rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n.box-wrapper .banner .over-banner #quote-below p {\n  color: #aaa;\n}\n.box-wrapper .banner .over-banner #quote-below i {\n  color: #bc3e19;\n  font-size: 1.8rem;\n}\n.box-wrapper .banner .over-banner #quote-below p.name {\n  position: absolute;\n  left: 50%;\n  top: 95%;\n  color: #bc3e19;\n  font-style: italic;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8 rem;\n}\n.box-wrapper .contact-area {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem;\n}\n.box-wrapper .contact-area .contact-wrap {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.box-wrapper .contact-area .contact-wrap .left {\n  width: 35%;\n  height: 90vh;\n}\n.box-wrapper .contact-area .contact-wrap .right {\n  width: 65%;\n  height: 90vh;\n}\n.box-wrapper .contact-area .contact-wrap .left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.box-wrapper .contact-area .contact-wrap .left .single-contact {\n  width: 75%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.box-wrapper .contact-area .contact-wrap .left .single-contact div {\n  width: 3.5rem;\n  height: 3.5rem;\n  background: #1997bc;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.box-wrapper .contact-area .contact-wrap .left .single-contact div ion-icon {\n  font-size: 1.5rem;\n}\n.box-wrapper .contact-area .contact-wrap .left .single-contact h5 {\n  margin-bottom: -0.5rem;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-weight: bold;\n  color: #bc3e19;\n}\n.box-wrapper .contact-area .contact-wrap .left .single-contact p {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #777;\n  font-style: italic;\n}\n.box-wrapper .contact-area .contact-wrap .right {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.box-wrapper .contact-area .contact-wrap .right input {\n  width: 40rem;\n  height: 4rem;\n  margin-bottom: 1.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #777;\n  font-style: italic;\n}\n.box-wrapper .contact-area .contact-wrap .right textarea {\n  width: 40rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #777;\n  font-style: italic;\n}\n.box-wrapper .contact-area .contact-wrap .right button {\n  margin-top: 1rem;\n  width: 7rem;\n  height: 3rem;\n  background: #354461;\n  color: #eee;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.box-wrapper .map-area {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n.box-wrapper .map-area iframe {\n  width: 85%;\n  height: 75vh;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .contact-area {\n    height: 115vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n    padding: 0.5rem !important;\n    margin-bottom: 2.5rem !important;\n  }\n  .contact-area p {\n    font-size: 11px !important;\n  }\n  .contact-area .right,\n.contact-area .left {\n    width: 100% !important;\n  }\n  .contact-area input {\n    width: 94vw !important;\n    height: 2rem !important;\n  }\n  .contact-area textarea {\n    width: 100% !important;\n  }\n  .contact-area .left {\n    height: 45% !important;\n  }\n  .contact-area .right {\n    height: 55% !important;\n  }\n\n  .contact-wrap {\n    flex-direction: column !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n  .contact-wrap .left {\n    flex-direction: row !important;\n    flex-wrap: wrap !important;\n    justify-content: space-evenly !important;\n  }\n  .contact-wrap .left .single-contact {\n    width: 50% !important;\n    height: 50% !important;\n  }\n\n  iframe {\n    width: 95% !important;\n    height: 60vh !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .contact-area {\n    height: 110vh !important;\n  }\n  .contact-area input {\n    width: 100% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .left {\n    height: 80% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n  .contact-area .right {\n    width: 97% !important;\n    height: 39% !important;\n  }\n  .contact-area .right form {\n    width: 100%;\n    height: 100%;\n  }\n  .contact-area .right form input {\n    width: 100% !important;\n    height: 4rem !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  input,\ntextarea {\n    background: #ddd !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPbmVEcml2ZSUyMC0lMjBTQUJDJTIwUHR5JTIwTHRkXFxEZXNrdG9wXFxvdGhlcnNcXGlvbmljX2NvZGVcXHByb19wcmFjXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlc1xcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFTjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ007RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNFLFdBQUE7QUNDVjtBRENRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ1Y7QURFUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDQVY7QURNRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNKSjtBRE1JO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUNKTjtBRE1NO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNKUjtBRE9NO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNMUjtBRE9NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0xSO0FET1E7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDTFY7QURPVTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0xaO0FET1k7RUFDRSxpQkFBQTtBQ0xkO0FEU1U7RUFDRSxzQkFBQTtFQUNBLDZFQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FDUlo7QURXVTtFQUNFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVFo7QURjTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNaUjtBRGNRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWlY7QURlUTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JWO0FEZ0JRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDZFY7QURvQkU7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURvQkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ2xCTjtBRHVCQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxpQ0FBQTtJQUNBLGtDQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQ0FBQTtFQ3BCRjtFRHNCRTtJQUNFLDBCQUFBO0VDcEJKO0VEdUJFOztJQUVFLHNCQUFBO0VDckJKO0VEd0JFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQ3RCSjtFRHlCRTtJQUNFLHNCQUFBO0VDdkJKO0VEMEJFO0lBQ0Usc0JBQUE7RUN4Qko7RUQwQkU7SUFDRSxzQkFBQTtFQ3hCSjs7RUQ0QkE7SUFDRSxpQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUN6QkY7RUQyQkU7SUFDRSw4QkFBQTtJQUNBLDBCQUFBO0lBQ0Esd0NBQUE7RUN6Qko7RUQyQkk7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDekJOOztFRDhCQTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUMzQkY7QUFDRjtBRDhCQTtFQUNFO0lBQ0Usd0JBQUE7RUM1QkY7RUQ4QkU7SUFDRSxzQkFBQTtFQzVCSjtBQUNGO0FEZ0NBLHFHQUFBO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtFQy9CRjtFRGlDRTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUMvQko7QUFDRjtBRG1DQSwyRkFBQTtBQUVBO0VBQ0U7SUFDRSxzQkFBQTtFQ2xDRjtBQUNGO0FEcUNBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtFQ25DRjtFRHFDRTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUNuQ0o7RURzQ0U7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDcENKO0VEc0NJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNwQ047RURzQ007SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VDcENSO0FBQ0Y7QUQwQ0EsK0dBQUE7QUFJQSxxQ0FBQTtBQUVBO0VBQ0U7O0lBRUUsMkJBQUE7RUM1Q0Y7QUFDRiIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAuYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jb250YWN0LmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVyLWJhbm5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZGRkO1xyXG5cclxuICAgICAgI3F1b3RlLWJlbG93IHtcclxuICAgICAgICB3aWR0aDogMjZyZW07XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNiYzNlMTk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAubmFtZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDk1JTtcclxuICAgICAgICAgIGNvbG9yOiAjYmMzZTE5O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOCByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuXHJcbiAgICAuY29udGFjdC13cmFwIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XHJcbiAgICAgIC5sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgfVxyXG4gICAgICAubGVmdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAuc2luZ2xlLWNvbnRhY3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5OTdiYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIixcclxuICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNiYzNlMTk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogNDByZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDdyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzU0NDYxO1xyXG4gICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXAtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIGhlaWdodDogMTE1dmggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQsXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogOTR2dyAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICBoZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LXdyYXAge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5zaW5nbGUtY29udGFjdCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5jb250YWN0LWFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5sZWZ0IHtcclxuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAzOSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxufVxyXG5cclxuLyoqIERBUksgTU9ERSBTQ1JFRU4gTUVESUEgUVVFUklTICoqKi9cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5ib3gtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NvbnRhY3QuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgLm92ZXItYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNkZGQ7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHtcbiAgd2lkdGg6IDI2cmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHAge1xuICBjb2xvcjogI2FhYTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgaSB7XG4gIGNvbG9yOiAjYmMzZTE5O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgcC5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogOTUlO1xuICBjb2xvcjogI2JjM2UxOTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjggcmVtO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5jb250YWN0LXdyYXAge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAuY29udGFjdC13cmFwIC5sZWZ0IHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAucmlnaHQge1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAuY29udGFjdC13cmFwIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAubGVmdCAuc2luZ2xlLWNvbnRhY3Qge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAubGVmdCAuc2luZ2xlLWNvbnRhY3QgZGl2IHtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJhY2tncm91bmQ6ICMxOTk3YmM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5jb250YWN0LXdyYXAgLmxlZnQgLnNpbmdsZS1jb250YWN0IGRpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAubGVmdCAuc2luZ2xlLWNvbnRhY3QgaDUge1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYmMzZTE5O1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAubGVmdCAuc2luZ2xlLWNvbnRhY3QgcCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmNvbnRhY3Qtd3JhcCAucmlnaHQgaW5wdXQge1xuICB3aWR0aDogNDByZW07XG4gIGhlaWdodDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5jb250YWN0LXdyYXAgLnJpZ2h0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDQwcmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5jb250YWN0LXdyYXAgLnJpZ2h0IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQ6ICMzNTQ0NjE7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5ib3gtd3JhcHBlciAubWFwLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYm94LXdyYXBwZXIgLm1hcC1hcmVhIGlmcmFtZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogNzV2aDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5jb250YWN0LWFyZWEge1xuICAgIGhlaWdodDogMTE1dmggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIHAge1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLnJpZ2h0LFxuLmNvbnRhY3QtYXJlYSAubGVmdCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIGlucHV0IHtcbiAgICB3aWR0aDogOTR2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAubGVmdCB7XG4gICAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5yaWdodCB7XG4gICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWN0LXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LXdyYXAgLmxlZnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LXdyYXAgLmxlZnQgLnNpbmdsZS1jb250YWN0IHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jb250YWN0LWFyZWEge1xuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY29udGFjdC1hcmVhIHtcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAubGVmdCB7XG4gICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubGVmdCB7XG4gICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNvbnRhY3QtYXJlYSB7XG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLmxlZnQge1xuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLnJpZ2h0IHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzOSUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5yaWdodCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAucmlnaHQgZm9ybSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDRyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqIERBUksgTU9ERSBTQ1JFRU4gTUVESUEgUVVFUklTICoqKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogI2RkZCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 2747:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.jpg\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n\r\n        <!--\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n      -->\r\n\r\n        <!--\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n      -->\r\n        <li (click)=\"contact()\" class=\"active\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\">\r\n          <a>Login</a>\r\n        </li>\r\n\r\n        <div>\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          <p>087 821 3692</p>\r\n        </div>\r\n\r\n        <button (click)=\"getOffer()\">Get Quote</button>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"banner\">\r\n    <div class=\"over-banner\">\r\n      <div>\r\n        <p>Home / Contact US</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contact-area\">\r\n    <div class=\"contact-wrap\">\r\n      <div class=\"left\">\r\n        <div class=\"single-contact\">\r\n          <div class=\"icon\">\r\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          </div>\r\n          <h5>WhatsApp :</h5>\r\n          <p>\r\n            087 821 3692 <br />\r\n            <br />\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"single-contact\">\r\n          <div class=\"icon\">\r\n            <ion-icon name=\"time\"></ion-icon>\r\n          </div>\r\n          <h5>Operating Hours :</h5>\r\n          <p>\r\n            Mon - Fri, 8am - 16:30 <br />\r\n            Sa, 8am - 13:30\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"single-contact\">\r\n          <div class=\"icon\">\r\n            <ion-icon name=\"location\"></ion-icon>\r\n          </div>\r\n          <h5>Address :</h5>\r\n          <p>\r\n            Shop 11, Canary Walk Mall <br />\r\n            8 Beester Street, Nelspruit 1200<br />\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"single-contact\">\r\n          <div class=\"icon\">\r\n            <ion-icon name=\"call\"></ion-icon>\r\n          </div>\r\n          <h5>Telephone:</h5>\r\n          <p>\r\n            087 821 3692 <br />\r\n            <br />\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <h3>Leave us a message</h3>\r\n        <br />\r\n\r\n        <form>\r\n          <input type=\"text\" placeholder=\"Full Name\" /><br />\r\n          <input type=\"text\" placeholder=\"Email Address\" /><br />\r\n          <input type=\"text\" placeholder=\"Subject\" /><br />\r\n          <textarea cols=\"30\" rows=\"7\" placeholder=\"Your Message\"></textarea>\r\n          <br />\r\n          <button class=\"contact-btn\">Send Message</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"map-area\">\r\n    <iframe\r\n      src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.1357539237495!2d30.98268716469485!3d-25.46592942481442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee84a03e2b21c79%3A0x874c9544af8d1c81!2s8%20Bester%20St%2C%20Nelspruit%20Central%2C%20Mbombela%2C%201201!5e0!3m2!1sen!2sza!4v1692088349053!5m2!1sen!2sza\"\r\n      style=\"border: 0\"\r\n      allowfullscreen=\"\"\r\n      loading=\"lazy\"\r\n      referrerpolicy=\"no-referrer-when-downgrade\"\r\n    ></iframe>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_contact-us_contact-us_module_ts.js.map