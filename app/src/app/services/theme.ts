import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root' // Permite usarlo en cualquier lugar sin declarar proveedores
})
export class ThemeService {
  readonly isDarkMode = signal<boolean>(this.loadInitialTheme());

  constructor() {
    effect(() => {
      const isDark = this.isDarkMode();
      const htmlElement = document.documentElement;

      if (isDark) {
        htmlElement.classList.add('dark-theme');
      } else {
        htmlElement.classList.remove('dark-theme');
      }

      localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
    });
  }

  toggleTheme() {
    this.isDarkMode.update(dark => !dark);
  }

  private loadInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}