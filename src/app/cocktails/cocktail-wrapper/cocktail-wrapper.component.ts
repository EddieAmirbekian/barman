import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cocktail-wrapper',
  templateUrl: './cocktail-wrapper.component.html',
  styleUrls: ['./cocktail-wrapper.component.scss']
})
export class CocktailWrapperComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    search: null
  });
}
