import { Component, input } from '@angular/core';
import { Character } from "../../types/character.type";
import {
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup
} from "@angular/material/card";
import { CharacterBarWithValuesComponent } from "../character-bar-with-values/character-bar-with-values.component";

@Component({
    selector: 'app-character-card',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardTitle,
        MatCardSubtitle,
        MatCardTitleGroup,
        CharacterBarWithValuesComponent,
    ],
    templateUrl: './character-card.component.html',
    styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
    characterData = input.required<Character>();
}
