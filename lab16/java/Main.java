import java.util.ArrayList;
import java.util.List;

interface Iterator<T> {
  boolean hasNext();
  T next();
}

interface TableCollection {
  Iterator<Table> createIterator();
}

class Table {
  private int tableNumber;
  private int capacity;
  private boolean isReserved;

  public Table(int tableNumber, int capacity, boolean isReserved) {
    this.tableNumber = tableNumber;
    this.capacity = capacity;
    this.isReserved = isReserved;
  }


  @Override
  public String toString() {
    return "Столик №" + tableNumber + " на " + capacity + " осіб. Заброньовано: " + isReserved;
  }
}

class TableIterator implements Iterator<Table> {
  private List<Table> tables;
  private int position = 0;

  public TableIterator(List<Table> tables) {
    this.tables = tables;
  }

  @Override
  public boolean hasNext() {
    return position < tables.size();
  }

  @Override
  public Table next() {
    return tables.get(position++);
  }
}

class RestaurantTables implements TableCollection {
  private List<Table> tables = new ArrayList<>();

  public void addTable(Table table) {
    tables.add(table);
  }

  @Override
  public Iterator<Table> createIterator() {
    return new TableIterator(tables);
  }
}

public class Main {
  public static void main(String[] args) {
    RestaurantTables restaurant = new RestaurantTables();
    restaurant.addTable(new Table(1, 4, false));
    restaurant.addTable(new Table(2, 2, true));
    restaurant.addTable(new Table(3, 6, false));

    Iterator<Table> iterator = restaurant.createIterator();

    while (iterator.hasNext()) {
      Table table = iterator.next();
      System.out.println(table);
    }
  }
}
