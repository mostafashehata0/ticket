import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaznumComponent } from './components/taznum/taznum.component';
import { ChartComponent } from './components/chart/chart.component';
import { TazLinkComponent } from './components/taz-link/taz-link.component';
import { TickectsSalesComponent } from './components/tickects-sales/tickects-sales.component';
import { TableComponent } from './components/table/table.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpErrorInterceptor } from '../interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaznumComponent,
    ChartComponent,
    TazLinkComponent,
    TickectsSalesComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useExisting: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    '/tazkarty/Tazkarty/src/assets/i18n/',
    '.json'
  );
}
