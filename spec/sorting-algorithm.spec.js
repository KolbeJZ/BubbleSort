describe ('bubble sort', function() {
    it('should sort array with 8 elements', function () {
        let array = [3, 5, 2, 1, 6, 7, 8, 4];
        let myResults = bubbleSort(array);
        let result = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(myResults).toEqual(result);
    }) 
    it('should sort array with 10 elements', function () {
        let array = [3, 5, 2, 1, 6, 7, 8, 4, 10, 9];
        let myResults = bubbleSort(array);
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(myResults).toEqual(result);
    }) 
    it('should sort array with 5 elements', function () {
        let array = [3, 5, 2, 1, 4,];
        let myResults = bubbleSort(array);
        let result = [1, 2, 3, 4, 5];
        expect(myResults).toEqual(result);
    }) 
    // it('should sort array with 10 elements')

    // it('should sort array with 5 elements')
})