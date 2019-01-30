import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-comp3',
  templateUrl: './dummy-comp3.component.html',
  styleUrls: ['./dummy-comp3.component.css']
})
export class DummyComp3Component implements OnInit {
  componentName:string = "dummy-comp3";
  constructor() { }

  ngOnInit() {
  }

}
