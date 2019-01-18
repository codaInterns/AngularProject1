import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotDealsService {

  constructor() { }

  city: any[]=[{
    flightName:"Madurai",
    price:"Madurai-Chennai",
    image:"https://www.travelsupermarket.com/content/dam/travelsupermarket/Hub_content_images/last-minute/lastminute-flight.jpg"
  },
  {
    flightName:"Chennai",
    price:"Chennai-Dubai",
    image:"https://imgak.mmtcdn.com/pwa-hlp/assets/img/hlp/deals/ic-flight-14.jpg"
  },
  {
    flightName:"Delhi",
    price:"Delhi-Sikkim",
    image:"http://travelguysradio.com/wp-content/uploads/2016/05/maxresdefault.jpg"
  }
];

flights:any[] = [
  {
    flightName:"Mumbai",
    price : "1200",      
    image:"https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/02/airplane-flight-sunset.jpg?itok=8iUtkHU-"
  },
  {
    flightName:"Chennai",
    price : "1300",
    image: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/06/01/105245766-Singapore-Airlines-A350URL.1910x1000.jpg"
  },
  {
    flightName:"Madurai",
    price : "1400",
    image: "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/09/04/Photos/Processed/indigo-kDEC--621x414@LiveMint.jpg"
  },
  {
    flightName:"kolkata",
    price : "2000",
    image:"https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/02/airplane-flight-sunset.jpg?itok=8iUtkHU-"
  },
  {
    flightName:"Sikkim",
    price : "1400",
    image:"https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/02/airplane-flight-sunset.jpg?itok=8iUtkHU-"
  },
  {
    flightName:"Nepal",
    price : "2500",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBw83Kx6y_uUBZ02EVP-G290plaoOTfaEj32s2c6BkaSj0ZrR1Q"
  },
  {
    flightName:"manipur",
    price : "2300",
    image:"http://www.berjaya-air.com/data/uploads/web-banner.jpg"
  },
  {
    flightName:"kashmir",
    price : "2300",
    image:"https://media.cntraveller.in/wp-content/uploads/2018/01/CE63NW-Cropped-866x487.jpg"
  },
  {
    flightName:"indore",
    price : "2300",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBw83Kx6y_uUBZ02EVP-G290plaoOTfaEj32s2c6BkaSj0ZrR1Q"
  },

    ];

  getDetails(){
      return this.city;
  }
  getFlightDetails(){
    return this.flights;
  }
}
