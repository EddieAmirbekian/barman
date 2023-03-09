import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { apiActions } from 'src/app/store/actions';

@Component({
  selector: 'app-cocktail-wrapper',
  templateUrl: './cocktail-wrapper.component.html',
  styleUrls: ['./cocktail-wrapper.component.scss']
})
export class CocktailWrapperComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly store = inject(Store);

  form = this.formBuilder.group({
    search: null
  });

  onRandom() {
    this.store.dispatch(apiActions.randomCocktail());
  }
}
