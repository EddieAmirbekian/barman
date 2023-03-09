import { selectCocktails, isLoading } from './../../store/selectors';
import { apiActions, appActions } from './../../store/actions';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() searchForm!: FormGroup;

  private readonly store = inject(Store);

  cocktails$ = this.store.select(selectCocktails);
  isLoading$ = this.store.select(isLoading);

  ngOnInit() {
    this.searchForm.get('search')!.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((search) => {
        this.store.dispatch(appActions.isLoading({isLoading: true}));
        this.store.dispatch(apiActions.searchByName({name: search}));
      });
  }
}
