interface Memento {
    getState(): string;
    getName(): string;
}

class TableBookingMemento implements Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        const date = new Date();
        return `Стан на ${date.toLocaleString()}: ${this.state}`;
    }
}

class TableBooking {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public setState(state: string): void {
        console.log(`Зміна стану бронювання на: ${state}`);
        this.state = state;
    }

    public saveStateToMemento(): Memento {
        console.log("Збереження стану бронювання...");
        return new TableBookingMemento(this.state);
    }

    public restoreStateFromMemento(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Стан бронювання відновлено: ${this.state}`);
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    public addMemento(memento: Memento): void {
        console.log("Збереження стану у список...");
        this.mementos.push(memento);
    }

    public getMemento(index: number): Memento {
        return this.mementos[index];
    }
}

const booking = new TableBooking("Столик заброньовано для 4 осіб");
const caretaker = new Caretaker();

caretaker.addMemento(booking.saveStateToMemento());

booking.setState("Столик заброньовано для 6 осіб");
caretaker.addMemento(booking.saveStateToMemento());

booking.setState("Бронювання скасовано");

booking.restoreStateFromMemento(caretaker.getMemento(1));
