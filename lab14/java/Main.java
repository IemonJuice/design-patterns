class BookingRequest {
  String customerName;
  int numberOfGuests;
  boolean isVIP;

  public BookingRequest(String customerName, int numberOfGuests, boolean isVIP) {
    this.customerName = customerName;
    this.numberOfGuests = numberOfGuests;
    this.isVIP = isVIP;
  }
}

interface BookingHandler {
  void setNext(BookingHandler handler);
  String handle(BookingRequest request);
}

abstract class AbstractBookingHandler implements BookingHandler {
  private BookingHandler nextHandler;

  @Override
  public void setNext(BookingHandler handler) {
    this.nextHandler = handler;
  }

  @Override
  public String handle(BookingRequest request) {
    if (nextHandler != null) {
      return nextHandler.handle(request);
    }
    return "Запит не може бути оброблено.";
  }
}

class StandardBookingHandler extends AbstractBookingHandler {
  @Override
  public String handle(BookingRequest request) {
    if (!request.isVIP) {
      return "Звичайна бронь для " + request.customerName + " на " + request.numberOfGuests + " осіб успішно створена.";
    }
    return super.handle(request);
  }
}

class VIPBookingHandler extends AbstractBookingHandler {
  @Override
  public String handle(BookingRequest request) {
    if (request.isVIP) {
      return "VIP бронь для " + request.customerName + " на " + request.numberOfGuests + " осіб успішно створена.";
    }
    return super.handle(request);
  }
}

public class Main {
  public static void main(String[] args) {
    BookingHandler vipHandler = new VIPBookingHandler();
    BookingHandler standardHandler = new StandardBookingHandler();

    standardHandler.setNext(vipHandler);

    BookingRequest request1 = new BookingRequest("Іван", 4, false);
    System.out.println(standardHandler.handle(request1));

    BookingRequest request2 = new BookingRequest("Олександр", 2, true);
    System.out.println(standardHandler.handle(request2));
  }
}
