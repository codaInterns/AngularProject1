import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input()
  city: any;

  constructor(private routes:Router) {}

  ngOnInit() {}

  onClick(){
    this.routes.navigate(['/flights',this.city.source,this.city.destination]);
  }
}
