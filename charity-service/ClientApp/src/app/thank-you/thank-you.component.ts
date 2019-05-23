import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProjects() {
    this.router.navigate(['']);
  }
}
