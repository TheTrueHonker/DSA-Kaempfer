import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardComponent } from './character-card.component';
import { Character } from '../../types/character.type';

const CHARACTER_DATA: Character = {
    name: 'ScriptWizard',
    race: 'Elf',
    currentHP: 150,
    maxHP: 230,
    currentStamina: 12,
    maxStamina: 15
};

describe('CharacterCardComponent', () => {
    let component: CharacterCardComponent;
    let fixture: ComponentFixture<CharacterCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CharacterCardComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CharacterCardComponent);
        fixture.componentRef.setInput('characterData', CHARACTER_DATA);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
