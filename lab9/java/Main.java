public class Main {
  public static void main(String[] args) {
    Dish basicDish = new BasicDish();
    System.out.println(basicDish.getDescription() + " коштує " + basicDish.getCost() + " USD");

    Dish saucedDish = new SauceDecorator(basicDish);
    System.out.println(saucedDish.getDescription() + " коштує " + saucedDish.getCost() + " USD");

    Dish fullyLoadedDish = new ExtraCheeseDecorator(saucedDish);
    System.out.println(fullyLoadedDish.getDescription() + " коштує " + fullyLoadedDish.getCost() + " USD");
  }
}
