import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjComponent } from './obj/obj.component';

const routes: Routes = [
  {
    path:'',
    component:ObjComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjetivoRoutingModule { }
