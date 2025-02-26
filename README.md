# Kafka-Order-Producer
This project demonstrates how to use Kafka with Node.js to send order-related messages to a Kafka topic.

Prerequisites

Install Node.js

Install and configure Apache Kafka

Installation

Clone the repository:

git clone https://github.com/your-repo/kafka-order-producer.git
cd kafka-order-producer

Install dependencies:

npm install kafkajs

Kafka Setup

Start Zookeeper & Kafka Server (Windows)

bin\windows\zookeeper-server-start.bat config\zookeeper.properties
bin\windows\kafka-server-start.bat config\server.properties

Start Zookeeper & Kafka Server (Linux/Mac)

bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties

Create Kafka Topic

bin/kafka-topics.sh --create --topic orders --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

Running the Producer

Run the producer script to send orders to Kafka:

node orderService.js

You should see output similar to:

Order Sent: {"id":"1","item":"Laptop","price":50000}
Order Sent: {"id":"2","item":"Smartphone","price":30000}
...
All orders sent successfully!

Consumer Setup (Optional)

If you want to read the messages being produced, start a Kafka console consumer:

bin/kafka-console-consumer.sh --topic orders --from-beginning --bootstrap-server localhost:9092

Features

Sends 25 sample orders to a Kafka topic (orders).

Uses kafkajs for Kafka integration.

Handles errors and ensures proper disconnection.

License

This project is licensed under the MIT License.


