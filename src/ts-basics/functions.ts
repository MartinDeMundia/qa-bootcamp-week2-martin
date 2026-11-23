// Calculate the total purchase cost using the product price and quantity ordered.
function calculateTotal(unitPrice: number, quantity: number): number {
    return unitPrice * quantity;
}

let orderTotal = calculateTotal(2500, 3);

console.log("\n=== ORDER CALCULATION ===");
console.log(`Unit Price: KES 2500`);
console.log(`Quantity: 3`);
console.log(`Total Cost: KES ${orderTotal}`);