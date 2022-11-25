import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  id=0;
  article:any
  hoverOnLeft=false;
  
    constructor(private route:Router, private active:ActivatedRoute, private service:EventsService) {
      
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
