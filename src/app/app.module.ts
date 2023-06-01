import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { ListActionsComponent } from './list-actions/list-actions.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemComponent,
    ListActionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [SnackBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
