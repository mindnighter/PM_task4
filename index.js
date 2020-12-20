
    let months = ["January","February","March","April","May","June","June","August","September","October","November","December"];
do{
    let result = prompt("Введите месяц");
    if(!result){
        alert("Stopped");
       break;
    }
    result = findMonth(result);
    alert(result);
   
} while(true)


function findMonth(val){
    if(isNumber(val)){
        return  findMonthByNumber(val); 
    }
    else{
        return findMonthByName(val);
    }
}

function findMonthByName(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    let isExist = months.indexOf(newStr);
    if (isExist == -1){
        return "There is no such month";
    }
    else{
        return `${str} - ${++isExist}`;
    }
}

function findMonthByNumber(num){
    if(num >= 1 && num <= 12 ){
       return `${num} - ${months[--num]}`;
    }
    else{
        return "Not right number!";
    }
}

function isNumber(value) 
{
    return !isNaN(value);
}