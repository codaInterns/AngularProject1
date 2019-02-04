import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop-cards',
  templateUrl: './drag-and-drop-cards.component.html',
  styleUrls: ['./drag-and-drop-cards.component.scss']
})
export class DragAndDropCardsComponent implements OnInit {
values=[
 {
   name:"Card1",
   type:"this card will contain image items"
 },
 {
  name:"Card2",
  type:"this card will contain todo list items"
 },
 {
  name:"Card3",
  type:"this card will contain grossery items"
}
];
values2=[
  {
    name:"Card4",
    type:"this card will contain tools"
  },
  {
    name:"Card5",
    type:"this card will contain important contents"
  }  
];
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,
                        event.currentIndex);
    }
  }
}
