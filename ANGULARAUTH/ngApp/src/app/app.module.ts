import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,EventsService,AuthGuard,
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptorService,
     multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
