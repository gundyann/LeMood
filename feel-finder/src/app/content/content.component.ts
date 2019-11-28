import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards : any[];

  constructor() {
    this.cards = [];
    this.cards.push({title:"Angst", thoughts:['"Es ist war falsch"', '"Das darf man nicht"','"Das macht man nicht"','"Es ist/war nicht richt"',], feelings:['skeptisch', 'Zweifel haben', 'misstrauisch', 'besorgt', 'irritiert', 'durcheinander', 'verwirrt', 'ungeduldig', 'aufgeregt', 'angespannt', 'aufgewühlt', 'unruhig', 'nervös', 'gehemmt', 'unsicher', 'verunsichert', 'übervordert', 'überlastet', 'gestresst', 'eifersüchtig', 'entsetzt', 'schockiert', 'Angst haben', 'ängstlich'], backgroundStyle:{"background-color": '#FC7307'}, dotStyle:{"color": '#FF00FF'}});
    this.cards.push({title:"Freude", thoughts:['Eppstein'], feelings:['Didnt', 'kill', 'himself'], backgroundStyle:{"background-color": '#333333'}, dotStyle:{"color": '#FF00FF'}});

   }

  ngOnInit() {
  }

}
