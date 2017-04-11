import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { GetMusicService } from '../providers/getMusic';
import { GlobalService } from '../providers/global.service';
import 'hammerjs';
import { AddMusicComponent } from './add-music/add-music.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { MvComponent } from './mv/mv.component';
import { HelpComponent } from './help/help.component';
import { OtherComponent } from './other/other.component';
import { ChangeComponent } from './change/change.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'message', component: MessageComponent },
  { path: 'mv', component: MvComponent },
  { path: 'help', component: HelpComponent },
  { path: 'other', component: OtherComponent },
  { path: 'change', component: ChangeComponent },
  {
    path: 'add',
    component: AddMusicComponent,
  },{
    path: '**',// **代表该路由是一个通配符路径。如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。当需要显示404页面或者重定向到其它路由时，该特性非常有用。
    component: WelcomeComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddMusicComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ProfileComponent,
    MessageComponent,
    MvComponent,
    HelpComponent,
    OtherComponent,
    ChangeComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
     RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [GetMusicService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
