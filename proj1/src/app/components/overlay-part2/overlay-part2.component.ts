import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { visitAll } from '@angular/compiler';

@Component({
  selector: 'app-overlay-part2',
  templateUrl: './overlay-part2.component.html',
  styleUrls: ['./overlay-part2.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class OverlayPart2Component implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
 

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log("visible:"+this.visible);
    console.log("visible:"+this.visibleChange);
  }

}
