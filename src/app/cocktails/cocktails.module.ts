import { CocktailsService } from './../services/cocktails.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailWrapperComponent } from './cocktail-wrapper/cocktail-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlcoholicRendererComponent } from './alcoholic-renderer/alcoholic-renderer.component';



@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailWrapperComponent,
    AlcoholicRendererComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    CocktailWrapperComponent
  ],
  providers: [
    CocktailsService
  ]
})
export class CocktailsModule { }
