var TableBooking = /** @class */ (function () {
    function TableBooking() {
    }
    TableBooking.prototype.bookTable = function (customerName, numberOfGuests) {
        console.log("\u0421\u0442\u043E\u043B\u0438\u043A \u0434\u043B\u044F ".concat(customerName, " \u043D\u0430 ").concat(numberOfGuests, " \u043E\u0441\u0456\u0431 \u0437\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E."));
    };
    TableBooking.prototype.cancelBooking = function (customerName) {
        console.log("\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0434\u043B\u044F ".concat(customerName, " \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E."));
    };
    return TableBooking;
}());
var BookTableCommand = /** @class */ (function () {
    function BookTableCommand(booking, customerName, numberOfGuests) {
        this.booking = booking;
        this.customerName = customerName;
        this.numberOfGuests = numberOfGuests;
    }
    BookTableCommand.prototype.execute = function () {
        this.booking.bookTable(this.customerName, this.numberOfGuests);
    };
    return BookTableCommand;
}());
var CancelBookingCommand = /** @class */ (function () {
    function CancelBookingCommand(booking, customerName) {
        this.booking = booking;
        this.customerName = customerName;
    }
    CancelBookingCommand.prototype.execute = function () {
        this.booking.cancelBooking(this.customerName);
    };
    return CancelBookingCommand;
}());
var BookingInvoker = /** @class */ (function () {
    function BookingInvoker() {
    }
    BookingInvoker.prototype.setCommand = function (command) {
        this.command = command;
    };
    BookingInvoker.prototype.executeCommand = function () {
        this.command.execute();
    };
    return BookingInvoker;
}());
var booking = new TableBooking();
var bookCommand = new BookTableCommand(booking, "Іван", 4);
var cancelCommand = new CancelBookingCommand(booking, "Іван");
var invoker = new BookingInvoker();
invoker.setCommand(bookCommand);
invoker.executeCommand();
invoker.setCommand(cancelCommand);
invoker.executeCommand();
