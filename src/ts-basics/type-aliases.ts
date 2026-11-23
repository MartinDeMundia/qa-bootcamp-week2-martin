// Define a reusable Product type to maintain consistent inventory records.
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

let productOne: Product = {
    id: 1,
    name: "Animal Feeds",
    price: 1800,
    stock: 30
};

let productTwo: Product = {
    id: 2,
    name: "Onion Seeds",
    price: 950,
    stock: 60
};

console.log("\n=== INVENTORY PRODUCTS ===");
console.log(productOne);
console.log(productTwo);
