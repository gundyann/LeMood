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
    this.cards.push({title:"Angst", thoughts:['Fuck', 'Isch', 'Ds', 'Geil'], feelings:['Send', 'Nudes'], style:{"background-color": '#FC7307'}});
    this.cards.push({title:"Freude", thoughts:['Eppstein'], feelings:['Didnt', 'kill', 'himself'], style:{"background-color": '#333333'}});

   }

  ngOnInit() {
  }

}
