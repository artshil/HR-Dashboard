import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Employee } from 'src/app/models/employee';
import { Department } from 'src/app/models/department';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees!: Employee[];
  editState: boolean = false;
  empToEdit!: Employee;
  departmentList!: Department[];
  filter!: string;

  constructor(private ds: DepartmentService) { }

  ngOnInit(): void {
    this.ds.getEmployees().subscribe(employees => {      
      this.employees = employees;
    });

    this.ds.getDepartments().subscribe(departments => {
      this.departmentList = departments;
    });
  }

  onFilter(event: any, filter: any) {
    if(filter != "All") {
      this.ds.getEmployees().subscribe(employees => {      
        this.employees = employees.filter(employees => employees.e_dept === this.filter);
      });
    }
    else {
      this.ds.getEmployees().subscribe(employees => {      
        this.employees = employees;
      });
    }
  }

  deleteEmp(event:any, employee:Employee) {
    this.clearState();
    this.ds.deleteEmp(employee);
  }

  editEmp(event:any, employee:Employee) {
    this.editState = true;
    this.empToEdit = employee;
  }

  clearState() {
    this.editState = false;
  }

  updateEmp(employee:Employee) {
    console.log(employee);
    this.ds.updateEmp(employee);
    this.clearState();
  }

}
