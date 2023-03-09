import { CocktailWrapperComponent } from './cocktails/cocktail-wrapper/cocktail-wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './cocktails/cocktail/cocktail.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailWrapperComponent,
  },
  {
    path: 'cocktails/:id',
    component: CocktailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
