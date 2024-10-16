import { Injectable } from '@angular/core';
import { CharacterEntity } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: CharacterEntity[] = [{
    id: uuid(),
    name: 'joseba',
    power: 1000
  }, {
    id: uuid(),
    name: 'ane',
    power: 1500
  }, {
    id: uuid(),
    name: 'joseba',
    power: 1000
  }, {
    id: uuid(),
    name: 'ane',
    power: 1500
  }, {
    id: uuid(),
    name: 'joseba',
    power: 1000
  }, {
    id: uuid(),
    name: 'ane',
    power: 1500
  }]

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
