import { Component } from '@angular/core';
import { ListService } from './list.service';
import { Item } from './shared/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService],
})
export class AppComponent {
  list: Item[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.list = this.listService.list;
  }
  getChecked(condition: boolean) {
    return this.list.filter((item) => item.checked === condition);
  }
}
