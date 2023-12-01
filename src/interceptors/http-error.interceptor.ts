// src/interceptors/http-error.interceptor.ts

import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly injector: Injector) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    try {
      const translateService = this.injector.get(TranslateService);
      // Log using translate service
    } catch {
      // Log without translation, translation service is not yet available
    }

    // Continue with the request
    return next.handle(req);
  }
}
