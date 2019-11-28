import { Component, OnInit } from '@angular/core';
import { CardData } from '../card-data';
import cardData from './gefuehlsfinder.json';



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
      card.setStyle({'background-color': element.color});

      const feeling: string[] = [];
      element.feelings.forEach(e => {
        feeling.push(e.name);
      });
      card.setFeelings(feeling);
      this.cards.push(card);
    });
  }

}
