import { Component, OnInit } from '@angular/core';
import { MidataService } from '../../services/midata.service';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'custom-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  tags: string[];
  noTagsText: string;

  fhir: JSOnFhir;

  constructor(private midataService :MidataService, private resourceService :ResourceService) { 
    this.fhir = this.midataService.getMidataService();
  }

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
    this.resourceService.createDiaryRessource(diaryEntryText, this.tags);    
  }
}
