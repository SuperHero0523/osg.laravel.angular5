"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
exports.DBKEYS = { THEME: 'tYp95ymECHOESt', TOKEN: 'tYp95ymECHOESk' };
var StoreService = /** @class */ (function () {
    function StoreService() {
        this.localdb = window.localStorage;
        this.calendarFlagSubject = new rxjs_1.Subject();
        this.calendarFlagObservable$ = this.calendarFlagSubject.asObservable();
        this.graphDataFlagSubject = new rxjs_1.Subject();
        this.graphDataFlagObservable$ = this.graphDataFlagSubject.asObservable();
        // Initialize the app state
        this.subject = new rxjs_1.BehaviorSubject({
            cur_calendar_id: null,
            calendar_workout_logs: null,
            required_preinterview: false,
            required_postinterview: false,
            graph_data: null
        });
        this.state$ = this.subject.asObservable();
    }
    Object.defineProperty(StoreService.prototype, "store", {
        // Getter of the last store value emitted
        get: function () {
            return this.subject.getValue();
        },
        // Push new state into the observable
        set: function (val) {
            this.subject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    StoreService.prototype.setCalendarFlag = function () {
        this.calendarFlagSubject.next();
    };
    StoreService.prototype.setGraphDataFlag = function () {
        this.graphDataFlagSubject.next();
    };
    StoreService.prototype.setCalendarWorkoutLogs = function (calendar_workout_logs) {
        console.log(">>> set calendar workout logs: ", calendar_workout_logs);
        this.store = __assign(__assign({}, this.store), { calendar_workout_logs: calendar_workout_logs });
    };
    StoreService.prototype.getCalendarWorkoutLogs = function () {
        return this.store.calendar_workout_logs;
    };
    StoreService.prototype.setRequiredPreinterview = function (required_preinterview) {
        this.store = __assign(__assign({}, this.store), { required_preinterview: required_preinterview });
    };
    StoreService.prototype.getRequiredPreinterview = function () {
        return this.store.required_preinterview;
    };
    StoreService.prototype.setRequiredPostinterview = function (required_postinterview) {
        this.store = __assign(__assign({}, this.store), { required_postinterview: required_postinterview });
    };
    StoreService.prototype.getRequiredPostinterview = function () {
        return this.store.required_postinterview;
    };
    StoreService.prototype.setCurCalendarId = function (id) {
        this.store = __assign(__assign({}, this.store), { cur_calendar_id: id });
    };
    StoreService.prototype.getCurCalendarId = function () {
        return this.store.cur_calendar_id;
    };
    StoreService.prototype.setGraphData = function (data) {
        this.store = __assign(__assign({}, this.store), { graph_data: data });
    };
    StoreService.prototype.getGraphData = function () {
        return this.store.graph_data;
    };
    StoreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;

//# sourceMappingURL=store.service.js.map
