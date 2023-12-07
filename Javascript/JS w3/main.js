//String
let myString = "Hello, this is a difficult to read sentence";
console.log(myString)
console.log(myString.length);
//Array
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
//add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
const array = favoriteAnimals.toSpliced(1, 0, "meerkat")
console.log(array);
//the length of Array
let lengthOfArray = array.length;
console.log("The array has a length of:" +lengthOfArray)
//Jason does not like 'giraffe', delete this animal from the array
delete array[3];
console.log(array);
//find the position of Meerkat
let index = array.indexOf("meerkat");
console.log(index);
function sum(num1, num2, num3)
{
  return num1+num2+num3;
}
let add =sum(100,200,30);
console.log(add);
function colorcat(color)
                  {
                  console.log(`A ${color} car`);
}
colorcat('blue');
//vehicle
function vehicle(color,code){
if(code === 1)
  {
  console.log(`A ${color} car`);
}
 else if(code === 2) 
 {
 console.log(`A ${color} motorbike`);
}
else{
  console.log("unknown");
}
  }
vehicle("blue",2)

// single line
console.log(3===3? "yes" : "no");
function vehicle(color, code, age) {
  const vehicleType = code === 1 ? "car" : code === 2 ? "bike" : "unknown vehicle type";
  const condition = age > 0 ? "used" : "new";

  console.log(`a ${color} ${condition} ${vehicleType}`);
}

// Example usage:
vehicle("blue", 1, 5);
//array
let vehicles = ["motorbike", "caravan", "bike", "bus", "car"]
console.log("The 3rd element of vehicles",vehicles[3])
//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, code, age) {
  const condition = age > 0 ? "used" : "new";
  const vehicleType = code === 1 ? "car" : code === 2 ? "bike" : "unknown vehicle type";
  console.log(`a ${color} ${condition} ${vehicleType}`);
}
vehicle("green", 2, 0);
//Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)


let advertisement = "Amazing Joe's Garage, we service ";

for (let i = 0; i < vehicles.length; i++) {
  advertisement += (i === vehicles.length - 1) ? `and ${vehicles[i]}` : `${vehicles[i]}s`;
  
  if (i < vehicles.length - 2) {
    advertisement += ", ";
  } else if (i === vehicles.length - 2) {
    advertisement += " ";
  } else {
    advertisement += ".";
  }
}

console.log(advertisement);
//add vehicle without changing the code
console.log(vehicles);
vehicles.push('bicycle');
console.log(vehicles);
let myObject = {
  Teachername: "Nirmala",
  Language: "Science",
  City: "Helsingborg"
};
console.log(myObject.Language)
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x==y);
console.log(x===y);
console.log(z==x);
console.log(z===y);
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o2);
o2.foo = "box";
//if we assign the object property it also appears same object as well in o2 and 03
console.log(o2);
console.log(o3);
let bar = 42;
typeof typeof bar;
var k = '6';
console.log(typeof(k))
