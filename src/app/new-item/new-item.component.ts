import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  @ViewChild('newItem', { static: false }) item: ElementRef;

  constructor(private listService: ListService) {}

  addItem(e: Event) {
    e.preventDefault();
    this.listService.addItem(this.item.nativeElement.value);
    this.item.nativeElement.value = '';
  }
}
