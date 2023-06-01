import { Injectable } from '@angular/core';
import { Item } from './shared/item.model';

@Injectable()
export class ListService {
  private list: Item[] = [new Item('spaghetti'), new Item('cilantro')];

  constructor() {
    const items = JSON.parse(localStorage.getItem('grocery-items'));
    if (items) this.list = items;
  }

  getList() {
    return this.list;
  }
  addItem(text: string) {
    this.list.unshift(new Item(text));
  }
  removeItem(id: string) {
    const index = this.list.findIndex((item) => item.id === id);
    this.list.splice(index, 1);
  }
  editItem(id: string, text: string) {
    const item = this.list.find((item) => item.id === id);
    item.text = text;
  }
  toggleCheckItem(id: string) {
    const item = this.list.find((item) => item.id === id);
    item.checked = !item.checked;
  }
  checkAll() {
    this.list.forEach((item) => (item.checked = true));
  }
  uncheckAll() {
    this.list.forEach((item) => (item.checked = false));
  }
  removeAll() {
    this.list.length = 0;
  }
}
