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
var TableBookingTemplate = /** @class */ (function () {
    function TableBookingTemplate() {
    }
    TableBookingTemplate.prototype.bookTable = function () {
        this.selectTable();
        this.sendConfirmation();
        this.processPayment();
        this.sendReceipt();
    };
    TableBookingTemplate.prototype.sendConfirmation = function () {
        console.log("Відправляється підтвердження бронювання.");
    };
    TableBookingTemplate.prototype.sendReceipt = function () {
        console.log("Відправляється квитанція після оплати.");
    };
    return TableBookingTemplate;
}());
var MobileAppBooking = /** @class */ (function (_super) {
    __extends(MobileAppBooking, _super);
    function MobileAppBooking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileAppBooking.prototype.selectTable = function () {
        console.log("Столик вибрано через мобільний додаток.");
    };
    MobileAppBooking.prototype.processPayment = function () {
        console.log("Оплата через мобільний додаток.");
    };
    return MobileAppBooking;
}(TableBookingTemplate));
var WebsiteBooking = /** @class */ (function (_super) {
    __extends(WebsiteBooking, _super);
    function WebsiteBooking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebsiteBooking.prototype.selectTable = function () {
        console.log("Столик вибрано через вебсайт.");
    };
    WebsiteBooking.prototype.processPayment = function () {
        console.log("Оплата через вебсайт.");
    };
    return WebsiteBooking;
}(TableBookingTemplate));
var mobileBooking = new MobileAppBooking();
mobileBooking.bookTable();
var websiteBooking = new WebsiteBooking();
websiteBooking.bookTable();
