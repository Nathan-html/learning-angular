import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  @Input() count!: number;
  @Output() incrementCount = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCountUp () {
    this.incrementCount.emit();
  }
  
}
