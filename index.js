//1
function countFromOne(num){
  for (let i = 1; i<=num; i++){
      console.log(i);
  }
}

//2
function countEveryOdd(num){
    for (let i = 1; i<=num; i++){
        if( i%2 != 0){
            console.log(i);
        }
    }
}

//3
function isNegative(num){
    if (num < 0){
        return true;
    }else{
        return false;
    }
}

//4
function betweenFiveAndTwenty(num){
    if(num >=5 && num <=20){
        return true;
    }else{
        return false;
    }
    
}

//5 
function isAllLowerCase(string){
    const compareString = string.toLowerCase();
    if (string === compareString){
        return true
    }else{
        return false;
    }
  
}

//bonus
function countMultiplesOfFive(array){
    let counter = 0;
    for (let i=0; i<array.length; i++){
        if (array[i] % 5 === 0){
            counter += 1;
        }
    }
    return counter;
}
//countFromOne(10);
//countEveryOdd(10);
//console.log(isNegative(10));
//console.log(betweenFiveAndTwenty(15));
//console.log(isAllLowerCase("haHa"));
console.log(countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10]));