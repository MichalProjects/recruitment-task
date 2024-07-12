import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-blok-pierwszy',
  templateUrl: './blok-pierwszy.component.html',
  styleUrl: './blok-pierwszy.component.scss',
})
export class BlokPierwszyComponent {
  @Input() selectedOption: string = '';
  @Output() optionChange = new EventEmitter<string>();

  onSelectedOptionChange(option: string): void {
    this.optionChange.emit(option);
  }
}
