import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppClienteComponent } from './app-cliente/app-cliente.component';

const routes: Routes = [
  {
    path:'',
    component:AppClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
