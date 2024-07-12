import { Component, OnInit } from '@angular/core';
import { TextDataService } from './services/textData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private textDataService: TextDataService) {}

  ngOnInit() {
    this.textDataService.loadData();
  }
}
