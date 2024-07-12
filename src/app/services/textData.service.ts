import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextDataService {
  usedDataIndexes: number[] = [];
  private dataSubject = new BehaviorSubject<string[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadData(): void {
    this.http.get<{ textData: string[] }>('../../assets/data.json').subscribe(
      (data) => {
        if (data.textData.length === 0) alert('Tablica danych jest pusta');
        this.dataSubject.next(data.textData);
      },
      () => {
        alert('Nie udało się załadować danych');
      }
    );
  }

  addDataIndex(index: number): void {
    this.usedDataIndexes.push(index);
  }
  clearDataIndexes(): void {
    this.usedDataIndexes.length = 0;
  }
}
