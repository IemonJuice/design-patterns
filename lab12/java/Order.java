interface Order {
  void placeOrder(String dish);
}
class RealOrder implements Order {
  @Override
  public void placeOrder(String dish) {
    System.out.println("Замовлено: " + dish);
  }
}
