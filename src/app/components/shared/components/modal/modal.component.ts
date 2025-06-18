import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { DefaultButtonComponent } from '../default-button/default-button.component';

@Component({
    selector: 'app-modal',
    imports: [DefaultButtonComponent, CommonModule],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title!: string;
  @Input() widthModal!: number;
  actionExecute = output<boolean>();
  @Input() buttonLabelLeft!: string;
  @Input() buttonLabelRight!: string;
  openAct: boolean = false;
  @Input() set openAction(action: boolean) {
    this.onOpen(action);
  }
  openActionChange = output<boolean>();
  @Input() typeModal: 'default' | 'right' = 'default';
  @Input() actionEttir: boolean = false;

  onOpen(action: boolean) {
    this.openAct = action;
    if (!action) {
      this.openActionChange.emit(action);
    }
  }
  onExecute() {
    this.actionExecute.emit(true);
  }
  onEttir(action: boolean) {
    console.log('action', action);

    this.actionEttir = action;
  }
}
