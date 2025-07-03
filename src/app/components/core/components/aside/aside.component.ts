import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  @Input() isCollapsed = false; // reçoit l'état depuis le parent
  @Output() toggleSidebar = new EventEmitter<boolean>();

  onToggleSidebar(): void {
    this.toggleSidebar.emit(!this.isCollapsed); // émet l'événement vers le parent
  }
}
