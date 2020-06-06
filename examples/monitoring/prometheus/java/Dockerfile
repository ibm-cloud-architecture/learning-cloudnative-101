FROM maven:alpine as builder
WORKDIR /app
COPY . /app
RUN mvn package


FROM openjdk:8-jre-slim
WORKDIR /app
COPY --from=builder /app/target/java-prom-example-1.0-SNAPSHOT-jar-with-dependencies.jar /app/app.jar
EXPOSE 8080 80
CMD ["java", "-cp", "/app/app.jar" , "Main"]
