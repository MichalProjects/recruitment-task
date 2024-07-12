import { Component } from '@angular/core';
import { UIDataService } from '../../../services/uiData.service';
import { TextDataService } from '../../../services/textData.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  constructor(
    private textDataService: TextDataService,
    private uiDataService: UIDataService
  ) {}

  clearData = (): void => {
    this.textDataService.clearDataIndexes();
  };

  toggleName = (): void => {
    this.uiDataService.toggleName();
    this.uiDataService.stateUpdated.emit();
  };
}
