import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PROJECTS_DATA } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  project = signal<Project | null>(null);

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      const foundProject = PROJECTS_DATA.find(p => p.id === projectId);
      if (foundProject) {
        this.project.set(foundProject);
      } else {
        this.router.navigate(['/projects']);
      }
    } else {
      this.router.navigate(['/projects']);
    }
  }
}