export interface Rooms{
    totalRooms: number;
    bookedRooms: number;
    availableRooms: number;

}

export interface RoomsList {

    roomNumber?:number;
    roomtype: string;
    amenities: string;
    price: number;
    photos?: string;
    checkInTime: Date;
    checkOutTime?: Date;

}