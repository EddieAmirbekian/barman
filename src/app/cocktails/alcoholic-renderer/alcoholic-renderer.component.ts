import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-alcoholic-renderer',
  standalone: true,
  imports: [CommonModule, NzTagModule],
  template: ` <nz-tag [nzColor]="color">{{ alcoholType }}</nz-tag> `,
})
export class AlcoholicRendererComponent {
  @Input() alcoholType!: string;

  get color(): string {
    switch (this.alcoholType) {
      case 'Alcoholic':
        return 'green';
      case 'Optional alcohol':
        return 'orange';
      case 'Non alcoholic':
        return 'red';
      default:
        return '';
    }
  }
}
