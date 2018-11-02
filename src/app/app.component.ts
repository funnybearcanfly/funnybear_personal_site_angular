import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { } from '@angular/router/';

import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLink = '';

  constructor(angulartics2GoogleGlobalSiteTag: Angulartics2GoogleGlobalSiteTag, router: Router) {
    angulartics2GoogleGlobalSiteTag.startTracking();
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedLink = event.urlAfterRedirects;
        console.log(this.selectedLink);
      }
    });
  }
}
