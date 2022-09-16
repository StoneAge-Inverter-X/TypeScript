//type infer: over mouse , you can see the inferred type
const person = {
  name: "sean",
  age: 40,
};

console.log(person.name);

// type declared explicitly
const p2: {
  name: string;
  age: number;
} = {
  name: "sean",
  age: 40,
};

//for nested object: method 1: type alias
type Staff = {
  name: string;
  address: {
    country: string;
    city: string;
  };
};

const person3: Staff = {
  name: "James",
  address: {
    country: "Chile",
    city: "Santiago",
  },
};

//for nested object: method 2: type Interface
interface Personnel {
  name: string;
  address: {
    country: string;
    city: string;
  };
}

const person4: Personnel = {
  name: "James",
  address: {
    country: "Chile",
    city: "Santiago",
  },
};

//array
const singlePerson = {
  name: "sean",
  age: 40,
  hobbies: ["fishing", "hiking"],
};

let activity: string[];
activity = ["fishing", "hiking"];

let mixedArray: any[];
mixedArray = ["abc", 123];

for (const hobby of singlePerson.hobbies) {
  console.log(hobby.indexOf("g"));
}
