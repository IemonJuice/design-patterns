abstract class TableBookingTemplate {
    public bookTable(): void {
        this.selectTable();
        this.sendConfirmation();
        this.processPayment();
        this.sendReceipt();
    }

    protected abstract selectTable(): void;
    protected abstract processPayment(): void;

    protected sendConfirmation(): void {
        console.log("Відправляється підтвердження бронювання.");
    }

    protected sendReceipt(): void {
        console.log("Відправляється квитанція після оплати.");
    }
}

class MobileAppBooking extends TableBookingTemplate {
    protected selectTable(): void {
        console.log("Столик вибрано через мобільний додаток.");
    }

    protected processPayment(): void {
        console.log("Оплата через мобільний додаток.");
    }
}

class WebsiteBooking extends TableBookingTemplate {
    protected selectTable(): void {
        console.log("Столик вибрано через вебсайт.");
    }

    protected processPayment(): void {
        console.log("Оплата через вебсайт.");
    }
}

const mobileBooking = new MobileAppBooking();
mobileBooking.bookTable();

const websiteBooking = new WebsiteBooking();
websiteBooking.bookTable();
