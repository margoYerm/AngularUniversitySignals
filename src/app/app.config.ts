import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CounterService } from './services/counter.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)    
  ]
};
