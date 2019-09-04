import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'places', pathMatch: 'full' },
    { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule'},
    { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
