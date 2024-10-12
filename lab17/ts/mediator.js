var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component(mediator) {
        this.mediator = mediator;
    }
    Component.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Component;
}());
var TableBookingComponent = /** @class */ (function (_super) {
    __extends(TableBookingComponent, _super);
    function TableBookingComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBookingComponent.prototype.bookTable = function (customerName, numberOfGuests) {
        console.log("\u0421\u0442\u043E\u043B\u0438\u043A \u0434\u043B\u044F ".concat(customerName, " \u043D\u0430 ").concat(numberOfGuests, " \u043E\u0441\u0456\u0431 \u0437\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E."));
        this.mediator.notify(this, "bookTable");
    };
    return TableBookingComponent;
}(Component));
var AdminNotificationComponent = /** @class */ (function (_super) {
    __extends(AdminNotificationComponent, _super);
    function AdminNotificationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminNotificationComponent.prototype.notifyAdmin = function (message) {
        console.log("\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u0430: ".concat(message));
    };
    return AdminNotificationComponent;
}(Component));
var TableAvailabilityComponent = /** @class */ (function (_super) {
    __extends(TableAvailabilityComponent, _super);
    function TableAvailabilityComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableAvailabilityComponent.prototype.updateAvailability = function () {
        console.log("Статус доступності столиків оновлено.");
    };
    return TableAvailabilityComponent;
}(Component));
var RestaurantMediator = /** @class */ (function () {
    function RestaurantMediator(booking, admin, availability) {
        this.bookingComponent = booking;
        this.adminNotificationComponent = admin;
        this.availabilityComponent = availability;
        this.bookingComponent.setMediator(this);
        this.adminNotificationComponent.setMediator(this);
        this.availabilityComponent.setMediator(this);
    }
    RestaurantMediator.prototype.notify = function (sender, event) {
        if (event === "bookTable") {
            this.adminNotificationComponent.notifyAdmin("Нове бронювання столика.");
            this.availabilityComponent.updateAvailability();
        }
    };
    return RestaurantMediator;
}());
var bookingComponent = new TableBookingComponent(null);
var adminComponent = new AdminNotificationComponent(null);
var availabilityComponent = new TableAvailabilityComponent(null);
var mediator = new RestaurantMediator(bookingComponent, adminComponent, availabilityComponent);
bookingComponent.bookTable("Іван", 4);
