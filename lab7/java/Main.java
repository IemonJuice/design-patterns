public class Main {
  public static void main(String[] args) {
    Place cafeWithOnlineReservation = new Cafe(new OnlineReservation());
    System.out.println(cafeWithOnlineReservation.reserveTable("2024-10-10", 2));

    Place restaurantWithPhoneReservation = new Restaurant(new PhoneReservation());
    System.out.println(restaurantWithPhoneReservation.reserveTable("2024-10-12", 4));

    Place restaurantWithOnlineReservation = new Restaurant(new OnlineReservation());
    System.out.println(restaurantWithOnlineReservation.reserveTable("2024-10-15", 5));
  }
}
