"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_user_user-account-details_user-account-details_module_ts"],{

/***/ 7552:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-account-details/user-account-details-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAccountDetailsPageRoutingModule": () => (/* binding */ UserAccountDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_account_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-account-details.page */ 8475);




const routes = [
    {
        path: '',
        component: _user_account_details_page__WEBPACK_IMPORTED_MODULE_0__.UserAccountDetailsPage
    }
];
let UserAccountDetailsPageRoutingModule = class UserAccountDetailsPageRoutingModule {
};
UserAccountDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserAccountDetailsPageRoutingModule);



/***/ }),

/***/ 5484:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-account-details/user-account-details.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAccountDetailsPageModule": () => (/* binding */ UserAccountDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_account_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-account-details-routing.module */ 7552);
/* harmony import */ var _user_account_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-account-details.page */ 8475);







let UserAccountDetailsPageModule = class UserAccountDetailsPageModule {
};
UserAccountDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_account_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserAccountDetailsPageRoutingModule
        ],
        declarations: [_user_account_details_page__WEBPACK_IMPORTED_MODULE_1__.UserAccountDetailsPage]
    })
], UserAccountDetailsPageModule);



/***/ }),

/***/ 8475:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-account-details/user-account-details.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAccountDetailsPage": () => (/* binding */ UserAccountDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _user_account_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-account-details.page.html?ngResource */ 8196);
/* harmony import */ var _user_account_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-account-details.page.scss?ngResource */ 4376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let UserAccountDetailsPage = class UserAccountDetailsPage {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    userMenu(menu) {
        this.menuCtrl.enable(true, 'userMenu' + menu);
        this.menuCtrl.open('userMenu' + menu);
    }
    navigate(num) {
        if (num == 1) {
            this.router.navigate(['user-home']);
        }
        if (num == 2) {
            this.router.navigate(['user-account']);
        }
        if (num == 3) {
            this.router.navigate(['user-history']);
        }
        if (num == 0) {
            this.router.navigate(['home/landing']);
        }
    }
};
UserAccountDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserAccountDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-account-details',
        template: _user_account_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_account_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserAccountDetailsPage);



/***/ }),

/***/ 4376:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-account-details/user-account-details.page.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".user-home {\n  background: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover ion-icon {\n  color: #0b1c64;\n  font-size: 2rem;\n}\n\n.account-details-cover .account {\n  margin-top: 2.5rem;\n  background: #fff;\n  border-radius: 10px;\n  width: 45%;\n  padding: 1.5rem;\n  height: 80vh;\n}\n\n.account-details-cover .account .top-account {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.account-details-cover .account .top-account .left-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.account-details-cover .account .top-account .left-account ion-icon {\n  margin-right: 1.5rem;\n}\n\n.account-details-cover .account .top-account .right-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.account-details-cover .account .top-account .description-account {\n  width: 85%;\n  height: 100%;\n}\n\n.account-details-cover .account .body-account {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  width: 100%;\n  height: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.account-details-cover .account .body-account .single-body-account {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account ion-icon {\n  margin-right: 1.5rem;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account div {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover .account .body-account .single-body-account .right-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.account-details-cover .account .actions-account {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.account-details-cover .account .actions-account button {\n  width: 8rem;\n  height: 2rem;\n  color: #fff;\n  border-radius: 10px;\n}\n\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .account {\n    width: 95% !important;\n  }\n  .account button {\n    width: 6rem !important;\n  }\n}\n\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .account {\n    width: 85% !important;\n    height: 122vh !important;\n  }\n}\n\n/********************************** sMALL TABLET portrait VIEW ***********************************************/\n\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .account {\n    width: 98% !important;\n  }\n}\n\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .account {\n    width: 80% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWNjb3VudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5obGF5aXNvJTIwU2hvbmRsYW5pXFxEZXNrdG9wXFxpb25pY2NvZGVcXHdvcmtcXG5ldy1tay1pbm5vc1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcdXNlclxcdXNlci1hY2NvdW50LWRldGFpbHNcXHVzZXItYWNjb3VudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0FOOztBREVNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQVI7O0FEQ1E7RUFDRSxvQkFBQTtBQ0NWOztBREdNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0RSOztBRElNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNGUjs7QURNSTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNKTjs7QURNTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE1RO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSlY7O0FETVU7RUFDRSxvQkFBQTtBQ0paOztBRE1VO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSlo7O0FEUVE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDTlY7O0FEV0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDVE47O0FEV007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1RSOztBRGVBO0VBQ0U7SUFDRSxxQkFBQTtFQ1pGO0VEY0U7SUFDRSxzQkFBQTtFQ1pKO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHdCQUFBO0VDZEY7QUFDRjs7QURpQkEsOEdBQUE7O0FBRUE7RUFDRTtJQUNFLHFCQUFBO0VDaEJGO0FBQ0Y7O0FEbUJBLDhHQUFBOztBQUNBO0VBQ0U7SUFDRSxxQkFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InVzZXItYWNjb3VudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWhvbWUge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICMwYjFjNjQ7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcblxyXG4gICAgLnRvcC1hY2NvdW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgIC5sZWZ0LWFjY291bnQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodC1hY2NvdW50IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb24tYWNjb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1hY2NvdW50IHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuc2luZ2xlLWJvZHktYWNjb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIC5sZWZ0LWFjY291bnQge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1hY2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucy1hY2NvdW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hY2NvdW50IHtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5hY2NvdW50IHtcclxuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTIydmggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNNQUxMIFRBQkxFVCBwb3J0cmFpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmFjY291bnQge1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hY2NvdW50IHtcclxuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLnVzZXItaG9tZSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciBpb24taWNvbiB7XG4gIGNvbG9yOiAjMGIxYzY0O1xuICBmb250LXNpemU6IDJyZW07XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGhlaWdodDogODB2aDtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLnRvcC1hY2NvdW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLnRvcC1hY2NvdW50IC5sZWZ0LWFjY291bnQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLnRvcC1hY2NvdW50IC5sZWZ0LWFjY291bnQgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLnRvcC1hY2NvdW50IC5yaWdodC1hY2NvdW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC50b3AtYWNjb3VudCAuZGVzY3JpcHRpb24tYWNjb3VudCB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmJvZHktYWNjb3VudCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCAuYm9keS1hY2NvdW50IC5zaW5nbGUtYm9keS1hY2NvdW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmJvZHktYWNjb3VudCAuc2luZ2xlLWJvZHktYWNjb3VudCAubGVmdC1hY2NvdW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC5ib2R5LWFjY291bnQgLnNpbmdsZS1ib2R5LWFjY291bnQgLmxlZnQtYWNjb3VudCBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCAuYm9keS1hY2NvdW50IC5zaW5nbGUtYm9keS1hY2NvdW50IC5sZWZ0LWFjY291bnQgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmJvZHktYWNjb3VudCAuc2luZ2xlLWJvZHktYWNjb3VudCAucmlnaHQtYWNjb3VudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCAuYWN0aW9ucy1hY2NvdW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmFjdGlvbnMtYWNjb3VudCBidXR0b24ge1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5hY2NvdW50IHtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFjY291bnQgYnV0dG9uIHtcbiAgICB3aWR0aDogNnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5hY2NvdW50IHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMjJ2aCAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgcG9ydHJhaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuYWNjb3VudCB7XG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuYWNjb3VudCB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 8196:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-account-details/user-account-details.page.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"userMenu-site-account\"\r\n  contentId=\"user-site-account\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img\r\n            src=\"../../../../../assets/new-logos/GZX-01.png\"\r\n            alt=\"\"\r\n          /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Profile</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Account Details</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(3)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>History</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"user-site-account\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Account</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"userMenu('-site-account')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Account Details</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"user-home admin-cover\">\r\n  <div class=\"account-details-cover\">\r\n    <div class=\"account\">\r\n      <div class=\"top-account\">\r\n        <div class=\"left-account\">\r\n          <div class=\"icon-account\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n          </div>\r\n          <div class=\"description-account\">\r\n            <h3>Name</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-account\">\r\n          <p>Image Shandlani</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"body-account\">\r\n        <div class=\"single-body-account\">\r\n          <div class=\"left-account\">\r\n            <div class=\"icon-account\">\r\n              <ion-icon name=\"apps\"></ion-icon>\r\n            </div>\r\n            <div class=\"description-account\">\r\n              <h3>Acc No.</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-account\">\r\n            <p>2466674</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"single-body-account\">\r\n          <div class=\"left-account\">\r\n            <div class=\"icon-account\">\r\n              <ion-icon name=\"create\"></ion-icon>\r\n            </div>\r\n            <div class=\"description-account\">\r\n              <h3>Current PLan</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-account\">\r\n            <p>Full Cover</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"single-body-account\">\r\n          <div class=\"left-account\">\r\n            <div class=\"icon-account\">\r\n              <ion-icon name=\"card\"></ion-icon>\r\n            </div>\r\n            <div class=\"description-account\">\r\n              <h3>Payment Method</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-account\">\r\n            <p>Credit Card</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"single-body-account\">\r\n          <div class=\"left-account\">\r\n            <div class=\"icon-account\">\r\n              <ion-icon name=\"time\"></ion-icon>\r\n            </div>\r\n            <div class=\"description-account\">\r\n              <h3>Last Transaction</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-account\">\r\n            <p>16 June 2023</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"actions-account\">\r\n        <button style=\"background: green\">Update</button>\r\n        <button style=\"background: orange\">Pause</button>\r\n        <button style=\"background: red\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_user_user-account-details_user-account-details_module_ts.js.map