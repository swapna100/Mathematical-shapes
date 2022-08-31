// Program to find the  diagonal of a square
function findDiagonals(s){
    return Math.sqrt(2) * s;
}

var result = findDiagonals(9);
console.log("The diagonal of the  square with sides 9 is = " + result.toFixed(2));

//Program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7
function findArea(side1, side2, side3){
    let s_per = (side1 +side2 + side3)/2; //semi perimeter of triangle
    area_triangle = Math.sqrt(s_per *((s_per - side1) *(s_per - side2)*(s_per - side3)));
    return area_triangle; 
}
Area = findArea(5, 6, 7);
console.log("The area of triangle with sides 5, 6, 7 is "+ Area.toFixed(2));

//program to find the circumference and surface area of a circle whose radius is 4
function circle(radius){
    const PI = 3.14;
    cir_cum = 2 * PI * (radius)**2 ;
    s_area = PI * (radius)**2;
}
circle(4);
console.log("The circumference of the circle with radius 4 is "+cir_cum.toFixed(2));
console.log("The surface area of the circle is "+s_area.toFixed(2));