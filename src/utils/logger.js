function Logger () {}

const enableDebug = window.DEV || process.env.NODE_ENV === 'development'

Logger.prototype.debug = enableDebug ? console.log : () => {}
Logger.prototype.log = console.log
Logger.prototype.info = console.info
Logger.prototype.warn = console.warn
Logger.prototype.error = console.error

export default Logger
