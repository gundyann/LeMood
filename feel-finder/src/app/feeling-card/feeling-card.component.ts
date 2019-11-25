import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-feeling-card',
  templateUrl: './feeling-card.component.html',
  styleUrls: ['./feeling-card.component.css']
})
export class FeelingCardComponent implements OnInit {

  stateFlag = false;


  constructor() {    
   }

  ngOnInit() {    
  }

  
  toggleState() {
    this.stateFlag = !this.stateFlag;
  }

  calculateClasses(){
    return {      
      'feeling-wrapper': true,
      'feeling-wrapper-unfolded': this.stateFlag,
      'feeling-wrapper-closed': !this.stateFlag
  };
  }



}
