import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
employee:Employee=new Employee();
}
