import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'mis',
        pathMatch: 'full'
    },
    {
        path: 'mis',
        loadChildren: './mis/mis.module#MisModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
/*     {
        path: 'website',
        loadChildren: './website/website.module#WebsiteModule'
    } */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
