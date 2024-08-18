import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CharacterGridComponent } from './character-grid.component';

describe('CharacterGridComponent', () => {
    let spectator: Spectator<CharacterGridComponent>;
    const createComponent = createComponentFactory(CharacterGridComponent);

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
