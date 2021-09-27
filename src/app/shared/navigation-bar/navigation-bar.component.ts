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
    let togglerButton = document.getElementById("togglerButton");
    if (togglerButton && togglerButton.getAttribute('aria-expanded') === 'true') {
      togglerButton.click();
    }
    this.router.navigate(['blog']);
  }
}
