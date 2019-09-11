import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PlacesPage
    }
]

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        PlacesRoutingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PlacesPage]
})
export class PlacesPageModule {}