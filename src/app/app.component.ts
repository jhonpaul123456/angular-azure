import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CREATE NEW ANGULAR APP';
  name:string = 'Jhon';



  constructor() {
    this.changeName();
  }

  changeName(){
    this.name = 'bb';
  }
}
