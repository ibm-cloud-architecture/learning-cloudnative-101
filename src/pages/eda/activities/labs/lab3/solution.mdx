---
title: Event-Driven Architecture Lab Solution 3 - MicroProfile Reactive Messaging
description: Lab activities associated with the MicroProfile Reactive Messaging feature to be used with event-driven architecture enablement.
---

## Using Reactive Messaging on OpenLiberty

Following through the tutorial's `start` path via _[Getting Started](https://openliberty.io/guides/microprofile-reactive-messaging.html#getting-started)_, you will be directed through all the necessary steps to build the application as expected.

Contents for the `system/src/main/resources/META-INF/microprofile-config.properties` file:
```properties
mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>

mp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL
mp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2
mp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN
mp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";

mp.messaging.outgoing.systemLoad.connector=liberty-kafka
mp.messaging.outgoing.systemLoad.topic=systemLoadTopic
mp.messaging.outgoing.systemLoad.key.serializer=org.apache.kafka.common.serialization.StringSerializer
mp.messaging.outgoing.systemLoad.value.serializer=io.openliberty.guides.models.SystemLoad$SystemLoadSerializer
```

Contents for the `inventory/src/main/resources/META-INF/microprofile-config.properties` file:
```properties
mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>

mp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL
mp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2
mp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN
mp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";

mp.messaging.incoming.systemLoad.connector=liberty-kafka
mp.messaging.incoming.systemLoad.topic=systemLoadTopic
mp.messaging.incoming.systemLoad.key.deserializer=org.apache.kafka.common.serialization.StringDeserializer
mp.messaging.incoming.systemLoad.value.deserializer=io.openliberty.guides.models.SystemLoad$SystemLoadDeserializer
mp.messaging.incoming.systemLoad.group.id=system-load-status
```

As the tutorial is built to run Kafka and Zookeeper locally in containers as well, you can replace the `startContainers.sh` script in the project with the following:
```bash
#!/bin/bash

NETWORK=reactive-app

docker network create $NETWORK

docker run -d \
  -p 9083:9083 \
  --network=$NETWORK \
  --name=system \
  --rm \
  system:1.0-SNAPSHOT &

docker run -d \
  -p 9085:9085 \
  --network=$NETWORK \
  --name=inventory \
  --rm \
  inventory:1.0-SNAPSHOT &

wait
   ```

## Using Reactive Messaging with Quarkus

Following along with *[Creating the Maven project](https://quarkus.io/guides/kafka#creating-the-maven-project)* through the *[Get it running](https://quarkus.io/guides/kafka#get-it-running)* section, you will be walked through the necessary steps to create a simple Quarkus-based project that utilizes the Reactive Messaging feature of MicroProfile.

Your `application.properties` file will need to contain the necessary security and credential information to configure the connector correctly:

```properties
mp.messaging.connector.smallrye-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>

mp.messaging.connector.smallrye-kafka.security.protocol=SASL_SSL
mp.messaging.connector.smallrye-kafka.ssl.protocol=TLSv1.2
mp.messaging.connector.smallrye-kafka.sasl.mechanism=PLAIN
mp.messaging.connector.smallrye-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";

# Configure the Kafka sink (we write to it)
mp.messaging.outgoing.generated-price.connector=smallrye-kafka
mp.messaging.outgoing.generated-price.topic=prices
mp.messaging.outgoing.generated-price.value.serializer=org.apache.kafka.common.serialization.IntegerSerializer

# Configure the Kafka source (we read from it)
mp.messaging.incoming.prices.connector=smallrye-kafka
mp.messaging.incoming.prices.value.deserializer=org.apache.kafka.common.serialization.IntegerDeserializer
```
