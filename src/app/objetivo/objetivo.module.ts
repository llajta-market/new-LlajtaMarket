import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjetivoRoutingModule } from './objetivo-routing.module';
import { ObjComponent } from './obj/obj.component';

@NgModule({
  declarations: [ObjComponent],
  imports: [
    CommonModule,
    ObjetivoRoutingModule
  ]
})
export class ObjetivoModule { }
