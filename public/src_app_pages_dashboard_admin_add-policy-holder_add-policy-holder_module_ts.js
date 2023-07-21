"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_add-policy-holder_add-policy-holder_module_ts"],{

/***/ 9083:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-policy-holder/add-policy-holder-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPolicyHolderPageRoutingModule": () => (/* binding */ AddPolicyHolderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_policy_holder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policy-holder.page */ 8435);




const routes = [
    {
        path: '',
        component: _add_policy_holder_page__WEBPACK_IMPORTED_MODULE_0__.AddPolicyHolderPage
    }
];
let AddPolicyHolderPageRoutingModule = class AddPolicyHolderPageRoutingModule {
};
AddPolicyHolderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPolicyHolderPageRoutingModule);



/***/ }),

/***/ 3995:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-policy-holder/add-policy-holder.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPolicyHolderPageModule": () => (/* binding */ AddPolicyHolderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_policy_holder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policy-holder-routing.module */ 9083);
/* harmony import */ var _add_policy_holder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-policy-holder.page */ 8435);







let AddPolicyHolderPageModule = class AddPolicyHolderPageModule {
};
AddPolicyHolderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_policy_holder_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPolicyHolderPageRoutingModule
        ],
        declarations: [_add_policy_holder_page__WEBPACK_IMPORTED_MODULE_1__.AddPolicyHolderPage]
    })
], AddPolicyHolderPageModule);



/***/ }),

/***/ 8435:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-policy-holder/add-policy-holder.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPolicyHolderPage": () => (/* binding */ AddPolicyHolderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _add_policy_holder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-policy-holder.page.html?ngResource */ 5377);
/* harmony import */ var _add_policy_holder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-policy-holder.page.scss?ngResource */ 649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AddPolicyHolderPage = class AddPolicyHolderPage {
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
AddPolicyHolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
AddPolicyHolderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-policy-holder',
        template: _add_policy_holder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_policy_holder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddPolicyHolderPage);



/***/ }),

/***/ 649:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-policy-holder/add-policy-holder.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-area {\n  margin-top: 1%;\n  width: 50%;\n  margin-left: 25%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.form-area .wrap {\n  width: 100%;\n  height: 25%;\n}\n.form-area .wrap .office-wrap {\n  width: 100%;\n  height: 100%;\n}\n.form-area .wrap .office-wrap .test-trr {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  padding: 1rem;\n  grid-template-columns: 15% 85%;\n}\n.form-area .wrap .office-wrap .test-trr div,\n.form-area .wrap .office-wrap .test-trr input {\n  width: 100%;\n  height: 10vh;\n  border: 1px solid #0b1c64;\n  color: #0b1c64;\n}\n.form-area .wrap .office-wrap .test-trr textarea {\n  border-color: #0b1c64;\n}\n.form-area .wrap .office-wrap .test-trr input {\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\n.form-area .wrap .office-wrap .test-trr div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0b1c64;\n  font-size: 1.5rem;\n  color: #fff;\n}\n.form-area .wrap .office-wrap .bottom-log {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-area .wrap .office-wrap .bottom-log button {\n  width: 8.5rem;\n  height: 3rem;\n  background: #cd9833;\n  border-radius: 8px;\n  border: 1.5px solid #cd9833;\n  color: #eee;\n  font-size: 1.03rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\n.form-area .wrap .office-wrap .bottom-log a {\n  color: #cd9833;\n}\n.form-area .clerk-wrap {\n  display: none;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .form-area {\n    width: 95% !important;\n    margin-top: 4rem !important;\n    margin-left: 2.5% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .form-area {\n    width: 80% !important;\n    margin-top: 3rem !important;\n    margin-left: 10% !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 85% !important;\n    margin-top: 4rem !important;\n    margin-left: 7.5% !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 85% !important;\n    margin-top: 4rem !important;\n    margin-left: 7.5% !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .form-area {\n    width: 70% !important;\n    margin-top: 4rem !important;\n    margin-left: 15% !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #111 !important;\n  }\n  ion-content .form-area {\n    background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wb2xpY3ktaG9sZGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5obGF5aXNvJTIwU2hvbmRsYW5pXFxEZXNrdG9wXFxpb25pY2NvZGVcXHdvcmtcXG5ldy1tay1pbm5vc1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcYWRtaW5cXGFkZC1wb2xpY3ktaG9sZGVyXFxhZGQtcG9saWN5LWhvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ047QURDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0NSO0FEQ1E7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDVjtBRENRO0VBQ0UscUJBQUE7QUNDVjtBRENRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0NWO0FEQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ1Y7QURHTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNEUjtBREdRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRFY7QURJUTtFQUNFLGNBQUE7QUNGVjtBRFFFO0VBQ0UsYUFBQTtBQ05KO0FEVUE7RUFDRTtJQUNFLDJCQUFBO0VDUEY7RURTRTtJQUNFLDRCQUFBO0VDUEo7O0VEV0E7SUFDRSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUNSRjtBQUNGO0FEWUE7RUFDRTtJQUNFLHdCQUFBO0VDVkY7O0VEYUE7SUFDRSx3QkFBQTtFQ1ZGOztFRGFFO0lBQ0UsNkJBQUE7RUNWSjs7RURhQTtJQUNFLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtFQ1ZGO0FBQ0Y7QURjQTtFQUNFO0lBQ0Usd0JBQUE7RUNaRjs7RURlQTtJQUNFLHdCQUFBO0VDWkY7O0VEZUE7SUFDRSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUNaRjtBQUNGO0FEZ0JBLDJGQUFBO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VDZkY7O0VEa0JBO0lBQ0Usd0JBQUE7RUNmRjtBQUNGO0FEa0JBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VDaEJGOztFRG1CQTtJQUNFLHdCQUFBO0VDaEJGOztFRG1CQTtJQUNFLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtFQ2hCRjtBQUNGO0FEb0JBLCtHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VDbEJGOztFRHFCQTtJQUNFLHdCQUFBO0VDbEJGOztFRHFCQTtJQUNFLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtFQ2xCRjtBQUNGO0FEc0JBO0VBQ0U7SUFDRSw2QkFBQTtFQ3BCRjtFRHNCRTtJQUNFLDJCQUFBO0VDcEJKO0FBQ0YiLCJmaWxlIjoiYWRkLXBvbGljeS1ob2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYXJlYSB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLndyYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuXHJcbiAgICAub2ZmaWNlLXdyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLnRlc3QtdHJyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuXHJcbiAgICAgICAgZGl2LFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBiMWM2NDtcclxuICAgICAgICAgIGNvbG9yOiAjMGIxYzY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwYjFjNjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzBiMWM2NDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm90dG9tLWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOC41cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2NkOTgzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2NkOTgzMztcclxuICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjAzcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNjZDk4MzM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xlcmstd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JSAhaW1wb3J0YW50XHJcbiAgICA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTRyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnRcclxuICAgIDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYXJlYSB7XHJcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNy41JSAhaW1wb3J0YW50XHJcbiAgICA7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcuNSUgIWltcG9ydGFudFxyXG4gICAgO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWFyZWEge1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50XHJcbiAgICA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmZvcm0tYXJlYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvcm0tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDElO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybS1hcmVhIC53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdixcbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC50ZXN0LXRyciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYjFjNjQ7XG4gIGNvbG9yOiAjMGIxYzY0O1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIHRleHRhcmVhIHtcbiAgYm9yZGVyLWNvbG9yOiAjMGIxYzY0O1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmZvcm0tYXJlYSAud3JhcCAub2ZmaWNlLXdyYXAgLnRlc3QtdHJyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGIxYzY0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9ybS1hcmVhIC53cmFwIC5vZmZpY2Utd3JhcCAuYm90dG9tLWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGJ1dHRvbiB7XG4gIHdpZHRoOiA4LjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZDogI2NkOTgzMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNjZDk4MzM7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5mb3JtLWFyZWEgLndyYXAgLm9mZmljZS13cmFwIC5ib3R0b20tbG9nIGEge1xuICBjb2xvcjogI2NkOTgzMztcbn1cbi5mb3JtLWFyZWEgLmNsZXJrLXdyYXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tYXJlYSB7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDRyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNy41JSAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLWFyZWEge1xuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDcuNSUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1hcmVhIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTExICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNvbnRlbnQgLmZvcm0tYXJlYSB7XG4gICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 5377:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/add-policy-holder/add-policy-holder.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"adminMenu-site-addP\"\r\n  contentId=\"admin-site-addP\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img\r\n            src=\"../../../../../assets/new-logos/GZX-01.png\"\r\n            alt=\"\"\r\n          /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Home</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Add Policy Holder</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(6)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>Add to Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(3)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"people-outline\"></ion-icon>\r\n          <p>Members</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(7)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>\r\n          <p>View Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(4)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n          <p>Deals</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(5)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"construct-outline\"></ion-icon>\r\n          <p>Update Website / App</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"admin-site-addP\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Add new policy holder</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"adminMenu('-site-addP')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Add new policy holder</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"admin-cover\">\r\n  <div class=\"form-area two\" id=\"three\">\r\n    <h3>Fill form to add</h3>\r\n\r\n    <div class=\"wrap\">\r\n      <div class=\"office-wrap\" id=\"off-wrap\">\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"member full name\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"email address\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n          </div>\r\n          <input type=\"text\" placeholder=\"contact no.\" />\r\n        </div>\r\n\r\n        <div class=\"test-trr\">\r\n          <div><ion-icon name=\"book-outline\"></ion-icon></div>\r\n          <input type=\"text\" placeholder=\"id number\" />\r\n        </div>\r\n\r\n        <p class=\"descrip\">Physical Address :</p>\r\n\r\n        <div class=\"test-trr\">\r\n          <div>\r\n            <ion-icon name=\"book-outline\"></ion-icon>\r\n          </div>\r\n          <textarea rows=\"10\" placeholder=\"address\"> </textarea>\r\n        </div>\r\n\r\n        <hr />\r\n        <div class=\"options\">\r\n          <ion-list>\r\n            <ion-radio-group>\r\n              <ion-list-header>\r\n                <ion-label> Policy Type </ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>Burial Cover</ion-label>\r\n                <ion-radio value=\"Burial\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>Family Plan.</ion-label>\r\n                <ion-radio value=\"Family\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>Insurance</ion-label>\r\n                <ion-radio value=\"Insurance\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </div>\r\n        <div class=\"bottom-log\">\r\n          <button (click)=\"goToAdmin()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_add-policy-holder_add-policy-holder_module_ts.js.map