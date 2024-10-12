interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

interface TableCollection {
    createIterator(): Iterator<Table>;
}

class Table {
    constructor(public tableNumber: number, public capacity: number, public isReserved: boolean) {}
}

class TableIterator implements Iterator<Table> {
    private position: number = 0;

    constructor(private tables: Table[]) {}

    public next(): Table | null {
        if (this.hasNext()) {
            return this.tables[this.position++];
        }
        return null;
    }

    public hasNext(): boolean {
        return this.position < this.tables.length;
    }
}

class RestaurantTables implements TableCollection {
    private tables: Table[] = [];

    public addTable(table: Table): void {
        this.tables.push(table);
    }

    public createIterator(): Iterator<Table> {
        return new TableIterator(this.tables);
    }
}

const restaurant = new RestaurantTables();
restaurant.addTable(new Table(1, 4, false));
restaurant.addTable(new Table(2, 2, true));
restaurant.addTable(new Table(3, 6, false));

const iterator = restaurant.createIterator();

while (iterator.hasNext()) {
    const table = iterator.next();
    if (table) {
        console.log(`Столик №${table.tableNumber} на ${table.capacity} осіб. Заброньовано: ${table.isReserved}`);
    }
}
