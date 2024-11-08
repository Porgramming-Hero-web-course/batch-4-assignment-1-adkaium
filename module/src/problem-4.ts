// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// type of circle
type Circle = {
    shape: 'circle';
    radius: number;
};

// type of rectangle
type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

// here union circle & rectangle type shape
type Shape = Circle | Rectangle;

function calculateShapeArea(param: Shape): number {
    //    guard of circle 
    if (param.shape === 'circle') {
        return Math.PI * param.radius * param.radius;

    // gusrd of rectangle
    } else if (param.shape === 'rectangle') {
        // 
        return param.width * param.height;
    } else{
         throw new Error('invalid input');
    }
    
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;
console.log(circleArea);
// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
// Sample Output 2:
24;