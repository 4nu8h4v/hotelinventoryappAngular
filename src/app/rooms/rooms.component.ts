import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RoomsList, Rooms } from './rooms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel"

  public roomId!: number 
  public roomType!: string 
  public price!: number
  public amenities!: string
  public checkInTime!: Date

 

  rooms: Rooms = {

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomsList[] = [
  {
    roomNumber: 1,
    roomtype: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Fridge',
    price: 500,
    photos: '',
    checkInTime: new Date('10-Jan-2023'),
    checkOutTime: new Date('11-Jan-2023')
  },
  {
    roomNumber: 2,
    roomtype: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Fridge',
    price: 500,
    photos: '',
    checkInTime: new Date('10-Jan-2023'),
    checkOutTime: new Date('11-Jan-2023')
  },
  {
    roomNumber: 3,
    roomtype: 'Private Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Fridge',
    price: 2000,
    photos: '',
    checkInTime: new Date('10-Jan-2023'),
    checkOutTime: new Date('11-Jan-2023')
  }

  ]

  constructor(config: NgbModalConfig, private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  selectRoom(room: RoomsList){
    console.log(room)

  }

  saveDetails(){
    const room: RoomsList = {
      roomNumber: this.roomId,
      roomtype: this.roomType,
      amenities: this.amenities,
      price: this.price,
      checkInTime: new Date(this.checkInTime),
    

    }

    this.roomList.push(room);
    this.modalService.dismissAll();


   
  }
  
  
  open(content: any) {
    this.modalService.open(content);
  }

  addRooms(){
    
  }

}
