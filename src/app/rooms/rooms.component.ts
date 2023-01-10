import { Component, OnInit } from '@angular/core';
import { RoomsList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel"

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

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room: RoomsList){
    console.log(room)

  }

}
