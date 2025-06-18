import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-action.component.html',
  styleUrl: './btn-action.component.scss',
})
export class BtnActionComponent {
  onAction = output<boolean>();
  @Input() size!: string;
  @Input() icon!: string;
  callAction() {
    this.onAction.emit(true);
  }
}
