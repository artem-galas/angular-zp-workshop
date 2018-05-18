import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';
import {UserModel} from '../../models';
import {ModalService} from '../../modal/modal.service';

@Component({
  selector: 'ngwzp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: UserModel;
  public file: File;
  public newImage: string;

  constructor(private profileService: ProfileService,
              private modalService: ModalService) {
    this.profileService.getProfile()
      .subscribe(profile => {
        this.profile = profile.data;
      })
  }

  ngOnInit() {
  }

  public openModal() {
    this.modalService.openModal();
  }

  public loadImage(event: Event) {
    const el: HTMLInputElement = event.target as HTMLInputElement;
    if (el.files.length) {
      this.file = el.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newImage = e.target.result;
      };

      reader.readAsDataURL(this.file);

      this.profileService
        .updateProfileImage(this.file)
        .subscribe(user => {
          this.profile = user.data;
          this.modalService.closeModal();
        });
    }
  }
}
