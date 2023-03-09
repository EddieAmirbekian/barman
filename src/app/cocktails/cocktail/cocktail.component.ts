import { apiActions } from 'src/app/store/actions';
import { Drink } from './../../types';
import { selectCurrent } from './../../store/selectors';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(ActivatedRoute);

  cocktail$ = this.store.select(selectCurrent);

  ngOnInit() {
    this.router.params.subscribe((params) =>
      this.store.dispatch(apiActions.loadById({ id: +params['id'] }))
    );
  }

  getIngredients(drink: Drink) {
    let result = '';
    (Object.keys(drink) as Array<keyof typeof drink>)
      .filter((key) => key.startsWith('strIngredient'))
      .forEach((key) => {
        if (drink[key]) {
          const measureKey = key.replace(
            'strIngredient',
            'strMeasure'
          ) as keyof typeof drink;
          const measureValue = drink[measureKey]?.trim();
          result += `${drink[key]} (${measureValue}), `;
        }
      });
    return result.substring(0, result.length - 2);
  }
}
