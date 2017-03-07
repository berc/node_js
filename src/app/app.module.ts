import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';

import { DriverModule } from './driver';
import { TeamModule } from './team';
import { SharedModule } from './shared';
import { MaterialModule } from '@angular/material';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent],
  imports: [
    DriverModule, TeamModule, SharedModule,
    BrowserModule, HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    FlexLayoutModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS
  ]
})
export class AppModule {

}
