import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rooms, RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[]= [] 
  @Output() selectedRoom = new EventEmitter<RoomsList>();

  constructor() { }

  ngOnInit(): void {
  }

  selectroom(room: RoomsList){
    this.selectedRoom.emit(room)

  }

}
