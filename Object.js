var user = {
    name: "Misbahul",
    email: "misbahulmuttaqin395@gmail.com",
    isActive: true
};
var data = function (_a) {
    var nameProduct = _a.nameProduct, price = _a.price;
    return { nameProduct: nameProduct, price: price };
};
console.log(data({ nameProduct: "Kerupuk najiha", price: 2000 }));
