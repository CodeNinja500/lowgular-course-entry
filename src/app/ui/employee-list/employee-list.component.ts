import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from "../../model/person.model";
import { Observable } from "rxjs";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}

  message: string = "Do not distribute the list";
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

}
