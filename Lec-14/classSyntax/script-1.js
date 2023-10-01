class Vehicle{
    constructor(color, np){
        this.color = color;
        this.np = np;
    }

    static print(){
        console.log(this.color, this.np);
    }

    set setColor(color) {
        this.color = color;
    }   

    get getColor(){
        return this.color;
    }
}

class Car extends Vehicle{
    constructor(color, np, mileage){
        super(color, np);
        this.mileage = mileage
    }
}

class EV extends Car{
    constructor(color, np, mileage, batteryCells){
        super(color, np, mileage);
        this.batteryCells = batteryCells;
    }
}


let fortuner = new Car('black', '2839sdhf', '15kmpl');
console.log(fortuner);

let Nexon = new EV('Blue', '2938sdkfh', '20kmpc', 8);
console.log(Nexon);

// Vehicle.print();

// fortuner.setColor = 'White'
fortuner.setColor('white');
console.log(fortuner.getColor)
