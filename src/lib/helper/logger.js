const allowConsole = false;

const handler = {
    get: (obj, prop) => {
        const env = process.env.NODE_ENV;
        if (env === "development" || allowConsole) return obj[prop];
        return () => { }
    },
};

const logger = {
    debug: function (...params) {
        console.debug(...params);
    },
    error: function (...params) {
        console.error(...params);
    },
    info: function (...params) {
        console.info(...params);
    },
    warn: function (...params) {
        console.warn(...params);
    },
}
const proxyLogger = new Proxy(logger, handler);

export default proxyLogger;
