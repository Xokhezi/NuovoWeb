import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';
import { slideTechno } from '../technology/technology.animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations:[
    slideTechno
  ]
})
export class EventsComponent implements OnInit {
  hoverOnLeft=false;
  hoverOnRight=false;
  article:any;
  articles:any;
 page=1;
  constructor(private service:EventsService) { 
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
