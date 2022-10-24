import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() pokemon!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
