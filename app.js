//function return types
function add(n1, n2) {
    return n1 + n2;
}
function printSome(n1) {
    console.log(n1);
    return;
}
//funciton as type
//vanila JS
var combineX;
combineX = add;
combineX(2, 3);
//TS
var combineY;
combineY = add;
//combineY = printSome //imp: erro will occur in here
//function type and  call back
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 21, function (res) {
    console.log(res);
});
