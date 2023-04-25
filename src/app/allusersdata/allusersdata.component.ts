import { Component } from '@angular/core';
import { AuthserveService } from '../authserve.service';
import { Authservice } from '../condition/authservicee';
import { Router } from '@angular/router';
import{LoginComponent} from '../login/login.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allusersdata',
  templateUrl: './allusersdata.component.html',
  styleUrls: ['./allusersdata.component.css'],
})
export class AllusersdataComponent {
  public getJsonValue:any;
  public displaycolomn:string[] =['email','password'];
  public datasource:any =[];
  alldata: any;
  constructor(private Authserivice: Authservice, private router: Router,private http:HttpClient) {
  
  }
// logOUT() {
//     // if (this.Authserivice.IsAuthenticated())
//     if(localStorage.getItem('access_token')) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   logout() {
//     this.Authserivice.logout();
//     localStorage.removeItem('access_token',);
//     // let token1=localStorage.getItem("access_token");
//     // token1= null;
//     alert('u r redirecting to home page');
   
//     this.router.navigate(['']);
//   }
public getmethod(){
  const alldata = this.http.get("http://localhost:5000/auth/all").subscribe((data: any) =>{
    console.table(data);
    this.getJsonValue =data;
    this.datasource=data;

  })
}
console(){
  console.table(this.datasource);
  console.log(  this.alldata);
}
}


