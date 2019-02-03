import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  animations:[
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class WizardComponent implements OnInit {
 @Input() visible: boolean;
  constructor() { }

  ngOnInit() {
  }
  state:number=0;
  data:number;

addItem() {
 this.state++;
}
addIte(data) {
  this.state=data;
 }
removeItem() {
  this.state--;
}

}
