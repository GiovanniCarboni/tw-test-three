import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'snack-bar-layout',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
class SnackBarLayout {
  constructor(
    public sbRef: MatSnackBarRef<SnackBarLayout>,
    @Inject(MAT_SNACK_BAR_DATA) public label: string
  ) {}
}

@Component({
  selector: 'app-snack-bar',
  template: '<div></div>',
})
export class SnackBarComponent implements OnInit {
  duration = 2;

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onOpen(data: string) {
    this.snackBar.openFromComponent(SnackBarLayout, {
      data,
      duration: this.duration * 1000,
      panelClass: ['snack-bar'],
    });
  }
}
