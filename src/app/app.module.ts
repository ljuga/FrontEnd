import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { ProgressBarAngularModule } from "progress-bar-angular";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ProgressBarAngularModule

  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
