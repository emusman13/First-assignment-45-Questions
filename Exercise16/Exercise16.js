//exercise no 16
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

console.log('\n \n more guests comming')
guests.unshift('Ahmed');
//guests.append('Noor');
guests.splice(3, 0, 'mustafa')

for (var i = 0; i < guests.length; i++) {
    console.log(i + 1 + ". " + "Welcome for dinner Mr. " + guests[i]);
}
console.log('hurrah!! we found a bigger dinner table')