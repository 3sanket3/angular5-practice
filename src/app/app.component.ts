import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuState: string = 'open';
  toggleMenu(){
    this.menuState =this.menuState === 'open' ? 'close' : 'open';
  }
}
