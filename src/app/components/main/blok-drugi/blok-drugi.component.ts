import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blok-drugi',
  templateUrl: './blok-drugi.component.html',
  styleUrl: './blok-drugi.component.scss',
})
export class BlokDrugiComponent {
  @Output() buttonClick = new EventEmitter<'add' | 'replace'>();

  onButtonClick(action: 'add' | 'replace'): void {
    this.buttonClick.emit(action);
  }
}
