interface MenuComponent {
    showDetails(): void;
}

class MenuItem implements MenuComponent {
    constructor(private name: string, private price: number) {}

    showDetails(): void {
        console.log(`${this.name}: ${this.price} USD`);
    }
}

class MenuComposite implements MenuComponent {
    private menuComponents: MenuComponent[] = [];

    add(component: MenuComponent): void {
        this.menuComponents.push(component);
    }

    remove(component: MenuComponent): void {
        this.menuComponents = this.menuComponents.filter(item => item !== component);
    }

    showDetails(): void {
        this.menuComponents.forEach(component => component.showDetails());
    }
}

const salad = new MenuItem("Salad", 5.99);
const steak = new MenuItem("Steak", 14.99);
const soup = new MenuItem("Soup", 4.99);

const dinnerSet = new MenuComposite();
dinnerSet.add(salad);
dinnerSet.add(steak);
dinnerSet.add(soup);

const coffee = new MenuItem("Coffee", 2.99);
const dessert = new MenuItem("Dessert", 3.99);

const fullOrder = new MenuComposite();
fullOrder.add(dinnerSet);
fullOrder.add(coffee);
fullOrder.add(dessert);

fullOrder.showDetails();