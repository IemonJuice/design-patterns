var TableBookingMemento = /** @class */ (function () {
    function TableBookingMemento(state) {
        this.state = state;
    }
    TableBookingMemento.prototype.getState = function () {
        return this.state;
    };
    TableBookingMemento.prototype.getName = function () {
        var date = new Date();
        return "\u0421\u0442\u0430\u043D \u043D\u0430 ".concat(date.toLocaleString(), ": ").concat(this.state);
    };
    return TableBookingMemento;
}());
var TableBooking = /** @class */ (function () {
    function TableBooking(state) {
        this.state = state;
    }
    TableBooking.prototype.setState = function (state) {
        console.log("\u0417\u043C\u0456\u043D\u0430 \u0441\u0442\u0430\u043D\u0443 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430: ".concat(state));
        this.state = state;
    };
    TableBooking.prototype.saveStateToMemento = function () {
        console.log("Збереження стану бронювання...");
        return new TableBookingMemento(this.state);
    };
    TableBooking.prototype.restoreStateFromMemento = function (memento) {
        this.state = memento.getState();
        console.log("\u0421\u0442\u0430\u043D \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043E: ".concat(this.state));
    };
    return TableBooking;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.mementos = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        console.log("Збереження стану у список...");
        this.mementos.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.mementos[index];
    };
    return Caretaker;
}());
var booking = new TableBooking("Столик заброньовано для 4 осіб");
var caretaker = new Caretaker();
caretaker.addMemento(booking.saveStateToMemento());
booking.setState("Столик заброньовано для 6 осіб");
caretaker.addMemento(booking.saveStateToMemento());
booking.setState("Бронювання скасовано");
booking.restoreStateFromMemento(caretaker.getMemento(1)); // Стан для 6 осіб
