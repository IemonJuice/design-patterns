import java.util.ArrayList;
import java.util.List;

class MenuComposite implements MenuComponent {
  private final List<MenuComponent> menuComponents = new ArrayList<>();

  public void add(MenuComponent component) {
    menuComponents.add(component);
  }

  public void remove(MenuComponent component) {
    menuComponents.remove(component);
  }

  @Override
  public void showDetails() {
    for (MenuComponent component : menuComponents) {
      component.showDetails();
    }
  }
}
