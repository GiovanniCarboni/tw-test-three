import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Item } from './shared/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService],
})
export class AppComponent implements OnInit {
  list: Item[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.list = this.listService.list;
  }

  // ngDoCheck() {
  //   console.log(this.list);
  // }
}
