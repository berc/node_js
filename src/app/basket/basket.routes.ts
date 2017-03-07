import { RouterModule, Routes } from '@angular/router';
import { BasketListComponent } from './list/basket-list.component';

const driverRoutes: Routes = [
    {
    path: 'basket/', component: BasketListComponent
    }
];

export const driverRouting = RouterModule.forChild( driverRoutes );
