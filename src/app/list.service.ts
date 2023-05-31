import { Item } from './shared/item.model';

export class ListService {
  list: Item[] = [];

  getList() {
    return [...this.list];
  }

  addItem(text: string) {
    this.list.push(new Item(text));
  }
  removeItem(id: string) {
    // TODO remove item
  }
  editItem(id: string) {
    // TODO edit item
  }
  toggleCheckItem(id: string) {
    // TODO toggle check item
  }
  checkAll() {
    // TODO check all
  }
  uncheckAll() {
    // TODO uncheck all
  }
  removeAll() {
    // TODO remove all
  }
}
