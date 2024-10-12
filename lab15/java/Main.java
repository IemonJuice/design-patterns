interface Command {
  void execute();
}

class TableBooking {
  public void bookTable(String customerName, int numberOfGuests) {
    System.out.println("Столик для " + customerName + " на " + numberOfGuests + " осіб заброньовано.");
  }

  public void cancelBooking(String customerName) {
    System.out.println("Бронювання для " + customerName + " скасовано.");
  }
}

class BookTableCommand implements Command {
  private TableBooking booking;
  private String customerName;
  private int numberOfGuests;

  public BookTableCommand(TableBooking booking, String customerName, int numberOfGuests) {
    this.booking = booking;
    this.customerName = customerName;
    this.numberOfGuests = numberOfGuests;
  }

  @Override
  public void execute() {
    booking.bookTable(customerName, numberOfGuests);
  }
}

class CancelBookingCommand implements Command {
  private TableBooking booking;
  private String customerName;

  public CancelBookingCommand(TableBooking booking, String customerName) {
    this.booking = booking;
    this.customerName = customerName;
  }

  @Override
  public void execute() {
    booking.cancelBooking(customerName);
  }
}

class BookingInvoker {
  private Command command;

  public void setCommand(Command command) {
    this.command = command;
  }

  public void executeCommand() {
    command.execute();
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking booking = new TableBooking();

    Command bookCommand = new BookTableCommand(booking, "Іван", 4);
    Command cancelCommand = new CancelBookingCommand(booking, "Іван");

    BookingInvoker invoker = new BookingInvoker();

    invoker.setCommand(bookCommand);
    invoker.executeCommand();
    invoker.setCommand(cancelCommand);
    invoker.executeCommand();
  }
}
