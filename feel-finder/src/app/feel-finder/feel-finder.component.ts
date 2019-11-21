import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-feel-finder',
  templateUrl: './feel-finder.component.html',
  styleUrls: ['./feel-finder.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FeelFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
  testfunction(event : any){
    console.log("Test works");
    if(event.target.style.backgroundColor != 'green'){
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'blue';
    }
    
    
  }

}
