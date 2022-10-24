import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() pokemons!: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
