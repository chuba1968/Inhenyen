import { Component, OnInit } from '@angular/core';
import { CaseService } from '../services/case.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-start-case',
  templateUrl: './start-case.page.html',
  styleUrls: ['./start-case.page.scss'],
})
export class StartCasePage implements OnInit {
  statusReport: string = '';

  constructor(
    private caseService: CaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getStatusReport();
  }

  startCase() {
    this.caseService.startCase().subscribe(
      async (response) => {
        console.log('Case started successfully', response);
        const toast = await this.toastController.create({
          message: 'Case started successfully!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.getStatusReport();
      },
      async (error) => {
        console.error('Failed to start case', error);
        const toast = await this.toastController.create({
          message: 'Failed to start case. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    );
  }

  getStatusReport() {
    this.caseService.getStatusReport().subscribe(
      (response) => {
        this.statusReport = response.status_report;
      },
      (error) => {
        console.error('Failed to get status report', error);
      }
    );
  }
}