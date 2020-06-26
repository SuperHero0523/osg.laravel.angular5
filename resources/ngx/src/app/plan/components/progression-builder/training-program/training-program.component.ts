import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'osg-progression-builder-training-program',
    templateUrl: './training-program.component.html'
})
export class ProgressionBuilderTrainingProgramComponent implements OnInit {
    deltaX: number = 865;
    left: number = 0;
    rate: number = 1;
    min_rate: number = 0.5;
    max_rate: number = 1.5;

    public bgColor = "";
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
    @ViewChild('trainingProgramWrapper') wrapper: ElementRef;

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

    changeColor(event){
        (event.target.value == 'Test (AMRAP) set') ? event.target.classList.add('onlybg') : event.target.classList.remove('onlybg') ; 
    }

    zoomIn(): void {
        if (this.rate < this.max_rate) {
            this.rate += 0.1;
        }
    }

    zoomOut(): void {
        if (this.rate > this.min_rate) {
            this.rate -= 0.1;
        }
    }

    moveLeft(): void {
        if(this.left > -this.deltaX*2){
            this.left -= this.deltaX;
            this.move();
        }
    }

    moveRight(): void {
        if (this.left < -865) {
            this.left += this.deltaX;
            this.move();
        } else if (this.left == -865) {
            this.left = -350;
            this.move();
        }
    }

    move(): void {
        this.wrapper.nativeElement.style = `left: ${this.left}px`;
    }

}
