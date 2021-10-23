import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  department: Department = {
    d_id: '',
    d_name: ''
  }
  constructor(private ds : DepartmentService) {

   }

   onSubmit() {
     if(this.department.d_id !='' && this.department.d_name !='') {
       this.ds.addDepartment(this.department);
       this.department.d_id='';
       this.department.d_name='';
     }
   }

  ngOnInit(): void {
  }

}
