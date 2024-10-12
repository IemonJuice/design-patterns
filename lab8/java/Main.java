public class Main {
  public static void main(String[] args) {
    MenuItem salad = new MenuItem("Salad", 5.99);
    MenuItem steak = new MenuItem("Steak", 14.99);
    MenuItem soup = new MenuItem("Soup", 4.99);

    MenuComposite dinnerSet = new MenuComposite();
    dinnerSet.add(salad);
    dinnerSet.add(steak);
    dinnerSet.add(soup);

    MenuItem coffee = new MenuItem("Coffee", 2.99);
    MenuItem dessert = new MenuItem("Dessert", 3.99);

    MenuComposite fullOrder = new MenuComposite();
    fullOrder.add(dinnerSet);
    fullOrder.add(coffee);
    fullOrder.add(dessert);

    fullOrder.showDetails();
  }
}
