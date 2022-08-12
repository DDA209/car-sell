import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Car Sell';

  constructor() {}

  ngOnInit(): void {}

  getTitle(): string {
    console.log('title', this.title);
    return this.title;
  }
}