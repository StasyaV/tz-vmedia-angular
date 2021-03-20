import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionMenuComponent } from './permission-menu/permission-menu.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionMenuComponent,
  },
  {
    path: 'Groups',
    component: PermissionMenuComponent,
  },
  {
    path: 'Roles',
    component: PermissionMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
