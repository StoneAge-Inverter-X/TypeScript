//without type
const add = (n1, n2) => {
  return n1 + n2;
};

const result = add("2", 4.5);
const result1 = add(2, 4.5);
console.log(result);
console.log(result1);

///with type
const addx = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    return phrase + result;
  } else {
    return result;
  }
};

let printResult = false;
const phrase = "the calc  resulat is : ";

const result2 = addx(2, 4.5, printResult, phrase);
const result3 = addx(2, 4.5, printResult, phrase);
console.log(result2);
console.log(result3);

//type assignment and type infer
let number1 = 4; // hover your mouse,you can see TS assign it as number, this is typer infer
let number2: number; //explicitly declare the type.
number2 = "sing";
number1 = "heiyou";
