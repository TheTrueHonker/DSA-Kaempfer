import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBarWithValuesComponent } from './character-bar-with-values.component';

describe('CharacterBarWithValuesComponent', () => {
  let component: CharacterBarWithValuesComponent;
  let fixture: ComponentFixture<CharacterBarWithValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBarWithValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBarWithValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
