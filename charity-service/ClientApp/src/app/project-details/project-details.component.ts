import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectApiModel } from 'src/generated';
import { ProjectDetailsService } from './project-details.service';
import { appRoutes } from '../app.routes';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
    public id: number;
    public data: ProjectApiModel;

    constructor(private projDetailsService: ProjectDetailsService, private route: ActivatedRoute, private router: Router) { }

    public ngOnInit(): void {
        this.route.params.subscribe(({ id }: { id: number }) => {
            this.id = id;
        });
        this.projDetailsService.getCurrentProject(this.id).subscribe(data => this.data = data);
    }

    public navigateBack(): void {
        this.router.navigate([appRoutes.ProjectList.path]);
    }

    public goToPayment(id: number): void {
        this.router.navigate([appRoutes.ProjectDetails.path + id + appRoutes.PaymentPage.path]);
    }

}
