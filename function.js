const functions = {
    add: (numA, numB) => numA + numB,
    isNull: () => null,
    checkValue: (value) => value,
    createBook: () => {
        const books = { item1: "Brad"};
        books['item2'] = "Traversy";
        return books;
    }
}

module.exports = functions;