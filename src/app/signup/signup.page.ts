import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) { }

  signup() {
    this.authService.signup(this.name, this.email, this.password).subscribe(
      async (response) => {
        console.log('Signup successful', response);
        const toast = await this.toastController.create({
          message: 'Signup successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.router.navigateByUrl('/home', { replaceUrl: true });
      },
      async (error) => {
        console.error('Signup failed', error);
        const toast = await this.toastController.create({
          message: 'Signup failed. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    );
  }
}