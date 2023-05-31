import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../shared/item.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  isEditing: boolean = false;
  @Input() item: Item;
  @ViewChild('newText') newText: ElementRef;

  constructor(private listService: ListService) {}

  toggleCheck(id: string) {
    this.listService.toggleCheckItem(id);
  }
  onDelete(id: string) {
    this.listService.removeItem(id);
  }
  startEdit() {
    // this.newText.nativeElement.focus();
    this.isEditing = true;
  }
  confirmEdit() {
    this.listService.editItem(this.item.id, this.newText.nativeElement.value);
    this.isEditing = false;
  }
}
