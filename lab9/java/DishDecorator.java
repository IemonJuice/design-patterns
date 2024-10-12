abstract class DishDecorator implements Dish {
  protected Dish decoratedDish;

  public DishDecorator(Dish decoratedDish) {
    this.decoratedDish = decoratedDish;
  }
}
