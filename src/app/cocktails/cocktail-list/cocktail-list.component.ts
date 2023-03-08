import { Drink } from './../../types';
import { CocktailsService } from './../../services/cocktails.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() searchForm!: FormGroup;

  private readonly service = inject(CocktailsService);

  cocktails: Drink[] = [];
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.service.getCocktailsByName('').subscribe((drinks) => {
      this.cocktails = drinks;
      this.isLoading = false;
    });

    this.searchForm.valueChanges
      .pipe(
        tap(() => (this.isLoading = true)),
        map((r) => r.search),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((search) => this.service.getCocktailsByName(search))
      )
      .subscribe((drinks) => {
        this.cocktails = drinks;
        this.isLoading = false;
      });
  }
}
