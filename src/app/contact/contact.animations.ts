import { animate, state, style, transition, trigger} from "@angular/animations";

export let fadeCard = trigger('fadeCard', [

  transition(':enter',[
    style({ opacity:0, transform: 'translateY(-30px)'}),
    animate('500ms ease-out')
  ]),

  transition(':leave', [
    animate('700ms ease-out', style({ opacity:0, transform: 'translateY(-30px)'}))
  ])

])
