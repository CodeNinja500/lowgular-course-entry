import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from '../../model/person.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }

  message: string = "Important message! Do not distribute the list!"
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll()

  remove(id: string) {
    this._employeeService.delete(id).subscribe({
      next:() => alert('Employee with id: '+id+' has been successfully removed from the list.'),
      error: (err: Error) => console.log(err),
      complete:() => console.log()
    });
  }

}
