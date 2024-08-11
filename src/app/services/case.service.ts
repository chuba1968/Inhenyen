import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private apiUrl = 'http://aicounsel.com.ng/case.php'; // Update this to your PHP script URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  startCase(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.post(this.apiUrl, { action: 'start_case', token });
  }

  getStatusReport(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.post(this.apiUrl, { action: 'get_status_report', token });
  }
}