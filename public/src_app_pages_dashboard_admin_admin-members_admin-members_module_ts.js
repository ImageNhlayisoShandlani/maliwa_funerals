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

module.exports = ".my-members {\n  width: 96%;\n  margin-left: 2%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-top: 2.5rem;\n}\n.my-members .single-member {\n  width: 100%;\n  height: 9vh;\n  margin-bottom: 1.23rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  background: #cd9833;\n  border-radius: 10px;\n}\n.my-members .single-member .number,\n.my-members .single-member .name,\n.my-members .single-member .mail,\n.my-members .single-member .packages,\n.my-members .single-member .date {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.my-members .single-member .number {\n  width: 7%;\n}\n.my-members .single-member .name {\n  width: 20%;\n}\n.my-members .single-member .ddate {\n  width: 25%;\n}\n.my-members .single-member .mail {\n  width: 28%;\n}\n.my-members .single-member .packages {\n  width: 20%;\n}\n.my-members .single-member .buttons {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n.my-members .single-member .buttons .call button {\n  background: green;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 7.5rem;\n  height: 2rem;\n  color: #ccc;\n  border-radius: 5px;\n}\n.my-members .single-member .buttons .remove button {\n  background: red;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 7.5rem;\n  height: 2rem;\n  color: #ddd;\n  border-radius: 5px;\n}\n.my-members .flip {\n  background: #999;\n}\n.load {\n  margin-left: 5%;\n  width: 12rem;\n  background: #0b1c64;\n  color: #ddd;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  height: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: 1.18rem;\n}\n@media (min-width: 350px) and (max-width: 500px) and (orientation: portrait) {\n  ion-header {\n    display: initial !important;\n  }\n  ion-header h4 {\n    margin-left: 3rem !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 280vw !important;\n  }\n}\n@media (min-width: 660px) and (max-width: 925px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  ion-header h4 {\n    margin-left: 14rem !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 180vw !important;\n  }\n}\n@media (min-width: 491px) and (max-width: 760px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 250vw !important;\n  }\n}\n/******************* SMALL TABLET Landscape VIERW *****************************************/\n@media (min-width: 719px) and (max-width: 1020px) and (min-height: 500px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 220vw !important;\n  }\n}\n/********************************** LARGE TABLET Portarit VIEW ***********************************************/\n@media (min-width: 761px) and (max-width: 920px) and (orientation: portrait) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 200vw !important;\n  }\n}\n/********************************** LARGE TABLET Landscape VIEW ***********************************************/\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-header {\n    display: flex !important;\n  }\n\n  ion-toolbar {\n    display: flex !important;\n  }\n\n  .my-members {\n    overflow-x: scroll !important;\n  }\n  .my-members .single-member {\n    width: 170vw !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-content {\n    --background: #222 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1lbWJlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmhsYXlpc28lMjBTaG9uZGxhbmlcXERlc2t0b3BcXGlvbmljY29kZVxcd29ya1xcbmV3LW1rLWlubm9zXFxtYWxpd2FfZnVuZXJhbHNcXHNyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxhZG1pblxcYWRtaW4tbWVtYmVyc1xcYWRtaW4tbWVtYmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7Ozs7O0VBS0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ047QURDSTtFQUNFLFNBQUE7QUNDTjtBRENJO0VBQ0UsVUFBQTtBQ0NOO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURDSTtFQUNFLFVBQUE7QUNDTjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNETjtBRElRO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGVjtBRE9RO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEV0U7RUFDRSxnQkFBQTtBQ1RKO0FEYUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRGFBO0VBQ0U7SUFDRSwyQkFBQTtFQ1ZGO0VEWUU7SUFDRSw0QkFBQTtFQ1ZKOztFRGNBO0lBQ0UsNkJBQUE7RUNYRjtFRGFFO0lBQ0UsdUJBQUE7RUNYSjtBQUNGO0FEZUE7RUFDRTtJQUNFLHdCQUFBO0VDYkY7O0VEZ0JBO0lBQ0Usd0JBQUE7RUNiRjs7RURnQkU7SUFDRSw2QkFBQTtFQ2JKOztFRGlCQTtJQUNFLDZCQUFBO0VDZEY7RURnQkU7SUFDRSx1QkFBQTtFQ2RKO0FBQ0Y7QURrQkE7RUFDRTtJQUNFLHdCQUFBO0VDaEJGOztFRG1CQTtJQUNFLHdCQUFBO0VDaEJGOztFRGtCQTtJQUNFLDZCQUFBO0VDZkY7RURpQkU7SUFDRSx1QkFBQTtFQ2ZKO0FBQ0Y7QURtQkEsMkZBQUE7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7RUNsQkY7O0VEcUJBO0lBQ0Usd0JBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsNkJBQUE7RUNsQkY7RURvQkU7SUFDRSx1QkFBQTtFQ2xCSjtBQUNGO0FEc0JBLDhHQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VDcEJGOztFRHVCQTtJQUNFLHdCQUFBO0VDcEJGOztFRHVCQTtJQUNFLDZCQUFBO0VDcEJGO0VEc0JFO0lBQ0UsdUJBQUE7RUNwQko7QUFDRjtBRHdCQSwrR0FBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSx3QkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSw2QkFBQTtFQ3RCRjtFRHdCRTtJQUNFLHVCQUFBO0VDdEJKO0FBQ0Y7QUQwQkE7RUFDRTtJQUNFLDZCQUFBO0VDeEJGO0FBQ0YiLCJmaWxlIjoiYWRtaW4tbWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbWVtYmVycyB7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG5cclxuICAuc2luZ2xlLW1lbWJlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogI2NkOTgzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLm51bWJlcixcclxuICAgIC5uYW1lLFxyXG4gICAgLm1haWwsXHJcbiAgICAucGFja2FnZXMsXHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDclO1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgLmRkYXRlIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIC5tYWlsIHtcclxuICAgICAgd2lkdGg6IDI4JTtcclxuICAgIH1cclxuXHJcbiAgICAucGFja2FnZXMge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgIC5jYWxsIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHdpZHRoOiA3LjVyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHdpZHRoOiA3LjVyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGlwIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIHdpZHRoOiAxMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMGIxYzY0O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xOHJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMjgwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMTgwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubXktbWVtYmVycyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2luZ2xlLW1lbWJlciB7XHJcbiAgICAgIHdpZHRoOiAyNTB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKiogU01BTEwgVEFCTEVUIExhbmRzY2FwZSBWSUVSVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MTlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXktbWVtYmVycyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2luZ2xlLW1lbWJlciB7XHJcbiAgICAgIHdpZHRoOiAyMjB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogTEFSR0UgVEFCTEVUIFBvcnRhcml0IFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm15LW1lbWJlcnMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNpbmdsZS1tZW1iZXIge1xyXG4gICAgICB3aWR0aDogMjAwdncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBMYW5kc2NhcGUgVklFVyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXktbWVtYmVycyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2luZ2xlLW1lbWJlciB7XHJcbiAgICAgIHdpZHRoOiAxNzB2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIubXktbWVtYmVycyB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5dmg7XG4gIG1hcmdpbi1ib3R0b206IDEuMjNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjY2Q5ODMzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLm51bWJlcixcbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5uYW1lLFxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLm1haWwsXG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAucGFja2FnZXMsXG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAuZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAubnVtYmVyIHtcbiAgd2lkdGg6IDclO1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLm5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIgLmRkYXRlIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5tYWlsIHtcbiAgd2lkdGg6IDI4JTtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5wYWNrYWdlcyB7XG4gIHdpZHRoOiAyMCU7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAuYnV0dG9ucyB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciAuYnV0dG9ucyAuY2FsbCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA3LjVyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIC5idXR0b25zIC5yZW1vdmUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDcuNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm15LW1lbWJlcnMgLmZsaXAge1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuXG4ubG9hZCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgd2lkdGg6IDEycmVtO1xuICBiYWNrZ3JvdW5kOiAjMGIxYzY0O1xuICBjb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMnJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDEuMThyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWhlYWRlciBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1tZW1iZXJzIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgfVxuICAubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciB7XG4gICAgd2lkdGg6IDI4MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkgYW5kIChtYXgtd2lkdGg6IDkyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1oZWFkZXIgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm15LW1lbWJlcnMge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZW1iZXJzIC5zaW5nbGUtbWVtYmVyIHtcbiAgICB3aWR0aDogMTgwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MXB4KSBhbmQgKG1heC13aWR0aDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktbWVtYmVycyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiAyNTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKiBTTUFMTCBUQUJMRVQgTGFuZHNjYXBlIFZJRVJXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDcxOXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1tZW1iZXJzIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgfVxuICAubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciB7XG4gICAgd2lkdGg6IDIyMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExBUkdFIFRBQkxFVCBQb3J0YXJpdCBWSUVXICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2MXB4KSBhbmQgKG1heC13aWR0aDogOTIwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXktbWVtYmVycyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1lbWJlcnMgLnNpbmdsZS1tZW1iZXIge1xuICAgIHdpZHRoOiAyMDB2dyAhaW1wb3J0YW50O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMQVJHRSBUQUJMRVQgTGFuZHNjYXBlIFZJRVcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyMHB4KSBhbmQgKG1heC13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5teS1tZW1iZXJzIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgfVxuICAubXktbWVtYmVycyAuc2luZ2xlLW1lbWJlciB7XG4gICAgd2lkdGg6IDE3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

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