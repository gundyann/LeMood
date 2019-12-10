import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  
  tags: string[];

  constructor() { }

  ngOnInit() {
    this.tags = [];
    this.pushToFeelings("Hoffnungslosigkeit");
    this.pushToFeelings("Hoffnungslosigkeit");
    this.pushToFeelings("Hoffnungslosigkeit");
    this.pushToFeelings("Hoffnungslosigkeit");
  }


  pushToFeelings(feeling: string){
    this.tags.push('#'+feeling);
  }
}
