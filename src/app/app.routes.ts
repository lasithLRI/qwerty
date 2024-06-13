import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home',loadComponent:()=>import('./components/main-page/main-page.component').then(c=>c.MainPageComponent)}
];
