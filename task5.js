let queue = ["catHorse", "dogPig", "catHorse", "dogPig", "kangarooBear", "dogPig", "catHorse", "catHorse", "dogPig"];

const unofficialQueue = ["rabbitSalmon", "rabbitSalmon", "rabbitSalmon", "rabbitSalmon"];

queue.push("catHorse");
console.log("push", queue);

queue.shift();
console.log("allowed in", queue);

queue.unshift("owlDonkey");
console.log("VIP", queue);

queue.pop("catHorse");
console.log("Gave up", queue);

const position = queue.indexOf("kangarooBear");
queue.splice(position, 1);
console.log("Emergency", queue);

const newQueue = queue.concat(unofficialQueue);
console.log("newQueue", newQueue);
