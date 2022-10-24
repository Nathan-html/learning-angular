import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any = [
    {
      firstName: "Nathan",
      lastName: "FLACHER"
    }
  ];
  
  printAlert(userId: number) {
    alert(this.users[userId].firstName + " " + this.users[userId].lastName);
  }

}

