import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared-service/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.css'],
  providers: [{provide: ConfirmDialogService, useValue: window['confirmDialogService']}],
})
export class ConfirmTestComponent implements OnInit {

  constructor(private service: ConfirmDialogService) { }

  resultConfirm: boolean;
  content = 'content from test';

  ngOnInit() {
  }

  changeTitle() {
    this.service.changeTitle('altered title');
  }

  receiveResultConfirm($event) {
    console.log($event);
    this.resultConfirm = $event;
  }

}
