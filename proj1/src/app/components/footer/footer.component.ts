import { Component, OnInit } from '@angular/core';
import { HotDealsService } from 'src/app/services/hot-deals.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  city:any[];

  constructor(private myservice:HotDealsService) { }

  ngOnInit() {
    this.city = this.myservice.getDetails();
  }

}
