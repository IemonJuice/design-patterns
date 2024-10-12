class BasicDish implements Dish {
  @Override
  public String getDescription() {
    return "Основна страва";
  }

  @Override
  public double getCost() {
    return 10.0;
  }
}