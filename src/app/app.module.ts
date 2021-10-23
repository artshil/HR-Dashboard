import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DepartmentsComponent } from './components/departments/departments.component';

import { DepartmentService } from './services/department.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    NavbarComponent,
    AddDepartmentComponent,
    EmployeesComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'mic-app'),
    AngularFirestoreModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule,
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
