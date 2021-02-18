import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req : HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('jwt');
    const lo = /login/gi;
    const re = /register/gi;
  if (req.url.search(re) === -1 && req.url.search(lo) === -1) {
    let authService = this.injector.get(UserService);
    let update = {
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    };
    req = req.clone(update)
    console.log(req)
  }
    return next.handle(req);
  }
}
