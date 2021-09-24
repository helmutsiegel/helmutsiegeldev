import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(public router: Router) {
  }

  navigateToBlog() {
    let aboutNavLink = document.getElementById('navLinkAbout');
    if (aboutNavLink) {
      aboutNavLink.setAttribute('class', 'nav-link nav-element');
    }
    this.router.navigate(['blog']);
  }
}
