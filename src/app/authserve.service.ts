import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthserveService {

oneperson:any;
 email:any;
 signup1="http://localhost:5000/auth/signup";
  constructor(private http:HttpClient) { }
  setEmail(email: string) {
    this.email = email; // Set the login email
  }

  getEmail(): string {
    return this.email; // Retrieve the stored login email
  }
  getProfile(email: any): Observable<any> {
    return this.http.get(`//localhost:5000/auth/api/${email}`); // Replace with your API endpoint for fetching a user by email
  }


login(data: any):Observable<any>{
  return this.http.post("http://localhost:5000/auth/login",data)
  //first paramter is url and 2nd will the data
}
signup(data: any):Observable<any>{
  return this.http.post("http://localhost:5000/auth/signup",data)
  //first paramter is url and 2nd will the data
}
allusers(data: any):Observable<any>{
  return this.http.get("http://localhost:5000/auth/all",data)
  //first paramter is url and 2nd will the data
}

private apiUrl = 'http://localhost:5000/auth';

    updateProfile(user: any): Observable<any> {
      const url = `${this.apiUrl}/update/${user.email}`; // Modify the URL to include the email
      return this.http.put(url, user); // Send a PUT request to update the user details
    }


// isUserLoggedIn(){
//   return true;
// }



}
