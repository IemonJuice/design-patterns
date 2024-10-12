var RestaurantBooking = /** @class */ (function () {
    function RestaurantBooking(tableNumber) {
        this.tableNumber = tableNumber;
    }
    RestaurantBooking.prototype.accept = function (visitor) {
        visitor.visitRestaurantBooking(this);
    };
    RestaurantBooking.prototype.getTableNumber = function () {
        return this.tableNumber;
    };
    return RestaurantBooking;
}());
var CafeBooking = /** @class */ (function () {
    function CafeBooking(tableNumber) {
        this.tableNumber = tableNumber;
    }
    CafeBooking.prototype.accept = function (visitor) {
        visitor.visitCafeBooking(this);
    };
    CafeBooking.prototype.getTableNumber = function () {
        return this.tableNumber;
    };
    return CafeBooking;
}());
var BookingDetailVisitor = /** @class */ (function () {
    function BookingDetailVisitor() {
    }
    BookingDetailVisitor.prototype.visitRestaurantBooking = function (restaurantBooking) {
        console.log("\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u043B\u0438\u043A\u0430 \u0432 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456: \u043D\u043E\u043C\u0435\u0440 ".concat(restaurantBooking.getTableNumber()));
    };
    BookingDetailVisitor.prototype.visitCafeBooking = function (cafeBooking) {
        console.log("\u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u043B\u0438\u043A\u0430 \u0432 \u043A\u0430\u0444\u0435: \u043D\u043E\u043C\u0435\u0440 ".concat(cafeBooking.getTableNumber()));
    };
    return BookingDetailVisitor;
}());
var restaurantBooking = new RestaurantBooking(5);
var cafeBooking = new CafeBooking(10);
var bookingDetailVisitor = new BookingDetailVisitor();
restaurantBooking.accept(bookingDetailVisitor);
cafeBooking.accept(bookingDetailVisitor);
