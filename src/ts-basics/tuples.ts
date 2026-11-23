// Store an order ID, customer name and payment amount in a fixed structure.
let customerOrder: [number, string, number] = [
    1001,
    "Martin",
    7500
];

console.log("\n=== CUSTOMER ORDER ===");
console.log(`Order ID: ${customerOrder[0]}`);
console.log(`Customer: ${customerOrder[1]}`);
console.log(`Amount: KES ${customerOrder[2]}`);