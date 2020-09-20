import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


export interface userData {
  _id: string,
  firstname: string,
  lastname: string,
  role: number,
  hod: boolean,
  admin: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  currentUser = {};
  baseUri: string = 'http://localhost:4000/admin';
  baseUri2: string = 'http://localhost:4000/users';
  baseUri3: string = 'http://localhost:4000/class';


  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getUserProfile11() {
    let url = `${this.baseUri3}/user-profile`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  getClassStuds(id): Observable<any> {
    let api = `${this.baseUri3}/get/studs/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        // alert("In users");
        return res || {}
      }),
      catchError(this.errorMgmt)

    )
  }



  createClass(data): Observable<any> {
    let url = `${this.baseUri}/class/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  getClasses() {
    let url = `${this.baseUri3}/getClass`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  getAllStudents() {
    let url = `${this.baseUri3}/getStudents/every`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  getStudents() {
    let url = `${this.baseUri3}/getStudents`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  updateClass(id, data): Observable<any> {
    let url = `${this.baseUri3}/enroll/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  updateClassTeacher(id, data): Observable<any> {
    let url = `${this.baseUri3}/enroll/teacher/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  updateTeacherClass(id, data): Observable<any> {
    let url = `${this.baseUri3}/teacher/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  updateStudentClass(id, data): Observable<any> {
    let url = `${this.baseUri3}/enroll/student/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getStudentComplaints(): Observable<any> {
    let url = `${this.baseUri3}/studentComplaints`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  createComplaint(data, id): Observable<any> {
    let url = `${this.baseUri3}/student/send/complaint/${id}`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  getAllComplaints() {
    let url = `${this.baseUri3}/allComplaints`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  updateComplaint(id): Observable<any> {
    let api = `${this.baseUri3}/hod/resolve/${id}`;
    // alert(data);

    var data2 = {
      status: true
    }
    JSON.parse(JSON.stringify(data2));
    return this.http.put(api, data2).pipe(
      map((res: Response) => {

        return res || {}
      }),
      catchError(this.errorMgmt)

    )
  }




  Register(data): Observable<any> {
    let url = `${this.baseUri2}/signup`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  RegisterStudent(data): Observable<any> {
    let url = `${this.baseUri2}/signup/student`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  HODRegister(data): Observable<any> {
    let url = `${this.baseUri2}/HODSelect`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }



  deptRegister(data): Observable<any> {
    let url = `${this.baseUri2}/deptCreate`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  courseRegister(data): Observable<any> {
    let url = `${this.baseUri2}/courseCreate`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
















  getDept() {
    let url = `${this.baseUri2}/getDept`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  // Get all Teachers
  getTeachers() {
    let url = `${this.baseUri2}/getUsersByRole/2`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get all Admins
  getAdmins() {
    let url = `${this.baseUri2}/getAdmins`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  getCourses() {
    let url = `${this.baseUri2}/getCourses`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  getUsers() {
    return this.http.get(`${this.baseUri2}`);
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  // Login

  sendCredential(username: string, password: string): Observable<any> {
    let url = `${this.baseUri2}/login`;
    return this.http.post<{ token: string }>(url, { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return result;
        })
      );
  }


  profile(): Observable<any> {
    let api = `${this.baseUri2}/profile`;
    return this.http.get(api, { headers: { Authorization: `${this.getToken()}` } }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  // User profile
  getUserProfile2(): Observable<any> {
    let api = `${this.baseUri2}/user-profile`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.baseUri2}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {

        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  updateUser(id, data): Observable<any> {
    let url = `${this.baseUri2}/firsttime/${id}`;
    JSON.parse(JSON.stringify(data));

    var data2 = data + { "firsttime": "false" };
    JSON.parse(JSON.stringify(data2));
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  // Create
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getUsersByRole(role) {
    return this.http.get(`${this.baseUri2}/getUsersByRole/${role}`);
  }



  // Get employee
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/teacher/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get employee
  getDeptt(id): Observable<any> {
    let url = `${this.baseUri}/dept/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/teacher/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  updateDept(id, data): Observable<any> {
    let url = `${this.baseUri}/dept/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  removeCourses(id): Observable<any> {
    let url = `${this.baseUri2}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  delete(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteDept(id): Observable<any> {
    let url = `${this.baseUri}/dept/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  deleteUser(id): Observable<any> {
    let url = `${this.baseUri2}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }



  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
