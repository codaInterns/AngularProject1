import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-comp2',
  templateUrl: './dummy-comp2.component.html',
  styleUrls: ['./dummy-comp2.component.css']
})
export class DummyComp2Component implements OnInit {
  componentName:string = "dummy-comp2";
  constructor() { }

  ngOnInit() {
  }

}
