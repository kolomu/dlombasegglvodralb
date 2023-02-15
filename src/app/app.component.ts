import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dlombasegglvodralb';

  faCoffee = faCoffee;

  menuShow = false;
  toggleNavbar(){
    this.menuShow = !this.menuShow;
  }

}
