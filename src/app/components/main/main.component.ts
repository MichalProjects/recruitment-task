import { Component, OnInit } from '@angular/core';
import { TextDataService } from '../../services/textData.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  selectedOption: string;
  usedDataIndexes: number[];
  data: string[];

  constructor(private textDataService: TextDataService) {
    this.selectedOption = '';
    this.usedDataIndexes = [];
    this.data = [];
  }

  ngOnInit(): void {
    this.usedDataIndexes = this.textDataService.usedDataIndexes;
    this.textDataService.data$.subscribe((data) => (this.data = data));
  }

  private isDataInUse = (index: number): boolean => {
    return this.usedDataIndexes.indexOf(index) === -1 ? false : true;
  };

  private generateRandomIndex = (array: any[]): number =>
    Math.ceil(Math.random() * array.length) - 1;

  private getDataIndex = (): number | void => {
    try {
      switch (this.selectedOption) {
        case 'first':
          return 0;

        case 'second':
          return 1;

        case 'random':
          // Generate array of unused indexes, wthout first two options
          const randomIndexRange: number[] = [
            ...Array(this.data.length).keys(),
          ].slice(2);
          const avaliableIndexes: number[] = randomIndexRange.filter((item) => {
            return !this.usedDataIndexes.includes(item);
          });

          if (avaliableIndexes.length === 0) {
            // If all indexes had been used, get random index (excluding 0 and 1)
            return this.generateRandomIndex(randomIndexRange) + 2;
          }
          // Get random index from unused indexes
          return avaliableIndexes[this.generateRandomIndex(avaliableIndexes)];

        default:
          throw new Error('Wybierz opcję w bloku pierwszym.');
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  private addData = (): void => {
    const index: number = this.getDataIndex() as number;
    if (this.isDataInUse(index)) {
      alert('The pasted content already exists');
      return;
    }
    this.textDataService.addDataIndex(index);
  };
  private replaceData = (): void => {
    const index: number = this.getDataIndex() as number;
    this.textDataService.clearDataIndexes();
    this.textDataService.addDataIndex(index);
  };

  onSelectedOptionChange(option: string): void {
    this.selectedOption = option;
  }

  onButtonClick(action: 'add' | 'replace') {
    action === 'replace' && this.replaceData();
    action === 'add' && this.addData();
  }
}
