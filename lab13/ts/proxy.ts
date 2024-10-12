interface TableBooking {
    bookTable(customerName: string, numberOfGuests: number): string;
}

class RealTableBooking implements TableBooking {
    bookTable(customerName: string, numberOfGuests: number): string {
        return `Столик для ${customerName} на ${numberOfGuests} осіб заброньовано.`;
    }
}

class TableBookingProxy implements TableBooking {
    private realTableBooking: RealTableBooking;
    private availableSeats: number;

    constructor(availableSeats: number) {
        this.availableSeats = availableSeats;
        this.realTableBooking = new RealTableBooking();
    }

    bookTable(customerName: string, numberOfGuests: number): string {
        if (this.availableSeats >= numberOfGuests) {
            this.availableSeats -= numberOfGuests;
            return this.realTableBooking.bookTable(customerName, numberOfGuests);
        } else {
            return `Немає достатньо місць для ${numberOfGuests} гостей.`;
        }
    }
}


const bookingProxy = new TableBookingProxy(10);

console.log(bookingProxy.bookTable("Іван", 4));
console.log(bookingProxy.bookTable("Олександр", 7));
