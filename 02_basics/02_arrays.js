const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)// array ke andar array bana deta hai isliya yaha ye kaam ka hi hai
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// Not a write way


const allHeros = marvel_heros.concat(dc_heros)// dono array do merge krta hai
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros) 

const another_arr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_arr = another_arr.flat(Infinity)// mix array ka ek combine array banata hai
console.log(real_another_arr);

console.log(Array.isArray("aadarsh"));
console.log(Array.from("aadarsh"));
console.log(Array.from({name: "aadarsh"})); // interesting

