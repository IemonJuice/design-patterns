interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    public pay(amount: number): void {
        console.log(`Оплачено ${amount} грн кредитною карткою: ${this.cardNumber}`);
    }
}

class PayPalPayment implements PaymentStrategy {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    public pay(amount: number): void {
        console.log(`Оплачено ${amount} грн через PayPal: ${this.email}`);
    }
}

class TableBooking {
    private paymentStrategy: PaymentStrategy;

    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public confirmBooking(amount: number): void {
        console.log("Бронювання підтверджено.");
        this.paymentStrategy.pay(amount);
    }
}

const booking = new TableBooking();

booking.setPaymentStrategy(new CreditCardPayment("1234-5678-9876-5432"));
booking.confirmBooking(500);

booking.setPaymentStrategy(new PayPalPayment("user@example.com"));
booking.confirmBooking(700);
