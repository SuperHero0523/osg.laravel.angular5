import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer',
  templateUrl: './program-designer.component.html'
})
export class ProgramDesignerComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation", "experience bank guide"];
  current_set: string;

  ngOnInit(): void {
    this.current_set = "profile";
  }

  NextPage() {
    this.current_set = "graph";
    window.scrollTo(0, 200);
  }

  PreviousPage() {
    this.current_set = "profile";
    window.scrollTo(0, 200);
  }
}
