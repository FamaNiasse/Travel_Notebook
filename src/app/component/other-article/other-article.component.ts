import { Component } from '@angular/core';
import { INotebook, NOTEBOOK } from 'src/app/blog.mock';

@Component({
  selector: 'app-other-article',
  templateUrl: './other-article.component.html',
  styleUrls: ['./other-article.component.css']
})
export class OtherArticleComponent {

  travels: INotebook[] = NOTEBOOK;
  
  otherTravel = this.travels.filter((travel: INotebook) => travel.IsDisplay === false);

}
