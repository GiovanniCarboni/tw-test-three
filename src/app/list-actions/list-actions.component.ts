import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css'],
})
export class ListActionsComponent {
  constructor(private listService: ListService) {}

  uncheckAll() {
    this.listService.uncheckAll();
  }
  checkAll() {
    this.listService.checkAll();
  }
  onRemoveAll() {
    this.listService.removeAll();
  }
}
