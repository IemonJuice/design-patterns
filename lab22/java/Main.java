abstract class TableBookingTemplate {

  public final void bookTable() {
    selectTable();
    sendConfirmation();
    processPayment();
    sendReceipt();
  }

  protected abstract void selectTable();
  protected abstract void processPayment();

  protected void sendConfirmation() {
    System.out.println("Відправляється підтвердження бронювання.");
  }

  protected void sendReceipt() {
    System.out.println("Відправляється квитанція після оплати.");
  }
}

class MobileAppBooking extends TableBookingTemplate {
  @Override
  protected void selectTable() {
    System.out.println("Столик вибрано через мобільний додаток.");
  }

  @Override
  protected void processPayment() {
    System.out.println("Оплата через мобільний додаток.");
  }
}

class WebsiteBooking extends TableBookingTemplate {
  @Override
  protected void selectTable() {
    System.out.println("Столик вибрано через вебсайт.");
  }

  @Override
  protected void processPayment() {
    System.out.println("Оплата через вебсайт.");
  }
}

public class Main {
  public static void main(String[] args) {
    TableBookingTemplate mobileBooking = new MobileAppBooking();
    mobileBooking.bookTable();

    TableBookingTemplate websiteBooking = new WebsiteBooking();
    websiteBooking.bookTable();
  }
}
