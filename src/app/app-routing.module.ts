import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/home/home.component";
import {HomeComponentModule} from "./ui/home/home.component-module";
import {EmployeeListComponent} from "./ui/employee-list/employee-list.component";
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {EmployeeFormComponent} from "./ui/employee-form/employee-form.component";


const routes: Routes = [{
  path: '',
  component: HomeComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'create-employee',
    component: EmployeeFormComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeComponentModule,EmployeeListComponentModule,EmployeeListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
