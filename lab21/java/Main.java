interface PaymentStrategy {
  void pay(int amount);
}

class CreditCardPayment implements PaymentStrategy {
  private String cardNumber;

  public CreditCardPayment(String cardNumber) {
    this.cardNumber = cardNumber;
  }

  @Override
  public void pay(int amount) {
    System.out.println("Оплачено " + amount + " грн кредитною карткою: " + cardNumber);
  }
}

class PayPalPayment implements PaymentStrategy {
  private String email;

  public PayPalPayment(String email) {
    this.email = email;
  }

  @Override
  public void pay(int amount) {
    System.out.println("Оплачено " + amount + " грн через PayPal: " + email);
  }
}

class TableBooking {
  private PaymentStrategy paymentStrategy;

  public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  public void confirmBooking(int amount) {
    System.out.println("Бронювання підтверджено.");
    paymentStrategy.pay(amount);
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking booking = new TableBooking();

    booking.setPaymentStrategy(new CreditCardPayment("1234-5678-9876-5432"));
    booking.confirmBooking(500);

    booking.setPaymentStrategy(new PayPalPayment("user@example.com"));
    booking.confirmBooking(700);
  }
}
