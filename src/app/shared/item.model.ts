import { v4 as uuid } from 'uuid';

export class Item {
  id: string;
  checked: boolean = false;

  constructor(public text: string) {
    this.id = uuid();
  }
}
