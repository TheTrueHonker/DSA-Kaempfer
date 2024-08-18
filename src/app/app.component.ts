import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CHARATER_DATA } from '@DSA-Kaempfer/business-character-grid';
import { CharacterCardComponent } from '@DSA-Kaempfer/character-grid';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [RouterModule, CharacterCardComponent, CommonModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'DSA-Kaempfer';
    characters = CHARATER_DATA;
}
