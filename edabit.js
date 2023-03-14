function addition(a, b) {
	const a = 5;
	const b = 3;
	return a + b;
}
console.log(addition(3, 5));

//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	
    return arr[0]
        
    }
console.log(getFirstValue([2,4,9]));

//Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	return age*365;
}
console.log(calcAge(1));
//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
	return voltage*current;
}
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
	return x%y;
}
//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.function nextEdge(side1, side2) {
    function nextEdge(side1, side2) {
        return (side1+side2)-1 ;
    }
   // Write a function that converts hours into seconds.
   function howManySeconds(hours) {
	return (hours * 60) * 60 ;
}
//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
	return (base * height) / 2;
}
//Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
	return (2*length)+ (2*width);
}
//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
	return minutes * 60 ;
}
//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	return (twoPointers*2)+(threePointers*3)
}

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function space(a) {

    let simthing = 'simthing';
    return "simthing"+" "+ a
}
//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
function shiftToRight(x, y) {
	let a = Math.floor(x / Math.pow(2 , y));
  return a;
 // Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do
}
function cubes(a) {
	return a*a*a
}

if (num>0 ) {
	return(false)
}else{
	return true
}
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	if (num<=0){
		return true
	}else{
		return false
	}
}