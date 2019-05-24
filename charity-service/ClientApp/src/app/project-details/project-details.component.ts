import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProjectApiModel, ProjectsClient } from 'src/generated';
import { appRoutes } from '../app.routes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
    public id: number;
    public data: ProjectApiModel;

    constructor(private _projectClient: ProjectsClient, private route: ActivatedRoute, private router: Router) { }

    public ngOnInit(): void {
        this.route.params.subscribe(({ id }: { id: number }) => {
            this.id = id;
            this._projectClient.getProject(this.id).subscribe(data => this.data = data);
        });
    }

    public navigateBack(): void {
        this.router.navigate([appRoutes.ProjectList.path]);
    }

    public goToPayment(): void {
        this.router.navigate([appRoutes.ProjectDetails.path + this.id + appRoutes.PaymentPage.path]);
    }

}
