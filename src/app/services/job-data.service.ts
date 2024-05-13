import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Job } from '../model/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {
  constructor(private readonly http: HttpClient) {};

  public getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('jobs');
  }

  public getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`jobs/${id}`);
  }
}
