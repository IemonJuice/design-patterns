interface BookingVisitor {
    visitRestaurantBooking(restaurantBooking: RestaurantBooking): void;
    visitCafeBooking(cafeBooking: CafeBooking): void;
}

interface Booking {
    accept(visitor: BookingVisitor): void;
}

class RestaurantBooking implements Booking {
    private tableNumber: number;

    constructor(tableNumber: number) {
        this.tableNumber = tableNumber;
    }

    public accept(visitor: BookingVisitor): void {
        visitor.visitRestaurantBooking(this);
    }

    public getTableNumber(): number {
        return this.tableNumber;
    }
}

class CafeBooking implements Booking {
    private tableNumber: number;

    constructor(tableNumber: number) {
        this.tableNumber = tableNumber;
    }

    public accept(visitor: BookingVisitor): void {
        visitor.visitCafeBooking(this);
    }

    public getTableNumber(): number {
        return this.tableNumber;
    }
}

class BookingDetailVisitor implements BookingVisitor {
    public visitRestaurantBooking(restaurantBooking: RestaurantBooking): void {
        console.log(`Бронювання столика в ресторані: номер ${restaurantBooking.getTableNumber()}`);
    }

    public visitCafeBooking(cafeBooking: CafeBooking): void {
        console.log(`Бронювання столика в кафе: номер ${cafeBooking.getTableNumber()}`);
    }
}

const restaurantBooking = new RestaurantBooking(5);
const cafeBooking = new CafeBooking(10);

const bookingDetailVisitor = new BookingDetailVisitor();

restaurantBooking.accept(bookingDetailVisitor);

cafeBooking.accept(bookingDetailVisitor);
