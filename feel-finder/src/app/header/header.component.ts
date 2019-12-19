import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MidataService } from '../midata.service';
import { JSOnFhir } from '@i4mi/js-on-fhir';


@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  fhir: JSOnFhir;
  loginbuttonText :string;
  
@Input() public state: string;
title: string;


ngOnChanges(changes) {
 this.changeTitle()
}


  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();   
    this.loginbuttonText = "Login";
  }

  ngOnInit() {
  }

changeTitle(){
  if(this.state == 'feelfinder'){
    this.title = "Gefühlsfinder";
  }
  if(this.state == 'diary'){
    this.title = "Tagebuch";
  }
}

login(){
  if(this.fhir.isLoggedIn()){
    this.fhir.logout();
    this.checkLoginStatus();
  } else {
    this.fhir.authenticate();
  }
}

  checkLoginStatus(){
    console.log('we in checkStatus');  
    console.log(this.fhir.isLoggedIn());    

    if(this.fhir.isLoggedIn()){
      this.loginbuttonText = "Logout";
    } else {
      this.loginbuttonText = "Login";
    }
  }

}
