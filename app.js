//type infer: over mouse , you can see the inferred type
var person = {
    name: "sean",
    age: 40
};
console.log(person.name);
// type declared explicitly
var p2 = {
    name: "sean",
    age: 40
};
var person3 = {
    name: "James",
    address: {
        country: "Chile",
        city: "Santiago"
    }
};
var person4 = {
    name: "James",
    address: {
        country: "Chile",
        city: "Santiago"
    }
};
//array
var singlePerson = {
    name: "sean",
    age: 40,
    hobbies: ["fishing", "hiking"]
};
var activity;
activity = ["fishing", "hiking"];
var mixedArray;
mixedArray = ["abc", 123];
for (var _i = 0, _a = singlePerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.indexOf("g"));
}
