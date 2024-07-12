import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {
  @Input() label: string = '';
  @Input() onButtonClick: () => void = () => {};
}
