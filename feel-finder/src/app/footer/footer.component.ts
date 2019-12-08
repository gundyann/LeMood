import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../state';

@Component({
  selector: 'custom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() navigateDestination = new EventEmitter<string>();

  rightButtonText: string;
  leftButtonText: string;

  state :State;
  

  constructor() { 
    this.state = new State("feelfinder");
    this.rightButtonText = "Zum Tagebuch";
    this.leftButtonText = "+Tagebuch";
  }

  ngOnInit() {
    
  }

  navigateToDiary(){   
    if(this.state.currentState == 'feelfinder'){
      this.rightButtonText = "Zum Gefühlsfinder";
      this.state.setState('diary');
    } else if(this.state.currentState == 'diary'){
      this.rightButtonText = "Zum Tagebuch";
      this.state.setState('feelfinder');
    } 
    this.navigateDestination.emit(this.state.currentState);
  }
}
