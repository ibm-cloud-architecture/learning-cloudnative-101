const express = require('express')
const isProduction = process.env.NODE_ENV === 'production'
const pino = require('pino-http')({
    prettyPrint: isProduction ? false : true,
    level: isProduction ? 'error' : 'info'
})
const PORT = process.env.PORT || 8080;

var app = express()

app.use(pino)

app.get('/', function (req, res) {
    req.log.info('this is a info log message')
    req.log.error('this is a error log message')
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT=${PORT} and isProduction=${isProduction}`);
})
