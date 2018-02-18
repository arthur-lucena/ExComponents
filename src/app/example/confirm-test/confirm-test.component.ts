import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.css'],
})
export class ConfirmTestComponent implements OnInit {

  constructor() { }

  resultConfirm: boolean;
  element = '<input type="button" value="openModal" />';
  title = 'Example Title';
  content = '<p>Example content, example content, example content, example content, example content, example content, example content, ' +
            'example content, example content, example content, example content, example content, example content, example content,' +
            'example content, example content, example content, example content, example content, example content, example content</p>' +
            '<p>u sure?</p>';
  confirmBt = 'yes';
  cancelBt = 'no';

  ngOnInit() {
  }

  receiveResultConfirm($event) {
    console.log($event);
    this.resultConfirm = $event;
  }

}
