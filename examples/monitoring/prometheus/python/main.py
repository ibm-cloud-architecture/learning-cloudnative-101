import prometheus_client as prom
import random
import time
from threading import Thread

from flask import Flask, request
from flask_prometheus import monitor

req_summary = prom.Summary('python_my_req_example', 'Time spent processing a request')


@req_summary.time()
def process_request(t):
    time.sleep(t)


app = Flask("pyProm")


@app.route('/', methods=["GET", "POST"])
def hi():
    if request.method == "GET":
        return "OK", 200, None

    return "Bad Request", 400, None


counter = prom.Counter('python_my_counter', 'This is my counter')
gauge = prom.Gauge('python_my_gauge', 'This is my gauge')
histogram = prom.Histogram('python_my_histogram', 'This is my histogram')
summary = prom.Summary('python_my_summary', 'This is my summary')


def thr():
    while True:
        counter.inc(random.random())
        gauge.set(random.random() * 15 - 5)
        histogram.observe(random.random() * 10)
        summary.observe(random.random() * 10)
        process_request(random.random() * 5)

        time.sleep(1)


Thread(target=thr).start()

monitor(app, port=8080)
app.run(host="0.0.0.0", port=80)
