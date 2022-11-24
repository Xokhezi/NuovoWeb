import { animate, keyframes, state, style, transition, trigger} from "@angular/animations";


export let slideProducts =
trigger('slideProducts',[
    transition('void=>*',[
        style({transform:'translateY(-30px)',backgroundColor:'white'}),
        animate(1000)
    ]),
    transition(':leave',[      
      animate(1000,style({transform:'translateY(30px)',opacity:0}))
    ])
])