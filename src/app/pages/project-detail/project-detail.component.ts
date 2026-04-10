import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioProject, projects } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  protected project?: PortfolioProject;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.project = projects.find((p) => p.id === id);
      window.scrollTo(0, 0);
    });
  }

  protected backToProjects(): void {
    this.router.navigate(['/'], { fragment: 'projects' });
  }
}
