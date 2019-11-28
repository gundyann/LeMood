import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'custom-feeling-card',
  templateUrl: './feeling-card.component.html',
  styleUrls: ['./feeling-card.component.css']
})
export class FeelingCardComponent implements OnInit {

  stateFlag = true;

  @Input()
  backgroundStyle: any;

  @Input()
  dotStyle: any;

  @Input()
  thoughts: string[]; // Array mit allen Gefühlen, hier kann ausgelesen werden und angezeigt werden. Wird nicht verändert

  @Input()
  feelings: string[]; // Array mit allen untergefühlen, hier kann ausgelesen werden und angezeigt werden. Wird nicht verändert

  cardContent: string[]; // Der aktuell angezeigte Content der Karte

  @Input()
  feelTitle: string;  // Der Titel der Karte, das Grundgefühl

  constructor() {
    // Hier das JSON auslesen und die CSS Styles sowie die inhalte vereilen.
    // this.thoughts = ['Dies ist ein Test', 'Dies ist ein Gedanke', 'Ich mag Züge'];
    // this.feelings = ['Panik', 'Angst', 'Furcht', 'Aggression'];
    // this.feelTitle = "Angst";
  }

  ngOnInit() {
  }

  switchState() {
    this.stateFlag = !this.stateFlag;
  }

  calculateClassesForMovingTitle() {
    return {
      'base-feeling-wrapper': true,
      'base-feeling-wrapper::before': true,
      'animation-move-up': !this.stateFlag,
      'animation-move-down': this.stateFlag
    };
  }

  calculateClassesForThougts() {
    return {
      'content-thoughts' : true,
      'animation-fade-in': this.stateFlag,
      'animation-fade-out': !this.stateFlag
    };
  }

  calculateClassesForFeelings() {
    return {
      'content-feelings' : true,
      'animation-fade-in': !this.stateFlag,
      'animation-fade-out': this.stateFlag
    };
  }
}
