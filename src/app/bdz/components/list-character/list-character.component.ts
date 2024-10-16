import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterEntity } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list-character',
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.css'
})
export class ListCharacterComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: CharacterEntity[] = [{
    id: '0',
    name: 'default name',
    power: 0
  }]

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
  }
}
