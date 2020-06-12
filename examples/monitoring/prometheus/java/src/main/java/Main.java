
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import io.prometheus.client.*;
import io.prometheus.client.exporter.HTTPServer;
import io.prometheus.client.hotspot.DefaultExports;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Date;

public class Main {

    private static double rand(double min, double max) {
        return min + (Math.random() * (max - min));
    }

    public static void main(String[] args) {
        Counter counter = Counter.build().namespace("java").name("my_counter").help("This is my counter").register();
        Gauge gauge = Gauge.build().namespace("java").name("my_gauge").help("This is my gauge").register();
        Histogram histogram = Histogram.build().namespace("java").name("my_histogram").help("This is my histogram").register();
        Summary summary = Summary.build().namespace("java").name("my_summary").help("This is my summary").register();
        Histogram requestHistogram = Histogram.build().namespace("java").name("request").help("Requets histogram").labelNames("statusCode").register();
        DefaultExports.initialize();
        try {
            new HTTPServer("0.0.0.0", 8080, true);
        } catch (IOException e) {
            e.printStackTrace();
        }


        try {
            HttpServer server = HttpServer.create(new InetSocketAddress("0.0.0.0", 80), 1000);


            server.createContext("/", httpExchange -> {
                Date start = new Date();
                int statusCode = 200;

                if (!"GET".equalsIgnoreCase(httpExchange.getRequestMethod())) {
                    statusCode = 400;
                }

                httpExchange.sendResponseHeaders(statusCode, 0);
                httpExchange.getResponseBody().close();
                httpExchange.close();

                long elapsedTime = (new Date()).getTime() - start.getTime();
                requestHistogram.labels(String.valueOf(statusCode)).observe(elapsedTime);
            });

            Thread bgThread = new Thread(() -> {
                while (true) {
                    try {
                        counter.inc(rand(0, 5));
                        gauge.set(rand(-5, 10));
                        histogram.observe(rand(0, 5));
                        summary.observe(rand(0, 5));


                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            bgThread.start();

            server.start();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
