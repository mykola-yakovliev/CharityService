import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectApiModel, ProjectsClient } from 'src/generated';
import { appRoutes } from '../app.routes';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
    public data: ProjectApiModel;
    public paymentData: FormGroup;
    public paymentTypes: string[] = [
        'Visa',
        'Mastercard',
        'AmericanExpress'
    ];
    private id: number;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private _projectClient: ProjectsClient,
                private router: Router) { }

    public ngOnInit(): void {
        this.paymentData = this.fb.group({
            name: [''],
            surname: [''],
            email: ['', Validators.email],
            amount: ['150', Validators.compose([Validators.pattern(/^[0-9]*$/), Validators.maxLength(8)])]
        });
        this.route.params.subscribe(({ id }: { id: number }) => {
            this.id = id;
            this._projectClient.getProject(this.id).subscribe(data => this.data = data);
        });
    }

    public navigateBack() {
        this.router.navigate([appRoutes.ProjectList.path]);
    }

    public toThankYou() {
        this.router.navigate([appRoutes.ThankYouPage.path]);
    }
}
