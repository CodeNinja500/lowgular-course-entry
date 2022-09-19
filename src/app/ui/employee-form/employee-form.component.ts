import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create({ name: employeeForm.value.name, age: employeeForm.value.age, salary: employeeForm.value.salary }).subscribe({
      next: () => alert('Employee '+employeeForm.value.name +' has been added!'),
      error: (err:Error) => alert('Error while adding new employee'),
      complete: () => console.log('')
    });
  }
}
