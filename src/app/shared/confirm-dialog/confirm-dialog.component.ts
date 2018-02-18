import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild('div') div: ElementRef;

  @Input() element: string;
  @Input() title: string;
  @Input() content: string;
  @Input() confirmBt: string;
  @Input() cancelBt: string;

  constructor(private dialog: MatDialog) { }

  @Output() confirmEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this.div.nativeElement.innerHTML = this.element;
  }

  emitConfirmEvent(resultConfirm) {
    this.confirmEvent.emit(resultConfirm);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogModalComponent, {
      width: '443px',
      height: '276x',
      data: { title: this.title, content: this.content, confirmBt: this.confirmBt, cancelBt: this.cancelBt }
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
export class ConfirmDialogModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  @ViewChild('content') content: ElementRef;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.content.nativeElement.innerHTML = this.data.content;
  }
}
