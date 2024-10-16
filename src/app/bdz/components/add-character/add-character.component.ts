import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterEntity } from '../../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<CharacterEntity> = new EventEmitter()

  public character: CharacterEntity = {
    id: '0',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name === '') return;

    this.onNewCharacter.emit(this.character)

    this.character = { id: '0', name: '', power: 0 }
  }
}
