// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const z = (x, y) => x * y;



 let nameCall = (firstname, Lastname) => {
    return firstname + " " + Lastname
 }

 console.log(nameCall("Jon", "George"));



 class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }

  myCar = new Car("Honda")

  console.log(myCar.carname)

  function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
 

