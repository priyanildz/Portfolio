import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];
