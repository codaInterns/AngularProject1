<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> 5ea25729a6018fcbcacded6412bfafeaf952b09e

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

<<<<<<< HEAD
=======
  @Input()
  city: string;

>>>>>>> 5ea25729a6018fcbcacded6412bfafeaf952b09e
  constructor() { }

  ngOnInit() {
  }

}
