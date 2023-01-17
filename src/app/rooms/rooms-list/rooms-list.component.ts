import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig} 
      from '@ng-bootstrap/ng-bootstrap';
import { Rooms, RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

    

  

  addButton = false;

 
  @Input() rooms: RoomsList[]= [] 
  @Output() selectedRoom = new EventEmitter<RoomsList>();

    
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  ngOnInit(): void {
  }

  selectroom(room: RoomsList){
    this.selectedRoom.emit(room)

  }


  addRooms(){
    this.addButton = true;
    


  }
  
  closeResult = '';
  
  

  
  open(content: any) {
    this.modalService.open(content);
  }
}


