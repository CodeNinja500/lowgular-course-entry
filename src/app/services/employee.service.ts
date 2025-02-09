import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { EmployeeFormModel } from '../model/employee-form.model';
import { PersonModel } from '../model/person.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]>{
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response:ApiResponse<EmployeeResponse[]>):PersonModel[] => {
        return response.data.map((employeeResponse:EmployeeResponse)=>{
          return{
            name: employeeResponse.employee_name,
            id: employeeResponse.id,
            mail: employeeResponse.employee_name + '@lowgular.io',
            img: employeeResponse.profile_image
          }
        })
      }
    ));

  }


  delete(id: string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(
      _ => void 0));
  }

  create(employee: EmployeeFormModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(
      _ => void 0));
  }
  getOne(id: string): Observable<PersonModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/' + id).pipe(
      map((response): PersonModel => ({
        id: response.data.id,
        img: response.data.profile_image,
        name: response.data.employee_name,
        mail: response.data.employee_name + "@lowgular.io",
      }))
    );
  }


}

