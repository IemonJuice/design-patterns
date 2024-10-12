interface BookingState {
  void handleRequest();
}

class ReservedState implements BookingState {
  @Override
  public void handleRequest() {
    System.out.println("Стан: Столик заброньовано. Очікуємо на клієнта.");
  }
}

class PendingConfirmationState implements BookingState {
  @Override
  public void handleRequest() {
    System.out.println("Стан: Бронювання очікує підтвердження клієнта.");
  }
}

class CanceledState implements BookingState {
  @Override
  public void handleRequest() {
    System.out.println("Стан: Бронювання скасовано.");
  }
}

class TableBooking {
  private BookingState state;

  public TableBooking(BookingState initialState) {
    this.state = initialState;
  }

  public void setState(BookingState state) {
    this.state = state;
  }

  public void processRequest() {
    state.handleRequest();
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking booking = new TableBooking(new PendingConfirmationState());
    booking.processRequest();

    booking.setState(new ReservedState());
    booking.processRequest();

    booking.setState(new CanceledState());
    booking.processRequest();
  }
}
