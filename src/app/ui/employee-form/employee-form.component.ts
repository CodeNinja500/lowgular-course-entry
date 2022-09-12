import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null,[Validators.required,Validators.min(0)]),
    salary: new FormControl(null, [Validators.required,Validators.min(0)])
  });

  onButtonClicked(form: {name: string,age: number,salary: number}){
    alert('User was successfully added to the database! Name: '+form.name+', age: '+form.age+', salary: '+form.salary);
  }
}
