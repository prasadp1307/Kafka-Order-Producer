const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  clientId: "order-service",
  brokers: ["localhost:9092"], // Change this if using Docker
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner, // Optional: Retain old partitioning behavior
});

const produceMessage = async (order) => {
  await producer.send({
    topic: "orders",
    messages: [{ key: order.id, value: JSON.stringify(order) }],
  });
  console.log(`Order Sent: ${JSON.stringify(order)}`);
};

const orders = [
  { id: "1", item: "Laptop", price: 50000 },
  { id: "2", item: "Smartphone", price: 30000 },
  { id: "3", item: "Tablet", price: 20000 },
  { id: "4", item: "Headphones", price: 5000 },
  { id: "5", item: "Smartwatch", price: 15000 },
  { id: "6", item: "Keyboard", price: 3000 },
  { id: "7", item: "Mouse", price: 2000 },
  { id: "8", item: "Monitor", price: 12000 },
  { id: "9", item: "Gaming Console", price: 45000 },
  { id: "10", item: "External Hard Drive", price: 7000 },
  { id: "11", item: "Router", price: 4000 },
  { id: "12", item: "Wireless Earbuds", price: 8000 },
  { id: "13", item: "Printer", price: 10000 },
  { id: "14", item: "Speaker", price: 6000 },
  { id: "15", item: "Power Bank", price: 3000 },
  { id: "16", item: "Webcam", price: 5000 },
  { id: "17", item: "VR Headset", price: 35000 },
  { id: "18", item: "Graphics Card", price: 55000 },
  { id: "19", item: "Microphone", price: 7000 },
  { id: "20", item: "Smart Bulb", price: 2000 },
  { id: "21", item: "Gaming Chair", price: 15000 },
  { id: "22", item: "SSD", price: 9000 },
  { id: "23", item: "Mechanical Keyboard", price: 10000 },
  { id: "24", item: "Drone", price: 60000 },
  { id: "25", item: "Smart TV", price: 55000 },
];

const sendOrders = async () => {
  try {
    await producer.connect();
    for (const order of orders) {
      await produceMessage(order);
    }
    console.log("All orders sent successfully!");
  } catch (error) {
    console.error("Error sending orders:", error);
  } finally {
    await producer.disconnect();
  }
};

sendOrders();
