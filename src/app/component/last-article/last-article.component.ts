import { Component } from '@angular/core';
import { INotebook, NOTEBOOK } from 'src/app/blog.mock';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  notebook: INotebook = NOTEBOOK [0];


}
