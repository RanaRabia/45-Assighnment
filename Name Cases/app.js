// Lowercase
var personName = "Rabia Rana";
console.log("lowerCase:", personName.toLowerCase());
// Uppercase
console.log("uperCase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
