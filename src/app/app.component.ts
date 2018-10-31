import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { } from '@angular/router/';

import { Angulartics2BaiduAnalytics } from 'angulartics2/baidu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLink = '';

  constructor(angulartics2BaiduAnalytics: Angulartics2BaiduAnalytics, router: Router) {
    angulartics2BaiduAnalytics.startTracking();
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedLink = event.urlAfterRedirects;
        console.log(this.selectedLink);
      }
    });
  }
}
