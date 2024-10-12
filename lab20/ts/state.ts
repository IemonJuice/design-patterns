interface BookingState {
    handleRequest(): void;
}

class ReservedState implements BookingState {
    public handleRequest(): void {
        console.log("Стан: Столик заброньовано. Очікуємо на клієнта.");
    }
}

class PendingConfirmationState implements BookingState {
    public handleRequest(): void {
        console.log("Стан: Бронювання очікує підтвердження клієнта.");
    }
}

class CanceledState implements BookingState {
    public handleRequest(): void {
        console.log("Стан: Бронювання скасовано.");
    }
}

class TableBooking {
    private state: BookingState;

    constructor(initialState: BookingState) {
        this.state = initialState;
    }

    public setState(state: BookingState): void {
        this.state = state;
    }

    public processRequest(): void {
        this.state.handleRequest();
    }
}

const booking = new TableBooking(new PendingConfirmationState());
booking.processRequest();

booking.setState(new ReservedState());
booking.processRequest();

booking.setState(new CanceledState());
booking.processRequest();
