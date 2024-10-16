import { Injectable } from '@angular/core';
import { CharacterEntity } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: CharacterEntity[] = [
    { id: uuid(), name: "Goku", power: 1500000000 },
    { id: uuid(), name: "Vegeta", power: 1400000000 },
    { id: uuid(), name: "Gohan", power: 1200000000 },
    { id: uuid(), name: "Piccolo", power: 1000000000 },
    { id: uuid(), name: "Frieza", power: 1300000000 },
    { id: uuid(), name: "Cell", power: 1400000000 },
    { id: uuid(), name: "Majin Buu", power: 2000000000 },
    { id: uuid(), name: "Trunks", power: 1100000000 },
    { id: uuid(), name: "Krillin", power: 10000000 },
    { id: uuid(), name: "Tien", power: 7500000 },
    { id: uuid(), name: "Yamcha", power: 5000000 },
    { id: uuid(), name: "Android 18", power: 900000000 },
    { id: uuid(), name: "Android 17", power: 900000000 },
    { id: uuid(), name: "Broly", power: 2100000000 },
    { id: uuid(), name: "Beerus", power: 3000000000 },
    { id: uuid(), name: "Zamasu", power: 2500000000 },
  ];


  addCharacter(character: CharacterEntity): void {

    const newCharacter = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
