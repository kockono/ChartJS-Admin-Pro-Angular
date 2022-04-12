import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styles: [
  ]
})
export class AccountsSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  public links!: NodeListOf<Element>;

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this.checkCurrentTheme();
  }

  changeTheme(theme:string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url); // Sustituye el url del href del index.html
    localStorage.setItem('theme', url);
  }

  checkCurrentTheme(){
    const linksClass2:any = document.querySelectorAll('.selector');
    const links:any = this._document.querySelectorAll('.selector');

    console.log( links );
    console.log( linksClass2 );

    links.forEach(element => {
      element.classList.remove('working');
    });

    linksClass2.forEach(element => {
      element.classList.remove('working');
    });

  }

}

