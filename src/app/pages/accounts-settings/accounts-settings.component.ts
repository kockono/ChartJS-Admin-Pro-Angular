import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
  styles: [
  ]
})
export class AccountsSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  // const links:any = this._document.querySelectorAll('.selector'); ocupas el inject

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme:string) {
    this.settingsService.changeTheme(theme);
  }

}
