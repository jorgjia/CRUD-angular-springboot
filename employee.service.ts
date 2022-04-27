import { Injectable } from '@angular/core';

import { Employee} from './employee'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private HttpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(`${this.baseUrl}`);

   
}
createEmployee(employee : Employee): Observable <Object>{
  return this.HttpClient.post(`${this.baseUrl}`,employee);
}
getEmployeeById(id: number): Observable<Employee>{
  return this.HttpClient.get<Employee>(`${this.baseUrl}/${id}`);

}
updateEmployee(id:number, employee: Employee): Observable<Object>{
  return this.HttpClient.put(`${this.baseUrl}/${id}`, employee);

}
deleteEmployee(id: number): Observable<any> {
  return this.HttpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

}

