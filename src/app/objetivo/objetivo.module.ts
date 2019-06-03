import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjetivoRoutingModule } from './objetivo-routing.module';
import { ObjComponent } from './obj/obj.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ObjComponent],
  imports: [
    CommonModule,
    ObjetivoRoutingModule,
    FormsModule
  ]
})
export class ObjetivoModule { }
