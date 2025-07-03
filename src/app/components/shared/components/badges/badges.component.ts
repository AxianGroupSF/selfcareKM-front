import { Component, input } from '@angular/core';
import { BadgeColor, BadgeType } from '../../models/Badges';

@Component({
    selector: 'app-badges',
    imports: [],
    templateUrl: './badges.component.html',
    styleUrl: './badges.component.scss'
})
export class BadgesComponent {
  aspectBadge = input<BadgeColor>('black');
  typeBadge = input<BadgeType>('text');
  numberContent = input<number>(0);
  withBorder = input<boolean>(false);
  numberChar(number: number): string {
    let str: string = String(number);
    if (2 > str.length) {
      str = '0' + str;
    }
    return str;
  }
}
