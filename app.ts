//Union type
const combine = (inp1: string | number, inp2: string | number) => {
  if (typeof inp1 === "string" && typeof inp2 === "string") {
    return inp1.concat(inp2);
  } else return Number(inp1) + Number(inp2);
};

console.log(combine(1, 2));
console.log(combine("1", "2"));

//literal type

const combine2 = (
  inp1: string | number,
  inp2: string | number,
  resultType: "number" | "text"
) => {
  if (typeof inp1 === "string" && typeof inp2 === "string") {
    return inp1.concat(inp2);
  } else return Number(inp1) + Number(inp2);
};

const results = combine2(2, 3, "number"); //'numbers' will be error
