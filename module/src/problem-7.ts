// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
    make: string;
    model:string;
    year: number;

    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year= year;
    }

    getCarAge():number{
      const currentYerg = new Date().getFullYear();
      return currentYerg - this.year;
    }
}

// const myCar = new Car('toyota','yearas', 2012);

// console.log(myCar.getCarAge());