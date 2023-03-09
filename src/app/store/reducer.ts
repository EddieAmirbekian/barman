import { appActions } from './actions';
import { INITIAL_STATE } from './state';
import { createReducer, on } from '@ngrx/store';

export const reducer = createReducer(
  INITIAL_STATE,
  on(appActions.loadByIdSuccess, (state, { drink }) => ({
    ...state,
    current: drink,
    isLoading: false,
  })),
  on(appActions.loadByIdFail, (state) => ({ ...state, isLoading: false })),
  on(appActions.isLoading, (state, { isLoading }) => ({ ...state, isLoading })),
  on(appActions.searchByNameSuccess, (state, { drinks }) => ({
    ...state,
    cocktails: drinks,
    isLoading: false,
  })),
  on(appActions.searchByNameFail, (state) => ({ ...state, isLoading: false })),
  on(appActions.randomCocktailSuccess, (state, { drink }) => ({
    ...state,
    current: drink,
  }))
);
