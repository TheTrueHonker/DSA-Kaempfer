import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CHARACTER_DATA } from './consts/character-data.const';

@Component({
    standalone: true,
    imports: [RouterModule, CharacterCardComponent, CommonModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    characters = CHARACTER_DATA;
}
