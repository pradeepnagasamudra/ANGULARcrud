import { Component } from '@angular/core';
import { Authservice } from './condition/authservicee';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
// import { Router ,} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
  mySubscription:any;

  constructor(private Authserivice:Authservice,private router:Router, private activatedRoute: ActivatedRoute){
    
  }


  // logout(){

  //   // if(this.Authserivice.IsAuthenticated())
  //   if(localStorage.getItem('access_token'))
  //   {
  
  //    return true;
  
  //  }else{
  //  return false;
  // }
  // }
  // logoutbtn(){
   

  // localStorage.removeItem('access_token')
  // localStorage.removeItem('loginemail');
  // // localStorage.next(null)
  // alert("u r redirecting to home page")
  // this.router.navigate([""])
  // }
  
 

  }

