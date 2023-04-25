import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthserveService } from '../authserve.service';
import { Route, Router } from '@angular/router';
import { Authservice } from '../condition/authservicee';
import { HttpStatusCode } from '@angular/common/http';
import{CommonService} from '../service/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
 
  localemail: any;
  constructor(
    private authService: AuthserveService,
    private router: Router,
    // private authservice1: Authservice,
    private shared:CommonService,
    private snackBar:MatSnackBar,
    // private HttpErrorResponse:HttpErrorResponse,


  ) {}


  ngOnInit() {
    
    
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  // loginProcess() {
  //   console.log('submit button is clicked');
  //   console.log(this.formGroup.valid);
  //   this.shared.setmessage(this.message);
     
  
  //   if (this.formGroup.valid) {
  //     this.authService.setEmail(this.formGroup.value.email);
  //            console.log('Email set:', this.formGroup.value.email);
  //     this.authService.login(this.formGroup.value).subscribe((result) => {
  //       console.log(result);
  //       const logintoken = localStorage.setItem('access_token', result.token);
  //       alert(result.message);
        
  //       this.formGroup.reset();
  //       // this.authservice1.login(); //this is for condition folder for giving privilages
  //       this.router.navigate(['dashboard']);
  //     });
  //   } else {
  //     (error: any) => {
  //       console.log('error message');
  //       alert(error.HttpErrorResponse.statusText); // Display the error message in an alert
  //     };
  //   }
  // }
  // loginprocess(){
  //   if(this.formGroup.valid){
  //     this.authService.login(this.formGroup.value).subscribe(result=>{
  //        localStorage.setItem("token",result.token);
  //       this.authservice.login();
  //       // this.authService.setEmail(result.email);
  //       this.authService.setEmail(this.formGroup.value.email);
  //       console.log('Email set:', this.formGroup.value.email);
  //       this.router.navigate(['/dashboard']);
        
  //       if(result.success){
  //           console.log(result);
  //           alert("Invaild Credentials");
  //       }else{
  //         alert("Login Successfull");
  //       }
  //     })
      
  //   }
    
  // }

 
  




  loginprocess() {
    // console.log('submit button is clicked');
    // console.log(this.formGroup.valid);
    // this.shared.setmessage(this.message);
     
  
    if (this.formGroup.valid) {
     
           

            localStorage.setItem('loginemail',this.formGroup.value.email);
          
      this.authService.login(this.formGroup.value).subscribe((res) => {
        console.log(res);
        const logintoken = localStorage.setItem('access_token', res.token);
        alert(res.message);
        
        this.formGroup.reset();
        // this.authservice1.login(); //this is for condition folder for giving privilages
        this.router.navigate(['dashboard'])},(error:HttpErrorResponse)=>{
                this.snackBar.open(error.error.msg,'ok', {  
                  duration: 2000 } );
              })
            }
    
  }}


