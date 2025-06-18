export type ButtonSize = 'sm' | 'md';
export type ButtonAspect =
  | 'primary'
  | 'outline'
  | 'outline2'
  | 'unborder'
  | 'secondary';
export type ButtonIconPosition = 'left' | 'right';

export interface DefaultButton {
  label?: string;
  size?: ButtonSize;
  aspect?: ButtonAspect;
  icon?: boolean;
  doubleIcon?: boolean;
  fontIcon?: string;
  fontIcon2?: string;
  iconPosition?: ButtonIconPosition;
  disable?: boolean;
  fullWidth?: boolean;
}
