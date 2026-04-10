import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html'
})
export class ScrollToTopComponent {
  protected isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible = window.scrollY > 500;
  }

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
