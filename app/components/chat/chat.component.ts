import { Component, OnInit } from "@angular/core";
import * as signalR from "@aspnet/signalr";

@Component({
    selector: 'coin-chat',
    templateUrl: './chat.component.html'
})

export class ChatComponent implements OnInit {
    messages: [];
    hubConnection:any;
    constructor() {
        this.messages = [];
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://casino-dev.azurewebsites.net/chat')
            .configureLogging(signalR.LogLevel.Information)
            .build();
    }

    ngOnInit() {
        let array:any = this.messages;
        this.hubConnection.on("OnMessage", function (userName, message) {
            array.push({
                name: userName,
                text: message
            })
        });
    
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err))
    }
    handleSend() {
        this.hubConnection.invoke('SendMessage','aaaaaaaaarrrrrrssssss', 'Testov');
    }
}