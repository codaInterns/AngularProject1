import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coda Trip';
  state:number=0;
  stateChange(){
    this.state++;

  }
 }
