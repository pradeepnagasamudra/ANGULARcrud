import { Component, OnInit } from '@angular/core';
import{CommonService} from '../service/common.service';
import { AuthserveService } from '../authserve.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


user: any; // Define a user object to store the fetched user data

  constructor(private userService: AuthserveService) { }

  ngOnInit() {


    const emailvalue = localStorage.getItem('loginemail') // Retrieve the stored login email

    // Fetch the profile data using the retrieved email
    this.userService.getProfile(emailvalue).subscribe(
      (response) => {
        console.log('Email retrieved:', emailvalue);
        // this.user = response.employepostData;
        if (response.employepostData.length > 0) {
          this.user = response.employepostData[0]; // Access the first item in the UserModel array
        }
      },
      (error) => {
        console.error(error);
      }
       
      // (error) => {
      //   console.error(error);
      // }
    );
  }
  onSubmit() {
    // Call the service method to update the user details in the database
    this.userService.updateProfile(this.user).subscribe(
      (response) => {
        console.log('User details updated:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );
  }
}
