
const health = require('@cloudnative/health-connect');

module.exports = (app) => {
    const healthcheck = new health.HealthChecker();
    app.use('/live', health.LivenessEndpoint(healthcheck));
    app.use('/ready', health.ReadinessEndpoint(healthcheck));
    app.use('/healthz', health.HealthEndpoint(healthcheck));
}


