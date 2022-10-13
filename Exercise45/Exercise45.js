const make_car = (manufacturer, model, args) => {
    let obj = { manufacturer, model };
    Object.entries(args).map((idx) => (obj[idx[0]] = idx[1]))
    console.log(obj);
};
make_car('Royal Roycs', '22', { doors: 4, wheels: 4 });