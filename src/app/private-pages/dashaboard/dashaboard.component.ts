import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashaboard',
  templateUrl: './dashaboard.component.html',
  styleUrls: ['./dashaboard.component.css']
})
export class DashaboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuState: string = "open";
  toggleMenu() {
    this.menuState = this.menuState === "open" ? "close" : "open";
  }

}
