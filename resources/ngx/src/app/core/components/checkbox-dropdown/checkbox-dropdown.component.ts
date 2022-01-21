import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'osg-checkbox-dropdown',
    templateUrl: './checkbox-dropdown.component.html'
})
export class CheckboxDropdownComponent {
  @HostBinding('class') css: string = 'dropdown black-dropdown with-label';
  open: boolean = false;

  private _value: string = "All";
  @Input() set value(val: string) {
    this._value = val;
  }
  get value(): string {
    return this._value;
  }

  private _selection: any;
  @Input() set selection(sel: any) {
    this._selection = sel;
  }
  get selection(): any {
    return this._selection;
  }

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() label: string = '';

  private _options: any;
  @Input() set options(o: any) {
    this._options = o;
  }
  get options(): any {
      return this._options;
  }

  keys = []

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // if (this.options != undefined)
    //   this.selection = this.options.length ? this.options[0] : '';

    console.log('>>>> options: ', this.options);
    console.log('>>> selection: ', this.selection);
    this.keys = Object.keys(this.options);
  }

  toggle() {
      this.open = !this.open;
  }

  updateValues() {
    this.valueChange.emit(this.selection);
    this.change.emit(this.selection);
  }

  /**
   * this is called when the user checks a cell
   * @param option
   */
  select(key) {
    console.log('>>>> check option: ', key);
    this.selection[key] = !this.selection[key];
    console.log('>>>> selection: ', this.selection);
    this.updateValues();
  }

  /**
   * this is called when the user click "check all"
   */
  selectAll() {
    console.log('>>>> check all');
    for (let key of Object.keys(this.options)) {
      this.selection[key] = true;
    }
    this.updateValues();
  }

  /**
   *
   */
  popup() {
      this.open = !this.open;
  }
}
