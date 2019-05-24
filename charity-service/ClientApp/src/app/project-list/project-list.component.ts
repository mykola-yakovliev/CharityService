import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { SampleDataClient, WeatherForecast, ProjectsClient, ProjectApiModel, CategoriesClient, FoundationsClient } from 'src/generated';
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
  public foundations = [];
  public categories = [];

    constructor(private _projectClient: ProjectsClient,
                private _foundationsClient: FoundationsClient,
                private _categoriesClient: CategoriesClient,
                private router: Router,
                private fb: FormBuilder,
                private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.initFilterForm();
    this._projectClient.getProjects(null, null).subscribe((projects) => this.projects = projects);
    this._foundationsClient.list().subscribe(foundations => {
        this.foundations = foundations;
        this.initFiltersForm();
    });
    this._categoriesClient.getCategories().subscribe(categories => {
        this.categories = categories;
        this.initCategoriesForm();
    });
    const categoriesForm = this.filterForm.get('categories') as FormArray;
    const foundationsForm = this.filterForm.get('foundations') as FormArray;
    categoriesForm.valueChanges
        .subscribe(() => {
            this.refreshProjectList();
        });
    foundationsForm.valueChanges
        .subscribe(() => {
            this.refreshProjectList();
        });
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      foundations: this.fb.array([]),
      categories: this.fb.array([])
    });
  }

  initCategoriesForm() {
    const formArray = this.filterForm.get('categories') as FormArray;
    this.categories.forEach(c => formArray.push(new FormControl(false)));
  }

  initFiltersForm() {
    const formArray = this.filterForm.get('foundations') as FormArray;
    this.foundations.forEach(c => formArray.push(new FormControl(false)));
  }

  refreshProjectList() {
    const foundations = this.filterForm.get('foundations') as FormArray;
    const categories = this.filterForm.get('categories') as FormArray;
    const foundationsIds = [];
    const categoryIds = [];

    foundations.controls.forEach((elem, index) => {
        if (elem.value === true) {
            foundationsIds.push(this.foundations[index].id);
        }
    });

    categories.controls.forEach((elem, index) => {
        if (elem.value === true) {
            categoryIds.push(this.categories[index].id);
        }
    });

    console.log(foundationsIds, ' ', categoryIds);

    this._projectClient.getProjects(foundationsIds, categoryIds).subscribe((projects) => this.projects = projects);
  }

  goToDetails(id: number) {
    this.router.navigate([appRoutes.ProjectDetails.path, id]);
  }

  goToPayment(id: number) {
      this.router.navigate([appRoutes.ProjectDetails.path + id + appRoutes.PaymentPage.path]);
  }
}
