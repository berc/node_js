
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverItemComponent } from './item/driver-item.component';
import { BasketListComponent } from './list/basket-list.component';

import { BasketService } from './basket.service';
import { driverRouting } from './basket.routes';

@NgModule({
  imports: [ CommonModule, driverRouting ],
  declarations: [ DriverItemComponent, BasketListComponent ],
  providers: [ BasketService ],
  exports: [ BasketListComponent ]
})
export class DriverModule {
}
