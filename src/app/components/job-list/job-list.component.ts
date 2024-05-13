import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDataService } from '../../services/job-data.service';
import { Job } from '../../model/job.model';
import { JobInfoComponent } from '../job-info/job-info.component';
import { JobFavoritesComponent } from '../job-favorites/job-favorites.component';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobInfoComponent, JobFavoritesComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  providers: [JobDataService]
})
export class JobListComponent implements OnInit {
  jobs!: Job[];
  showFavoriteIcon: boolean = true;

  constructor(
    private localStorageService: LocalStorageService,
    private jobDataService: JobDataService
  ) {};

  ngOnInit(): void {
    if (this.localStorageService.getItem('jobs')) {
      this.jobs = JSON.parse(this.localStorageService.getItem('jobs') || '[]');
    } else {
      this.jobDataService.getAllJobs().subscribe(data => {
        this.jobs = data;
      });
    }
  }

  onFavoriteJob() {
    this.localStorageService.setItem('jobs', JSON.stringify(this.jobs));
  }
}