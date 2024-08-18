import { Component, computed, input } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-character-bar-with-values',
    standalone: true,
    imports: [
        MatProgressBar,
        NgClass
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

    percentageColor = computed(() => {
        switch (this.name()) {
            case 'HP':
                return 'red';
            case 'Stamina':
                return 'green';
            default:
                return 'blue';
        }
    });
}
