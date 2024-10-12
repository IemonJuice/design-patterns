public class RestaurantBookingService {
  public String bookDinner(ReservationDetails details) {
    return "Ресторан: Вечеря заброньована на " + details.getPeople() + " осіб, дата: " + details.getBookingDate() + ", час: " + details.getTime();
  }
}
