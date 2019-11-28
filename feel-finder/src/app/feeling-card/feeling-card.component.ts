import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'custom-feeling-card',
  templateUrl: './feeling-card.component.html',
  styleUrls: ['./feeling-card.component.css']
})
export class FeelingCardComponent implements OnInit {

  stateFlag = true;

  @Input()
  cardStyle: any;

  @Input()
  thoughts: string[]; //Array mit allen Gefühlen, hier kann ausgelesen werden und angezeigt werden. Wird nicht verändert

  @Input()
  feelings: string[]; //Array mit allen untergefühlen, hier kann ausgelesen werden und angezeigt werden. Wird nicht verändert

  cardContent: string[]; //Der aktuell angezeigte Content der Karte

  @Input()
  feelTitle: string;  //Der Titel der Karte, das Grundgefühl

  constructor() {
  }

  ngOnInit() {
  }

  switchState() {
    this.stateFlag = !this.stateFlag;  
  }

  calculateClassesForMovingTitle() {
    return {
      'animation-wrapper': true,
      'animation-move-up': !this.stateFlag,
      'animation-move-down': this.stateFlag
    };
  }

  calculateClassesForThougts(){
    return {
      'animation-fade-in': this.stateFlag,   
      'animation-fade-out': !this.stateFlag
    };
  }

  calculateClassesForFeelings(){
    return {
      'content-centered' : true,   
      'animation-fade-in': !this.stateFlag,   
      'animation-fade-out': this.stateFlag
    };
  }
}
