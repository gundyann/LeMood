import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../state';

@Component({
  selector: 'custom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() switchState = new EventEmitter<string>();
  @Output() feeling = new EventEmitter<string>();

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

  onClickSwitchState(){   
    if(this.state.currentState == 'feelfinder'){
      this.rightButtonText = "Zum Gefühlsfinder";
      this.leftButtonText = "Eintrag speichern";
      this.state.setState('diary');
    } else if(this.state.currentState == 'diary'){
      this.rightButtonText = "Zum Tagebuch";
      this.leftButtonText = "+Tagebuch";
      this.state.setState('feelfinder');
    } 
    this.switchState.emit(this.state.currentState);
  }

  onClickLeftButton(){
    if(this.state.currentState == 'feelfinder'){
      console.log('We clicked on LeftButton in feelfinder');   
      this.feeling.emit('Hoffnungslosigkeit');   
    } else if(this.state.currentState == 'diary'){
      console.log('We clicked on LeftButton in diary');
      
    }
  }
}
