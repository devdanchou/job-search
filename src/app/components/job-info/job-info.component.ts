import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../model/job.model';
import { CommonModule } from '@angular/common';
import { JobDataService } from '../../services/job-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css',
  providers: [JobDataService]
})
export class JobInfoComponent {
  @Input() job!: Job;
  @Input() showFavoriteIcon!: boolean;
  @Output() favoriteJob = new EventEmitter<Job>();
  @Output() unfavoriteJob = new EventEmitter<Job>();

  constructor() {}

  onClickFavoriteIcon(job: Job) {
    job.favorited = !job.favorited
    this.favoriteJob?.emit(job);
  }
}
