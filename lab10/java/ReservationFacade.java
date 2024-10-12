class ReservationFacade {
  private Restaurant restaurant;
  private Table table;
  private Customer customer;

  public ReservationFacade() {
    this.restaurant = new Restaurant();
    this.table = new Table();
    this.customer = new Customer();
  }

  public void reserveTable() {
    restaurant.open();
    table.reserve();
    customer.notify("Ваш столик успішно заброньовано!");
  }
}
