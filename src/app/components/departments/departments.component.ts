import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments!: Department[];
  editState: boolean = false;
  deptToEdit!: Department;

  constructor(private ds: DepartmentService) { }

  ngOnInit(): void {
    this.ds.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  
  deleteDept(event:any, department:Department) {
    this.clearState();
    this.ds.deleteDept(department);
  }

  editDept(event:any, department:Department) {
    this.editState = true;
    this.deptToEdit = department;
  }

  clearState() {
    this.editState = false;
  }

  updateDept(department:Department) {
    this.ds.updateDept(department);
    this.clearState();
  }


}
