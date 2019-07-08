console.log( 'js');
const seatsInCar = 5;
let passengers = [];
let tankFull = true;


function  enoughSeats(){
console.log( 'in enoughSeats' );
  //check if seatsInCar >= number of passengers
  if( seatsInCar >= passengers.length ){
    return true;
  }
  else{
    return false;
  }
} //end enoughSeats

function getInCar( nameofPassenger ){
console.log( 'in getInCar', nameofPassenger );
//push this new passenger into our passengers array
passengers.push (nameofPassenger);
return passengers;

} //end getInCar

function readyForRoadTrip(){
  console.log( 'in readyForRoadTrip');
  if (enoughSeats() && tankFull){
    return true;
  } // ready for trip
  else{
    return false;
  } //not ready
}

getInCar ('You');
getInCar ('dEv');
getInCar ('Commander Wisdom');
getInCar ('Anjie');

console.log( 'enough seats?', enoughSeats() );
console.log( 'are we ready for the trip?', readyForRoadTrip() );
