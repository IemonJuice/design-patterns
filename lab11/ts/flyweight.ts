interface Dish {
    serve(size: string): void;
}

class MenuItem implements Dish {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    serve(size: string): void {
        console.log(`Сервіруємо ${size} ${this.name} за ціною ${this.price} грн.`);
    }
}

class DishFactory {
    private dishes: Map<string, Dish> = new Map();

    getDish(name: string, price: number): Dish {
        const key = `${name}:${price}`;
        let dish = this.dishes.get(key);
        if (!dish) {
            dish = new MenuItem(name, price);
            this.dishes.set(key, dish);
        }
        return dish;
    }
}

const dishFactory = new DishFactory();

const salad = dishFactory.getDish("Салат", 5.99);
salad.serve("міні");

const steak = dishFactory.getDish("Стейк", 14.99);
steak.serve("великий");

const anotherSalad = dishFactory.getDish("Салат", 5.99);
anotherSalad.serve("середній");

console.log(`Салат і інший салат - це один і той же об'єкт: ${salad === anotherSalad}`);
