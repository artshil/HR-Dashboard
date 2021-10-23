import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Department } from '../models/department';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentCollection!: AngularFirestoreCollection<Department>;
  departments: Observable<Department[]>;
  departmentDoc!: AngularFirestoreDocument<Department>;

  employeeCollection!: AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
  employeeDoc!: AngularFirestoreDocument<Employee>;


  constructor(public afs: AngularFirestore) { 

    //Fetching Departments Data

    this.departmentCollection = afs.collection<Department>('Departments', ref => ref.orderBy('d_id','asc'));

    this.departments = this.departmentCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Department;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    //Fetching Employees Data

    this.employeeCollection = afs.collection<Employee>('Employees', ref => ref.orderBy('e_id','asc'));

    this.employees = this.employeeCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Employee;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

  }

  getDepartments() {
    return this.departments;
  }

  addDepartment(department: Department) {
    this.departmentCollection.add(department);
  }

  deleteDept(department: Department) {
    this.departmentDoc = this.afs.doc(`Departments/${department.id}`);
    this.departmentDoc.delete();
  }

  updateDept(department: Department) {
    this.departmentDoc = this.afs.doc(`Departments/${department.id}`);
    this.departmentDoc.update(department);
  }


  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employeeCollection.add(employee);
  }

  deleteEmp(employee: Employee) {
    this.employeeDoc = this.afs.doc(`Employees/${employee.id}`);
    console.log(this.employeeDoc);
    this.employeeDoc.delete();
  }

  updateEmp(employee: Employee) {
    this.employeeDoc = this.afs.doc(`Employees/${employee.id}`);
    this.employeeDoc.update(employee);
  }

}
