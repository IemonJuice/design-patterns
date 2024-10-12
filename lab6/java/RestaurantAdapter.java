public class RestaurantAdapter implements ReservationService {
  private RestaurantBookingService restaurantService;

  public RestaurantAdapter(RestaurantBookingService restaurantService) {
    this.restaurantService = restaurantService;
  }

  @Override
  public String reserve(String date, int guests) {
    ReservationDetails details = new ReservationDetails(date, "19:00", guests); // Наприклад, фіксований час
    return restaurantService.bookDinner(details);
  }
}
