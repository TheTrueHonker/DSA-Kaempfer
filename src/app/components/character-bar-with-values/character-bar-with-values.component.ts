import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressBar } from "@angular/material/progress-bar";

type ValidNames = "HP" | "Stamina";

@Component({
  selector: "app-character-bar-with-values",
  standalone: true,
  imports: [CommonModule, MatProgressBar],
  templateUrl: "./character-bar-with-values.component.html",
  styleUrl: "./character-bar-with-values.component.scss",
})
export class CharacterBarWithValuesComponent {
  name = input.required<ValidNames>();
  currentValue = input.required<number>();
  maxValue = input.required<number>();

  percentage = computed(() => {
    return (this.currentValue() * 100) / this.maxValue();
  });

  percentageColor = computed(() => {
    switch (this.name()) {
      case "HP":
        return "red";
      case "Stamina":
        return "green";
      default:
        return "blue";
    }
  });
}
