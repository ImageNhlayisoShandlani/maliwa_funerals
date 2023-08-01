"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_admin_admin-members_admin-members_module_ts"],{

/***/ 1936:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-members/admin-members-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMembersPageRoutingModule": () => (/* binding */ AdminMembersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_members_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-members.page */ 113);




const routes = [
    {
        path: '',
        component: _admin_members_page__WEBPACK_IMPORTED_MODULE_0__.AdminMembersPage
    }
];
let AdminMembersPageRoutingModule = class AdminMembersPageRoutingModule {
};
AdminMembersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminMembersPageRoutingModule);



/***/ }),

/***/ 9024:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-members/admin-members.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMembersPageModule": () => (/* binding */ AdminMembersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_members_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-members-routing.module */ 1936);
/* harmony import */ var _admin_members_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-members.page */ 113);







let AdminMembersPageModule = class AdminMembersPageModule {
};
AdminMembersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_members_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminMembersPageRoutingModule
        ],
        declarations: [_admin_members_page__WEBPACK_IMPORTED_MODULE_1__.AdminMembersPage]
    })
], AdminMembersPageModule);



/***/ }),

/***/ 113:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-members/admin-members.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMembersPage": () => (/* binding */ AdminMembersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _admin_members_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-members.page.html?ngResource */ 9771);
/* harmony import */ var _admin_members_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-members.page.scss?ngResource */ 2076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AdminMembersPage = class AdminMembersPage {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
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
AdminMembersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AdminMembersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-members',
        template: _admin_members_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_members_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMembersPage);



/***/ }),

/***/ 2076:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-members/admin-members.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".my-members {\n  width: 96%;\n  margin-left: 2%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-top: 2.5rem;\n}\n.my-members .single-member {\n  width: 100%;\n  height: 9vh;\n  margin-bottom: 1.23rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  background: #cd9833;\n  border-radius: 10px;\n}\n.my-members .single-member .number,\n.my-members .single-member .name,\n.my-members .single-member .mail,\n.my-members .single-member .packages,\n.my-members .single-member .date {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.my-members .single-member .number {\n  width: 7%;\n}\n.my-members .single-member .name {\n  width: 20%;\n}\n.my-members .single-member .ddate {\n  width: 25%;\n}\n.my-members .single-member .mail {\n  width: 28%;\n}\n.my-members .single-member .packages {\n  width: 20%;\n}\n.my-members .single-member .buttons {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.my-members .single-member .buttons .call button {\n  background: green;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 7.5rem;\n  height: 2rem;\n  color: #ccc;\n  border-radius: 5px;\n}\n.my-members .single-member .buttons .remove button {\n  background: red;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 7.5rem;\n  height: 2rem;\n  color: #ddd;\n  border-radius: 5px;\n}\n.my-members .flip {\n  background: #999;\n}\n.load {\n  margin-left: 5%;\n  width: 12rem;\n  background: #0b1c64;\n  color: #ddd;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  height: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: 1.18rem;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 280vw !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 180vw !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 250vw !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 220vw !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 200vw !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 170vw !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1lbWJlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT25lRHJpdmUlMjAtJTIwU0FCQyUyMFB0eSUyMEx0ZFxcRGVza3RvcFxcb3RoZXJzXFxpb25pY19jb2RlXFxwcm9fcHJhY1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcYWRtaW5cXGFkbWluLW1lbWJlcnNcXGFkbWluLW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJOzs7OztFQUtFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFDRSxTQUFBO0FDQ047QURDSTtFQUNFLFVBQUE7QUNDTjtBRENJO0VBQ0UsVUFBQTtBQ0NOO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTjtBREdJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRE47QURJUTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlY7QURPUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFdFO0VBQ0UsZ0JBQUE7QUNUSjtBRGFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVkY7QURhQTtFQUNFO0lBQ0UsMkJBQUE7RUNWRjtFRFlFO0lBQ0UsNEJBQUE7RUNWSjs7RURjQTtJQUNFLDZCQUFBO0VDWEY7RURhRTtJQUNFLHVCQUFBO0VDWEo7QUFDRjtBRGVBO0VBQ0U7SUFDRSx3QkFBQTtFQ2JGOztFRGdCQTtJQUNFLHdCQUFBO0VDYkY7O0VEZ0JFO0lBQ0UsNkJBQUE7RUNiSjs7RURpQkE7SUFDRSw2QkFBQTtFQ2RGO0VEZ0JFO0lBQ0UsdUJBQUE7RUNkSjtBQUNGO0FEa0JBO0VBQ0U7SUFDRSx3QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSx3QkFBQTtFQ2hCRjs7RURrQkE7SUFDRSw2QkFBQTtFQ2ZGO0VEaUJFO0lBQ0UsdUJBQUE7RUNmSjtBQUNGO0FEbUJBLDJGQUFBO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VDbEJGOztFRHFCQTtJQUNFLHdCQUFBO0VDbEJGOztFRHFCQTtJQUNFLDZCQUFBO0VDbEJGO0VEb0JFO0lBQ0UsdUJBQUE7RUNsQko7QUFDRjtBRHNCQSw4R0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ3BCRjs7RUR1QkE7SUFDRSx3QkFBQTtFQ3BCRjs7RUR1QkE7SUFDRSw2QkFBQTtFQ3BCRjtFRHNCRTtJQUNFLHVCQUFBO0VDcEJKO0FBQ0Y7QUR3QkEsK0dBQUE7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7RUN0QkY7O0VEeUJBO0lBQ0Usd0JBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsNkJBQUE7RUN0QkY7RUR3QkU7SUFDRSx1QkFBQTtFQ3RCSjtBQUNGO0FEMEJBO0VBQ0U7SUFDRSw2QkFBQTtFQ3hCRjtBQUNGIiwiZmlsZSI6ImFkbWluLW1lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LW1lbWJlcnMge1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuXHJcbiAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDl2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6ICNjZDk4MzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC5udW1iZXIsXHJcbiAgICAubmFtZSxcclxuICAgIC5tYWlsLFxyXG4gICAgLnBhY2thZ2VzLFxyXG4gICAgLmRhdGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm51bWJlciB7XHJcbiAgICAgIHdpZHRoOiA3JTtcclxuICAgIH1cclxuICAgIC5uYW1lIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICAgIC5kZGF0ZSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAubWFpbCB7XHJcbiAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhY2thZ2VzIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAuY2FsbCB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICB3aWR0aDogNy41cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtb3ZlIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICB3aWR0aDogNy41cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmxpcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB3aWR0aDogMTJyZW07XHJcbiAgYmFja2dyb3VuZDogIzBiMWM2NDtcclxuICBjb2xvcjogI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXNpemU6IDEuMThyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5teS1tZW1iZXJzIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgICAgd2lkdGg6IDI4MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTRyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5teS1tZW1iZXJzIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgICAgd2lkdGg6IDE4MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDkxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMjUwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqIFNNQUxMIFRBQkxFVCBMYW5kc2NhcGUgVklFUlcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMjIwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzYxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5teS1tZW1iZXJzIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zaW5nbGUtbWVtYmVyIHtcclxuICAgICAgd2lkdGg6IDIwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMTcwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLm15LW1lbWJlcnMge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOXZoO1xuICBtYXJnaW4tYm90dG9tOiAxLjIzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogI2NkOTgzMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5udW1iZXIsXG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAubmFtZSxcbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5tYWlsLFxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLnBhY2thZ2VzLFxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLm51bWJlciB7XG4gIHdpZHRoOiA3JTtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5kZGF0ZSB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAubWFpbCB7XG4gIHdpZHRoOiAyOCU7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAucGFja2FnZXMge1xuICB3aWR0aDogMjAlO1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmJ1dHRvbnMge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmJ1dHRvbnMgLmNhbGwgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogNy41cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAuYnV0dG9ucyAucmVtb3ZlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA3LjVyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5teS1tZW1iZXJzIC5mbGlwIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuLmxvYWQge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiAxMnJlbTtcbiAgYmFja2dyb3VuZDogIzBiMWM2NDtcbiAgY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDJyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC1zaXplOiAxLjE4cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktbWVtYmVycyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiAyODB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIGFuZCAobWF4LXdpZHRoOiA5MjVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taGVhZGVyIGg0IHtcbiAgICBtYXJnaW4tbGVmdDogMTRyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1tZW1iZXJzIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgfVxuICAubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciB7XG4gICAgd2lkdGg6IDE4MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LW1lbWJlcnMge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogMjUwdncgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktbWVtYmVycyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiAyMjB2dyAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgUG9ydGFyaXQgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LW1lbWJlcnMge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogMjAwdncgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIExhbmRzY2FwZSBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktbWVtYmVycyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiAxNzB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 9771:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin-members/admin-members.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  type=\"overlay\"\r\n  menuId=\"adminMenu-site-members\"\r\n  contentId=\"admin-site-members\"\r\n>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title\r\n        ><center>\r\n          <img\r\n            src=\"../../../../../assets/new-logos/GZX-01.png\"\r\n            alt=\"\"\r\n          /></center\r\n      ></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item (click)=\"navigate(1)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <p>Home</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(2)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <p>Add Policy Holder</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(6)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <p>Add to Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(3)\" class=\"admin-active\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"people-outline\"></ion-icon>\r\n          <p>Members</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(7)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>\r\n          <p>View Gallery</p>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"navigate(4)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n          <p>Deals</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(5)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"construct-outline\"></ion-icon>\r\n          <p>Update Website / App</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigate(0)\">\r\n        <div class=\"center-these\">\r\n          <ion-icon name=\"power-outline\"></ion-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"admin-site-members\"></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"admin-menus\">\r\n    <ion-title slot=\"center\">Members</ion-title>\r\n    <ion-buttons slot=\"start\" (click)=\"adminMenu('-site-members')\">\r\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h4 style=\"margin-left: 40%\">Members</h4>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"admin-cover\">\r\n  <div class=\"my-members\">\r\n    <div class=\"member-id\"></div>\r\n    <div class=\"single-member\">\r\n      <div class=\"number\"><i>1.</i></div>\r\n      <div class=\"name\"><p>Zuza Mselsku</p></div>\r\n      <div class=\"mail\"><p>imi@mail.com</p></div>\r\n      <div class=\"date\"><p>07-Jan-2022</p></div>\r\n      <div class=\"packages\"><p>Simple & Premium</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"single-member flip\">\r\n      <div class=\"number\"><i>2.</i></div>\r\n      <div class=\"name\"><p>Mfo Fhula</p></div>\r\n      <div class=\"mail\"><p>legend@mfo.com</p></div>\r\n      <div class=\"date\"><p>11-May-2022</p></div>\r\n      <div class=\"packages\"><p>The Real Deal</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-member\">\r\n      <div class=\"number\"><i>3.</i></div>\r\n      <div class=\"name\"><p>Joe Man</p></div>\r\n      <div class=\"mail\"><p>joe@jjoe</p></div>\r\n      <div class=\"date\"><p>25-June-2021</p></div>\r\n      <div class=\"packages\"><p>Full</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-member flip\">\r\n      <div class=\"number\"><i>4.</i></div>\r\n      <div class=\"name\"><p>Vuyo Somebody</p></div>\r\n      <div class=\"mail\"><p>vuyond@mfo.com</p></div>\r\n      <div class=\"date\"><p>11-May-2022</p></div>\r\n      <div class=\"packages\"><p>Simple</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-member\">\r\n      <div class=\"number\"><i>5.</i></div>\r\n      <div class=\"name\"><p>Raymond Joyles</p></div>\r\n      <div class=\"mail\"><p>rayjules@gmail.com</p></div>\r\n      <div class=\"date\"><p>15-Dec-2021</p></div>\r\n      <div class=\"packages\"><p>Full</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"single-member flip\">\r\n      <div class=\"number\"><i>6.</i></div>\r\n      <div class=\"name\"><p>Ghulele Baloyi</p></div>\r\n      <div class=\"mail\"><p>vuyond@mfo.com</p></div>\r\n      <div class=\"date\"><p>11-May-2022</p></div>\r\n      <div class=\"packages\"><p>Simple</p></div>\r\n      <div class=\"buttons\">\r\n        <div class=\"call\">\r\n          <button>\r\n            <i>Message</i>\r\n            <ion-icon name=\"mail-unread-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"remove\">\r\n          <button>\r\n            <i>Delete </i>\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button class=\"load\">\r\n    <i>load more</i>\r\n    <ion-icon name=\"refresh-circle-outline\"></ion-icon>\r\n  </button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_admin_admin-members_admin-members_module_ts.js.map