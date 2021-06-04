import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { UserDto } from 'src/model/User-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login(user: UserDto){
    if(user.username !== '' && user.password !== ''){
      this.loggedIn.next(true);
      this.router.navigate(['/'])
    }
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
