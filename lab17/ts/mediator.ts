interface Mediator {
    notify(sender: object, event: string): void;
}

class Component {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class TableBookingComponent extends Component {
    bookTable(customerName: string, numberOfGuests: number): void {
        console.log(`Столик для ${customerName} на ${numberOfGuests} осіб заброньовано.`);
        this.mediator.notify(this, "bookTable");
    }
}

class AdminNotificationComponent extends Component {
    notifyAdmin(message: string): void {
        console.log(`Адміністрація повідомлена: ${message}`);
    }
}

class TableAvailabilityComponent extends Component {
    updateAvailability(): void {
        console.log("Статус доступності столиків оновлено.");
    }
}

class RestaurantMediator implements Mediator {
    private bookingComponent: TableBookingComponent;
    private adminNotificationComponent: AdminNotificationComponent;
    private availabilityComponent: TableAvailabilityComponent;

    constructor(booking: TableBookingComponent, admin: AdminNotificationComponent, availability: TableAvailabilityComponent) {
        this.bookingComponent = booking;
        this.adminNotificationComponent = admin;
        this.availabilityComponent = availability;

        this.bookingComponent.setMediator(this);
        this.adminNotificationComponent.setMediator(this);
        this.availabilityComponent.setMediator(this);
    }

    notify(sender: object, event: string): void {
        if (event === "bookTable") {
            this.adminNotificationComponent.notifyAdmin("Нове бронювання столика.");
            this.availabilityComponent.updateAvailability();
        }
    }
}

const bookingComponent = new TableBookingComponent(null);
const adminComponent = new AdminNotificationComponent(null);
const availabilityComponent = new TableAvailabilityComponent(null);

const mediator = new RestaurantMediator(bookingComponent, adminComponent, availabilityComponent);

bookingComponent.bookTable("Іван", 4); 
