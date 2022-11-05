// Types number, tring boolean object array types 

const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const buttonEle = document.querySelector('button');

const numResults: number[] = [] ; //specify what vlaues would be stored
//const textResuls = [];

function add(num1:number,num2:number){
    return num1 + num2;
}

type NumorString = number | string; //type alias can store one of them and can be used multiple times

//console.log(add(1 , 6));
if(buttonEle){
    buttonEle.addEventListener('click',()=>{
        const num1 = num1Ele.value; //value always return string
        const num2 = num2Ele.value;
        const result =add(+num1,+num2);
        numResults.push(result)
        console.log(result);
        const ResultObj = {val: Number,
                            timestamp: Date
                        }

        printResult({val: result as number, timestamp: new Date()}); //interface
        console.log(numResults);
        
    })  


}

//working with objects
function printResult(resultObj: { val: number; timestamp: Date }){
    console.log('object:'+ resultObj.val);
}


//Interfaces defines the structure of objects
interface ResultObj {
    val: number;
    timestamp: Date;
}                       //interfaces can be used to force class to implement certain methods and funcs.



//console.log(add('1', '6')); // complains as its string


