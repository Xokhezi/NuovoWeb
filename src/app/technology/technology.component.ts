import { ArticlesService } from './../services/articles.service';
import { slideTechno } from './technology.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  animations:[
    slideTechno
  ]
})
export class TechnologyComponent implements OnInit {
articles:any;
page=1;
article:any
hoverOnLeft=false;
hoverOnRight=false
  constructor(private service:ArticlesService) { 
    this.articles=service.getTech();
    this.article=this.findArticle(this.page);
  }

  ngOnInit(): void {
  }

  findArticle(id:any)
  {
    let article = this.articles.find((obj: { id: any; })=>obj.id===id)
    return article;
  }
  hoverSwitchLeft() {
    this.hoverOnLeft = !this.hoverOnLeft;
  }
  hoverSwitchRight() {
    this.hoverOnRight = !this.hoverOnRight;
  }
  switchArticle(method:any)
  {
    if(method==='next')
    { 
      if(this.page < this.articles.length)
      this.page++
    }
    else if(method==='previous')
    {
      if(this.page-1 !=0)  
        this.page--;

    }
    this.article=this.findArticle(this.page);
    
         
  }
}
