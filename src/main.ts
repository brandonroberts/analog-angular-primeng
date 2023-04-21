import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { mainProviders } from './main.providers';

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter(), ...mainProviders, provideAnimations()],
});
