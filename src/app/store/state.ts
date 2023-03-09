import { Drink } from './../types';
export interface AppState {
  cocktails: Drink[];
  current: Drink | null;
  isLoading: boolean;
}

export const INITIAL_STATE: AppState = {
  cocktails: [],
  current: null,
  isLoading: false
};
