import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
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

  @ViewChild('diaryEntryText', {static : false}) textArea

  @Output() entrySaved = new EventEmitter<string>();

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

    if(diaryEntryText == ""){
      diaryEntryText = "Es wurde kein Kommentar erfasst.";
    }

    if(typeof this.tags !== 'undefined' && this.tags.length > 0 && diaryEntryText !== ""){
      this.resourceService.createDiaryRessource(diaryEntryText, this.tags)
      .then( res => {
        console.log(res);
        this.clearTags();
        this.textArea.nativeElement.value = "";
        this.entrySaved.emit();
      })   
      .catch( err => {
        console.log(err);      
      })
    }
    
  
  }
}
