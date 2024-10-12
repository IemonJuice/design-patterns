interface IReservationService {
    reserve(date: string, guests: number): string;
  }

class CafeReservationService implements IReservationService {
    reserve(date: string, guests: number): string {
      return `Кафе: Столик заброньовано на ${guests} гостей, дата: ${date}`;
    }
}
class RestaurantBookingService {
  bookDinner(reservationDetails: { bookingDate: string; time: string; people: number }): string {
    return `Ресторан: Вечеря заброньована на ${reservationDetails.people} осіб, дата: ${reservationDetails.bookingDate}, час: ${reservationDetails.time}`;
  }
}

class RestaurantAdapter implements IReservationService {
    private restaurantService: RestaurantBookingService;
  
    constructor(restaurantService: RestaurantBookingService) {
      this.restaurantService = restaurantService;
    }
  
    reserve(date: string, guests: number): string {
      const reservationDetails = {
        bookingDate: date,
        time: '19:00',
        people: guests
      };
      return this.restaurantService.bookDinner(reservationDetails);
    }
  }


const cafeService: IReservationService = new CafeReservationService();
console.log(cafeService.reserve('2024-10-10', 2)); 



const restaurantService: IReservationService = new RestaurantAdapter(new RestaurantBookingService());
console.log(restaurantService.reserve('2024-10-10', 4)); 

