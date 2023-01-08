const calculo = (qty) => {
    const obj = {};
    for (let i = 0; i < qty; i++) {
        let num = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
        if (obj[num]){
            obj[num] = obj[num] + 1
        } else {
            obj[num] = 1
        }
    }
    return obj;
};

process.on("message", (qty) => {
    const resultado = calculo(qty);
    process.send(resultado);
});