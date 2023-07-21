"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_user_user-history_user-history_module_ts"],{

/***/ 3651:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-history/user-history-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserHistoryPageRoutingModule": () => (/* binding */ UserHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-history.page */ 998);




const routes = [
    {
        path: '',
        component: _user_history_page__WEBPACK_IMPORTED_MODULE_0__.UserHistoryPage
    }
];
let UserHistoryPageRoutingModule = class UserHistoryPageRoutingModule {
};
UserHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserHistoryPageRoutingModule);



/***/ }),

/***/ 1196:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-history/user-history.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserHistoryPageModule": () => (/* binding */ UserHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-history-routing.module */ 3651);
/* harmony import */ var _user_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-history.page */ 998);







let UserHistoryPageModule = class UserHistoryPageModule {
};
UserHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserHistoryPageRoutingModule
        ],
        declarations: [_user_history_page__WEBPACK_IMPORTED_MODULE_1__.UserHistoryPage]
    })
], UserHistoryPageModule);



/***/ }),

/***/ 998:
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-history/user-history.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserHistoryPage": () => (/* binding */ UserHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _user_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-history.page.html?ngResource */ 21);
/* harmony import */ var _user_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-history.page.scss?ngResource */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let UserHistoryPage = class UserHistoryPage {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
    }
    ngOnInit() { }
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
UserHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-history',
        template: _user_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserHistoryPage);



/***/ }),

/***/ 8503:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-history/user-history.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".history-cover {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.history-cover .single-history {\n  width: 40%;\n  height: 25vh;\n  background: #fff;\n  border-radius: 12px;\n  padding: 0 1rem 0 1rem;\n  margin-bottom: 1.5rem;\n}\n.history-cover .single-history h4 {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n.history-cover .single-history p {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.history-cover .single-history i {\n  color: #6e6b6b;\n}\n.history-cover button {\n  width: 8rem;\n  height: 2rem;\n  border-radius: 12px;\n  background: #0b1c64;\n  color: #fff;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  .single-history {\n    width: 100% !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  .single-history {\n    width: 60% !important;\n    height: 45vh !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaGlzdG9yeS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOaGxheWlzbyUyMFNob25kbGFuaVxcRGVza3RvcFxcaW9uaWNjb2RlXFx3b3JrXFxuZXctbWstaW5ub3NcXG1hbGl3YV9mdW5lcmFsc1xcc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXHVzZXJcXHVzZXItaGlzdG9yeVxcdXNlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDRSx3RUFBQTtBQ0NOO0FERUk7RUFDRSw0REFBQTtBQ0FOO0FER0k7RUFDRSxjQUFBO0FDRE47QURLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNISjtBRE9BO0VBQ0U7SUFDRSxzQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoidXNlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LWNvdmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5zaW5nbGUtaGlzdG9yeSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTEwLCAxMDcsIDEwNyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBiMWM2NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLnNpbmdsZS1oaXN0b3J5IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLnNpbmdsZS1oaXN0b3J5IHtcclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuaGlzdG9yeS1jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oaXN0b3J5LWNvdmVyIC5zaW5nbGUtaGlzdG9yeSB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjV2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmhpc3RvcnktY292ZXIgLnNpbmdsZS1oaXN0b3J5IGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5oaXN0b3J5LWNvdmVyIC5zaW5nbGUtaGlzdG9yeSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uaGlzdG9yeS1jb3ZlciAuc2luZ2xlLWhpc3RvcnkgaSB7XG4gIGNvbG9yOiAjNmU2YjZiO1xufVxuLmhpc3RvcnktY292ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzBiMWM2NDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc2luZ2xlLWhpc3Rvcnkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnNpbmdsZS1oaXN0b3J5IHtcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 21:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/user/user-history/user-history.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"userMenu-site-history\"\r\n  contentId=\"user-site-history\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img\r\n            src=\"../../../../../assets/new-logos/GZX-01.png\"\r\n            alt=\"\"\r\n          /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Profile</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Account Details</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(3)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>History</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"user-site-history\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Transactional History</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"userMenu('-site-history')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Transactional History</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"admin-cover\">\r\n  <div class=\"history-cover\">\r\n    <div class=\"single-history\">\r\n      <h4>16 June 2023</h4>\r\n      <p>Type : Payment</p>\r\n      <i>#46545sd65464</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <div class=\"single-history\">\r\n      <h4>05 June 2023</h4>\r\n      <p>Type : Purchase</p>\r\n      <i>#5465s4d654tuq</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <div class=\"single-history\">\r\n      <h4>15 May 2023</h4>\r\n      <p>Type : Payment</p>\r\n      <i>#pitpiwgti456541</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <div class=\"single-history\">\r\n      <h4>25 April 2023</h4>\r\n      <p>Type : Purchase</p>\r\n      <i>#45456415fedsf</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <div class=\"single-history\">\r\n      <h4>15 March 2023</h4>\r\n      <p>Type : Payment</p>\r\n      <i>#695546465saf</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <div class=\"single-history\">\r\n      <h4>10 January 2023</h4>\r\n      <p>Type : Policy Claim</p>\r\n      <i>#98746541654yg</i><br /><br />\r\n      <a href=\"#\">view more details</a>\r\n    </div>\r\n\r\n    <button>Load More</button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_user_user-history_user-history_module_ts.js.map