import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductDepartmentComponent } from './products-department.component';
import { ProductImageComponent } from './products-image.component';
import { ProductPriceComponent } from './products-price.component';
import { ProductRowComponent } from './products-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
