// describe ('Search', function() {
//     search = new Search
//     describe ('jump', function() {
//         it ('jump: should skip ahead by fixed steps or skipping some elements')
//     })
//     describe ('interpolation', function() {
//         it('interpolation: should have values in a sorted array uniformly distributed')
//     })
//     describe ('fibonacci', function () {
//         it('Fibonacci: uses fibonacci numbers to search an element in a sorted array')
//     })
// })
describe('binarySearch', () =>
  it('should find the target index', (done) => {
    let sortedList = [-5, 0, 7, 10, 13, 20, 27, 35];
    let sortedShortList = [2];
    let emptyList = [];

    let found = findIndex(sortedList, 13);
    let notFound = findIndex(sortedList, 11);

    let singleValListSearch = findIndex(sortedShortList, 2);
    let emptyListSearch = findIndex(emptyList, 1);

    expect(found).toEqual(4);
    expect(notFound).toEqual(-1);
    expect(singleValListSearch).toEqual(0);
    expect(emptyListSearch).toEqual(-1);
    done();
  })
);