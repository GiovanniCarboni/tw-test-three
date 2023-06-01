import { EventEmitter, Injectable } from '@angular/core';
import { Item } from './shared/item.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ListService {
  private list: Item[] = [];
  status = { loading: false };

  constructor() {
    const items = JSON.parse(localStorage.getItem('grocery-items'));
    if (items) this.list = items;
    else
      this.list = [
        { id: uuid(), text: 'spaghetti', checked: true },
        { id: uuid(), text: 'cilantro', checked: true },
        { id: uuid(), text: 'mozzarella', checked: false },
        { id: uuid(), text: 'onion', checked: true },
        { id: uuid(), text: 'eggplants', checked: false },
        { id: uuid(), text: 'grapefruits', checked: true },
        { id: uuid(), text: 'butter beans', checked: false },
        { id: uuid(), text: 'bread', checked: true },
        { id: uuid(), text: 'parmezan', checked: false },
        { id: uuid(), text: 'coffee', checked: false },
        { id: uuid(), text: 'water', checked: false },
        { id: uuid(), text: 'lemonade', checked: false },
      ];
  }

  getList() {
    return this.list;
  }

  async addItem(text: string) {
    this.status.loading = true;
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text.trim().length === 0 || text.trim().length > 30) {
          this.status.loading = false;
          reject('Invalid text');
        } else {
          this.list.unshift(new Item(text.trim()));
          this.status.loading = false;
          resolve('Item added');
        }
      }, 1000);
    });
  }

  async removeItem(id: string) {
    this.status.loading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const index = this.list.findIndex((item) => item.id === id);
    this.list.splice(index, 1);
    this.status.loading = false;
  }

  async editItem(id: string, text: string) {
    this.status.loading = true;
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text.trim().length === 0 || text.trim().length > 30) {
          this.status.loading = false;
          reject('Invalid text');
        } else {
          const item = this.list.find((item) => item.id === id);
          item.text = text.trim();
          item.checked = false;
          this.status.loading = false;
          resolve('Item modified');
        }
      }, 1000);
    });
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

  async removeAll() {
    this.status.loading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.list.length = 0;
    this.status.loading = false;
  }
}
