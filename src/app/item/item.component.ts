import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../shared/item.model';
import { ListService } from '../list.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  isEditing: boolean = false;
  @Input() item: Item;
  @ViewChild('newText') newText: ElementRef;

  constructor(
    private listService: ListService,
    private snackBar: SnackBarComponent
  ) {}

  toggleCheck(id: string) {
    this.listService.toggleCheckItem(id);
  }
  onDelete(id: string) {
    this.listService.removeItem(id).then(() => {
      this.snackBar.onOpen('Item removed');
    });
  }
  startEdit() {
    this.isEditing = true;
  }
  focusInput() {
    this.newText.nativeElement.focus();
  }
  confirmOnEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') this.confirmEdit();
  }
  confirmEdit() {
    this.listService
      .editItem(this.item.id, this.newText.nativeElement.value)
      .then((message: string) => {
        this.isEditing = false;
        this.snackBar.onOpen(message);
      })
      .catch((err) => {
        this.isEditing = false;
        this.snackBar.onOpen(err);
      });
  }
}
