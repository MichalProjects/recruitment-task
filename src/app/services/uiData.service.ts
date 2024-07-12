import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UIDataService {
  isNameVisible: boolean = false;

  stateUpdated = new EventEmitter();

  toggleName(): void {
    this.isNameVisible = !this.isNameVisible;
  }
}
