import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() formdata: FormGroup;
  @Output() delete = new EventEmitter<number>();
  constructor(private route: Router) { }

  ngOnInit() {

  }
  onDelete(i) {
    this.delete.emit(i);
  }

}
