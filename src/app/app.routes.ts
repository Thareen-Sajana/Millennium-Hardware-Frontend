import { Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { HomeComponent } from './component/home/home.component';
import { RentComponent } from './component/rent/rent.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },

    {
        path:"home",
        component: HomeComponent
    },

    {
        path:"customer",
        component: CustomerComponent
    },

    {
        path:"rent",
        component: RentComponent
    }
];
