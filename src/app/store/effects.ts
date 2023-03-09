import { appActions, apiActions } from './actions';
import { CocktailsService } from './../services/cocktails.service';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

export const loadByIdEffect = createEffect(
  (actions = inject(Actions)) => {
    const service = inject(CocktailsService);
    return actions.pipe(
      ofType(apiActions.loadById),
      switchMap(({ id }) =>
        service.getCocktailDetailsById(id).pipe(
          map((drink) => appActions.loadByIdSuccess({ drink })),
          catchError(() => of(appActions.loadByIdFail()))
        )
      )
    );
  },
  { functional: true }
);

export const searchByNameEffect = createEffect(
  (actions = inject(Actions)) => {
    const service = inject(CocktailsService);
    return actions.pipe(
      ofType(apiActions.searchByName),
      switchMap(({ name }) =>
        service.getCocktailsByName(name).pipe(
          map((drinks) => appActions.searchByNameSuccess({ drinks })),
          catchError(() => of(appActions.searchByNameFail()))
        )
      )
    );
  },
  { functional: true }
);

export const randomCocktailsEffect = createEffect(
  (actions = inject(Actions)) => {
    const service = inject(CocktailsService);
    return actions.pipe(
      ofType(apiActions.randomCocktail),
      switchMap(() =>
        service.getRandomCocktail().pipe(
          map((drink) => appActions.randomCocktailSuccess({ drink })),
          catchError(() => of(appActions.randomCocktailFail()))
        )
      )
    );
  },
  { functional: true }
);

export const navigateToRandom = createEffect(
  (actions = inject(Actions)) => {
    const router = inject(Router);
    return actions.pipe(
      ofType(appActions.randomCocktailSuccess),
      tap(({ drink }) => router.navigate(['cocktails', drink.idDrink]))
    );
  },
  { functional: true, dispatch: false }
);
