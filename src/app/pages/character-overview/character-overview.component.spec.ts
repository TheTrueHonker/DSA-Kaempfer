import { Spectator, createComponentFactory } from "@ngneat/spectator";

import { CharacterOverviewComponent } from "./character-overview.component";

describe("CharacterOverviewComponent", () => {
  let spectator: Spectator<CharacterOverviewComponent>;
  const createComponent = createComponentFactory(CharacterOverviewComponent);

  it("should create", () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
