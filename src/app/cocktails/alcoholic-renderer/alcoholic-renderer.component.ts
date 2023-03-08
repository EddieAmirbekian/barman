import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alcoholic-renderer',
  template: `
    <span
      class="tag"
      [ngClass]="{
        'is-success': alcoholType === 'Alcoholic',
        'is-warning': alcoholType === 'Optional alcohol',
        'is-danger': alcoholType === 'Non alcoholic'
      }"
      >{{ alcoholType }}</span
    >
  `,
})
export class AlcoholicRendererComponent {
  @Input() alcoholType!: string;
}
