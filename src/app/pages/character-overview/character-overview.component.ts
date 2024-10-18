import { Component } from "@angular/core";
import { CharacterOverviewService } from "../../services/character-overview/character-overview.service";
import { Character } from "../../types/character.type";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { CharacterCardComponent } from "../../components/character-card/character-card.component";

@Component({
  selector: "app-character-overview",
  standalone: true,
  imports: [CharacterCardComponent, CommonModule],
  templateUrl: "./character-overview.component.html",
  styleUrl: "./character-overview.component.scss",
})
export class CharacterOverviewComponent {
  readonly characters$: Observable<Character[]>;

  constructor(
    private readonly characterOverviewService: CharacterOverviewService
  ) {
    this.characters$ = this.characterOverviewService.getCharacterData();
  }
}
