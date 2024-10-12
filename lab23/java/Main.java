interface BookingVisitor {
  void visitRestaurantBooking(RestaurantBooking restaurantBooking);
  void visitCafeBooking(CafeBooking cafeBooking);
}

interface Booking {
  void accept(BookingVisitor visitor);
}

class RestaurantBooking implements Booking {
  private int tableNumber;

  public RestaurantBooking(int tableNumber) {
    this.tableNumber = tableNumber;
  }

  @Override
  public void accept(BookingVisitor visitor) {
    visitor.visitRestaurantBooking(this);
  }

  public int getTableNumber() {
    return tableNumber;
  }
}

class CafeBooking implements Booking {
  private int tableNumber;

  public CafeBooking(int tableNumber) {
    this.tableNumber = tableNumber;
  }

  @Override
  public void accept(BookingVisitor visitor) {
    visitor.visitCafeBooking(this);
  }

  public int getTableNumber() {
    return tableNumber;
  }
}

class BookingDetailVisitor implements BookingVisitor {
  @Override
  public void visitRestaurantBooking(RestaurantBooking restaurantBooking) {
    System.out.println("Бронювання столика в ресторані: номер " + restaurantBooking.getTableNumber());
  }

  @Override
  public void visitCafeBooking(CafeBooking cafeBooking) {
    System.out.println("Бронювання столика в кафе: номер " + cafeBooking.getTableNumber());
  }
}

public class Main {
  public static void main(String[] args) {
    Booking restaurantBooking = new RestaurantBooking(5);
    Booking cafeBooking = new CafeBooking(10);

    BookingDetailVisitor bookingDetailVisitor = new BookingDetailVisitor();

    restaurantBooking.accept(bookingDetailVisitor);

    cafeBooking.accept(bookingDetailVisitor);
  }
}
