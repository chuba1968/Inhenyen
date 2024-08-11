import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      async (response) => {
        console.log('Login successful', response);
        const toast = await this.toastController.create({
          message: 'Login successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.router.navigate(['/home']); // Navigate to home page after successful login
      },
      async (error) => {
        console.error('Login failed', error);
        const toast = await this.toastController.create({
          message: 'Login failed. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    );
  }
}