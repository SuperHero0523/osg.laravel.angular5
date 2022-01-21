import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';
@Component({
    selector: 'osg-select',
    templateUrl: './select.component.html'
})
export class SelectComponent {
  @HostBinding('class') css: string = 'dropdown black-dropdown with-label';
  open: boolean = false;
  selection: string = '';

  @Input() value: any = null;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() label: string = '';
  private _options: string[];
  @Input() set options(o: string[]){
    this._options = o;
    if (o != undefined)
      this.selection = o[0];
  }

  @Input() type: string;

  get options(): string[]{
      return this._options;
  }

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.options != undefined)
      this.selection = this.options.length ? this.options[0] : '';

    console.log('--->>>> this.value: ', this.value)
    if (this.value != null)
      this.selection = this.value;
  }

  toggle() {
      this.open = !this.open;
  }

  select(o: string) {
    console.log('>>>> drop down select: ', o)
    console.log('>>>> this.selection: ', this.selection)
    if (this.selection != o || o == this.options[0]) {
      this.selection = o;

      this.valueChange.emit(o);
      this.change.emit(o);
    }
    this.toggle();
  }

  popup() {
      this.open = !this.open;
  }
}
