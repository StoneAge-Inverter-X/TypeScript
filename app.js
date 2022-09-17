//Union type
var combine = function (inp1, inp2) {
    if (typeof inp1 === "string" && typeof inp2 === "string") {
        return inp1.concat(inp2);
    }
    else
        return Number(inp1) + Number(inp2);
};
console.log(combine(1, 2));
console.log(combine("1", "2"));
