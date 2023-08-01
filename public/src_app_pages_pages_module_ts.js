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

module.exports = ".pic-guide {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  margin-top: 2.5rem;\n}\n.pic-guide .single-pic {\n  height: 75vh;\n  width: 28%;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  overflow: hidden;\n  border-radius: 12px;\n}\n.pic-guide .single-pic .img-div {\n  width: 100%;\n  height: 100%;\n}\n.pic-guide .single-pic .img-div img {\n  width: 100%;\n  height: 100%;\n}\n.pic-guide .single-pic .text {\n  width: 100%;\n  height: 50%;\n  background: #eee;\n  position: absolute;\n  bottom: -10%;\n}\n.pic-guide .single-pic .text .title,\n.pic-guide .single-pic .text .date-time,\n.pic-guide .single-pic .text .location,\n.pic-guide .single-pic .text .btns {\n  width: 100%;\n  padding-left: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.pic-guide .single-pic .text .title ion-icon,\n.pic-guide .single-pic .text .date-time ion-icon,\n.pic-guide .single-pic .text .location ion-icon,\n.pic-guide .single-pic .text .btns ion-icon {\n  color: #0b1c64;\n  font-size: 1.3rem;\n  margin-right: 1rem;\n}\n.pic-guide .single-pic .text .btns {\n  justify-content: space-evenly;\n}\n.pic-guide .single-pic .text .btns button {\n  width: 6rem;\n  height: 1.5rem;\n  border-radius: 8px;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 96% !important;\n    margin-bottom: 3rem;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header {\n    display: flex !important;\n  }\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .text {\n    height: 68% !important;\n    bottom: 0 !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 90% !important;\n    margin-bottom: 3rem;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .single-pic {\n    width: 31% !important;\n  }\n\n  .text {\n    height: 59% !important;\n  }\n  .text div {\n    padding-left: 0.1rem !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .pic-guide {\n    flex-wrap: wrap;\n  }\n  .pic-guide .single-pic {\n    width: 90% !important;\n    margin-bottom: 3rem;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .single-pic {\n    width: 31% !important;\n  }\n\n  .text {\n    height: 59% !important;\n  }\n  .text div {\n    padding-left: 0.1rem !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #111 !important;\n  }\n  ion-content .text {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE9uZURyaXZlJTIwLSUyMFNBQkMlMjBQdHklMjBMdGRcXERlc2t0b3BcXG90aGVyc1xcaW9uaWNfY29kZVxccHJvX3ByYWNcXG1hbGl3YV9mdW5lcmFsc1xcc3JjXFxhcHBcXHBhZ2VzXFxwYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ047QURDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ1I7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNETjtBREdNOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER1E7Ozs7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VWO0FERU07RUFDRSw2QkFBQTtBQ0FSO0FERVE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQVY7QURPQTtFQUNFO0lBQ0UsMkJBQUE7RUNKRjtFRE1FO0lBQ0UsNEJBQUE7RUNKSjs7RURRQTtJQUNFLGVBQUE7RUNMRjtFRE9FO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQ0xKO0FBQ0Y7QURTQTtFQUNFO0lBQ0Usd0JBQUE7RUNQRjs7RURTQTtJQUNFLHdCQUFBO0VDTkY7RURPRTtJQUNFLDZCQUFBO0VDTEo7O0VEU0E7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSx3QkFBQTtFQ1BGOztFRFVBO0lBQ0Usd0JBQUE7RUNQRjs7RURVQTtJQUNFLGVBQUE7RUNQRjtFRFNFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQ1BKO0FBQ0Y7QURXQSwyRkFBQTtBQUVBO0VBQ0U7SUFDRSx3QkFBQTtFQ1ZGOztFRGFBO0lBQ0Usd0JBQUE7RUNWRjs7RURhQTtJQUNFLHFCQUFBO0VDVkY7O0VEWUE7SUFDRSxzQkFBQTtFQ1RGO0VEV0U7SUFDRSwrQkFBQTtFQ1RKO0FBQ0Y7QURhQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ1hGOztFRGNBO0lBQ0Usd0JBQUE7RUNYRjs7RURjQTtJQUNFLGVBQUE7RUNYRjtFRGFFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFQ1hKO0FBQ0Y7QURlQSwrR0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ2JGOztFRGdCQTtJQUNFLHdCQUFBO0VDYkY7O0VEZ0JBO0lBQ0UscUJBQUE7RUNiRjs7RURlQTtJQUNFLHNCQUFBO0VDWkY7RURjRTtJQUNFLCtCQUFBO0VDWko7QUFDRjtBRGdCQTtFQUNFO0lBQ0UsNkJBQUE7RUNkRjtFRGdCRTtJQUNFLDJCQUFBO0VDZEo7QUFDRiIsImZpbGUiOiJwYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljLWd1aWRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuXHJcbiAgLnNpbmdsZS1waWMge1xyXG4gICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICAgLmltZy1kaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC0xMCU7XHJcblxyXG4gICAgICAudGl0bGUsXHJcbiAgICAgIC5kYXRlLXRpbWUsXHJcbiAgICAgIC5sb2NhdGlvbixcclxuICAgICAgLmJ0bnMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMGIxYzY0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnRucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBpYy1ndWlkZSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnNpbmdsZS1waWMge1xyXG4gICAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBoZWlnaHQ6IDY4JSAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5waWMtZ3VpZGUge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5zaW5nbGUtcGljIHtcclxuICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2luZ2xlLXBpYyB7XHJcbiAgICB3aWR0aDogMzElICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGhlaWdodDogNTklICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5waWMtZ3VpZGUge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5zaW5nbGUtcGljIHtcclxuICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGUtcGljIHtcclxuICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgaGVpZ2h0OiA1OSUgIWltcG9ydGFudDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzExMSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGljLWd1aWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIHtcbiAgaGVpZ2h0OiA3NXZoO1xuICB3aWR0aDogMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAuaW1nLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC5pbWctZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLnRpdGxlLFxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAuZGF0ZS10aW1lLFxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAubG9jYXRpb24sXG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC5idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyAudGV4dCAudGl0bGUgaW9uLWljb24sXG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC5kYXRlLXRpbWUgaW9uLWljb24sXG4ucGljLWd1aWRlIC5zaW5nbGUtcGljIC50ZXh0IC5sb2NhdGlvbiBpb24taWNvbixcbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmJ0bnMgaW9uLWljb24ge1xuICBjb2xvcjogIzBiMWM2NDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmJ0bnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5waWMtZ3VpZGUgLnNpbmdsZS1waWMgLnRleHQgLmJ0bnMgYnV0dG9uIHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWhlYWRlciBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waWMtZ3VpZGUge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAucGljLWd1aWRlIC5zaW5nbGUtcGljIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRleHQge1xuICAgIGhlaWdodDogNjglICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBpYy1ndWlkZSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5waWMtZ3VpZGUgLnNpbmdsZS1waWMge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaW5nbGUtcGljIHtcbiAgICB3aWR0aDogMzElICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dCB7XG4gICAgaGVpZ2h0OiA1OSUgIWltcG9ydGFudDtcbiAgfVxuICAudGV4dCBkaXYge1xuICAgIHBhZGRpbmctbGVmdDogMC4xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGljLWd1aWRlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnBpYy1ndWlkZSAuc2luZ2xlLXBpYyB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpbmdsZS1waWMge1xuICAgIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBoZWlnaHQ6IDU5JSAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0IGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjFyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNvbnRlbnQgLnRleHQge1xuICAgIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

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