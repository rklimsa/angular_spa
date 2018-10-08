import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { TextComponent } from './components/text/text.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderComponent } from './components/table/table-header/table-header.component';
import { TableRowComponent } from './components/table/table-row/table-row.component';
import { TableFooterComponent } from './components/table/table-footer/table-footer.component';

const routes: Array<Route> = [{
  path: '',
  component: AppComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    InputComponent,
    ButtonComponent,
    TextComponent,
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
