import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrl: './radio-option.component.scss',
})
export class RadioOptionComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();

  onRadioChange(): void {
    this.optionSelected.emit(this.name);
  }
}
