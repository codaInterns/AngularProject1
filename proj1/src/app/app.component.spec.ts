import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Component } from "@angular/core";
import { NavFeatureComponent } from "./components/nav-feature/nav-feature.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { CardsComponent } from "./components/cards/cards.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        DashboardComponent,
        FooterComponent,
        NavFeatureComponent,
        CardsComponent
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should create the dashboard", () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
