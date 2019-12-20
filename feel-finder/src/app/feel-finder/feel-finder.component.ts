import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { MidataService } from '../../services/midata.service';
import { resultOfAuth } from '../../interfaces/resultOfAuth';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'custom-feel-finder',
  templateUrl: './feel-finder.component.html',
  styleUrls: ['./feel-finder.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class FeelFinderComponent implements OnInit, AfterViewInit {

  @ViewChild('content', {static : false}) diary:ContentComponent
  @ViewChild('header', {static : false}) header:HeaderComponent;


  state: string;
  stateFlag: boolean;

  fhir: JSOnFhir;
  refreshToken: any;

  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();
  }

  ngOnInit() {
    this.state = 'feelfinder';
    this.stateFlag = true;
  }
  
  ngAfterViewInit(){         
    this.fhir.handleAuthResponse()
    .then(res => {

      // check if the response is not null
      if(res){
        var result = <resultOfAuth> res;
        // we are authenticated
        // ... and can keep refreshToken
        this.refreshToken = result.refresh_token;
        this.header.checkLoginStatus();
      } else {
        this.fhir.authenticate();
      }
    })
    .catch(err => {
      // oops, something went wrong
      console.log(err);
    });
     
  }

 refresh(){
  this.fhir.refreshAuth(this.refreshToken)
  .then(res => {      
    if(res){
      var result = <resultOfAuth> res;
      this.refreshToken = result.refresh_token;
    }
  })
  .catch(err => {
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
