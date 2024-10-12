interface Dish {
    getDescription(): string;
    getCost(): number;
}

class BasicDish implements Dish {
    getDescription(): string {
        return "Основна страва";
    }

    getCost(): number {
        return 10.0;
    }
}

abstract class DishDecorator implements Dish {
    protected decoratedDish: Dish;

    constructor(decoratedDish: Dish) {
        this.decoratedDish = decoratedDish;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

class SauceDecorator extends DishDecorator {
    constructor(decoratedDish: Dish) {
        super(decoratedDish);
    }

    getDescription(): string {
        return `${this.decoratedDish.getDescription()}, з соусом`;
    }

    getCost(): number {
        return this.decoratedDish.getCost() + 2.0;
    }
}

class ExtraCheeseDecorator extends DishDecorator {
    constructor(decoratedDish: Dish) {
        super(decoratedDish);
    }

    getDescription(): string {
        return `${this.decoratedDish.getDescription()}, з додатковим сиром`;
    }

    getCost(): number {
        return this.decoratedDish.getCost() + 1.5;
    }
}

const basicDish = new BasicDish();
console.log(`${basicDish.getDescription()} коштує ${basicDish.getCost()} USD`);

const saucedDish = new SauceDecorator(basicDish);
console.log(`${saucedDish.getDescription()} коштує ${saucedDish.getCost()} USD`);

const fullyLoadedDish = new ExtraCheeseDecorator(saucedDish);
console.log(`${fullyLoadedDish.getDescription()} коштує ${fullyLoadedDish.getCost()} USD`);
