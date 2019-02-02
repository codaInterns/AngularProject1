import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-comp4',
  templateUrl: './dummy-comp4.component.html',
  styleUrls: ['./dummy-comp4.component.css']
})
export class DummyComp4Component implements OnInit {
  componentName = 'dummy-comp4';
  constructor() { }

  ngOnInit() {
  }

}
