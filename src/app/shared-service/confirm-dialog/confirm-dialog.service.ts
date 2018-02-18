import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class ConfirmDialogService {

  private title = new BehaviorSubject<string>('title default');
  titleObservable = this.title.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.title.next(title);
  }
}
