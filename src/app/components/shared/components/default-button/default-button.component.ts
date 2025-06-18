import {
  Component,
  computed,
  effect,
  input,
  output,
  WritableSignal,
  ɵINPUT_SIGNAL_BRAND_WRITE_TYPE,
} from '@angular/core';
import {
  ButtonAspect,
  ButtonIconPosition,
  ButtonSize,
  DefaultButton,
} from '../../models/default-button';

@Component({
  selector: 'app-default-button',
  standalone: true,
  imports: [],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss',
})
export class DefaultButtonComponent {
  label = input<string>('');
  size = input<ButtonSize>('md');
  aspect = input<ButtonAspect>('primary');
  icon = input<boolean>(false);
  doubleIcon = input<boolean>(false);
  fontIcon = input<string>('icn-cube');
  fontIcon2 = input<string>('icn-cube');
  iconPosition = input<ButtonIconPosition>('left');
  disable = input<boolean>(false);
  fullWidth = input<boolean>(false);
  data = input<DefaultButton>({});

  labelValue: string = '';
  sizeValue: ButtonSize = 'md';
  aspectValue: ButtonAspect = 'primary';
  iconValue: boolean = false;
  doubleIconValue: boolean = false;
  fontIconValue: string = 'icn-cube';
  fontIcon2Value: string = 'icn-cube';
  iconPositionValue: ButtonIconPosition = 'left';
  disableValue: boolean = false;
  fullWidthValue: boolean = false;

  constructor() {
    effect(() => {
      this.updateValues(this.data());
    });
  }

  updateValues(data: DefaultButton) {
    this.labelValue = data.label ?? this.label();
    this.sizeValue = data.size ?? this.size();
    this.aspectValue = data.aspect ?? this.aspect();
    this.iconValue = data.icon ?? this.icon();
    this.doubleIconValue = data.doubleIcon ?? this.doubleIcon();
    this.fontIconValue = data.fontIcon ?? this.fontIcon();
    this.fontIcon2Value = data.fontIcon2 ?? this.fontIcon2();
    this.iconPositionValue = data.iconPosition ?? this.iconPosition();
    this.disableValue = data.disable ?? this.disable();
    this.fullWidthValue = data.fullWidth ?? this.fullWidth();
  }

  action = output();

  actionButton() {
    this.action.emit();
  }
}
