import { Injectable } from '@angular/core';
import { CharacterEntity } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: CharacterEntity[] = [
    { name: "Goku", power: 1500000000 },
    { name: "Vegeta", power: 1400000000 },
    { name: "Gohan", power: 1200000000 },
    { name: "Piccolo", power: 1000000000 },
    { name: "Frieza", power: 1300000000 },
    { name: "Cell", power: 1400000000 },
    { name: "Majin Buu", power: 2000000000 },
    { name: "Trunks", power: 1100000000 },
    { name: "Krillin", power: 10000000 },
    { name: "Tien", power: 7500000 },
    { name: "Yamcha", power: 5000000 },
    { name: "Android 18", power: 900000000 },
    { name: "Android 17", power: 900000000 },
    { name: "Broly", power: 2100000000 },
    { name: "Beerus", power: 3000000000 },
    { name: "Zamasu", power: 2500000000 },
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
