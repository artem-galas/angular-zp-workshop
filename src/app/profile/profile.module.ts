import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from '../services/profile/profile.service';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  declarations: [ProfileComponent],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
