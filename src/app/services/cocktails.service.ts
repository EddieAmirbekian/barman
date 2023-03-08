import {
  Drink,
  DrinksResponse,
  Ingredient,
  IngredientsResponse,
} from './../types';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://www.thecocktaildb.com/api/json/v1/1';

  getCocktailsByName(s: string): Observable<Drink[]> {
    return this.http
      .get<DrinksResponse>(`${this.url}/search.php`, {
        params: { s },
      })
      .pipe(map((res) => res.drinks));
  }

  getCocktailDetailsById(i: number): Observable<Drink> {
    return this.http
      .get<DrinksResponse>(`${this.url}/lookup.php`, {
        params: { i },
      })
      .pipe(map((res) => res.drinks[0]));
  }

  getIngredientsByName(i: string): Observable<Ingredient[]> {
    return this.http
      .get<IngredientsResponse>(`${this.url}/search.php`, {
        params: { i },
      })
      .pipe(map((res) => res.ingredients));
  }

  getIngredientById(iid: number): Observable<Ingredient> {
    return this.http
      .get<IngredientsResponse>(`${this.url}/lookup.php`, {
        params: { iid },
      })
      .pipe(map((res) => res.ingredients[0]));
  }

  getRandomCocktail(): Observable<Drink> {
    return this.http
      .get<DrinksResponse>(`${this.url}/random.php`)
      .pipe(map((res) => res.drinks[0]));
  }
}
