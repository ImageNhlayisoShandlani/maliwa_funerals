"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageRoutingModule": () => (/* binding */ PagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page */ 8588);




const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_0__.PagesPage
    },
    {
        path: 'view-gallery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_admin_view-gallery_view-gallery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/admin/view-gallery/view-gallery.module */ 4635)).then(m => m.ViewGalleryPageModule)
    },
    {
        path: 'get-policy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home-pages_get-policy_get-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home-pages/get-policy/get-policy.module */ 2399)).then(m => m.GetPolicyPageModule)
    },
    {
        path: 'user-home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_user_user-home_user-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/user/user-home/user-home.module */ 4936)).then(m => m.UserHomePageModule)
    },
    {
        path: 'user-account-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_user_user-account-details_user-account-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/user/user-account-details/user-account-details.module */ 5484)).then(m => m.UserAccountDetailsPageModule)
    },
    {
        path: 'user-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_user_user-history_user-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/user/user-history/user-history.module */ 1196)).then(m => m.UserHistoryPageModule)
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageModule": () => (/* binding */ PagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page */ 8588);







let PagesPageModule = class PagesPageModule {
};
PagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesPageRoutingModule
        ],
        declarations: [_pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage]
    })
], PagesPageModule);



/***/ }),

/***/ 8588:
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPage": () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page.html?ngResource */ 1664);
/* harmony import */ var _pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page.scss?ngResource */ 8358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let PagesPage = class PagesPage {
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
PagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
PagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pages',
        template: _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagesPage);



/***/ }),

/***/ 8358:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".pic-guide {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  margin-top: 2.5rem;\n}\n.pic-guide .single-pic {\n  height: 75vh;\n  width: 28%;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  overflow: hidden;\n  border-radius: 12px;\n}\n.pic-guide .single-pic .img-div {\n  width: 100%;\n  height: 100%;\n}\n.pic-guide .single-pic .img-div img {\n  width: 100%;\n  height: 100%;\n}\n.pic-guide .single-pic .text {\n  width: 100%;\n  height: 50%;\n  background: #eee;\n  position: absolute;\n  bottom: -10%;\n}\n.pic-guide .single-pic .text .title,\n.pic-guide .single-pic .text .date-time,\n.pic-guide .single-pic .text .location,\n.pic-guide .single-pic .text .btns {\n  width: 100%;\n  padding-left: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.pic-guide .single-pic .text .title ion-icon,\n.pic-guide .single-pic .text .date-time ion-icon,\n.pic-guide .single-pic .text .location ion-icon,\n.pic-guide .single-pic .text .btns ion-icon {\n  color: #0b1c64;\n  font-size: 1.3rem;\n  margin-right: 1rem;\n}\n.pic-guide .single-pic .text .btns {\n  justify-content: space-evenly;\n}\n.pic-guide .single-pic .text .btns button {\n  width: 6rem;\n  height: 1.5rem;\n  border-radius: 8px;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 96% !important;\n    margin-bottom: 3rem;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header {\n    display: flex !important;\n  }\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .text {\n    height: 68% !important;\n    bottom: 0 !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 90% !important;\n    margin-bottom: 3rem;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .single-pic {\n    width: 31% !important;\n  }\n\n  .text {\n    height: 59% !important;\n  }\n  .text div {\n    padding-left: 0.1rem !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 90% !important;\n    margin-bottom: 3rem;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .single-pic {\n    width: 31% !important;\n  }\n\n  .text {\n    height: 59% !important;\n  }\n  .text div {\n    padding-left: 0.1rem !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #111 !important;\n  }\n  ion-content .text {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5obGF5aXNvJTIwU2hvbmRsYW5pXFxEZXNrdG9wXFxpb25pY2NvZGVcXHdvcmtcXG5ldy1tay1pbm5vc1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXHBhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTjtBRENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDUjtBREdJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007Ozs7RUFJRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURHUTs7OztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVY7QURFTTtFQUNFLDZCQUFBO0FDQVI7QURFUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBVjtBRE9BO0VBQ0U7SUFDRSwyQkFBQTtFQ0pGO0VETUU7SUFDRSw0QkFBQTtFQ0pKOztFRFFBO0lBQ0UsZUFBQTtFQ0xGO0VET0U7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VDTEo7QUFDRjtBRFNBO0VBQ0U7SUFDRSx3QkFBQTtFQ1BGOztFRFNBO0lBQ0Usd0JBQUE7RUNORjtFRE9FO0lBQ0UsNkJBQUE7RUNMSjs7RURTQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLHdCQUFBO0VDUEY7O0VEVUE7SUFDRSx3QkFBQTtFQ1BGOztFRFVBO0lBQ0UsZUFBQTtFQ1BGO0VEU0U7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VDUEo7QUFDRjtBRFdBLDJGQUFBO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VDVkY7O0VEYUE7SUFDRSx3QkFBQTtFQ1ZGOztFRGFBO0lBQ0UscUJBQUE7RUNWRjs7RURZQTtJQUNFLHNCQUFBO0VDVEY7RURXRTtJQUNFLCtCQUFBO0VDVEo7QUFDRjtBRGFBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VDWEY7O0VEY0E7SUFDRSx3QkFBQTtFQ1hGOztFRGNBO0lBQ0UsZUFBQTtFQ1hGO0VEYUU7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VDWEo7QUFDRjtBRGVBLCtHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VDYkY7O0VEZ0JBO0lBQ0Usd0JBQUE7RUNiRjs7RURnQkE7SUFDRSxxQkFBQTtFQ2JGOztFRGVBO0lBQ0Usc0JBQUE7RUNaRjtFRGNFO0lBQ0UsK0JBQUE7RUNaSjtBQUNGO0FEZ0JBO0VBQ0U7SUFDRSw2QkFBQTtFQ2RGO0VEZ0JFO0lBQ0UsMkJBQUE7RUNkSjtBQUNGIiwiZmlsZSI6InBhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWMtZ3VpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG5cclxuICAuc2luZ2xlLXBpYyB7XHJcbiAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICAuaW1nLWRpdiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTEwJTtcclxuXHJcbiAgICAgIC50aXRsZSxcclxuICAgICAgLmRhdGUtdGltZSxcclxuICAgICAgLmxvY2F0aW9uLFxyXG4gICAgICAuYnRucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMwYjFjNjQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG5zIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGljLWd1aWRlIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuc2luZ2xlLXBpYyB7XHJcbiAgICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTRyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGhlaWdodDogNjglICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBpYy1ndWlkZSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnNpbmdsZS1waWMge1xyXG4gICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGUtcGljIHtcclxuICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgaGVpZ2h0OiA1OSUgIWltcG9ydGFudDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBpYy1ndWlkZSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnNpbmdsZS1waWMge1xyXG4gICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNpbmdsZS1waWMge1xyXG4gICAgd2lkdGg6IDMxJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBoZWlnaHQ6IDU5JSAhaW1wb3J0YW50O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5waWMtZ3VpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMge1xuICBoZWlnaHQ6IDc1dmg7XG4gIHdpZHRoOiAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC5pbWctZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLmltZy1kaXYgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAudGl0bGUsXG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC5kYXRlLXRpbWUsXG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC5sb2NhdGlvbixcbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmJ0bnMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC50aXRsZSBpb24taWNvbixcbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmRhdGUtdGltZSBpb24taWNvbixcbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmxvY2F0aW9uIGlvbi1pY29uLFxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAuYnRucyBpb24taWNvbiB7XG4gIGNvbG9yOiAjMGIxYzY0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAuYnRucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAuYnRucyBidXR0b24ge1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuICBpb24taGVhZGVyIGg0IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBpYy1ndWlkZSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5waWMtZ3VpZGUgLnNpbmdsZS1waWMge1xuICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWhlYWRlciBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dCB7XG4gICAgaGVpZ2h0OiA2OCUgIWltcG9ydGFudDtcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGljLWd1aWRlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpbmdsZS1waWMge1xuICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBoZWlnaHQ6IDU5JSAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0IGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjFyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waWMtZ3VpZGUge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAucGljLWd1aWRlIC5zaW5nbGUtcGljIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2luZ2xlLXBpYyB7XG4gICAgd2lkdGg6IDMxJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRleHQge1xuICAgIGhlaWdodDogNTklICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRleHQgZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudCAudGV4dCB7XG4gICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 1664:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"adminMenu-site-pal\"\r\n  contentId=\"admin-site-pal\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img src=\"../../assets/new-logos/GZX-01.png\" alt=\"\" /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Home</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Add Policy Holder</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(6)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>Add to Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(3)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"people-outline\"></ion-icon>\r\n          <p>Members</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(7)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>\r\n          <p>View Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(4)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n          <p>Deals</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(5)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"construct-outline\"></ion-icon>\r\n          <p>Update Website / App</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"admin-site-pal\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">All Images</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"adminMenu('-site-pal')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">All Images</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"admin-cover\">\r\n  <div class=\"pic-guide\">\r\n    <div class=\"single-pic\">\r\n      <div class=\"img-div\">\r\n        <img src=\"../../assets/gal5.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <div class=\"title\">\r\n          <ion-icon name=\"aperture-outline\"></ion-icon>\r\n          <p>A Pic Taken Back</p>\r\n        </div>\r\n        <div class=\"date-time\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n          <p>17:57 CAT - 22 July 2021</p>\r\n        </div>\r\n\r\n        <div class=\"location\">\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p>2667 Protea Glen Ext.2 1818</p>\r\n        </div>\r\n\r\n        <div class=\"btns\">\r\n          <button style=\"background: #cd9833\">Edit</button>\r\n          <button style=\"background: red; color: white\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-pic\">\r\n      <div class=\"img-div\">\r\n        <img src=\"../../assets/gal5.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <div class=\"title\">\r\n          <ion-icon name=\"aperture-outline\"></ion-icon>\r\n          <p>A Pic Taken Back</p>\r\n        </div>\r\n        <div class=\"date-time\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n          <p>17:57 CAT - 22 July 2021</p>\r\n        </div>\r\n\r\n        <div class=\"location\">\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p>2667 Protea Glen Ext.2 1818</p>\r\n        </div>\r\n\r\n        <div class=\"btns\">\r\n          <button style=\"background: #cd9833\">Edit</button>\r\n          <button style=\"background: red; color: white\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-pic\">\r\n      <div class=\"img-div\">\r\n        <img src=\"../../assets/gal5.jpg\" alt=\"\" />\r\n      </div>\r\n      <div class=\"text\">\r\n        <div class=\"title\">\r\n          <ion-icon name=\"aperture-outline\"></ion-icon>\r\n          <p>A Pic Taken Back</p>\r\n        </div>\r\n        <div class=\"date-time\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n          <p>17:57 CAT - 22 July 2021</p>\r\n        </div>\r\n\r\n        <div class=\"location\">\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p>2667 Protea Glen Ext.2 1818</p>\r\n        </div>\r\n\r\n        <div class=\"btns\">\r\n          <button style=\"background: #cd9833\">Edit</button>\r\n          <button style=\"background: red; color: white\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map