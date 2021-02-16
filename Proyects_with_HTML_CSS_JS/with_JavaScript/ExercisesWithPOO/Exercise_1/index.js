class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    get getBrand() {
        return this.brand;
    }
    get getModel() {
        return this.model;
    }
    get getPrice() {
        return this.price;
    }
}

class Car extends Vehicle {
    constructor(brand, model, price, doors) {
        super(brand, model, price);
        this.doors = doors;
    }

    get getDoors() {
        return this.doors;
    }

    toString() {
        return "Marca: " + this.getBrand + " // Modelo: " + this.getModel + " // Puertas: " + this.getDoors + " // Precio: $" + this.getPrice.replace(/[.]/, ",");
    }
}

class MotorCycle extends Vehicle {
    constructor(brand, model, price, cilinder) {
        super(brand, model, price);
        this.cilinder = cilinder;
    }

    get getCilinder() {
        return this.cilinder;
    }

    toString() {
        return "Marca: " + this.getBrand + " // Modelo: " + this.getModel + " // Cilindrada: " + this.getCilinder + " // Precio: $" + this.getPrice.replace(/[.]/, ",");
    }
}

//-------------------------------------------------------------------------------------------------

const vehicles = {
    vehicle_1 : {
        brand: "Peugeot",
        model: "206",
        doors: 4,
        cylinderCapacity: "",
        price: "200000.00",
    },
    vehicle_2 : {
        brand: "Honda",
        model: "Titan",
        doors: "",
        cylinderCapacity: "125cc",
        price: "60000.00",
    },
    vehicle_3 : {
        brand: "Peugeot",
        model: "208",
        doors: 5,
        cylinderCapacity: "",
        price: "250000.00",
    },
    vehicle_4 : {
        brand: "Yamaha",
        model: "YBR",
        doors: "",
        cylinderCapacity: "160cc",
        price: "80500.50",
    },
}

//--------------------------------------------------------------------------------------------------

let vehicleCar;
let vehicleMotorCycle;

let vehiclesArr = Object.values(vehicles);

vehiclesArr.forEach(element => {
    if (element.doors) {
        vehicleCar = new Car(element.brand, element.model, element.price, element.doors);
    
        console.log(vehicleCar.toString());
    } else {
        vehicleMotorCycle = new MotorCycle(element.brand, element.model, element.price, element.cylinderCapacity);
    
        console.log(vehicleMotorCycle.toString()); 
    }
});

console.log("--------------------\n--------------------");

console.log(vehicleCostly(vehiclesArr));
console.log(vehicleCheap(vehiclesArr));
console.log(modelY(vehiclesArr));

console.log("--------------------\n--------------------");

console.log(vehicleMaxToMin(vehiclesArr));

//----------------------------------------------------------------------------------------------------

function vehicleCostly(arrayData) {
    let arr = [];

    arrayData.forEach(element => {
        arr.push(parseFloat(element.price))
    });

    let stringOut = "Vehículo más caro: ";

    arrayData.forEach(element => {
        if (Math.max(...arr) == parseFloat(element.price)) {
            stringOut += element.brand + " " + element.model;
        }
    });

    return stringOut;
}

function vehicleCheap(arrayData) {
    let arr = [];

    arrayData.forEach(element => {
        arr.push(parseFloat(element.price));
    });
    
    let stringOut = "Vehículo más barato: ";

    arrayData.forEach(element => {
        if (Math.min(...arr) == parseFloat(element.price)) {
            stringOut += element.brand + " " + element.model;
        }
    });

    return stringOut;
}

function modelY(arrayData) {
    let stringOut = "Vehículo que contiene en el modelo la letra 'Y': ";
    let arr = [];

    arrayData.forEach(element => {
        arr.push(element.model)
    });
    
    for (let i = 0; i < arr.length; i++) {
        let charNew  = arr[i].split("");

        if(charNew.indexOf('Y') != -1) {
            stringOut += arrayData[i].brand + " " + arrayData[i].model + " " + arrayData[i].price;
            break;
        }
    }

    return stringOut;
}

function vehicleMaxToMin(arrayData) {
    let arr = [];

    arrayData.forEach(element => {
        arr.push(parseFloat(element.price));
    });
    
    let stringOut = "Vehículos ordenados por precio de mayor a menor: \n";

    let i = 0;

    while(i != 4) {
        arrayData.forEach(element => {
            if (Math.max(...arr) == parseFloat(element.price)) {
                stringOut += element.brand + " " + element.model + "\n";
                arr.splice(arr.indexOf(Math.max(...arr)), 1);
                i++;
            }
        });
    }

    for (let i = 0; i < arrayData.length; i++) {
        if (Math.max(...arr) === parseFloat(arrayData[i].price)) {
            stringOut += arrayData[i].brand + " " + arrayData[i].model;
        }
    }

    return stringOut;
}