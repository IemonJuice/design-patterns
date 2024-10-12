var CafeReservationService = /** @class */ (function () {
    function CafeReservationService() {
    }
    CafeReservationService.prototype.reserve = function (date, guests) {
        return "\u041A\u0430\u0444\u0435: \u0421\u0442\u043E\u043B\u0438\u043A \u0437\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E \u043D\u0430 ".concat(guests, " \u0433\u043E\u0441\u0442\u0435\u0439, \u0434\u0430\u0442\u0430: ").concat(date);
    };
    return CafeReservationService;
}());
var RestaurantBookingService = /** @class */ (function () {
    function RestaurantBookingService() {
    }
    RestaurantBookingService.prototype.bookDinner = function (reservationDetails) {
        return "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D: \u0412\u0435\u0447\u0435\u0440\u044F \u0437\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 ".concat(reservationDetails.people, " \u043E\u0441\u0456\u0431, \u0434\u0430\u0442\u0430: ").concat(reservationDetails.bookingDate, ", \u0447\u0430\u0441: ").concat(reservationDetails.time);
    };
    return RestaurantBookingService;
}());
var RestaurantAdapter = /** @class */ (function () {
    function RestaurantAdapter(restaurantService) {
        this.restaurantService = restaurantService;
    }
    RestaurantAdapter.prototype.reserve = function (date, guests) {
        var reservationDetails = {
            bookingDate: date,
            time: '19:00',
            people: guests
        };
        return this.restaurantService.bookDinner(reservationDetails);
    };
    return RestaurantAdapter;
}());
var cafeService = new CafeReservationService();
console.log(cafeService.reserve('2024-10-10', 2));
var restaurantService = new RestaurantAdapter(new RestaurantBookingService());
console.log(restaurantService.reserve('2024-10-10', 4));
