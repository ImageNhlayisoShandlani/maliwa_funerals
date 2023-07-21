"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home-pages_about-us_about-us_module_ts"],{

/***/ 9453:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home-pages/about-us/about-us-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 7352);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 2153:
/*!**************************************************************!*\
  !*** ./src/app/pages/home-pages/about-us/about-us.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 9453);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 7352);
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/footer/footer.module */ 8593);








let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule,
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage],
    })
], AboutUsPageModule);



/***/ }),

/***/ 7352:
/*!************************************************************!*\
  !*** ./src/app/pages/home-pages/about-us/about-us.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page.html?ngResource */ 3021);
/* harmony import */ var _about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss?ngResource */ 8401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let AboutUsPage = class AboutUsPage {
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
AboutUsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-about-us',
        template: _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutUsPage);



/***/ }),

/***/ 8401:
/*!*************************************************************************!*\
  !*** ./src/app/pages/home-pages/about-us/about-us.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".box-wrapper {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.box-wrapper .banner {\n  width: 100%;\n  height: 90vh;\n  background: url('abh.jpg') no-repeat;\n  background-size: cover;\n}\n.box-wrapper .banner img {\n  width: 100%;\n  height: 100%;\n}\n.box-wrapper .banner .over-banner {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ddd;\n}\n.box-wrapper .banner .over-banner #quote-below {\n  width: 26rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n.box-wrapper .banner .over-banner #quote-below p {\n  color: #aaa;\n}\n.box-wrapper .banner .over-banner #quote-below i {\n  color: #cd9833;\n  font-size: 1.8rem;\n}\n.box-wrapper .banner .over-banner #quote-below p.name {\n  position: absolute;\n  left: 50%;\n  top: 95%;\n  color: #cd9833;\n  font-style: italic;\n  font-family: cursive;\n  font-size: 0.8 rem;\n}\n.box-wrapper .first-about-us {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: #111;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #eee;\n}\n.box-wrapper .first-about-us .history {\n  width: 100%;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.box-wrapper .first-about-us .history .single-history {\n  width: 26%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.box-wrapper .first-about-us .history .single-history p {\n  font-style: italic;\n  font-family: cursive;\n}\n.box-wrapper .first-about-us .history .single-history .img-div {\n  width: 100%;\n  height: 80%;\n  border-radius: 10px;\n  border: 4px solid #fff;\n  margin-right: 0.5rem;\n}\n.box-wrapper .first-about-us .history .single-history .img-div img {\n  width: 100%;\n  height: 100%;\n}\n.box-wrapper .first-about-us .dot-border {\n  width: 3rem;\n  height: 3px;\n  border-top: #cd9833 dotted 4px;\n}\n.box-wrapper .first-about-us .members {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n.box-wrapper .first-about-us .members .single-member {\n  padding-top: 0.85rem;\n  padding-left: 0.5rem;\n  width: 80%;\n  height: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  border: 1px solid #0b1c64;\n  border-radius: 20px;\n  padding-bottom: 1.5rem;\n}\n.box-wrapper .first-about-us .members .single-member .bi {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 55%;\n  height: 100%;\n}\n.box-wrapper .first-about-us .members .single-member .bi p {\n  font-style: italic;\n  color: #aaa;\n}\n.box-wrapper .first-about-us .members .single-member .member-pic {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.box-wrapper .first-about-us .members .single-member .member-pic img {\n  width: 40%;\n  height: 95%;\n  border-radius: 50%;\n}\n.box-wrapper .first-about-us .members .single-member .details {\n  width: 25%;\n  height: 100%;\n}\n.box-wrapper .first-about-us .members .single-member .details h4 {\n  font-style: italic;\n  font-family: cursive;\n  color: #aaa;\n}\n.box-wrapper .first-about-us .members .single-member .details p {\n  color: #cd9833;\n}\n.box-wrapper .first-about-us .members .flex-dot {\n  height: 8vh;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  width: 2px;\n  border-right: #cd9833 4px dotted;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .first-about-us {\n    height: -moz-fit-content;\n    height: fit-content;\n    flex-direction: column !important;\n  }\n  .first-about-us .history {\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    flex-direction: column !important;\n  }\n  .first-about-us .single-history {\n    width: 95% !important;\n    margin-bottom: 2rem !important;\n  }\n  .first-about-us .dot-border {\n    width: 1px !important;\n    height: 4rem !important;\n    border-left: #cd9833 dotted 4px !important;\n    margin-bottom: 2.5rem !important;\n  }\n\n  .single-member {\n    width: 95% !important;\n    height: 100% !important;\n  }\n  .single-member img {\n    height: 40% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .single-member {\n    height: 40vh !important;\n  }\n  .single-member img {\n    width: 78% !important;\n    height: 81% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .history {\n    height: 40vh !important;\n  }\n  .history .img-div {\n    height: 55% !important;\n  }\n\n  .single-member {\n    width: 97% !important;\n  }\n  .single-member img {\n    width: 70% !important;\n    height: 75% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .history {\n    height: 50vh !important;\n  }\n\n  .single-member {\n    width: 97% !important;\n  }\n  .single-member img {\n    width: 85% !important;\n    height: 70% !important;\n  }\n  .single-member .details {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .single-history {\n    height: 50% !important;\n  }\n\n  .single-member {\n    width: 97% !important;\n  }\n  .single-member img {\n    width: 70% !important;\n    height: 75% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  .single-history {\n    height: 70% !important;\n  }\n\n  .single-member {\n    width: 97% !important;\n  }\n  .single-member img {\n    width: 50% !important;\n    height: 90% !important;\n  }\n  .single-member .details {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmhsYXlpc28lMjBTaG9uZGxhbmlcXERlc2t0b3BcXGlvbmljY29kZVxcd29ya1xcbmV3LW1rLWlubm9zXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlc1xcYWJvdXQtdXNcXGFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ047QURDTTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FEQ1E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDVjtBREVRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBVjtBRE1FO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDSko7QURNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNKUjtBRE1RO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ0pWO0FET1E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0xWO0FETVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0paO0FEU0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDUE47QURVSTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUk47QURVTTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNSUjtBRFVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JWO0FEVVU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNSWjtBRFlRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZWO0FEWVU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVlo7QURjUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDWlY7QURjVTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDWlo7QURlVTtFQUNFLGNBQUE7QUNiWjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDaEJSO0FEc0JBO0VBQ0U7SUFDRSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsaUNBQUE7RUNuQkY7RURxQkU7SUFDRSxtQ0FBQTtJQUFBLDhCQUFBO0lBQ0EsaUNBQUE7RUNuQko7RURzQkU7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDcEJKO0VEdUJFO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtJQUNBLDBDQUFBO0lBQ0EsZ0NBQUE7RUNyQko7O0VEeUJBO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtFQ3RCRjtFRHdCRTtJQUNFLHNCQUFBO0VDdEJKO0FBQ0Y7QUQwQkE7RUFDRTtJQUNFLHVCQUFBO0VDeEJGO0VEMEJFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ3hCSjtBQUNGO0FENEJBLHFHQUFBO0FBRUE7RUFDRTtJQUNFLHVCQUFBO0VDM0JGO0VENkJFO0lBQ0Usc0JBQUE7RUMzQko7O0VEK0JBO0lBQ0UscUJBQUE7RUM1QkY7RUQ4QkU7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDNUJKO0FBQ0Y7QURnQ0EsMkZBQUE7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUMvQkY7O0VEa0NBO0lBQ0UscUJBQUE7RUMvQkY7RURpQ0U7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VDL0JKO0VEa0NFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQ2hDSjtBQUNGO0FEb0NBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VDbENGOztFRHFDQTtJQUNFLHFCQUFBO0VDbENGO0VEb0NFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ2xDSjtBQUNGO0FEc0NBLCtHQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VDcENGOztFRHVDQTtJQUNFLHFCQUFBO0VDcENGO0VEc0NFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ3BDSjtFRHVDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNyQ0o7QUFDRiIsImZpbGUiOiJhYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgLmJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvYWJoLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVyLWJhbm5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZGRkO1xyXG5cclxuICAgICAgI3F1b3RlLWJlbG93IHtcclxuICAgICAgICB3aWR0aDogMjZyZW07XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAubmFtZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDk1JTtcclxuICAgICAgICAgIGNvbG9yOiAjY2Q5ODMzO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOCByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlyc3QtYWJvdXQtdXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcblxyXG4gICAgLmhpc3Rvcnkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgIC5zaW5nbGUtaGlzdG9yeSB7XHJcbiAgICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZG90LWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm9yZGVyLXRvcDogI2NkOTgzMyBkb3R0ZWQgNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW1iZXJzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYjFjNjQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAuYmkge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtYmVyLXBpYyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbGV4LWRvdCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAjY2Q5ODMzIDRweCBkb3R0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5maXJzdC1hYm91dC11cyB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5oaXN0b3J5IHtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbmdsZS1oaXN0b3J5IHtcclxuICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvdC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItbGVmdDogI2NkOTgzMyBkb3R0ZWQgNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA0MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuc2luZ2xlLW1lbWJlciB7XHJcbiAgICBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNzglICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogODElICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5oaXN0b3J5IHtcclxuICAgIGhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5pbWctZGl2IHtcclxuICAgICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuaGlzdG9yeSB7XHJcbiAgICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuc2luZ2xlLWhpc3Rvcnkge1xyXG4gICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5zaW5nbGUtaGlzdG9yeSB7XHJcbiAgICBoZWlnaHQ6IDcwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYm94LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9hYmguanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgLm92ZXItYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNkZGQ7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHtcbiAgd2lkdGg6IDI2cmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHAge1xuICBjb2xvcjogI2FhYTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgaSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciAjcXVvdGUtYmVsb3cgcC5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogOTUlO1xuICBjb2xvcjogI2NkOTgzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAwLjggcmVtO1xufVxuLmJveC13cmFwcGVyIC5maXJzdC1hYm91dC11cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNlZWU7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5oaXN0b3J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5oaXN0b3J5IC5zaW5nbGUtaGlzdG9yeSB7XG4gIHdpZHRoOiAyNiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5oaXN0b3J5IC5zaW5nbGUtaGlzdG9yeSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbi5ib3gtd3JhcHBlciAuZmlyc3QtYWJvdXQtdXMgLmhpc3RvcnkgLnNpbmdsZS1oaXN0b3J5IC5pbWctZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5ib3gtd3JhcHBlciAuZmlyc3QtYWJvdXQtdXMgLmhpc3RvcnkgLnNpbmdsZS1oaXN0b3J5IC5pbWctZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5kb3QtYm9yZGVyIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItdG9wOiAjY2Q5ODMzIGRvdHRlZCA0cHg7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5tZW1iZXJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmJveC13cmFwcGVyIC5maXJzdC1hYm91dC11cyAubWVtYmVycyAuc2luZ2xlLW1lbWJlciB7XG4gIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiMWM2NDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cbi5ib3gtd3JhcHBlciAuZmlyc3QtYWJvdXQtdXMgLm1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmJpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ib3gtd3JhcHBlciAuZmlyc3QtYWJvdXQtdXMgLm1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmJpIHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmJveC13cmFwcGVyIC5maXJzdC1hYm91dC11cyAubWVtYmVycyAuc2luZ2xlLW1lbWJlciAubWVtYmVyLXBpYyB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5tZW1iZXItcGljIGltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5kZXRhaWxzIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveC13cmFwcGVyIC5maXJzdC1hYm91dC11cyAubWVtYmVycyAuc2luZ2xlLW1lbWJlciAuZGV0YWlscyBoNCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmJveC13cmFwcGVyIC5maXJzdC1hYm91dC11cyAubWVtYmVycyAuc2luZ2xlLW1lbWJlciAuZGV0YWlscyBwIHtcbiAgY29sb3I6ICNjZDk4MzM7XG59XG4uYm94LXdyYXBwZXIgLmZpcnN0LWFib3V0LXVzIC5tZW1iZXJzIC5mbGV4LWRvdCB7XG4gIGhlaWdodDogOHZoO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMnB4O1xuICBib3JkZXItcmlnaHQ6ICNjZDk4MzMgNHB4IGRvdHRlZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5maXJzdC1hYm91dC11cyB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpcnN0LWFib3V0LXVzIC5oaXN0b3J5IHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5maXJzdC1hYm91dC11cyAuc2luZ2xlLWhpc3Rvcnkge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpcnN0LWFib3V0LXVzIC5kb3QtYm9yZGVyIHtcbiAgICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6ICNjZDk4MzMgZG90dGVkIDRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc2luZ2xlLW1lbWJlciBpbWcge1xuICAgIGhlaWdodDogNDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnNpbmdsZS1tZW1iZXIge1xuICAgIGhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaW5nbGUtbWVtYmVyIGltZyB7XG4gICAgd2lkdGg6IDc4JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODElICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNNQUxMIFRBQkxFVCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5oaXN0b3J5IHtcbiAgICBoZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcbiAgfVxuICAuaGlzdG9yeSAuaW1nLWRpdiB7XG4gICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpbmdsZS1tZW1iZXIgaW1nIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5oaXN0b3J5IHtcbiAgICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpbmdsZS1tZW1iZXIgaW1nIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgfVxuICAuc2luZ2xlLW1lbWJlciAuZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5zaW5nbGUtaGlzdG9yeSB7XG4gICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpbmdsZS1tZW1iZXIgaW1nIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5zaW5nbGUtaGlzdG9yeSB7XG4gICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpbmdsZS1tZW1iZXIgaW1nIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgfVxuICAuc2luZ2xlLW1lbWJlciAuZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 3021:
/*!*************************************************************************!*\
  !*** ./src/app/pages/home-pages/about-us/about-us.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\" class=\"active\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\">\r\n          <a>Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"banner\">\r\n    <div class=\"over-banner\">\r\n      <div>\r\n        <p>Home / About Us</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"first-about-us\">\r\n    <div class=\"heading\">\r\n      <h2>Our History</h2>\r\n    </div>\r\n    <div class=\"history\">\r\n      <div class=\"single-history\">\r\n        <div class=\"img-div\">\r\n          <img src=\"../../../../assets/one.jpg\" alt=\"\" />\r\n        </div>\r\n        <p>Founded In</p>\r\n        <i>1978</i>\r\n      </div>\r\n      <div class=\"dot-border\"></div>\r\n      <div class=\"single-history\">\r\n        <div class=\"img-div\">\r\n          <img src=\"../../../../assets/two.jpg\" alt=\"\" />\r\n        </div>\r\n        <p>Opened our 2nd shop</p>\r\n        <i>1995</i>\r\n      </div>\r\n      <div class=\"dot-border\"></div>\r\n      <div class=\"single-history\">\r\n        <div class=\"img-div\">\r\n          <img src=\"../../../../assets/15942291.jpg\" alt=\"\" />\r\n        </div>\r\n        <p>Franchised</p>\r\n        <i>2020</i>\r\n      </div>\r\n    </div>\r\n\r\n    <br /><br />\r\n    <div class=\"heading\">\r\n      <h2>Our Members</h2>\r\n    </div>\r\n\r\n    <div class=\"members\">\r\n      <div class=\"single-member\">\r\n        <div class=\"bi\">\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r\n            officiis necessitatibus adipisci velit iusto molestias voluptas\r\n            fugit earum, harum nesciunt illum facilis ratione minus ea!\r\n          </p>\r\n        </div>\r\n        <div class=\"member-pic\">\r\n          <img src=\"../../../../assets/mane.jpg\" alt=\"\" />\r\n        </div>\r\n        <div class=\"details\">\r\n          <h4>Peter Drury</h4>\r\n          <p>CEO MHHS</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-dot\"></div>\r\n\r\n      <div class=\"single-member\">\r\n        <div class=\"bi\">\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r\n            officiis necessitatibus adipisci velit iusto molestias voluptas\r\n            fugit earum, harum nesciunt illum facilis ratione minus ea!\r\n          </p>\r\n        </div>\r\n        <div class=\"member-pic\">\r\n          <img src=\"../../../../assets/profile.jpg\" alt=\"\" />\r\n        </div>\r\n        <div class=\"details\">\r\n          <h4>Image Nhlayiso</h4>\r\n          <p>CFO MHHS</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-dot\"></div>\r\n\r\n      <div class=\"single-member\">\r\n        <div class=\"bi\">\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus\r\n            officiis necessitatibus adipisci velit iusto molestias voluptas\r\n            fugit earum, harum nesciunt illum facilis ratione minus ea!\r\n          </p>\r\n        </div>\r\n        <div class=\"member-pic\">\r\n          <img src=\"../../../../assets/mane.jpg\" alt=\"\" />\r\n        </div>\r\n        <div class=\"details\">\r\n          <h4>Peter Drury</h4>\r\n          <p>CEO MHHS</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_about-us_about-us_module_ts.js.map