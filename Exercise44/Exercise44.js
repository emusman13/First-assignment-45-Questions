var SandwichSale = ['Mehvish', 'John', 'Henry', 'Thomas'];
OrderList.apply(this, SandwichSale);

function OrderList() {
    for (var i = 0; i < SandwichSale.length; i++) {
        console.log(SandwichSale[i] + ' Ordered one Sandwich');
    }
}