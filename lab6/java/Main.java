public class Main {
  public static void main(String[] args) {
    ReservationService cafeService = new CafeReservationService();
    System.out.println(cafeService.reserve("2024-10-10", 2));
    RestaurantBookingService restaurantService = new RestaurantBookingService();
    ReservationService restaurantAdapter = new RestaurantAdapter(restaurantService);
    System.out.println(restaurantAdapter.reserve("2024-10-10", 4));
  }
}
