import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './service/user.service';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RiverService } from './service/river.service';
import { RiverSectionService } from './service/river-section.service';
import { NavListComponent } from './nav-list/nav-list.component';
import { AgmCoreModule } from '@agm/core';
import { RedirectService } from './service/redirect.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmailComponent } from './email/email.component' ;
import { environment } from '../environments/environment' ;
import { AuthGuard } from './authorization/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    NavListComponent,
    NavBarComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    })
  ],
  providers: [UserService, RiverService, RiverSectionService, RedirectService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
