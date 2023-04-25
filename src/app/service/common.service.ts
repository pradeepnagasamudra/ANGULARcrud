import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
message :string ="";
private messagesource = new BehaviorSubject<string>("default message for serice");
currentMessage =this.messagesource.asObservable();
  constructor() { }

setmessage(data:string){
this.message=data;
}

getmessage(){
return this.message
}


changemessage(message:string){
  this.messagesource.next(message)
}
}
