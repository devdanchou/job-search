import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job.model';
import { ActivatedRoute } from '@angular/router';
import { JobDataService } from '../../services/job-data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../pipes/safe-HTML.pipe';


@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
  providers: [JobDataService]
})
export class JobDetailComponent implements OnInit {
  job$!: Observable<Job>;
  parser = new DOMParser();

  constructor(
      private route: ActivatedRoute,
      private jobDataService: JobDataService
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.job$ = this.jobDataService.getJob(id);
    console.log('hello2');
    console.log(this.job$)
    this.job$.subscribe(res => console.log(res));
  }
}
