import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { State } from '../state';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'custom-feel-finder',
  templateUrl: './feel-finder.component.html',
  styleUrls: ['./feel-finder.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class FeelFinderComponent implements OnInit {

  @ViewChild('content', {static : false}) diary:ContentComponent

  state: string;
  stateFlag: boolean;

  constructor() {}

  ngOnInit() {
    this.state = 'feelfinder';
    this.stateFlag = true;
  }

  switchState(newState:string){
    this.state = newState;
    this.stateFlag = !this.stateFlag;
  }

  addFeelingToDiary(newFeelingTag:string){
    this.diary.addTagToDiary(newFeelingTag);
  }

  calculateClassesForContentWrapper(){
    return {
      'content-content-wrapper': true,
      'state-feel-finder': this.stateFlag,
      'state-diary': !this.stateFlag,
    }
  }
}
