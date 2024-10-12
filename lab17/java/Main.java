interface Mediator {
  void notify(Object sender, String event);
}

abstract class Component {
  protected Mediator mediator;

  public Component(Mediator mediator) {
    this.mediator = mediator;
  }

  public void setMediator(Mediator mediator) {
    this.mediator = mediator;
  }
}

class TableBookingComponent extends Component {
  public TableBookingComponent(Mediator mediator) {
    super(mediator);
  }

  public void bookTable(String customerName, int numberOfGuests) {
    System.out.println("Столик для " + customerName + " на " + numberOfGuests + " осіб заброньовано.");
    mediator.notify(this, "bookTable");
  }
}

class AdminNotificationComponent extends Component {
  public AdminNotificationComponent(Mediator mediator) {
    super(mediator);
  }

  public void notifyAdmin(String message) {
    System.out.println("Адміністрація повідомлена: " + message);
  }
}

class TableAvailabilityComponent extends Component {
  public TableAvailabilityComponent(Mediator mediator) {
    super(mediator);
  }

  public void updateAvailability() {
    System.out.println("Статус доступності столиків оновлено.");
  }
}

class RestaurantMediator implements Mediator {
  private TableBookingComponent bookingComponent;
  private AdminNotificationComponent adminNotificationComponent;
  private TableAvailabilityComponent availabilityComponent;

  public RestaurantMediator(TableBookingComponent bookingComponent, AdminNotificationComponent adminNotificationComponent, TableAvailabilityComponent availabilityComponent) {
    this.bookingComponent = bookingComponent;
    this.adminNotificationComponent = adminNotificationComponent;
    this.availabilityComponent = availabilityComponent;

    this.bookingComponent.setMediator(this);
    this.adminNotificationComponent.setMediator(this);
    this.availabilityComponent.setMediator(this);
  }

  @Override
  public void notify(Object sender, String event) {
    if ("bookTable".equals(event)) {
      adminNotificationComponent.notifyAdmin("Нове бронювання столика.");
      availabilityComponent.updateAvailability();
    }
  }
}

public class Main {
  public static void main(String[] args) {
    TableBookingComponent bookingComponent = new TableBookingComponent(null);
    AdminNotificationComponent adminComponent = new AdminNotificationComponent(null);
    TableAvailabilityComponent availabilityComponent = new TableAvailabilityComponent(null);

    RestaurantMediator mediator = new RestaurantMediator(bookingComponent, adminComponent, availabilityComponent);

    bookingComponent.bookTable("Іван", 4);
  }
}
