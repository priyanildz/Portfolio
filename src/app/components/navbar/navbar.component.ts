import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  name: string;
  id: string;
  iconClass: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  protected readonly navItems: NavItem[] = [
    { name: 'Home', id: 'hero', iconClass: 'fa-solid fa-house' },
    { name: 'About', id: 'about', iconClass: 'fa-solid fa-user' },
    { name: 'Skills', id: 'skills', iconClass: 'fa-solid fa-microchip' },
    { name: 'Education', id: 'education', iconClass: 'fa-solid fa-graduation-cap' },
    { name: 'Experience', id: 'experience', iconClass: 'fa-solid fa-briefcase' },
    { name: 'Projects', id: 'projects', iconClass: 'fa-solid fa-folder-open' },
    { name: 'Certifications', id: 'certifications', iconClass: 'fa-solid fa-award' },
    { name: 'Contact', id: 'contact', iconClass: 'fa-solid fa-envelope' }
  ];
}
