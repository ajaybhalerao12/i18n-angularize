import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { PiesService } from './pies.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    PiesService,
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => (locale === 'ja' ? 'JPY' : 'USD'), deps: [LOCALE_ID],
    },
  ],
};
