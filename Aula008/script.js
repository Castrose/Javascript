let num = [0, 9, 3, 6, 1]
num [5] = 5
num.push(1)
num.sort()

console.log(`Nossos vetores são ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}