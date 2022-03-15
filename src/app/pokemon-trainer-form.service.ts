import { Injectable } from '@angular/core';
import { DynamicFormConfig } from './dynamic-form/dynamic-form-config.model';

@Injectable({ providedIn: 'root' })
export class PokemonTrainerFormService {
  private readonly LOCAL_STORAGE_KEY = 'pokemon-trainer-form';

  getForm(): DynamicFormConfig[] {
    return [
      {
        type: 'input',
        label: 'Seu nome',
        name: 'name',
        placeholder: 'Digite seu nome, treinador Pokémon!',
      },
      {
        type: 'input',
        label: 'Sua cidade',
        name: 'city',
        placeholder: 'Pallet',
      },
      {
        type: 'select',
        label: 'Escolha seu Pokémon inicial',
        name: 'initialPokemon',
        options: ['Bulbasaur', 'Charmander', 'Squirtle'],
      },
    ];
  }

  getData(): DynamicFormConfig[] {
    const savedValues = JSON.parse(
      localStorage.getItem(this.LOCAL_STORAGE_KEY)
    );
    return this.getForm().map((field) => ({
      ...field,
      initialValue: savedValues?.[field.name] ?? field.initialValue,
    }));
  }

  save(value: any) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(value));
  }
}
