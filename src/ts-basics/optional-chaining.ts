// Safely access customer information when an order may not have an assigned customer.
type Order = {
    id: number;
    amount: number;
    customer?: {
        name: string;
        email?: string;
    };
};

let orderWithCustomer: Order = {
    id: 1002,
    amount: 5000,
    customer: {
        name: "Mugambi",
        email: "mugambi.m.mundia@gmail.com"
    }
};

let orderWithoutCustomer: Order = {
    id: 1003,
    amount: 3200
};

console.log("\n=== OPTIONAL CHAINING ===");
console.log(`Customer: ${orderWithCustomer.customer?.name ?? "Not assigned"}`);
console.log(`Email: ${orderWithCustomer.customer?.email ?? "Not provided"}`);
console.log(`Customer: ${orderWithoutCustomer.customer?.name ?? "Not assigned"}`);