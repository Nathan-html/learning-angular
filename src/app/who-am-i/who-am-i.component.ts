import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  @Input() firstName = "Nathan";
  @Input() lastName = "Flacher";

  @Output() printAlert = new EventEmitter<void>();

  hidden: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hidden = false
    }, 2000)
  }

  logEvent(event: MouseEvent) {
    this.printAlert.emit();
    console.log(event);
  }
}
