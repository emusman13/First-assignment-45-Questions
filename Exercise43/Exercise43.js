var Magicians = ['Mehvish', 'John', 'Henry', 'Thomas'];


var UCMagicians = Magicians.map(function (item) {
    return item
})


make_Great.apply(this, UCMagicians);

function make_Great() {
    for (var i = 0; i < UCMagicians.length; i++) {
        UCMagicians[i] = 'the Great ' + UCMagicians[i]
    }
}



show_UCmagicians.apply(this, UCMagicians); //After changing 

function show_UCmagicians() {
    for (var j = 0; j < UCMagicians.length; j++) {
        console.log(UCMagicians[j]);
    }
}

show_magicians.apply(this, Magicians);  // for normal array

function show_magicians() {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
