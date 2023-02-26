import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = [
  {path: '', component: UserTableComponent},
  {path: 'details', component: UserInfoComponent},
  {path: 'details/:id', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
