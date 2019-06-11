import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() { 

  }

  title = 'app-casino';
  
  ngOnInit() {}
  // this.hubConnection.on("SendMessage", function (message, userName) {
  //   console.log(message, userName);
  // });
}
