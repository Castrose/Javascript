/*
for (let pos = 0; pos < s.length; pos += 1) {
    console.log(`A posição ${pos} tem o valor ${s[pos]}`)
}
*/
let s = [1, 6, 5, 9, 4]

console.log(s)

for(let pos in s) {
    console.log(`A posição ${pos} tem o valor ${s[pos]}`)
}
