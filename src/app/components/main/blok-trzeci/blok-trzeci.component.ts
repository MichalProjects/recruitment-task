import { Component } from '@angular/core';
import { TextDataService } from '../../../services/textData.service';

@Component({
  selector: 'app-blok-trzeci',
  templateUrl: './blok-trzeci.component.html',
  styleUrl: './blok-trzeci.component.scss',
})
export class BlokTrzeciComponent {
  usedDataIndexes: number[];
  data: string[];
  constructor(private textDataService: TextDataService) {
    this.usedDataIndexes = [];
    this.data = [];
  }

  ngOnInit(): void {
    this.usedDataIndexes = this.textDataService.usedDataIndexes;
    this.textDataService.data$.subscribe((data) => (this.data = data));
  }

  sortedData(): string[] {
    return this.usedDataIndexes.map((i: number) => this.data[i]).sort();
  }
}
