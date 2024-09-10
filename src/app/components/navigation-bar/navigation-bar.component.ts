import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {}
