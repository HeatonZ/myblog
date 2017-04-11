import { Component, OnInit, trigger, state, style, transition, animate,keyframes } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('welcometrigger', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ]),
      // state('firstpos',style({transform:'translateY(0)'})),
      // state('secondpos',style({transform:'translateY(10%)'})),
      // transition('firstpos => secondpos',[
      //   animate('200ms ease-in')
      // ]),
      // transition('secondpos => firstpos',[
      //   animate('200ms ease-in')
      // ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  state;
  constructor() { }

  ngOnInit() {
  }
}
