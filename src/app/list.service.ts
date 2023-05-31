import { Item } from './shared/item.model';

export class ListService {
  list: Item[] = [new Item('spaghetti'), new Item('cilantro')];

  getList() {
    return [...this.list];
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
