import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'session',
    loadChildren: () => import("./register/register.routes"),
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard/dashboard.routes"),
  },
  {
    path: "**",
    redirectTo: "/session",
  }

];
