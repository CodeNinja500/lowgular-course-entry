import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeServiceModule} from "./services/employee.service-module";
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    EmployeeListComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
