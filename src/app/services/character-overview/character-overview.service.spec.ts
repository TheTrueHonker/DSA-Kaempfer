import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from "@ngneat/spectator";
import { CharacterOverviewService } from "./character-overview.service";

describe("CharacterOverviewService", () => {
  let spectator: SpectatorHttp<CharacterOverviewService>;
  const createHttp = createHttpFactory(CharacterOverviewService);

  beforeEach(() => (spectator = createHttp()));

  it("can test HttpClient.get", () => {
    // spectator.service.getTodos().subscribe();
    // spectator.expectOne('api/todos', HttpMethod.GET);
  });
});
