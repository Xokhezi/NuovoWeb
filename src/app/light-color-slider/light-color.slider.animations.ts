import { animate, state, style, transition, trigger} from "@angular/animations";

export let fade = trigger('fade', [

  transition(':enter',[
    style({ opacity:0, transform: 'translateY(-30px)'}),
    animate('500ms ease-out')
  ]),

  transition(':leave', [
    animate('500ms ease-out', style({ opacity:0,transform: 'translateY(-100px)'}))
  ])

])

export let fadeSlider = trigger('fadeSlider', [

  transition(':enter',[
    style({ opacity:0, transform: 'translateY(-30px)'}),
    animate('500ms ease-out')
  ]),

  transition(':leave', [
    animate('500ms ease-out', style({ opacity:0,transform: 'translateY(-100px)'}))
  ])

])
export let fadeSideRed = trigger("fadeSideRed", [
    
    state("void",style({transform: 'translateX(-100%)',opacity:0})),
    transition(":leave", animate("500ms  ease-in")),
    transition(":enter", animate("500ms 750ms ease-in"))
  ])

  export let fadeSideBlue = trigger("fadeSideBlue", [
    
    state("void",style({transform: 'translateX(100%)',opacity:0})),
    transition(":enter", animate("500ms 750ms ease-in")),
    transition(":leave", animate("500ms  ease-in"))
    
  ])
