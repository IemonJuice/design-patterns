interface Command {
    execute(): void;
}

class TableBooking {
    bookTable(customerName: string, numberOfGuests: number): void {
        console.log(`Столик для ${customerName} на ${numberOfGuests} осіб заброньовано.`);
    }

    cancelBooking(customerName: string): void {
        console.log(`Бронювання для ${customerName} скасовано.`);
    }
}

class BookTableCommand implements Command {
    private booking: TableBooking;
    private customerName: string;
    private numberOfGuests: number;

    constructor(booking: TableBooking, customerName: string, numberOfGuests: number) {
        this.booking = booking;
        this.customerName = customerName;
        this.numberOfGuests = numberOfGuests;
    }

    execute(): void {
        this.booking.bookTable(this.customerName, this.numberOfGuests);
    }
}

class CancelBookingCommand implements Command {
    private booking: TableBooking;
    private customerName: string;

    constructor(booking: TableBooking, customerName: string) {
        this.booking = booking;
        this.customerName = customerName;
    }

    execute(): void {
        this.booking.cancelBooking(this.customerName);
    }
}

class BookingInvoker {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        this.command.execute();
    }
}

const booking = new TableBooking();
const bookCommand = new BookTableCommand(booking, "Іван", 4);
const cancelCommand = new CancelBookingCommand(booking, "Іван");

const invoker = new BookingInvoker();

invoker.setCommand(bookCommand);
invoker.executeCommand();

invoker.setCommand(cancelCommand);
invoker.executeCommand();
