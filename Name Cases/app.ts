// Lowercase
let personName:string = "Rabia Rana"
console.log("lowerCase:", personName.toLowerCase());
// Uppercase
console.log("uperCase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

