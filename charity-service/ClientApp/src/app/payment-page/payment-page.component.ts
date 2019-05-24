import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailsService } from '../project-details/project-details.service';
import { ProjectApiModel } from 'src/generated';
import { appRoutes } from '../app.routes';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
    public data: ProjectApiModel;
    public paymentData: FormGroup;
    private id: number;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private projDetailsService: ProjectDetailsService,
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
        });
        this.projDetailsService.getCurrentProject(this.id).subscribe(data => this.data = data);
    }

    public navigateBack() {
        this.router.navigate([appRoutes.ProjectList.path]);
    }

    public toThankYou() {
        this.router.navigate([appRoutes.ThankYouPage.path]);
    }
}
