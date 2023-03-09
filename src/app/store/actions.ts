import { Drink } from './../types';
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const apiActions = createActionGroup({
  source: 'API',
  events: {
    'Load by id': props<{id: number}>(),
    'Search by Name': props<{name: string}>(),
    'Random Cocktail': emptyProps(),
  }
});

export const appActions = createActionGroup({
  source: 'App',
  events: {
    'Load by ID Success': props<{drink: Drink}>(),
    'Load by ID Fail': emptyProps(),
    'Search by Name Success': props<{drinks: Drink[]}>(),
    'Search by Name Fail': emptyProps(),
    'Is Loading': props<{isLoading: boolean}>(),
    'Random Cocktail Success': props<{drink: Drink}>(),
    'Random Cocktail Fail': emptyProps(),
  }
});
