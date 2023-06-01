import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ListService } from './list.service';
import { Item } from './shared/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService],
})
export class AppComponent implements DoCheck {
  list: Item[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.list = this.listService.getList();
  }

  ngDoCheck(): void {
    localStorage.setItem('grocery-items', JSON.stringify(this.list));
  }

  getChecked(condition: boolean) {
    return this.list.filter((item) => item.checked === condition);
  }
}
