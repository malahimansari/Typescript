// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const person: string = "Malahim ansari";
console.log("Lowercase :", person.toLowerCase());
console.log("Uppercase :", person.toUpperCase());
console.log("Titlecase :", person.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()));