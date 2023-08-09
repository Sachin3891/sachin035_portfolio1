let m= new Map();

m.set("Name","Sachin");
m.set("Roll",75);
m.set("id",123);
// m.forEach((v,k) => {
//     console.log(k);
// })
m.forEach((v,k) => {
    console.log(k +" : " + v);
})

for(let i of m){
    console.log(i);
}
console.log(m);

console.log(m.entries());

console.log(m.values());

console.log(m.keys());

console.log(m.size);

m.delete("Roll");
console.log(m);

m.clear();
console.log(m);