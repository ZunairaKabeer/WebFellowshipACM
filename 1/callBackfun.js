function myCallBackFun(someNum) {
   return someNum*2;
}

function mainFun(randomNum, callBackFun, shouldCall) {
    let result=randomNum;
    if(shouldCall){
        result=callBackFun(randomNum);
    }
    return result;
}

mainFun(20, myCallBackFun, true);
console.log(mainFun(20, myCallBackFun, true));