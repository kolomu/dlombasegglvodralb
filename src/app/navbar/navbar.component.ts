import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]

})
export class NavbarComponent {
  faNavicon = faNavicon;

  title = "D'Lombaseggl vo dr Alb";

  navItems = [
    {label: "Home", link: '#'},
    {label: "Anmeldung Event", link: 'register-for-event'},
    {label: "Über den Verein", link: 'verein'},
    {label: "Kontakt", link: 'kontakt'}
];

  menuShow = false;
  toggleNavbar(){
    this.menuShow = !this.menuShow;
  }

}
