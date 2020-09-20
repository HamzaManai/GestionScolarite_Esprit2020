import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from "./shared/auth.guard";
import { AdminMainComponent } from './components/admin-main/admin-main.component';
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

import { PaiementhodComponent  } from './components/Paiement-hod/Paiement-hod.component';

import { StudentMainComponent } from './components/student-main/student-main.component';
import { StudentClassComponent } from './components/student-class/student-class.component';
import { ClassEnrollTeacherComponent } from './components/class-enroll-teacher/class-enroll-teacher.component';

import { TeacherClassViewComponent } from './components/teacher-class-view/teacher-class-view.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentComplainComponent } from './components/student-complain/student-complain.component';
import { HodComplainViewComponent } from './components/hod-complain-view/hod-complain-view.component';

import {HomepageComponent} from './components/homepage/homepage.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AgentScolariteListComponent } from './components/agent-scolarite-list/agent-scolarite-list.component';
import { AgentScolariteCreateComponent } from './components/agent-scolarite-create/agent-scolarite-create.component';
import { AgentExamCreateComponent } from './components/agent-exam-create/agent-exam-create.component';
import { AgentExamListComponent } from './components/agent-exam-list/agent-exam-list.component';
import { AgentExamEditComponent } from './components/agent-exam-edit/agent-exam-edit.component';
import { AgentScolariteEditComponent } from './components/agent-scolarite-edit/agent-scolarite-edit.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

import { AgentScolariteMainComponent } from './components/agent-scolarite-main/agent-scolarite-main.component';
import { AgentExamMainComponent } from './components/agent-exam-main/agent-exam-main.component';
import { TeacherMessagerieComponent } from './components/teacher-messagerie/teacher-messagerie.component';


const routes: Routes = [

  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'home', component: HomepageComponent},
  { path: 'signup', component: SignupComponent},
  // { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
  // { path: 'dashboard/:id', component: DashboardComponent,canActivate: [AuthGuard]},
  { path: 'admin/main', component: AdminMainComponent,canActivate: [AuthGuard]},
  { path: 'teacher/main', component: TeacherMainComponent,canActivate: [AuthGuard]},
  { path: 'hod/main', component: HodMainComponent,canActivate: [AuthGuard]},
  { path: 'admin/main/:id', component: AdminMainComponent,canActivate: [AuthGuard]},
  { path: 'teacherCreate', component: TeacherCreateComponent,canActivate: [AuthGuard] },
  { path: 'teacherList', component: TeacherListComponent,canActivate: [AuthGuard] },
  { path: 'teacherEdit/:id', component: TeacherEditComponent,canActivate: [AuthGuard] },
  { path: 'deptEdit/:id', component: DepartmentEditComponent,canActivate: [AuthGuard] },
  { path: 'courseEdit/:id', component: CourseEditComponent,canActivate: [AuthGuard] },
  { path: 'deptCreate', component: DepartmentCreateComponent,canActivate: [AuthGuard] },
  { path: 'hodCreate', component: HodCreateComponent,canActivate: [AuthGuard] },
  { path: 'courseManage', component: CourseManageComponent,canActivate: [AuthGuard] },
  { path: 'courseView', component: CourseViewComponent,canActivate: [AuthGuard] },
  { path: 'studentCreate', component: StudentCreateComponent,canActivate: [AuthGuard] },
  { path: 'class/create', component: ClassCreateComponent,canActivate: [AuthGuard] },
  { path: 'class/enroll/:id', component: PaiementhodComponent,canActivate: [AuthGuard] },
  { path: 'student/main', component: StudentMainComponent,canActivate: [AuthGuard]},
  { path: 'student/main/:id', component: StudentMainComponent,canActivate: [AuthGuard]},
  { path: 'student/class', component: StudentClassComponent,canActivate: [AuthGuard]},
  { path: 'student/class/:id', component: StudentClassComponent,canActivate: [AuthGuard]},
  { path: 'student/profile', component: StudentProfileComponent,canActivate: [AuthGuard]},
  { path: 'student/complain', component: StudentComplainComponent,canActivate: [AuthGuard]},
  {path:  'studentList', component:StudentListComponent,canActivate: [AuthGuard]},
  { path: 'hod/complain/view', component: HodComplainViewComponent,canActivate: [AuthGuard]},
  { path: 'teacher/class', component: ClassEnrollTeacherComponent,canActivate: [AuthGuard]},
  { path: 'teacher/class/:id', component: ClassEnrollTeacherComponent,canActivate: [AuthGuard]},
  {path:  'agentScolariteCreate', component:AgentScolariteCreateComponent,canActivate: [AuthGuard]},
  {path: 'agentScolariteList' , component:AgentScolariteListComponent,canActivate: [AuthGuard]},
  {path: 'AgentScolariteEdit/:id' , component:AgentScolariteEditComponent,canActivate: [AuthGuard]},
  {path: 'StudentEdit/:id' , component:AgentScolariteMainComponent,canActivate: [AuthGuard]},

  {path: 'teacher/messagerie' , component:TeacherMessagerieComponent,canActivate: [AuthGuard]},



  {path:  'agentExamCreate', component:AgentExamCreateComponent,canActivate: [AuthGuard]},
  {path: 'agentExamList' , component:AgentExamListComponent,canActivate: [AuthGuard]},
  {path: 'agentExamEdit/:id' , component:AgentExamEditComponent,canActivate: [AuthGuard]},
  { path: 'teacher/view/class', component: TeacherClassViewComponent,canActivate: [AuthGuard]},
  { path: 'teacher/view/class:id', component: TeacherClassViewComponent,canActivate: [AuthGuard]},
  { path: 'AgentSC/main', component: AgentScolariteMainComponent,canActivate: [AuthGuard]},
  { path: 'AgentEX/main', component:  AgentExamMainComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginAdminComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
