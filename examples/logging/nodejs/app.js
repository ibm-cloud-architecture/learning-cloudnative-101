const express = require('express')
const isProduction = process.env.NODE_ENV === 'production'
const formatters = {
    level(label, number) {
        return { level: label }
    }
}
const pino = require('pino-http')({
    prettyPrint: isProduction ? false : true,
    level: isProduction ? 'error' : 'info',
    formatters: formatters,
    messageKey: 'message'
})
const PORT = process.env.PORT || 8080;

var app = express()

app.use(pino)

app.get('/', function (req, res) {
    req.log.info('this is a info log message')
    res.send('Hello World')
})
app.get('/error', function (req, res, next) {
    req.log.error('Internal error with request /error')
    res.status(503).send('Internal error')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT=${PORT} and isProduction=${isProduction}`);
})
