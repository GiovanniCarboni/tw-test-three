import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewItemComponent, ItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
