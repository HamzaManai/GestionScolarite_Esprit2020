import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';  
import { JwtModule } from '@auth0/angular-jwt';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 

import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NgSelectModule } from '@ng-select/ng-select';

import { ApiService } from './service/api.service';
import { ApiDashService } from './service/apiDash.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from "@angular/forms";
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

import {HomepageComponent} from './components/homepage/homepage.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { TeacherCreateComponent } from './components/teacher-create/teacher-create.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { HodCreateComponent } from './components/hod-create/hod-create.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { HodMainComponent } from './components/hod-main/hod-main.component';
import { CourseManageComponent } from './components/course-manage/course-manage.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { ClassCreateComponent } from './components/class-create/class-create.component';
import { ClassEnrollComponent } from './components/class-enroll/class-enroll.component';
import { StudentMainComponent } from './components/student-main/student-main.component';
import { StudentClassComponent } from './components/student-class/student-class.component';
import { ClassEnrollTeacherComponent } from './components/class-enroll-teacher/class-enroll-teacher.component';
import { TeacherClassViewComponent } from './components/teacher-class-view/teacher-class-view.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentComplainComponent } from './components/student-complain/student-complain.component';
import { HodComplainViewComponent } from './components/hod-complain-view/hod-complain-view.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    LoginComponent,
    SignupComponent,
    LoginAdminComponent,
   
    HomepageComponent,
    TeacherCreateComponent,
    DepartmentCreateComponent,
    TeacherListComponent,
    TeacherEditComponent,
    HodCreateComponent,
    TeacherMainComponent,
    HodMainComponent,
    CourseManageComponent,
    CourseViewComponent,
    DepartmentEditComponent,
    CourseEditComponent,
    StudentCreateComponent,
    ClassCreateComponent,
    ClassEnrollComponent,
    StudentMainComponent,
    StudentClassComponent,
    ClassEnrollTeacherComponent,
    TeacherClassViewComponent,
    StudentProfileComponent,
    StudentComplainComponent,
    HodComplainViewComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    NgSelectModule,
    
    
   
 
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/users/login']
      }
    }),
    
   
 
    BrowserAnimationsModule
  ],
  providers: [ApiService,ApiDashService, {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
