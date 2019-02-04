import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropCardsComponent } from './drag-and-drop-cards.component';

describe('DragAndDropCardsComponent', () => {
  let component: DragAndDropCardsComponent;
  let fixture: ComponentFixture<DragAndDropCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
