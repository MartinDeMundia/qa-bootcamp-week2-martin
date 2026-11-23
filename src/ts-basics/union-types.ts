// Restrict payment status to three valid values to prevent invalid order states.
type PaymentStatus = "pending" | "paid" | "failed";

let paymentStatus: PaymentStatus = "paid";

console.log("\n=== PAYMENT INFORMATION ===");
console.log(`Payment Status: ${paymentStatus}`);