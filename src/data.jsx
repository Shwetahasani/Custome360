// src/data.js
export const customerData = {
    basicInfo: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Springfield, USA",
      dateOfBirth: "1980-01-01",
    },
    salesHistory: [
      { productName: "Laptop", purchaseDate: "2023-01-01", warrantyEndDate: "2024-01-01" },
      { productName: "Smartphone", purchaseDate: "2022-05-15", warrantyEndDate: "2023-05-15" },
      // Add more sales history items here
    ],
    serviceHistory: [
      { ticketId: "001", issue: "Battery problem", resolution: "Replaced battery", date: "2023-02-01" },
      { ticketId: "002", issue: "Screen issue", resolution: "Replaced screen", date: "2023-03-01" },
      // Add more service history items here
    ],
    interactionHistory: [
      { interactionId: "001", type: "Email", content: "Inquiry about product warranty", date: "2023-01-10" },
      { interactionId: "002", type: "Phone", content: "Support call for technical issue", date: "2023-02-20" },
      // Add more interaction history items here
    ],
    loyaltyProgram: {
      currentPoints: 1200,
      transactions: [
        { transactionId: "001", points: 500, type: "Earned", date: "2023-01-05" },
        { transactionId: "002", points: 200, type: "Redeemed", date: "2023-02-15" },
        // Add more loyalty transactions here
      ],
    },
  };
  