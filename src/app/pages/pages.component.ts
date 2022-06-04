import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent  {
  constructor(private settingsService: SettingsService) { }

}
