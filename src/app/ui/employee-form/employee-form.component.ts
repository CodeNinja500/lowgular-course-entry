import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: { name: string, age: number, salary: number }) {
    this._employeeService.create({ name: form.name, age: form.age, salary: form.salary }).subscribe({
      next: () => alert('Employee has been successfully created! Name: '+ form.name
      + ', age: '+ form.age +', salary: '+ form.salary),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }
}
