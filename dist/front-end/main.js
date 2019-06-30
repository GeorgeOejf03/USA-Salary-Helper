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
/* harmony import */ var _monthly_spendings_monthly_spendings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly-spendings/monthly-spendings.component */ "./src/app/monthly-spendings/monthly-spendings.component.ts");




var routes = [{
        path: 'details', component: _monthly_spendings_monthly_spendings_component__WEBPACK_IMPORTED_MODULE_3__["MonthlySpendingsComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<!-- <app-salary-insights></app-salary-insights> -->\n<app-salary-insights *ngIf=\"window.location.pathname === '/'\"></app-salary-insights>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'USA Salary Helper';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.window = window;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _salary_insights_salary_insights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-insights/salary-insights.component */ "./src/app/salary-insights/salary-insights.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _monthly_spendings_monthly_spendings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monthly-spendings/monthly-spendings.component */ "./src/app/monthly-spendings/monthly-spendings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _salary_insights_salary_insights_component__WEBPACK_IMPORTED_MODULE_7__["SalaryInsightsComponent"],
                _monthly_spendings_monthly_spendings_component__WEBPACK_IMPORTED_MODULE_9__["MonthlySpendingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-request.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-request.service.ts ***!
  \*****************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(http) {
        this.http = http;
    }
    HttpRequestService.prototype.getSpendings = function (query) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/salary', {
            params: query
        });
    };
    HttpRequestService.prototype.getSalaryData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/data');
    };
    HttpRequestService.prototype.setMonthlySpendings = function (data) {
        this.monthlySpendings = data;
    };
    HttpRequestService.prototype.getMonthlySpendings = function () {
        return this.monthlySpendings;
    };
    HttpRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/monthly-spendings/monthly-spendings.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/monthly-spendings/monthly-spendings.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-style: solid;\n  border-width: 2px;\n  width: 100%;\n}\n\n.red { \n  color: red\n}\n\n.green {\n  color: green;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.main-col {\n  width: 90%;\n}\n\n.sub-col {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGhseS1zcGVuZGluZ3MvbW9udGhseS1zcGVuZGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktc3BlbmRpbmdzL21vbnRobHktc3BlbmRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZCB7IFxuICBjb2xvcjogcmVkXG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW4tY29sIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnN1Yi1jb2wge1xuICB3aWR0aDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/monthly-spendings/monthly-spendings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/monthly-spendings/monthly-spendings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table *ngFor=\"let table of costs\" class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\" class=\"main-col\">{{ table.name }}</th>\n        <th scope=\"col\" class=\"sub-col\">{{ table.totalCost }} $</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let d of table.details\">\n        <td>{{ d.item }}</td>\n        <td>{{ d.cost }} $</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\" class=\"main-col\" [ngClass]=\"{'red': !isSaving, 'green': isSaving}\">Total saved money per year</th>\n        <th scope=\"col\" class=\"sub-col\" [ngClass]=\"{'red': !isSaving, 'green': isSaving}\">{{totalSavingsPerYear}}$</th>\n      </tr>\n    </thead>\n  </table>\n\n  <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"main-col\" [ngClass]=\"{'red': !isSaving, 'green': isSaving}\">Total saved money per month</th>\n          <th scope=\"col\" class=\"sub-col\" [ngClass]=\"{'red': !isSaving, 'green': isSaving}\">{{totalSavingsPerMonth}}$</th>\n        </tr>\n      </thead>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/monthly-spendings/monthly-spendings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/monthly-spendings/monthly-spendings.component.ts ***!
  \******************************************************************/
/*! exports provided: MonthlySpendingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlySpendingsComponent", function() { return MonthlySpendingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MonthlySpendingsComponent = /** @class */ (function () {
    function MonthlySpendingsComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    MonthlySpendingsComponent.prototype.ngOnInit = function () {
        this.result = this.httpService.getMonthlySpendings();
        if (this.result) {
            this.costs = this.result.dividedCosts;
            this.totalSavingsPerMonth = this.result.totalSavingsPerMonth;
            this.totalSavingsPerYear = this.result.totalSavingsPerYear;
            this.isSaving = (this.totalSavingsPerMonth > 0);
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    MonthlySpendingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monthly-spendings',
            template: __webpack_require__(/*! ./monthly-spendings.component.html */ "./src/app/monthly-spendings/monthly-spendings.component.html"),
            styles: [__webpack_require__(/*! ./monthly-spendings.component.css */ "./src/app/monthly-spendings/monthly-spendings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MonthlySpendingsComponent);
    return MonthlySpendingsComponent;
}());



/***/ }),

/***/ "./src/app/salary-insights/salary-insights.component.css":
/*!***************************************************************!*\
  !*** ./src/app/salary-insights/salary-insights.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".salary-form {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\nbutton {\n  margin: 0 auto;\n  width: 100%;\n  margin: 15px;\n}\n\nh4 {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsYXJ5LWluc2lnaHRzL3NhbGFyeS1pbnNpZ2h0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2FsYXJ5LWluc2lnaHRzL3NhbGFyeS1pbnNpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGFyeS1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuaDQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/salary-insights/salary-insights.component.html":
/*!****************************************************************!*\
  !*** ./src/app/salary-insights/salary-insights.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h5 color=\"primary\">Welcome to salary helper. <br> Please answer the following questions & we will help you estimate your monthly\n    spendings &\n    savings</h5>\n</div>\n\n\n<div class=\"container salary-form\">\n\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"members\">Number Of Members In Your Household</label>\n          <input type=\"number\" class=\"form-control\" id=\"members\" [(ngModel)]=\"members\" name=\"members\"\n            placeholder=\"Enter number of members ..\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"restaurants_percentage\">Percentage Of Eating Lunch Or Dinner In Restaurants</label>\n          <select class=\"form-control\" required id=\"restaurants_percentage\" [(ngModel)]=\"restaurants_percentage\"\n            name=\"restaurants_percentage\">\n            <option *ngFor=\"let v of listVlaues.restaurantsPercentages\" value=\"{{v}}\">{{ v }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inexpensive_restaurants_percentage\">Percentage Of Choosing An Inexpensive Restaurant</label>\n          <select class=\"form-control\" required id=\"inexpensive_restaurants_percentage\"\n            [(ngModel)]=\"inexpensive_restaurants_percentage\" name=\"inexpensive_restaurants_percentage\">\n            <option *ngFor=\"let v of listVlaues.inexpensiveRestaurantsPercentages\" value=\"{{v}}\">{{ v }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"drinking_coffee_outside\">Drinking Coffee Outside Your Home</label>\n          <select class=\"form-control\" required id=\"drinking_coffee_outside\" [(ngModel)]=\"drinking_coffee_outside\"\n            name=\"drinking_coffee_outside\">\n            <option *ngFor=\"let v of listVlaues.coffeeValues\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"going_out_monthly\">Going Out (cinema, night life, etc.)</label>\n          <select class=\"form-control\" required id=\"going_out_monthly\" [(ngModel)]=\"going_out_monthly\"\n            name=\"going_out_monthly\">\n            <option *ngFor=\"let v of listVlaues.goingOutValues\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"smoking_packs_per_day\">Smoking. Number Of Packs Per Day (household overall)</label>\n          <input type=\"number\" class=\"form-control\" id=\"smoking_packs_per_day\" [(ngModel)]=\"smoking_packs_per_day\"\n            name=\"smoking_packs_per_day\" required placeholder=\"Enter number ..\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"alcoholic_drinks\">Alcoholic Beverages Consumption</label>\n          <select class=\"form-control\" required id=\"alcoholic_drinks\" [(ngModel)]=\"alcoholic_drinks\"\n            name=\"alcoholic_drinks\">\n            <option *ngFor=\"let v of listVlaues.alcholicValues\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"type_of_food\">At Home You're Eating</label>\n          <select class=\"form-control\" required id=\"type_of_food\" [(ngModel)]=\"type_of_food\" name=\"type_of_food\">\n            <option *ngFor=\"let v of listVlaues.foodTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"driving_car\">Driving Car</label>\n          <select class=\"form-control\" required id=\"driving_car\" [(ngModel)]=\"driving_car\" name=\"driving_car\">\n            <option *ngFor=\"let v of listVlaues.carTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"location\">Location</label>\n          <select class=\"form-control\" required id=\"location\" [(ngModel)]=\"location\" name=\"location\">\n            <option *ngFor=\"let v of listVlaues.cities\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"taxi_consumption\">Taking Taxi</label>\n          <select class=\"form-control\" required id=\"taxi_consumption\" [(ngModel)]=\"taxi_consumption\"\n            name=\"taxi_consumption\">\n            <option *ngFor=\"let v of listVlaues.taxiTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"paying_for_public_transport\">Paying For Public Transport Tickets</label>\n          <select class=\"form-control\" required id=\"paying_for_public_transport\"\n            [(ngModel)]=\"paying_for_public_transport\" name=\"paying_for_public_transport\">\n            <option *ngFor=\"let v of listVlaues.publicTransportTypes\" value=\"{{v}}\">{{ v }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"sport_memberships\">Sport Memberships</label>\n          <select class=\"form-control\" required id=\"sport_memberships\" [(ngModel)]=\"sport_memberships\"\n            name=\"sport_memberships\">\n            <option *ngFor=\"let v of listVlaues.sportMembershipTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"vacation\">Vacation & Travel</label>\n          <select class=\"form-control\" required id=\"vacation\" [(ngModel)]=\"vacation\" name=\"vacation\">\n            <option *ngFor=\"let v of listVlaues.vacationTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"clothing_and_shoes\">Buying Clothing & Shoes</label>\n          <select class=\"form-control\" required id=\"clothing_and_shoes\" [(ngModel)]=\"clothing_and_shoes\"\n            name=\"clothing_and_shoes\">\n            <option *ngFor=\"let v of listVlaues.clothingTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"rent\">Rent</label>\n          <select class=\"form-control\" required id=\"rent\" [(ngModel)]=\"rent\" name=\"rent\">\n            <option *ngFor=\"let v of listVlaues.rentTypes\" value=\"{{v.value}}\">{{ v.label }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"kindergarten_count\">Number Of Children Going To Kindergarten</label>\n          <input type=\"number\" class=\"form-control\" id=\"kindergarten_count\" [(ngModel)]=\"kindergarten_count\"\n            name=\"kindergarten_count\" required placeholder=\"Enter number ..\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"private_schools_count\">Number Of Children Going To A Private School</label>\n          <input type=\"number\" class=\"form-control\" id=\"private_schools_count\" [(ngModel)]=\"private_schools_count\"\n            name=\"private_schools_count\" required placeholder=\"Enter number ..\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pay_rate\">Salary (per year in USD)</label>\n          <input type=\"number\" class=\"form-control\" id=\"pay_rate\" [(ngModel)]=\"pay_rate\" name=\"pay_rate\" required\n            placeholder=\"Enter number ..\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"additionalPayments\">Additional Payments Like Loans, Lease .. etc (per month in USD)</label>\n          <input type=\"number\" class=\"form-control\" id=\"additionalPayments\" [(ngModel)]=\"additionalPayments\"\n            name=\"additionalPayments\" required placeholder=\"Enter number ..\" />\n        </div>\n\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/salary-insights/salary-insights.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/salary-insights/salary-insights.component.ts ***!
  \**************************************************************/
/*! exports provided: SalaryInsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryInsightsComponent", function() { return SalaryInsightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-request.service */ "./src/app/http-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SalaryInsightsComponent = /** @class */ (function () {
    function SalaryInsightsComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    SalaryInsightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listVlaues = {};
        this.httpService.getSalaryData()
            .subscribe(function (response) {
            _this.listVlaues = response;
            var prevValue = localStorage.getItem('form');
            if (prevValue) {
                _this.form.setValue(JSON.parse(prevValue));
            }
        });
    };
    SalaryInsightsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        localStorage.setItem('form', JSON.stringify(form.value));
        var query = form.value;
        var city = query.location;
        var state = this.listVlaues.cities.find(function (e) {
            return e.value === city;
        }).state;
        query.city = city;
        query.state = state;
        delete query.location;
        this.httpService.getSpendings(query)
            .subscribe(function (result) {
            _this.httpService.setMonthlySpendings(result);
            _this.router.navigateByUrl('/details');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], SalaryInsightsComponent.prototype, "form", void 0);
    SalaryInsightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-insights',
            template: __webpack_require__(/*! ./salary-insights.component.html */ "./src/app/salary-insights/salary-insights.component.html"),
            styles: [__webpack_require__(/*! ./salary-insights.component.css */ "./src/app/salary-insights/salary-insights.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalaryInsightsComponent);
    return SalaryInsightsComponent;
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
    production: false,
    baseUrl: 'https://evening-bayou-86060.herokuapp.com'
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

module.exports = __webpack_require__(/*! /home/youssef/Desktop/US-Salary-Helper/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map