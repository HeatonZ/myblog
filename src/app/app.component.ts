import { Component } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import {MdDialog, MdDialogRef} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

  constructor(public dialog: MdDialog) {
  
  }


}
