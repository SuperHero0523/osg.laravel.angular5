import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import * as c3 from 'c3';
import { stringify } from '@angular/core/src/util';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { LEVELS, LEVEL_RATIOS } from '../../../constants';
import { DataService } from '../../../data.service';
declare var $: any;

const GRAPH_HEIGHT = 300;
const MAX_LOAD = 200;
const GRAPH_WIDTH = 450;
const FULL_GRAPH_WIDTH = 550;
const FULL_GRAPH_HEIGHT = 420;
@Component({
  selector: 'osg-strength-athlete-trophy',
  templateUrl: './trophy.component.html'
})
export class StrengthAthleteTrophyComponent implements OnInit {
  public static counter: number = 0;
  public _id: number;
  @Input() applicationUser: ApplicationUser;
  @Input() title: string;
  @Input() exerciseList: any[];

  chart1: any = null;
  chart2: any = null;
  chart3: any = null;

  sel_exercise_id = 0;

  // result values
  ratios: any = {
    age_ratio: 0,
    combined_ratio: 0,
    height_ratio: 0,
    level_ratio: 0,
    muscle_type_ratio: 0,
    waist_hip_ratio_ratio: 0,
    weight_ratio: 0,
  };
  total_increased: number = 0;
  total_days: number = 0;
  entire_period: string = '';
  color: string;

  program_list: any[];
  showing_list: any[];

  descriptionDivWidth = [147, 147, 147];

  data_count: number = 3;
  graph_data: string[][] = [];

  get profile_user() {
    return this.dataService.profile_user;
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    this._id = ++StrengthAthleteTrophyComponent.counter;
    this.graph_data = [
      ['x', '0', '0.5', '1', '2', '2.5', '3', '4', '5', '6', '6.5', '7', '7.5', '8', '9', '9.5', '10'],
      ['data1', null, '75', '78', '83', null, null, null, null, null, null, null, null, null, null, null],
      // ['data2', null, null, null, null, null, '90', '94', '98', '102', null, null, null, null, null, null],
      // ['data3', null, null, null, null, null, null, null, null, null, null, '108', '115', '122', '135', null]
    ];
  }

  ngOnInit(): void {
    this.getTropyData();
  }

  onClickExercise = (exercise_id) => {

    this.sel_exercise_id = exercise_id;
    this.getTropyData();
  }

  initValues() {
    this.ratios = {
      age_ratio: 0,
      combined_ratio: 0,
      height_ratio: 0,
      level_ratio: 0,
      muscle_type_ratio: 0,
      waist_hip_ratio_ratio: 0,
      weight_ratio: 0,
    };
    this.total_increased = 0;
    this.total_days = 0;
    this.entire_period = '';
    this.color = 'white';

    this.program_list = [];
    this.showing_list = [];
  }

  getTropyData() {
    if (this.exerciseList == undefined || this.exerciseList == null || this.exerciseList.length == 0) return;

    if (this.sel_exercise_id == 0)
      this.sel_exercise_id = this.exerciseList[0].id;

    let url = 'profile/getTrophyInformation?exercise_id=' + this.sel_exercise_id;
    if (this.profile_user != -1)
      url += '&user_id=' + this.profile_user;

    this.http.get(url).subscribe(async (resp: any) => {
      // console.log('>>> get tropy information data resp: ', resp);
      this.initValues();
      if (resp.result.ratios != undefined)
        this.ratios = resp.result.ratios;

      let entirePeriod = '';
      let entireTotalDays = 0;
      let programIndex = 0;
      let firstProgramRm = 0;
      for (let program of resp.result.programs) {
        let calendarData = JSON.parse(program.data);

        // console.log('>>> calendar data: ', calendarData);
        // get first day
        let preEmptyDays = 0;
        let index = 0;
        for (let plan of calendarData[0]) {
          if (plan == null || plan == 'null') {
            index++;
          } else {
            preEmptyDays = index;
            break;
          }
        }

        program.period = moment(program.start_date).add(index, 'days').format('MM.DD.YY');
        if (programIndex == 0) {
          entirePeriod = moment(program.start_date).add(index, 'days').format('MMM. YYYY');
          firstProgramRm = parseFloat(program.pre_rm);
        }

        // get last day
        let lastEmptyDays = 0;
        index = 0;
        for (let i = calendarData[calendarData.length - 1].length - 1; i >= 0; i--) {
          let plan = calendarData[calendarData.length - 1][i];
          if (plan == null || plan == 'null') {
            index++;
          } else {
            lastEmptyDays = index;
            break;
          }
        }

        program.period += " - " + moment(program.start_date).add(program.weeks, 'weeks').subtract(lastEmptyDays + 1, 'days').format('MM.DD.YY');

        if (programIndex == resp.result.programs.length - 1) {
          entirePeriod += " - " + moment(program.start_date).add(program.weeks, 'weeks').subtract(lastEmptyDays + 1, 'days').format('MMM. YYYY');
          const lastProgramRm = parseFloat(program.post_rm);
          this.total_increased = Math.round((lastProgramRm - firstProgramRm) * 100 / firstProgramRm);
        }

        program.totalDays = 7 * program.weeks - (preEmptyDays + lastEmptyDays);
        entireTotalDays += program.totalDays;

        programIndex++;
      }

      if (this.total_increased >= 50)
        this.color = 'green';
      else if (this.total_increased >= 20)
        this.color = 'orange';
      else if (this.total_increased > 0)
        this.color = 'blue';
      else
        this.color = 'white';

      // console.log('>>> total increased: ', this.total_increased, this.color);

      this.total_days = entireTotalDays;
      this.entire_period = entirePeriod;

      this.program_list = JSON.parse(JSON.stringify(resp.result.programs));

      /// This is the code for testing
      // let delta = 100;
      // while (this.program_list.length < 7) {
        // for (let program of resp.result.programs) {
        //   let newProgram = JSON.parse(JSON.stringify(program));
        //   newProgram.id += 100;
        //   newProgram.period.replace('.20', '.21');
        //   this.program_list.push(newProgram);
        // }

      //   delta += 100;
      // }

      let index = Math.max(this.program_list.length - 3, 0);
      this.getShowingList(index);

      // console.log('>>> showing list: ', this.showing_list);

      if (this.program_list == null || this.program_list == undefined) return;

      let scrollElement = document.getElementById('scroll' + this._id);
      if (this.program_list.length > 3 && scrollElement != null) {
        let scrollPos = Math.max(0, this.program_list.length - 3) * 150 + 7;  // 7 is vertical scroll width
        await new Promise((resolve) => {
          let interval = setInterval(() => {
            if (scrollElement.scrollLeft == scrollPos) {
              clearInterval(interval);
              return resolve(0);
            }
            scrollElement.scrollLeft = scrollPos;
          }, 100);
        })
        console.log('>>> scroll pos: ', document.getElementById('scroll' + this._id).scrollLeft);
      }

    })
  }

  ngAfterViewInit(): void {
    return;
    var chart = c3.generate({
      bindto: `#${this.firstGraphId}`,
      size: {
        height: 300,
        width: 480
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
          // data2: '#F3A83B',
          // data3: '#F3A83B'
        },
        columns: this.graph_data,
        types: {
          data1: 'area',
          // data2: 'area',
          // data3: 'area'
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
                // case 3:
                //   return "";
                // case 6:
                //   return "";
                // case 7:
                //   return "";
                // case 9:
                //   return "";
              }
            },
            // values: [0.5, 2, 3, 6, 7, 9]
            values: [0.5, 2]
          }
        },
        y: {
          min: 0,
          max: MAX_LOAD,
          padding: {
            bottom: 0,
            top: 0
          },
          tick: {
            format: function (d) {
              switch (d) {
                case 75:
                  return "75"
                case 99:
                  return "99"
                case 127:
                  return "127"
                case 159:
                  return "159"
                case 193:
                  return "193"
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
                  return "Time"
                case 0.375:
                  return "Untrained"
                case 0.495:
                  return "Novice"
                case 0.635:
                  return "Intermediate"
                case 0.795:
                  return "Advanced"
                case 0.965:
                  return "Elite"
              }
            },
            values: [0, 0.375, 0.495, 0.635, 0.795, 0.965]
          }
        }
      },
      grid: {
        // x: {
        //   lines: [
        //     { value: 2.5, text: '' },
        //     { value: 6.5, text: '' }
        //   ]
        // },
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
      // onrendered: () => {
        // $(`#${this.firstGraphId}`).attr('style', 'max-height:430px;');
        // let $lines = $(`#${this.firstGraphId} .c3-chart-lines .c3-chart-line`);
        // $.each($lines, (i, el) => {
        //   let $circles = $(el).find('.c3-circles .c3-circle').filter((i, c) => $(c).css('opacity') === "1");
        //   if($circles.length){
        //     let $first = $($circles[0]), $last = $($circles[$circles.length - 1]), $firstExtra, $lastExtra;
        //     $first.addClass('pretest');
        //     $last.addClass('posttest');
        //     $firstExtra = $first.clone();
        //     $lastExtra = $last.clone();
        //     $firstExtra.addClass('extra');
        //     $lastExtra.addClass('extra');
        //     $first.attr('r', 8);
        //     $last.attr('r', 8);
        //     $firstExtra.attr('r', 4);
        //     $lastExtra.attr('r', 4);
        //     $firstExtra.appendTo($(el).find('.c3-circles'));
        //     $lastExtra.appendTo($(el).find('.c3-circles'));
        //   }
        // })

        // $(`#${this.firstGraphId} .c3`).children(':first-child').children(':nth-child(2)').attr('style', 'transform: translate(50px, 10px);');
        // var circles = $(".c3-chart-lines > .c3-target-data1 > .c3-circles-data1");
        // if (typeof circles[2] != 'undefined') {
        //   circles[2]['childNodes'].forEach((item) => {
        //     Object.keys(item['classList']).map((key, index) => {
        //       var class_names = Object.values(item['classList']);
        //       if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
        //         Object.keys(item['attributes']).map((key, index) => {
        //           if (item['attributes'][key].value.includes('opacity: 1')) {
        //             var className = class_names[class_names.length-1];
        //             $(".c3-chart-lines > .c3-target-data1 > .c3-circles-data1 > ."+className).attr('style', 'opacity: 0 !important;');
        //           }
        //         });
        //       }
        //     });
        //   });
        // }

        // var circles = $(".c3-chart-lines > .c3-target-data2 > .c3-circles-data2");
        // if (typeof circles[2] != 'undefined') {
        //   circles[2]['childNodes'].forEach((item) => {
        //     Object.keys(item['classList']).map((key, index) => {
        //       var class_names = Object.values(item['classList']);
        //       if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
        //         Object.keys(item['attributes']).map((key, index) => {
        //           if (item['attributes'][key].value.includes('opacity: 1')) {
        //             var className = class_names[class_names.length-1];
        //             $(".c3-chart-lines > .c3-target-data2 > .c3-circles-data2 > ."+className).attr('style', 'opacity: 0 !important;');
        //           }
        //         });
        //       }
        //     });
        //   });
        // }

        // var circles = $(".c3-chart-lines > .c3-target-data3 > .c3-circles-data3");
        // if (typeof circles[2] != 'undefined') {
        //   circles[2]['childNodes'].forEach((item) => {
        //     Object.keys(item['classList']).map((key, index) => {
        //       var class_names = Object.values(item['classList']);
        //       if (!class_names.includes('pretest') && !class_names.includes('posttest')) {
        //         Object.keys(item['attributes']).map((key, index) => {
        //           if (item['attributes'][key].value.includes('opacity: 1')) {
        //             var className = class_names[class_names.length-1];
        //             $(".c3-chart-lines > .c3-target-data3 > .c3-circles-data3 > ."+className).attr('style', 'opacity: 0 !important');
        //           }
        //         });
        //       }
        //     });
        //   });
        // }
      // }
    });
    // var descriptions = "<div class='descriptions'>";
    // descriptions+="<div><span>Ladder Strength</span><span>01.03.18 - 30.04.18</span><span><b>5kg</b> increase</span></div>";
    // descriptions+="<div><span>Power Building</span><span>01.05.18 - 31.05.18</span><span><b>8kg</b> increase</span></div>";
    // descriptions+="<div><span>5x5</span><span>01.08.18 - 16.09.18</span><span><b>12kg</b> increase</span></div>";
    // descriptions+="</div>";
    // $(`#${this.firstGraphId}`).append(descriptions);
  }



  get firstGraphId(): string {
    return `performance-graph-${this._id}-1`;
  }

  get secondGraphId(): string {
    return `performance-graph-${this._id}-2`;
  }

  get thirdGraphId(): string {
    return `performance-graph-${this._id}-3`;
  }

  onScroll() {
    let scrollPos = document.getElementById('scroll' + this._id).scrollLeft;
    // console.log(">>> scroll value: ", scrollPos);

    let x = Math.floor(scrollPos / 75);
    if (x % 2 == 1) x++;

    let startIndex = x / 2;
    this.getShowingList(startIndex);
  }

  getShowingList(startIndex) {

    this.showing_list = [];
    if (this.chart1 != null) {
      this.chart1 = this.chart1.destroy();
    }
    if (this.chart2 != null) {
      this.chart2 = this.chart2.destroy();
    }
    if (this.chart3 != null) {
      this.chart3 = this.chart3.destroy();
    }

    let showingTotalDays = 0;
    let totalElite = 0;
    let maxRm = 0;
    for (let i = startIndex; (i < startIndex + 3) && i < this.program_list.length; i++) {
      let program = JSON.parse(JSON.stringify(this.program_list[i]));
      program.increasedKg = (parseFloat(program.post_rm) - parseFloat(program.pre_rm)).toFixed(2).replace(".", ",").replace(",00", "");;
      this.showing_list.push(program);

      showingTotalDays += program.totalDays
      totalElite = Math.max(totalElite, program.elite_value);

      maxRm = Math.max(maxRm, parseFloat(program.pre_rm));
      maxRm = Math.max(maxRm, parseFloat(program.post_rm));
    }

    console.log("max rm: ", maxRm);
    let maxLoad = MAX_LOAD;

    if (maxRm >= (totalElite / 0.91)) {
      maxLoad = MAX_LOAD * (maxRm / totalElite);
    }
    console.log("max load: ", maxLoad);

    let index = 0;
    for (let program of this.showing_list) {
      program.widthRatio = (program.totalDays / showingTotalDays);

      // set level y axis values
      const standY2Values = [0, 0.31, 0.446, 0.555, 0.728, 0.91];
      let y1Ratios = [...standY2Values];

      if (program.elite_value != totalElite) {
        y1Ratios = standY2Values.map((val) => val * (MAX_LOAD / maxLoad));
      }
      program.y1_values = [];
      program.y1_values.push({ axis: Math.floor(MAX_LOAD * y1Ratios[1]), title: Math.floor(program.elite_value * LEVEL_RATIOS.untrained) });
      program.y1_values.push({ axis: Math.floor(MAX_LOAD * y1Ratios[2]), title: Math.floor(program.elite_value * LEVEL_RATIOS.novice) });
      program.y1_values.push({ axis: Math.floor(MAX_LOAD * y1Ratios[3]), title: Math.floor(program.elite_value * LEVEL_RATIOS.intermediate) });
      program.y1_values.push({ axis: Math.floor(MAX_LOAD * y1Ratios[4]), title: Math.floor(program.elite_value * LEVEL_RATIOS.advanced) });
      program.y1_values.push({ axis: Math.floor(MAX_LOAD * y1Ratios[5]), title: program.elite_value });

      program.y2_values = standY2Values.map((val) => val * program.elite_value / totalElite * (MAX_LOAD / maxLoad));
      if (index != 2)
        program.y2_values.splice(0, 0, 0);

      let pre_rm_value = Math.floor(MAX_LOAD * program.pre_rm / program.elite_value * 0.91);
      let post_rm_value = Math.floor(MAX_LOAD * program.post_rm / program.elite_value * 0.91);

      console.log('>>>>> program info: ', program);
      console.log('>>>>> pre_rm_value: ', pre_rm_value);
      console.log('>>>>> post_rm_value: ', post_rm_value);

      // set graph data
      program.graph_data = [
        ['x', '0', '1', '9', '10'],
        ['data1', null, pre_rm_value, post_rm_value, null],
      ]

      // set badge
      program.badge = false;
      switch (program.pre_level) {
        case LEVELS.untrained:
          switch (program.post_level) {
            case LEVELS.novice:
            case LEVELS.intermediate:
            case LEVELS.advanced:
            case LEVELS.elite:
              program.badge = true;
              break;
          }
          break;

        case LEVELS.novice:
          switch (program.post_level) {
            case LEVELS.intermediate:
            case LEVELS.advanced:
            case LEVELS.elite:
              program.badge = true;
              break;
          }
          break;

        case LEVELS.intermediate:
          switch (program.post_level) {
            case LEVELS.advanced:
            case LEVELS.elite:
              program.badge = true;
              break;
          }
          break;

        case LEVELS.advanced:
          switch (program.post_level) {
            case LEVELS.elite:
              program.badge = true;
              break;
          }
          break;
      }

      index++;
    }

    // console.log('>>> showing_list: ', this.showing_list)

    let showing_list = this.showing_list;

    if (showing_list.length > 0)
      this.descriptionDivWidth[0] = showing_list[0].widthRatio * 440;
    if (showing_list.length > 1)
      this.descriptionDivWidth[1] = showing_list[1].widthRatio * 440;
    if (showing_list.length > 2)
      this.descriptionDivWidth[2] = showing_list[2].widthRatio * 440;


    // first graph
    if (showing_list.length > 0) {
      let width = showing_list[0].widthRatio * GRAPH_WIDTH + 27 + 28;
      if (showing_list.length == 1) {
        width += 85 - 13;
      }

      this.chart1 = c3.generate({
        bindto: `#${this.firstGraphId}`,
        size: { height: GRAPH_HEIGHT, width: width },
        legend: { show: false },
        transition: { duration: 1000 },
        data: {
          x: 'x',
          colors: { data1: '#F3A83B' },
          columns: this.showing_list[0].graph_data,
          types: { data1: 'area' }
        },
        axis: {
          x: {
            tick: {
              format: function (d) {
                switch (d) {
                  case 1:
                    return "";
                  case 9:
                    return "";
                }
              },
              values: [1, 9]
            }
          },
          y: {
            min: 0,
            max: maxLoad,
            padding: { bottom: 0, top: 0 },
            tick: {
              format: function (d) {
                for (let value of showing_list[0].y1_values) {
                  if (value.axis == d)
                    return value.title;
                }

              },
              values: showing_list[0].y1_values.map((val) => val.axis)
            },
            label: { text: 'Kg', position: 'outer-top' }
          },
          y2: {
            show: showing_list.length == 1 ? true : false,
            tick: {
              format: function (d) {
                let values = showing_list[0].y2_values;
                switch (d) {
                  case values[1]:
                    return "Time"
                  case values[2]:
                    return "Untrained"
                  case values[3]:
                    return "Novice"
                  case values[4]:
                    return "Intermediate"
                  case values[5]:
                    return "Advanced"
                  case values[6]:
                    return "Elite"
                }
              },
              values: showing_list[0].y2_values
            }
          }
        },
        grid: {
          y: {
            lines: [
              { value: this.showing_list[0].y1_values[0].axis, text: '' },
              { value: this.showing_list[0].y1_values[1].axis, text: '', class: 'label-5' },
              { value: this.showing_list[0].y1_values[2].axis, text: '', position: 'start' },
              { value: this.showing_list[0].y1_values[3].axis, text: '', position: 'start' },
              { value: this.showing_list[0].y1_values[4].axis, text: '', position: 'start' }
            ]
          }
        },
        tooltip: { show: false },
      });

      console.log('>>> after created: ', this.chart1);
    }

    // second graph
    if (showing_list.length > 1) {
      let width = showing_list[1].widthRatio * GRAPH_WIDTH + 28;
      if (showing_list.length == 2) {
        width += 85 - 13;
      }

      this.chart2 = c3.generate({
        bindto: `#${this.secondGraphId}`,
        size: { height: GRAPH_HEIGHT, width: width },
        legend: { show: false },
        transition: { duration: 1000 },
        data: {
          x: 'x',
          colors: { data1: '#F3A83B' },
          columns: this.showing_list[1].graph_data,
          types: { data1: 'area' }
        },
        axis: {
          x: {
            tick: {
              format: function (d) {
                switch (d) {
                  case 1:
                    return "";
                  case 9:
                    return "";
                }
              },
              values: [1, 9]
            }
          },
          y: {
            min: 0,
            max: maxLoad,
            padding: { bottom: 0, top: 0 },
            tick: {
              format: function (d) {
                for (let value of showing_list[1].y1_values) {
                  if (value.axis == d)
                    return value.title;
                }

              },
              values: showing_list[1].y1_values.map((val) => val.axis)
            },
          },
          y2: {
            show: showing_list.length == 2 ? true : false,
            tick: {
              format: function (d) {
                let values = showing_list[1].y2_values;
                switch (d) {
                  case values[1]:
                    return "Time"
                  case values[2]:
                    return "Untrained"
                  case values[3]:
                    return "Novice"
                  case values[4]:
                    return "Intermediate"
                  case values[5]:
                    return "Advanced"
                  case values[6]:
                    return "Elite"
                }
              },
              values: showing_list[1].y2_values
            }
          }
        },
        grid: {
          y: {
            lines: [
              { value: this.showing_list[1].y1_values[0].axis, text: '' },
              { value: this.showing_list[1].y1_values[1].axis, text: '', class: 'label-5' },
              { value: this.showing_list[1].y1_values[2].axis, text: '', position: 'start' },
              { value: this.showing_list[1].y1_values[3].axis, text: '', position: 'start' },
              { value: this.showing_list[1].y1_values[4].axis, text: '', position: 'start' }
            ]
          }
        },
        tooltip: { show: false },
      });
    }

    // third graph
    if (this.showing_list.length > 2) {
      this.chart3 = c3.generate({
        bindto: `#${this.thirdGraphId}`,
        size: { height: GRAPH_HEIGHT, width: this.showing_list[2].widthRatio * GRAPH_WIDTH + 28 + 85 },
        legend: { show: false },
        transition: { duration: 1000 },
        data: {
          x: 'x',
          colors: { data1: '#F3A83B' },
          columns: this.showing_list[2].graph_data,
          types: { data1: 'area' }
        },
        axis: {
          x: {
            tick: {
              format: function (d) {
                switch (d) {
                  case 1:
                    return "";
                  case 9:
                    return "";
                }
              },
              values: [1, 9]
            }
          },
          y: {
            min: 0,
            max: maxLoad,
            padding: { bottom: 0, top: 0 },
            tick: {
              format: function (d) {
                for (let value of showing_list[2].y1_values) {
                  if (value.axis == d)
                    return value.title;
                }

              },
              values: showing_list[2].y1_values.map((val) => val.axis)
            },
          },
          y2: {
            show: true,
            tick: {
              format: function (d) {
                let values = showing_list[2].y2_values;
                switch (d) {
                  case values[1]:
                    return "Time"
                  case values[2]:
                    return "Untrained"
                  case values[3]:
                    return "Novice"
                  case values[4]:
                    return "Intermediate"
                  case values[5]:
                    return "Advanced"
                  case values[6]:
                    return "Elite"
                }
              },
              values: showing_list[2].y2_values
            }
          }
        },
        grid: {
          y: {
            lines: [
              { value: this.showing_list[2].y1_values[0].axis, text: '' },
              { value: this.showing_list[2].y1_values[1].axis, text: '', class: 'label-5' },
              { value: this.showing_list[2].y1_values[2].axis, text: '', position: 'start' },
              { value: this.showing_list[2].y1_values[3].axis, text: '', position: 'start' },
              { value: this.showing_list[2].y1_values[4].axis, text: '', position: 'start' }
            ]
          }
        },
        tooltip: { show: false },
      });
    }

    if (this.showing_list.length == 0) {

      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      this.chart1 = c3.generate({
        bindto: `#${this.firstGraphId}`,
        size: { height: FULL_GRAPH_HEIGHT, width: FULL_GRAPH_WIDTH },
        legend: { show: false },
        transition: { duration: 1000 },
        data: {
          x: 'x',
          colors: { data1: '#F3A83B' },
          columns: [],
          types: { data1: 'area' }
        },
        axis: {
          x: {
            tick: {
              format: function (d) {
                switch (d) {
                  case 1:
                    return "";
                  case 9:
                    return "";
                }
              },
              values: [1, 9]
            }
          },
          y: {
            // min: 0,
            // max: maxLoad,
            padding: { bottom: 0, top: 0 },
            tick: {
              format: function (d) {
                return "";
              },
            },
            label: { text: 'Kg', position: 'outer-top' }
          },
          y2: {
            // show: showing_list.length == 1 ? true : false,
            tick: {
              format: function (d) {
                switch (d) {
                  case 1:
                    return "Time"
                }
              },
              values: [1]
            }
          }
        },
        tooltip: { show: false },
      });

      console.log('>>> after created: ', this.chart1);
    }
  }
}
