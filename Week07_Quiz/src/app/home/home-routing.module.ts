import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            { 
                path: 'ukm', 
                loadChildren: './ukm/ukm.module#UkmPageModule' 
            },
            { 
                path: 'profile', 
                loadChildren: './profile/profile.module#ProfilePageModule' 
            },
            {
                path: '',
                redirectTo: '/home/tabs/ukm',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/ukm',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class HomeRoutingModule {}