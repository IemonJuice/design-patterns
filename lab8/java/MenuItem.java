class MenuItem implements MenuComponent {
  private String name;
  private double price;

  public MenuItem(String name, double price) {
    this.name = name;
    this.price = price;
  }

  @Override
  public void showDetails() {
    System.out.println(name + ": " + price + " USD");
  }
}
