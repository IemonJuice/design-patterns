interface BookingHandler {
    setNext(handler: BookingHandler): BookingHandler;
    handle(request: BookingRequest): string;
}

class BookingRequest {
    constructor(public customerName: string, public numberOfGuests: number, public isVIP: boolean) {}
}

abstract class AbstractBookingHandler implements BookingHandler {
    private nextHandler: BookingHandler | null = null;

    public setNext(handler: BookingHandler): BookingHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: BookingRequest): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return 'Запит не може бути оброблено.';
    }
}

class StandardBookingHandler extends AbstractBookingHandler {
    public handle(request: BookingRequest): string {
        if (!request.isVIP) {
            return `Звичайна бронь для ${request.customerName} на ${request.numberOfGuests} осіб успішно створена.`;
        }
        return super.handle(request);
    }
}

class VIPBookingHandler extends AbstractBookingHandler {
    public handle(request: BookingRequest): string {
        if (request.isVIP) {
            return `VIP бронь для ${request.customerName} на ${request.numberOfGuests} осіб успішно створена.`;
        }
        return super.handle(request);
    }
}

const vipHandler = new VIPBookingHandler();
const standardHandler = new StandardBookingHandler();

standardHandler.setNext(vipHandler);

const request1 = new BookingRequest("Іван", 4, false);
console.log(standardHandler.handle(request1));

const request2 = new BookingRequest("Олександр", 2, true);
console.log(standardHandler.handle(request2));
