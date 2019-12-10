import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  
  tags: string[];
  noTagsText: string;

  constructor() { }

  ngOnInit() {
    this.tags = [];
    this.noTagsText = "Der Eintrag hat noch keine Tags";    
  }


  pushToFeelings(feeling: string){
    this.noTagsText = "";
    this.tags.push('#'+feeling);    
  }
}
