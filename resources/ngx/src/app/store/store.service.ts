import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export const DBKEYS = {THEME: 'tYp95ymECHOESt', TOKEN: 'tYp95ymECHOESk'};

export interface IFilter {
  dateMode: string;
  startDate: string;
  endDate: string;
}

export interface AppState {
  cur_calendar_id: number;
  calendar_workout_logs: any;
  required_preinterview: boolean;
  required_postinterview: boolean;
  graph_data: any;
}

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  // Initial state in BehaviorSubject's constructor
  private readonly subject: BehaviorSubject<AppState>;

  // Exposed observable$ store stream
  readonly state$: Observable<AppState>;

  // Getter of the last store value emitted
  private get store(): AppState {
    return this.subject.getValue();
  }

  // Push new state into the observable
  private set store(val: AppState) {
    this.subject.next(val);
  }

  private graphDataFlagSubject = new Subject<any>();
  graphDataFlagObservable$ = this.graphDataFlagSubject.asObservable();

  public setGraphDataFlag() {
    this.graphDataFlagSubject.next();
  }

  private calendarWorkoutLogsFlagSubject = new Subject<any>();
  calendarWorkoutLogsFlagObservable$ = this.calendarWorkoutLogsFlagSubject.asObservable();

  public setCalendarWorkoutLogsFlag() {
    this.calendarWorkoutLogsFlagSubject.next();
  }

  constructor() {

    // Initialize the app state
    this.subject = new BehaviorSubject<AppState>({
      cur_calendar_id: null,
      calendar_workout_logs: null,
      required_preinterview: false,
      required_postinterview: false,
      graph_data: null,
    });
    this.state$ = this.subject.asObservable();
  }

  public setCalendarWorkoutLogs(calendar_workout_logs) {
    console.log(">>> set calendar workout logs: ", calendar_workout_logs);
    this.store = { ...this.store, calendar_workout_logs: calendar_workout_logs }
    this.setCalendarWorkoutLogsFlag();
  }
  public getCalendarWorkoutLogs() {
    return this.store.calendar_workout_logs
  }

  public setRequiredPreinterview(required_preinterview) {
    this.store = { ...this.store, required_preinterview: required_preinterview }
  }
  public getRequiredPreinterview() {
    return this.store.required_preinterview;
  }

  public setRequiredPostinterview(required_postinterview) {
    this.store = { ...this.store, required_postinterview: required_postinterview }
  }
  public getRequiredPostinterview() {
    return this.store.required_postinterview;
  }

  public setCurCalendarId(id) {
    this.store = { ...this.store, cur_calendar_id: id}
  }
  public getCurCalendarId() {
    return this.store.cur_calendar_id;
  }

  public setGraphData(data) {
    this.store = { ...this.store, graph_data: data }
    this.setGraphDataFlag();
  }
  public getGraphData() {
    return this.store.graph_data;
  }
}
