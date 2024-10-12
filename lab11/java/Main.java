public class Main {
  public static void main(String[] args) {
    DishFactory dishFactory = new DishFactory();

    Dish salad = dishFactory.getDish("Салат", 5.99);
    salad.serve("міні");

    Dish steak = dishFactory.getDish("Стейк", 14.99);
    steak.serve("великий");

    Dish anotherSalad = dishFactory.getDish("Салат", 5.99);
    anotherSalad.serve("середній");

    System.out.println("Салат і інший салат - це один і той же об'єкт: " + (salad == anotherSalad));
  }
}
