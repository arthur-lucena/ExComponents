import { Component } from '@angular/core';
import { ConfirmDialogService } from './shared-service/confirm-dialog/confirm-dialog.service';

window['confirmDialogService'] = new ConfirmDialogService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testes';
}
