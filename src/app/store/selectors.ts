import { AppState } from './state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCocktailsFeature = createFeatureSelector<AppState>('cocktails');

export const selectCocktails = createSelector(
  selectCocktailsFeature,
  (state) => state.cocktails
);

export const selectCurrent = createSelector(
  selectCocktailsFeature,
  (state) => state.current
);

export const isLoading = createSelector(
  selectCocktailsFeature,
  (state) => state.isLoading
);
