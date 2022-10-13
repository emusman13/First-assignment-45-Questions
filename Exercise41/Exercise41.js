var Magicians = ['Mehvish', 'John', 'Henry', 'Thomas'];
show_magicians.apply(this, Magicians);

function show_magicians() {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}