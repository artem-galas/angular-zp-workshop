import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';
import {UserModel} from '../../models';

@Component({
  selector: 'ngwzp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: UserModel;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile()
      .subscribe(profile => {
        this.profile = profile.data;
      })
  }

  ngOnInit() {
  }

}
