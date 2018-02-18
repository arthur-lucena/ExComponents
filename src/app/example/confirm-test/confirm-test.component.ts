import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.css'],
})
export class ConfirmTestComponent implements OnInit {

  constructor() { }

  resultConfirm: boolean;
  button = '<input type="button" value="openModal" />';
  title = 'Example Title';
  content = 'Example content, example content, example content, example content, example content, example content, example content, ' +
            'example content, example content, example content, example content, example content, example content, example content,' +
            'example content, example content, example content, example content, example content, example content, example content';

  ngOnInit() {
  }

  receiveResultConfirm($event) {
    console.log($event);
    this.resultConfirm = $event;
  }

}
