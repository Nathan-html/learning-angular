import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  firstName: String = "Nathan";
  lastName: String = "Flacher";
  hidden: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hidden = false
    }, 2000)
  }

  logEvent(event: MouseEvent) {
    console.log(event);
    
  }
}
