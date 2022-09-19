//function return types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printSome(n1: never) {
  console.log(n1);
  return;
}

//funciton as type
//vanila JS
let combineX;
combineX = add;
combineX(2, 3);
//TS
let combineY: (a: number, b: number) => number;
combineY = add;
//combineY = printSome //imp: erro will occur in here

//function type and  call back
function addAndHandle(n1: number, n2: number, cb: (n3: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 21, (res) => {
  console.log(res);
});
