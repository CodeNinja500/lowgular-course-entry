import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { ApiResponse} from "./api.response";
import { EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            id: employeeResponse.id,
            mail: employeeResponse.employee_name + "lowgular.io",
            img: employeeResponse.profile_image
          }
        });
      }));
  }
}
