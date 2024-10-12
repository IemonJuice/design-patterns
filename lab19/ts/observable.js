var TableBooking = /** @class */ (function () {
    function TableBooking() {
        this.observers = [];
    }
    TableBooking.prototype.setState = function (state) {
        this.state = state;
        console.log("\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E: ".concat(state));
        this.notify();
    };
    TableBooking.prototype.getState = function () {
        return this.state;
    };
    TableBooking.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    TableBooking.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    TableBooking.prototype.notify = function () {
        console.log("Повідомлення спостерігачів...");
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.state);
        }
    };
    return TableBooking;
}());
var AdminNotification = /** @class */ (function () {
    function AdminNotification() {
    }
    AdminNotification.prototype.update = function (state) {
        console.log("\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u0430: ".concat(state));
    };
    return AdminNotification;
}());
var CustomerNotification = /** @class */ (function () {
    function CustomerNotification() {
    }
    CustomerNotification.prototype.update = function (state) {
        console.log("\u041A\u043B\u0456\u0454\u043D\u0442 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439: ".concat(state));
    };
    return CustomerNotification;
}());
var booking = new TableBooking();
var adminObserver = new AdminNotification();
var customerObserver = new CustomerNotification();
booking.attach(adminObserver);
booking.attach(customerObserver);
booking.setState("Столик заброньовано для 4 осіб");
booking.setState("Бронювання скасовано");
