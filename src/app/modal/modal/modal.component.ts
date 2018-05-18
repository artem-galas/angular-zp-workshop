import { Component} from '@angular/core';
import { trigger,  style, animate, transition } from '@angular/animations';
import {ModalService} from '../modal.service';

@Component({
  selector: 'ngwzp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'translate(0, -100%)' }),
        animate('400ms ease-in-out')
      ]),
      transition('* => void', [
        animate('450ms ease-in-out', style({ transform: 'translate(0, -150%)' }))
      ])
    ]),
    trigger('backdrop', [
      transition('* => void', [
        animate('450ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ModalComponent {

  constructor(public modalService: ModalService) {}

  public closeModal() {
    this.modalService.closeModal();
  }

}
