import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot ,UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { Authservice } from "./authservicee";




// interface CanActivate {  CanActivate is not coming properly so you need this interface to overcome that problem

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
//   }

@Injectable()

export class courseGuardService implements CanActivate{
    constructor(private authservice:Authservice, private router:Router){

    }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//    if(this.authservice.IsAuthenticated()){
  if(localStorage.getItem('access_token')){
    return true;
   }else{
    this.router.navigate(['']);
    return false;
   }
}
}

