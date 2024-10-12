import java.util.ArrayList;
import java.util.List;

interface Observer {
  void update(String state);
}

interface Subject {
  void attach(Observer observer);
  void detach(Observer observer);
  void notifyObservers();
}

class TableBooking implements Subject {
  private List<Observer> observers = new ArrayList<>();
  private String state;

  public void setState(String state) {
    this.state = state;
    System.out.println("Бронювання оновлено: " + state);
    notifyObservers();
  }

  public String getState() {
    return state;
  }

  @Override
  public void attach(Observer observer) {
    observers.add(observer);
  }

  @Override
  public void detach(Observer observer) {
    observers.remove(observer);
  }

  @Override
  public void notifyObservers() {
    System.out.println("Повідомлення спостерігачів...");
    for (Observer observer : observers) {
      observer.update(state);
    }
  }
}

class AdminNotification implements Observer {
  @Override
  public void update(String state) {
    System.out.println("Адміністрація повідомлена: " + state);
  }
}

class CustomerNotification implements Observer {
  @Override
  public void update(String state) {
    System.out.println("Клієнт повідомлений: " + state);
  }
}

public class Main {
  public static void main(String[] args) {
    TableBooking booking = new TableBooking();

    Observer adminObserver = new AdminNotification();
    Observer customerObserver = new CustomerNotification();

    booking.attach(adminObserver);
    booking.attach(customerObserver);

    booking.setState("Столик заброньовано для 4 осіб");
    booking.setState("Бронювання скасовано");
  }
}
