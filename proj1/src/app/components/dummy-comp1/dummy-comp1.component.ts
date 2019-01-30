import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-comp1',
  templateUrl: './dummy-comp1.component.html',
  styleUrls: ['./dummy-comp1.component.css']
})
export class DummyComp1Component implements OnInit {
  componentName:string = "dummy-comp1";
  constructor() { }

  ngOnInit() {
  }

}
