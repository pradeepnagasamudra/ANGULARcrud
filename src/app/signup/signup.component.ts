import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthserveService } from '../authserve.service';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
   DOB = new Date();
  utcDate = new Date(this.DOB.getTime() + this.DOB.getTimezoneOffset() * 60000);

  constructor(private authService: AuthserveService,
     private router: Router,private snackBar:MatSnackBar) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
 firstName:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required]),
lastName:new FormControl('',[Validators.required]),
DOB:new FormControl('',[Validators.required, this.futureDateValidator()]),
 password:new FormControl('',[Validators.required]),
gender:new FormControl('',[Validators.required]),
contactNumber:new FormControl('',[Validators.required])
    });   
  }

  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const currentDate = new Date();
      const selectedDate = new Date(control.value);
      if (selectedDate > currentDate) {
        return { 'futureDate': true };
      }
      return null;
      };
}
  

 

  // signupProcess(){
    
  //       this.http.post<any>(this.authService.signup1,this.formGroup.value).subscribe(res=>{
  //         this._snackBar.open('SignIn Successfull','ok', {  
  //           duration: 2000 } );
  //         this.formGroup.reset()
  //         this.router.navigate(["login"])
  //         },(error:HttpErrorResponse)=>{
  //           this._snackBar.open(error.error.msg,'ok', {  
  //             duration: 2000 } );
  //         })
  //       }

  signupProcess(){
          if(this.formGroup.valid){
            this.authService.signup(this.formGroup.value).subscribe(res=>{
              // localStorage.setItem("token",result.token);
              // if(res.success){
              //     console.log(res);
              //     this.snackBar.open("Successfully Registered", "Close", {
              //     duration: 3000 // Set duration for the snackbar to display in milliseconds
              //     });  
              // }else(error:HttpErrorResponse)=>{
              //   console.log(res);
              //   // this.snackBar.open("Successfully Registered: " + result.message, "Close", {
              //   //  duration: 3000
              //   // });
              //   this.snackBar.open(error.error.msg,'ok',{
              //     duration:2000
              //   })
                
              // }
              this.snackBar.open('SignIn Successfull','ok', {  
                      duration: 2000 } );
                    this.formGroup.reset()
                    console.log(this.utcDate);
                    this.router.navigate(["login"])
                    },(error:HttpErrorResponse)=>{
                      this.snackBar.open(error.error.msg,'ok', {  
                        duration: 2000 } );
                    })
          } 
            this.formGroup.reset(); 
        }
    }
