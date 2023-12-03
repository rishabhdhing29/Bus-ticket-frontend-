import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showBackButton = true;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showBackButton = !this.isHomePage(); // Check if it's the home page and hide the button
      });
  }

  goBack(): void {
    this.location.back();
  }

  isHomePage(): boolean {
    return this.router.url === '/home'; // Update '/home' with your home page route
  }
}
