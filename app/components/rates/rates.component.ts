import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";

class Rate {
    currency: string;
    winRate: number;
    profit: number;
}

@Component({
    selector: 'coin-rates',
    templateUrl: './rates.component.html'
})

export class RatesComponent implements OnInit {
    rates: [];
    hubConnection:any;
    constructor() {
        this.rates = [];
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://casino-dev.azurewebsites.net/dice')
            .configureLogging(signalR.LogLevel.Information)
            .build();
    }

    ngOnInit() {
        let array:any = this.rates;
        this.hubConnection.on("OnGame", function(currency, winRate, profit) {
            console.log(currency, winRate, profit);
            array.push({
                currency,
                winRate,
                profit: profit.toFixed(8)
            })
        });
    
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err))
    }
}