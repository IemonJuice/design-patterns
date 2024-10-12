class MenuItem implements Dish {
  private String name;
  private double price;

  public MenuItem(String name, double price) {
    this.name = name;
    this.price = price;
  }

  @Override
  public void serve(String size) {
    System.out.println("Сервіруємо " + size + " " + name + " за ціною " + price + " грн.");
  }
}
