import { Component } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
import { Authservice } from '../condition/authservicee';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mySubscription:any;

  constructor(private Authserivice:Authservice,private router:Router, private activatedRoute: ActivatedRoute){
    
  }



  logout(){

    // if(this.Authserivice.IsAuthenticated())
    if(localStorage.getItem('access_token'))
    {
  
     return true;
  
   }else{
   return false;
  }
  }
  logoutbtn(){
   

  localStorage.removeItem('access_token')
  localStorage.removeItem('loginemail');
  // localStorage.next(null)
  alert("u r redirecting to home page")
  this.router.navigate([""])
  }
  
 

  }

