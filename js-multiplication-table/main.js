function generateMultiplicationString(multiplicationTableList){
    let multiplicationString = '';
    for (var equationList of multiplicationTableList){
        for(var equation of equationList)   {
            multiplicationString += equation + ' ';
        }
        multiplicationString += '\n';
    }
    return multiplicationString;
}

function checkIfStartNumIsSmaller(startNum, endNum) {
    
    var result = startNum <= endNum;
    if(result){
        return true;
    }else {
        return null;
    }
}

function checkInputRange(number) {
    return 1 < number && number < 1000;
}

function storeMultiplicationTableToCollection(startNum, endNum){
    let multiplicationTable = [];
    for(var tempStartNum = startNum; tempStartNum <= endNum; tempStartNum++){
        
        let equation = [];
        for(var temp = startNum; temp <= tempStartNum; temp++){
            equation.push(temp + '*' + tempStartNum + '=' + getProduct(temp, tempStartNum));
            if(temp === tempStartNum){
                multiplicationTable.push(equation);
            }
        }
    }
    return multiplicationTable;
}

function getProduct(firstNum, secondNum){
    return firstNum * secondNum;
}

module.exports = {
    checkIfStartNumIsSmaller : checkIfStartNumIsSmaller,
    checkInputRange : checkInputRange,
    storeMultiplicationTableToCollection : storeMultiplicationTableToCollection,
    generateMultiplicationString : generateMultiplicationString
}
