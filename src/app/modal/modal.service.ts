import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable()
export class ModalService {
  show$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public openModal(): void {
    this.show$.next(true);
  }

  public closeModal(): void {
    this.show$.next(false);
  }
}
