import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-exo',
  templateUrl: './first-exo.component.html',
  styleUrls: ['./first-exo.component.css']
})
export class FirstExoComponent implements OnInit {

  @Input() firstName!: String;
  @Input() lastName!: String;
  hidden: Boolean = true;

  cardTitle: String = "Nathan FLACHER";
  cardSubtitle: String = "Développeur web & logiciel";
  cardDescription: String = "Développeur mobile Spring, React Native & Développeur web React, Node.js. 💻";
  
  constructor() { }

  ngOnInit(): void {
  }

}
