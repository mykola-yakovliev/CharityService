import { Component, OnInit } from '@angular/core';
import { SampleDataClient, WeatherForecast } from 'src/generated';
import { Router } from '@angular/router';
import { appRoutes } from '../app.routes';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public data: WeatherForecast[] = [];
  public projects = [
    {
      id: 1,
      name: 'Project name',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      foundationName: 'Foundation name',
      categoryNames: ['Category1', 'Category2']
    },
    {
      id: 2,
      name: 'Project2 name',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      foundationName: 'Foundation name',
      categoryNames: ['Category1', 'Category2', 'Category3']
    },
    {
      id: 3,
      name: 'Project3 name',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      foundationName: 'Foundation name',
      categoryNames: ['Category2', 'Category3']
    },
    {
      id: 4,
      name: 'Project4 name',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      foundationName: 'Foundation name',
      categoryNames: ['Category1', 'Category2', 'Category3']
    },
    {
      id: 5,
      name: 'Project5 name',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      foundationName: 'Foundation name',
      categoryNames: ['Category1', 'Category2', 'Category3']
    },
  ];
  constructor(private sampleDataClient: SampleDataClient, private router: Router) { }

  ngOnInit() {
    // this.sampleDataClient.weatherForecasts().subscribe((forcasts: WeatherForecast[]) => this.data = forcasts);
  }

  goToDetails(id: number) {
    this.router.navigate([appRoutes.ProjectDetails.path, id]);
  }
}
