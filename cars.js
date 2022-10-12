
function cars(model, manufacturer, ...args) {
    const car = {
        model,
        manufacturer,
    }
    
    args.forEach((v, i) => car[Object.keys(v)[0]] = Object.values(v)[0])
return car;
}

const result = cars("accord", "honda", {color: "blue"}, {size: "big"});
console.log(result);