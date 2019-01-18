import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotDealsService {

  constructor() { }

  city: any[]=[{
    "city":"Madurai",
    "route":"Madurai-Chennai",
    "imgUrl":"https://www.travelsupermarket.com/content/dam/travelsupermarket/Hub_content_images/last-minute/lastminute-flight.jpg"
  },
  {
    "city":"Chennai",
    "route":"Chennai-Dubai",
    "imgUrl":"https://imgak.mmtcdn.com/pwa-hlp/assets/img/hlp/deals/ic-flight-14.jpg"
  },
  {
    "city":"Delhi",
    "route":"Delhi-Sikkim",
    "imgUrl":"http://travelguysradio.com/wp-content/uploads/2016/05/maxresdefault.jpg"
  }
];

  getDetails(){
      return this.city;
  }
}
