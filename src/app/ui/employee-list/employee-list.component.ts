import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from '../../model/person.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }

  message: string = "Do not distribute the list";
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.delete(id).subscribe({
      next: () => alert('Employee with ID: "'+id +'" has been deleted!'),
      error: (Err: Error) => alert('Error while deleting an employee!'),
      complete: () => null
    });
  }
}
