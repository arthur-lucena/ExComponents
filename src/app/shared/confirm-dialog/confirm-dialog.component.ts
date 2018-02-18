import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild('div') div: ElementRef;

  @Input() button: string;
  @Input() title: string;
  @Input() content: string;

  constructor(private dialog: MatDialog) { }

  @Output() confirmEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this.div.nativeElement.innerHTML = this.button;
  }

  emitConfirmEvent(resultConfirm) {
    this.confirmEvent.emit(resultConfirm);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogModalComponent, {
      width: '443px',
      height: '276x',
      data: { title: this.title, content: this.content }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmEvent.emit(true);
      } else {
        this.confirmEvent.emit(false);
      }
    });
  }
}

@Component({
  selector: 'app-criar-politica-seguranca-confirm',
  templateUrl: './confirm-dialog-modal.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
