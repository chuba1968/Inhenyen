import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://aicounsel.com.ng/auth.php'; // Update this to your PHP script URL
  private token: string | null = null;
  private userName: string = '';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private storage: Storage, private router: Router) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    await this.loadToken();
    await this.loadUserName();
  }

  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { action: 'signup', name, email, password }).pipe(
      tap((response: any) => {
        if (response && response.token && response.name) {
          this.setToken(response.token);
          this.setUserName(response.name);
          this.loggedIn.next(true);
          this.router.navigate(['/home']);
        }
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { action: 'login', email, password }).pipe(
      tap((response: any) => {
        if (response && response.token && response.name) {
          this.setToken(response.token);
          this.setUserName(response.name);
          this.loggedIn.next(true);
          this.router.navigate(['/home']);
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl, { action: 'logout' }).pipe(
      tap(() => {
        this.token = null;
        this.userName = '';
        this.storage.remove('auth_token');
        this.storage.remove('user_name');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  getToken(): string | null {
    return this.token;
  }

  private setToken(token: string) {
    this.token = token;
    this.storage.set('auth_token', token);
  }

  private setUserName(name: string) {
    this.userName = name;
    this.storage.set('user_name', name);
  }

  async loadToken() {
    this.token = await this.storage.get('auth_token') || null;
    this.loggedIn.next(this.token != null);
    if (this.token) {
      this.router.navigate(['/home']);
    }
  }

  async loadUserName() {
    this.userName = (await this.storage.get('user_name')) || '';
  }

  async getUserName(): Promise<string> {
    if (!this.userName) {
      this.userName = (await this.storage.get('user_name')) || '';
    }
    return this.userName;
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
