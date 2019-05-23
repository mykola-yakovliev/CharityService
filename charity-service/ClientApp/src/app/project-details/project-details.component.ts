import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProjectDetails } from './project-details.model';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {

    public data: ProjectDetails = {
        id: 1,
        name: 'Test project',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit id est ac viverra.
        Donec maximus, dolor tincidunt porttitor accumsan, eros ante ultricies odio, non commodo nulla arcu a odio.
        Sed ut dignissim ante. Aenean ac ante eget tellus pharetra luctus pretium non tellus. Etiam vehicula augue
        non dignissim ultricies. Nunc eget eros sodales, iaculis mi laoreet, vehicula dolor. Ut et ante a arcu finibus
        venenatis tincidunt eget ligula. Nullam aliquam bibendum libero, et laoreet massa malesuada ac.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
        vulputate rutrum metus, vitae viverra elit ornare quis. Curabitur rutrum ultricies ante quis tristique.
        Vivamus porta elit at est porta, vitae facilisis nunc posuere. Proin nisi dolor, scelerisque eget erat eu,
        consectetur accumsan nibh. In in mauris efficitur, porta lorem in, tincidunt est. Integer placerat pretium
        justo. Nunc ut iaculis nulla. Mauris et neque vel leo elementum ornare eget id turpis. Suspendisse venenatis
        vitae dui ut maximus. Nulla finibus nulla urna, suscipit aliquam ex eleifend eu. Pellentesque dapibus leo
        justo, bibendum rutrum eros luctus vitae. Fusce tincidunt mauris ac enim iaculis, at ultrices risus tempor.
        Cras tincidunt felis justo, a vehicula dui condimentum sit amet. Nunc vitae magna.`,
        foundationName: 'Test foundation',
        categoryNames: ['catecory one', 'category two'],
        image: 'https://www.brav.com/public/images/image-default.png?scale=canvas&width=300&height=300&quality=80'
    };

    constructor() { }

    public ngOnInit(): void {
    }

}
