import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CharacterBarWithValuesComponent } from "./character-bar-with-values.component";

describe("CharacterBarWithValuesComponent", () => {
  let component: CharacterBarWithValuesComponent;
  let fixture: ComponentFixture<CharacterBarWithValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBarWithValuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterBarWithValuesComponent);
    fixture.componentRef.setInput("name", "HP");
    fixture.componentRef.setInput("currentValue", 22);
    fixture.componentRef.setInput("maxValue", 144);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
