import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-taznum',
  templateUrl: './taznum.component.html',
  styleUrls: ['./taznum.component.css'],
})
export class TaznumComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
