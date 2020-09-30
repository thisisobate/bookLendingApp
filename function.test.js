const functions = require('./function');

test('Adds 2 + 2 to equal 4 ', () => {
    expect(functions.add(2,2)).toBe(4);
})
//notEqual
test('Adds 2 + 2 to NOT equal 4 ', () => {
    expect(functions.add(2,2)).not.toBe(5);
})
// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})
//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
//toEqual object
test('createBook should be {brad, traversy}', () => {
    expect(functions.createBook()).toEqual({
        item1: 'Brad',
        item2: 'Traversy'
    });
});
// toBeLessThan
test('should be less than 1700 ', () => {
    const load1 = 300;
    const load2 = 1000;
    expect(load1 + load2).toBeLessThan(1700);
})
