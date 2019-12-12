import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MidataService } from '../midata.service';
import { JSOnFhir } from '@i4mi/js-on-fhir';


@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

fhir: JSOnFhir;
  
@Input() public state: string;
title: string;


ngOnChanges(changes) {
 this.changeTitle()
}


  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();
  }

  ngOnInit() {
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
  

  loginToMidata(){
    this.fhir.authenticate();   
  }

  logout(){
    console.log(this.fhir.isLoggedIn());
    
    this.fhir.logout();

    console.log(this.fhir.isLoggedIn());
    
  }

changeTitle(){
  if(this.state == 'feelfinder'){
    this.title = "Gefühlsfinder";
  }
  if(this.state == 'diary'){
    this.title = "Tagebuch";
  }

}

}
