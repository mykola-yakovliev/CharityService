import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { SampleDataClient, WeatherForecast, ProjectsClient, ProjectApiModel } from 'src/generated';
import { Router } from '@angular/router';
import { appRoutes } from '../app.routes';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public filterForm: FormGroup;
  public data: WeatherForecast[] = [];
  public projects: ProjectApiModel[] = [];
  public foundations = [
    {
      id: 1,
      name: 'Foundation 1'
    },
    {
      id: 2,
      name: 'Foundation 2'
    },
    {
      id: 3,
      name: 'Foundation 3'
    }
  ];
  public categories = [
    {
      id: 1,
      name: 'Category 1'
    },
    {
      id: 2,
      name: 'Category 2'
    },
    {
      id: 3,
      name: 'Category 3'
    }
  ];

  constructor(private _projectClient: ProjectsClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this._projectClient.getProjects(null, null).subscribe((projects) => this.projects = projects);
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      foundations: [],
      categories: this.fb.array([])
    });
    const formArray = this.filterForm.get('categories') as FormArray;
    this.categories.forEach(c => formArray.push(new FormControl(false)));
  }

  goToDetails(id: number) {
    this.router.navigate([appRoutes.ProjectDetails.path, id]);
  }

  goToPayment(id: number) {
      this.router.navigate([appRoutes.ProjectDetails.path + id + appRoutes.PaymentPage.path]);
  }
}
