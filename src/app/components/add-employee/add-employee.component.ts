import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Employee } from 'src/app/models/employee';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    e_id: '',
    e_name: '',
    e_dept: ''
  }
  departmentList!: Department[];

  constructor(private ds : DepartmentService) { }

  onSubmit() {
    if(this.employee.e_id !='' && this.employee.e_name !='' && this.employee.e_dept !='') {
      this.ds.addEmployee(this.employee);
      this.employee.e_id='';
      this.employee.e_name='';
      this.employee.e_dept='';
    }
  }

  ngOnInit(): void {
    this.ds.getDepartments().subscribe(departments => {
      this.departmentList = departments;
    });
  }

}
