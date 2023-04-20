import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.css']
})
export class ButtonBackComponent {

  constructor(private location: Location){
  }

  goBack(){
      this.location.back();
  }

}
