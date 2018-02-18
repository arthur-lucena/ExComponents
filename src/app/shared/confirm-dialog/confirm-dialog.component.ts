import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared-service/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  providers: [{provide: ConfirmDialogService, useValue: window['confirmDialogService']}],
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private service: ConfirmDialogService) { }

  title: string;

  ngOnInit() {
    this.service.titleObservable.subscribe(title => {
      this.title = title;
    });
  }
}
