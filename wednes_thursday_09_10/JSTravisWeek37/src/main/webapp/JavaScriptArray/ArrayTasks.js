/*
 *  OPGAVE A
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

/*
 * OPGAVE B
 */

var all = boys.concat(girls);
console.log("Opgave B: ");
console.log(all);

/* 
 * OPGAVE C
 */
console.log("Opgave C: ");
console.log(all.join(","));
console.log(all.join("-"));

/*
 * OPGAVE D, E
 */
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
console.log("Opgave D, E: ");
console.log(all);
/*
 * OPGAVE F, G
 */
all.shift("Hans");
all.pop("Gitte");
console.log("Opgave F, G: ");
console.log(all);

/*
 * OPGAVE H
 */
all.splice(3, 2);
console.log("Opgave H: ");
console.log(all);

/* 
 * OPGAVE I
 */
all.reverse();
console.log("Opgave I: ");
console.log(all);

/* 
 * OPGAVE J
 */
all.sort();
console.log("OPGAVE J:");
console.log(all);

/*
 * OPGAVE K
 */
all.sort(function (a,b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log("OPGAVVE K: ", all);


/* 
 * OPGAVE L
 */
console.log("OPGAVE I: ")
const uppercased = all.map(name => name.toUpperCase());
console.log(uppercased);

/* 
 * OPGAVE M
 */ 
console.log("OPGAVE M: ")
let allFilter = all.filter(name => name.charAt(0) === 'l' ||name.charAt(0) === 'L');
console.log(allFilter);