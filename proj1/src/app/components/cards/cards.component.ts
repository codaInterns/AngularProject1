import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input()
  city: string;

  constructor() {}

  ngOnInit() {}

  myfun(){
    console.log("hi");
  }
  public open(event, item) {
    console.log("hello");

  }
}
