import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  @ViewChild('newItem', { static: false }) item: ElementRef;

  addItem(e: Event) {
    e.preventDefault();
    console.log(this.item.nativeElement.value);
    this.item.nativeElement.value = '';
  }
}
