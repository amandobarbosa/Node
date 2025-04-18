const mult = require("../Aula 02/B/C/D/mod1");

console.log(mult(2, 8));

console.log(__filename);
console.log(__dirname);

const path = require("path");
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));
