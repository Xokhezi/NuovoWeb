import { ArticlesService } from './../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-techno-article',
  templateUrl: './techno-article.component.html',
  styleUrls: ['./techno-article.component.css']
})
export class TechnoArticleComponent implements OnInit {
id=0;
article:any
hoverOnLeft=false;

  constructor(private route:Router, private active:ActivatedRoute, private service:ArticlesService) {
    
   }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params=>{
     let param : any  = params.get('id');
     let y: number = + param;
     this.id = y;                  
  });   
  this.article=this.service.getTechArticle(this.id);  
  }
  hoverSwitchLeft() {
    this.hoverOnLeft = !this.hoverOnLeft;
  }
  

}
