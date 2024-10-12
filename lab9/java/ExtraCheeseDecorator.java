class ExtraCheeseDecorator extends DishDecorator {
  public ExtraCheeseDecorator(Dish decoratedDish) {
    super(decoratedDish);
  }

  @Override
  public String getDescription() {
    return decoratedDish.getDescription() + ", з додатковим сиром";
  }

  @Override
  public double getCost() {
    return decoratedDish.getCost() + 1.5;
  }
}
