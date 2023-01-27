import { Employee } from './employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeList: Array<Employee> = [
    {id: 1, name: 'John', email: 'john@tomtaz.com', joiningData: new Date('2005-02-12'), department: 'HR'},
    {id: 2, name: 'Bob', email: 'bob@tomtaz.com', joiningData: new Date('2010-04-23'), department: 'DevOps'},
    {id: 3, name: 'Tom', email: 'tom@tomtaz.com', joiningData: new Date('2015-03-13'), department: 'Engineering'},
    {id: 4, name: 'Julia', email: 'julia@tomtaz.com', joiningData: new Date('2022-05-17'), department: 'Engineering'},
    {id: 5, name: 'Sergio', email: 'sergio@tomtaz.com', joiningData: new Date('2021-06-15'), department: 'Finance'},
    {id: 6, name: 'Martin', email: 'matrin@tomtaz.com', joiningData: new Date('2019-03-14'), department: 'Engineering'},
  ]

  onDeleteEmployee(employee: Employee){
    this.employeeList.splice(this.employeeList.indexOf(employee), 1)
  }
}
