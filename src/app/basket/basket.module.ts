import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasketService } from './basket.service';
import { basketRouting } from './basket.routes';
import { BasketComponent } from './basket.component';

@NgModule({
  imports: [ CommonModule, basketRouting ],
  declarations: [ BasketComponent ],
  providers: [ BasketService ],
  exports: [ BasketComponent ]
})
export class BasketModule {
}
