import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { MidataService } from '../midata.service';

@Component({
  selector: 'custom-feel-finder',
  templateUrl: './feel-finder.component.html',
  styleUrls: ['./feel-finder.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class FeelFinderComponent implements OnInit, AfterViewInit {

  @ViewChild('content', {static : false}) diary:ContentComponent

  state: string;
  stateFlag: boolean;

  fhir: JSOnFhir;

  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();
    console.log(window.location.href);
  }

  ngOnInit() {
    this.state = 'feelfinder';
    this.stateFlag = true;

    setTimeout(() => {
      if(!this.fhir.isLoggedIn()){
       // this.fhir.authenticate();
      }
    }, 10000);
  }

  
  ngAfterViewInit(){
       
    this.fhir.handleAuthResponse()
    .then(res => {
    // check if the response is not null
    if(res){
      // we are authenticated
      // ... and can keep refreshToken
     console.log('we are authenticated');
     
    } else {
      console.log('we are not authenticated');
          
        }
      })
  .catch(err => {
    // oops, something went wrong
    console.log(err);
  });
  }
  

  switchState(newState:string){
    this.state = newState;
    this.stateFlag = !this.stateFlag;
  }

  addFeelingToDiary(newFeelingTag:string){
    this.diary.addTagToDiary(newFeelingTag);
  }

  calculateClassesForContentWrapper(){
    return {
      'content-content-wrapper': true,
      'state-feel-finder': this.stateFlag,
      'state-diary': !this.stateFlag,
    }
  }
}
