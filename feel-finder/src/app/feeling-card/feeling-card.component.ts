import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-feeling-card',
  templateUrl: './feeling-card.component.html',
  styleUrls: ['./feeling-card.component.css']
})
export class FeelingCardComponent implements OnInit {

  animationFlag = false;


  constructor() {    
   }

  ngOnInit() {    
  }

  
  toggleAnimation() {
    this.animationFlag = !this.animationFlag;
  }

  calculateClassesForAnimation(){
    return {      
      'animation-wrapper': true,
      'animation-move-up': this.animationFlag,
      'animation-move-down': !this.animationFlag
  };
  }



}
