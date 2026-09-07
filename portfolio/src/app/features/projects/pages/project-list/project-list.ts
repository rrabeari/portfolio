import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card';
import { PROJECTS_DATA } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectListComponent {
  // Liste complète des projets
  projects = signal<Project[]>(PROJECTS_DATA);

  // Catégorie active ('Tous' par défaut)
  selectedCategory = signal<string>('Tous');

  // Extraction dynamique de toutes les catégories uniques
  categories = computed(() => {
    const cats = this.projects().map(p => p.category);
    return ['Tous', ...Array.from(new Set(cats))];
  });

  // Signal calculé pour la liste filtrée
  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Tous') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === category);
  });

  // Action lors du clic sur un bouton de filtre
  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}