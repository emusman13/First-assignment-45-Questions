var Magicians = ['Mehvish', 'John', 'Henry', 'Thomas'];


make_Great.apply(this, Magicians);

function make_Great() {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = 'the Great '+ Magicians[i]
    }
}





show_magicians.apply(this, Magicians);

function show_magicians() {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}