class SauceDecorator extends DishDecorator {
  public SauceDecorator(Dish decoratedDish) {
    super(decoratedDish);
  }

  @Override
  public String getDescription() {
    return decoratedDish.getDescription() + ", з соусом";
  }

  @Override
  public double getCost() {
    return decoratedDish.getCost() + 2.0;
  }
}
