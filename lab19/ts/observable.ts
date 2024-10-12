interface Observer {
    update(state: string): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class TableBooking implements Subject {
    private observers: Observer[] = [];
    private state: string;

    public setState(state: string): void {
        this.state = state;
        console.log(`Бронювання оновлено: ${state}`);
        this.notify();
    }

    public getState(): string {
        return this.state;
    }

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    public notify(): void {
        console.log("Повідомлення спостерігачів...");
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
}

class AdminNotification implements Observer {
    public update(state: string): void {
        console.log(`Адміністрація повідомлена: ${state}`);
    }
}

class CustomerNotification implements Observer {
    public update(state: string): void {
        console.log(`Клієнт повідомлений: ${state}`);
    }
}

const booking = new TableBooking();

const adminObserver = new AdminNotification();
const customerObserver = new CustomerNotification();

booking.attach(adminObserver);
booking.attach(customerObserver);

booking.setState("Столик заброньовано для 4 осіб");
booking.setState("Бронювання скасовано");
