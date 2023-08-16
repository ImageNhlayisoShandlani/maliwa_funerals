"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'landing',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_footer_footer_module_ts"), __webpack_require__.e("src_app_pages_home-pages_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/landing/landing.module */ 218)).then((m) => m.LandingPageModule),
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home-pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/login/login.module */ 823)).then((m) => m.LoginPageModule),
            },
            {
                path: 'register',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home-pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/register/register.module */ 8154)).then((m) => m.RegisterPageModule),
            },
            {
                path: 'about-us',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_footer_footer_module_ts"), __webpack_require__.e("src_app_pages_home-pages_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/about-us/about-us.module */ 2153)).then((m) => m.AboutUsPageModule),
            },
            {
                path: 'contact-us',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_footer_footer_module_ts"), __webpack_require__.e("src_app_pages_home-pages_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/contact-us/contact-us.module */ 8644)).then((m) => m.ContactUsPageModule),
            },
            {
                path: 'gallery',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_footer_footer_module_ts"), __webpack_require__.e("src_app_pages_home-pages_gallery_gallery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home-pages/gallery/gallery.module */ 8489)).then((m) => m.GalleryPageModule),
            },
            {
                path: 'admin-landing',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-pages_dashboard_admin_admin-landing_admin-landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../new-pages/dashboard/admin/admin-landing/admin-landing.module */ 7111)).then((m) => m.AdminLandingPageModule),
            },
            {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_footer_footer_module_ts"), __webpack_require__.e("src_app_new-pages_home-pages_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../new-pages/home-pages/products/products.module */ 8866)).then((m) => m.ProductsPageModule),
            },
        ],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n@media (min-width: 1230px) {\n  ion-tab-bar {\n    display: none;\n  }\n}\n\n@media (min-width: 1020px) and (max-width: 1370px) and (min-height: 760px) and (orientation: landscape) {\n  ion-tab-bar {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT25lRHJpdmUlMjAtJTIwU0FCQyUyMFB0eSUyMEx0ZFxcRGVza3RvcFxcb3RoZXJzXFxpb25pY19jb2RlXFxwcm9fcHJhY1xcbWFsaXdhX2Z1bmVyYWxzXFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLGFBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0U7SUFDRSxhQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjMwcHgpIHtcclxuICBpb24tdGFiLWJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkgYW5kIChtYXgtd2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA3NjBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgaW9uLXRhYi1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjMwcHgpIHtcbiAgaW9uLXRhYi1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzYwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24tdGFiLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"landing\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"products\">\r\n      <ion-icon name=\"albums-outline\"></ion-icon>\r\n      <ion-label>Products</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!--\r\n    <ion-tab-button tab=\"gallery\">\r\n      <ion-icon name=\"images-outline\"></ion-icon>\r\n      <ion-label>Galery</ion-label>\r\n    </ion-tab-button>\r\n  -->\r\n\r\n    <!--\r\n    <ion-tab-button tab=\"about-us\">\r\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\r\n      <ion-label>About Us</ion-label>\r\n    </ion-tab-button>\r\n  -->\r\n\r\n    <ion-tab-button tab=\"contact-us\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n      <ion-label>Contact Us</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"login\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Login</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map