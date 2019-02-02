import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wizard', [
      transition('void => *', [
        style({ transform: 'translate3d(150px,0,0)' }),
        animate(10)
      ]),
      transition('* => void', [
        animate(10, style({ transform: 'translate3d(150px,0,0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Coda Trip';
  state:number=0;
  stateChange(){
    this.state++;
  }
 }
