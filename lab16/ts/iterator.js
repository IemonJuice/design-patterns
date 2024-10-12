var Table = /** @class */ (function () {
    function Table(tableNumber, capacity, isReserved) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.isReserved = isReserved;
    }
    return Table;
}());
var TableIterator = /** @class */ (function () {
    function TableIterator(tables) {
        this.tables = tables;
        this.position = 0;
    }
    TableIterator.prototype.next = function () {
        if (this.hasNext()) {
            return this.tables[this.position++];
        }
        return null;
    };
    TableIterator.prototype.hasNext = function () {
        return this.position < this.tables.length;
    };
    return TableIterator;
}());
var RestaurantTables = /** @class */ (function () {
    function RestaurantTables() {
        this.tables = [];
    }
    RestaurantTables.prototype.addTable = function (table) {
        this.tables.push(table);
    };
    RestaurantTables.prototype.createIterator = function () {
        return new TableIterator(this.tables);
    };
    return RestaurantTables;
}());
var restaurant = new RestaurantTables();
restaurant.addTable(new Table(1, 4, false));
restaurant.addTable(new Table(2, 2, true));
restaurant.addTable(new Table(3, 6, false));
var iterator = restaurant.createIterator();
while (iterator.hasNext()) {
    var table = iterator.next();
    if (table) {
        console.log("\u0421\u0442\u043E\u043B\u0438\u043A \u2116".concat(table.tableNumber, " \u043D\u0430 ").concat(table.capacity, " \u043E\u0441\u0456\u0431. \u0417\u0430\u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E: ").concat(table.isReserved));
    }
}
