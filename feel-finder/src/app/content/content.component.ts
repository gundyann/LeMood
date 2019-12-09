import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../card-data';
import cardData from './gefuehlsfinder.json';
import { State } from '../state';



@Component({
  selector: 'custom-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

cards: any[];
test: any[];

  constructor() {
    this.cards = [];
   }

  ngOnInit() {
    cardData.list.forEach(element => {
      const card: CardData = new CardData(element.name);
      card.setThoughts(element.thoughts);
      card.setBackgroundstyle({'background-color': element.color});
      card.setDotStyle({'color': element.color});

      var feeling: string[] = [];
      element.feelings.forEach(e => {
        feeling.push(e.name);
      });
      feeling.sort(function(a, b){
        return a.length - b.length;
      });
      card.setFeelings(feeling);
      this.cards.push(card);
    });
    this.shuffle(this.cards);
  }

    shuffle(a: CardData[]) {
      var j :number, x :CardData, i :number;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

}
