import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  creatingNewTicket = false;
  viewTicket = false;

  createNewTicket(){
    this.creatingNewTicket = true;
  }
  
  openTicket() {
    console.log('opening');
    
    this.viewTicket = true;
  }
}
