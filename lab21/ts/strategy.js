var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment(cardNumber) {
        this.cardNumber = cardNumber;
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E ".concat(amount, " \u0433\u0440\u043D \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u044E \u043A\u0430\u0440\u0442\u043A\u043E\u044E: ").concat(this.cardNumber));
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(email) {
        this.email = email;
    }
    PayPalPayment.prototype.pay = function (amount) {
        console.log("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E ".concat(amount, " \u0433\u0440\u043D \u0447\u0435\u0440\u0435\u0437 PayPal: ").concat(this.email));
    };
    return PayPalPayment;
}());
var TableBooking = /** @class */ (function () {
    function TableBooking() {
    }
    TableBooking.prototype.setPaymentStrategy = function (paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    };
    TableBooking.prototype.confirmBooking = function (amount) {
        console.log("Бронювання підтверджено.");
        this.paymentStrategy.pay(amount);
    };
    return TableBooking;
}());
var booking = new TableBooking();
booking.setPaymentStrategy(new CreditCardPayment("1234-5678-9876-5432"));
booking.confirmBooking(500);
booking.setPaymentStrategy(new PayPalPayment("user@example.com"));
booking.confirmBooking(700);
