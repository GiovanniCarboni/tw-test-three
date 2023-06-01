import { Component } from '@angular/core';
import { ListService } from '../list.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css'],
})
export class ListActionsComponent {
  constructor(
    private listService: ListService,
    private snackBar: SnackBarComponent
  ) {}

  uncheckAll() {
    this.listService.uncheckAll();
    this.snackBar.onOpen('All items unchecked');
  }
  checkAll() {
    this.listService.checkAll();
    this.snackBar.onOpen('All items checked');
  }
  onRemoveAll() {
    this.listService.removeAll().then(() => {
      this.snackBar.onOpen('All items removed');
    });
  }
  isCheckAll() {
    return !this.listService.getList().some((item) => item.checked === false);
  }
  isUncheckAll() {
    return !this.listService.getList().some((item) => item.checked === true);
  }
  isRemoveAll() {
    return this.listService.getList().length < 1;
  }
}
