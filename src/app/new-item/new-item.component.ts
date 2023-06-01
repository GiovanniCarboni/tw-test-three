import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListService } from '../list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  @ViewChild('newItem', { static: false }) itemInput: ElementRef;
  status: { loading: boolean };

  constructor(
    private listService: ListService,
    private snackBar: SnackBarComponent
  ) {
    this.status = this.listService.status;
  }

  addItem(e: Event) {
    e.preventDefault();
    this.listService.addItem(this.itemInput.nativeElement.value).then(() => {
      this.itemInput.nativeElement.value = '';
      this.snackBar.onOpen('Item added');
    });
  }
}
