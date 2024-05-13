import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Job } from '../../model/job.model';
import { JobInfoComponent } from '../job-info/job-info.component';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-job-favorites',
  standalone: true,
  imports: [CommonModule, JobInfoComponent],
  templateUrl: './job-favorites.component.html',
  styleUrl: './job-favorites.component.css'
})
export class JobFavoritesComponent implements OnInit {
  favorites!: Job[];
  showFavoriteIcon: boolean = false;

  constructor(private localStorageService: LocalStorageService) {};

  ngOnInit(): void {
    const jobs: Job[] = JSON.parse(this.localStorageService.getItem('jobs') || '[]');
    this.favorites = jobs.filter(job => job.favorited === true);
  }
}
