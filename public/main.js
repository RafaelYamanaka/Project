(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/login-page/login-page.component */ "./src/app/shared/components/login-page/login-page.component.ts");
/* harmony import */ var _shared_components_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/signup-page/signup-page.component */ "./src/app/shared/components/signup-page/signup-page.component.ts");
/* harmony import */ var _modules_dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dashboard/components/dashboard/dashboard.component */ "./src/app/modules/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard/components/profile/profile.component */ "./src/app/modules/dashboard/components/profile/profile.component.ts");
/* harmony import */ var _modules_dashboard_components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dashboard/components/event-detail/event-detail.component */ "./src/app/modules/dashboard/components/event-detail/event-detail.component.ts");
/* harmony import */ var _modules_dashboard_components_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dashboard/components/event-page/event-page.component */ "./src/app/modules/dashboard/components/event-page/event-page.component.ts");









var routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: _shared_components_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"] },
    { path: 'login', component: _shared_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'dashboard', component: _modules_dashboard_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'profile', component: _modules_dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'eventdetail', component: _modules_dashboard_components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _modules_dashboard_components_event_page_event_page_component__WEBPACK_IMPORTED_MODULE_8__["EventPageComponent"],
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Schedule-Pro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/login-page/login-page.component */ "./src/app/shared/components/login-page/login-page.component.ts");
/* harmony import */ var _shared_components_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/signup-page/signup-page.component */ "./src/app/shared/components/signup-page/signup-page.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                _shared_components_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__["SignupPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ],
            providers: [
                _services_account_service__WEBPACK_IMPORTED_MODULE_12__["AccountService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/dashboard/dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/dashboard/dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<body class=\"has-background-light\">\r\n<div class=\"columns is-mobile is-centered\">\r\n  <div class=\"columns\">\r\n    <div class=\"column\">\r\n        <figure class=\"image is-128x128\">\r\n          <a href=\"/\">\r\n            <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAYGBjz8/NxcXGmpqY+Pj55eXn6+vr39/fT09NlZWXp6ekJCQnt7e1oaGgwMDBWVlasrKyTk5PNzc2zs7M3NzfZ2dkTExPKysorKyuKiopgYGCBgYFbW1uXl5dJSUmfn5+8vLwiIiJRUVGGhoZKSko+qI6IAAAHIElEQVR4nO2d13qbQBSEhXBBNrJKFBXLRW55/0dMXMUsLGe2AKsv57+0BN6hDGe2oNFIURRFURRFURRFURRFUZQTpJjkk2LoRnRGvtsv1uNsvF7sdzm7Ubm8v7Ryvyy7bLAj5X6cHdnuubb9zgSWHTeb57HWtkdiq40kMMs2nTedorxoaNuFfBovZYWzHpovs5o2Nm66kjZcyApv+xAgsbQ277ewZdOpNxj3IqGd+5b23bdvehIKJw+tDbxrfTqegsJGj6nS6jcnoPBKbmJ2Zd88fYV2j6li95vkFb5RArNsb9tB6grbPabKnWUPaSssb2mBWTa/adxH0gpXDvr+MW30m5QVnrsJzJr9JmGFrMdU+VXfTbIKJ0TF3MB1rb5JVWE59xL4r74x/SZRhY4eU2Vr5Nk0FXJ1jI3n9BW2ZSUG8JsEFRZ8HWPjLGmF5TpYYJYdjl2NySkkPGY2monfmf74TWoKCY9570KsdyzW+PabxBQSdcxny5+5I5GcQqKO+b76iI7eWXIKyxexLRdHB8nlpn98OyGFO7kpZ7DBmfj9l01KComsZCaHX/Imz+koJOqY59pGjN/8SUOh0Of7jllRf7DZyu1PQiGRlWqp6JMb4iJMQCHR5zuz9dwXcn0zvEIPj6lC+M3ACok6BnuYyjscpxCHsYdVSGSlLfYSrrbZFsdFrwL9plOFhMes0WM+a3OcXXATlri6VEjUMcYg+/dz0xgXDfKbDhUSWQk9Jj9e0w84nybEb7pTSGelb2Ac4xb9hqhv+lZYvIr/eop1jHlN7+DTTfNsjeEUEuNKB/SYp9oXnuDzm0NSCnfyETfqmKapP5fwDd/6phOFhMfgqO6k+QQdJvCtfTIKnbOS9SYzblUvv4mvMJfrmDHWMW2FGZZ0V+OWr/al0L2Oae88xBmKHvVNbIVEVrrGLSQDMcqe64EVOmelG/mUG5MUXOubuAoJjzFuLOZBPuVv244VMuNKfo01DstQCok+3zUW1PxQIoaN3MVv4il0zkpEF9yRB3z4O9Q30RQ6ZyXHocQ1hg3eb2IpdPYY4pQbYNig/SaOwolzVnKfEpVl57AHNk9FUchkJbzIiFUEDWDYKLk8FUMhkZVwNhNxypt5Bb8pqPomgkLnrFR65/VsipcCk6fCFTp7TECfS2bmLsJvtoH6mHElrGNC++nxmUP0F1tHRSiIrGQUzvLYrgSOFROlu2Vki4KYH4NZKbD/+hMjXxJ+471+zTkrUVFCZup83Uvrpyw4e0zwOJL/fq3rGVooiPkxeKz9+sqYFhN5yraewQ4zPwbuF+aIOLAAhyTGw+eOS4KJwhk9xnvmM9li2W/k9ZpVCI/B64io7FyZYtgg7gEHv3H2GJ8oIYNhI6LfEGsJjKwUOvPZBnZuEHnqDrsKLBBZCVdF5nE9psoCOn7E1ZrW9VMA4TG4spVwXX9e4FgWd+IGzeunqrh7TAQdbTj7jfCWBWePIaY0B4IjG4F+w3QA4lUQHiVkMGww9Y01TxEeg3cyMdU3BhfgN8xQiKW+cc5KkaKEjGEfRJ5qrG+cs1K8KCGDNz+Rpxr8xtljwqcVuuB8cM33URTyfGPsjyEeTXFB+yD6b17xqU3UMeAx0aOEDNqHY55i6hg45ZYXznSLEY+Ii+inWnCuY8IWUfqD9kHUN1/phBhkQI/xG5WIAY5ssH5DrJYDj/FcqB2HBcQj4oE8Y644HLzc9O8xVeaQTIlh2OVIHMNCm+46SshA2JAfWoeRdKLRY56iNDIMnLYp+c10JFx0aF/DeUwV9BvhNpsLAQ89xneWa2xw2mZ7nnocFS3zAecQW4iVn70BfpO3XIfjoq3hOHbdZ5SQgSd0y3j4x6GwDdqix8QclYgB17qvIeXmWxHrGOdZkZ2Dabz5Cvvp42nobcGsNECUkMGw0ZSnKj08tekh2Oc7SJSQwbBR7y9+rXyaG4b6AB4zVJSQgae1OTt0jB3m8BnexT7vfOqLN2gp+o3R4VatN8FjvCc49QNOo6r6DXaWj6oVJ3bdpVLH2DhAa4/1DVavH3zVnMaqslGUJeUdYsyJ+u5xwtq1ehbfzL96LPLoldq8to8z1XAG38lXq/rw28kpHJWrFTVQeroKXVGFQ6MKVaEqHB5VqApV4fCoQlWoCodHFapCVTg8Qys8LM8llmH9lUMrPJP/QeAsXFWoClWhKlSFqlAVqkJVqApVoSpUhapQFapCVagKVaEqVIWqUBWqQlWoClWhKlSFqlAVqkJVqApVoSpUhf+XwrC3k3av8CVYYdjMwe4VXgQrDHtBafcK235PmSPsrTTdK/T+1YAjQb9l27nCmbx/kTzEa7pW+JLL+5cpA1460LHCrePL9G04/b5YnwofnNbdt7K7XPu9oqY7hdP1Ze3dHkEUk9wH5iB77jnoB3QURVEURVEURVEURVEURXHmL8YZlAubaH3bAAAAAElFTkSuQmCC\">\r\n          </a>  \r\n        </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n        <figure class=\"image is-128x128\">\r\n          <a href=\"eventdetail\">\r\n            <img src=\"https://image.flaticon.com/icons/svg/34/34389.svg\">\r\n          </a>\r\n        </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"columns is-mobile is-centered\">\r\n  <div class=\"columns\">\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n    <div class=\"column\">\r\n      <figure class=\"image is-128x128\">\r\n        <img src=\"https://versions.bulma.io/0.7.0/images/placeholders/256x256.png\">\r\n      </figure>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/dashboard/dashboard.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/dashboard/dashboard.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 150px; }\n\n#column-one {\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxEcmFjb2duaWNcXERlc2t0b3BcXFByb2plY3RcXHJhZmFlbHlhbWFuYWthLmdpdGh1Yi5pb1xcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcblxyXG4jY29sdW1uLW9uZXtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/dashboard/dashboard.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/dashboard/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/event-detail/event-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-detail/event-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!DOCTYPE html>\r\n<figure class=\"image is-3by1\">\r\n  <img src=\"http://www.paarlonline.com/wp-content/uploads/2017/10/Generic-Picnic-Image-1-1030x690.jpg\">\r\n</figure>\r\n<hr>\r\n<html>\r\n  <head>\r\n    <style>\r\n    p.title {\r\n      font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    }\r\n    \r\n    p.body {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-size: 28px\r\n    }\r\n\r\n    .alignleft {\r\n    float: left;\r\n    }\r\n\r\n    .alignright {\r\n      float: right;\r\n    }\r\n    </style>\r\n  </head>\r\n<header>\r\n    <div id=\"textbox\">\r\n      <p class=\"alignleft title\">Sunday Picnic! (placeholder) </p>\r\n      <p class=\"alignright title\">Date (placeholder)</p>\r\n    </div>\r\n    <div style=\"clear: both;\"></div>\r\n</header>\r\n<body>\r\n<br>\r\n<p class=\"body\">\r\nCome join us! \r\n</p>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/modules/dashboard/components/event-detail/event-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-detail/event-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/event-detail/event-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-detail/event-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent() {
    }
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/modules/dashboard/components/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/modules/dashboard/components/event-detail/event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/event-page/event-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-page/event-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n  <link rel=\"stylesheet\" href=\"event-page.component.scss\">\r\n</head>\r\n\r\n<body>\r\n  <div class=\"flexbox-parent\">\r\n    <div layout=\"row\" layout-align=\"center center\" style=\"min-height: 500px\">\r\n\r\n      <form action=\"/event\" method=\"POST\" display=\"is-flex\">\r\n        <h1>Create your event!</h1>\r\n        <div class='title'>\r\n          <h3>Title:</h3><label for=\"title\"></label>\r\n          <input type=\"text\" name=\"title\">\r\n        </div>\r\n        <div class='description'><br>\r\n          <h3>\r\n            Description:</h3><label for=\"description\"></label>\r\n          <textarea rows=\"10\" cols=\"50\">\r\n              </textarea>\r\n        </div>\r\n        <div class='time'><br>\r\n          <h3>Time:</h3><label for=\"time\"></label>\r\n          <select>\r\n            <option value=\"12am\">12:00AM</option>\r\n            <option value=\"1230am\">12:30AM</option>\r\n            <option value=\"1am\">1:00AM</option>\r\n            <option value=\"130am\">1:30AM</option>\r\n            <option value=\"2am\">2:00AM</option>\r\n            <option value=\"230am\">2:30AM</option>\r\n            <option value=\"3am\">3:00AM</option>\r\n            <option value=\"330am\">3:30AM</option>\r\n            <option value=\"4am\">4:00AM</option>\r\n            <option value=\"430am\">4:30AM</option>\r\n            <option value=\"5am\">5:00AM</option>\r\n            <option value=\"530am\">5:30AM</option>\r\n            <option value=\"6am\">6:00AM</option>\r\n            <option value=\"630am\">6:30AM</option>\r\n            <option value=\"7am\">7:00AM</option>\r\n            <option value=\"730am\">7:30AM</option>\r\n            <option value=\"8am\">8:00AM</option>\r\n            <option value=\"830am\">8:30AM</option>\r\n            <option value=\"9am\">9:00AM</option>\r\n            <option value=\"930am\">9:30AM</option>\r\n            <option value=\"10am\">10:00AM</option>\r\n            <option value=\"1030am\">10:30AM</option>\r\n            <option value=\"11am\">11:00AM</option>\r\n            <option value=\"1130am\">11:30AM</option>\r\n            <option value=\"12pm\">12:00PM</option>\r\n            <option value=\"1230pm\">12:30PM</option>\r\n            <option value=\"1pm\">1:00PM</option>\r\n            <option value=\"130pm\">1:30PM</option>\r\n            <option value=\"2pm\">2:00PM</option>\r\n            <option value=\"230pm\">2:30PM</option>\r\n            <option value=\"3pm\">3:00PM</option>\r\n            <option value=\"330pm\">3:30PM</option>\r\n            <option value=\"4pm\">4:00PM</option>\r\n            <option value=\"430pm\">4:30PM</option>\r\n            <option value=\"5pm\">5:00PM</option>\r\n            <option value=\"530pm\">5:30PM</option>\r\n            <option value=\"6pm\">6:00PM</option>\r\n            <option value=\"630pm\">6:30PM</option>\r\n            <option value=\"7pm\">7:00PM</option>\r\n            <option value=\"730pm\">7:30PM</option>\r\n            <option value=\"8pm\">8:00PM</option>\r\n            <option value=\"830pm\">8:30PM</option>\r\n            <option value=\"9pm\">9:00PM</option>\r\n            <option value=\"930pm\">9:30PM</option>\r\n            <option value=\"10pm\">10:00PM</option>\r\n            <option value=\"1030pm\">10:30PM</option>\r\n            <option value=\"11pm\">11:00PM</option>\r\n            <option value=\"1130pm\">11:30pM</option>\r\n\r\n\r\n          </select>\r\n        </div>\r\n        <div class='invite'><br>\r\n          <h3>Invite:</h3><label for=\"invite\"></label>\r\n          <input type=\"text\" name=\"invite\">\r\n        </div>\r\n        <div class='create'><br>\r\n          <button type=\"create\">Create</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/event-page/event-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-page/event-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #3466a8;\n  font-family: 'Oswald', sans-serif; }\n\n.flexbox-parent {\n  display: flex;\n  margin: 100px 20%;\n  justify-content: space-around;\n  text-align: center;\n  background-color: #f37c7c; }\n\n.create {\n  text-align: center; }\n\nbutton:hover {\n  background-color: #d900ff;\n  color: rgba(0, 0, 0, 0.856); }\n\n@media (max-width: 500px) {\n  body {\n    width: 95%;\n    min-width: 200px;\n    background-color: yellow; }\n  textarea {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9ldmVudC1wYWdlL0M6XFxVc2Vyc1xcRHJhY29nbmljXFxEZXNrdG9wXFxQcm9qZWN0XFxyYWZhZWx5YW1hbmFrYS5naXRodWIuaW9cXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxldmVudC1wYWdlXFxldmVudC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQW1DO0VBQ25DLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBb0MsRUFBQTs7QUFHdEM7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBa0M7RUFDbEMsMkJBQTJCLEVBQUE7O0FBTTdCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdCQUF3QixFQUFBO0VBRzFCO0lBQ0UsVUFBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2V2ZW50LXBhZ2UvZXZlbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTAyLCAxNjgpO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZsZXhib3gtcGFyZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTAwcHggMjAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMjQsIDEyNCk7XHJcbn1cclxuXHJcbi5jcmVhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAwLCAyNTUpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODU2KTtcclxuICA7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/event-page/event-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/event-page/event-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventPageComponent = /** @class */ (function () {
    function EventPageComponent() {
    }
    EventPageComponent.prototype.ngOnInit = function () {
    };
    EventPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-page',
            template: __webpack_require__(/*! ./event-page.component.html */ "./src/app/modules/dashboard/components/event-page/event-page.component.html"),
            styles: [__webpack_require__(/*! ./event-page.component.scss */ "./src/app/modules/dashboard/components/event-page/event-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventPageComponent);
    return EventPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar has-background-primary\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\" href=\"/dashboard\">\r\n      <h1>SP</h1>\r\n    </a>\r\n    <a role=\"button\" (click)=\"toggleMenu()\" class=\"navbar-burger burger {{menuOpen?'is-active':''}}\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasicExample\" class=\"navbar-menu {{menuOpen?'is-active':''}}\">\r\n    <div class=\"navbar-end\">\r\n      <div class=\"navbar-item\">\r\n        <div class=\"buttons\">\r\n          <img src=\"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png\">\r\n          <i class=\"far fa-bell\"></i>\r\n          <div class=\"navbar-item has-dropdown is-hoverable\">\r\n          <div class=\"navbar-item has-dropdown is-hoverable\">\r\n            <div [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact: true}\" >\r\n              <a [routerLink]=\"['/profile']\">Profile</a>\r\n            </div>\r\n            <a class=\"navbar-item\" (click)=\"onLogoutClick()\" href=\"#\">\r\n              Log out\r\n            </a>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxEcmFjb2duaWNcXERlc2t0b3BcXFByb2plY3RcXHJhZmFlbHlhbWFuYWthLmdpdGh1Yi5pb1xcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");





;
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.menuOpen = false;
    }
    NavbarComponent.prototype.toggleMenu = function () {
        console.log('toggle');
        this.menuOpen = !this.menuOpen;
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-sucess', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/modules/dashboard/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/modules/dashboard/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/profile/profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n\r\n<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.firstName}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username : {{user.userName}}</li>\r\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/profile/profile.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/profile/profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/profile/profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/dashboard/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/modules/dashboard/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/modules/dashboard/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/modules/dashboard/components/navbar/navbar.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/modules/dashboard/components/profile/profile.component.ts");
/* harmony import */ var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/event-detail/event-detail.component */ "./src/app/modules/dashboard/components/event-detail/event-detail.component.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountService = /** @class */ (function () {
    function AccountService() {
    }
    AccountService.prototype.validateSignUp = function (user) {
        if (user.firstName == undefined || user.lastName == undefined || user.userName == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ;
    AccountService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = "http://localhost:3000";
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + "/users/signup", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + "/users/login", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + "/users/profile", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/components/login-page/login-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-page/login-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<div class=\"flexbox-parent\">\r\n  <div layout=\"row\" layout-align=\"center center\" style=\"min-height: 500px\">\r\n    \r\n    <form (submit)=\"onLoginSubmit()\" display=\"is-flex\">\r\n      <h1>Login</h1>\r\n      <div class = 'username'>\r\n          <label for=\"name\"></label>\r\n          <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" placeholder=\"Username\">\r\n      </div>\r\n      <div class = 'password'><br>\r\n          <label for=\"name\"></label>\r\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n      </div>\r\n      <div class = 'submit'><br>\r\n          <button type=\"submit\">Login</button>\r\n      </div>\r\n    </form>\r\n    <div>\r\n      <a [routerLink]=\"['/signup']\">SignUp</a>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n<footer>\r\n  <p class=\"bottom-text\">\r\n    By clicking the Sign Up button, you agree to our\r\n    Terms & Conditions and\r\n    Privacy Policy.\r\n  </p>\r\n  </footer>"

/***/ }),

/***/ "./src/app/shared/components/login-page/login-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-page/login-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #3466a8;\n  font-family: 'Oswald', sans-serif; }\n\n.flexbox-parent {\n  display: flex;\n  margin: 100px 20%;\n  justify-content: space-around; }\n\nh1 {\n  text-align: center; }\n\n.submit {\n  text-align: center; }\n\nbutton:hover {\n  background-color: #d900ff;\n  color: rgba(0, 0, 0, 0.856); }\n\n.bottom-text {\n  text-align: center; }\n\nbutton {\n  width: 100%;\n  background: #eb2828;\n  display: block;\n  padding: 10px;\n  margin-top: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tcGFnZS9DOlxcVXNlcnNcXERyYWNvZ25pY1xcRGVza3RvcFxcUHJvamVjdFxccmFmYWVseWFtYW5ha2EuZ2l0aHViLmlvXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFtQztFQUNuQyxpQ0FBaUMsRUFBQTs7QUFJckM7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHlCQUFrQztFQUNsQywyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxMDIsIDE2OCk7ICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIFxyXG59XHJcbi5mbGV4Ym94LXBhcmVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMDBweCAyMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Ym1pdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAwLCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTYpOztcclxufVxyXG4uYm90dG9tLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlYjI4Mjg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/login-page/login-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-page/login-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





;
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            userName: this.userName,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now log in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
            ;
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/shared/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/shared/components/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/signup-page/signup-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/signup-page/signup-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n  <div class=\"flexbox-parent\">\r\n    <div layout=\"row\" layout-align=\"center center\" style=\"min-height: 500px\">\r\n\r\n      <form (submit)=\"onSignUpSubmit()\" display=\"is-flex\">\r\n        <h1>Sign Up</h1>\r\n        <div class='firstName'>\r\n          <label for=\"name\"></label>\r\n          <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\r\n        </div>\r\n        <div class='lastName'><br>\r\n          <label for=\"name\"></label>\r\n          <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" placeholder=\"Last Name\">\r\n        </div>\r\n        <div class='username'><br>\r\n          <label for=\"name\"></label>\r\n          <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" placeholder=\"Username\">\r\n        </div>\r\n        <div class='email'><br>\r\n          <label for=\"name\"></label>\r\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n        </div>\r\n        <div class='password'><br>\r\n          <label for=\"name\"></label>\r\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n        </div>\r\n        <div class='submit'><br>\r\n          <button type=\"submit\">Submit</button>\r\n        </div>\r\n      </form>\r\n      <div [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a [routerLink]=\"['/login']\">Login</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer>\r\n    <p class=\"bottom-text\">\r\n      By clicking the Sign Up button, you agree to our\r\n      Terms & Conditions and\r\n      Privacy Policy.\r\n    </p>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/shared/components/signup-page/signup-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/signup-page/signup-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #3466a8;\n  font-family: 'Oswald', sans-serif;\n  line-height: 1.8; }\n\n.flexbox-parent {\n  display: flex;\n  margin: 100px 20% 1px;\n  justify-content: space-around; }\n\nh1 {\n  text-align: center; }\n\n.submit {\n  text-align: center; }\n\nbutton:hover {\n  background-color: #d900ff;\n  color: rgba(0, 0, 0, 0.856); }\n\n.bottom-text {\n  text-align: center; }\n\nbutton {\n  width: 100%;\n  background: #eb2828;\n  display: block;\n  padding: 10px;\n  margin-top: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbnVwLXBhZ2UvQzpcXFVzZXJzXFxEcmFjb2duaWNcXERlc2t0b3BcXFByb2plY3RcXHJhZmFlbHlhbWFuYWthLmdpdGh1Yi5pb1xcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZ251cC1wYWdlXFxzaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx5QkFBa0M7RUFDbEMsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxMDIsIDE2OCk7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgXHJcbn1cclxuLmZsZXhib3gtcGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwMHB4IDIwJSAxcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Ym1pdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDAsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1Nik7XHJcbn1cclxuLmJvdHRvbS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWIyODI4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/signup-page/signup-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/signup-page/signup-page.component.ts ***!
  \************************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(accountService, flashMessage, authService, router) {
        this.accountService = accountService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SignupPageComponent.prototype.ngOnInit = function () { };
    SignupPageComponent.prototype.onSignUpSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.accountService.validateSignUp(user)) {
            console.log("Fill All.");
            this.flashMessage.show("Please fill in all fields.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.accountService.validateEmail(user.email)) {
            console.log("Invalid Email");
            this.flashMessage.show("Please use a valid email.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered.", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/shared/components/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/shared/components/signup-page/signup-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dracognic\Desktop\Project\rafaelyamanaka.github.io\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map