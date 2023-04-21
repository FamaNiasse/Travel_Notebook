import { Component, Input } from '@angular/core';
import { NOTEBOOK } from 'src/app/blog.mock';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent {
  @Input() positive!: string[];
  @Input() negative!: string[];
  @Input() advises!: string[];
  @Input() title!: string;

}
