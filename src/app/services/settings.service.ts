import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');
  public linksClass: NodeListOf<Element>;

  constructor() {
      // Si no existe ningun theme tendra por defaul el tema con las pipas
      const theme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
      this.linkTheme.setAttribute('href', theme)
  }

  changeTheme(theme:string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url); // Sustituye el url del href del index.html
    localStorage.setItem('theme', url);
  }

  checkCurrentTheme(){
    const linksClass = document.querySelectorAll('.selector');

    linksClass.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnTheme === currentTheme ) {
        element.classList.add('working');
      }

    });

  }

}
