import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { } from '@angular/router/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLink = '';

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedLink = event.urlAfterRedirects;
        console.log(this.selectedLink);
      }
    });
  }
}
