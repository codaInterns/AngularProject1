import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {  }; // required
  // chartCallback = function (chart) {  } // optional function, defaults to null
  // updateFlag = false; // optional boolean
  // oneToOneFlag = true; // optional boolean, defaults to false
  // runOutsideAngular = false;
  // Highcharts = Highcharts;
}
//   tdata=[{
//     name: 'Hotel Alex',
//     y: 1
// }, 
// {
//   name: 'Hotel Manorma',
//   y: 3
// },
// {
// name: 'Hotel Ilapuram',
// y: 7
// },
// {
//     name: 'Swarna Palace',
//     y: 5
// }];
//   chartOptions = {
//     title: {
//       text: 'Hotel Ratings'
//   },
//   //   series: [{
//   //     type: 'column',
//   //     name: 'Jane',
//   //     data: [3, 2, 1, 3, 4]
//   // }, {
//   //     type: 'column',
//   //     name: 'John',
//   //     data: [2, 3, 5, 7, 6]
//   // }, {
//   //     type: 'column',
//   //     name: 'Joe',
//   //     data: [4, 3, 3, 9, 0]
//   // }, {
//   //     type: 'spline',
//   //     name: 'Average',
//   //     data: [3, 2.67, 3, 6.33, 3.33]
//   // }]
// //   series: [{
    
// //     type: 'column',
// //     name:'Hotels Ratings',
// //     data: this.tdata
// // }]
// //   };
// //  }
