class Airplane { //Declaring a class as Airplane
    constructor(name, occupancy, speed) { //Defining constructor to initialize values
        this.name = name;
        this.occupancy = occupancy;
        this.speed = speed;
    }
    status() { //Printing the object values
        console.log("Airplane : " + this.name + " with " + this.occupancy +  " occupancy," + " is moving at " + this.speed + " km/hr ");
    }
    increaseSpeed(incspeed) {//Increasing the airplane objects speed
        this.speed = this.speed + incspeed;
    }
    decreaseSpeed(dncspeed) {//Decreasing the airplane objects speed from the current speed
        this.speed = this.speed - dncspeed;
    }
}
function Validate(name, occupancy, speed) {//validating the initial inputs
    var returnvalue = true;
    if(name === '') {//Validating object's name for empty
        alert('Name cannot be empty');
        returnvalue = false;
    }
    if(occupancy === '') {//Validating occupancy for empty
        alert('Occupancy can not be empty');
        returnvalue = false;
    }
    else if (occupancy === 0) {//Validating occupancy for zero
        alert('Occupancy should not be zero');
        returnvalue = false;
    }
    else if (occupancy < 0 ) {//Validating occupancy for negative value
        alert('Occupancy should not be negative');
        returnvalue = false;
    }
    else if(occupancy > 180) {//Validating occupancy more than 180
        alert('Occupancy should not be more than 180');
        returnvalue = false;
    }
    if(speed === '') {//Validating speed for empty
        alert('speed can not be empty');
        returnvalue = false;
    }
    else if (speed < 0) {//Validating occupancy for negative value
        alert('Speed should not be negative');
        returnvalue = false;
    }
    else if(speed > 900 ) {//Validating speed more than 900
        alert('Speed should not be more than 900 km/hr');
        returnvalue = false;
    }
    return returnvalue;
}
console.log("create 3 Airplane objects and call their print methods");
console.log("-------------------------------------------------------");
if (Validate("Boeing 777", 180, 900) === true ) {
// Displaying the properties of the airplane
        var Boeing777 = new Airplane("Boeing 777", 180, 900);
        Boeing777.status();
}
if (Validate("Boeing 555", 100, 500) === true) {
        var Boeing555 = new Airplane(Boeing555, 100, 500);
        Boeing555.status();
}
if (Validate("Boeing 333", 50, 300) === true) {
        var Boeing333 = new Airplane(Boeing333, 50, 300);
        Boeing333.status();
        console.log("-------------------------------------------------------");
}

console.log("increase speed of the airplane objects by 200");
console.log("-------------------------------------------------------");
// increase speed of the Airplane by 200
Boeing777.increaseSpeed(200);
Boeing777.status();
Boeing555.increaseSpeed(200);
Boeing555.status();
Boeing333.increaseSpeed(200);
Boeing333.status();
console.log("-------------------------------------------------------");

console.log("decrease speed of the airplane objects by 200");
console.log("-------------------------------------------------------");
// decrease speed of the Airplane by 200
Boeing777.decreaseSpeed(200);
Boeing777.status();
Boeing555.decreaseSpeed(200);
Boeing555.status();
Boeing333.decreaseSpeed(200);
Boeing333.status();