import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule]

})
export class NavbarComponent {
  faNavicon = faNavicon;
  menuShow = false;
  title = "D'Lombaseggl vo dr Alb";

  navItems = [
    { label: "Home", link: '' },
    { label: "Anmeldung Event", link: 'register-for-event' },
    { label: "Über den Verein", link: 'verein' },
    { label: "Kontakt", link: 'kontakt' }
  ];

  toggleNavbar() {
    this.menuShow = !this.menuShow;
  }

}
