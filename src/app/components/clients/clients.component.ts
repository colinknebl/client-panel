import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:any[];
  totalOwed:number;

  constructor( public clientService:ClientService) {  }

  ngOnInit() {
  	this.clientService.getClients().subscribe(clients => {

  		this.clients = clients;
  		// console.log(this.clients);
      this.getTotalOwed();
      // console.log(this.totalOwed);
  	})
  }

  getTotalOwed(){
    let total:number = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = total;
  }

}
