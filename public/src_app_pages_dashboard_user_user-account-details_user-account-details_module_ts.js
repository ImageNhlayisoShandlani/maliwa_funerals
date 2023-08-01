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

module.exports = ".user-home {\n  background: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover ion-icon {\n  color: #0b1c64;\n  font-size: 2rem;\n}\n\n.account-details-cover .account {\n  margin-top: 2.5rem;\n  background: #fff;\n  border-radius: 10px;\n  width: 45%;\n  padding: 1.5rem;\n  height: 80vh;\n}\n\n.account-details-cover .account .top-account {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.account-details-cover .account .top-account .left-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.account-details-cover .account .top-account .left-account ion-icon {\n  margin-right: 1.5rem;\n}\n\n.account-details-cover .account .top-account .right-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.account-details-cover .account .top-account .description-account {\n  width: 85%;\n  height: 100%;\n}\n\n.account-details-cover .account .body-account {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  width: 100%;\n  height: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n\n.account-details-cover .account .body-account .single-body-account {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account ion-icon {\n  margin-right: 1.5rem;\n}\n\n.account-details-cover .account .body-account .single-body-account .left-account div {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.account-details-cover .account .body-account .single-body-account .right-account {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.account-details-cover .account .actions-account {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.account-details-cover .account .actions-account button {\n  width: 8rem;\n  height: 2rem;\n  color: #fff;\n  border-radius: 10px;\n}\n\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .account {\n    width: 95% !important;\n  }\n  .account button {\n    width: 6rem !important;\n  }\n}\n\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .account {\n    width: 85% !important;\n    height: 122vh !important;\n  }\n}\n\n/********************************** sMALL TABLET portrait VIEW ***********************************************/\n\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  .account {\n    width: 98% !important;\n  }\n}\n\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  .account {\n    width: 80% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWNjb3VudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE9uZURyaXZlJTIwLSUyMFNBQkMlMjBQdHklMjBMdGRcXERlc2t0b3BcXG90aGVyc1xcaW9uaWNfY29kZVxccHJvX3ByYWNcXG1hbGl3YV9mdW5lcmFsc1xcc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXHVzZXJcXHVzZXItYWNjb3VudC1kZXRhaWxzXFx1c2VyLWFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURFTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0FSOztBRENRO0VBQ0Usb0JBQUE7QUNDVjs7QURHTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNEUjs7QURJTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRlI7O0FETUk7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDSk47O0FETU07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURNUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0pWOztBRE1VO0VBQ0Usb0JBQUE7QUNKWjs7QURNVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0paOztBRFFRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ05WOztBRFdJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ1ROOztBRFdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNUUjs7QURlQTtFQUNFO0lBQ0UscUJBQUE7RUNaRjtFRGNFO0lBQ0Usc0JBQUE7RUNaSjtBQUNGOztBRGdCQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtFQ2RGO0FBQ0Y7O0FEaUJBLDhHQUFBOztBQUVBO0VBQ0U7SUFDRSxxQkFBQTtFQ2hCRjtBQUNGOztBRG1CQSw4R0FBQTs7QUFDQTtFQUNFO0lBQ0UscUJBQUE7RUNqQkY7QUFDRiIsImZpbGUiOiJ1c2VyLWFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1ob21lIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnQtZGV0YWlscy1jb3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMGIxYzY0O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnQge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG5cclxuICAgIC50b3AtYWNjb3VudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAubGVmdC1hY2NvdW50IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQtYWNjb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2NyaXB0aW9uLWFjY291bnQge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHktYWNjb3VudCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnNpbmdsZS1ib2R5LWFjY291bnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAubGVmdC1hY2NvdW50IHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtYWNjb3VudCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMtYWNjb3VudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuYWNjb3VudCB7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDZyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuYWNjb3VudCB7XHJcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEyMnZoICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBzTUFMTCBUQUJMRVQgcG9ydHJhaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hY2NvdW50IHtcclxuICAgIHdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuYWNjb3VudCB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi51c2VyLWhvbWUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFjY291bnQtZGV0YWlscy1jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgaW9uLWljb24ge1xuICBjb2xvcjogIzBiMWM2NDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC50b3AtYWNjb3VudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC50b3AtYWNjb3VudCAubGVmdC1hY2NvdW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC50b3AtYWNjb3VudCAubGVmdC1hY2NvdW50IGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC50b3AtYWNjb3VudCAucmlnaHQtYWNjb3VudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCAudG9wLWFjY291bnQgLmRlc2NyaXB0aW9uLWFjY291bnQge1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC5ib2R5LWFjY291bnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmJvZHktYWNjb3VudCAuc2luZ2xlLWJvZHktYWNjb3VudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC5ib2R5LWFjY291bnQgLnNpbmdsZS1ib2R5LWFjY291bnQgLmxlZnQtYWNjb3VudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmFjY291bnQtZGV0YWlscy1jb3ZlciAuYWNjb3VudCAuYm9keS1hY2NvdW50IC5zaW5nbGUtYm9keS1hY2NvdW50IC5sZWZ0LWFjY291bnQgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmJvZHktYWNjb3VudCAuc2luZ2xlLWJvZHktYWNjb3VudCAubGVmdC1hY2NvdW50IGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC5ib2R5LWFjY291bnQgLnNpbmdsZS1ib2R5LWFjY291bnQgLnJpZ2h0LWFjY291bnQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5hY2NvdW50LWRldGFpbHMtY292ZXIgLmFjY291bnQgLmFjdGlvbnMtYWNjb3VudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYWNjb3VudC1kZXRhaWxzLWNvdmVyIC5hY2NvdW50IC5hY3Rpb25zLWFjY291bnQgYnV0dG9uIHtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuYWNjb3VudCB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5hY2NvdW50IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDZyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogOTI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYWNjb3VudCB7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTIydmggIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogc01BTEwgVEFCTEVUIHBvcnRyYWl0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmFjY291bnQge1xuICAgIHdpZHRoOiA5OCUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmFjY291bnQge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

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