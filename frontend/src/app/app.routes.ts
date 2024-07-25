import { Routes } from '@angular/router';
import { CabListComponent } from './components/cab-list/cab-list.component';
import { CabBookingComponent } from './components/cab-booking/cab-booking.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cablist', pathMatch: 'full' },
    { path: 'cablist', component: CabListComponent },
    { path: 'book-cab', component: CabBookingComponent },
];
