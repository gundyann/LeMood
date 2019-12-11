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
    var feelingWithHashtag = '#'+feeling;
    if(!this.tags.includes(feelingWithHashtag)){
      this.tags.push(feelingWithHashtag);
    }
  }

  clearTags(){
    this.tags = [];
    this.noTagsText = "Der Eintrag hat noch keine Tags";
  }

  saveEntry(diaryEntryText:string){
    console.log(diaryEntryText);
    console.log(this.tags);
    
    
  }
}
