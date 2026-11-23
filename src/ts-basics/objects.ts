// Represent a customer using an object with an optional name property.
let customer: {
    id: number;
    name?: string;
    email: string;
    phone: string;
} = {
    id: 101,
    name: "Martin",
    email: "mugambi.m.mundia@gmail.com",
    phone: "0712345678"
};

console.log("\n=== CUSTOMER DETAILS ===");
console.log(`Customer ID: ${customer.id}`);
console.log(`Name: ${customer.name}`);
console.log(`Email: ${customer.email}`);
console.log(`Phone: ${customer.phone}`);