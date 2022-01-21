import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import * as moment from 'moment';

import * as c3 from 'c3';
import { StoreService } from '../../../store/store.service';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
    selector: 'osg-strength-athlete-performance-graph',
    templateUrl: './performance-graph.component.html'
})
export class StrengthAthletePerformanceGraphComponent implements OnInit {

  @Input() applicationUser: ApplicationUser;
  @Input() weeks_info: [];

  chart: any;

  graphDataFlagSubscription: Subscription;

  // get graphData():

  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.refreshGraph();
    this.graphDataFlagSubscription = this.store.graphDataFlagObservable$.subscribe(() => {
      this.refreshGraph();
      // this.chart.data.columns.splic(0, 1, )
    });
  }

  refreshGraph = () => {

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let data = this.store.getGraphData();
    console.log('>>> data: ', data);
    console.log(">>> performance-graph component init")
    if (data.loads.length == 0) return;

    let lines = []
    let dates = ['x'];
    let year = 2000;
    for (let i = 1; i < data.loads.length; i++) {
      dates.push(String(year) + '-01-01');
      year++;
    }

    for (let i = 0; i < (dates.length - 8) / 7; i ++) {
      lines.push({
        value: String(2006 + i * 7) + '-06-06',
        text: ''
      })
    }

    this.chart = c3.generate({
        bindto: `#performance-graph`,
        size: {
            height: 300,
            width: 1250
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
                data1: '#ff0000',
                data2: '#800080',
                data3: '#007bff',
                data4: '#ffff00'
            },
            columns: [
              dates,
              data.stress_graph,
              data.sleep_graph,
              data.loads,
              data.energy_graph,
              // ['x', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'],
              // ['data1', null, null, 1.7, 1.9, 2.1, 1.9, 1.7, 1.5, 1.3, 1.1, 0.1, -0.9, -1.1, -1.3, -1.5, -1.7, -2.1, -2.5, -2.9, -2.6, -0.1, 2.4, 2.2, 2.0, 1.8, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0, 4.1],
              // ['data2', 3.0, 3.2, 3.3, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 2.6, 2.2, 1.9, 2.1, 2.3, 2.5, 2.3, 2.2, 2.1, 1.9, 1.4, 0, -1.4, -1.7, -2.0, -2.3, -1.7, -1.1, 0.5, 1.1, 1.7, 1.9, 2.1, 2.3, 2.5, 2.6],
              // ['data3', 2.3, 0, 1.3, 0, 2.0, 0, 0, 1.3, 0, 0.6, 0, -0.5, 0, 0, -1.0, 0, -1.5, 0, -2, 0, 0, -0.5, 0, -1.0, 0, 0.5, 0, 0, 0.7, 0, 1.5, 0, 1.0, 0, 0],
              // ['data4', -0.8, -0.8, -0.8, -0.1, 0.6, 1.3, 2.0, 2.7, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 3.9, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.8, 3.7, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.1, 4.0, 4.1, 4.4, 4.7],
            ],
            axes: {
              data1: 'y',
              data2: 'y',
              data3: 'y',
              data4: 'y'
            },
            types:{
              data1: 'line',
              data2: 'line',
              data3: 'bar',
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                  culling: false,
                  rotate: 90,
                  format: (x: Date): string => {
                    let index = dates.findIndex(el => moment(el).format('YYYY-MM-DD') === moment(x.getTime()).format('YYYY-MM-DD'));

                    if (data.days[index] == undefined) return '';

                    let day = days[index % 7]
                    return day;
                  },
                },
                height: 50
            },
            y: {
                min: -5,
                max: 5,
                tick: {
                    format: function (d) {
                      switch (d) {
                        case -6:
                          return "0"
                        case 0:
                          return "5"
                        case 5:
                          return "10"
                      }
                    },
                    values: [-6, 0, 5]
                }
            }
        },
        bar: {
            width: {
              ratio: 0.5
            }
        },
        grid: {
            x: {
            lines: lines
            },
            y: {
                lines: [
                  { value: 0, text: '' },
                  { value: 5, text: '' }
                ]
            }
        },
        onrendered: function () {
          let $graphic = $(`.fatigue-graph #performance-graph svg g`);
          $($graphic[0]).attr("style", "transform: translate(40px, 4.5px);");

          $(".fatigue-graph #performance-graph .c3-chart > .c3-event-rects").attr('style', 'fill-opacity: 1');
          $(".fatigue-graph #performance-graph .c3-chart > .c3-event-rects > .c3-event-rect").attr('y', '20').attr('width', '1209').attr('height', '103').attr('style', 'fill: #f1f7e2');

          var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute('x', '0');
          rect.setAttribute('y', '123');
          rect.setAttribute('width', '1209');
          rect.setAttribute('height', '123');
          rect.setAttribute('style', 'fill: #ffead1;');

          $(".fatigue-graph #performance-graph .c3-chart > .c3-event-rects ").append(rect);

          let $x_axis = $(`.fatigue-graph #performance-graph .c3-axis-x`);
          $.each($x_axis, (i, el) => {
            let $ticks = $(el).find('.tick');

            $.each($ticks, (j, els) => {
              var temp = $(els).attr('transform').split(' ');
              var origin_transform = temp[0].slice(0, -1);
              $(els).attr('style', 'transform: ' + origin_transform + "px, -4px);");
              $(els).find('line').attr('y2', '8').attr('style', 'stroke-width: 2px');
              $(els).find('text').attr("style", "text-anchor: start;").attr("style", "display: block;").attr("style", "transform: rotate(90deg) translate(18px, 0px);");
            });
          });

          let $data_1 = $(`.fatigue-graph #performance-graph .c3-circles-data1 > circle`);
          $.each($data_1, (i, el) => {
            if (data.stress[i] == null)
              $(el).attr('style', 'opacity: 0');
          });
          let $data_2 = $(`.fatigue-graph #performance-graph .c3-circles-data2 > circle`);
          $.each($data_2, (i, el) => {
            if (data.sleep[i] == null)
              $(el).attr('style', 'opacity: 0');
          });
          let $data_4 = $(`.fatigue-graph #performance-graph .c3-circles-data4 > circle`);
          $.each($data_4, (i, el) => {
            if (data.energy[i] == null)
              $(el).attr('style', 'opacity: 0');
          });

        }
    });
  }
}
