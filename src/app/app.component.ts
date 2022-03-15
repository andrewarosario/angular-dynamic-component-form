import { Component, VERSION } from '@angular/core';
import { PokemonTrainerFormService } from './pokemon-trainer-form.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private pokemonTrainerFormService: PokemonTrainerFormService) {}
  config = this.pokemonTrainerFormService.getData();

  save(value) {
    this.pokemonTrainerFormService.save(value);
  }
}
