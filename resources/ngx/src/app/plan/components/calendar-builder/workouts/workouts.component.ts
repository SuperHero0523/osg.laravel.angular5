import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';


@Component({
    selector: 'osg-plan-builder-workout',
    templateUrl: './workouts.component.html'
})
export class PlanBuilderWorkoutsComponent implements OnInit {
    public options = [
        'Straight Set',
        'Warm up set',
        'Test (AMRAP) set',
        'Pyramid set',
        'Super set',
        'Giant set',
        'Pre-exhaust set',
        'Drop set'
    ];

    changeColor(event){
        (event.target.value == 'Test (AMRAP) set') ? event.target.classList.add('onlybg') : event.target.classList.remove('onlybg') ; 
    }
    

    @Input() applicationUser: ApplicationUser;


    ngOnInit(): void {

    }


}
