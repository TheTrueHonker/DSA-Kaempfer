import { Route } from '@angular/router';
import { CharacterOverviewComponent } from './pages/character-overview/character-overview.component';

export const appRoutes: Route[] = [
    {
        path: 'characters',
        component: CharacterOverviewComponent
    },
    {
        path: '**',
        redirectTo: '/characters'
    }
];
