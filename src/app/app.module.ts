import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

// Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
// import { appStore } from './store/state';
import { StateActions } from './store/state-actions';
import { BasketModule } from './basket/basket.module';
import { AppStore, createAppStoreFactoryWithOptions } from 'angular2-redux';
import { Reducer } from './store/state-reducer';

const appStoreFactory = createAppStoreFactoryWithOptions({
  reducers: Reducer,
  debug: true
});

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent],
  imports: [
    BasketModule,
    SharedModule,
    BrowserModule, HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    FlexLayoutModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    { provide: AppStore, useFactory: appStoreFactory },
    StateActions
  ]
})
export class AppModule {
}
