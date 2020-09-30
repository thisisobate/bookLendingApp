const getBook = require('./bookLending');
// const showBooksAvailable = require('./bookLending');

// is function defined?
test('getBook function exists', () => {
    expect(getBook).toBeDefined();
});
// test('showBooksAvailable function exists', () => {
//     expect(showBooksAvailable).toBeDefined();
// });

// does function work?
test('getBook works', () => {
    expect(getBook(3)).toEqual({id: 3, title: 'haealth and money', category: 'Category 3', available: true}
    );
});

// test('showBooksAvailable works', () => {
//     expect(showBooksAvailable()).toEqual([
//         "Panel of kings",
//         "innovation cyclic",
//         "haealth and money",
//         "ayodele",
//         "jengartins",
//         "return of karishika"
//     ]);
// });