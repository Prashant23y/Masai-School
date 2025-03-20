const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

    let [p1 , p2] = people;
let {name : n1, address : {city : c1, street : {name : s1}}} = p1;
let {name : n2, address : {city : c2, street : {name : s2}}} = p2;

let ans = [
    `${n1} lives in ${c1} on ${s1}`,
    `${n2} lives in ${c2} on ${s2}`
];

console.log(ans);