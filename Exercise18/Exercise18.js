console.log('Our Original array')
var visitPlaces = new Array('Philpines', 'Dubai', 'Indonesia', 'Malaysia', 'Lahore');

console.log(visitPlaces);

console.log("\n \n After Sorting")
var SortedAB = visitPlaces.map(function(item)
{
    return item
})
var SortedABC = SortedAB.sort()
console.log(SortedABC)

console.log("\n \n While original array is")
console.log(visitPlaces)

console.log("\n \n After Reverse Sorting")
var RevSortedAB = SortedABC.map(function (item1) {
    return item1
})
var RevSortedAB = SortedAB.reverse()    

console.log(RevSortedAB)

console.log("\n \n While original array is")
console.log(visitPlaces) //Show that your array is still in its original order by printing it again.

console.log("\n \n order has changed") //Reverse the order of your list. Print the array to show that its order has changed.
var visitPlacesChangedOrder = visitPlaces.reverse()
console.log(visitPlaces)

var visitplacesoriginal = visitPlacesChangedOrder.reverse()

console.log("\n \n order came back")
console.log(visitPlaces)  //Reverse the order of your list again.Print the list to show it’s back to its original order.
console.log("\n \n nineth line")
var ninethline = visitPlaces.sort()
console.log(visitPlaces) //Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.
console.log("\n \n tenth line")
var originalarrayreverse = visitPlaces.reverse()
console.log(visitPlaces) //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.