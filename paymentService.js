const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "payment-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "payment-group" });

const consumeMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "orders", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value.toString());
      console.log(`Processing Payment for Order ID: ${order.id}`);
    },
  });
};

consumeMessages();
