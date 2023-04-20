import { Component, Input } from '@angular/core';
import { NOTEBOOK } from 'src/app/blog.mock';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {

@Input() title!: string;
@Input() text!: string;

}
