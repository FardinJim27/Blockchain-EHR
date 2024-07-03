import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ViewRecordsComponent } from './view-records/view-records.component';
import { DoctorComponent } from 'src/admin/doctor/doctor.component';

const routes: Routes = [
  {
    path: '',
    component: PatientDashboardComponent,

    children: [
      {
        path: 'patient-dashboard',
        component: DashboardHomeComponent,
      },
      {
        path: 'appointment',
        component: AppointmentsComponent,
      },
      {
        path: 'view-records',
        component: ViewRecordsComponent,
      },
      { 
        path: 'doctor', 
        component: DoctorComponent 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
