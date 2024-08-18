import { Component, computed, input } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
    selector: 'app-character-bar-with-values',
    standalone: true,
    imports: [
        MatProgressBar
    ],
    templateUrl: './character-bar-with-values.component.html',
    styleUrl: './character-bar-with-values.component.scss'
})
export class CharacterBarWithValuesComponent {

    name = input.required<string>();
    currentValue = input.required<number>();
    maxValue = input.required<number>();

    percentage = computed(() => {
        return this.currentValue() * 100 / this.maxValue();
    });
}
