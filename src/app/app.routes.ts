import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { AdminComponent } from './pages/admin/admin.component';


export const routes: Routes = [
    // {path: '', component: HomeComponent},
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    // {path: 'home', component: HomeComponent},

    //to load above home component lazyly or to use lazy load concept, as this is standalone project, lazy loading is already there, use below.

    {
        path: '', loadComponent:()=> import('./pages/home/home.component').then(m => m.HomeComponent ),
    }
    ,
    // {
        // path: 'admin', component:AdminComponent
    // }
    //or you cam import as below for lazy loading
    {
        path : 'admin' , 
        loadComponent:()=> import('./pages/admin/admin.component').then((c) => c.AdminComponent),
    },
    {
        path:'about' , loadComponent: ()=> import('./pages/about/about.component').then(c=> c.AboutComponent)
    },
    {
        path:'courses', loadComponent:()=> import('./pages/courses/courses.component').then(c=>c.CoursesComponent)
    },
    

];
