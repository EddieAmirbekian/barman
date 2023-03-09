import { RouterModule } from '@angular/router';
import { CocktailsService } from './../services/cocktails.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailWrapperComponent } from './cocktail-wrapper/cocktail-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlcoholicRendererComponent } from './alcoholic-renderer/alcoholic-renderer.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    CocktailComponent,
    CocktailListComponent,
    CocktailWrapperComponent,
  ],
  imports: [
    AlcoholicRendererComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
  ],
  exports: [
    CocktailComponent,
    CocktailWrapperComponent
  ],
  providers: [
    CocktailsService
  ]
})
export class CocktailsModule { }
