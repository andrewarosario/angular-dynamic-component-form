import { Injectable } from '@angular/core';
import { DynamicFormConfig } from './dynamic-form/dynamic-form-config.model';

@Injectable({ providedIn: 'root' })
export class PokemonTrainerFormService {
  getForm(): DynamicFormConfig[] {
    return [
      {
        type: 'input',
        label: 'Seu nome',
        name: 'name',
        placeholder: 'Digite seu nome, treinador Pokémon!',
      },
      {
        type: 'select',
        label: 'Escolha seu Pokémon inicial',
        name: 'initialPokemon',
        options: ['Bulbasaur', 'Charmander', 'Squirtle'],
      },
    ];
  }
}
