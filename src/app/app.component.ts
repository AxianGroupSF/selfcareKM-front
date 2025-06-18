import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OGF';
}
