import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormConfig } from './dynamic-form/models/dynamic-form-config.model';


@Injectable({ providedIn: 'root' })
export class PokemonTrainerFormService {
  private readonly LOCAL_STORAGE_KEY = 'pokemon-trainer-form';

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

  private getForm(): DynamicFormConfig[] {
    return [
      {
        type: 'input',
        label: 'Seu nome',
        name: 'name',
        placeholder: 'Digite seu nome, treinador Pokémon!',
        validation: [Validators.required, Validators.maxLength(30)],
      },
      {
        type: 'input',
        label: 'Sua cidade',
        name: 'city',
        placeholder: 'Pallet',
        validation: [Validators.required, Validators.maxLength(20)],
      },
      {
        type: 'select',
        label: 'Escolha seu Pokémon inicial',
        name: 'initialPokemon',
        options: ['Bulbasaur', 'Charmander', 'Squirtle'],
        validation: [Validators.required],
      },
    ];
  }
}
