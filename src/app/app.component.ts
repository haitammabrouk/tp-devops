import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ensa-project';

  logout() {
    const confirmLogout = confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmLogout) {
      console.log("Logging out...");
    } 
  }
}
