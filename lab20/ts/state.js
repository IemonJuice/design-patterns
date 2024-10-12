var ReservedState = /** @class */ (function () {
    function ReservedState() {
    }
    ReservedState.prototype.handleRequest = function () {
        console.log("Стан: Столик заброньовано. Очікуємо на клієнта.");
    };
    return ReservedState;
}());
var PendingConfirmationState = /** @class */ (function () {
    function PendingConfirmationState() {
    }
    PendingConfirmationState.prototype.handleRequest = function () {
        console.log("Стан: Бронювання очікує підтвердження клієнта.");
    };
    return PendingConfirmationState;
}());
var CanceledState = /** @class */ (function () {
    function CanceledState() {
    }
    CanceledState.prototype.handleRequest = function () {
        console.log("Стан: Бронювання скасовано.");
    };
    return CanceledState;
}());
var TableBooking = /** @class */ (function () {
    function TableBooking(initialState) {
        this.state = initialState;
    }
    TableBooking.prototype.setState = function (state) {
        this.state = state;
    };
    TableBooking.prototype.processRequest = function () {
        this.state.handleRequest();
    };
    return TableBooking;
}());
var booking = new TableBooking(new PendingConfirmationState());
booking.processRequest();
booking.setState(new ReservedState());
booking.processRequest();
booking.setState(new CanceledState());
booking.processRequest();
