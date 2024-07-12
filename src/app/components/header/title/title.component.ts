import { Component, OnInit } from '@angular/core';
import { UIDataService } from '../../../services/uiData.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent implements OnInit {
  isNameVisible: boolean = false;

  constructor(private uiDataService: UIDataService) {
    this.uiDataService.stateUpdated.subscribe(() => {
      this.isNameVisible = this.uiDataService.isNameVisible;
    });
  }

  ngOnInit(): void {
    this.isNameVisible = this.uiDataService.isNameVisible;
  }
}
