import { Component } from '@angular/core';
import { CharacterEntity } from '../interfaces/character-interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-bdz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters(): CharacterEntity[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: CharacterEntity): void {
    this.dbzService.addCharacter(character)
  }

}
