import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddhotelComponent } from './addhotel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('AddhotelComponent', () => {
  let component: AddhotelComponent;
  let fixture: ComponentFixture<AddhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ]
      ,
      declarations: [
        AddhotelComponent
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
