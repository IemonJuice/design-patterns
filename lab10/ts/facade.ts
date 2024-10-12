class Restaurant {
    open() {
        console.log("Ресторан відкритий");
    }
}

class Table {
    reserve() {
        console.log("Столик заброньовано");
    }
}

class Customer {
    notify(message: string) {
        console.log(`Клієнт отримав повідомлення: ${message}`);
    }
}

class ReservationFacade {
    private restaurant: Restaurant;
    private table: Table;
    private customer: Customer;

    constructor() {
        this.restaurant = new Restaurant();
        this.table = new Table();
        this.customer = new Customer();
    }

    reserveTable() {
        this.restaurant.open();
        this.table.reserve();
        this.customer.notify("Ваш столик успішно заброньовано!");
    }
}

const reservationFacade = new ReservationFacade();
reservationFacade.reserveTable();
