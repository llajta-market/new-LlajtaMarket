import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelComponent } from './components/control-panel/control-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full'},
  { path: 'control-panel', component: ControlPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
