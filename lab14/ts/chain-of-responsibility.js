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
var BookingRequest = /** @class */ (function () {
    function BookingRequest(customerName, numberOfGuests, isVIP) {
        this.customerName = customerName;
        this.numberOfGuests = numberOfGuests;
        this.isVIP = isVIP;
    }
    return BookingRequest;
}());
var AbstractBookingHandler = /** @class */ (function () {
    function AbstractBookingHandler() {
        this.nextHandler = null;
    }
    AbstractBookingHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractBookingHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return 'Запит не може бути оброблено.';
    };
    return AbstractBookingHandler;
}());
var StandardBookingHandler = /** @class */ (function (_super) {
    __extends(StandardBookingHandler, _super);
    function StandardBookingHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardBookingHandler.prototype.handle = function (request) {
        if (!request.isVIP) {
            return "\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0430 \u0431\u0440\u043E\u043D\u044C \u0434\u043B\u044F ".concat(request.customerName, " \u043D\u0430 ").concat(request.numberOfGuests, " \u043E\u0441\u0456\u0431 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430.");
        }
        return _super.prototype.handle.call(this, request);
    };
    return StandardBookingHandler;
}(AbstractBookingHandler));
var VIPBookingHandler = /** @class */ (function (_super) {
    __extends(VIPBookingHandler, _super);
    function VIPBookingHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIPBookingHandler.prototype.handle = function (request) {
        if (request.isVIP) {
            return "VIP \u0431\u0440\u043E\u043D\u044C \u0434\u043B\u044F ".concat(request.customerName, " \u043D\u0430 ").concat(request.numberOfGuests, " \u043E\u0441\u0456\u0431 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430.");
        }
        return _super.prototype.handle.call(this, request);
    };
    return VIPBookingHandler;
}(AbstractBookingHandler));
var vipHandler = new VIPBookingHandler();
var standardHandler = new StandardBookingHandler();
standardHandler.setNext(vipHandler);
var request1 = new BookingRequest("Іван", 4, false);
console.log(standardHandler.handle(request1));
var request2 = new BookingRequest("Олександр", 2, true);
console.log(standardHandler.handle(request2));
