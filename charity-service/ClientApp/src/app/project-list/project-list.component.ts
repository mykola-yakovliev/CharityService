import { Component, OnInit } from '@angular/core';
import { SampleDataClient } from 'src/generated';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public data: SampleDataClient) { }

  ngOnInit() {
  }

}
