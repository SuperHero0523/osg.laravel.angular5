import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import * as c3 from 'c3';
import { DataService } from '../../../data.service';
declare var $: any;
@Component({
    selector: 'osg-progressive-overload-graph',
    templateUrl: './progressive-overload-graph.component.html'
})
export class ProgressiveOverloadGraphComponent implements OnInit {
  @Input() profile_view: boolean = false;

  public static counter: number = 0;
  private _id: number;
  graph_page_num = 0;
  rendered_graph_data = {
    total_volume: [],
    average_rm: [],
    total_load: [],
    frequency: [],
    y_axis: [],
    x_axis: [],
  };
  rendered_weeks = [];

  private _cur_index = -1;

  get graph_data() {
    return this.dataService.graph_data;
  }
  set graph_data(val) {
    this.dataService.graph_data = val;
  }

  get graph_data_change() {
    return this.dataService.graph_data_change$;
  }

  get weeks() {
    return this.dataService.weeks;
  }

  get week_types() {
    return this.dataService.week_types;
  }

  get cur_index() {
    return this._cur_index;
  }
  set cur_index(val) {
    this._cur_index = val;
  }

  get cur_body_part() {
    return this.dataService.cur_body_part;
  }
  set cur_body_part(val) {
    this.dataService.cur_body_part = val;
  }

  get first_program() {
    return this.dataService.first_program;
  }

  @Input() applicationUser: ApplicationUser;

  constructor(private dataService: DataService) {
      this._id = ++ProgressiveOverloadGraphComponent.counter;
  }

  ngOnInit(): void {

    console.log('>>> profile view: ', this.profile_view);

    this.graph_data_change.subscribe((change) => {

      // already page loaded and select body part
      let bExist = false;
      let index = 0;
      this.graph_data.forEach(data => {
        if (!data.empty && this.cur_index == index) {
          bExist = true;
        }
        index++;
      })

      if (!bExist) {
        let cur_index = -1;
        let index = 0;
        this.graph_data.forEach(data => {
          if (!data.empty && cur_index == -1) {
            cur_index = index;
          }
          index++;
        })
        this.cur_index = Math.max(cur_index, 0);

      }

      this.ngAfterViewInit();

      console.log('>>> weeks types: ', this.week_types);
    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('>>> progressive overload graph destroy')
    this._cur_index = -1;
  }


  ngAfterViewInit(): void {
    console.log('------ ngAuterViewInit');

    this.rendered_graph_data = {
      total_volume: ['Total Volume'],
      average_rm: ['Average Intensity'],
      total_load: ['Total Volume Load'],
      frequency: ['Frequency'],
      y_axis: ['y_axis'],
      x_axis: [],
    };
    this.rendered_weeks = [];
    console.log('---- graph_data: ', this.graph_data);
    console.log('---- cur_index: ', this.cur_index);
    this.cur_body_part = (this.cur_index < this.graph_data.length && this.graph_data[this.cur_index] != undefined && !this.graph_data[this.cur_index].empty) ? this.graph_data[this.cur_index].name : '';
    let max_value = 10;

    for (var i = this.graph_page_num; i < this.graph_page_num + 4; i++) {
      this.rendered_graph_data.x_axis.push("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");

      if (this.weeks != undefined && i < this.weeks.length) {
        this.rendered_weeks.push(this.weeks[i]);

        for (var j = 0; j < 7; j ++) {
          this.rendered_graph_data.total_volume.push(this.graph_data[this.cur_index].total_volume[i * 7 + j + 1] == null ? null : parseInt(this.graph_data[this.cur_index].total_volume[i * 7 + j + 1]));
          this.rendered_graph_data.average_rm.push(this.graph_data[this.cur_index].average_rm[i * 7 + j + 1] == null ? null : parseInt(this.graph_data[this.cur_index].average_rm[i * 7 + j + 1]));
          this.rendered_graph_data.total_load.push(this.graph_data[this.cur_index].total_load[i * 7 + j + 1] == null ? null : parseInt(this.graph_data[this.cur_index].total_load[i * 7 + j + 1]));
          // this.rendered_graph_data.frequency.push(this.graph_data[this.cur_index].frequency[i * 7 + j + 1] == null ? null : parseInt(this.graph_data[this.cur_index].frequency[i * 7 + j + 1]));
          this.rendered_graph_data.frequency.push(this.graph_data[this.cur_index].frequency[i * 7 + j + 1] == null ? null : 42);

          let y_axis_value = 10;
          if (this.graph_data[this.cur_index].total_load[i * 7 + j + 1] != null)
            y_axis_value = parseInt(this.graph_data[this.cur_index].total_load[i * 7 + j + 1]);

          this.rendered_graph_data.y_axis.push(y_axis_value);
          max_value = Math.max(max_value, y_axis_value);

        }
      } else {
        this.rendered_weeks.push([null, null, null, null, null, null, null]);

        for (var j = 0; j < 7; j++) {
          this.rendered_graph_data.total_volume.push(null);
          this.rendered_graph_data.average_rm.push(null);
          this.rendered_graph_data.total_load.push(null);
          this.rendered_graph_data.frequency.push(null);
          this.rendered_graph_data.y_axis.push(10);
        }

      }
    }
    console.log('rendered_graph_data = ', this.rendered_graph_data);

    var self = this;
    var chart = c3.generate({
      bindto: `#${this.progressiveOverloadGraphId}`,
      size: {
          height: 300
      },
      legend: {
          show: false
      },
      line: {
        connectNull: true,
      },

      grid: {
        x: {
          lines:
            this.rendered_weeks.map((item, index)=>{
              return { value: (index + 1) * 7 - 0.5 }
            })
        }
      },
      transition: {
        duration: 1000
      },
      point:{
        r: 10,
        show: false
      },
      data: {
          // x: 'x',
          colors: {
              'Total Volume': '#128cf3',
              'Average Intensity': '#e91212',
              'Total Volume Load': '#4fb100',
              'Frequency': '#4fb100'
          },
          columns: [
            this.rendered_graph_data.total_volume,
            this.rendered_graph_data.average_rm,
            this.rendered_graph_data.total_load,
            this.rendered_graph_data.frequency
          ],
          axes: {
            'Total Volume': 'y',
            'Average Intensity': 'y2',
            'Total Volume Load': 'y',
            // y_axis: 'y',
            'Frequency': 'y2'
          },
          types:{
              'Frequency': 'scatter'
          },
      },
      axis: {
        y: {
          min: 10,
          // max: max_value,
          // show: false,
          label: { text: 'Volumn load', position: 'outer-middle' }
        },
        y2: {
          min: 10,
          max: 100,
          show: true,
          label: { text: 'Average intensity', position: 'outer-middle' }
        },
        x: {
          height: 30,
          type: 'category',
          // categories: this.graph_data[this.cur_index] ? this.graph_data[this.cur_index].x : [],
          tick: {
            format: function(x) {
              if (typeof x == 'number') {
                return self.rendered_graph_data.x_axis[x];
              }
            }
          }
        }
      },

      tooltip: {
        format: {
          title: function (d) {
            switch (d % 7) {
              case 0: return "Monday";
              case 1: return "Tuesday";
              case 2: return "Wednesday";
              case 3: return "Thursday";
              case 4: return "Friday";
              case 5: return "Saturday";
              case 6: return "Sunday";
            }
            console.log('title: ', d);
            return d;
          },
          // this formats tooltip title
          value: function (value, ratio, id) {
            console.log(`value: ${value}, ratio: ${ratio}, id: ${id}`)
            // var format = id === 'data1' ? d3.format(',') : function (d) { return  d + '%'; };
            // if (id == 'Frequency') return value / 14;
            if (id == 'Frequency') return '';
            if (id == 'Total Volume')  return value / 10;

            return value;
          }
          // this formats y and y2 values
        }
      },
    });
  }

  get progressiveOverloadGraphId(): string {
      return `performance-graph-${this._id}`;
  }

  onChangeBodyPart = (index) => {
    if (this.cur_index == index) return;

    this.cur_index = index;
    this.ngAfterViewInit();
  }

  onGraphNext = () => {
    if (this.graph_page_num + 4 < this.weeks.length) {
      this.graph_page_num += 4;
      this.ngAfterViewInit();
    }
  }

  onGraphPrev = () => {
    if (this.graph_page_num - 4 >= 0) {
      this.graph_page_num -= 4;
      this.ngAfterViewInit();
    }
  }

}
