import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INotebook, NOTEBOOK } from 'src/app/blog.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

countryTravel!: INotebook;

constructor(private route: ActivatedRoute){}

ngOnInit(){
  this.getCountryById();
}

getCountryById(){

  const travelId: number = Number(this.route.snapshot.paramMap.get('id'));
  const country = NOTEBOOK.find(country => country.id === travelId);

  if (country) {
    this.countryTravel = country;

    console.log('country',country);
}else

  console.log('Not Found');
}

}
