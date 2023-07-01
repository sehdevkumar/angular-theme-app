import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

const DARK_THEME_KEY = 'dark-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme: boolean;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.isDarkTheme = this.loadThemeFromLocalStorage();
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.saveThemeToLocalStorage();
    this.applyTheme();
  }

  private loadThemeFromLocalStorage(): boolean {
    const storedTheme = localStorage.getItem(DARK_THEME_KEY);
    return storedTheme === 'true';
  }

  private saveThemeToLocalStorage(): void {
    localStorage.setItem(DARK_THEME_KEY, this.isDarkTheme.toString());
  }

  private applyTheme(): void {
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark-mode');
      this.renderer.removeClass(document.documentElement, 'light-mode');
    } else {
      this.renderer.addClass(document.documentElement, 'light-mode');
      this.renderer.removeClass(document.documentElement, 'dark-mode');
    }
  }
}
