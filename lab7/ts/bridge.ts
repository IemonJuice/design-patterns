interface ReservationMethod {
    reserve(date: string, guests: number): string;
}

abstract class Place {
    protected reservationMethod: ReservationMethod;

    constructor(reservationMethod: ReservationMethod) {
        this.reservationMethod = reservationMethod;
    }

    abstract reserveTable(date: string, guests: number): string;
}

class OnlineReservation implements ReservationMethod {
    reserve(date: string, guests: number): string {
        return `Бронювання через інтернет на ${guests} гостей, дата: ${date}.`;
    }
}

class PhoneReservation implements ReservationMethod {
    reserve(date: string, guests: number): string {
        return `Бронювання через телефон на ${guests} гостей, дата: ${date}.`;
    }
}

class Restaurant extends Place {
    constructor(reservationMethod: ReservationMethod) {
        super(reservationMethod);
    }

    reserveTable(date: string, guests: number): string {
        return `Ресторан: ${this.reservationMethod.reserve(date, guests)}`;
    }
}

class Cafe extends Place {
    constructor(reservationMethod: ReservationMethod) {
        super(reservationMethod);
    }

    reserveTable(date: string, guests: number): string {
        return `Кафе: ${this.reservationMethod.reserve(date, guests)}`;
    }
}


const cafeWithOnlineReservation = new Cafe(new OnlineReservation());
console.log(cafeWithOnlineReservation.reserveTable("2024-10-10", 2));

const restaurantWithPhoneReservation = new Restaurant(new PhoneReservation());
console.log(restaurantWithPhoneReservation.reserveTable("2024-10-12", 4));

const restaurantWithOnlineReservation = new Restaurant(new OnlineReservation());
console.log(restaurantWithOnlineReservation.reserveTable("2024-10-15", 5));
