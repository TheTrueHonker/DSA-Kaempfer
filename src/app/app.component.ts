import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CHARATER_DATA } from './consts/character-data.const';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@Component({
    standalone: true,
    imports: [RouterModule, CharacterCardComponent, NavigationBarComponent, CommonModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    characters = CHARATER_DATA;
}
