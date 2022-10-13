// Exercise 15 changing Guest List



let guests = ["chitta", "theta", "Dsahab", "jeela"];

for (var i = 0; i < guests.length; i++) {
    console.log(i + 1 + ". " + "Welcome for dinner Mr. " + guests[i]);
}
console.log(guests[2] + " can not come");

for (var i = 0; i < guests.length; i++) {

    if (guests[i] === guests[2]) {

        guests.splice(i, 1);
    }

}

guests.push('Diploma');
console.log('\n \n new list');

for (var i = 0; i < guests.length; i++) {
    console.log(i + 1 + ". " + "Welcome for dinner Mr. " + guests[i]);
}
