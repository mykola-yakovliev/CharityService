import { Component, OnInit } from '@angular/core';
import { WeatherForecast, ProjectsClient, ProjectApiModel } from 'src/generated';
import { Router } from '@angular/router';
import { appRoutes } from '../app.routes';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public data: WeatherForecast[] = [];
  public projects: ProjectApiModel[] = [];

  constructor(private _projectClient: ProjectsClient, private router: Router) { }

  ngOnInit() {
    this._projectClient.getProjects(null, null).subscribe((projects) => this.projects = projects);
  }

  goToDetails(id: number) {
    this.router.navigate([appRoutes.ProjectDetails.path, id]);
  }

  goToPayment(id: number) {
      this.router.navigate([appRoutes.ProjectDetails.path + id + appRoutes.PaymentPage.path]);
  }
}
