import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import * as c3 from 'c3';
declare var $: any;
@Component({
    selector: 'osg-program-designer-progressive-overload-graph',
    templateUrl: './progressive-overload-graph.component.html'
})
export class ProgramDesignerProgressiveOverloadGraphComponent implements OnInit {

    public static counter: number = 0;
    private _id: number;
    
    @Input() applicationUser: ApplicationUser;

    constructor() {
        this._id = ++ProgramDesignerProgressiveOverloadGraphComponent.counter;
    }

    ngOnInit(): void {
    }


    ngAfterViewInit(): void {
        var chart = c3.generate({
            bindto: `#${this.progressiveOverloadGraphId}`,
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
                types:{
                    data4: 'bar'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        culling: false,
                        rotate: 90,
                        format: (x: Date): string => {
                            let s = `${x.getFullYear()}-01-01`;
                            let v = ['2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2006-06-06', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2013-06-06', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2020-06-06', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2027-06-06', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'];
                            let l = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            let idx = v.indexOf(s);
                            return l[idx];
                        },
                    },
                    height: 50
                },
                y: {
                    min: 0,
                    max: 5,
                    tick:{
                        outer: true,
                        format: (d): string =>{
                            return '';
                        }
                    }
                }
            },
            grid: {
                x: {
                  lines: [
                    {value: '2006-06-06', text: ''},
                    {value: '2013-06-06', text: '', class: 'label-5'},
                    {value: '2020-06-06', text: '', position: 'start'},
                    {value: '2027-06-06', text: '', position: 'start'}
                  ]
                }
            },
            onrendered: () => {
                $(`#${this.progressiveOverloadGraphId} svg`).attr('width', '1250');
                $(`#${this.progressiveOverloadGraphId} .c3-event-rect`).attr('width', '1228');
                $(`#${this.progressiveOverloadGraphId} .c3-axis-y`).find('.tick').attr('style', 'opacity: 0');
                let $y2_axis = $(`#${this.progressiveOverloadGraphId} .c3-axis.c3-axis-y2`);
                $.each($y2_axis, (i, el) => {
                    console.log($(el));
                });
                let $x_axis = $(`#${this.progressiveOverloadGraphId} .c3-axis-x`);
                $.each($x_axis, (i, el) => {
                    let $ticks = $(el).find('.tick');
                    $.each($ticks, (j, els) => {
                        var temp = $(els).attr('transform').split(' ');
                        var origin_transform = temp[0].slice(0,-1);
                        $(els).attr('style', 'transform: ' + origin_transform + "px, -4px);");
                        $(els).find('line').attr('y2', '8').attr('style', 'stroke-width: 2px');
                        $(els).find('text').attr("style", "text-anchor: start;").attr("style", "display: block;").attr("style", "transform: rotate(90deg) translate(18px, 0px);");
                    });
                });
                let $data_1 = $(`#${this.progressiveOverloadGraphId} .c3-circles-data1 > circle`);
                $.each($data_1, (i, el) => {
                    if (i%7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                let $data_2 = $(`#${this.progressiveOverloadGraphId} .c3-circles-data2 > circle`);
                $.each($data_2, (i, el) => {
                    if (i%7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                let $data_3 = $(`#${this.progressiveOverloadGraphId} .c3-circles-data3 > circle`);
                $.each($data_3, (i, el) => {
                    if (i%7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
                let $data_4 = $(`#${this.progressiveOverloadGraphId} .c3-circles-data4 > circle`);
                $.each($data_4, (i, el) => {
                    if (i%7 != 0) {
                        $(el).attr('style', 'opacity: 0');
                    }
                });
            }
        });
    }


    get progressiveOverloadGraphId(): string {
        return `performance-graph-${this._id}`;
    }

}
