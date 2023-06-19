"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_admin-deals_admin-deals_module_ts"],{

/***/ 9254:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-deals/admin-deals-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDealsPageRoutingModule": () => (/* binding */ AdminDealsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_deals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-deals.page */ 252);




const routes = [
    {
        path: '',
        component: _admin_deals_page__WEBPACK_IMPORTED_MODULE_0__.AdminDealsPage
    }
];
let AdminDealsPageRoutingModule = class AdminDealsPageRoutingModule {
};
AdminDealsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminDealsPageRoutingModule);



/***/ }),

/***/ 5505:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-deals/admin-deals.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDealsPageModule": () => (/* binding */ AdminDealsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_deals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-deals-routing.module */ 9254);
/* harmony import */ var _admin_deals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-deals.page */ 252);







let AdminDealsPageModule = class AdminDealsPageModule {
};
AdminDealsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_deals_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminDealsPageRoutingModule
        ],
        declarations: [_admin_deals_page__WEBPACK_IMPORTED_MODULE_1__.AdminDealsPage]
    })
], AdminDealsPageModule);



/***/ }),

/***/ 252:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-deals/admin-deals.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDealsPage": () => (/* binding */ AdminDealsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_deals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-deals.page.html?ngResource */ 570);
/* harmony import */ var _admin_deals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-deals.page.scss?ngResource */ 5841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AdminDealsPage = class AdminDealsPage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
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
AdminDealsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
AdminDealsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-deals',
        template: _admin_deals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_deals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminDealsPage);



/***/ }),

/***/ 5841:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-deals/admin-deals.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".heading {\n  display: contents;\n  justify-content: flex-start !important;\n  padding-left: 2% !important;\n}\n.heading h2 {\n  margin-left: 5%;\n  color: #333;\n}\n.deals {\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.deals .single-deal {\n  width: 26%;\n  height: 90%;\n  background: #eee;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n.deals .single-deal .img {\n  width: 100%;\n  height: 40%;\n}\n.deals .single-deal .img img {\n  width: 100%;\n  height: 100%;\n}\n.deals .single-deal .text {\n  padding-top: 0.8rem;\n  padding-left: 0.5rem;\n  width: 100%;\n  height: 50%;\n}\n.deals .single-deal .text h5 {\n  color: #333;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n.deals .single-deal .text p {\n  color: #777;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.deals .single-deal .text i {\n  color: #cd9833;\n  font-family: cursive;\n  font-weight: bolder;\n  font-size: 1.2rem;\n}\n.deals .single-deal .btns {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.deals .single-deal .btns button {\n  width: 6.5rem;\n  height: 80%;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.deals .single-deal .btns .update {\n  background: transparent;\n  border: 1px solid #cd9833;\n  color: #cd9833;\n  font-size: 1.18rem;\n}\n.deals .single-deal .btns .remove {\n  background: red;\n  color: #ddd;\n  font-size: 1.18rem;\n}\n.add {\n  margin-left: 5%;\n  width: 6rem;\n  background: #3e4093;\n  color: #ddd;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  height: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: 1.18rem;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .deals {\n    height: 210vh !important;\n    justify-content: center !important;\n    flex-direction: column !important;\n  }\n  .deals .single-deal {\n    width: 96% !important;\n    height: 32% !important;\n    margin-bottom: 1rem !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header {\n    display: flex !important;\n  }\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .deals {\n    height: 148vh !important;\n  }\n  .deals .single-deal {\n    width: 31% !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .deals {\n    height: 210vh !important;\n    justify-content: center !important;\n    flex-direction: column !important;\n  }\n  .deals .single-deal {\n    width: 80% !important;\n    height: 32% !important;\n    margin-bottom: 1rem !important;\n  }\n  .deals .single-deal .img {\n    height: 48% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .deals {\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n  }\n  .deals .single-deal {\n    width: 45% !important;\n    height: 88vh !important;\n    margin-bottom: 3rem;\n  }\n  .deals .single-deal .img {\n    height: 53% !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .deals {\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    justify-content: center !important;\n    flex-direction: column !important;\n  }\n  .deals .single-deal {\n    width: 80% !important;\n    height: 50vh !important;\n    margin-bottom: 1rem !important;\n  }\n  .deals .single-deal .img {\n    height: 55% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .deals {\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n  }\n  .deals .single-deal {\n    width: 45% !important;\n    height: 88vh !important;\n    margin-bottom: 3rem;\n  }\n  .deals .single-deal .img {\n    height: 53% !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #111 !important;\n  }\n  ion-content .text,\nion-content .btns {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRlYWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5obGF5aXNvJTIwU2hvbmRsYW5pXFxEZXNrdG9wXFxpb25pY2NvZGVcXHdvcmtcXG5ldy1tay1pbm5vc1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcYWRtaW5cXGFkbWluLWRlYWxzXFxhZG1pbi1kZWFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSjtBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRkFBQTtBQ0FKO0FER0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0ROO0FER007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RSO0FES0k7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNITjtBREtNO0VBQ0UsV0FBQTtFQUNBLHNFQUFBO0FDSFI7QURNTTtFQUNFLFdBQUE7RUFDQSw2RUFBQTtBQ0pSO0FEUU07RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTlI7QURVSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1JOO0FEVU07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1JSO0FEV007RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVFI7QURZTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRGdCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2JGO0FEZ0JBO0VBQ0U7SUFDRSwyQkFBQTtFQ2JGO0VEZUU7SUFDRSw0QkFBQTtFQ2JKOztFRGdCQTtJQUNFLHdCQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtFQ2JGO0VEZUU7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUNiSjtBQUNGO0FEaUJBO0VBQ0U7SUFDRSx3QkFBQTtFQ2ZGOztFRGlCQTtJQUNFLHdCQUFBO0VDZEY7RURlRTtJQUNFLDZCQUFBO0VDYko7O0VEaUJBO0lBQ0Usd0JBQUE7RUNkRjtFRGdCRTtJQUNFLHFCQUFBO0VDZEo7QUFDRjtBRGtCQTtFQUNFO0lBQ0Usd0JBQUE7RUNoQkY7O0VEbUJBO0lBQ0Usd0JBQUE7RUNoQkY7O0VEa0JBO0lBQ0Usd0JBQUE7SUFDQSxrQ0FBQTtJQUNBLGlDQUFBO0VDZkY7RURpQkU7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUNmSjtFRGlCSTtJQUNFLHNCQUFBO0VDZk47QUFDRjtBRG9CQSwyRkFBQTtBQUVBO0VBQ0U7SUFDRSx3QkFBQTtFQ25CRjs7RURzQkE7SUFDRSx3QkFBQTtFQ25CRjs7RURzQkE7SUFDRSxtQ0FBQTtJQUFBLDhCQUFBO0VDbkJGO0VEcUJFO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VDbkJKO0VEcUJJO0lBQ0Usc0JBQUE7RUNuQk47QUFDRjtBRHdCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSx3QkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxtQ0FBQTtJQUFBLDhCQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtFQ3RCRjtFRHdCRTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSw4QkFBQTtFQ3RCSjtFRHdCSTtJQUNFLHNCQUFBO0VDdEJOO0FBQ0Y7QUQyQkEsK0dBQUE7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7RUN6QkY7O0VENEJBO0lBQ0Usd0JBQUE7RUN6QkY7O0VENEJBO0lBQ0UsbUNBQUE7SUFBQSw4QkFBQTtFQ3pCRjtFRDJCRTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ3pCSjtFRDJCSTtJQUNFLHNCQUFBO0VDekJOO0FBQ0Y7QUQ4QkE7RUFDRTtJQUNFLDZCQUFBO0VDNUJGO0VEOEJFOztJQUVFLDJCQUFBO0VDNUJKO0FBQ0YiLCJmaWxlIjoiYWRtaW4tZGVhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVhbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIC5zaW5nbGUtZGVhbCB7XHJcbiAgICB3aWR0aDogMjYlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDEzcHggMjdweCAtNXB4LFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDhweCAxNnB4IC04cHg7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwJTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG5cclxuICAgICAgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsXHJcbiAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogI2NkOTgzMztcclxuICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bnMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51cGRhdGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZDk4MzM7XHJcbiAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtb3ZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE4cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgYmFja2dyb3VuZDogIzNlNDA5MztcclxuICBjb2xvcjogI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXNpemU6IDEuMThyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmRlYWxzIHtcclxuICAgIGhlaWdodDogMjEwdmggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1kZWFsIHtcclxuICAgICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVhbHMge1xyXG4gICAgaGVpZ2h0OiAxNDh2aCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zaW5nbGUtZGVhbCB7XHJcbiAgICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGVhbHMge1xyXG4gICAgaGVpZ2h0OiAyMTB2aCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2luZ2xlLWRlYWwge1xyXG4gICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIGhlaWdodDogNDglICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRlYWxzIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2luZ2xlLWRlYWwge1xyXG4gICAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogODh2aCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MyUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRlYWxzIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1kZWFsIHtcclxuICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kZWFscyB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1kZWFsIHtcclxuICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDg4dmggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIGhlaWdodDogNTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcclxuXHJcbiAgICAudGV4dCxcclxuICAgIC5idG5zIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGluZyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuLmhlYWRpbmcgaDIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZGVhbHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmRlYWxzIC5zaW5nbGUtZGVhbCB7XG4gIHdpZHRoOiAyNiU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggOHB4IDE2cHggLThweDtcbn1cbi5kZWFscyAuc2luZ2xlLWRlYWwgLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbn1cbi5kZWFscyAuc2luZ2xlLWRlYWwgLmltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRlYWxzIC5zaW5nbGUtZGVhbCAudGV4dCB7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uZGVhbHMgLnNpbmdsZS1kZWFsIC50ZXh0IGg1IHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcbn1cbi5kZWFscyAuc2luZ2xlLWRlYWwgLnRleHQgcCB7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbn1cbi5kZWFscyAuc2luZ2xlLWRlYWwgLnRleHQgaSB7XG4gIGNvbG9yOiAjY2Q5ODMzO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGVhbHMgLnNpbmdsZS1kZWFsIC5idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5kZWFscyAuc2luZ2xlLWRlYWwgLmJ0bnMgYnV0dG9uIHtcbiAgd2lkdGg6IDYuNXJlbTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmRlYWxzIC5zaW5nbGUtZGVhbCAuYnRucyAudXBkYXRlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZDk4MzM7XG4gIGNvbG9yOiAjY2Q5ODMzO1xuICBmb250LXNpemU6IDEuMThyZW07XG59XG4uZGVhbHMgLnNpbmdsZS1kZWFsIC5idG5zIC5yZW1vdmUge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXNpemU6IDEuMThyZW07XG59XG5cbi5hZGQge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiA2cmVtO1xuICBiYWNrZ3JvdW5kOiAjM2U0MDkzO1xuICBjb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDEuMThyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWhlYWRlciBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZWFscyB7XG4gICAgaGVpZ2h0OiAyMTB2aCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5kZWFscyAuc2luZ2xlLWRlYWwge1xuICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlYWxzIHtcbiAgICBoZWlnaHQ6IDE0OHZoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCB7XG4gICAgd2lkdGg6IDMxJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZWFscyB7XG4gICAgaGVpZ2h0OiAyMTB2aCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5kZWFscyAuc2luZ2xlLWRlYWwge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuZGVhbHMgLnNpbmdsZS1kZWFsIC5pbWcge1xuICAgIGhlaWdodDogNDglICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlYWxzIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODh2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCAuaW1nIHtcbiAgICBoZWlnaHQ6IDUzJSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlYWxzIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuZGVhbHMgLnNpbmdsZS1kZWFsIC5pbWcge1xuICAgIGhlaWdodDogNTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlYWxzIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODh2aCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbiAgLmRlYWxzIC5zaW5nbGUtZGVhbCAuaW1nIHtcbiAgICBoZWlnaHQ6IDUzJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudCAudGV4dCxcbmlvbi1jb250ZW50IC5idG5zIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 570:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-deals/admin-deals.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"adminMenu-site-deals\"\r\n  contentId=\"admin-site-deals\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img src=\"../../../../../assets/logo.PNG\" alt=\"\" /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Home</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Add Policy Holder</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(6)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>Add to Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(3)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"people-outline\"></ion-icon>\r\n          <p>Members</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(7)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>\r\n          <p>View Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(4)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n          <p>Deals</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(5)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"construct-outline\"></ion-icon>\r\n          <p>Update Website / App</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"admin-site-deals\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Packages</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"adminMenu('-site-deals')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Packages</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"admin-cover\">\r\n  <br />\r\n  <div class=\"heading\">\r\n    <h2>Plans we offer</h2>\r\n  </div>\r\n\r\n  <div class=\"deals\">\r\n    <div class=\"single-deal\">\r\n      <div class=\"img\">\r\n        <img src=\"../../../../../assets/15942291.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <h5>Family Plan</h5>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat\r\n          temporibus esse, consequuntur veniam possimus cum, quidem iusto fugiat\r\n          porro tenetur at? Neque suscipit ea deleniti atque accusantium, eaque\r\n          mollitia.\r\n        </p>\r\n        <i>R89 P/M</i>\r\n      </div>\r\n      <div class=\"btns\">\r\n        <button class=\"update\">\r\n          <i>update</i> <ion-icon name=\"hammer-outline\"></ion-icon>\r\n        </button>\r\n        <button class=\"remove\">\r\n          <i>remove</i> <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-deal\">\r\n      <div class=\"img\">\r\n        <img src=\"../../../../../assets/abh.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <h5>Funeral Cover</h5>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat\r\n          temporibus esse, consequuntur veniam possimus cum, quidem iusto fugiat\r\n          porro tenetur at? Neque suscipit ea deleniti atque accusantium, eaque\r\n          mollitia.\r\n        </p>\r\n        <i>R109 P/M</i>\r\n      </div>\r\n      <div class=\"btns\">\r\n        <button class=\"update\">\r\n          <i>update</i> <ion-icon name=\"hammer-outline\"></ion-icon>\r\n        </button>\r\n        <button class=\"remove\">\r\n          <i>remove</i> <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-deal\">\r\n      <div class=\"img\">\r\n        <img src=\"../../../../../assets/gal5.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <h5>Premium Plan</h5>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat\r\n          temporibus esse, consequuntur veniam possimus cum, quidem iusto fugiat\r\n          porro tenetur at? Neque suscipit ea deleniti atque accusantium, eaque\r\n          mollitia.\r\n        </p>\r\n        <i>R159 P/M</i>\r\n      </div>\r\n      <div class=\"btns\">\r\n        <button class=\"update\">\r\n          <i>update</i> <ion-icon name=\"hammer-outline\"></ion-icon>\r\n        </button>\r\n        <button class=\"remove\">\r\n          <i>remove</i> <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"add\">\r\n    Add <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n  </button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_admin-deals_admin-deals_module_ts.js.map