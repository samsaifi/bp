import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
    @Input() active: any;
    close_svg_icon: string = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`;
    menu_svg_icon: string = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> `;
    constructor(private sanitizer: DomSanitizer, private router: Router) {}
    getMenuIcon() {
        return this.active
            ? this.sanitizer.bypassSecurityTrustHtml(this.close_svg_icon)
            : this.sanitizer.bypassSecurityTrustHtml(this.menu_svg_icon);
    }
    toggleSidebar() {
        this.active = !this.active;
    }
    onDashboardClick() {
        return this.router.navigate(['dashboard']);
    }
    onProfileClick() {
        return this.router.navigate(['profile']);
    }
    onHistoryClick() {
        return this.router.navigate(['history']);
    }
    onLogoutClick() {
        return this.router.navigate(['logout']);
    }
}
