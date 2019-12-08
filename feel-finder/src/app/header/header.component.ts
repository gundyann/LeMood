import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
@Input() public state: string;
title: string;

ngOnChanges(changes) {
 this.changeTitle()
}


  constructor() { }

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

}
