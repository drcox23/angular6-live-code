import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input handling
import { RouterModule } from '@angular/router'; // for routing
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

// Services
import { AuthService } from './services/auth.service';
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommunicationComponent } from './pages/communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    CommunicationComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'communication', component: CommunicationComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
      ],
      { enableTracing: true } // this is for debugging only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    BackendService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
