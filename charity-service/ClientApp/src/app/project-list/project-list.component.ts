import { Component, OnInit } from '@angular/core';
import { SampleDataClient, WeatherForecast } from 'src/generated';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public data: WeatherForecast[] = [];

  constructor(private sampleDataClient: SampleDataClient) { }

  ngOnInit() {
    this.sampleDataClient.weatherForecasts().subscribe((forcasts: WeatherForecast[]) => this.data = forcasts);
  }
}
