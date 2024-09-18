import { Injectable } from "@angular/core";
import { Character } from "../../types/character.type";
import { Observable, of } from "rxjs";
import { CHARACTER_DATA } from "../../consts/character-data.const";

@Injectable({
  providedIn: "root",
})
export class CharacterOverviewService {
  // TODO: uncomment this when using a real endpoint
  // constructor(private readonly http: HttpClient) {
  // }

  getCharacterData(): Observable<Character[]> {
    return of(CHARACTER_DATA);

    // this is to test the loading / error component
    // return of(CHARACTER_DATA).pipe(
    //         startWith(undefined),
    //         delay(10000),
    //         switchMap(() => of(CHARACTER_DATA))
    // );

    //TODO: replace with this later on
    //TODO: also might be worth to think about a wrapper for the angular http client (HttpResult) for error handling / loading animations / etc
    // return this.http.get<Character[]>(`ENTER ENDPOINT URL HERE`);
  }
}
