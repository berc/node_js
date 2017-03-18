import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket.component';

const basketRoutes: Routes = [{
    path: '', component: BasketComponent
}];

export const basketRouting = RouterModule.forChild( basketRoutes );
