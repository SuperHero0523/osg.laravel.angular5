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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/components/main.component */ "./src/app/profile/components/main.component.ts");
/* harmony import */ var _plan_components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan/components/main.component */ "./src/app/plan/components/main.component.ts");
/* harmony import */ var _dashboard_components_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/components/main.component */ "./src/app/dashboard/components/main.component.ts");
/* harmony import */ var _contacts_components_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/components/main.component */ "./src/app/contacts/components/main.component.ts");
/* harmony import */ var _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/info/info.component */ "./src/app/core/components/info/info.component.ts");
/* harmony import */ var _core_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/notifications/notifications.component */ "./src/app/core/components/notifications/notifications.component.ts");
/* harmony import */ var _experience_bank_components_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience-bank/components/main.component */ "./src/app/experience-bank/components/main.component.ts");
/* harmony import */ var _strength_standards_components_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strength-standards/components/main.component */ "./src/app/strength-standards/components/main.component.ts");
/* harmony import */ var _workout_log_components_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workout-log/components/main.component */ "./src/app/workout-log/components/main.component.ts");
/* harmony import */ var _workout_detail_components_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workout-detail/components/main.component */ "./src/app/workout-detail/components/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _dashboard_components_main_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'calendar-builder', component: _plan_components_main_component__WEBPACK_IMPORTED_MODULE_3__["PlanBuilderComponent"] },
    { path: 'experience-bank', component: _experience_bank_components_main_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceBankComponent"] },
    { path: 'strength-standards', component: _strength_standards_components_main_component__WEBPACK_IMPORTED_MODULE_9__["StrengthStandardsComponent"] },
    { path: 'program-designs', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] },
    { path: 'workout-log', component: _workout_log_components_main_component__WEBPACK_IMPORTED_MODULE_10__["WorkoutLogComponent"] },
    { path: 'workout-detail/:date/:type', component: _workout_detail_components_main_component__WEBPACK_IMPORTED_MODULE_11__["WorkoutDetailComponent"] },
    { path: 'contacts', component: _contacts_components_main_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"] },
    { path: 'profile', component: _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'profile/:handle', component: _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'notifications', component: _core_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"] },
    { path: 'info', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] },
    { path: 'unknown', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<osg-navigation></osg-navigation>\r\n    <router-outlet></router-outlet>\r\n    <osg-footer></osg-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(applicationService) {
        this.applicationService = applicationService;
        this.loaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.sent();
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'optimal-strength-gains',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _plan_plan_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plan/plan.module */ "./src/app/plan/plan.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.module */ "./src/app/contacts/contacts.module.ts");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/auth.interceptor */ "./src/app/core/services/auth.interceptor.ts");
/* harmony import */ var _experience_bank_experience_bank_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience-bank/experience-bank.module */ "./src/app/experience-bank/experience-bank.module.ts");
/* harmony import */ var _strength_standards_strength_standards_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strength-standards/strength-standards.module */ "./src/app/strength-standards/strength-standards.module.ts");
/* harmony import */ var _workout_log_workout_log_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workout-log/workout-log.module */ "./src/app/workout-log/workout-log.module.ts");
/* harmony import */ var _workout_detail_workout_detail_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workout-detail/workout-detail.module */ "./src/app/workout-detail/workout-detail.module.ts");
/* harmony import */ var _core_services_mock_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/mock-data.service */ "./src/app/core/services/mock-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
                _plan_plan_module__WEBPACK_IMPORTED_MODULE_7__["PlanBuilderModule"],
                _experience_bank_experience_bank_module__WEBPACK_IMPORTED_MODULE_12__["ExperienceBankModule"],
                _strength_standards_strength_standards_module__WEBPACK_IMPORTED_MODULE_13__["StrengthStandardsModule"],
                _workout_log_workout_log_module__WEBPACK_IMPORTED_MODULE_14__["WorkoutLogModule"],
                _workout_detail_workout_detail_module__WEBPACK_IMPORTED_MODULE_15__["WorkoutDetailModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__["ContactsModule"]
            ],
            providers: [
                _core_services_application_service__WEBPACK_IMPORTED_MODULE_10__["ApplicationService"],
                _core_services_mock_data_service__WEBPACK_IMPORTED_MODULE_16__["MockDataService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/components/main.component.html":
/*!*********************************************************!*\
  !*** ./src/app/contacts/components/main.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/components/main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contacts/components/main.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-contacts',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/contacts/components/main.component.html")
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/contacts/components/main.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            providers: [],
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/core/classes/user.ts":
/*!**************************************!*\
  !*** ./src/app/core/classes/user.ts ***!
  \**************************************/
/*! exports provided: ApplicationUserRole, ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUserRole", function() { return ApplicationUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
var ApplicationUserRole;
(function (ApplicationUserRole) {
    ApplicationUserRole["PersonalTrainer"] = "PersonalTrainer";
    ApplicationUserRole["ProgramDesigner"] = "ProgramDesigner";
    ApplicationUserRole["StrengthAthlete"] = "StrengthAthlete";
})(ApplicationUserRole || (ApplicationUserRole = {}));
var ApplicationUser = /** @class */ (function () {
    function ApplicationUser(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    return ApplicationUser;
}());



/***/ }),

/***/ "./src/app/core/components/enter-information/enter-information.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/enter-information/enter-information.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enter your information</h2>\r\n\r\n<div class=\"row mb-4\">\r\n    <div class=\"col-12 col-sm-6 col-md-4\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Gender\" [(value)]=\"information.gender\" [options]=\"genderOptions\" (change)=\"onGenderChange()\"></osg-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-sm-6 col-md-4\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Body Weight (kg)\" [(value)]=\"information.bodyWeight\" [options]=\"bodyWeightOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-sm-6 col-md-4\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Height\" [(value)]=\"information.height\" [options]=\"heightOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12 col-sm-6\" [ngClass]=\"(status=='experience')?'col-md-3':'col-md-4'\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\" [ngClass]=\"(status=='experience')?'experience':''\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Waist-Hip Ratio\" [(value)]=\"information.waistHipRatio\" [options]=\"waistToHipRatioOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\" [ngClass]=\"(status=='experience')?'col-md-3':'col-md-4'\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\" [ngClass]=\"(status=='experience')?'experience':''\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Age (years)\" [(value)]=\"information.age\" [options]=\"ageOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\" [ngClass]=\"(status=='experience')?'col-md-3':'col-md-4'\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\" [ngClass]=\"(status=='experience')?'experience':''\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Muscle Fiber Type\" [(value)]=\"information.muscleFiberType\" [options]=\"muscleFiberOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\" [ngClass]=\"(status=='experience')?'col-md-3':'col-md-4'\" *ngIf=\"status=='experience'\">\r\n        <div class=\"checbox-dropdown\">\r\n            <div class=\"checkbox custom-checkbox\" [ngClass]=\"(status=='experience')?'experience':''\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n            </div>\r\n            <osg-select label=\"Level\" [(value)]=\"information.level\" [options]=\"strengthLevelsOptions\"></osg-select>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"actions\">\r\n    <div class=\"col-12 col-lg-8\">\r\n        <div class=\"results\">\r\n            <h4>Results: </h4>\r\n            <p>Male<span>x</span></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-lg-3 mt-2 mt-lg-0 text-center text-lg-right\">\r\n        <a href=\"\" class=\"btn btn-yellow-gradient py-2 btn-block\">DONE</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/enter-information/enter-information.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/enter-information/enter-information.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EnterInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterInformation", function() { return EnterInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnterInformation = /** @class */ (function () {
    function EnterInformation() {
        this.information = {
            gender: 'Male',
            level: 'Untrained'
        };
        this.genderOptions = ['Male', 'Female'];
    }
    EnterInformation.prototype.onGenderChange = function () {
        this.bodyWeightOptions = this.getBodyWeightOptions();
        this.waistToHipRatioOptions = this.getWaistToHipRatioOptions();
        this.ageOptions = this.getAgeOptions();
        this.strengthLevelsOptions = this.getStrengthLevelsOptions();
        this.heightOptions = this.getHeightOptions();
        this.muscleFiberOptions = this.getMuscleFiberOptions();
    };
    EnterInformation.prototype.getBodyWeightOptions = function () {
        return this.information.gender === 'Male'
            ? ['0-50', '51-60', '61-70', '71-80', '81-90', '91-100', '101-110', '111-120', '121-160']
            : ['0-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100', '101-110', '111-130'];
    };
    EnterInformation.prototype.getWaistToHipRatioOptions = function () {
        return this.information.gender === 'Male'
            ? ['0,71-0,80', '0.81-0,90', '0,91-1,00', '1,01-1,10', '1,11-1,20']
            : ['0,61-0,70', '0,71-0,80', '0.81-0,90', '0,91-1,00', '1,01-1,10'];
    };
    EnterInformation.prototype.getAgeOptions = function () {
        return this.information.gender === 'Male'
            ? ['0-20', '21-30', '31-40', '41-50', '51-60', '61-80']
            : ['0-20', '21-30', '31-40', '41-50', '51-60', '61-80'];
    };
    EnterInformation.prototype.getStrengthLevelsOptions = function () {
        return this.information.gender === 'Male'
            ? ['Untrained', 'Novice', 'Intermediate', 'Advanced', 'Elite']
            : ['Untrained', 'Novice', 'Intermediate', 'Advanced', 'Elite'];
    };
    EnterInformation.prototype.getHeightOptions = function () {
        return this.information.gender === 'Male'
            ? ['0-150', '151-160', '161-170', '171-180', '181-190', '191-200', '201-210', '211-220']
            : ['0-140', '141-150', '151-160', '161-170', '171-180', '181-190', '191-200', '201-210',];
    };
    EnterInformation.prototype.getMuscleFiberOptions = function () {
        return this.information.gender === 'Male'
            ? ['Slow twitch', 'Fast twitch', 'Fast and slow twitch']
            : ['Slow twitch', 'Fast twitch', 'Fast and slow twitch'];
    };
    EnterInformation.prototype.ngOnInit = function () {
        this.onGenderChange();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EnterInformation.prototype, "status", void 0);
    EnterInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-enter-information',
            template: __webpack_require__(/*! ./enter-information.component.html */ "./src/app/core/components/enter-information/enter-information.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EnterInformation);
    return EnterInformation;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <section class=\"footer-info\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-8 text-center text-md-left\"> <img src=\"assets/images/logo.png\" alt=\"logo\"\r\n                        class=\"img-fluid d-inline-block logo-footer\">\r\n                    <p class=\"d-inline-block\">Copyright {{today | date: 'y'}} © Optimal Strength Gains AS. All Rights Reserved.</p>\r\n                </div>\r\n                <div class=\"col-12 col-sm-4 text-center text-md-right d-flex align-items-center\">\r\n                    <p class=\"m-auto\">UI/UX Design &amp; Full Stack Development: <a href=\"https://fantasylab.io\" target=\"_blank\"><span>FantasyLab.</span></a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</footer>"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/gauge/gauge.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/gauge/gauge.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 34.5 34.5\">\r\n    <path d=\"M17.25 1.34\r\n        a 15.9155 15.9155 0 0 1 0 31.831\r\n        a 15.9155 15.9155 0 0 1 0 -31.831\" fill=\"none\"\r\n        stroke=\"gray\" stroke-width=\"2.5\"></path>\r\n    <path #path class=\"animatable\" d=\"M17.25 1.34\r\n        a 15.9155 15.9155 0 0 1 0 31.831\r\n        a 15.9155 15.9155 0 0 1 0 -31.831\"\r\n        fill=\"none\" stroke=\"blue\" stroke-width=\"2.5\" stroke-dasharray=\"0, 100\" transform=\"rotate(180, 17.25, 17.25)\"></path>\r\n    <circle cx=\"17.25\" cy=\"17.25\" r=\"10\" opacity=\"0.3\"/>\r\n    <text x=\"50%\" y=\"50%\" text-anchor=\"middle\" font-size=\"5px\"  dy=\".3em\">{{value}}%</text>\r\n</svg>"

/***/ }),

/***/ "./src/app/core/components/gauge/gauge.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/gauge/gauge.component.ts ***!
  \**********************************************************/
/*! exports provided: GaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeComponent", function() { return GaugeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.value = 0;
        this.opacity = 0.4;
    }
    Object.defineProperty(GaugeComponent.prototype, "css", {
        set: function (cssClass) {
            if (cssClass)
                this.cssClass = cssClass;
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.path.nativeElement.style = "stroke-dasharray: " + _this.value + "px 100px"; }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], GaugeComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('path'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GaugeComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "opacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GaugeComponent.prototype, "css", null);
    GaugeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-gauge',
            template: __webpack_require__(/*! ./gauge.component.html */ "./src/app/core/components/gauge/gauge.component.html")
        })
    ], GaugeComponent);
    return GaugeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/get-started/get-started.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/components/get-started/get-started.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h3>GET STARTED</h3>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"articles-list\">\r\n    <div class=\"article brand-box\">\r\n        <figure>\r\n            <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\r\n        </figure>\r\n    </div>\r\n    <div class=\"article\" *ngFor=\"let section of sections\">\r\n        <h4>{{section}}</h4>\r\n        <a href=\"\" class=\"btn btn-yellow-gradient\">READ MORE</a>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/components/get-started/get-started.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/get-started/get-started.component.ts ***!
  \**********************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent() {
        this.css = 'primary';
        this.sections = [];
    }
    Object.defineProperty(GetStartedComponent.prototype, "view", {
        set: function (v) {
            // supports: primary, secondary, tertiary
            this.css = v ? v : 'primary';
        },
        enumerable: true,
        configurable: true
    });
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], GetStartedComponent.prototype, "css", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GetStartedComponent.prototype, "view", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GetStartedComponent.prototype, "sections", void 0);
    GetStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-get-started',
            template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/core/components/get-started/get-started.component.html")
        })
    ], GetStartedComponent);
    return GetStartedComponent;
}());



/***/ }),

/***/ "./src/app/core/components/info/info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/info/info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/info/info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-information',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/core/components/info/info.component.html")
        })
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navigation/navigation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/navigation/navigation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">\r\n            <img src=\"assets/images/logo.png\" class=\"img-fluid d-block mx-auto\" alt=\"\">\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto left-menu\">\r\n                <li *ngIf=\"isProgramDesigner\" class=\"nav-item\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" routerLink=\"/calendar-builder\">\r\n                        <img src=\"assets/images/icons/icon-plan.svg\">\r\n                        Calendar Builder\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" routerLink=\"/experience-bank\">\r\n                        <img src=\"/assets/images/icons/icon-house.svg\">\r\n                        Experience Bank\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" routerLink=\"/strength-standards\">\r\n                        <img src=\"/assets/images/icons/icon-strength.svg\">\r\n                        Strength Standards\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" routerLink=\"/program-designs\">\r\n                        <img src=\"/assets/images/icons/icon-gear.svg\">\r\n                        Program Designs\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"isMobile\">\r\n                    <a class=\"nav-link\" routerLink=\"/workout-log\">\r\n                        <img src=\"/assets/images/icons/workout-log.png\">\r\n                        Workout Log\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" routerLink=\"/contacts\">\r\n                        <img src=\"assets/images/icons/icon-contacts.svg\">\r\n                        Contacts\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto align-items-center right-menu\">\r\n                <li class=\"nav item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <a routerLink=\"/\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-home.svg\"></a>\r\n                </li>\r\n                <li class=\"nav item\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/notifications\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-notifications.svg\"></a>\r\n                </li>\r\n                <li class=\"nav item\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/info\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-info.svg\"></a>\r\n                </li>\r\n                <li class=\"nav item\" >\r\n                    <a (click)=\"logout()\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-logout.svg\"></a>\r\n                </li>\r\n                <li class=\"nav item profile\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/profile\" class=\"nav-link\"><img class=\"img-fluid ml-3 ml-lg-2 ml-xl-1\" src=\"assets/images/icons/icon-account.svg\">{{fullName}}</a>\r\n                </li>\r\n                \r\n            </ul>\r\n\r\n            <form #logoutForm ngNoForm id=\"logout-form\" action=\"/logout\" method=\"POST\" style=\"display: none;\">\r\n                <input type=\"hidden\" name=\"_token\" value=\"{{csrf}}\" />\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/components/navigation/navigation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/navigation/navigation.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(applicationService, meta) {
        this.applicationService = applicationService;
        this.meta = meta;
        if (_classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].StrengthAthlete) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        else {
            this.isMobile = false;
        }
    }
    NavigationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NavigationComponent.prototype, "fullName", {
        get: function () {
            return this.user !== undefined ? this.user.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "csrf", {
        get: function () {
            return this.meta.getTag('name=csrf-token').content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "role", {
        get: function () {
            return this.user ? this.user.role : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isPersonalTrainer", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].PersonalTrainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isProgramDesigner", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].ProgramDesigner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isStrengthAthlete", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].StrengthAthlete;
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.logout = function () {
        this.logoutForm.nativeElement.submit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('logoutForm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "logoutForm", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/core/components/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/news-feed/news-feed-component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/news-feed/news-feed-component.ts ***!
  \******************************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mock-data.service */ "./src/app/core/services/mock-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent(dataService) {
        this.dataService = dataService;
        this.feed = {
            posts: []
        };
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        this.feed = this.dataService.getNewsFeed(this.applicationUser);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], NewsFeedComponent.prototype, "applicationUser", void 0);
    NewsFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/core/components/news-feed/news-feed.component.html")
        }),
        __metadata("design:paramtypes", [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/core/components/news-feed/news-feed.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/news-feed/news-feed.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 align-items-center\">\r\n    <div class=\"col text-left\"><h3>newsfeed</h3></div>\r\n    <div class=\"col text-right\"><a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a></div>\r\n</div>\r\n\r\n<div class=\"post-creator\">\r\n    <div class=\"comment\">\r\n        <div class=\"row no-gutters align-items-center\">\r\n            <div class=\"col-auto\">\r\n                <figure>\r\n                    <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                </figure>\r\n            </div>\r\n            <div class=\"col\"><textarea class=\"message\" name=\"\" id=\"\" cols=\"30\" rows=\"2\" placeholder=\"What’s on your mind?\"></textarea></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-12 col-sm-12 col-lg-7\">\r\n                <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid mr-1\" alt=\"\">Photo/Video</a>\r\n            </div>\r\n            <div class=\"col-12 col-sm-12 col-lg-5 mt-3 mt-lg-0\">\r\n                <a href=\"\" class=\"btn btn-block btn-black\">\r\n                    POST</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"post\" *ngFor=\"let post of feed.posts\">\r\n    <div class=\"content\">\r\n        <div class=\"author\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-2\">\r\n                    <figure>\r\n                        <img src=\"{{post.author.imageUrl}}\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\r\n                    <div class=\"summary\">\r\n                        <a href=\"#\">{{post.author.name}}</a>\r\n                        <span>{{post.postedAt}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col text-right\">\r\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n                <div class=\"collapse popover-menu\" id=\"popover-id-1\">\r\n                    <ul>\r\n                        <li><a href=\"\">Turn off notifications</a></li>\r\n                        <li><a href=\"\">Edit post</a></li>\r\n                        <li><a href=\"\">Delete</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"post-content\">\r\n            <p>{{post.content.text}}</p>\r\n            <div class=\"photos\">\r\n                <figure *ngFor=\"let url of post.content.photoUrls\">\r\n                    <img  src=\"{{url}}\" />\r\n                </figure>\r\n            </div>\r\n            <div class=\"video\">\r\n                <img src=\"{{post.content.videoUrl}}\" class=\"img-fluid d-block mx-auto\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"comments-box\">\r\n        <div class=\"comment\" *ngFor=\"let comment of post.comments\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-auto mr-2\">\r\n                    <figure>\r\n                        <img src=\"{{comment.author.imageUrl}}\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"speech-bubble\">\r\n                        <div class=\"comment-container\">\r\n                                <a href=\"#\">{{comment.author.name}}</a>\r\n                                <p>{{comment.text}}</p>\r\n                        </div>\r\n                        <span>{{comment.postedAt}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-auto align-self-center\">\r\n                    <a href=\"\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-comment-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n                <div class=\"collapse popover-menu\" id=\"popover-id-comment-1\">\r\n                    <ul>\r\n                        <li><a href=\"\">Turn off notifications</a></li>\r\n                        <li><a href=\"\">Edit post</a></li>\r\n                        <li><a href=\"\">Delete</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"comment-creator\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-3\">\r\n                    <figure>\r\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"input-container\">\r\n                        <input type=\"text\" placeholder=\"Write a comment\" />\r\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"post\">\r\n    <div class=\"content\">\r\n        <div class=\"author\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-2\">\r\n                    <figure>\r\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\r\n                    <div class=\"summary\">\r\n                        <a href=\"#\">Nohman Janjua</a>\r\n                        <span>30 minutes ago</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col text-right\">\r\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n                <div class=\"collapse popover-menu\" id=\"popover-id-2\">\r\n                    <ul>\r\n                        <li><a href=\"\">Turn off notifications</a></li>\r\n                        <li><a href=\"\">Edit post</a></li>\r\n                        <li><a href=\"\">Delete</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"post-content\">\r\n            <p>The weights are getting heavier little by little thanks to the autoregulation function!</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-4\">\r\n                    <img src=\"/assets/images/feed-img-1.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-12 col-sm-4\">\r\n                    <img src=\"/assets/images/feed-img-2.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-12 col-sm-4\">\r\n                    <img src=\"/assets/images/feed-img-3.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"comments-box\">\r\n        <div class=\"comment-creator\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-3\">\r\n                    <figure>\r\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"input-container\">\r\n                        <input type=\"text\" placeholder=\"Write a comment\" />\r\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"post\">\r\n    <div class=\"content\">\r\n        <div class=\"author\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-2\">\r\n                    <figure>\r\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\r\n                    <div class=\"summary\">\r\n                        <a href=\"#\">Nohman Janjua</a>\r\n                        <span>30 minutes ago</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col text-right\">\r\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n                <div class=\"collapse popover-menu\" id=\"popover-id-3\">\r\n                    <ul>\r\n                        <li><a href=\"\">Turn off notifications</a></li>\r\n                        <li><a href=\"\">Edit post</a></li>\r\n                        <li><a href=\"\">Delete</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"post-content\">\r\n            <p>Video from todays chest workout. Can PT Nohman Janjua please give me feedback on my bench press technique?</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <img src=\"/assets/images/feed-img-4.jpg\" class=\"d-block img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"comments-box\">\r\n        <div class=\"comment-creator\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-auto mr-3\">\r\n                    <figure>\r\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\r\n                    </figure>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"input-container\">\r\n                        <input type=\"text\" placeholder=\"Write a comment\" />\r\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/core/components/notifications/notifications.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/notifications/notifications.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/notifications/notifications.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/notifications/notifications.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/core/components/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/core/components/select/select.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/select/select.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"dropdown black-dropdown with-label\">\r\n    \r\n</div> -->\r\n\r\n<label for=\"\">{{label}}</label>\r\n<button class=\"btn dropdown-toggle btn-block\" type=\"button\" (click)=\"toggle()\">{{selection}}</button>\r\n<div class=\"dropdown-menu\" [ngClass]=\"{'show': open}\" aria-labelledby=\"dropdownMenuButton1\">\r\n    <a *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"select(option)\">{{option}}</a>\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/select/select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/select/select.component.ts ***!
  \************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.css = 'dropdown black-dropdown with-label';
        this.open = false;
        this.selection = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.label = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SelectComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (o) {
            this._options = o;
            this.selection = o[0];
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.ngOnInit = function () {
        this.selection = this.options.length ? this.options[0] : '';
    };
    SelectComponent.prototype.toggle = function () {
        this.open = !this.open;
    };
    SelectComponent.prototype.select = function (o) {
        this.selection = o;
        //this.value = o;
        this.valueChange.emit(o);
        this.change.emit(o);
        this.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "css", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectComponent.prototype, "options", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectComponent.prototype, "change", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/core/components/select/select.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/core/components/navigation/navigation.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news-feed/news-feed-component */ "./src/app/core/components/news-feed/news-feed-component.ts");
/* harmony import */ var _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/get-started/get-started.component */ "./src/app/core/components/get-started/get-started.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/core/components/info/info.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/core/components/notifications/notifications.component.ts");
/* harmony import */ var _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gauge/gauge.component */ "./src/app/core/components/gauge/gauge.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/core/components/select/select.component.ts");
/* harmony import */ var _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/enter-information/enter-information.component */ "./src/app/core/components/enter-information/enter-information.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var components = [
    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
    _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_5__["NewsFeedComponent"],
    _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"],
    _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"],
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
    _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_9__["GaugeComponent"],
    _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"],
    _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_11__["EnterInformation"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components,
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: components,
            providers: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationService = /** @class */ (function () {
    function ApplicationService(http, meta) {
        this.http = http;
        this.meta = meta;
        this.baseUrl = '/api';
        this.apiToken = this.meta.getTag('name=api-token');
    }
    Object.defineProperty(ApplicationService.prototype, "token", {
        get: function () {
            return this.apiToken.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "options", {
        get: function () {
            return {
                observe: 'response',
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authentication': "Bearer " + this.apiToken.content
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "authenticatedUser", {
        get: function () {
            var _this = this;
            var observable;
            if (this.applicationUser) {
                observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    observer.next(_this.applicationUser);
                    observer.complete();
                });
            }
            else {
                observable = this.http.get(this.baseUrl + "/user");
                observable.subscribe(function (u) { return _this.applicationUser = u; });
            }
            return observable;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(applicationService) {
        this.applicationService = applicationService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var token = this.applicationService.token;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/mock-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/mock-data.service.ts ***!
  \****************************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MockDataService = /** @class */ (function () {
    function MockDataService() {
    }
    MockDataService.prototype.getNewsFeed = function (applicationUser) {
        var feed;
        switch (applicationUser.role) {
            case _classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].PersonalTrainer:
                feed = this.personalTrainerNewsFeed;
                break;
            case _classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].ProgramDesigner:
                feed = this.programDesignerNewsFeed;
                break;
            case _classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].StrengthAthlete:
                feed = this.strengthAthleteNewsFeed;
                break;
        }
        return feed;
    };
    Object.defineProperty(MockDataService.prototype, "personalTrainerNewsFeed", {
        get: function () {
            return {
                posts: [
                    {
                        author: {
                            name: 'Sarah Smith',
                            imageUrl: './assets/images/sara-smith.png'
                        },
                        content: {
                            text: 'Best coaching ever! Looking forward to the next session, Nohman!',
                        },
                        postedAt: '30 minutes ago'
                    },
                    {
                        author: {
                            name: 'Nohman Janjua',
                            imageUrl: './assets/images/personal-trainer-icon.png'
                        },
                        content: {
                            text: 'Impressive maximum strength  development by @Helge Andersen',
                            photoUrls: ['./assets/images/feed-img-full.jpg']
                        },
                        postedAt: '5 hours ago'
                    },
                    {
                        author: {
                            name: 'Lara James',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'Here are some pictures from today’s session. Loved it!',
                            photoUrls: ['./assets/images/personal-trainer-feed-1.jpg', './assets/images/personal-trainer-feed-2.jpg', './assets/images/personal-trainer-feed-3.jpg']
                        },
                        comments: [
                            {
                                author: {
                                    name: 'Nohman Janjua',
                                    imageUrl: './assets/images/personal-trainer-icon.png'
                                },
                                text: 'Pictures looks awesome! Next session is going to be great!',
                                postedAt: '30 minutes ago'
                            }
                        ],
                        postedAt: 'July 20, 2018'
                    }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockDataService.prototype, "programDesignerNewsFeed", {
        get: function () {
            return {
                posts: [
                    {
                        author: {
                            name: 'Jeanette Wilson',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'Hi what is the idea behind the 10 reps x 10 sets in the GTV program?',
                        },
                        comments: [
                            {
                                author: {
                                    name: 'Andreas Stensrud',
                                    imageUrl: './assets/images/icons/icon-account-gray.png'
                                },
                                text: 'The idea is to accumulate a great deal of volume, because volume in perhaps the most important factor when it comes to increase  muscle mass',
                                postedAt: '30 minutes ago'
                            }
                        ],
                        postedAt: 'July 20, 2018'
                    },
                    {
                        author: {
                            name: 'Patrick Bet David',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'Is it possible to use bench press with wide grip in the 5x5 program?',
                        },
                        comments: [
                            {
                                author: {
                                    name: 'Andreas Stensrud',
                                    imageUrl: './assets/images/icons/icon-account-gray.png'
                                },
                                text: 'Of course! Do what suits you best.',
                                postedAt: '30 minutes ago'
                            }
                        ],
                        postedAt: 'July 20, 2018'
                    }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockDataService.prototype, "strengthAthleteNewsFeed", {
        get: function () {
            return {
                posts: [
                    {
                        author: {
                            name: 'Nohman Janjua',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'The GVT programe is awesome. I really respond well to the big training volume. ',
                        },
                        postedAt: '30 minutes ago'
                    },
                    {
                        author: {
                            name: 'Nohman Janjua',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'The weights are getting heavier little by little thanks to the autoregulation function!',
                            photoUrls: ['./assets/images/feed-img-1.jpg', './assets/images/feed-img-2.jpg', './assets/images/feed-img-3.jpg']
                        },
                        postedAt: '30 minutes ago'
                    },
                    {
                        author: {
                            name: 'Patrick James ',
                            imageUrl: './assets/images/icons/icon-account-gray.png'
                        },
                        content: {
                            text: 'Video from todays chest workout. Can PT Nohman Janjua please give me feedback on my bench press technique?',
                            videoUrl: './assets/images/video.jpg'
                        },
                        comments: [
                            {
                                author: {
                                    name: 'Nohman Janjua',
                                    imageUrl: './assets/images/icons/icon-account-gray.png'
                                },
                                text: 'Chest up, shoulder blades down. Otherwise very good!',
                                postedAt: '30 minutes ago'
                            }
                        ],
                        postedAt: 'July, 20, 2018'
                    }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    MockDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MockDataService);
    return MockDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/components/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/components/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/components/main.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/profile']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-dashboard',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/dashboard/components/main.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/dashboard/components/main.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/experience-bank/components/main.component.html":
/*!****************************************************************!*\
  !*** ./src/app/experience-bank/components/main.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"main-title\">\r\n        <h1>EXPERIENCE BANK</h1>\r\n        <span>SEARCH: TOP 3 PROGRAMS</span>\r\n    </div>\r\n    <osg-enter-information [status]='status'></osg-enter-information>\r\n    <osg-experience-bank-muscle-group-table></osg-experience-bank-muscle-group-table>\r\n</div>"

/***/ }),

/***/ "./src/app/experience-bank/components/main.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/experience-bank/components/main.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankComponent", function() { return ExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExperienceBankComponent = /** @class */ (function () {
    function ExperienceBankComponent() {
        this.status = "experience";
    }
    ExperienceBankComponent.prototype.ngOnInit = function () {
    };
    ExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-experience-bank',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/experience-bank/components/main.component.html")
        })
    ], ExperienceBankComponent);
    return ExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"muscle-group-table\">\r\n  <div class=\"cell muscle\">\r\n    <div class=\"title\">Main muscle group</div>\r\n    <div class=\"content\">\r\n      <h4>Chest</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell exercise\">\r\n    <div class=\"title\">Test Exercise</div>\r\n    <div class=\"content\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Barbell bench press</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n          <a class=\"dropdown-item\" href=\"#\">Barbell bench press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Barbell incline bench press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Barbell decline bench press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Incline bench dumbbell press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Decline bench dumbell press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Flat bench flyes</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Incline bench flyes</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Decline bench flyes</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Cable cross</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Dips for chest</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Seated machine chest press</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell program\">\r\n    <div class=\"title\">Best Programs</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>German Volme Training</li>\r\n        <li>Starting Strength</li>\r\n        <li>Ladder Strength</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell increase\">\r\n    <div class=\"title\">% Increase (1RM)</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>5.10 %</li>\r\n        <li>4.80 %</li>\r\n        <li>4.32 %</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n  <div class=\"cell muscle\">\r\n    <div class=\"title\">Main muscle group</div>\r\n    <div class=\"content\">\r\n      <h4>Back</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell exercise\">\r\n    <div class=\"title\">Test Exercise</div>\r\n    <div class=\"content\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Barbell deadlift</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n          <a class=\"dropdown-item\" href=\"#\">Barbell deadlift</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Good morning</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Bent-over barbell row</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Single-arm dumbbell row</a>\r\n          <a class=\"dropdown-item\" href=\"#\"> Wide-grip pull-up</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Supinated-grip pull-up</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Standing T-bar row</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Wide-grip seated cable row</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Close-grip seated cable row</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Wide-grip pull-down</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Close-grip pull-down</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Supinated-grip pull-down</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Dumbbell pull-over</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell program\">\r\n    <div class=\"title\">Best Programs</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>German Volme Training</li>\r\n        <li>Starting Strength</li>\r\n        <li>Ladder Strength</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell increase\">\r\n    <div class=\"title\">% Increase (1RM)</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>5.10 %</li>\r\n        <li>4.80 %</li>\r\n        <li>4.32 %</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n  <div class=\"cell muscle\">\r\n    <div class=\"title\">Main muscle group</div>\r\n    <div class=\"content\">\r\n      <h4>Shoulders</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell exercise\">\r\n    <div class=\"title\">Test Exercise</div>\r\n    <div class=\"content\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Seated arnold press</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n          <a class=\"dropdown-item\" href=\"#\">Seated barbell shoulder press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Standing dumbbell shoulder press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Standing barbell shoulder press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Seated arnold press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Dumbbell front raise</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Dumbbell lateral raise</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Cable lateral raise</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Single cable lateral raise</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Seated bent over rear delt flyes.</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Bent over single cable rear delt</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Bent over double cable rear delt</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Lying double cable rear delt</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Cable rope rear-delt rows</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell program\">\r\n    <div class=\"title\">Best Programs</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>German Volme Training</li>\r\n        <li>Starting Strength</li>\r\n        <li>Ladder Strength</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell increase\">\r\n    <div class=\"title\">% Increase (1RM)</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>5.10 %</li>\r\n        <li>4.80 %</li>\r\n        <li>4.32 %</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n  <div class=\"cell muscle\">\r\n    <div class=\"title\">Main muscle group</div>\r\n    <div class=\"content\">\r\n      <h4>Quads</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell exercise\">\r\n    <div class=\"title\">Test Exercise</div>\r\n    <div class=\"content\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Barbell back squat</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n          <a class=\"dropdown-item\" href=\"#\"> Barbell front squat</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Barbell lunge </a>\r\n          <a class=\"dropdown-item\" href=\"#\">Dumbbell lunge</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Smith-machine lunge</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Smith-machine back squat</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Leg press</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Hack squat (machine)</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Leg extension</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Single leg extension</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell program\">\r\n    <div class=\"title\">Best Programs</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>German Volme Training</li>\r\n        <li>Starting Strength</li>\r\n        <li>Ladder Strength</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell increase\">\r\n    <div class=\"title\">% Increase (1RM)</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>5.10 %</li>\r\n        <li>4.80 %</li>\r\n        <li>4.32 %</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n  <div class=\"cell muscle\">\r\n    <div class=\"title\">Main muscle group</div>\r\n    <div class=\"content\">\r\n      <h4>Hamstrings</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell exercise\">\r\n    <div class=\"title\">Test Exercise</div>\r\n    <div class=\"content\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Romanian deadlift</button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n          <a class=\"dropdown-item\" href=\"#\">Romanian deadlift</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Lying leg-curls</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Seated leg-curls</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Nordic hamstrings</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell program\">\r\n    <div class=\"title\">Best Programs</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>German Volme Training</li>\r\n        <li>Starting Strength</li>\r\n        <li>Ladder Strength</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <div class=\"cell increase\">\r\n    <div class=\"title\">% Increase (1RM)</div>\r\n    <div class=\"content\">\r\n      <ol>\r\n        <li>5.10 %</li>\r\n        <li>4.80 %</li>\r\n        <li>4.32 %</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n    <div class=\"cell muscle\">\r\n        <div class=\"title\">Main muscle group</div>\r\n        <div class=\"content\">\r\n            <h4>Calves</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell exercise\">\r\n        <div class=\"title\">Test Exercise</div>\r\n        <div class=\"content\">\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Seated calf raise</button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Standing smith-machine calf raise</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Standing calf raise (machine)</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Seated calf raise</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Calf raise in leg-press machine</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Donkey calf raise</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell program\">\r\n        <div class=\"title\">Best Programs</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n            <li>German Volme Training</li>\r\n            <li>Starting Strength</li>\r\n            <li>Ladder Strength</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell increase\">\r\n        <div class=\"title\">% Increase (1RM)</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n              <li>5.10 %</li>\r\n              <li>4.80 %</li>\r\n              <li>4.32 %</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n    <div class=\"cell muscle\">\r\n        <div class=\"title\">Main muscle group</div>\r\n        <div class=\"content\">\r\n            <h4>Biceps</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell exercise\">\r\n        <div class=\"title\">Test Exercise</div>\r\n        <div class=\"content\">\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Seated dumbbell biceps curl</button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Seated dumbbell biceps curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Standing dumbbell biceps curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Barbell biceps curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Seated hammer curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Standing hammer curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">EZ-barbell scott curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Dumbbell scott curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Hammer scott curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Reverse curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Reverse scott curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Double cable curl</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Single cable curl</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell program\">\r\n        <div class=\"title\">Best Programs</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n            <li>German Volme Training</li>\r\n            <li>Starting Strength</li>\r\n            <li>Ladder Strength</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell increase\">\r\n        <div class=\"title\">% Increase (1RM)</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n              <li>5.10 %</li>\r\n              <li>4.80 %</li>\r\n              <li>4.32 %</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"muscle-group-table\">\r\n    <div class=\"cell muscle\">\r\n        <div class=\"title\">Main muscle group</div>\r\n        <div class=\"content\">\r\n            <h4>Triceps</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell exercise\">\r\n        <div class=\"title\">Test Exercise</div>\r\n        <div class=\"content\">\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dips for triceps</button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Flat bench barbell scull crusher</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell scull crusher</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Seated barbell scull crusher</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Seated dumbbell scull crusher</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Close-grip bench press</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Dips for triceps</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Push-down</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Rope push-down</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Cable kick-back</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Dumbbell kick-back</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell program\">\r\n        <div class=\"title\">Best Programs</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n            <li>German Volme Training</li>\r\n            <li>Starting Strength</li>\r\n            <li>Ladder Strength</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell increase\">\r\n        <div class=\"title\">% Increase (1RM)</div>\r\n        <div class=\"content\">\r\n            <ol>\r\n              <li>5.10 %</li>\r\n              <li>4.80 %</li>\r\n              <li>4.32 %</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExperienceBankMuscleGroupTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankMuscleGroupTable", function() { return ExperienceBankMuscleGroupTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceBankMuscleGroupTable = /** @class */ (function () {
    function ExperienceBankMuscleGroupTable() {
        this.title = '';
    }
    ExperienceBankMuscleGroupTable.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceBankMuscleGroupTable.prototype, "title", void 0);
    ExperienceBankMuscleGroupTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-experience-bank-muscle-group-table',
            template: __webpack_require__(/*! ./muscle-group-table.component.html */ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html")
        })
    ], ExperienceBankMuscleGroupTable);
    return ExperienceBankMuscleGroupTable;
}());



/***/ }),

/***/ "./src/app/experience-bank/experience-bank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/experience-bank/experience-bank.module.ts ***!
  \***********************************************************/
/*! exports provided: ExperienceBankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankModule", function() { return ExperienceBankModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/experience-bank/components/main.component.ts");
/* harmony import */ var _components_muscle_group_muscle_group_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/muscle-group/muscle-group-table.component */ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExperienceBankModule = /** @class */ (function () {
    function ExperienceBankModule() {
    }
    ExperienceBankModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceBankComponent"],
                _components_muscle_group_muscle_group_table_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceBankMuscleGroupTable"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
            ],
            providers: [],
        })
    ], ExperienceBankModule);
    return ExperienceBankModule;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/calendar/calendar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/calendar/calendar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Calendar:</h2>\r\n<div class=\"container-box\">\r\n    <div class=\"subtitle\">\r\n        <h3>Saved workouts</h3>\r\n    </div>\r\n    <div class=\"workouts-list\">\r\n        <div class=\"workout\">workout <span>1</span><p>CHEST / SHOULDERS / TRICEPS</p></div>\r\n        <div class=\"workout\">workout <span>2</span><p>BACK / BICEPS</p></div>\r\n        <div class=\"workout\">workout <span>3</span><p>QUADRICEPS / HAMSTRINGS / CALVES</p></div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Week</th>\r\n                    <th>MON</th>\r\n                    <th>Tue</th>\r\n                    <th>Wed</th>\r\n                    <th>Thu</th>\r\n                    <th>Fri</th>\r\n                    <th>Sat</th>\r\n                    <th>Sun</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"8\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>1</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>2</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>3</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>4</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>5</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>6</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>7</td>\r\n                    <td><span>1</span></td>\r\n                    <td></td>\r\n                    <td><span>2</span></td>\r\n                    <td></td>\r\n                    <td><span>3</span></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                        <td>8</td>\r\n                        <td><span>1</span></td>\r\n                        <td></td>\r\n                        <td><span>2</span></td>\r\n                        <td></td>\r\n                        <td><span>3</span></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                            <td>9</td>\r\n                            <td><span>1</span></td>\r\n                            <td></td>\r\n                            <td><span>2</span></td>\r\n                            <td></td>\r\n                            <td><span>3</span></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                                <td>10</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>11</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>12</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>13</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>14</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>15</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>16</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>17</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>18</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>19</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>20</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>21</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>22</td>\r\n                                <td><span>1</span></td>\r\n                                <td></td>\r\n                                <td><span>2</span></td>\r\n                                <td></td>\r\n                                <td><span>3</span></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <a href=\"\" class=\"btn btn-black\"><span>+</span> ADD WEEK</a>\r\n        <a href=\"\" class=\"btn btn-gray\">REMOVE WEEK</a>\r\n    </div>\r\n    <div class=\"calendar-info\">\r\n        <p class=\"program\"><span>PROGRAM NAME:</span> GERMAN VOLUME TRAINING </p>\r\n        <p class=\"category\"><span>CATEGORY  NAME:</span> HYPERTROPHY </p>\r\n        <p class=\"description\"><span>Description:</span> Lorem ipsum dolor sit amet consectetur... <a href=\"\">Show more</a> </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/calendar/calendar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/calendar/calendar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlanBuilderCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderCalendarComponent", function() { return PlanBuilderCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderCalendarComponent = /** @class */ (function () {
    function PlanBuilderCalendarComponent() {
    }
    PlanBuilderCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderCalendarComponent.prototype, "applicationUser", void 0);
    PlanBuilderCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/plan/components/calendar-builder/calendar/calendar.component.html")
        })
    ], PlanBuilderCalendarComponent);
    return PlanBuilderCalendarComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/exercises/exercises.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/exercises/exercises.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Exercises:</h2>\r\n<div class=\"search-form\">\r\n   <div class=\"form-group\"><input class=\"form-control\" placeholder=\"Search: Exercises, Muscle Group\" type=\"text\"></div>\r\n</div>\r\n<h3 class=\"sticky-rv1\">MULTI JOINT EXERCISES:</h3>\r\n<div class=\"exercises-list\">\r\n\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Squats</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>FRONT<br>SQUATS</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Lunges</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Leg Press</h4>\r\n      </figure>\r\n   </div>\r\n</div>\r\n<h3 class=\"sticky-rv\">SINGLE JOINT EXERCISES:</h3>\r\n<div class=\"exercises-list\">\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Leg<br>Extension</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Single Leg<br>Extension</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\">\r\n         <h4>Sissy<br>Squats</h4>\r\n      </figure>\r\n   </div>\r\n   <div class=\"exercise\">\r\n      <figure>\r\n         <!-- <img alt=\"\" class=\"mx-auto d-block mb-1\" src=\"images/squat.png\"> -->\r\n         <h4></h4>\r\n      </figure>\r\n   </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <h2>Exercises:</h2>\r\n\r\n<div class=\"search-form\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" placeholder=\"Search: Exercises, Muscle Group\" class=\"form-control\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercises-list\">\r\n    <h3>MULTI JOINT EXERCISES:</h3>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Squats</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>FRONT SQUATS</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Squats</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>FRONT SQUATS</h4>\r\n        </figure>\r\n    </div>\r\n\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Squats</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>FRONT SQUATS</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Squats</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>FRONT SQUATS</h4>\r\n        </figure>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercises-list\">\r\n    <h3>SINGLE JOINT EXERCISES:</h3>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Leg Extension</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n    <div class=\"exercise\">\r\n        <figure>\r\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\r\n            <h4>Single Leg Extencions</h4>\r\n        </figure>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/exercises/exercises.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/exercises/exercises.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PlanBuilderExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderExercisesComponent", function() { return PlanBuilderExercisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderExercisesComponent = /** @class */ (function () {
    function PlanBuilderExercisesComponent() {
    }
    PlanBuilderExercisesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderExercisesComponent.prototype, "applicationUser", void 0);
    PlanBuilderExercisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-exercises',
            template: __webpack_require__(/*! ./exercises.component.html */ "./src/app/plan/components/calendar-builder/exercises/exercises.component.html")
        })
    ], PlanBuilderExercisesComponent);
    return PlanBuilderExercisesComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/main.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/main.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h1>THE WORKOUT & CALENDAR BUILDER</h1>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row\">\r\n        <osg-plan-builder-exercises></osg-plan-builder-exercises>\r\n        <osg-plan-builder-workout></osg-plan-builder-workout>\r\n        <osg-plan-builder-calendar></osg-plan-builder-calendar>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"general-actions text-right\">\r\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE\r\n                PROGRAM</a>\r\n            <a (click)=\"next()\" class=\"btn btn-green-gradient btn-next py-2 pl-3 mt-3 mt-sm-0\"> NEXT : PROGRESSION BUILDER</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"osg-plan-builder1 d-flex justify-content-center\">\r\n   <div class=\"osg-calendar-builder1\">\r\n      <div class=\"container-fluid\">\r\n         <h1>THE WORKOUT &amp;<br> CALENDAR BUILDER</h1>\r\n         <div class=\"clearfix\"></div>\r\n         <div class=\"row\">\r\n            <div class=\"osg-plan-builder-exercises1\">\r\n               <h2>Exercises:</h2>\r\n               <div class=\"search-form\">\r\n                  <div class=\"form-group\"><input class=\"form-control\" placeholder=\"Search: Exercises, Muscle Group\" type=\"text\"></div>\r\n               </div>\r\n               <div class=\"exercises-list\">\r\n                  <h3>MULTI JOINT EXERCISES:</h3>\r\n                  <div class=\"exercise_img\">\r\n                     <img src=\"images/screenshots/Multi.png\" alt=\"\">\r\n                  </div>\r\n               </div>\r\n               <div class=\"exercises-list\">\r\n                  <h3>SINGLE JOINT EXERCISES:</h3>\r\n                  <div class=\"exercise_img\">\r\n                     <img src=\"images/screenshots/Single.png\" alt=\"\">\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"osg-plan-builder-workout1\">\r\n               <h2>Workouts:</h2>\r\n               <div class=\"container-box\">\r\n                  <div class=\"worout_img\">\r\n                     <img src=\"images/screenshots/Workkouts.png\" alt=\"\">\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"osg-plan-builder-calendar1\">\r\n               <h2>Calendar:</h2>\r\n               <div class=\"container-box\">\r\n                  <div class=\"calendar_image\">\r\n                     <img src=\"images/screenshots/Calendar.png\" alt=\"\">\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row justify-content-end\">\r\n            <div class=\"general-actions text-right\"><a class=\"btn btn-black py-1 px-1\" href=\"\"><img alt=\"\" src=\"images/save.png\"> SAVE PROGRAM</a><a (click)=\"next()\" class=\"btn btn-green-gradient btn-next py-1 pl-1 mt-3 mt-sm-0\"> NEXT : PROGRESSION BUILDER</a></div>\r\n         </div>\r\n      </div>\r\n    </div>  \r\n</div> -->"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/main.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/main.component.ts ***!
  \********************************************************************/
/*! exports provided: CalendarBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarBuilderComponent", function() { return CalendarBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarBuilderComponent = /** @class */ (function () {
    function CalendarBuilderComponent() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalendarBuilderComponent.prototype.ngOnInit = function () {
    };
    CalendarBuilderComponent.prototype.next = function () {
        this.complete.emit(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarBuilderComponent.prototype, "complete", void 0);
    CalendarBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-calendar-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/calendar-builder/main.component.html")
        })
    ], CalendarBuilderComponent);
    return CalendarBuilderComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/workouts/workouts.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/workouts/workouts.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Workouts:</h2>\r\n<div class=\"container-box\">\r\n   <div class=\"subtitle\">\r\n      <h3>Workout <span>4</span></h3>\r\n   </div>\r\n   <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n         <thead>\r\n            <tr>\r\n               <th></th>\r\n               <th colspan=\"2\">Volume</th>\r\n               <th colspan=\"2\">Intensity</th>\r\n               <th colspan=\"3\"></th>\r\n            </tr>\r\n            <tr>\r\n               <th style=\"padding-right: 9px!important;\">Exercise</th>\r\n               <th>Set</th>\r\n               <th>Reps</th>\r\n               <th>RTF <br>(REPS TO <br>FAILURE)</th>\r\n               <th>Load<br>(% of 1 rm)</th>\r\n               <th>Method</th>\r\n               <th>Tempo/sec<br>(DOWN-Hold-up)</th>\r\n               <th>Rest period <br> (min : sec)</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <tr></tr>\r\n            <!-- 1:1 -->\r\n            <tr>\r\n               <td><label>SQUATS</label></td>\r\n               <td>1</td>\r\n               <td><input type=\"text\" value=\"12\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td><input type=\"hidden\" value=\"@ 1\" class=\"form-control\"></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <!-- 1:2 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>2</td>\r\n                  <td><input type=\"text\" value=\"12\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n            <!-- 1:3 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>3</td>\r\n                  <td><input type=\"text\" value=\"12\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n            <!-- 1:4 -->\r\n            <tr>\r\n               <td><a class=\"add fa-add-tbl\" href=\"\">+</a><a class=\"remove fa-rmv-tbl\" href=\"\">-</a></td>\r\n               <td>4</td>\r\n               <td><input type=\"text\" value=\"12\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n\r\n\r\n\r\n\r\n            <!-- 2:1 -->\r\n            <tr>\r\n               <td>Lunges</td>\r\n               <td>1</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <!-- 2:2 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>2</td>\r\n                  <td><input type=\"text\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n            <!-- 2:3 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>3</td>\r\n                  <td><input type=\"text\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n               <!-- 2:4 -->\r\n            <tr>\r\n               <td><a class=\"add fa-add-tbl\" href=\"\">+</a><a class=\"remove fa-rmv-tbl\" href=\"\">-</a></td>\r\n               <td>4</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n\r\n            <!-- 3:1 -->\r\n            <tr>\r\n               <td>Leg Press</td>\r\n               <td>1</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <!-- 3:2 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>2</td>\r\n                  <td><input type=\"text\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n               <!-- 3:3 -->\r\n               <tr>\r\n                     <td></td>\r\n                     <td>3</td>\r\n                     <td><input type=\"text\" class=\"form-control\"></td>\r\n                     <td class=\"d-flex\">\r\n                        <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                        <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                     </td>\r\n                     <td></td>\r\n                     <td>\r\n                        <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                           <option *ngFor=\"let option of options\">{{option}}</option>\r\n                        </select>\r\n                     </td>\r\n                     <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                     <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n                  </tr>\r\n                  <!-- 3:4 -->\r\n            <tr>\r\n               <td><a class=\"add fa-add-tbl\" href=\"\">+</a><a class=\"remove fa-rmv-tbl\" href=\"\">-</a></td>\r\n               <td>4</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            \r\n            <!-- 4:1 -->\r\n            <tr>\r\n               <td>Leg Extension</td>\r\n               <td>1</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <!-- 4:2 -->\r\n            <tr>\r\n                  <td></td>\r\n                  <td>2</td>\r\n                  <td><input type=\"text\" class=\"form-control\"></td>\r\n                  <td class=\"d-flex\">\r\n                     <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                     <input class=\"form-control\" type=\"text\" value=\"1\">\r\n                  </td>\r\n                  <td></td>\r\n                  <td>\r\n                     <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                     </select>\r\n                  </td>\r\n                  <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                  <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n               </tr>\r\n            <!-- 4:3 -->\r\n            <tr>\r\n               <td><a class=\"add fa-add-tbl\" href=\"\">+</a><a class=\"remove fa-rmv-tbl\" href=\"\">-</a></td>\r\n               <td>3</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <!-- 4:4 -->\r\n            <tr>\r\n               <td></td>\r\n               <td>4</td>\r\n               <td><input type=\"text\" class=\"form-control\"></td>\r\n               <td class=\"d-flex\">\r\n                  <p style=\"padding-right: 5px;font-size: 15px;margin-bottom:0px;\">@</p>\r\n                  <input class=\"form-control\" type=\"text\" value=\"1\">\r\n               </td>\r\n               <td></td>\r\n               <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                     <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n               </td>\r\n               <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n               <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n   </div>\r\n   <div class=\"actions\">\r\n      <div class=\"row justify-content-between\">\r\n         <div class=\"col-12 col-sm-12 col-xl-8\"><a class=\"btn btn-black\" href=\"\"><span>+</span> ADD EXERCISE</a><a class=\"btn btn-gray\" href=\"\">REMOVE EXERCISE</a></div>\r\n         <div class=\"col-12 col-sm-12 col-xl-4 text-center text-sm-right mt-4 mt-sm-0\"><a class=\"btn btn-black\" href=\"\"><img alt=\"\" src=\"images/save.png\"> SAVE WORKOUT</a></div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/workouts/workouts.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/workouts/workouts.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlanBuilderWorkoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderWorkoutsComponent", function() { return PlanBuilderWorkoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderWorkoutsComponent = /** @class */ (function () {
    function PlanBuilderWorkoutsComponent() {
        this.options = [
            'Straight Set',
            'Warm up set',
            'Test (AMRAP) set',
            'Pyramid set',
            'Super set',
            'Giant set',
            'Pre-exhaust set',
            'Drop set'
        ];
    }
    PlanBuilderWorkoutsComponent.prototype.changeColor = function (event) {
        (event.target.value == 'Test (AMRAP) set') ? event.target.classList.add('onlybg') : event.target.classList.remove('onlybg');
    };
    PlanBuilderWorkoutsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderWorkoutsComponent.prototype, "applicationUser", void 0);
    PlanBuilderWorkoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-workout',
            template: __webpack_require__(/*! ./workouts.component.html */ "./src/app/plan/components/calendar-builder/workouts/workouts.component.html")
        })
    ], PlanBuilderWorkoutsComponent);
    return PlanBuilderWorkoutsComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/plan/components/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<osg-calendar-builder *ngIf=\"isBuildingCalendar\" (complete)=\"next()\"></osg-calendar-builder>\r\n<osg-progression-builder *ngIf=\"isBuildingProgress\" (cancel)=\"previous()\"></osg-progression-builder>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <osg-get-started view=\"secondary\" [sections]=\"getStartedSections\"></osg-get-started>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/plan/components/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/plan/components/main.component.ts ***!
  \***************************************************/
/*! exports provided: PlanBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderComponent", function() { return PlanBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlanBuilderComponent = /** @class */ (function () {
    function PlanBuilderComponent() {
    }
    //getStartedSections: string[] = ["the workout & calendar builder", "progression builder", "experience bank & reviews", "auto-regulation"];
    PlanBuilderComponent.prototype.ngOnInit = function () {
        this.step = PlanBuilderStep.CalendarBuilder;
    };
    Object.defineProperty(PlanBuilderComponent.prototype, "getStartedSections", {
        get: function () {
            return this.isBuildingCalendar
                ? ["the workout & calendar builder", "progression builder", "experience bank & reviews", "auto-regulation"]
                : ["strength training principles", "program design variables", "progression models and strategies", "save & publish programs"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanBuilderComponent.prototype, "isBuildingCalendar", {
        get: function () {
            return this.step === PlanBuilderStep.CalendarBuilder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanBuilderComponent.prototype, "isBuildingProgress", {
        get: function () {
            return this.step === PlanBuilderStep.ProgressionBuilder;
        },
        enumerable: true,
        configurable: true
    });
    PlanBuilderComponent.prototype.next = function () {
        window.scroll(0, 0);
        this.step = PlanBuilderStep.ProgressionBuilder;
    };
    PlanBuilderComponent.prototype.previous = function () {
        window.scroll(0, 0);
        this.step = PlanBuilderStep.CalendarBuilder;
    };
    PlanBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/main.component.html")
        })
    ], PlanBuilderComponent);
    return PlanBuilderComponent;
}());

var PlanBuilderStep;
(function (PlanBuilderStep) {
    PlanBuilderStep[PlanBuilderStep["CalendarBuilder"] = 0] = "CalendarBuilder";
    PlanBuilderStep[PlanBuilderStep["ProgressionBuilder"] = 1] = "ProgressionBuilder";
})(PlanBuilderStep || (PlanBuilderStep = {}));


/***/ }),

/***/ "./src/app/plan/components/progression-builder/main.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/main.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>THE PROGRESSION BUILDER</h1>\r\n    <div class=\"general-actions\">\r\n        <div class=\"col-12 col-sm-6\">\r\n            <a (click)=\"back()\" class=\"btn btn-gray btn-back py-2 pr-3 mt-3 mt-sm-0\"> BACK: TO CALENDAR BUILDER</a>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 text-right\">\r\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE PROGRAM</a>\r\n            <a href=\"\" class=\"btn btn-green-gradient py-2 px-4 ml-2\">PUBLISH PROGRAM</a>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <osg-progression-builder-progressive-overload-graph></osg-progression-builder-progressive-overload-graph>\r\n    <osg-progression-builder-training-program></osg-progression-builder-training-program>\r\n    <osg-progression-builder-program-design></osg-progression-builder-program-design>\r\n\r\n    <div class=\"general-actions\">\r\n        <div class=\"col-12 col-sm-6\">\r\n            <a (click)=\"back()\" class=\"btn btn-gray btn-back py-2 pr-3 mt-3 mt-sm-0\"> BACK: TO CALENDAR BUILDER</a>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 text-right\">\r\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE PROGRAM</a>\r\n            <a href=\"\" class=\"btn btn-green-gradient py-2 px-4 ml-2\">PUBLISH PROGRAM</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/main.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/main.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgressionBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderComponent", function() { return ProgressionBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressionBuilderComponent = /** @class */ (function () {
    function ProgressionBuilderComponent() {
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProgressionBuilderComponent.prototype.ngOnInit = function () { };
    ProgressionBuilderComponent.prototype.back = function () {
        this.cancel.emit(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProgressionBuilderComponent.prototype, "cancel", void 0);
    ProgressionBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/progression-builder/main.component.html")
        })
    ], ProgressionBuilderComponent);
    return ProgressionBuilderComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/program-design/program-design.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/program-design/program-design.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Program design:</h2>\r\n\r\n<div class=\"table-program-design\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n          <tr>\r\n            <th rowspan=\"2\">Muscle Group</th>\r\n            <th rowspan=\"2\">Test Exercise</th>\r\n            <th rowspan=\"2\">Type of exercise Level 1</th>\r\n            <th rowspan=\"2\">Exercises Level 2</th>\r\n            <th colspan=\"2\" class=\"blue\">Volume</th>\r\n            <th colspan=\"2\" class=\"red\">Intensity</th>\r\n            <th rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</th>\r\n            <th rowspan=\"2\">Progression model</th>\r\n            <th rowspan=\"2\">Rest periods (min-max)</th>\r\n            <th rowspan=\"2\">Tempo (all)</th>\r\n          </tr>\r\n          <tr>\r\n            <th class=\"blue\">Reps (min-max)</th>\r\n            <th class=\"blue\">Volume pr week (setxreps)</th>\r\n            <th class=\"red\">% of 1RM (min-max)</th>\r\n            <th class=\"red\">Reps to failure (min-max)</th>\r\n          </tr>\r\n          <!--  -->\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td rowspan=\"2\">Chest</td>\r\n          <td rowspan=\"2\">Bench Press</td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Back</td>\r\n          <td rowspan=\"2\">Deadlift</td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Quads</td>\r\n          <td rowspan=\"2\">Squat</td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Shoulders</td>\r\n          <td rowspan=\"2\"></td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Hamstrings</td>\r\n          <td rowspan=\"2\"></td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Calves</td>\r\n          <td rowspan=\"2\"></td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Triceps</td>\r\n          <td rowspan=\"2\"></td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n        <!--  -->\r\n        <tr>\r\n          <td rowspan=\"2\">Biceps</td>\r\n          <td rowspan=\"2\"></td>\r\n          <td>Multi joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n          <td rowspan=\"2\" class=\"green\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n          <td rowspan=\"2\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Single joint exercises</td>\r\n          <td></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"blue\"></td>\r\n          <td class=\"red\"></td>\r\n          <td class=\"red\"></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/program-design/program-design.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/program-design/program-design.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProgressionBuilderProgramDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderProgramDesignComponent", function() { return ProgressionBuilderProgramDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressionBuilderProgramDesignComponent = /** @class */ (function () {
    function ProgressionBuilderProgramDesignComponent() {
    }
    ProgressionBuilderProgramDesignComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderProgramDesignComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderProgramDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-program-design',
            template: __webpack_require__(/*! ./program-design.component.html */ "./src/app/plan/components/progression-builder/program-design/program-design.component.html")
        })
    ], ProgressionBuilderProgramDesignComponent);
    return ProgressionBuilderProgramDesignComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>PROGRESSIVE OVERLOAD GRAPH</h2>\r\n<div class=\"graph\">\r\n    <div [id]=\"progressiveOverloadGraphId\"></div>\r\n    <div class=\"week-types\">\r\n        <div class=\"article_type\">\r\n            <p>Type of week:</p>\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span>Week 1</span>\r\n                <span>Test & training week</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span>Week 2</span>\r\n                <span>Training week</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span>Week 3</span>\r\n                <span>Training week</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span>Week 4</span>\r\n                <span>Deload week</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span>Week 5</span>\r\n                <span>Training week</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"conventions\">\r\n        <div class=\"dropdown\">\r\n            <p>Muscle Group:</p>\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"background: rgb(181, 239, 255);\">Chest</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">                \r\n                <a class=\"dropdown-item\" href=\"#\">Chest</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Shoulders</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Triceps</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Back</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Biceps</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Quadriceps</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Hamstrings</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Calves</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\r\n                <a class=\"dropdown-item\">-- Select -- </a>\r\n            </div>\r\n        </div>\r\n        <p class=\"volume\"><span></span>Total volume (set x reps)</p>\r\n        <p class=\"intensity\"><span></span>Total intensity (% of 1 RM)</p>\r\n        <p class=\"volume-load\"><span></span>Total volume load (set x reps x load)</p>\r\n        <p class=\"frequency\"><span></span>Frequency (sessions per week)</p>\r\n        <div class=\"control-slider\">\r\n            <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\r\n            <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ProgressionBuilderProgressiveOverloadGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderProgressiveOverloadGraphComponent", function() { return ProgressionBuilderProgressiveOverloadGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressionBuilderProgressiveOverloadGraphComponent = /** @class */ (function () {
    function ProgressionBuilderProgressiveOverloadGraphComponent() {
        this._id = ++ProgressionBuilderProgressiveOverloadGraphComponent_1.counter;
    }
    ProgressionBuilderProgressiveOverloadGraphComponent_1 = ProgressionBuilderProgressiveOverloadGraphComponent;
    ProgressionBuilderProgressiveOverloadGraphComponent.prototype.ngOnInit = function () {
    };
    ProgressionBuilderProgressiveOverloadGraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var chart = c3__WEBPACK_IMPORTED_MODULE_2__["generate"]({
            bindto: "#" + this.progressiveOverloadGraphId,
            size: {
                height: 300
            },
            legend: {
                show: false
            },
            transition: {
                duration: 1000
            },
            data: {
                x: 'x',
                colors: {
                    data1: '#EF8683',
                    data2: '#C3E594',
                    data3: '#94C4F4',
                    data4: '#6FAB32'
                },
                columns: [
                    ['x', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'],
                    ['data1', 1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9, 2.05, 2.2, 2.35, 2.5, 2.65, 2.8, 2.95, 3.1, 3.0, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7],
                    ['data2', 2.4, 2.42, 2.44, 2.46, 2.48, 2.5, 2.52, 2.54, 2.52, 2.5, 2.48, 2.46, 2.44, 2.42, 2.4, 2.35, 2.3, 2.25, 2.2, 2.15, 2.1, 2.05, 2.3, 2.55, 2.8, 3.05, 3.3, 3.55, 3.8, 3.55, 3.3, 3.05, 2.8, 2.55, 2.3],
                    ['data3', 3.8, 3.7, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 2.9, 2.7, 2.5, 2.3, 2.1, 1.9, 1.7, 1.69, 1.68, 1.67, 1.65, 1.64, 1.62, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 3.85, 3.3, 2.75, 2.2, 1.65, 1.1],
                    ['data4', 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0],
                ],
                axes: {
                    data1: 'y',
                    data2: 'y',
                    data3: 'y',
                    data4: 'y'
                },
                types: {
                    data4: 'bar'
                }
                // labels: {
                //     format: (v, id, i, j) => { 
                //         return 'Mon'
                //      }
                //     // it's possible to set for each data
                //     //format: {
                //     //    data1: function (v, id, i, j) { ... },
                //     //    ...
                //     //}
                //   }
                // types: {
                //     data1: 'area',
                //     data2: 'area',
                //     data3: 'area'
                // }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        culling: false,
                        rotate: 90,
                        format: function (x) {
                            var s = x.getFullYear() + "-01-01";
                            var v = ['2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2006-06-06', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2013-06-06', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2020-06-06', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2027-06-06', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'];
                            var l = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            var idx = v.indexOf(s);
                            return l[idx];
                        },
                    },
                    height: 50
                },
                y: {
                    min: 0,
                    max: 5,
                    tick: {
                        outer: true,
                        format: function (d) {
                            return '';
                        }
                    }
                }
            },
            grid: {
                x: {
                    lines: [
                        { value: '2006-06-06', text: '' },
                        { value: '2013-06-06', text: '', class: 'label-5' },
                        { value: '2020-06-06', text: '', position: 'start' },
                        { value: '2027-06-06', text: '', position: 'start' }
                    ]
                }
            },
            onrendered: function () {
                $("#" + _this.progressiveOverloadGraphId + " .c3-axis-y").find('.tick').attr('style', 'opacity: 0');
                var $x_axis = $("#" + _this.progressiveOverloadGraphId + " .c3-axis-x");
                $.each($x_axis, function (i, el) {
                    var $ticks = $(el).find('.tick');
                    $.each($ticks, function (j, els) {
                        var temp = $(els).attr('transform').split(' ');
                        var origin_transform = temp[0].slice(0, -1);
                        $(els).attr('style', 'transform: ' + origin_transform + "px, -4px);");
                        $(els).find('line').attr('y2', '8').attr('style', 'stroke-width: 2px');
                        $(els).find('text').attr("style", "text-anchor: start;").attr("style", "display: block;").attr("style", "transform: rotate(90deg) translate(18px, 0px);");
                    });
                });
                var $data_1 = $("#" + _this.progressiveOverloadGraphId + " .c3-circles-data1 > circle");
                $.each($data_1, function (i, el) {
                    if (i % 7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                var $data_2 = $("#" + _this.progressiveOverloadGraphId + " .c3-circles-data2 > circle");
                $.each($data_2, function (i, el) {
                    if (i % 7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                var $data_3 = $("#" + _this.progressiveOverloadGraphId + " .c3-circles-data3 > circle");
                $.each($data_3, function (i, el) {
                    if (i % 7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                var $data_4 = $("#" + _this.progressiveOverloadGraphId + " .c3-circles-data4 > circle");
                $.each($data_4, function (i, el) {
                    if (i % 7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
            }
        });
    };
    Object.defineProperty(ProgressionBuilderProgressiveOverloadGraphComponent.prototype, "progressiveOverloadGraphId", {
        get: function () {
            return "performance-graph-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    var ProgressionBuilderProgressiveOverloadGraphComponent_1;
    ProgressionBuilderProgressiveOverloadGraphComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderProgressiveOverloadGraphComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderProgressiveOverloadGraphComponent = ProgressionBuilderProgressiveOverloadGraphComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-progressive-overload-graph',
            template: __webpack_require__(/*! ./progressive-overload-graph.component.html */ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProgressionBuilderProgressiveOverloadGraphComponent);
    return ProgressionBuilderProgressiveOverloadGraphComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/training-program/training-program.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/training-program/training-program.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center mb-3\">\r\n    <div class=\"col-12 col-sm-8\">\r\n      <h2>The Training Program</h2>\r\n    </div>\r\n    <div class=\"col-12 col-sm-4 text-right\">\r\n      <div class=\"control-slider\">\r\n        <a href=\"javascript:;\" class=\"btn-control search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\r\n        <a (click)=\"moveRight()\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\r\n        <a (click)=\"moveLeft()\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div #trainingProgramWrapper class=\"training-program-wrapper\"><!-- for test before JS (margin-left: -650px or -1300px... etc) -->\r\n  <div class=\"thead\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        Week\r\n      </div>\r\n      <div class=\"day\">\r\n        Monday\r\n      </div>\r\n      <div class=\"day\">\r\n        WEDNESDAY\r\n      </div>\r\n      <div class=\"day\">\r\n        Friday\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tbody\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        <div>\r\n          <span>1</span>\r\n          <p>Type of week:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & training week</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n              <a class=\"dropdown-item\" href=\"#\">Test & training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deload week</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>day 1:</span> Chest / Shoulders / Triceps</h6>\r\n        <!-- table 1:1 start -->\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\" style=\"background: rgb(181, 239, 255);\">Chest</td>\r\n              <td rowspan=\"4\">Bench Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>  \r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            \r\n            <tr>\r\n              <td rowspan=\"4\">Shoulders</td>\r\n              <td rowspan=\"4\" class=\"white\">Dumbbell Shoulder Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td rowspan=\"4\">Triceps</td>\r\n              <td rowspan=\"4\" class=\"white\">Pushdown\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n                <td>Chest</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Shoulders</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Triceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n        <!-- table 1:1 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 2:</span> Back / Biceps</h6>\r\n        <!-- table 1:2 start -->\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"8\">Back</td>\r\n              <td rowspan=\"4\">Pull Down\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"4\" class=\"white\">Dumbell Rows\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr> <tr>\r\n              <td rowspan=\"4\">Biceps</td>\r\n              <td rowspan=\"4\" class=\"white\">Scottcurl\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Back</td>\r\n              <td colspan=\"2\">Total Volume</td>\r\n              <td>40</td>\r\n              <td>Average Intensity</td>\r\n              <td>70,7</td>\r\n              <td>Tot. Volume Load</td>\r\n              <td>2828</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Biceps</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n          </tfoot>\r\n        </table>\r\n        <!-- table 1:2 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 3:</span> Quadriceps / Hamstrings / Calves</h6>\r\n        <!-- table 1:3 start -->\r\n        <table class=\"table\" cellpadding=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(Down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\">Quadriceps</td>\r\n              <td rowspan=\"4\">Squat\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"4\">Hamstrings</td>\r\n              <td rowspan=\"4\" class=\"white\">Seated Leg Curls\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"12\">Calves</td>\r\n              <td rowspan=\"4\" class=\"white\">Standing Calf Raises\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Quadriceps</td>\r\n              <td colspan=\"2\">Total Volume</td>\r\n              <td>40</td>\r\n              <td>Average Intensity</td>\r\n              <td>70,7</td>\r\n              <td>Tot. Volume Load</td>\r\n              <td>2828</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Hamstrings</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Calves</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n        <!-- table 1:3 End -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        <div>\r\n          <span>2</span>\r\n          <p>Type of week:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & training week</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n              <a class=\"dropdown-item\" href=\"#\">Test & training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deload week</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>day 1:</span> Chest / Shoulders / Triceps</h6>\r\n        <!-- table 2:1 start -->\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"4\" style=\"background: rgb(181, 239, 255);\">Chest</td>\r\n                <td rowspan=\"4\">Bench Press\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>  \r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <td rowspan=\"4\">Shoulders</td>\r\n                <td rowspan=\"4\" class=\"white\">Dumbbell Shoulder Press\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n  \r\n              <tr>\r\n                <td rowspan=\"4\">Triceps</td>\r\n                <td rowspan=\"4\" class=\"white\">Pushdown\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                  <td>Chest</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Shoulders</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Triceps</td>\r\n                    <td colspan=\"2\">Total Volume</td>\r\n                    <td>40</td>\r\n                    <td>Average Intensity</td>\r\n                    <td>70,7</td>\r\n                    <td>Tot. Volume Load</td>\r\n                    <td>2828</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 2:1 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 2:</span> Back / Biceps</h6>\r\n        <!-- table 2:2 start -->\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"8\">Back</td>\r\n                <td rowspan=\"4\">Pull Down\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"4\" class=\"white\">Dumbell Rows\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr> <tr>\r\n                <td rowspan=\"4\">Biceps</td>\r\n                <td rowspan=\"4\" class=\"white\">Scottcurl\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td>Back</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Biceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 2:2 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 3:</span> Quadriceps / Hamstrings / Calves</h6>\r\n       <!-- table 2:3 start -->\r\n       <table class=\"table\" cellpadding=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(Down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\">Quadriceps</td>\r\n              <td rowspan=\"4\">Squat\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"4\">Hamstrings</td>\r\n              <td rowspan=\"4\" class=\"white\">Seated Leg Curls\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"12\">Calves</td>\r\n              <td rowspan=\"4\" class=\"white\">Standing Calf Raises\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Quadriceps</td>\r\n              <td colspan=\"2\">Total Volume</td>\r\n              <td>40</td>\r\n              <td>Average Intensity</td>\r\n              <td>70,7</td>\r\n              <td>Tot. Volume Load</td>\r\n              <td>2828</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Hamstrings</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Calves</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n      <!-- table 2:3 End -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        <div>\r\n          <span>3</span>\r\n          <p>Type of week:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & training week</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n              <a class=\"dropdown-item\" href=\"#\">Test & training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deload week</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>day 1:</span> Chest / Shoulders / Triceps</h6>\r\n       <!-- table 3:1 start -->\r\n       <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\" style=\"background: rgb(181, 239, 255);\">Chest</td>\r\n              <td rowspan=\"4\">Bench Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>  \r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            \r\n            <tr>\r\n              <td rowspan=\"4\">Shoulders</td>\r\n              <td rowspan=\"4\" class=\"white\">Dumbbell Shoulder Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td rowspan=\"4\">Triceps</td>\r\n              <td rowspan=\"4\" class=\"white\">Pushdown\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n                <td>Chest</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Shoulders</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Triceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n      <!-- table 3:1 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 2:</span> Back / Biceps</h6>\r\n       <!-- table 3:2 start -->\r\n       <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"8\">Back</td>\r\n              <td rowspan=\"4\">Pull Down\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"4\" class=\"white\">Dumbell Rows\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr> <tr>\r\n              <td rowspan=\"4\">Biceps</td>\r\n              <td rowspan=\"4\" class=\"white\">Scottcurl\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Back</td>\r\n              <td colspan=\"2\">Total Volume</td>\r\n              <td>40</td>\r\n              <td>Average Intensity</td>\r\n              <td>70,7</td>\r\n              <td>Tot. Volume Load</td>\r\n              <td>2828</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Biceps</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n          </tfoot>\r\n        </table>\r\n      <!-- table 3:2 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 3:</span> Quadriceps / Hamstrings / Calves</h6>\r\n       <!-- table 3:3 start -->\r\n       <table class=\"table\" cellpadding=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(Down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\">Quadriceps</td>\r\n              <td rowspan=\"4\">Squat\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"4\">Hamstrings</td>\r\n              <td rowspan=\"4\" class=\"white\">Seated Leg Curls\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td rowspan=\"12\">Calves</td>\r\n              <td rowspan=\"4\" class=\"white\">Standing Calf Raises\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Quadriceps</td>\r\n              <td colspan=\"2\">Total Volume</td>\r\n              <td>40</td>\r\n              <td>Average Intensity</td>\r\n              <td>70,7</td>\r\n              <td>Tot. Volume Load</td>\r\n              <td>2828</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Hamstrings</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Calves</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n      <!-- table 3:3 End -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        <div>\r\n          <span>4</span>\r\n          <p>Type of week:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & training week</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n              <a class=\"dropdown-item\" href=\"#\">Test & training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deload week</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>day 1:</span> Chest / Shoulders / Triceps</h6>\r\n       <!-- table 4:1 start -->\r\n       <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Muscle Group</th>\r\n              <th>Exercise</th>\r\n              <th>Set</th>\r\n              <th>(Target) Reps</th>\r\n              <th>(Target) Reps to failure</th>\r\n              <th>Load <br>(% of 1 RM)</th>\r\n              <th>(Target) Volume Load</th>\r\n              <th>Method</th>\r\n              <th>Tempo (sec)<br>(down-hold-up)</th>\r\n              <th>Rest Period (min:sec)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td rowspan=\"4\" style=\"background: rgb(181, 239, 255);\">Chest</td>\r\n              <td rowspan=\"4\">Bench Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>  \r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            \r\n            <tr>\r\n              <td rowspan=\"4\">Shoulders</td>\r\n              <td rowspan=\"4\" class=\"white\">Dumbbell Shoulder Press\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                  <option *ngFor=\"let option of options\">{{option}}</option>\r\n                </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td rowspan=\"4\">Triceps</td>\r\n              <td rowspan=\"4\" class=\"white\">Pushdown\r\n                <a class=\"add\" href=\"\">+</a>\r\n                <a class=\"remove\" href=\"\">-</a>\r\n              </td>\r\n              <td>1</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n              <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n              <td>70,7</td>\r\n              <td>707</td>\r\n              <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                      <option *ngFor=\"let option of options\">{{option}}</option>\r\n                    </select>\r\n              </td>\r\n              <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n              <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n                <td>Chest</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>Shoulders</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Triceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n          </tfoot>\r\n        </table>\r\n      <!-- table 4:1 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 2:</span> Back / Biceps</h6>\r\n        <!-- table 4:2 start -->\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"8\">Back</td>\r\n                <td rowspan=\"4\">Pull Down\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"4\" class=\"white\">Dumbell Rows\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr> <tr>\r\n                <td rowspan=\"4\">Biceps</td>\r\n                <td rowspan=\"4\" class=\"white\">Scottcurl\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td>Back</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Biceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 4:2 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 3:</span> Quadriceps / Hamstrings / Calves</h6>\r\n        <!-- table 4:3 start -->\r\n        <table class=\"table\" cellpadding=\"0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(Down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"4\">Quadriceps</td>\r\n                <td rowspan=\"4\">Squat\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"4\">Hamstrings</td>\r\n                <td rowspan=\"4\" class=\"white\">Seated Leg Curls\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"12\">Calves</td>\r\n                <td rowspan=\"4\" class=\"white\">Standing Calf Raises\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td>Quadriceps</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Hamstrings</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Calves</td>\r\n                    <td colspan=\"2\">Total Volume</td>\r\n                    <td>40</td>\r\n                    <td>Average Intensity</td>\r\n                    <td>70,7</td>\r\n                    <td>Tot. Volume Load</td>\r\n                    <td>2828</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 4:3 End -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"week\">\r\n        <div>\r\n          <span>5</span>\r\n          <p>Type of week:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & training week</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n              <a class=\"dropdown-item\" href=\"#\">Test & training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Training week</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deload week</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>day 1:</span> Chest / Shoulders / Triceps</h6>\r\n        <!-- table 5:1 start -->\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"4\" style=\"background: rgb(181, 239, 255);\">Chest</td>\r\n                <td rowspan=\"4\">Bench Press\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>  \r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <td rowspan=\"4\">Shoulders</td>\r\n                <td rowspan=\"4\" class=\"white\">Dumbbell Shoulder Press\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                  <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                    <option *ngFor=\"let option of options\">{{option}}</option>\r\n                  </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n  \r\n              <tr>\r\n                <td rowspan=\"4\">Triceps</td>\r\n                <td rowspan=\"4\" class=\"white\">Pushdown\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                  <td>Chest</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Shoulders</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Triceps</td>\r\n                    <td colspan=\"2\">Total Volume</td>\r\n                    <td>40</td>\r\n                    <td>Average Intensity</td>\r\n                    <td>70,7</td>\r\n                    <td>Tot. Volume Load</td>\r\n                    <td>2828</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 5:1 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 2:</span> Back / Biceps</h6>\r\n        <!-- table 5:2 start -->\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"8\">Back</td>\r\n                <td rowspan=\"4\">Pull Down\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"4\" class=\"white\">Dumbell Rows\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr> <tr>\r\n                <td rowspan=\"4\">Biceps</td>\r\n                <td rowspan=\"4\" class=\"white\">Scottcurl\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td>Back</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Biceps</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 5:2 end -->\r\n      </div>\r\n      <div class=\"day\">\r\n        <h6><span>DAY 3:</span> Quads</h6>\r\n        <!-- table 5:3 start -->\r\n        <table class=\"table\" cellpadding=\"0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Muscle Group</th>\r\n                <th>Exercise</th>\r\n                <th>Set</th>\r\n                <th>(Target) Reps</th>\r\n                <th>(Target) Reps to failure</th>\r\n                <th>Load <br>(% of 1 RM)</th>\r\n                <th>(Target) Volume Load</th>\r\n                <th>Method</th>\r\n                <th>Tempo (sec)<br>(Down-hold-up)</th>\r\n                <th>Rest Period (min:sec)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td rowspan=\"4\">Quadriceps</td>\r\n                <td rowspan=\"4\">Squat\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"4\">Hamstrings</td>\r\n                <td rowspan=\"4\" class=\"white\">Seated Leg Curls\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td rowspan=\"12\">Calves</td>\r\n                <td rowspan=\"4\" class=\"white\">Standing Calf Raises\r\n                  <a class=\"add\" href=\"\">+</a>\r\n                  <a class=\"remove\" href=\"\">-</a>\r\n                </td>\r\n                <td>1</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td><input class=\"form-control\" type=\"text\" value=\"10\"></td>\r\n                <td class=\"d-flex\"><p style=\"padding-top: 8px;padding-right: 5px;padding-left: 4px;font-size: 15px;\">@</p><input class=\"form-control\" style=\"margin-top: 3px;padding-top: 8px;\" type=\"text\" value=\"1\"></td>\r\n                <td>70,7</td>\r\n                <td>707</td>\r\n                <td>\r\n                    <select class=\"form-control\" (change)=\"changeColor($event)\">\r\n                        <option *ngFor=\"let option of options\">{{option}}</option>\r\n                      </select>\r\n                </td>\r\n                <td><input type='text' mask=\"0-0-0\" class=\"form-control\" placeholder=\"--\"></td>\r\n                <td><input type='text' mask=\"0:00\" class=\"form-control\" placeholder=\":\"></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td>Quadriceps</td>\r\n                <td colspan=\"2\">Total Volume</td>\r\n                <td>40</td>\r\n                <td>Average Intensity</td>\r\n                <td>70,7</td>\r\n                <td>Tot. Volume Load</td>\r\n                <td>2828</td>\r\n                <td></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Hamstrings</td>\r\n                  <td colspan=\"2\">Total Volume</td>\r\n                  <td>40</td>\r\n                  <td>Average Intensity</td>\r\n                  <td>70,7</td>\r\n                  <td>Tot. Volume Load</td>\r\n                  <td>2828</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Calves</td>\r\n                    <td colspan=\"2\">Total Volume</td>\r\n                    <td>40</td>\r\n                    <td>Average Intensity</td>\r\n                    <td>70,7</td>\r\n                    <td>Tot. Volume Load</td>\r\n                    <td>2828</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n            </tfoot>\r\n          </table>\r\n        <!-- table 5:3 End -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tfooter\">\r\n      <div class=\"row no-gutters\">\r\n          <div class=\"footer-cell\">\r\n              <a class=\"add\" href=\"\"><span>+</span> Add Week</a>\r\n              <a class=\"remove\" href=\"\"><span>-</span> Delete Week</a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/training-program/training-program.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/training-program/training-program.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProgressionBuilderTrainingProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderTrainingProgramComponent", function() { return ProgressionBuilderTrainingProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressionBuilderTrainingProgramComponent = /** @class */ (function () {
    function ProgressionBuilderTrainingProgramComponent() {
        this.deltaX = 865;
        this.left = 0;
        this.bgColor = "";
        this.options = [
            'Straight Set',
            'Warm up set',
            'Test (AMRAP) set',
            'Pyramid set',
            'Super set',
            'Giant set',
            'Pre-exhaust set',
            'Drop set'
        ];
    }
    ProgressionBuilderTrainingProgramComponent.prototype.ngOnInit = function () {
    };
    ProgressionBuilderTrainingProgramComponent.prototype.changeColor = function (event) {
        (event.target.value == 'Test (AMRAP) set') ? event.target.classList.add('onlybg') : event.target.classList.remove('onlybg');
    };
    ProgressionBuilderTrainingProgramComponent.prototype.moveLeft = function () {
        if (this.left > -this.deltaX * 2) {
            this.left -= this.deltaX;
            this.move();
        }
    };
    ProgressionBuilderTrainingProgramComponent.prototype.moveRight = function () {
        if (this.left < 0) {
            this.left += this.deltaX;
            this.move();
        }
    };
    ProgressionBuilderTrainingProgramComponent.prototype.move = function () {
        this.wrapper.nativeElement.style = "left: " + this.left + "px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trainingProgramWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProgressionBuilderTrainingProgramComponent.prototype, "wrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderTrainingProgramComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderTrainingProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-training-program',
            template: __webpack_require__(/*! ./training-program.component.html */ "./src/app/plan/components/progression-builder/training-program/training-program.component.html")
        })
    ], ProgressionBuilderTrainingProgramComponent);
    return ProgressionBuilderTrainingProgramComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan.module.ts":
/*!*************************************!*\
  !*** ./src/app/plan/plan.module.ts ***!
  \*************************************/
/*! exports provided: PlanBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderModule", function() { return PlanBuilderModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main.component */ "./src/app/plan/components/main.component.ts");
/* harmony import */ var _components_calendar_builder_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar-builder/exercises/exercises.component */ "./src/app/plan/components/calendar-builder/exercises/exercises.component.ts");
/* harmony import */ var _components_calendar_builder_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calendar-builder/workouts/workouts.component */ "./src/app/plan/components/calendar-builder/workouts/workouts.component.ts");
/* harmony import */ var _components_calendar_builder_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calendar-builder/calendar/calendar.component */ "./src/app/plan/components/calendar-builder/calendar/calendar.component.ts");
/* harmony import */ var _components_calendar_builder_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calendar-builder/main.component */ "./src/app/plan/components/calendar-builder/main.component.ts");
/* harmony import */ var _components_progression_builder_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/progression-builder/main.component */ "./src/app/plan/components/progression-builder/main.component.ts");
/* harmony import */ var _components_progression_builder_progressive_overload_graph_progressive_overload_graph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/progression-builder/progressive-overload-graph/progressive-overload-graph.component */ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts");
/* harmony import */ var _components_progression_builder_training_program_training_program_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/progression-builder/training-program/training-program.component */ "./src/app/plan/components/progression-builder/training-program/training-program.component.ts");
/* harmony import */ var _components_progression_builder_program_design_program_design_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/progression-builder/program-design/program-design.component */ "./src/app/plan/components/progression-builder/program-design/program-design.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PlanBuilderModule = /** @class */ (function () {
    function PlanBuilderModule() {
    }
    PlanBuilderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_4__["PlanBuilderComponent"],
                _components_calendar_builder_main_component__WEBPACK_IMPORTED_MODULE_8__["CalendarBuilderComponent"],
                _components_calendar_builder_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_5__["PlanBuilderExercisesComponent"],
                _components_calendar_builder_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__["PlanBuilderWorkoutsComponent"],
                _components_calendar_builder_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["PlanBuilderCalendarComponent"],
                _components_progression_builder_main_component__WEBPACK_IMPORTED_MODULE_9__["ProgressionBuilderComponent"],
                _components_progression_builder_progressive_overload_graph_progressive_overload_graph_component__WEBPACK_IMPORTED_MODULE_10__["ProgressionBuilderProgressiveOverloadGraphComponent"],
                _components_progression_builder_training_program_training_program_component__WEBPACK_IMPORTED_MODULE_11__["ProgressionBuilderTrainingProgramComponent"],
                _components_progression_builder_program_design_program_design_component__WEBPACK_IMPORTED_MODULE_12__["ProgressionBuilderProgramDesignComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot()
            ],
            providers: [],
        })
    ], PlanBuilderModule);
    return PlanBuilderModule;
}());



/***/ }),

/***/ "./src/app/profile/components/main.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/components/main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<osg-profile-cover *ngIf=\"applicationUser\" [applicationUser]=\"applicationUser\"></osg-profile-cover>\r\n<osg-personal-trainer *ngIf=\"isPersonalTrainer()\" [applicationUser]=\"applicationUser\"></osg-personal-trainer>\r\n<osg-program-designer *ngIf=\"isProgramDesigner()\" [applicationUser]=\"applicationUser\"></osg-program-designer>\r\n<osg-strength-athlete *ngIf=\"isStrengthAthlete()\" [applicationUser]=\"applicationUser\"></osg-strength-athlete>"

/***/ }),

/***/ "./src/app/profile/components/main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/components/main.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var src_app_core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(applicationService) {
        this.applicationService = applicationService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.applicationUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "role", {
        get: function () {
            return this.applicationUser !== undefined ? this.applicationUser.role : '';
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.isPersonalTrainer = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].PersonalTrainer;
    };
    ProfileComponent.prototype.isProgramDesigner = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].ProgramDesigner;
    };
    ProfileComponent.prototype.isStrengthAthlete = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].StrengthAthlete;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/profile/components/main.component.html")
        }),
        __metadata("design:paramtypes", [src_app_core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-calendar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-calendar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-5\">\r\n            <h3>Booking</h3>\r\n        </div>\r\n        <div class=\"col-12 col-sm-5\">\r\n            <div class=\"control-slider\">\r\n                <p>AUGUST 2018</p>\r\n                <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-2\">\r\n            <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"conventions\">\r\n    <p class=\"available\"><span></span>Sessions available</p>\r\n    <p class=\"almost-full\"><span></span>Almost full</p>\r\n    <p class=\"complety-full\"><span></span>Complety full</p>\r\n</div>\r\n\r\n<div class=\"calendar\" (click)=\"showModal()\">\r\n    <div class=\"week-days\">\r\n        <div class=\"col\">Sunday</div>\r\n        <div class=\"col\">Monday</div>\r\n        <div class=\"col\">Tuesday</div>\r\n        <div class=\"col\">Wednesday</div>\r\n        <div class=\"col\">Thursday</div>\r\n        <div class=\"col\">Friday</div>\r\n        <div class=\"col\">Saturday</div>\r\n    </div>\r\n    <div class=\"wrapper-weeks\">\r\n        <div class=\"week\">\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">30</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">Jul 31</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">Aug 1</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">2</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">3</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">4</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">5</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"week\">\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">6</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">6</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">7</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">9</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">10</span></div>\r\n            </div>\r\n\r\n            <div class=\"day complety-full\">\r\n                <div>\r\n                    <span class=\"time\">11</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">12</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"week\">\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">13</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">14</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">15</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">16</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">17</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">18</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">19</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"week\">\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">20</span></div>\r\n            </div>\r\n\r\n            <div class=\"day complety-full\">\r\n                <div>\r\n                    <span class=\"time\">21</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">22</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">23</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">24</span></div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div>\r\n                    <span class=\"time\">25</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">26</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"week\">\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">27</span></div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div>\r\n                    <span class=\"time\">28</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">29</span></div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div>\r\n                    <span class=\"time\">30</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day almost-full\">\r\n                <div><span class=\"time\">Aug 31</span></div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div>\r\n                    <span class=\"time\">Sep 1</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"day available\">\r\n                <div><span class=\"time\">2</span></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-calendar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-calendar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalTrainerBookingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerBookingCalendarComponent", function() { return PersonalTrainerBookingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _booking_details_modal_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-details-modal/booking-details-modal.component */ "./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalTrainerBookingCalendarComponent = /** @class */ (function () {
    function PersonalTrainerBookingCalendarComponent(modalService) {
        this.modalService = modalService;
    }
    PersonalTrainerBookingCalendarComponent.prototype.ngOnInit = function () {
    };
    PersonalTrainerBookingCalendarComponent.prototype.showModal = function () {
        this.bsModalRef = this.modalService.show(_booking_details_modal_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalTrainerBookingDetailsModalComponent"], {
            class: 'modal-lg',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerBookingCalendarComponent.prototype, "applicationUser", void 0);
    PersonalTrainerBookingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-booking-calendar',
            template: __webpack_require__(/*! ./booking-calendar.component.html */ "./src/app/profile/components/personal-trainer/booking-calendar.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], PersonalTrainerBookingCalendarComponent);
    return PersonalTrainerBookingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header d-block\">\r\n    <h4 class=\"modal-title pull-left\">Available for Mon, 7th August 2018</h4>\r\n    <div class=\"clearfix\"></div>\r\n    <h5>Yout available hours: <span>30</span></h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"list-booking-time\">\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>10:00</p>\r\n                <p>11:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>12:00</p>\r\n                <p>13:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>14:00</p>\r\n                <p>15:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>16:00</p>\r\n                <p>17:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>18:00</p>\r\n                <p>19:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>18:00</p>\r\n                <p>19:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>18:00</p>\r\n                <p>19:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-booking-time\">\r\n            <div class=\"hour\">\r\n                <p>18:00</p>\r\n                <p>19:00</p>\r\n            </div>\r\n            <div class=\"wrapper-btn\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient text-uppercase py-2 px-3\">Book Now</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n</div> -->"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PersonalTrainerBookingDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerBookingDetailsModalComponent", function() { return PersonalTrainerBookingDetailsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PersonalTrainerBookingDetailsModalComponent = /** @class */ (function () {
    function PersonalTrainerBookingDetailsModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonalTrainerBookingDetailsModalComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PersonalTrainerBookingDetailsModalComponent.prototype.close = function () {
        this.onClose.emit(null);
        this.bsModalRef.hide();
    };
    PersonalTrainerBookingDetailsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-booking-details-modal',
            template: __webpack_require__(/*! ./booking-details-modal.component.html */ "./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], PersonalTrainerBookingDetailsModalComponent);
    return PersonalTrainerBookingDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/experience-bank.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/experience-bank.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-9\">\r\n    <div class=\"title\">\r\n      <div class=\"col-12 col-sm-5\">\r\n        <h3>EXPERIENCE BANK: <br>\r\n          MY CLIENTS RESULTS</h3>\r\n      </div>\r\n      <div class=\"col-12 col-sm-auto\">\r\n        <div class=\"filter-box\">\r\n          <p>GENDER:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">MEN</button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n              <a class=\"dropdown-item\" href=\"#\">Men</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Women</a>\r\n            </div>\r\n          </div>\r\n          <p>Category:</p>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn dropdown-toggle text-red\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">HYPERTROPHY</button>\r\n            <div class=\"dropdown-menu dropdown-menu-right text-right dropdown-black\" aria-labelledby=\"dropdownMenuButton\">\r\n              <a class=\"dropdown-item text-blue\" href=\"#\">Strength</a>\r\n              <a class=\"dropdown-item text-red\" href=\"#\">HYPERTROPHY</a>\r\n              <a class=\"dropdown-item text-orange\" href=\"#\">Muscular endurance</a>\r\n              <a class=\"dropdown-item text-green\" href=\"#\">Power</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>NOVICE</th>\r\n                    <th>INTERMEDIATE</th>\r\n                    <th>ADVANCED</th>\r\n                    <th>ELITE</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td>8,21</td>\r\n                    <td>8,01</td>\r\n                    <td>7,98</td>\r\n                    <td>7,10</td>\r\n                    <td>6,21</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td>9,11</td>\r\n                    <td>9,25</td>\r\n                    <td>8,12</td>\r\n                    <td>6,89</td>\r\n                    <td>5,43</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td>7,65</td>\r\n                    <td>7,66</td>\r\n                    <td>6,48</td>\r\n                    <td>5,21</td>\r\n                    <td>3,21</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td>6,54</td>\r\n                    <td>6,68</td>\r\n                    <td>7,21</td>\r\n                    <td>5,12</td>\r\n                    <td>4,47</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td>4,41</td>\r\n                    <td>5,54</td>\r\n                    <td>6,81</td>\r\n                    <td>3,41</td>\r\n                    <td>2,21</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td>6,87</td>\r\n                    <td>5,54</td>\r\n                    <td>4,83</td>\r\n                    <td>2,19</td>\r\n                    <td>1,12</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td>8,57</td>\r\n                    <td>7,23</td>\r\n                    <td>6,57</td>\r\n                    <td>4,12</td>\r\n                    <td>3,49</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td>7,21</td>\r\n                    <td>3,21</td>\r\n                    <td>3,43</td>\r\n                    <td>5,43</td>\r\n                    <td>6,64</td>\r\n                </tr>\r\n                <tr>\r\n                    <td><b>STRENGTH ATHLETES:</b></td>\r\n                    <td>12</td>\r\n                    <td>5</td>\r\n                    <td>9</td>\r\n                    <td>5</td>\r\n                    <td>4</td>\r\n                </tr>\r\n                <tr>\r\n                    <td><b>PROGRAMS:</b></td>\r\n                    <td><span>Ladder Strength<br> 5x5 <br> Giant Gains</span></td>\r\n                    <td><span>GVT <br> Starting Strength</span></td>\r\n                    <td><span>Myo Reps <br> Pyramid Strength <br> Westside Barbell</span></td>\r\n                    <td><span>5x5 <br>Pre-Exhaust <br>Height Strength</span></td>\r\n                    <td><span>Base Lifts <br>Powerbuilding <br> GVT </span></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <small>* The numbers in the table shows percentage increase (results) from all completed programs where the personal trainer has assisted the strength athlete. The number in each cell shows the median for a particular level and weight class. The median is the middle value when al the strength athletes percentage increase are listed in numerical order from the lowest to the highest results</small>\r\n  </div>\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-3\">\r\n    <h3 class=\"my-3\">REVIEWS: 50</h3>\r\n    <div class=\"review-box\">\r\n        <div class=\"review\">\r\n            <div class=\"rating\">\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n            </div>\r\n            <p class=\"name\">Alex James</p>\r\n            <p>Best coach I have worked with! </p>\r\n        </div>\r\n        <div class=\"review\">\r\n            <div class=\"rating\">\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n            </div>\r\n            <p class=\"name\">Clara Smith</p>\r\n            <p>Passion and dedication! Recommended!</p>\r\n        </div>\r\n        <button class=\"btn btn-black btn-block text-uppercase py-2\">\r\n            ALL REVIEWS</button>\r\n    </div>\r\n\r\n    <h3 class=\"mt-4 mb-2\">AVERAGE</h3>\r\n    <div class=\"average-box\">\r\n        <div class=\"average\">\r\n            <p>Customer Satisfaction</p>\r\n            <div class=\"rating good\">\r\n                <span class=\"fa-stack good\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack good\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack good\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack good\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <p>Good!</p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"average\">\r\n            <p>Coaching</p>\r\n            <div class=\"rating excellent\">\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack excellent\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <p>Excellent!</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"average\">\r\n            <p>Worth the money</p>\r\n            <div class=\"rating middle\">\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack middle\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <span class=\"fa-stack\">\r\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n                </span>\r\n                <p>Middle</p>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-black btn-block text-uppercase py-2\"> WRITE REVIEW</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/experience-bank.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/experience-bank.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalTrainerExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerExperienceBankComponent", function() { return PersonalTrainerExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerExperienceBankComponent = /** @class */ (function () {
    function PersonalTrainerExperienceBankComponent() {
    }
    PersonalTrainerExperienceBankComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerExperienceBankComponent.prototype, "applicationUser", void 0);
    PersonalTrainerExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-experience-bank',
            template: __webpack_require__(/*! ./experience-bank.component.html */ "./src/app/profile/components/personal-trainer/experience-bank.component.html")
        })
    ], PersonalTrainerExperienceBankComponent);
    return PersonalTrainerExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/offers.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/offers.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    <h3>my offers</h3>\r\n</div>\r\n<div class=\"offers-container\">\r\n    <div class=\"offer\">\r\n        <div class=\"content-offer\">\r\n            <header>\r\n                <figure>\r\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\r\n                </figure>\r\n            </header>\r\n            <div class=\"description\">\r\n                <h4>pt basic</h4>\r\n                <span>5 hours</span>\r\n            </div>\r\n            <div class=\"pricing\">\r\n                <span>kr 2 500, -</span>\r\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"offer\">\r\n        <div class=\"content-offer\">\r\n            <header>\r\n                <figure>\r\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\r\n                </figure>\r\n            </header>\r\n            <div class=\"description\">\r\n                <h4>pt Premium</h4>\r\n                <span>10 hours</span>\r\n            </div>\r\n            <div class=\"pricing\">\r\n                <span>kr 4 700, -</span>\r\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"offer\">\r\n        <div class=\"content-offer\">\r\n            <header>\r\n                <figure>\r\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\r\n                </figure>\r\n            </header>\r\n            <div class=\"description\">\r\n                <h4>pt pro</h4>\r\n                <span>15 hours</span>\r\n            </div>\r\n            <div class=\"pricing\">\r\n                <span>kr 6 750, -</span>\r\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"offer\">\r\n        <div class=\"content-offer\">\r\n            <header>\r\n                <figure>\r\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\r\n                </figure>\r\n            </header>\r\n            <div class=\"description\">\r\n                <h4>pt Business</h4>\r\n                <span>20 hours</span>\r\n            </div>\r\n            <div class=\"pricing\">\r\n                <span>kr 8 600, -</span>\r\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/offers.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/offers.component.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalTrainerOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerOffersComponent", function() { return PersonalTrainerOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerOffersComponent = /** @class */ (function () {
    function PersonalTrainerOffersComponent() {
    }
    PersonalTrainerOffersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerOffersComponent.prototype, "applicationUser", void 0);
    PersonalTrainerOffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/profile/components/personal-trainer/offers.component.html")
        })
    ], PersonalTrainerOffersComponent);
    return PersonalTrainerOffersComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/personal-trainer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/personal-trainer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <osg-profile-about-me profile=\"Personal Trainer\" [text]=\"about\" education=\"Norges idrettshøyskole\" specialities=\"Sport performance\" experience=\"10 Years\" country=\"Oslo, Norway\" location=\"Elixia Kalbakken\"></osg-profile-about-me>\r\n    <osg-news-feed [applicationUser]=\"applicationUser\"></osg-news-feed>\r\n</div>\r\n<div>\r\n    <osg-personal-trainer-offers></osg-personal-trainer-offers>\r\n    <osg-personal-trainer-experience-bank></osg-personal-trainer-experience-bank>\r\n    <osg-personal-trainer-booking-calendar></osg-personal-trainer-booking-calendar>\r\n    <osg-get-started [sections]=\"getStartedSections\"></osg-get-started>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/personal-trainer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/personal-trainer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalTrainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerComponent", function() { return PersonalTrainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerComponent = /** @class */ (function () {
    function PersonalTrainerComponent() {
        this.about = 'Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life, mentally and physically.';
        this.getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation"];
    }
    PersonalTrainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerComponent.prototype, "applicationUser", void 0);
    PersonalTrainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer',
            template: __webpack_require__(/*! ./personal-trainer.component.html */ "./src/app/profile/components/personal-trainer/personal-trainer.component.html")
        })
    ], PersonalTrainerComponent);
    return PersonalTrainerComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile/profile-about-me-component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-about-me-component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileAboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutMeComponent", function() { return ProfileAboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileAboutMeComponent = /** @class */ (function () {
    function ProfileAboutMeComponent() {
        this.text = '';
        this.interests = '';
        this.education = '';
        this.specialities = '';
        this.experience = '';
        this.country = '';
        this.location = '';
        this.profile = '';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "interests", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "education", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "specialities", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "experience", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "country", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "location", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileAboutMeComponent.prototype, "profile", void 0);
    ProfileAboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile-about-me',
            template: __webpack_require__(/*! ./profile-about-me.component.html */ "./src/app/profile/components/profile/profile-about-me.component.html")
        })
    ], ProfileAboutMeComponent);
    return ProfileAboutMeComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile/profile-about-me.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-about-me.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 align-items-center\">\r\n    <div class=\"col text-left\"><h3>about me</h3></div>\r\n    <div class=\"col text-right\"><a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a></div>\r\n</div>\r\n<div class=\"about-me-container\">\r\n    <p>{{text}}</p>\r\n    <div class=\"summary\">\r\n        <div *ngIf=\"interests\" class=\"entry\"><span> <img src=\"/assets/images/icons/icon-star.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Interests:</span><span>{{interests}}</span></div>\r\n\r\n        <div *ngIf=\"education\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-education.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Education:</span><span>{{education}}</span></div>\r\n\r\n        <div *ngIf=\"specialities\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-star.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Specialities:</span><span>{{specialities}}</span></div>\r\n        \r\n        <div *ngIf=\"experience\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-calendar.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Experience:</span><span>{{experience}}</span></div>\r\n\r\n        <div *ngIf=\"country\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-world.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Country:</span><span>{{country}}</span></div>\r\n\r\n        <div *ngIf=\"location\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-pin-map.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Location:</span><span>{{location}}</span></div>\r\n\r\n        <div *ngIf=\"profile\" class=\"entry\"><span><img src=\"/assets/images/icons/icon-profile.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Profile:</span><span>{{profile}}</span></div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-lg-5 mt-3 mt-lg-0\">\r\n        <button class=\"btn btn-black btn-block py-2\">SEND MESSAGE</button>\r\n    </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/profile/profile-cover.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-cover.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\r\n    <div class=\"row h-100 align-items-center justify-content-center\">\r\n        <div class=\"col-12 col-sm-12 col-md-7 col-lg-4\">\r\n            <div class=\"information\">\r\n                <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\r\n                <figure>\r\n                    <img src=\"/assets/images/icons/icon-profile-big.png\" class=\"img-fluid d-block m-auto\" />\r\n                </figure>\r\n                <h2>{{fullName}}</h2>\r\n                <a href=\"\" class=\"add-friend\"><img src=\"/assets/images/icons/icon-add-friend.png\" class=\"d-inline-block img-fluid mr-2\" alt=\"\">ADD FRIEND</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/profile/profile-cover.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-cover.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCoverComponent", function() { return ProfileCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCoverComponent = /** @class */ (function () {
    function ProfileCoverComponent() {
    }
    ProfileCoverComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProfileCoverComponent.prototype, "fullName", {
        get: function () {
            return this.applicationUser !== undefined ? this.applicationUser.name : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileCoverComponent.prototype, "applicationUser", void 0);
    ProfileCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile-cover',
            template: __webpack_require__(/*! ./profile-cover.component.html */ "./src/app/profile/components/profile/profile-cover.component.html")
        })
    ], ProfileCoverComponent);
    return ProfileCoverComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-bank.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-bank.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>EXPERIENCE BANK: <span>GVT</span></h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p>The numbers in the table shows the median percentage increase values (results) from all the strength athletes that\r\n  have completed the program. The median is the middle value when all the individual strength athlete’s percentage\r\n  increase values are listed in numerical order from the lowest to the highest.</p>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: BENCH PRESS (MEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: BENCH PRESS (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: SQUAT (MEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: SQUAT (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: DEADLIFT (MEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 col-lg-6\">\r\n    <div class=\"table-responsive\">\r\n      <h4>TEST EXERCISE: DEADLIFT (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>BODY WEIGHT</th>\r\n            <th>UNTRAINED</th>\r\n            <th>NOVICE</th>\r\n            <th>INTERMEDIATE</th>\r\n            <th>ADVANCED</th>\r\n            <th>ELITE</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>50-59</td>\r\n            <td>8,21</td>\r\n            <td>8,01</td>\r\n            <td>7,98</td>\r\n            <td>7,10</td>\r\n            <td>6,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>60-69</td>\r\n            <td>9,11</td>\r\n            <td>9,25</td>\r\n            <td>8,12</td>\r\n            <td>6,89</td>\r\n            <td>5,43</td>\r\n          </tr>\r\n          <tr>\r\n            <td>70-79</td>\r\n            <td>7,65</td>\r\n            <td>7,66</td>\r\n            <td>6,48</td>\r\n            <td>5,21</td>\r\n            <td>3,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>80-89</td>\r\n            <td>6,54</td>\r\n            <td>6,68</td>\r\n            <td>7,21</td>\r\n            <td>5,12</td>\r\n            <td>4,47</td>\r\n          </tr>\r\n          <tr>\r\n            <td>90-99</td>\r\n            <td>4,41</td>\r\n            <td>5,54</td>\r\n            <td>6,81</td>\r\n            <td>3,41</td>\r\n            <td>2,21</td>\r\n          </tr>\r\n          <tr>\r\n            <td>100-109</td>\r\n            <td>6,87</td>\r\n            <td>5,54</td>\r\n            <td>4,83</td>\r\n            <td>2,19</td>\r\n            <td>1,12</td>\r\n          </tr>\r\n          <tr>\r\n            <td>110-119</td>\r\n            <td>8,57</td>\r\n            <td>7,23</td>\r\n            <td>6,57</td>\r\n            <td>4,12</td>\r\n            <td>3,49</td>\r\n          </tr>\r\n          <tr>\r\n            <td>120+</td>\r\n            <td>6,54</td>\r\n            <td>0,99</td>\r\n            <td>2,19</td>\r\n            <td>2,48</td>\r\n            <td>3,59</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-bank.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-bank.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProgramDesignerExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerExperienceBankComponent", function() { return ProgramDesignerExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerExperienceBankComponent = /** @class */ (function () {
    function ProgramDesignerExperienceBankComponent() {
    }
    ProgramDesignerExperienceBankComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerExperienceBankComponent.prototype, "applicationUser", void 0);
    ProgramDesignerExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-experience-bank',
            template: __webpack_require__(/*! ./experience-bank.component.html */ "./src/app/profile/components/program-designer/experience-bank.component.html")
        })
    ], ProgramDesignerExperienceBankComponent);
    return ProgramDesignerExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-reviews.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-reviews.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col-12 col-lg-6\">\r\n      <h3>Reviews: <span>GVT</span></h3>\r\n    </div>\r\n    <div class=\"col-12 col-lg-6 text-right mt-3 mt-lg-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6\">\r\n          <button class=\"btn btn-black btn-block text-uppercase py-2\">\r\n            <span class=\"fa-stack\">\r\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n              <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n            </span> ALL REVIEWS\r\n          </button>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6\"><button class=\"btn btn-black btn-block text-uppercase py-2\"> <img src=\"/assets/images/icons/icon-pencil.svg\"\r\n              class=\"d-inline-block img-fluid\" alt=\"\"> WRITE REVIEW</button></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"review-box\">\r\n    <div class=\"review\">\r\n      <figure>\r\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\r\n      </figure>\r\n      <p class=\"name\">Alex James</p>\r\n      <p>Best coach I have worked with! </p>\r\n      <div class=\"rating\">\r\n        <p>5.0</p>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"review-box\">\r\n    <div class=\"review\">\r\n      <figure>\r\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\r\n      </figure>\r\n      <p class=\"name\">Alex James</p>\r\n      <p>Best coach I have worked with! </p>\r\n      <div class=\"rating\">\r\n        <p>5.0</p>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"review-box\">\r\n    <div class=\"review\">\r\n      <figure>\r\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\r\n      </figure>\r\n      <p class=\"name\">Alex James</p>\r\n      <p>Best coach I have worked with! </p>\r\n      <div class=\"rating\">\r\n        <p>5.0</p>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"review-box\">\r\n    <div class=\"review\">\r\n      <figure>\r\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\r\n      </figure>\r\n      <p class=\"name\">Alex James</p>\r\n      <p>Best coach I have worked with! </p>\r\n      <div class=\"rating\">\r\n        <p>5.0</p>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack middle\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"review-box\">\r\n    <div class=\"review\">\r\n      <figure>\r\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\r\n      </figure>\r\n      <p class=\"name\">Alex James</p>\r\n      <p>Best coach I have worked with! </p>\r\n      <div class=\"rating\">\r\n        <p>5.0</p>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n        <span class=\"fa-stack excellent\">\r\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-reviews.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-reviews.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgramDesignerExperienceReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerExperienceReviewsComponent", function() { return ProgramDesignerExperienceReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerExperienceReviewsComponent = /** @class */ (function () {
    function ProgramDesignerExperienceReviewsComponent() {
    }
    ProgramDesignerExperienceReviewsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerExperienceReviewsComponent.prototype, "applicationUser", void 0);
    ProgramDesignerExperienceReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-experience-reviews',
            template: __webpack_require__(/*! ./experience-reviews.component.html */ "./src/app/profile/components/program-designer/experience-reviews.component.html")
        })
    ], ProgramDesignerExperienceReviewsComponent);
    return ProgramDesignerExperienceReviewsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-design.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-design.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col-12 col-lg-auto col-xl-6 mb-2 mb-xl-0\">\r\n      <h3>PROGRAM DESIGN: <span>GVT</span></h3>\r\n    </div>\r\n    <div class=\"col-12 col-lg col-xl-6 text-lg-right\">\r\n      <div class=\"sort-box\">\r\n        <p>LEVEL:</p>\r\n        <div class=\"dropdown\">\r\n          <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">NOVICE</button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\r\n            <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\r\n            <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\r\n            <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\r\n            <a class=\"dropdown-item\" href=\"#\">ELITE</a>\r\n          </div>\r\n        </div>\r\n        <p>Category:</p>\r\n        <div class=\"dropdown\">\r\n          <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">POWER</button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" href=\"#\">STRENGTH</a>\r\n            <a class=\"dropdown-item\" href=\"#\">HYPERTROPHY</a>\r\n            <a class=\"dropdown-item\" href=\"#\">MUSCULAR ENDURANCE</a>\r\n            <a class=\"dropdown-item\" href=\"#\">POWER</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-program-design pd-pb-table\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n              <th rowspan=\"2\">Muscle Group</th>\r\n              <th rowspan=\"2\">Test Exercise</th>\r\n              <th rowspan=\"2\">Type of exercise Level 1</th>\r\n              <th rowspan=\"2\">Exercises Level 2</th>\r\n              <th colspan=\"2\" class=\"blue\">Volume</th>\r\n              <th colspan=\"2\" class=\"red\">Intensity</th>\r\n              <th rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</th>\r\n              <th rowspan=\"2\">Progression model</th>\r\n              <th rowspan=\"2\">Rest periods (min-max)</th>\r\n              <th rowspan=\"2\">Tempo (all)</th>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"blue\">Reps (min-max)</th>\r\n              <th class=\"blue\">Volume pr week (setxreps)</th>\r\n              <th class=\"red\">% of 1RM (min-max)</th>\r\n              <th class=\"red\">Reps to failure (min-max)</th>\r\n            </tr>\r\n            <!--  -->\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td rowspan=\"2\">Chest</td>\r\n            <td rowspan=\"2\">Bench Press</td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Back</td>\r\n            <td rowspan=\"2\">Deadlift</td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Quads</td>\r\n            <td rowspan=\"2\">Squat</td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Shoulders</td>\r\n            <td rowspan=\"2\"></td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Hamstrings</td>\r\n            <td rowspan=\"2\"></td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Calves</td>\r\n            <td rowspan=\"2\"></td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Triceps</td>\r\n            <td rowspan=\"2\"></td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n          <!--  -->\r\n          <tr>\r\n            <td rowspan=\"2\">Biceps</td>\r\n            <td rowspan=\"2\"></td>\r\n            <td>Multi joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n            <td rowspan=\"2\" class=\"green\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n            <td rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Single joint exercises</td>\r\n            <td></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"blue\"></td>\r\n            <td class=\"red\"></td>\r\n            <td class=\"red\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n<!-- \r\n<div class=\"table-top-program\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-127\">\r\n            <thead>\r\n                <tr>\r\n                    <th colspan=\"3\"></th>\r\n                    <th colspan=\"10\">PROGRAM DESIGN</th>\r\n                    <th colspan=\"2\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td rowspan=\"2\">Muscle Group</td>\r\n                    <td rowspan=\"2\">Best Training Program</td>\r\n                    <td rowspan=\"2\">Level (pretest)</td>\r\n                    <td rowspan=\"2\">Type of exercise</td>\r\n                    <td rowspan=\"2\">Exercises</td>\r\n                    <td colspan=\"2\" class=\"blue\">Volume</td>\r\n                    <td colspan=\"2\" class=\"orange\">Intensity</td>\r\n                    <td rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</td>\r\n                    <td rowspan=\"2\">Progression model</td>\r\n                    <td rowspan=\"2\">Rest periods</td>\r\n                    <td rowspan=\"2\">Tempo</td>\r\n                    <td rowspan=\"2\">Test exercise</td>\r\n                    <td rowspan=\"2\" class=\"orange\">Percentage Increase</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"blue\">Sets</td>\r\n                    <td class=\"blue\">Reps</td>\r\n                    <td class=\"orange\">% of 1RM</td>\r\n                    <td class=\"orange\">Reps to failure</td>\r\n                </tr>\r\n                <tr>\r\n                    <td rowspan=\"2\">Chest</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                \r\n                <tr>\r\n                    <td rowspan=\"2\">Back</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n              \r\n                <tr>\r\n                    <td rowspan=\"2\">Quads</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n               \r\n                <tr>\r\n                    <td rowspan=\"2\">Shoulders</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n              \r\n                <tr>\r\n                    <td rowspan=\"2\">Hamstrings</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n               \r\n                <tr>\r\n                    <td rowspan=\"2\">Calves</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n               \r\n                <tr>\r\n                    <td rowspan=\"2\">Triceps</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n               \r\n                <tr>\r\n                    <td rowspan=\"2\">Biceps</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-design.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-design.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgramDesignerProgramDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerProgramDesignComponent", function() { return ProgramDesignerProgramDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerProgramDesignComponent = /** @class */ (function () {
    function ProgramDesignerProgramDesignComponent() {
    }
    ProgramDesignerProgramDesignComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerProgramDesignComponent.prototype, "applicationUser", void 0);
    ProgramDesignerProgramDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-program-design',
            template: __webpack_require__(/*! ./program-design.component.html */ "./src/app/profile/components/program-designer/program-design.component.html")
        })
    ], ProgramDesignerProgramDesignComponent);
    return ProgramDesignerProgramDesignComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-designer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-designer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <osg-profile-about-me profile=\"Program Designer\" [text]=\"about\" education=\"Norges idrettshøyskole\" specialities=\"Sport performance\" experience=\"10 Years\" country=\"Oslo, Norway\" ></osg-profile-about-me>\r\n    <osg-news-feed [applicationUser]=\"applicationUser\"></osg-news-feed>\r\n</div>\r\n<div>\r\n    <osg-program-designer-published-programs></osg-program-designer-published-programs>\r\n    <osg-program-designer-program-filter></osg-program-designer-program-filter>\r\n    <osg-program-designer-experience-bank></osg-program-designer-experience-bank>\r\n    <osg-program-designer-experience-reviews></osg-program-designer-experience-reviews>\r\n    <osg-program-designer-program-design></osg-program-designer-program-design>\r\n    <osg-program-designer-training-calendar></osg-program-designer-training-calendar>\r\n    <osg-get-started view=\"secondary\" [sections]=\"getStartedSections\"></osg-get-started>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-designer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-designer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgramDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerComponent", function() { return ProgramDesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerComponent = /** @class */ (function () {
    function ProgramDesignerComponent() {
        this.about = 'Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life, mentally and physically.';
        this.getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation", "experience bank guide"];
    }
    ProgramDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerComponent.prototype, "applicationUser", void 0);
    ProgramDesignerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer',
            template: __webpack_require__(/*! ./program-designer.component.html */ "./src/app/profile/components/program-designer/program-designer.component.html")
        })
    ], ProgramDesignerComponent);
    return ProgramDesignerComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-filter.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-filter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h3>PROGRAM</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"filter-box\">\r\n    <h4>Select Program</h4>\r\n    <div class=\"dropdown white-dropdown with-label\">\r\n        <label for=\"\">Program</label>\r\n        <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">German Volume Training (GVT)\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" href=\"#\">5x5</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Starting Strength</a>\r\n            <a class=\"dropdown-item\" href=\"#\">X-Shape</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Athletic</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-12 col-xl-6\">\r\n            <h4>Men</h4>\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Body Weight (kg)</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0 - 50</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-50</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">61-70</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">71-80</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">81-90</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">91-100</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">101-110</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">111-120</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">121-160</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Strength level </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                <a class=\"dropdown-item\" href=\"#\">Untrained</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Novice</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Intermediate</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Advanced</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Elite</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Waist to hip ratio (cm)</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">1,11-1,20</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Height (cm)</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">161 - 170</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-150 </a>\r\n                                <a class=\"dropdown-item\" href=\"#\">151-160</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">161-170</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">171-180</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">181-190</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">191-200</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">201-210</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">211-220</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Age (yrs)</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"5\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-20</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">21-30</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">31-40</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">61-80</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Muscle Fiber Type</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Slow Twitch</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\r\n                                <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-xl-6\">\r\n            <h4>Women</h4>\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Body Weight (kg)</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton7\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0 - 40\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton7\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-40</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">61-70</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">71-80</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">81-90</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">91-100</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">101-110</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">111-130</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Strength level</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                <a class=\"dropdown-item\" href=\"#\">Untrained</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Novice</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Intermediate</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Advanced</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Elite </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Waist to Hip Ratio (cm)\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0,61-0,70</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Height (cm)</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">161 - 170</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-140 </a>\r\n                                <a class=\"dropdown-item\" href=\"#\">141-150</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">151-160</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">161-170</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">171-180</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">181-190</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">191-200</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">201-210</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown\">\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Age (yrs)</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"5\">\r\n                                <a class=\"dropdown-item\" href=\"#\">0-20</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">21-30</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">31-40</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">61-80</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                    <div class=\"checbox-dropdown\">\r\n                        <div class=\"checkbox custom-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"dropdown white-dropdown with-label\">\r\n                            <label for=\"\">Muscle Fiber Type</label>\r\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Slow Twitch</button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\r\n                                <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\r\n                                <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"actions\">\r\n        <div class=\"col-12 col-lg-8\">\r\n            <div class=\"gender\">\r\n                <h4>Men: </h4>\r\n                <p>0-50 kg <span>x</span></p>\r\n                <p>161-170 cm <span>x</span></p>\r\n                <p>Slow Twitch <span>x</span></p>\r\n            </div>\r\n            <div class=\"gender\">\r\n                <h4>Women: </h4>\r\n                <p>0-50 kg <span>x</span></p>\r\n                <p>0-20 years <span>x</span></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-lg-4 mt-2 mt-lg-0 text-center text-lg-right\">\r\n            <a href=\"\" class=\"btn-yellow-gradient px-4 py-2\">SHOW RESULTS</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-filter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-filter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgramDesignerProgramFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerProgramFilterComponent", function() { return ProgramDesignerProgramFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerProgramFilterComponent = /** @class */ (function () {
    function ProgramDesignerProgramFilterComponent() {
    }
    ProgramDesignerProgramFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerProgramFilterComponent.prototype, "applicationUser", void 0);
    ProgramDesignerProgramFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-program-filter',
            template: __webpack_require__(/*! ./program-filter.component.html */ "./src/app/profile/components/program-designer/program-filter.component.html")
        })
    ], ProgramDesignerProgramFilterComponent);
    return ProgramDesignerProgramFilterComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/published-programs.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/published-programs.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col-12 col-sm-8\">\r\n      <h3>PUBLISHED PROGRAMS</h3>\r\n    </div>\r\n    <div class=\"col-12 col-sm-4 text-right\">\r\n        <div class=\"control-slider\">\r\n            <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\r\n            <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n        <a href=\"\" class=\"btn btn-green-gradient py-2\">NEW PROGRAM</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\">\r\n    <table class=\"table fashow-improper\">\r\n        <thead>\r\n            <tr>\r\n                <th width=\"16.67%\">PROGRAM:</th>\r\n                <th>GVT</th>\r\n                <th>5x5</th>\r\n                <th>Starting Strenght</th>\r\n                <th>X-shape</th>\r\n                <th>Athletic</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"16.67%\">PUBLISHED DATE:</td>\r\n                <td>01.07.18</td>\r\n                <td>02.05.17</td>\r\n                <td>15.02.17</td>\r\n                <td>12.12.17</td>\r\n                <td>10.10.17</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"16.67%\">NO. OF COMPLETIONS:</td>\r\n                <td>352</td>\r\n                <td>386</td>\r\n                <td>486</td>\r\n                <td>689</td>\r\n                <td>796</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"16.67%\">Length (Weeks):</td>\r\n                <td>12</td>\r\n                <td>9</td>\r\n                <td>16</td>\r\n                <td>22</td>\r\n                <td>12</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"16.67%\">CATEGORY: </td>\r\n                <td>Hypertrophy</td>\r\n                <td>Strength</td>\r\n                <td>Strength</td>\r\n                <td>Hypertrophy</td>\r\n                <td>Hypertrophy</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"16.67%\">TRAINING SPLIT:</td>\r\n                <td>3</td>\r\n                <td>2</td>\r\n                <td>4</td>\r\n                <td>5</td>\r\n                <td>3</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/published-programs.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/published-programs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgramDesignerPublishedProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerPublishedProgramsComponent", function() { return ProgramDesignerPublishedProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerPublishedProgramsComponent = /** @class */ (function () {
    function ProgramDesignerPublishedProgramsComponent() {
    }
    ProgramDesignerPublishedProgramsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerPublishedProgramsComponent.prototype, "applicationUser", void 0);
    ProgramDesignerPublishedProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-published-programs',
            template: __webpack_require__(/*! ./published-programs.component.html */ "./src/app/profile/components/program-designer/published-programs.component.html")
        })
    ], ProgramDesignerPublishedProgramsComponent);
    return ProgramDesignerPublishedProgramsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/training-calendar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-calendar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"col-12 col-lg col-xl-5 mb-4 mb-xl-0\">\r\n    <h3>THE TRAINING PROGRAM: <span>GVT</span></h3>\r\n  </div>\r\n  <div class=\"col-12 col-sm-auto col-lg-auto\">\r\n    <div class=\"control-slider\">\r\n      <p>AUGUST 2018</p>\r\n      <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 col-sm-auto col-lg-12 col-xl-auto\">\r\n    <a href=\"\" class=\"btn btn-green-gradient py-2\">ADD TO YOUR CALENDAR</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"conventions\">\r\n  <p class=\"test-days\"><span></span>Test days</p>\r\n  <p class=\"training-days\"><span></span>Training days</p>\r\n</div>\r\n\r\n<div class=\"calendar\">\r\n  <div class=\"week-days\">\r\n    <div class=\"col\">Sunday</div>\r\n    <div class=\"col\">Monday</div>\r\n    <div class=\"col\">Tuesday</div>\r\n    <div class=\"col\">Wednesday</div>\r\n    <div class=\"col\">Thursday</div>\r\n    <div class=\"col\">Friday</div>\r\n    <div class=\"col\">Saturday</div>\r\n  </div>\r\n  <div class=\"wrapper-weeks\" (click)=\"showModal()\">\r\n    <div class=\"week\">\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">30</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days test-days\">\r\n        <div>\r\n          <span class=\"time\">Jul 31</span>\r\n          <b>GVT</b>\r\n          <p>Quads, hamstrings,and calves</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">Aug 1</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days test-days\">\r\n        <div>\r\n          <span class=\"time\">2</span>\r\n          <b>GVT</b>\r\n          <p>Chest, shoulders, and triceps </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">3</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days test-days\">\r\n        <div>\r\n          <span class=\"time\">4</span>\r\n          <b>GVT</b>\r\n          <p>Back, biceps, and abs</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">5</span></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"week\">\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">6</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">7</span>\r\n          <b>GVT</b>\r\n          <p>Quads, hamstrings,and calves</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">8</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">9</span>\r\n          <b>GVT</b>\r\n          <p>Chest, shoulders, and triceps </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">10</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">11</span>\r\n          <b>GVT</b>\r\n          <p>Back, biceps, and abs</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">12</span></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"week\">\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">13</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">14</span>\r\n          <b>GVT</b>\r\n          <p>Quads, hamstrings,and calves</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">15</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">16</span>\r\n          <b>GVT</b>\r\n          <p>Chest, shoulders, and triceps </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">17</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">18</span>\r\n          <b>GVT</b>\r\n          <p>Back, biceps, and abs</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">19</span></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"week\">\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">20</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">21</span>\r\n          <b>GVT</b>\r\n          <p>Quads, hamstrings,and calves</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">22</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">23</span>\r\n          <b>GVT</b>\r\n          <p>Chest, shoulders, and triceps </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">24</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">25</span>\r\n          <b>GVT</b>\r\n          <p>Back, biceps, and abs</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">26</span></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"week\">\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">27</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">28</span>\r\n          <b>GVT</b>\r\n          <p>Quads, hamstrings,and calves</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">29</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">30</span>\r\n          <b>GVT</b>\r\n          <p>Chest, shoulders, and triceps </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">Aug 31</span></div>\r\n      </div>\r\n\r\n      <div class=\"day training-days\">\r\n        <div>\r\n          <span class=\"time\">Sep 1</span>\r\n          <b>GVT</b>\r\n          <p>Back, biceps, and abs</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"day\">\r\n        <div><span class=\"time\">2</span></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/training-calendar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-calendar.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProgramDesignerTrainingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerTrainingCalendarComponent", function() { return ProgramDesignerTrainingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _training_day_modal_training_day_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-day-modal/training-day-modal.component */ "./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramDesignerTrainingCalendarComponent = /** @class */ (function () {
    function ProgramDesignerTrainingCalendarComponent(modalService) {
        this.modalService = modalService;
    }
    ProgramDesignerTrainingCalendarComponent.prototype.ngOnInit = function () {
    };
    ProgramDesignerTrainingCalendarComponent.prototype.showModal = function () {
        this.bsModalRef = this.modalService.show(_training_day_modal_training_day_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProgramDesignerTrainingDayModalComponent"], {
            class: 'modal-lg',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerTrainingCalendarComponent.prototype, "applicationUser", void 0);
    ProgramDesignerTrainingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-training-calendar',
            template: __webpack_require__(/*! ./training-calendar.component.html */ "./src/app/profile/components/program-designer/training-calendar.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ProgramDesignerTrainingCalendarComponent);
    return ProgramDesignerTrainingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Training Program for Mon, 7th August 2018</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th rowspan=\"2\">Exercises</th>\r\n                <th colspan=\"2\">Volume</th>\r\n                <th colspan=\"2\">Intensity</th>\r\n                <th colspan=\"3\"></th>\r\n            </tr>\r\n            <tr>\r\n                <th>Set</th>\r\n                <th>Reps</th>\r\n                <th>Reps to failure</th>\r\n                <th>% of 1 rm</th>\r\n                <th>Method</th>\r\n                <th>Rest period <br> (min)</th>\r\n                <th>Tempo</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>squats</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Lunges</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>3</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Leg Press</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>3</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Leg Press</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>3</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Lunges</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>3</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Lunges</td>\r\n                <td>1</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>2</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td>3</td>\r\n                <td>12</td>\r\n                <td>@ 1</td>\r\n                <td>60</td>\r\n                <td>Straight set</td>\r\n                <td>2</td>\r\n                <td>3-0-2</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n</div>\r\n<!-- <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n</div> -->"

/***/ }),

/***/ "./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProgramDesignerTrainingDayModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerTrainingDayModalComponent", function() { return ProgramDesignerTrainingDayModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ProgramDesignerTrainingDayModalComponent = /** @class */ (function () {
    function ProgramDesignerTrainingDayModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProgramDesignerTrainingDayModalComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ProgramDesignerTrainingDayModalComponent.prototype.close = function () {
        this.onClose.emit(null);
        this.bsModalRef.hide();
    };
    ProgramDesignerTrainingDayModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-training-day-modal',
            template: __webpack_require__(/*! ./training-day-modal.component.html */ "./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], ProgramDesignerTrainingDayModalComponent);
    return ProgramDesignerTrainingDayModalComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-comparison.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-comparison.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-title text-center\">\r\n    <h4>{{title}}</h4>\r\n    <p>You responded better than:</p>\r\n</div>\r\n<div class=\"row no-gutters text-center\">\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"green no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> at your <br><b>strength level</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"orange no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> with your <br><b>height</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> with your <br><b>age</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> with your <br><b>body weight</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> with your <br><b>waist-hip ratio</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"graph\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n            <p>of male lifters<br> at your <br><b>muscle fiber type</b></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"detail-footer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-4\">\r\n            <div class=\"gauge-container\">\r\n                <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-8\">\r\n            <p>of your mirror athletes (all variables combined)</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-comparison.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-comparison.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StrengthAthletePerformanceComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthletePerformanceComparisonComponent", function() { return StrengthAthletePerformanceComparisonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthAthletePerformanceComparisonComponent = /** @class */ (function () {
    function StrengthAthletePerformanceComparisonComponent() {
        this.title = '';
    }
    StrengthAthletePerformanceComparisonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthletePerformanceComparisonComponent.prototype, "title", void 0);
    StrengthAthletePerformanceComparisonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-performance-comparison',
            template: __webpack_require__(/*! ./performance-comparison.component.html */ "./src/app/profile/components/strength-athlete/performance-comparison.component.html")
        })
    ], StrengthAthletePerformanceComparisonComponent);
    return StrengthAthletePerformanceComparisonComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col-12 col-sm\">\r\n      <h3>PERFORMANCE TABLE (YOUR RESULTS)</h3>\r\n    </div>\r\n    <div class=\"col-12 col-sm-auto text-right\">\r\n      <div class=\"sort-box\">\r\n        <p>PROGRAM:</p>\r\n        <div class=\"dropdown\">\r\n            <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">GVT</button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a class=\"dropdown-item\" href=\"#\">BASE LIFTS</a>\r\n                <a class=\"dropdown-item\" href=\"#\">STARTING STRENGTH</a>\r\n                <a class=\"dropdown-item\" href=\"#\">LADDER STRENGTH</a>\r\n                <a class=\"dropdown-item\" href=\"#\">POWER BUILDING</a>\r\n                <a class=\"dropdown-item\" href=\"#\">GVT</a>\r\n                <a class=\"dropdown-item\" href=\"#\">5x5</a>\r\n            </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"perfomance-table\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table main-table\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>\r\n                        <table class=\"first-table ptc-table\" height=\"185\">\r\n                            <tr>\r\n                                <td>Program:</td>\r\n                                <td>GVT</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Category:</td>\r\n                                <td>Hypertrophy</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Period:</td>\r\n                                <td>01.06.18 - 31.07.18</td>\r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                    <td>\r\n                        <table class=\"second-table ptc-table\" height=\"185\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>TEST EXERCISE:</th>\r\n                                    <th>PRE TEST (1RM):</th>\r\n                                    <th>POSTEST (1RM):</th>\r\n                                    <th>RESULTS (% INCREASE):</th>\r\n                                    <th>PRETEST (LEVEL):</th>\r\n                                    <th>POSTTEST (LEVEL):</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Bench Press</td>\r\n                                    <td>100</td>\r\n                                    <td>108</td>\r\n                                    <td>8,00%</td>\r\n                                    <td>Intermediate</td>\r\n                                    <td>Intermediate</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Squat</td>\r\n                                    <td>140</td>\r\n                                    <td>145</td>\r\n                                    <td>3,57%</td>\r\n                                    <td>intermediate</td>\r\n                                    <td>intermediate</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Dead lift</td>\r\n                                    <td>150</td>\r\n                                    <td>157</td>\r\n                                    <td>4,67%</td>\r\n                                    <td>intermediate</td>\r\n                                    <td>intermediate</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <table width=\"100%\">\r\n                            <tr>\r\n                                <td class=\"title-variables tv-h\">BACKGROUND VARIABLES:</td>\r\n                            </tr>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <table class=\"third-table ptc-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>BODY WEIGHT:</th>\r\n                                    <th>WAIST-HIP RATIO:</th>\r\n                                    <th>CALORIE INTAKE:</th>\r\n                                    <th>STRESS LEVEL:</th>\r\n                                    <th>SLEEP LEVEL:</th>\r\n                                    <th>MUSCLE FIBER TYPE:</th>\r\n                                    <th>HEIGHT:</th>\r\n                                    <th>AGE:</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>PRETEST:</td>\r\n                                    <td>105</td>\r\n                                    <td>0,97</td>\r\n                                    <td>Deficit</td>\r\n                                    <td>Ok</td>\r\n                                    <td>Good</td>\r\n                                    <td>Slow twich</td>\r\n                                    <td>190</td>\r\n                                    <td>38</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>POSTtTEST:</td>\r\n                                    <td>105</td>\r\n                                    <td>0,97</td>\r\n                                    <td>Deficit</td>\r\n                                    <td>Ok</td>\r\n                                    <td>Good</td>\r\n                                    <td>Slow twich</td>\r\n                                    <td>190</td>\r\n                                    <td>38</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-12 col-sm-9\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let comparison of comparisons\">\r\n                <osg-strength-athlete-performance-comparison [title]=\"comparison\"></osg-strength-athlete-performance-comparison>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12 col-sm-3\">\r\n        <div class=\"recomendations\">\r\n            <div class=\"title-recomendations\">\r\n                <h4>Recomendations</h4>\r\n                <p>Take necessary action(s).</p>\r\n            </div>\r\n            <ul>\r\n                <li>Eat slightly more</li>\r\n                <li>Try different training design</li>\r\n                <li>Try different training design</li>\r\n                <li>Get more sleep</li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"exercise-notes mt-4\">\r\n            <div class=\"title-exercise\">\r\n                <h4>EXERCISE NOTES</h4>\r\n                <p>View your notes</p>\r\n                <ul>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 1</p><a href=\"\">View</a></li>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 2</p><a href=\"\">View</a></li>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 3</p><a href=\"\">View</a></li>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 4</p><a href=\"\">View</a></li>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 5</p><a href=\"\">View</a></li>\r\n                    <li><time>11.06.17</time>\r\n                    <p>Exercise notes 6</p><a href=\"\">View</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: StrengthAthletePerformanceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthletePerformanceTableComponent", function() { return StrengthAthletePerformanceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthletePerformanceTableComponent = /** @class */ (function () {
    function StrengthAthletePerformanceTableComponent() {
        this.comparisons = ['bench press', 'squats', 'deadlift'];
    }
    StrengthAthletePerformanceTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthletePerformanceTableComponent.prototype, "applicationUser", void 0);
    StrengthAthletePerformanceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-performance-table',
            template: __webpack_require__(/*! ./performance-table.component.html */ "./src/app/profile/components/strength-athlete/performance-table.component.html")
        })
    ], StrengthAthletePerformanceTableComponent);
    return StrengthAthletePerformanceTableComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/strength-athlete.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/strength-athlete.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <osg-profile-about-me profile=\"Strength Athlete\" experience=\"11 years\" interests=\"Hypertrophy and power lifting\" [text]=\"about\" country=\"Bergen, Norway\" ></osg-profile-about-me>\r\n    <osg-news-feed [applicationUser]=\"applicationUser\"></osg-news-feed>\r\n</div>\r\n<div>\r\n    <osg-strength-athlete-trophy-wall></osg-strength-athlete-trophy-wall>\r\n    <osg-strength-athlete-timeline></osg-strength-athlete-timeline>\r\n    <osg-strength-athlete-performance-table></osg-strength-athlete-performance-table>\r\n    <osg-strength-athlete-top-program-designs></osg-strength-athlete-top-program-designs>\r\n    <osg-strength-athlete-training-calendar></osg-strength-athlete-training-calendar>\r\n    <osg-get-started view=\"tertiary\" [sections]=\"getStartedSections\"></osg-get-started>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/strength-athlete.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/strength-athlete.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StrengthAthleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteComponent", function() { return StrengthAthleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteComponent = /** @class */ (function () {
    function StrengthAthleteComponent() {
        this.about = 'I have been training weight for 11 years to increase my strength and muscle mass. I love to train hard and try to push beyond my limits, and always aim for proper exercise technique.';
        this.getStartedSections = ["the strength athlete profile", "about auto-regulation", "strength standards guide", "experience bank guide", "program design guide"];
    }
    StrengthAthleteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteComponent.prototype, "applicationUser", void 0);
    StrengthAthleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete',
            template: __webpack_require__(/*! ./strength-athlete.component.html */ "./src/app/profile/components/strength-athlete/strength-athlete.component.html")
        })
    ], StrengthAthleteComponent);
    return StrengthAthleteComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/timeline.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/timeline.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col-12 col-sm-6\">\r\n      <h3>TIMELINE</h3>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n      <div class=\"control-slider text-right\">\r\n        <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"timeline-table\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th colspan=\"1\" rowspan=\"2\"></th>\r\n          <th colspan=\"4\"></th>\r\n          <th colspan=\"13\">2018</th>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"2\">Sept.</th>\r\n          <th colspan=\"2\">Oct.</th>\r\n          <th colspan=\"2\">NOV.</th>\r\n          <th colspan=\"2\">Des.</th>\r\n          <th>Jan.</th>\r\n          <th>FEB.</th>\r\n          <th>MAR.</th>\r\n          <th>APR.</th>\r\n          <th>MAY.</th>\r\n          <th>JUN.</th>\r\n          <th>JUL.</th>\r\n          <th>AUG.</th>\r\n          <th>SEPT.</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"program\">\r\n          <td>PROGRAM</td>\r\n          <td colspan=\"3\">Base lifts</td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\">Starting Strength</td>\r\n          <td colspan=\"2\">Ladder Strength</td>\r\n          <td colspan=\"1\">Power Building</td>\r\n          <td colspan=\"2\">GVT</td>\r\n          <td colspan=\"2\">5x5</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Period</td>\r\n          <td colspan=\"3\">10.09.17 - 06.10.17 </td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\">15.12.17 - 28.07.18 </td>\r\n          <td colspan=\"2\">01.03.18 - 30.04.18 </td>\r\n          <td colspan=\"1\">01.05.18 - 31.05.18 </td>\r\n          <td colspan=\"2\">01.06.18 - 31.07.18 </td>\r\n          <td colspan=\"2\">01.08.18 - 16.09.18 </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Category</td>\r\n          <td colspan=\"3\">Power </td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\">Strength </td>\r\n          <td colspan=\"2\">Strength</td>\r\n          <td colspan=\"1\">Strength/Hypertrophy </td>\r\n          <td colspan=\"2\">Hypertrophy </td>\r\n          <td colspan=\"2\">Strength </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Calorie con.</td>\r\n          <td colspan=\"3\">Maintenance </td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\">Maintenance </td>\r\n          <td colspan=\"2\">Surplus</td>\r\n          <td colspan=\"1\">Surplus </td>\r\n          <td colspan=\"2\">Deficit </td>\r\n          <td colspan=\"2\">Deficit </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Body Weight.</td>\r\n          <td colspan=\"3\">101 </td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\">102 </td>\r\n          <td colspan=\"2\">104</td>\r\n          <td colspan=\"1\">105 </td>\r\n          <td colspan=\"2\">104 </td>\r\n          <td colspan=\"2\">103 </td>\r\n        </tr>\r\n        <tr>\r\n          <td>WAIST-HIP RATIO</td>\r\n          <td colspan=\"3\"><span class=\"good\"></span></td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\"><span class=\"good\"></span></td>\r\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"1\"><span class=\"need-improvement\"></span></td>\r\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"2\"><span class=\"need-improvement\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td>STRESS LEVEL</td>\r\n          <td colspan=\"3\"><span class=\"good\"></span></td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\"><span class=\"good\"></span></td>\r\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"1\"><span class=\"good\"></span></td>\r\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"2\"><span class=\"good\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td>SLEEP</td>\r\n          <td colspan=\"3\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\r\n          <td colspan=\"3\"><span class=\"need-improvement\"></span></td>\r\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\r\n          <td colspan=\"1\"><span class=\"good\"></span></td>\r\n          <td colspan=\"2\"><span class=\"good\"></span></td>\r\n          <td colspan=\"2\"><span class=\"good\"></span></td>\r\n        </tr>\r\n        <tr>\r\n            <td></td>\r\n            <td colspan=\"3\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n            <td colspan=\"4\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n            <td colspan=\"3\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n            <td colspan=\"2\"><a class=\"added\" href=\"\"><span>-</span>PT Nohman</a></td>\r\n            <td colspan=\"1\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n            <td colspan=\"2\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n            <td colspan=\"2\"><a href=\"\"><span>+</span>Add PT</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"conventions\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-right\">\r\n            <p class=\"pause\">\r\n                <span></span> Pause > 1 month\r\n            </p>\r\n            <p class=\"good\">\r\n                <span></span> Good\r\n            </p>\r\n            <p class=\"ok\">\r\n                <span></span> OK\r\n            </p>\r\n            <p class=\"need-improvement\">\r\n                <span></span> Need improvement\r\n            </p>\r\n            <p class=\"add-trainer\">\r\n                <span>+</span> Add your personal trainer\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/timeline.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/timeline.component.ts ***!
  \***************************************************************************/
/*! exports provided: StrengthAthleteTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTimelineComponent", function() { return StrengthAthleteTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTimelineComponent = /** @class */ (function () {
    function StrengthAthleteTimelineComponent() {
    }
    StrengthAthleteTimelineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTimelineComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/profile/components/strength-athlete/timeline.component.html")
        })
    ], StrengthAthleteTimelineComponent);
    return StrengthAthleteTimelineComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/top-program-designs.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/top-program-designs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-6\">\r\n        <h3>TOP PROGRAM DESIGNS</h3>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 text-right\">\r\n        <div class=\"sort-box\">\r\n            <p>LEVEL:</p>\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">NOVICE</button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Untrained</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Novice</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Intermediate</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Advanced</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Elite</a>\r\n                </div>\r\n            </div>\r\n            <p>Category:</p>\r\n            <div class=\"dropdown\">\r\n                <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Power</button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item text-blue\" href=\"#\">Strength</a>\r\n                    <a class=\"dropdown-item text-red\" href=\"#\">Hypertrophy</a>\r\n                    <a class=\"dropdown-item text-orange\" href=\"#\">Muscular endurance</a>\r\n                    <a class=\"dropdown-item text-green\" href=\"#\">Power</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"table-top-program\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-127\">\r\n            <thead>\r\n                <tr>\r\n                    <th colspan=\"3\"></th>\r\n                    <th colspan=\"10\">PROGRAM DESIGN</th>\r\n                    <th colspan=\"2\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td rowspan=\"2\">Muscle Group</td>\r\n                    <td rowspan=\"2\">Best Training Program</td>\r\n                    <td rowspan=\"2\">Level (pretest)</td>\r\n                    <td rowspan=\"2\">Type of exercise</td>\r\n                    <td rowspan=\"2\">Exercises</td>\r\n                    <td colspan=\"2\" class=\"blue\">Volume</td>\r\n                    <td colspan=\"2\" class=\"orange\">Intensity</td>\r\n                    <td rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</td>\r\n                    <td rowspan=\"2\">Progression model</td>\r\n                    <td rowspan=\"2\">Rest periods</td>\r\n                    <td rowspan=\"2\">Tempo</td>\r\n                    <td rowspan=\"2\">Test exercise</td>\r\n                    <td rowspan=\"2\" class=\"orange\">Percentage Increase</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"blue\">Sets</td>\r\n                    <td class=\"blue\">Reps</td>\r\n                    <td class=\"orange\">% of 1RM</td>\r\n                    <td class=\"orange\">Reps to failure</td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Chest</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Back</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Quads</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Shoulders</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Hamstrings</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Calves</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Triceps</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <!--  -->\r\n                <tr>\r\n                    <td rowspan=\"2\">Biceps</td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td >Multi joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td rowspan=\"2\"></td>\r\n                    <td rowspan=\"2\" class=\"orange\"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Single joint exercises</td>\r\n                    <td></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"blue\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"orange\"></td>\r\n                    <td class=\"green\"></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/top-program-designs.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/top-program-designs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StrengthAthleteTopProgramDesignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTopProgramDesignsComponent", function() { return StrengthAthleteTopProgramDesignsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTopProgramDesignsComponent = /** @class */ (function () {
    function StrengthAthleteTopProgramDesignsComponent() {
    }
    StrengthAthleteTopProgramDesignsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTopProgramDesignsComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTopProgramDesignsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-top-program-designs',
            template: __webpack_require__(/*! ./top-program-designs.component.html */ "./src/app/profile/components/strength-athlete/top-program-designs.component.html")
        })
    ], StrengthAthleteTopProgramDesignsComponent);
    return StrengthAthleteTopProgramDesignsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/training-calendar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/training-calendar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    <div class=\"row align-items-center\">\r\n        <div class=\"col-12 col-sm-6\">\r\n        <h3>CALENDAR & TRAINING LOG</h3>\r\n        </div>\r\n        <div class=\"col-12 col-sm-5\">\r\n            <div class=\"control-slider\">\r\n                <p>AUGUST 2018</p>\r\n                <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-1\">\r\n            <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"conventions\">\r\n    <p class=\"test\"><span></span>Test Sessions</p>\r\n    <p class=\"completed\"><span></span>Completed Sessions</p>\r\n    <p class=\"missed\"><span></span>Missed Sessions</p>\r\n    <p class=\"today\"><span></span>Today</p>\r\n    <p class=\"upcoming\"><span></span>Upcoming Sessions</p>\r\n</div>\r\n\r\n<div class=\"calendar\">\r\n    <div class=\"week-days\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">Sunday</div>\r\n            <div class=\"col\">Monday</div>\r\n            <div class=\"col\">Tuesday</div>\r\n            <div class=\"col\">Wednesday</div>\r\n            <div class=\"col\">Thursday</div>\r\n            <div class=\"col\">Friday</div>\r\n            <div class=\"col\">Saturday</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"days\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">30</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day completed test\">\r\n                    <span class=\"time\">Jul 31</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Quads, hamstrings,and calves</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">Aug 1</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day completed test\">\r\n                    <span class=\"time\">2</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Chest, shoulders, and triceps </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">3</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day completed test\">\r\n                    <span class=\"time\">4</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Back, biceps, and abs</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">5</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">6</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day missed\">\r\n                    <span class=\"time\">7</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Quads, hamstrings,and calves</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">8</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day completed\">\r\n                    <span class=\"time\">9</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Chest, shoulders, and triceps </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">10</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day completed\">\r\n                    <span class=\"time\">11</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Back, biceps, and abs</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day today\">\r\n                    <span class=\"time\">12</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">13</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">14</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Quads, hamstrings,and calves</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">15</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">16</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Chest, shoulders, and triceps </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">17</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">18</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Back, biceps, and abs</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">19</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">20</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">21</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Quads, hamstrings,and calves</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">22</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">23</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Chest, shoulders, and triceps </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">24</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">25</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Back, biceps, and abs</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">19</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">27</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">28</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Quads, hamstrings,and calves</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">29</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">30</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Chest, shoulders, and triceps </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">Aug 31</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day upcoming\">\r\n                    <span class=\"time\">Sep 1</span>\r\n                    <b>Starting strength</b>\r\n                    <p>Back, biceps, and abs</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"day\">\r\n                    <span class=\"time\">2</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/training-calendar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/training-calendar.component.ts ***!
  \************************************************************************************/
/*! exports provided: StrengthAthleteTrainingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrainingCalendarComponent", function() { return StrengthAthleteTrainingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTrainingCalendarComponent = /** @class */ (function () {
    function StrengthAthleteTrainingCalendarComponent() {
    }
    StrengthAthleteTrainingCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrainingCalendarComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTrainingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-training-calendar',
            template: __webpack_require__(/*! ./training-calendar.component.html */ "./src/app/profile/components/strength-athlete/training-calendar.component.html")
        })
    ], StrengthAthleteTrainingCalendarComponent);
    return StrengthAthleteTrainingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy-wall.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy-wall.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h3>Trophy Wall</h3>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"trophy\">\r\n    \r\n</div>\r\n<osg-strength-athlete-trophy *ngFor=\"let trophy of trophies\" [title]=\"trophy.title\" [gaugeCss]=\"trophy.css\" [checkList]=\"trophy.check_lists\"></osg-strength-athlete-trophy>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy-wall.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy-wall.component.ts ***!
  \******************************************************************************/
/*! exports provided: StrengthAthleteTrophyWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrophyWallComponent", function() { return StrengthAthleteTrophyWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTrophyWallComponent = /** @class */ (function () {
    function StrengthAthleteTrophyWallComponent() {
        this.trophies = [
            {
                title: 'CHEST',
                css: 'yellow',
                check_lists: ['Bench Press', 'Incline Bench Press', 'Decline Bench Press', 'Flat Dumbell Press', 'Barbell Bench Press', 'Incline Cable Press', 'Dips for Chest', 'Bench Press', 'Incline Bench Press', 'Decline Bench Press', 'Flat Dumbell Press', 'Barbell Bench Press', 'Incline Cable Press', 'Dips for Chest']
            },
            {
                title: 'BACK',
                css: 'green',
                check_lists: ['Wide grip pulldown', 'Close grip pulldown', 'Supinated pull down', 'Pullups, Chins', 'Bent-over barbell rows', 'Bent-over dumbbell  rows', 'Seated machine rows', 'Seated one-arm machine rows']
            },
            {
                title: 'QUADS',
                css: 'blue',
                check_lists: ['Barbell back squat', 'Barbell front squat', 'Smith-machine back squat', 'Smith-machine front squat', 'Barbell lunges', 'Dumbbell lunges', 'Smith-machine lunges', 'Machine legpress', 'Legextension']
            }
        ];
    }
    StrengthAthleteTrophyWallComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrophyWallComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTrophyWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-trophy-wall',
            template: __webpack_require__(/*! ./trophy-wall.component.html */ "./src/app/profile/components/strength-athlete/trophy-wall.component.html")
        })
    ], StrengthAthleteTrophyWallComponent);
    return StrengthAthleteTrophyWallComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\r\n    <div class=\"col-12 col-sm-3\">\r\n        <div class=\"strenght-level\">\r\n            <div class=\"title\">\r\n                <h4>STRENGTH LEVEL</h4>\r\n                <p>Choose test exercise</p>\r\n            </div>\r\n            <div class=\"exercise-list\">\r\n                <h4>{{title}}</h4>\r\n                <div class=\"list elegant-scrollbar\">\r\n                    <div class=\"checkbox custom-checkbox\" *ngFor=\"let item of checkList\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"\">{{item}}\r\n                            <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6\">\r\n        <div class=\"performance-graph\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-sm-7\">\r\n                    <div class=\"title\">\r\n                        <h4>PERFORMANCE GRAPH</h4>\r\n                        <p>{{checkList[0]}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-5\">\r\n                    <div style=\"padding-left: 95px;\">\r\n                        <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\r\n                        <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\r\n                        <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div [id]=\"performanceGraphId\"></div>\r\n            <div class='descriptions'>\r\n                <div>\r\n                    <span>Ladder Strength</span>\r\n                    <span>01.03.18 - 30.04.18</span>\r\n                    <span><b>5kg</b> increase</span>\r\n                </div>\r\n                <div>\r\n                    <span>Power Building</span>\r\n                    <span>01.05.18 - 31.05.18</span>\r\n                    <span><b>8kg</b> increase</span>\r\n                </div>\r\n                <div>\r\n                    <span>5x5</span>\r\n                    <span>01.08.18 - 16.09.18</span>\r\n                    <span><b>12kg</b> increase</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"conventions\">\r\n                <p class=\"start-end\"><span></span>Start/End program</p>\r\n                <p class=\"performance\"><span></span>Performance</p>\r\n                <p class=\"levels\"><span></span>Levels</p>\r\n                <p class=\"pretest\"><span></span>Pretest</p>\r\n                <p class=\"posttest\"><span></span>Posttest</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-3\">\r\n        <div class=\"total-percentage\">\r\n            <div class=\"row h-100\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"text-center\">\r\n                        <div class=\"title\">\r\n                            <h4>TOTAL PERCENTAGE INCREASE</h4>\r\n                        </div>\r\n\r\n                        <div class=\"gauge-container\">\r\n                            <osg-gauge [css]=\"gaugeCss\" [value]=\"33\"></osg-gauge>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 text-center align-self-end\">\r\n                    <div class=\"program-period\">\r\n                        <h4>ALL PROGRAMS</h4>\r\n                        <p><b>Period:</b> Jun. 2015 - Sept. 2018</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <div class=\"current-level\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col-12 col-sm-auto\">\r\n                    <div class=\"title\">\r\n                        <h4>CURRENT LEVEL</h4>\r\n                        <p>You are stronger than:</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm\">\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"col\">\r\n                            <div class=\"level no-border\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"green no-circle\" [value]=\"25\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> at your <b>strength<br> level</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"orange no-circle\" [value]=\"10\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> with your<br> <b>height</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"red no-circle\" [value]=\"4\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> at your<br> <b>age</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> with your <br><b>body weight</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> with your <br><b>waist-hip ratio</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"orange no-circle\" [value]=\"33\"></osg-gauge>\r\n                                </div>\r\n                                <p>of male lifters<br> with your<br> <b>muscle fiber type</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"level yellow-bg\">\r\n                                <div class=\"gauge-container\">\r\n                                    <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\r\n                                </div>\r\n                                <p>of your <b>mirror athletes</b> (all variables combined)</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy.component.ts ***!
  \*************************************************************************/
/*! exports provided: StrengthAthleteTrophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrophyComponent", function() { return StrengthAthleteTrophyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StrengthAthleteTrophyComponent = /** @class */ (function () {
    function StrengthAthleteTrophyComponent() {
        this.data_count = 3;
        this.original_data = [];
        this._id = ++StrengthAthleteTrophyComponent_1.counter;
        this.original_data = [
            ['x', '0', '0.5', '1', '2', '2.5', '3', '4', '5', '6', '6.5', '7', '7.5', '8', '9', '9.5', '10'],
            ['data1', null, '75', '78', '83', null, null, null, null, null, null, null, null, null, null, null],
            ['data2', null, null, null, null, null, '90', '94', '98', '102', null, null, null, null, null, null],
            ['data3', null, null, null, null, null, null, null, null, null, null, '108', '115', '122', '135', null]
        ];
    }
    StrengthAthleteTrophyComponent_1 = StrengthAthleteTrophyComponent;
    StrengthAthleteTrophyComponent.prototype.ngOnInit = function () {
    };
    StrengthAthleteTrophyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var chart = c3__WEBPACK_IMPORTED_MODULE_2__["generate"]({
            bindto: "#" + this.performanceGraphId,
            size: {
                height: 300,
                width: 620
            },
            legend: {
                show: false
            },
            transition: {
                duration: 1000
            },
            data: {
                x: 'x',
                colors: {
                    data1: '#F3A83B',
                    data2: '#F3A83B',
                    data3: '#F3A83B'
                },
                columns: this.original_data,
                types: {
                    data1: 'area',
                    data2: 'area',
                    data3: 'area'
                }
            },
            axis: {
                x: {
                    tick: {
                        format: function (d) {
                            switch (d) {
                                case 0.5:
                                    return "";
                                case 2:
                                    return "";
                                case 3:
                                    return "";
                                case 6:
                                    return "";
                                case 7:
                                    return "";
                                case 9:
                                    return "";
                            }
                        },
                        values: [0.5, 2, 3, 6, 7, 9]
                    }
                },
                y: {
                    min: 0,
                    max: 200,
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        format: function (d) {
                            switch (d) {
                                case 75:
                                    return "75";
                                case 99:
                                    return "99";
                                case 127:
                                    return "127";
                                case 159:
                                    return "159";
                                case 193:
                                    return "193";
                            }
                        },
                        values: [75, 99, 127, 159, 193]
                    },
                    label: {
                        text: 'Kg',
                        position: 'outer-top',
                    }
                },
                y2: {
                    show: true,
                    tick: {
                        format: function (d) {
                            switch (d) {
                                case 0:
                                    return "Time";
                                case 0.375:
                                    return "Untrained";
                                case 0.495:
                                    return "Novice";
                                case 0.635:
                                    return "Intermediate";
                                case 0.795:
                                    return "Advanced";
                                case 0.965:
                                    return "Elite";
                            }
                        },
                        values: [0, 0.375, 0.495, 0.635, 0.795, 0.965]
                    }
                }
            },
            grid: {
                x: {
                    lines: [
                        { value: 2.5, text: '' },
                        { value: 6.5, text: '' }
                    ]
                },
                y: {
                    lines: [
                        { value: 75, text: '' },
                        { value: 99, text: '', class: 'label-5' },
                        { value: 127, text: '', position: 'start' },
                        { value: 159, text: '', position: 'start' },
                        { value: 193, text: '', position: 'start' }
                    ]
                }
            },
            tooltip: {
                show: false
            },
            onrendered: function () {
                $("#" + _this.performanceGraphId).attr('style', 'max-height:430px;');
                var $lines = $("#" + _this.performanceGraphId + " .c3-chart-lines .c3-chart-line");
                $.each($lines, function (i, el) {
                    var $circles = $(el).find('.c3-circles .c3-circle').filter(function (i, c) { return $(c).css('opacity') === "1"; });
                    if ($circles.length) {
                        var $first = $($circles[0]), $last = $($circles[$circles.length - 1]), $firstExtra = void 0, $lastExtra = void 0;
                        $first.addClass('pretest');
                        $last.addClass('posttest');
                        $firstExtra = $first.clone();
                        $lastExtra = $last.clone();
                        $firstExtra.addClass('extra');
                        $lastExtra.addClass('extra');
                        $first.attr('r', 8);
                        $last.attr('r', 8);
                        $firstExtra.attr('r', 4);
                        $lastExtra.attr('r', 4);
                        $firstExtra.appendTo($(el).find('.c3-circles'));
                        $lastExtra.appendTo($(el).find('.c3-circles'));
                    }
                });
                $(".c3").children(':first-child').children(':nth-child(2)').attr('style', 'transform: translate(50px, 10px);');
                var circles = $(".c3-chart-lines > .c3-target-data1 > .c3-circles-data1");
                circles[2]['childNodes'].forEach(function (item) {
                    Object.keys(item['classList']).map(function (key, index) {
                        var class_names = Object.values(item['classList']);
                        if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
                            Object.keys(item['attributes']).map(function (key, index) {
                                if (item['attributes'][key].value.includes('opacity: 1')) {
                                    var className = class_names[class_names.length - 1];
                                    $(".c3-chart-lines > .c3-target-data1 > .c3-circles-data1 > ." + className).attr('style', 'opacity: 0 !important;');
                                }
                            });
                        }
                    });
                });
                var circles = $(".c3-chart-lines > .c3-target-data2 > .c3-circles-data2");
                circles[2]['childNodes'].forEach(function (item) {
                    Object.keys(item['classList']).map(function (key, index) {
                        var class_names = Object.values(item['classList']);
                        if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
                            Object.keys(item['attributes']).map(function (key, index) {
                                if (item['attributes'][key].value.includes('opacity: 1')) {
                                    var className = class_names[class_names.length - 1];
                                    $(".c3-chart-lines > .c3-target-data2 > .c3-circles-data2 > ." + className).attr('style', 'opacity: 0 !important;');
                                }
                            });
                        }
                    });
                });
                var circles = $(".c3-chart-lines > .c3-target-data3 > .c3-circles-data3");
                circles[2]['childNodes'].forEach(function (item) {
                    Object.keys(item['classList']).map(function (key, index) {
                        var class_names = Object.values(item['classList']);
                        if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
                            Object.keys(item['attributes']).map(function (key, index) {
                                if (item['attributes'][key].value.includes('opacity: 1')) {
                                    var className = class_names[class_names.length - 1];
                                    $(".c3-chart-lines > .c3-target-data3 > .c3-circles-data3 > ." + className).attr('style', 'opacity: 0 !important');
                                }
                            });
                        }
                    });
                });
            }
        });
        // var descriptions = "<div class='descriptions'>";
        // descriptions+="<div><span>Ladder Strength</span><span>01.03.18 - 30.04.18</span><span><b>5kg</b> increase</span></div>";
        // descriptions+="<div><span>Power Building</span><span>01.05.18 - 31.05.18</span><span><b>8kg</b> increase</span></div>";
        // descriptions+="<div><span>5x5</span><span>01.08.18 - 16.09.18</span><span><b>12kg</b> increase</span></div>";
        // descriptions+="</div>";
        // $(`#${this.performanceGraphId}`).append(descriptions);
    };
    Object.defineProperty(StrengthAthleteTrophyComponent.prototype, "performanceGraphId", {
        get: function () {
            return "performance-graph-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    var StrengthAthleteTrophyComponent_1;
    StrengthAthleteTrophyComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrophyComponent.prototype, "applicationUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthleteTrophyComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthleteTrophyComponent.prototype, "gaugeCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StrengthAthleteTrophyComponent.prototype, "checkList", void 0);
    StrengthAthleteTrophyComponent = StrengthAthleteTrophyComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-trophy',
            template: __webpack_require__(/*! ./trophy.component.html */ "./src/app/profile/components/strength-athlete/trophy.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StrengthAthleteTrophyComponent);
    return StrengthAthleteTrophyComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/profile/components/main.component.ts");
/* harmony import */ var _components_personal_trainer_personal_trainer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/personal-trainer/personal-trainer.component */ "./src/app/profile/components/personal-trainer/personal-trainer.component.ts");
/* harmony import */ var _components_program_designer_program_designer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/program-designer/program-designer.component */ "./src/app/profile/components/program-designer/program-designer.component.ts");
/* harmony import */ var _components_strength_athlete_strength_athlete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/strength-athlete/strength-athlete.component */ "./src/app/profile/components/strength-athlete/strength-athlete.component.ts");
/* harmony import */ var _components_personal_trainer_offers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/personal-trainer/offers.component */ "./src/app/profile/components/personal-trainer/offers.component.ts");
/* harmony import */ var _components_personal_trainer_experience_bank_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/personal-trainer/experience-bank.component */ "./src/app/profile/components/personal-trainer/experience-bank.component.ts");
/* harmony import */ var _components_personal_trainer_booking_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/personal-trainer/booking-calendar.component */ "./src/app/profile/components/personal-trainer/booking-calendar.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_profile_profile_cover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile-cover.component */ "./src/app/profile/components/profile/profile-cover.component.ts");
/* harmony import */ var _components_profile_profile_about_me_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile-about-me-component */ "./src/app/profile/components/profile/profile-about-me-component.ts");
/* harmony import */ var _components_strength_athlete_trophy_wall_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/strength-athlete/trophy-wall.component */ "./src/app/profile/components/strength-athlete/trophy-wall.component.ts");
/* harmony import */ var _components_strength_athlete_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/strength-athlete/timeline.component */ "./src/app/profile/components/strength-athlete/timeline.component.ts");
/* harmony import */ var _components_strength_athlete_performance_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/strength-athlete/performance-table.component */ "./src/app/profile/components/strength-athlete/performance-table.component.ts");
/* harmony import */ var _components_strength_athlete_top_program_designs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/strength-athlete/top-program-designs.component */ "./src/app/profile/components/strength-athlete/top-program-designs.component.ts");
/* harmony import */ var _components_strength_athlete_training_calendar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/strength-athlete/training-calendar.component */ "./src/app/profile/components/strength-athlete/training-calendar.component.ts");
/* harmony import */ var _components_program_designer_published_programs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/program-designer/published-programs.component */ "./src/app/profile/components/program-designer/published-programs.component.ts");
/* harmony import */ var _components_program_designer_program_filter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/program-designer/program-filter.component */ "./src/app/profile/components/program-designer/program-filter.component.ts");
/* harmony import */ var _components_program_designer_experience_bank_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/program-designer/experience-bank.component */ "./src/app/profile/components/program-designer/experience-bank.component.ts");
/* harmony import */ var _components_program_designer_experience_reviews_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/program-designer/experience-reviews.component */ "./src/app/profile/components/program-designer/experience-reviews.component.ts");
/* harmony import */ var _components_program_designer_program_design_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/program-designer/program-design.component */ "./src/app/profile/components/program-designer/program-design.component.ts");
/* harmony import */ var _components_program_designer_training_calendar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/program-designer/training-calendar.component */ "./src/app/profile/components/program-designer/training-calendar.component.ts");
/* harmony import */ var _components_strength_athlete_trophy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/strength-athlete/trophy.component */ "./src/app/profile/components/strength-athlete/trophy.component.ts");
/* harmony import */ var _components_strength_athlete_performance_comparison_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/strength-athlete/performance-comparison.component */ "./src/app/profile/components/strength-athlete/performance-comparison.component.ts");
/* harmony import */ var _components_program_designer_training_day_modal_training_day_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/program-designer/training-day-modal/training-day-modal.component */ "./src/app/profile/components/program-designer/training-day-modal/training-day-modal.component.ts");
/* harmony import */ var _components_personal_trainer_booking_details_modal_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/personal-trainer/booking-details-modal/booking-details-modal.component */ "./src/app/profile/components/personal-trainer/booking-details-modal/booking-details-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var modals = [
    _components_program_designer_training_day_modal_training_day_modal_component__WEBPACK_IMPORTED_MODULE_26__["ProgramDesignerTrainingDayModalComponent"],
    _components_personal_trainer_booking_details_modal_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_27__["PersonalTrainerBookingDetailsModalComponent"]
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: modals,
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _components_profile_profile_cover_component__WEBPACK_IMPORTED_MODULE_11__["ProfileCoverComponent"],
                _components_profile_profile_about_me_component__WEBPACK_IMPORTED_MODULE_12__["ProfileAboutMeComponent"],
                _components_personal_trainer_personal_trainer_component__WEBPACK_IMPORTED_MODULE_4__["PersonalTrainerComponent"],
                _components_personal_trainer_offers_component__WEBPACK_IMPORTED_MODULE_7__["PersonalTrainerOffersComponent"],
                _components_personal_trainer_experience_bank_component__WEBPACK_IMPORTED_MODULE_8__["PersonalTrainerExperienceBankComponent"],
                _components_personal_trainer_booking_calendar_component__WEBPACK_IMPORTED_MODULE_9__["PersonalTrainerBookingCalendarComponent"],
                _components_program_designer_program_designer_component__WEBPACK_IMPORTED_MODULE_5__["ProgramDesignerComponent"],
                _components_program_designer_published_programs_component__WEBPACK_IMPORTED_MODULE_18__["ProgramDesignerPublishedProgramsComponent"],
                _components_program_designer_program_filter_component__WEBPACK_IMPORTED_MODULE_19__["ProgramDesignerProgramFilterComponent"],
                _components_program_designer_experience_bank_component__WEBPACK_IMPORTED_MODULE_20__["ProgramDesignerExperienceBankComponent"],
                _components_program_designer_experience_reviews_component__WEBPACK_IMPORTED_MODULE_21__["ProgramDesignerExperienceReviewsComponent"],
                _components_program_designer_program_design_component__WEBPACK_IMPORTED_MODULE_22__["ProgramDesignerProgramDesignComponent"],
                _components_program_designer_training_calendar_component__WEBPACK_IMPORTED_MODULE_23__["ProgramDesignerTrainingCalendarComponent"],
                _components_strength_athlete_strength_athlete_component__WEBPACK_IMPORTED_MODULE_6__["StrengthAthleteComponent"],
                _components_strength_athlete_trophy_wall_component__WEBPACK_IMPORTED_MODULE_13__["StrengthAthleteTrophyWallComponent"],
                _components_strength_athlete_trophy_component__WEBPACK_IMPORTED_MODULE_24__["StrengthAthleteTrophyComponent"],
                _components_strength_athlete_timeline_component__WEBPACK_IMPORTED_MODULE_14__["StrengthAthleteTimelineComponent"],
                _components_strength_athlete_performance_table_component__WEBPACK_IMPORTED_MODULE_15__["StrengthAthletePerformanceTableComponent"],
                _components_strength_athlete_performance_comparison_component__WEBPACK_IMPORTED_MODULE_25__["StrengthAthletePerformanceComparisonComponent"],
                _components_strength_athlete_top_program_designs_component__WEBPACK_IMPORTED_MODULE_16__["StrengthAthleteTopProgramDesignsComponent"],
                _components_strength_athlete_training_calendar_component__WEBPACK_IMPORTED_MODULE_17__["StrengthAthleteTrainingCalendarComponent"],
                modals
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
            ],
            exports: [],
            providers: [],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/strength-standards/components/exercise-table/exercise-table.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/strength-standards/components/exercise-table/exercise-table.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>CHEST</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Flat bench flyes</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell bench press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell incline bench press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell decline bench press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Incline bench dumbbell press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Decline bench dumbell press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Flat bench flyes</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Incline bench flyes</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Decline bench flyes</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Cable cross</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dips for chest</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated machine chest press</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm1\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\" value=\"140\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\" value=\"4\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\" value=\"153\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\" value=\"Intermediate\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"green-hover\">\r\n                    <td>50-59</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">26</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">40</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">60</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">84</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">96</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>60-69</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">37</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">53</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">75</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">100</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">113</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>70-79</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">45</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">65</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">89</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">116</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">132</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>80-89</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">55</td>\r\n                    <td  data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">76</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">102</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">131</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">142</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>90-99</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">64</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">87</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">114</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">142</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">165</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>100-109</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">74</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">76</td>\r\n                    <td class=\"active\" data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">125</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">157</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">191</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>110-119</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">81</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">705</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">135</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">169</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">204</td>\r\n                </tr>\r\n                <tr class=\"green-hover\">\r\n                    <td>120+</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">98</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">125</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">157</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">192</td>\r\n                    <td data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">229</td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\" value=\"8\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"5\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"11\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"22\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"16\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"19\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\" value=\"12\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>Back</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Wide-grip pull-up</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell deadlift</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Good morning</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Bent-over barbell row</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Single-arm dumbbell row</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Wide-grip pull-up</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Supinated-grip pull-up</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing T-bar row</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Wide-grip seated cable row</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Close-grip seated cable row</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Wide-grip pull-down</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Close-grip pull-down</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Supinated-grip pull-down</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell pull-over</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm2\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm2\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <h4>SHOULDERS</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Seated arnold press</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated barbell shoulder press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing dumbbell shoulder press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing barbell shoulder press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated arnold press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell front raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell lateral raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Cable lateral raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Single cable lateral raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated bent over rear delt flyes.</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Bent over single cable rear delt</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Bent over double cable rear delt</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Lying double cable rear delt</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Cable rope rear-delt rows</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm3\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm3\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>QUADS</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Barbell lunge</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell front squat</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell lunge </a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell lunge</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Smith-machine lunge</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Smith-machine back squat</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Leg press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Hack squat (machine)</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Leg extension</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Single leg extension</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm4\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm4\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>HAMSTRINGS</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Romanian deadlift</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Romanian deadlift</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Lying leg-curls</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated leg-curls</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Nordic hamstrings</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm5\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm5\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>CALVES</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Seated calf raise</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing smith-machine calf raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing calf raise (machine)</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated calf raise</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Calf raise in leg-press machine</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Donkey calf raise</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm6\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm6\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>Biceps</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Barbell biceps curl</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated dumbbell biceps curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing dumbbell biceps curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Barbell biceps curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated hammer curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Standing hammer curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">EZ-barbell scott curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell scott curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Hammer scott curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Reverse curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Reverse scott curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Double cable curl</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Single cable curl</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm7\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm7\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"exercise-table\">\r\n    <div class=\"exercise-table-title\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <h4>TRICEPS</h4>\r\n                <div class=\"exercise-box\">\r\n                    <p>EXERCISE:</p>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Dips for triceps</button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                          <a class=\"dropdown-item\" href=\"#\">Flat bench barbell scull crusher</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Flat bench dumbbell scull crusher</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated barbell scull crusher</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Seated dumbbell scull crusher</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Close-grip bench press</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dips for triceps</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Push-down</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Rope push-down</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Cable kick-back</a>\r\n                          <a class=\"dropdown-item\" href=\"#\">Dumbbell kick-back</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-auto\">\r\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm8\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm8\">CALCULATE ONE REP MAX</a>\r\n\r\n                <div class=\"collapse calculate\" id=\"collapseForm8\">\r\n                    <div class=\"form-wrapper\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>BODY WEIGHT (KG)</th>\r\n                    <th>UNTRAINED</th>\r\n                    <th>Novie</th>\r\n                    <th>Intermediate</th>\r\n                    <th>Advanced</th>\r\n                    <th>Elite</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>50-59</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>60-69</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>70-79</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>80-89</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>90-99</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>100-109</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>110-119</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>120+</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"7\">\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>YOU ARE STRONGER <br>THAN:</td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>strength level</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>height</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>at your <br><b>age</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>body weight</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>waist-hip ratio</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters <br>with your <br><b>muscle fiber type</b></span></td>\r\n                                    <td><div><input type=\"text\"> %</div><span>of your <br><b>mirror athletes</b> <br>(all variables combined)</span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/strength-standards/components/exercise-table/exercise-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/strength-standards/components/exercise-table/exercise-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StrengthStandardsExerciseTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsExerciseTable", function() { return StrengthStandardsExerciseTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthStandardsExerciseTable = /** @class */ (function () {
    function StrengthStandardsExerciseTable() {
        this.title = '';
    }
    StrengthStandardsExerciseTable.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthStandardsExerciseTable.prototype, "title", void 0);
    StrengthStandardsExerciseTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-standards-exercise-table',
            template: __webpack_require__(/*! ./exercise-table.component.html */ "./src/app/strength-standards/components/exercise-table/exercise-table.component.html")
        })
    ], StrengthStandardsExerciseTable);
    return StrengthStandardsExerciseTable;
}());



/***/ }),

/***/ "./src/app/strength-standards/components/main.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/strength-standards/components/main.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"main-title main-strength-standards\">\r\n        <img src=\"images/icons/strength-standards.png\" alt=\"strength-standards\"/>        \r\n        <h1>STRENGTH STANDARDS</h1>\r\n        <span>HOW STRONG ARE YOU?</span>\r\n        <p>Strength standards are objective benchmarks that shows how strong you are compared to a larger group, in this case compared to other strength athletes at your body weight. It is most common to measure 1 repetition maximum, which is the maximum amount of weight that a person can possible lift for one repetition with maximum effort. Strength standards are beneficial when setting goals and tracking your progress. <a (click)=\"toggle()\">{{link_name}}</a></p>\r\n        <div *ngIf=\"isShow\">\r\n            <p>The Program designer makes strength programs with general percentage of 1 RM load values for each set. Optimal strength gains uses your 1 RM values to replace these and calculate your personal kg loads on every set. This also gives us the opportunity to calculate your Target Volume Load which is compared with your Performed Volume Load (volume load: total set x reps x kg per session). This will reveal how well you are adopting to the program on a daily basis.</p>\r\n            <p>In the programs first and last week you will perform a test AMRAP set in the test exercise, to calculate your 1 RM. By comparing the pre- and post 1 RM values, we can calculate your results or percentage increase.  The 1 RM test results are saved in the test exercises Strength Standard table, and the percentage increase value is saved in the programs Experience bank.</p>\r\n        </div>\r\n    </div>\r\n    <osg-enter-information [status]='status'></osg-enter-information>\r\n    <osg-strength-standards-exercise-table></osg-strength-standards-exercise-table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/strength-standards/components/main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/strength-standards/components/main.component.ts ***!
  \*****************************************************************/
/*! exports provided: StrengthStandardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsComponent", function() { return StrengthStandardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthStandardsComponent = /** @class */ (function () {
    function StrengthStandardsComponent() {
        this.status = 'strength';
        this.isShow = false;
        this.link_name = 'Read More';
    }
    StrengthStandardsComponent.prototype.ngOnInit = function () {
    };
    StrengthStandardsComponent.prototype.toggle = function () {
        this.isShow = !this.isShow;
        if (this.isShow) {
            this.link_name = "Read Less";
        }
        else {
            this.link_name = "Read More";
        }
    };
    StrengthStandardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-standards',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/strength-standards/components/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StrengthStandardsComponent);
    return StrengthStandardsComponent;
}());



/***/ }),

/***/ "./src/app/strength-standards/strength-standards.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/strength-standards/strength-standards.module.ts ***!
  \*****************************************************************/
/*! exports provided: StrengthStandardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsModule", function() { return StrengthStandardsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main.component */ "./src/app/strength-standards/components/main.component.ts");
/* harmony import */ var _components_exercise_table_exercise_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/exercise-table/exercise-table.component */ "./src/app/strength-standards/components/exercise-table/exercise-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StrengthStandardsModule = /** @class */ (function () {
    function StrengthStandardsModule() {
    }
    StrengthStandardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_4__["StrengthStandardsComponent"],
                _components_exercise_table_exercise_table_component__WEBPACK_IMPORTED_MODULE_5__["StrengthStandardsExerciseTable"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            providers: [],
        })
    ], StrengthStandardsModule);
    return StrengthStandardsModule;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/main.component.html":
/*!***************************************************************!*\
  !*** ./src/app/workout-detail/components/main.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"navigate-buttons\">\r\n        <a class=\"left-button\" (click)=\"Back()\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"arrow-left\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-arrow-left fa-w-14 fa-lg\"><path fill=\"currentColor\" d=\"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z\" class=\"\"></path></svg></a>\r\n        <a class=\"right-button\" (click)=\"FinishWorkout()\">Finish Workout</a>\r\n    </div>\r\n    <div class=\"detail-info\">\r\n        <div class=\"detail-info-title\">\r\n            <p><span>Day3: {{date}}</span><span>\r\n                    <svg ><circle cx=\"5\" cy=\"5\" r=\"1\" stroke=\"#000\" stroke-width=\"3\" /></svg>\r\n                    In progress</span>\r\n            </p>\r\n            <h4>Chest, Shoulders & Triceps</h4>\r\n            <h5>German Volume Training</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"regulation\" *ngIf=\"status != 'completed'\">\r\n        <p>autoRegulation:</p>\r\n        <ui-switch [(ngModel)]=\"autoRegulation\" size=\"large\" color=\"#85c435\" switchColor=\"#fcfcfc\" labelOn=\"On\" labelOff=\"Off\"></ui-switch>\r\n    </div>\r\n</div>\r\n<div class=\"container\" [ngClass]=\"status=='completed'?'marginTop':'marginNormal'\">\r\n    <osg-workout-detail-upcoming [status]='status' (valueChange)='getEvent($event)' *ngIf=\"status != 'completed'\"></osg-workout-detail-upcoming>\r\n    <osg-workout-detail-complete *ngIf=\"status == 'completed'\"></osg-workout-detail-complete>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-detail/components/main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/workout-detail/components/main.component.ts ***!
  \*************************************************************/
/*! exports provided: WorkoutDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailComponent", function() { return WorkoutDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutDetailComponent = /** @class */ (function () {
    function WorkoutDetailComponent(activeRoute, router) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.router = router;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.date = params.get('date');
            if (params.get('type') == 'start') {
                _this.status = 'Upcoming';
            }
            else if (params.get('type') == 'complete') {
                _this.status = 'Complete';
            }
        });
        this.autoRegulation = true;
    }
    WorkoutDetailComponent.prototype.ngOnInit = function () {
        // this.router.events.subscribe((event: NavigationEnd) => {
        //   if(event instanceof NavigationEnd) {
        //     window.scrollTo(0, 0);
        //   }
        // })
    };
    WorkoutDetailComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, 0);
    };
    WorkoutDetailComponent.prototype.getEvent = function (status) {
        this.status = status;
    };
    WorkoutDetailComponent.prototype.FinishWorkout = function () {
        if (this.status == "Complete") {
            this.status = 'completed';
        }
    };
    WorkoutDetailComponent.prototype.Back = function () {
        this.router.navigate(['/workout-log']);
    };
    WorkoutDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-detail',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/workout-detail/components/main.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WorkoutDetailComponent);
    return WorkoutDetailComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stepper-group\">\r\n    <div class=\"stepper\">\r\n        <button class=\"decrease\" (click)=\"decrease()\"><span>-</span></button>\r\n    </div>\r\n\r\n    <div class=\"slider\">\r\n        <ng5-slider [(value)]=\"value\" [options]=\"options\"></ng5-slider>\r\n    </div>\r\n\r\n    <div class=\"stepper\">\r\n        <button class=\"increase\" (click)=\"increase()\"><span>+</span></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NumbericSliderOrangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbericSliderOrangeComponent", function() { return NumbericSliderOrangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumbericSliderOrangeComponent = /** @class */ (function () {
    function NumbericSliderOrangeComponent() {
        this.value = 7;
        this.options = {
            showTicksValues: true,
            floor: 0,
            ceil: 10,
            stepsArray: [
                { value: 0, legend: 'Poor' },
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5, legend: 'Good' },
                { value: 6 },
                { value: 7 },
                { value: 8 },
                { value: 9 },
                { value: 10, legend: 'Excellent' },
            ]
        };
    }
    NumbericSliderOrangeComponent.prototype.ngOnInit = function () {
    };
    NumbericSliderOrangeComponent.prototype.increase = function () {
        if (this.value < 11) {
            this.value++;
        }
    };
    NumbericSliderOrangeComponent.prototype.decrease = function () {
        if (this.value > 0) {
            this.value--;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NumbericSliderOrangeComponent.prototype, "status", void 0);
    NumbericSliderOrangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-numberic-slider-orange',
            template: __webpack_require__(/*! ./numberic-slider-orange.component.html */ "./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.html")
        })
    ], NumbericSliderOrangeComponent);
    return NumbericSliderOrangeComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stepper-group\">\r\n    <div class=\"stepper\">\r\n        <button class=\"decrease\" (click)=\"decrease()\"><span>-</span></button>\r\n    </div>\r\n\r\n    <div class=\"slider\">\r\n        <ng5-slider [(value)]=\"value\" [options]=\"options\"></ng5-slider>\r\n    </div>\r\n\r\n    <div class=\"stepper\">\r\n        <button class=\"increase\" (click)=\"increase()\"><span>+</span></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NumbericSliderPurpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbericSliderPurpleComponent", function() { return NumbericSliderPurpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumbericSliderPurpleComponent = /** @class */ (function () {
    function NumbericSliderPurpleComponent() {
        this.value = 8;
        this.options = {
            showTicksValues: true,
            floor: 0,
            ceil: 10,
            stepsArray: [
                { value: 0, legend: 'Poor' },
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5, legend: 'Good' },
                { value: 6 },
                { value: 7 },
                { value: 8 },
                { value: 9 },
                { value: 10, legend: 'Excellent' },
            ]
        };
    }
    NumbericSliderPurpleComponent.prototype.ngOnInit = function () {
    };
    NumbericSliderPurpleComponent.prototype.increase = function () {
        if (this.value < 11) {
            this.value++;
        }
    };
    NumbericSliderPurpleComponent.prototype.decrease = function () {
        if (this.value > 0) {
            this.value--;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NumbericSliderPurpleComponent.prototype, "status", void 0);
    NumbericSliderPurpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-numberic-slider-purple',
            template: __webpack_require__(/*! ./numberic-slider-purple.component.html */ "./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.html")
        })
    ], NumbericSliderPurpleComponent);
    return NumbericSliderPurpleComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stepper-group\">\r\n    <div class=\"stepper\">\r\n        <button class=\"decrease\" (click)=\"decrease()\"><span>-</span></button>\r\n    </div>\r\n\r\n    <div class=\"slider\">\r\n        <ng5-slider [(value)]=\"value\" [options]=\"options\"></ng5-slider>\r\n    </div>\r\n\r\n    <div class=\"stepper\">\r\n        <button class=\"increase\" (click)=\"increase()\"><span>+</span></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NumbericSliderRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbericSliderRedComponent", function() { return NumbericSliderRedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumbericSliderRedComponent = /** @class */ (function () {
    function NumbericSliderRedComponent() {
        this.value = 2;
        this.options = {
            showTicksValues: true,
            floor: 0,
            ceil: 10,
            stepsArray: [
                { value: 0, legend: 'Extreme' },
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5, legend: 'Mederate' },
                { value: 6 },
                { value: 7 },
                { value: 8 },
                { value: 9 },
                { value: 10, legend: 'None' },
            ]
        };
    }
    NumbericSliderRedComponent.prototype.ngOnInit = function () {
    };
    NumbericSliderRedComponent.prototype.increase = function () {
        if (this.value < 11) {
            this.value++;
        }
    };
    NumbericSliderRedComponent.prototype.decrease = function () {
        if (this.value > 0) {
            this.value--;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NumbericSliderRedComponent.prototype, "status", void 0);
    NumbericSliderRedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-numberic-slider-red',
            template: __webpack_require__(/*! ./numberic-slider-red.component.html */ "./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.html")
        })
    ], NumbericSliderRedComponent);
    return NumbericSliderRedComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Workout Summary</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-summary\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse in show\" id=\"card-summary\">\r\n        <div class=\"text-group\">\r\n            <label for=\"\" class=\"group-title\">chest:</label>\r\n            <div class=\"group-value\">\r\n                <p>total target volume load*<span>1000</span></p>\r\n            </div>\r\n            <div class=\"group-value\">\r\n                <p>total performed volume load* <span>1100</span></p>\r\n            </div>\r\n            <div class=\"group-value difference_plus\">\r\n                <p>difference <span>+100</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-group\">\r\n            <label for=\"\" class=\"group-title\">shoulders:</label>\r\n            <div class=\"group-value\">\r\n                <p>total target volume load*<span>880</span></p>\r\n            </div>\r\n            <div class=\"group-value\">\r\n                <p>total performed volume load* <span>900</span></p>\r\n            </div>\r\n            <div class=\"group-value difference_plus\">\r\n                <p>difference <span>+10</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-group\">\r\n            <label for=\"\" class=\"group-title\">Triceps:</label>\r\n            <div class=\"group-value\">\r\n                <p>total target volume load*<span>880</span></p>\r\n            </div>\r\n            <div class=\"group-value\">\r\n                <p>total performed volume load* <span>900</span></p>\r\n            </div>\r\n            <div class=\"group-value difference_minus\">\r\n                <p>difference <span>-20</span></p>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"text-group boder-none\">\r\n            <div class=\"group-title\"><p><span>Total:</span><span class=\"total_amount\">+90</span></p></div>\r\n            <div class=\"group-value\">\r\n                <p>*(volumeload: set * reps * load)</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Sleep level</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-sleep\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse in show\" id=\"card-sleep\">\r\n        <osg-numberic-slider-purple></osg-numberic-slider-purple>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Energy Level</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-energy\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse in show\" id=\"card-energy\">\r\n        <osg-numberic-slider-orange></osg-numberic-slider-orange>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Stress Level</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-stress\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse in show\" id=\"card-stress\">\r\n        <osg-numberic-slider-red></osg-numberic-slider-red>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Injury Level</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-injury\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body injure-mode collapse in show\" id=\"card-injury\">\r\n        <p>injuries?</p>\r\n        <div class=\"btn-status\">\r\n            <a class=\"btn\" [ngClass]=\"active?'active':''\" (click)=\"InjureSelect()\">yes</a>\r\n            <a class=\"btn\" [ngClass]=\"!active?'active':''\" (click)=\"InjureDeselect()\">no</a>\r\n        </div>\r\n        <div class=\"injure-group\">\r\n            <p>which muscle group(s)</p>\r\n            <div class=\"injure-detail\">\r\n                <div class=\"text\">\r\n                    chest\r\n                </div>\r\n                <div class=\"slider\">\r\n                    <ui-switch [(ngModel)]=\"chest\" size=\"small\" (change)=\"onChangeChest($event)\"></ui-switch>\r\n                </div>\r\n            </div>\r\n            <div class=\"injure-detail\">\r\n                <div class=\"text\">\r\n                    shoulders\r\n                </div>\r\n                <div class=\"slider\">\r\n                    <ui-switch [(ngModel)]=\"shoulders\" size=\"small\" (change)=\"onChangeShoulders($event)\"></ui-switch>\r\n                </div>\r\n            </div>\r\n            <div class=\"injure-detail\">\r\n                <div class=\"text\">\r\n                    triceps\r\n                </div>\r\n                <div class=\"slider\">\r\n                    <ui-switch [(ngModel)]=\"triceps\" size=\"small\" (change)=\"onChangeTriceps($event)\"></ui-switch>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <p>Workout notes</p>\r\n        </div>\r\n        <div class=\"card-collapse\">\r\n            <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#card-note\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse in show\" id=\"card-note\">\r\n        <p>NOTES</p>\r\n        <textarea placeholder=\"Write your notes here....\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n<button class=\"btn-finish\" (click)=\"FinishWorkout()\">Finish Workout</button>\r\n    "

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WorkoutDetailCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailCompleteComponent", function() { return WorkoutDetailCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutDetailCompleteComponent = /** @class */ (function () {
    function WorkoutDetailCompleteComponent(router) {
        this.router = router;
        this.chest = true;
        this.shoulders = false;
        this.triceps = false;
        this.active = true;
    }
    WorkoutDetailCompleteComponent.prototype.ngOnInit = function () {
    };
    WorkoutDetailCompleteComponent.prototype.onChangeChest = function (val) {
        this.chest = val;
    };
    WorkoutDetailCompleteComponent.prototype.onChangeShoulders = function (val) {
        this.shoulders = val;
    };
    WorkoutDetailCompleteComponent.prototype.onChangeTriceps = function (val) {
        this.triceps = val;
    };
    WorkoutDetailCompleteComponent.prototype.InjureSelect = function () {
        this.active = true;
    };
    WorkoutDetailCompleteComponent.prototype.InjureDeselect = function () {
        this.active = false;
        this.chest = this.shoulders = this.triceps = false;
    };
    WorkoutDetailCompleteComponent.prototype.FinishWorkout = function () {
        this.router.navigate(['/workout-log']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WorkoutDetailCompleteComponent.prototype, "date", void 0);
    WorkoutDetailCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-detail-complete',
            template: __webpack_require__(/*! ./workout-detail-complete.component.html */ "./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WorkoutDetailCompleteComponent);
    return WorkoutDetailCompleteComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"form-title\">\r\n    <p>Completed:</p>\r\n</div>\r\n<div class=\"stepper-group\">\r\n    <div class=\"stepper\">\r\n        <button class=\"decrease\" (click)=\"DecraseREPS()\"><span>-</span></button>\r\n    </div>\r\n\r\n    <div class=\"amount\">\r\n        <label class=\"amount-num\">{{reps}}</label>\r\n        <label><span>Performed Reps</span></label>\r\n    </div>\r\n\r\n    <div class=\"stepper\">\r\n        <button class=\"increase\" (click)=\"IncraseREPS()\"><span>+</span></button>\r\n    </div>\r\n</div>\r\n<div class=\"stepper-group\">\r\n    <div class=\"stepper\">\r\n        <button class=\"decrease\" (click)=\"DecraseRTF()\"><span>-</span></button>\r\n    </div>\r\n\r\n    <div class=\"amount\">\r\n        <label class=\"amount-num\">{{rtf}}</label>\r\n        <label><span>Performed RTF</span></label>\r\n    </div>\r\n\r\n    <div class=\"stepper\">\r\n        <button class=\"increase\" (click)=\"IncraseRTF()\"><span>+</span></button>\r\n    </div>\r\n</div>\r\n<div class=\"form-des\"><p class=\"amount-num\">{{load}}</p><p><span>Autoregulated<br>Load(kg)</span></p></div>\r\n<div class=\"form-des\"><p><span>Autoregulated<br>Load(%)+2,5</span></p></div>\r\n"

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WorkoutDetailProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailProgressComponent", function() { return WorkoutDetailProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkoutDetailProgressComponent = /** @class */ (function () {
    function WorkoutDetailProgressComponent() {
        this.reps = 8;
        this.rtf = 1;
        this.load = 100;
    }
    WorkoutDetailProgressComponent.prototype.ngOnInit = function () { };
    WorkoutDetailProgressComponent.prototype.IncraseRTF = function () {
        this.rtf++;
    };
    WorkoutDetailProgressComponent.prototype.DecraseRTF = function () {
        this.rtf--;
    };
    WorkoutDetailProgressComponent.prototype.IncraseREPS = function () {
        this.reps++;
        this.load += 2.5;
    };
    WorkoutDetailProgressComponent.prototype.DecraseREPS = function () {
        this.reps--;
        this.load -= 2.5;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WorkoutDetailProgressComponent.prototype, "status", void 0);
    WorkoutDetailProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-detail-progress',
            template: __webpack_require__(/*! ./workout-detail-progress.component.html */ "./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.html")
        })
    ], WorkoutDetailProgressComponent);
    return WorkoutDetailProgressComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div class=\"time-block\">\r\n            <img src=\"assets/images/icons/time.png\">\r\n            <p>{{time}}</p>\r\n        </div>\r\n        <div class=\"status\">\r\n            <p class=\"edit-set\" *ngIf=\"status=='Complete'\"><span><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"pen-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-pen-square fa-w-14 fa-fw fa-lg\"><path fill=\"currentColor\" d=\"M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z\" class=\"\"></path></svg></span>\r\n                edit set</p>\r\n            <p [ngClass]=\"(status=='In progress')?'in-progress':(status=='Complete')?'complete':'upcoming'\">\r\n                <span *ngIf=\"status=='Complete'\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-check-square fa-w-14 fa-3x\"><path fill=\"currentColor\" d=\"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z\" class=\"\"></path></svg></span>\r\n                {{status}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"main-body\">\r\n            <div class=\"main-info\">\r\n                <div class=\"responsive-img\">\r\n                    <img src=\"assets/images/icons/body.png\">\r\n                </div>\r\n                <div class=\"info-texts\">\r\n                    <p>Chest</p>\r\n                    <h6>Bench Press</h6>\r\n                    <p>Set3</p>\r\n                </div>\r\n                <span class=\"caret\" data-toggle=\"collapse\" data-target=\"#detail-body\"><i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"detail-body collapse in show\" id=\"detail-body\">\r\n            <div class=\"detail-method\">\r\n                <div class=\"method-type\">\r\n                    <p>Method:</p>\r\n                    <p>Tempo (Down - Hold - Up):</p>\r\n                </div>\r\n                <div class=\"method-value\">\r\n                    <p>Straight set</p>\r\n                    <p>3 - 0 - 2</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"detail-progress\">\r\n                <div class=\"progress-form\" (click)=\"edit()\">\r\n                    <div class=\"form-title\">\r\n                        <p>Target:</p>\r\n                    </div>\r\n                    <div class=\"form-value\">\r\n                        <div><p class=\"amount-num\">8</p><p><span>Target<br>Reps</span></p></div>\r\n                        <div><p class=\"amount-num\">1</p><p><span>Target<br>RTF</span></p></div>\r\n                        <div><p class=\"amount-num\">100</p><p><span>Target<br>Load(kg)</span></p></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"progress-form\" *ngIf=\"status != 'In Progress'\">\r\n                    <div class=\"form-title\">\r\n                        <p><span>Completed:</span><span *ngIf=\"status=='Complete'\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-check-square fa-w-14 fa-3x\"><path fill=\"currentColor\" d=\"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z\" class=\"\"></path></svg></span></p>\r\n                    </div>\r\n                    <div class=\"form-value\">\r\n                        <div><p class=\"amount-num\">{{reps}}</p><p><span>Target<br>Reps</span></p></div>\r\n                        <div><p class=\"amount-num\">{{rtf}}</p><p><span>Target<br>RTF</span></p></div>\r\n                        <div><p class=\"amount-num\">{{load}}</p><p><span>Target<br>Load(kg)</span></p></div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"progress-form-set\" *ngIf=\"status== 'In Progress'\">\r\n                    <osg-workout-detail-progress></osg-workout-detail-progress>\r\n                    <div class=\"form-buttons\">\r\n                        <div class=\"single-button skip\" (click)=\"SkipSet()\">Skip set</div>\r\n                        <div class=\"single-button finish\" (click)=\"FinishSet()\">finish set</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WorkoutDetailUpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailUpcomingComponent", function() { return WorkoutDetailUpcomingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkoutDetailUpcomingComponent = /** @class */ (function () {
    function WorkoutDetailUpcomingComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 0;
    }
    WorkoutDetailUpcomingComponent.prototype.ngOnInit = function () {
        this.time = "02:00";
        this.reps = this.rtf = this.load = '-';
    };
    WorkoutDetailUpcomingComponent.prototype.edit = function () {
        this.count++;
        if (this.count == 2) {
            this.status = "Upcoming";
            this.count = 0;
        }
        else {
            this.status = "In Progress";
        }
    };
    WorkoutDetailUpcomingComponent.prototype.SkipSet = function () {
        this.status = "Upcoming";
    };
    WorkoutDetailUpcomingComponent.prototype.FinishSet = function () {
        this.time = "00:00";
        this.reps = '9';
        this.rtf = '1';
        this.load = '102,5';
        this.status = "Complete";
        this.valueChange.emit(this.status);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WorkoutDetailUpcomingComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WorkoutDetailUpcomingComponent.prototype, "status", void 0);
    WorkoutDetailUpcomingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-detail-upcoming',
            template: __webpack_require__(/*! ./workout-detail-upcoming.component.html */ "./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WorkoutDetailUpcomingComponent);
    return WorkoutDetailUpcomingComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/workout-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/workout-detail/workout-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: WorkoutDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailModule", function() { return WorkoutDetailModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/workout-detail/components/main.component.ts");
/* harmony import */ var _components_workout_detail_workout_detail_upcoming_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/workout-detail/workout-detail-upcoming.component */ "./src/app/workout-detail/components/workout-detail/workout-detail-upcoming.component.ts");
/* harmony import */ var _components_workout_detail_workout_detail_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/workout-detail/workout-detail-progress.component */ "./src/app/workout-detail/components/workout-detail/workout-detail-progress.component.ts");
/* harmony import */ var _components_workout_detail_workout_detail_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/workout-detail/workout-detail-complete.component */ "./src/app/workout-detail/components/workout-detail/workout-detail-complete.component.ts");
/* harmony import */ var _components_workout_detail_numberic_slider_purple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/workout-detail/numberic-slider-purple.component */ "./src/app/workout-detail/components/workout-detail/numberic-slider-purple.component.ts");
/* harmony import */ var _components_workout_detail_numberic_slider_orange_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/workout-detail/numberic-slider-orange.component */ "./src/app/workout-detail/components/workout-detail/numberic-slider-orange.component.ts");
/* harmony import */ var _components_workout_detail_numberic_slider_red_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/workout-detail/numberic-slider-red.component */ "./src/app/workout-detail/components/workout-detail/numberic-slider-red.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var WorkoutDetailModule = /** @class */ (function () {
    function WorkoutDetailModule() {
    }
    WorkoutDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutDetailComponent"],
                _components_workout_detail_workout_detail_upcoming_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutDetailUpcomingComponent"],
                _components_workout_detail_workout_detail_progress_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutDetailProgressComponent"],
                _components_workout_detail_workout_detail_complete_component__WEBPACK_IMPORTED_MODULE_5__["WorkoutDetailCompleteComponent"],
                _components_workout_detail_numberic_slider_purple_component__WEBPACK_IMPORTED_MODULE_6__["NumbericSliderPurpleComponent"],
                _components_workout_detail_numberic_slider_orange_component__WEBPACK_IMPORTED_MODULE_7__["NumbericSliderOrangeComponent"],
                _components_workout_detail_numberic_slider_red_component__WEBPACK_IMPORTED_MODULE_8__["NumbericSliderRedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_11__["Ng5SliderModule"]
            ],
            providers: [],
        })
    ], WorkoutDetailModule);
    return WorkoutDetailModule;
}());



/***/ }),

/***/ "./src/app/workout-log/components/main.component.html":
/*!************************************************************!*\
  !*** ./src/app/workout-log/components/main.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"detail-info\">\r\n        <div class=\"detail-info-title\">\r\n            <h4>Calendar & Workout Log</h4>\r\n            <h5>In progress: German Volume Training</h5>\r\n        </div>\r\n        <div class=\"detail-text-group\">\r\n            <div class=\"detail-text\">\r\n                <h4><span>25</span><span class=\"detail-explain\">Sessions<br>completed</span></h4>\r\n            </div>\r\n            <div class=\"detail-text\">\r\n                <h4><span>70</span><span class=\"detail-explain\">Total<br> sessions</span></h4>\r\n            </div>\r\n            <div class=\"detail-text\">\r\n                <h4><span>36%</span><span class=\"detail-explain\">of program<br>completed</span></h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <osg-workout-list></osg-workout-list>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-log/components/main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/workout-log/components/main.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkoutLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutLogComponent", function() { return WorkoutLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkoutLogComponent = /** @class */ (function () {
    function WorkoutLogComponent() {
    }
    WorkoutLogComponent.prototype.ngOnInit = function () {
    };
    WorkoutLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-log',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/workout-log/components/main.component.html")
        })
    ], WorkoutLogComponent);
    return WorkoutLogComponent;
}());



/***/ }),

/***/ "./src/app/workout-log/components/workout-list/workout-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/workout-log/components/workout-list/workout-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"workout-week-item\">\r\n    <div class=\"workout-item-title\">\r\n        <p>Week 8:</p>\r\n    </div>\r\n    <div class=\"workout-item workout-item-completed\">\r\n        <div class=\"workout-item-text\">\r\n            <div class=\"workout-item-status\">\r\n                <p class=\"date-status\"><span>Monday, May 6</span><span class=\"completed\">\r\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"check-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-check-square fa-w-14 fa-lg\"><path fill=\"currentColor\" d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z\" class=\"\"></path></svg>\r\n                        Completed</span></p>\r\n                <p class=\"item-type\">Chest, Shoulders & Trcipes</p>\r\n                <p class=\"item-title\">German Volume Training</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"workout-item-button deactive\">\r\n            <a class=\"start_btn\">Start</a>\r\n            <a class=\"edit_btn\" (click)=\"edit('Monday, May 6')\"><img src=\"assets/images/icons/eye.png\"></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"workout-item workout-item-completed\">\r\n        <div class=\"workout-item-text\">\r\n            <div class=\"workout-item-status\">\r\n                <p class=\"date-status\"><span>Wednsday, May 8</span><span class=\"completed\">\r\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"check-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-check-square fa-w-14 fa-lg\"><path fill=\"currentColor\" d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z\" class=\"\"></path></svg>\r\n                        Completed</span></p>\r\n                <p class=\"item-type\">Back & Biceps</p>\r\n                <p class=\"item-title\">German Volume Training</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"workout-item-button deactive\">\r\n            <a class=\"start_btn\">Start</a>\r\n            <a class=\"edit_btn\" (click)=\"edit('Wednsday, May 8')\"><img src=\"assets/images/icons/eye.png\"></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"workout-item workout-item-missed\">\r\n        <div class=\"workout-item-text\">\r\n            <div class=\"workout-item-status\">\r\n                <p class=\"date-status\"><span>Friday, May 10</span><span class=\"missed\">\r\n                        <svg ><circle cx=\"5\" cy=\"5\" r=\"1\" stroke=\"#a0a0a0\" stroke-width=\"3\" /></svg>\r\n                        Missed</span></p>\r\n                <p class=\"item-type\">Quadriceps, Hamstrings, Calves</p>\r\n                <p class=\"item-title\">Chest, Shoulders & Trcipes</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"workout-item-button deactive\">\r\n            <a class=\"start_btn\">Start</a>\r\n            <a class=\"edit_btn\" (click)=\"edit('Friday, May 10')\"><img src=\"assets/images/icons/eye.png\"></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"workout-week-item\">\r\n    <div class=\"workout-item-title\">\r\n        <p>Week 9:</p>\r\n    </div>\r\n    <div class=\"workout-item workout-item-today\">\r\n        <div class=\"workout-inner-today\">\r\n            <div class=\"workout-item-text\">\r\n                <div class=\"workout-item-status\">\r\n                    <p class=\"date-status\"><span>{{date1}}</span><span class=\"today\">\r\n                            <svg ><circle cx=\"5\" cy=\"5\" r=\"1\" stroke=\"#a0a0a0\" stroke-width=\"3\" /></svg>\r\n                            Today</span></p>\r\n                    <p class=\"item-type\">Quadriceps, Hamstrings, Calves</p>\r\n                    <p class=\"item-title\">Chest, Shoulders & Trcipes</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"workout-item-button\">\r\n                <a class=\"start_btn\" (click)=\"start(date1)\">Start</a>\r\n                <a class=\"edit_btn\" (click)=\"edit(date1)\"><img src=\"assets/images/icons/eye.png\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"workout-item workout-item-upcoming\">\r\n        <div class=\"workout-item-text\">\r\n            <div class=\"workout-item-status\">\r\n                <p class=\"date-status\"><span>{{date2}}</span><span class=\"upcoming\">\r\n                        <svg ><circle cx=\"5\" cy=\"5\" r=\"1\" stroke=\"#a0a0a0\" stroke-width=\"3\" /></svg>\r\n                        Upcoming</span></p>\r\n                <p class=\"item-type\">Chest, Shoulders & Trcipes</p>\r\n                <p class=\"item-title\">German Volume Training</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"workout-item-button\">\r\n            <a class=\"start_btn\" (click)=\"start(date2)\">Start</a>\r\n            <a class=\"edit_btn\" (click)=\"edit(date2)\"><img src=\"assets/images/icons/eye.png\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"workout-item workout-item-upcoming\">\r\n        <div class=\"workout-item-text\">\r\n            <div class=\"workout-item-status\">\r\n                <p class=\"date-status\"><span>{{date3}}</span><span class=\"upcoming\">\r\n                        <svg ><circle cx=\"5\" cy=\"5\" r=\"1\" stroke=\"#a0a0a0\" stroke-width=\"3\" /></svg>\r\n                        Upcoming</span></p>\r\n                <p class=\"item-type\">Back & Biceps</p>\r\n                <p class=\"item-title\">German Volume Training</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"workout-item-button\">\r\n            <a class=\"start_btn\" (click)=\"start(date3)\">Start</a>\r\n            <a class=\"edit_btn\" (click)=\"edit(date3)\"><img src=\"assets/images/icons/eye.png\"></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/workout-log/components/workout-list/workout-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/workout-log/components/workout-list/workout-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkoutListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutListComponent", function() { return WorkoutListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutListComponent = /** @class */ (function () {
    function WorkoutListComponent(router) {
        this.router = router;
        this.date1 = 'Monday, May 13';
        this.date2 = 'Wednsday, May 15';
        this.date3 = 'Wednsday, May 17';
    }
    WorkoutListComponent.prototype.ngOnInit = function () {
    };
    WorkoutListComponent.prototype.start = function (date) {
        var type = "start";
        this.router.navigate(['/workout-detail', date, type]);
    };
    WorkoutListComponent.prototype.edit = function (date) {
        var type = "complete";
        this.router.navigate(['/workout-detail', date, type]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WorkoutListComponent.prototype, "date1", void 0);
    WorkoutListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-workout-list',
            template: __webpack_require__(/*! ./workout-list.component.html */ "./src/app/workout-log/components/workout-list/workout-list.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WorkoutListComponent);
    return WorkoutListComponent;
}());



/***/ }),

/***/ "./src/app/workout-log/workout-log.module.ts":
/*!***************************************************!*\
  !*** ./src/app/workout-log/workout-log.module.ts ***!
  \***************************************************/
/*! exports provided: WorkoutLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutLogModule", function() { return WorkoutLogModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/workout-log/components/main.component.ts");
/* harmony import */ var _components_workout_list_workout_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/workout-list/workout-list.component */ "./src/app/workout-log/components/workout-list/workout-list.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WorkoutLogModule = /** @class */ (function () {
    function WorkoutLogModule() {
    }
    WorkoutLogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutLogComponent"],
                _components_workout_list_workout_list_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            providers: [],
        })
    ], WorkoutLogModule);
    return WorkoutLogModule;
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

module.exports = __webpack_require__(/*! D:\Development\xampp\htdocs\laravel.osg.com\resources\ngx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map