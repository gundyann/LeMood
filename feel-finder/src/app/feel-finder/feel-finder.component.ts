import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { State } from '../state';

@Component({
  selector: 'custom-feel-finder',
  templateUrl: './feel-finder.component.html',
  styleUrls: ['./feel-finder.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class FeelFinderComponent implements OnInit {

  state :string;

  constructor() {}

  ngOnInit() {
    this.state = 'feelfinder';
  }

  switchState(newState:string){
    this.state = newState;            
  }

  calculateClassesForContentWrapper(){
    return {
      'content-content-wrapper': true,
    }
  }
}
