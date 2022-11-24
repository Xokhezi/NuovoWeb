import { animate, keyframes, state, style, transition, trigger} from "@angular/animations";


export let slideTechno =
trigger('slideTechno',[
    transition('void=>*',[
        style({transform:'translateY(-30px)'}),
        animate(1000)
    ]),
    transition(':leave',[      
      animate(1000,style({opacity:0}))
    ])
])