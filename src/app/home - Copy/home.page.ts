import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadUserName();
  }

  async loadUserName() {
    this.userName = await this.authService.getUserName();
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigateByUrl('/login', { replaceUrl: true });
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }
}