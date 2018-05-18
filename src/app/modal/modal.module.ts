import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ModalComponent],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
