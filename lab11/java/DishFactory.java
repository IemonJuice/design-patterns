import java.util.HashMap;

class DishFactory {
  private HashMap<String, Dish> dishes = new HashMap<>();

  public Dish getDish(String name, double price) {
    String key = name + ":" + price;
    Dish dish = dishes.get(key);
    if (dish == null) {
      dish = new MenuItem(name, price);
      dishes.put(key, dish);
    }
    return dish;
  }
}
