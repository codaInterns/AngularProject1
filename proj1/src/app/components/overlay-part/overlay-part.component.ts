import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-overlay-part',
  templateUrl: './overlay-part.component.html',
  styleUrls: ['./overlay-part.component.css']
})
export class OverlayPartComponent implements OnInit {
  @ViewChild('over') over:ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  popup(){
    this.over.nativeElement.style.display="block";    
  }
  popdown(){
    this.over.nativeElement.style.display="none";
  }
  }
