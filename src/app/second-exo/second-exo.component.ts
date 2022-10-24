import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-exo',
  templateUrl: './second-exo.component.html',
  styleUrls: ['./second-exo.component.css']
})
export class SecondExoComponent implements OnInit {

  pokemons: Array<any> = [];
  pokemonAPI: URL = new URL('https://pokeapi.co/api/v2/pokemon');

  constructor() { }

  ngOnInit(): void {
    fetch(this.pokemonAPI)
    .then(response => response.json())
    .then(pokemons => {
      const tempPok: Array<any> = pokemons.results
      tempPok.forEach(pokemon => {
        fetch(this.pokemonAPI+"/"+pokemon.name)
          .then(response => response.json())
          .then(pokemonData => {
            let currentPokemon: any = pokemonData;
            currentPokemon.name = pokemon.name
            this.pokemons.push(currentPokemon);
            console.log("currentPokemon", currentPokemon);
          })
      });
      
      console.log(this.pokemons)
    })
  }

}
