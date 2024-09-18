import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from "@angular/material/card";
import { CharacterBarWithValuesComponent } from "../character-bar-with-values/character-bar-with-values.component";
import { Character } from "../../types/character.type";

@Component({
  selector: "app-character-card",
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    CharacterBarWithValuesComponent,
  ],
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.scss",
})
export class CharacterCardComponent {
  characterData = input.required<Character>();
}
