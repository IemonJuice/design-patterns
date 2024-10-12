interface TableBooking {
  String bookTable(String customerName, int numberOfGuests);
}

class RealTableBooking implements TableBooking {
  @Override
  public String bookTable(String customerName, int numberOfGuests) {
    return "Столик для " + customerName + " на " + numberOfGuests + " осіб заброньовано.";
  }
}

class TableBookingProxy implements TableBooking {
  private RealTableBooking realTableBooking;
  private int availableSeats;

  public TableBookingProxy(int availableSeats) {
    this.availableSeats = availableSeats;
    this.realTableBooking = new RealTableBooking();
  }

  @Override
  public String bookTable(String customerName, int numberOfGuests) {
    if (this.availableSeats >= numberOfGuests) {
      this.availableSeats -= numberOfGuests;
      return realTableBooking.bookTable(customerName, numberOfGuests);
    } else {
      return "Немає достатньо місць для " + numberOfGuests + " гостей.";
    }
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking bookingProxy = new TableBookingProxy(10);

    System.out.println(bookingProxy.bookTable("Іван", 4)); // Столик для Іван на 4 осіб заброньовано.
    System.out.println(bookingProxy.bookTable("Олександр", 7)); // Немає достатньо місць для 7 гостей.
  }
}
