const main = require('../main');

it ('should return true if startNum is smaller than endNum', () => {
    const startNum = 2;
    const endNum = 4;
    const result = main.checkIfStartNumIsSmaller(startNum, endNum);
    expect(result).toBe(true);
});

it ('should return null if startNum is larger than endNum', () => {
    const startNum = 4;
    const endNum = 2;
    const result = main.checkIfStartNumIsSmaller(startNum, endNum);
    expect(result).toBe(null);
});

it ('should return true if number between 1 and 1000', () => {
    const number = 3;
    const result = main.checkInputRange(number);
    expect(result).toBe(true);
});

it ('should return false if number not between 1 and 1000', () => {
    const number = 6000;
    const result = main.checkInputRange(number);
    expect(result).toBe(false);
});

it ('should return multiplication table collection with valid input', () => {
    const startNum = 2;
    const endNum = 4;
    const result = main.storeMultiplicationTableToCollection(startNum, endNum);
    const expectedResult = [ [ '2*2=4' ],
                            [ '2*3=6', '3*3=9' ],
                            [ '2*4=8', '3*4=12', '4*4=16' ] ];
    expect(result).toMatchObject(expectedResult);
    
});

it ('should return multiplication String with valid input', () => {
    const input = [ [ '2*2=4' ],
                   [ '2*3=6', '3*3=9' ],
                   [ '2*4=8', '3*4=12', '4*4=16' ] ];
    const result = main.generateMultiplicationString(input);
    const expectedResult =  '2*2=4 \n' +
                            '2*3=6 3*3=9 \n' +
                            '2*4=8 3*4=12 4*4=16 \n';
    expect(result).toBe(expectedResult);
    
});


