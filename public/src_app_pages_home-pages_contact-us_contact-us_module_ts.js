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

module.exports = ".box-wrapper {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.box-wrapper .banner {\n  width: 100%;\n  height: 90vh;\n  background: url('contact.jpg') no-repeat;\n  background-size: cover;\n}\n.box-wrapper .banner img {\n  width: 100%;\n  height: 100%;\n}\n.box-wrapper .banner .over-banner {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ddd;\n}\n.box-wrapper .banner .over-banner #quote-below {\n  width: 26rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n.box-wrapper .banner .over-banner #quote-below p {\n  color: #aaa;\n}\n.box-wrapper .banner .over-banner #quote-below i {\n  color: #cd9833;\n  font-size: 1.8rem;\n}\n.box-wrapper .banner .over-banner #quote-below p.name {\n  position: absolute;\n  left: 50%;\n  top: 95%;\n  color: #cd9833;\n  font-style: italic;\n  font-family: cursive;\n  font-size: 0.8 rem;\n}\n.box-wrapper .contact-area {\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.box-wrapper .contact-area .left,\n.box-wrapper .contact-area .right {\n  width: 47%;\n  height: 95%;\n}\n.box-wrapper .contact-area .left iframe {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n}\n.box-wrapper .contact-area .right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.box-wrapper .contact-area .right input {\n  width: 30rem;\n  height: 2rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.box-wrapper .contact-area .right textarea {\n  width: 100%;\n  border-radius: 12px;\n}\n.box-wrapper .contact-area .right button {\n  margin-top: 1rem;\n  width: 7rem;\n  height: 2rem;\n  border-radius: 10px;\n  background: #0b1c64;\n  color: #ddd;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .right,\n.contact-area .left {\n    width: 95% !important;\n    height: 50% !important;\n  }\n  .contact-area input {\n    width: 22rem !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .contact-area {\n    height: 110vh !important;\n  }\n  .contact-area input {\n    width: 100% !important;\n  }\n}\n/********************************** sMALL TABLET VIEW ***********************************************/\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  .left {\n    height: 80% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .contact-area {\n    height: 108vh !important;\n    flex-direction: column !important;\n    justify-content: center !important;\n  }\n  .contact-area .left {\n    width: 97% !important;\n    height: 60% !important;\n  }\n  .contact-area .right {\n    width: 97% !important;\n    height: 39% !important;\n  }\n  .contact-area .right form {\n    width: 100%;\n    height: 100%;\n  }\n  .contact-area .right form input {\n    width: 100% !important;\n    height: 4rem !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n/** DARK MODE SCREEN MEDIA QUERIS ***/\n@media (prefers-color-scheme: dark) {\n  input,\ntextarea {\n    background: #ddd !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPbmVEcml2ZSUyMC0lMjBTQUJDJTIwUHR5JTIwTHRkXFxEZXNrdG9wXFxvdGhlcnNcXGlvbmljX2NvZGVcXHByb19wcmFjXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlc1xcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFTjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ007RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNFLFdBQUE7QUNDVjtBRENRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ1Y7QURFUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQVY7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FETUk7O0VBRUUsVUFBQTtFQUNBLFdBQUE7QUNKTjtBRFFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05SO0FEVUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDUk47QURVTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1JSO0FEV007RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDVlI7QURnQkE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtFQ2JGO0VEZUU7O0lBRUUscUJBQUE7SUFDQSxzQkFBQTtFQ2JKO0VEZ0JFO0lBQ0UsdUJBQUE7RUNkSjtBQUNGO0FEa0JBO0VBQ0U7SUFDRSx3QkFBQTtFQ2hCRjtFRGtCRTtJQUNFLHNCQUFBO0VDaEJKO0FBQ0Y7QURvQkEscUdBQUE7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxpQ0FBQTtJQUNBLGtDQUFBO0VDbkJGO0VEcUJFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ25CSjtBQUNGO0FEdUJBLDJGQUFBO0FBRUE7RUFDRTtJQUNFLHNCQUFBO0VDdEJGO0FBQ0Y7QUR5QkEsOEdBQUE7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxpQ0FBQTtJQUNBLGtDQUFBO0VDdkJGO0VEeUJFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ3ZCSjtFRDBCRTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUN4Qko7RUQwQkk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ3hCTjtFRDBCTTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUN4QlI7QUFDRjtBRDhCQSwrR0FBQTtBQUlBLHFDQUFBO0FBRUE7RUFDRTs7SUFFRSwyQkFBQTtFQ2hDRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIC5iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NvbnRhY3QuanBnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXItYmFubmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNkZGQ7XHJcblxyXG4gICAgICAjcXVvdGUtYmVsb3cge1xyXG4gICAgICAgIHdpZHRoOiAyNnJlbTtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcC5uYW1lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogOTUlO1xyXG4gICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44IHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LWFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAubGVmdCxcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDdyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBiMWM2NDtcclxuICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5yaWdodCxcclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDIycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDExMHZoICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuY29udGFjdC1hcmVhIHtcclxuICAgIGhlaWdodDogMTA4dmggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAubGVmdCB7XHJcbiAgICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5jb250YWN0LWFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMzklICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbn1cclxuXHJcbi8qKiBEQVJLIE1PREUgU0NSRUVOIE1FRElBIFFVRVJJUyAqKiovXHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuYm94LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jb250YWN0LmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ib3gtd3JhcHBlciAuYmFubmVyIC5vdmVyLWJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZGRkO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgLm92ZXItYmFubmVyICNxdW90ZS1iZWxvdyB7XG4gIHdpZHRoOiAyNnJlbTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJveC13cmFwcGVyIC5iYW5uZXIgLm92ZXItYmFubmVyICNxdW90ZS1iZWxvdyBwIHtcbiAgY29sb3I6ICNhYWE7XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IGkge1xuICBjb2xvcjogI2NkOTgzMztcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG4uYm94LXdyYXBwZXIgLmJhbm5lciAub3Zlci1iYW5uZXIgI3F1b3RlLWJlbG93IHAubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDk1JTtcbiAgY29sb3I6ICNjZDk4MzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMC44IHJlbTtcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYm94LXdyYXBwZXIgLmNvbnRhY3QtYXJlYSAubGVmdCxcbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5yaWdodCB7XG4gIHdpZHRoOiA0NyU7XG4gIGhlaWdodDogOTUlO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLmxlZnQgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLnJpZ2h0IGlucHV0IHtcbiAgd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5ib3gtd3JhcHBlciAuY29udGFjdC1hcmVhIC5yaWdodCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmJveC13cmFwcGVyIC5jb250YWN0LWFyZWEgLnJpZ2h0IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwYjFjNjQ7XG4gIGNvbG9yOiAjZGRkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNvbnRhY3QtYXJlYSB7XG4gICAgaGVpZ2h0OiAxMDh2aCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLnJpZ2h0LFxuLmNvbnRhY3QtYXJlYSAubGVmdCB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSBpbnB1dCB7XG4gICAgd2lkdGg6IDIycmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmNvbnRhY3QtYXJlYSB7XG4gICAgaGVpZ2h0OiAxMTB2aCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNNQUxMIFRBQkxFVCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5jb250YWN0LWFyZWEge1xuICAgIGhlaWdodDogMTA4dmggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5sZWZ0IHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5sZWZ0IHtcbiAgICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY29udGFjdC1hcmVhIHtcbiAgICBoZWlnaHQ6IDEwOHZoICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAubGVmdCB7XG4gICAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhY3QtYXJlYSAucmlnaHQge1xuICAgIHdpZHRoOiA5NyUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM5JSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWN0LWFyZWEgLnJpZ2h0IGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuY29udGFjdC1hcmVhIC5yaWdodCBmb3JtIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiogREFSSyBNT0RFIFNDUkVFTiBNRURJQSBRVUVSSVMgKioqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpbnB1dCxcbnRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 2747:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-pages/contact-us/contact-us.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"desktop-menu\">\r\n      <a class=\"logo\">\r\n        <img src=\"../../../../assets/new-logos/GZX-01.png\" />\r\n      </a>\r\n\r\n      <ul>\r\n        <li (click)=\"home()\">\r\n          <a>Home</a>\r\n        </li>\r\n        <li (click)=\"products()\">\r\n          <a>Products</a>\r\n        </li>\r\n        <li (click)=\"gallery()\">\r\n          <a>Gallery</a>\r\n        </li>\r\n        <li (click)=\"about()\">\r\n          <a>About US</a>\r\n        </li>\r\n        <li (click)=\"contact()\" class=\"active\">\r\n          <a>Contact US</a>\r\n        </li>\r\n\r\n        <li (click)=\"admin()\">\r\n          <a>Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-wrapper\">\r\n  <div class=\"banner\">\r\n    <div class=\"over-banner\">\r\n      <div>\r\n        <p>Home / Contact US</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contact-area\">\r\n    <div class=\"left\">\r\n      <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.567115601636!2d27.809544514688255!3d-26.275709273264813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a44259966143%3A0x7aa9c9ccd07a406f!2sProtea%20Glen%20Mall!5e0!3m2!1sen!2sza!4v1634576850749!5m2!1sen!2sza\"\r\n        style=\"border: 0\"\r\n        allowfullscreen=\"\"\r\n        loading=\"lazy\"\r\n      ></iframe>\r\n    </div>\r\n    <div class=\"right\">\r\n      <h3>Leave us a message</h3>\r\n      <br />\r\n\r\n      <form>\r\n        <input type=\"text\" placeholder=\"Full Name\" /><br />\r\n        <input type=\"text\" placeholder=\"Subject\" /><br />\r\n        <textarea cols=\"30\" rows=\"7\" placeholder=\"Your Message\"></textarea>\r\n        <br />\r\n        <button class=\"contact-btn\">Send Message</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home-pages_contact-us_contact-us_module_ts.js.map