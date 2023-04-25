import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllusersdataComponent } from './allusersdata/allusersdata.component';
import { courseGuardService } from './condition/course-guard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: AllusersdataComponent,
    canActivate: [courseGuardService],
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
