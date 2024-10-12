var RealTableBooking = /** @class */ (function () {
    function RealTableBooking() {
    }
    RealTableBooking.prototype.bookTable = function (customerName, numberOfGuests) {
        return "\u0421\u0442\u043E\u043B\u0438\u043A \u0434\u043B\u044F ".concat(customerName, " \u043D\u0430 ").concat(numberOfGuests, " \u043E\u0441\u0456\u0431 \u0437\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E.");
    };
    return RealTableBooking;
}());
var TableBookingProxy = /** @class */ (function () {
    function TableBookingProxy(availableSeats) {
        this.availableSeats = availableSeats;
        this.realTableBooking = new RealTableBooking();
    }
    TableBookingProxy.prototype.bookTable = function (customerName, numberOfGuests) {
        if (this.availableSeats >= numberOfGuests) {
            this.availableSeats -= numberOfGuests;
            return this.realTableBooking.bookTable(customerName, numberOfGuests);
        }
        else {
            return "\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043C\u0456\u0441\u0446\u044C \u0434\u043B\u044F ".concat(numberOfGuests, " \u0433\u043E\u0441\u0442\u0435\u0439.");
        }
    };
    return TableBookingProxy;
}());
var bookingProxy = new TableBookingProxy(10);
console.log(bookingProxy.bookTable("Іван", 4));
console.log(bookingProxy.bookTable("Олександр", 7));
