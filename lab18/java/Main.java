import java.util.ArrayList;
import java.util.List;

interface Memento {
  String getState();
  String getName();
}

class TableBookingMemento implements Memento {
  private String state;

  public TableBookingMemento(String state) {
    this.state = state;
  }

  @Override
  public String getState() {
    return state;
  }

  @Override
  public String getName() {
    return "Стан на " + java.time.LocalDateTime.now() + ": " + state;
  }
}

class TableBooking {
  private String state;

  public TableBooking(String state) {
    this.state = state;
  }

  public void setState(String state) {
    System.out.println("Зміна стану бронювання на: " + state);
    this.state = state;
  }

  public Memento saveStateToMemento() {
    System.out.println("Збереження стану бронювання...");
    return new TableBookingMemento(state);
  }

  public void restoreStateFromMemento(Memento memento) {
    this.state = memento.getState();
    System.out.println("Стан бронювання відновлено: " + state);
  }
}

class Caretaker {
  private List<Memento> mementos = new ArrayList<>();

  public void addMemento(Memento memento) {
    System.out.println("Збереження стану у список...");
    mementos.add(memento);
  }

  public Memento getMemento(int index) {
    return mementos.get(index);
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking booking = new TableBooking("Столик заброньовано для 4 осіб");
    Caretaker caretaker = new Caretaker();

    caretaker.addMemento(booking.saveStateToMemento());

    booking.setState("Столик заброньовано для 6 осіб");
    caretaker.addMemento(booking.saveStateToMemento());

    booking.setState("Бронювання скасовано");

    booking.restoreStateFromMemento(caretaker.getMemento(1));
  }
}
