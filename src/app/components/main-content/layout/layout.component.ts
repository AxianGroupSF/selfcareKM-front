import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { AsideComponent } from '../../core/components/aside/aside.component';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AsideComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
    isCollapsed = false;

    ngOnInit(): void {
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState !== null) {
        this.isCollapsed = savedState === 'true';
        }
    }

    handleToggleSidebar(newState: boolean): void {
        this.isCollapsed = !this.isCollapsed;

        // Mettre à jour l'état et l'enregistrer dans localStorage
        this.isCollapsed = newState;
        localStorage.setItem('sidebarCollapsed', String(newState));
    }
}
