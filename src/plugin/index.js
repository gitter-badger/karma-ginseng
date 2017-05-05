
const path = require("path")
const fs = require("fs")

function middleware(request, response, next) {
  // console.log(request)
  if (/\/foo\.js/.test(request.normalizedUrl)) {
    response.setHeader("Content-Type", "text/plain")
    response.writeHead(200)
    response.end("this is the middleware response")
    return
  }
  next()
}

function framework(config) {
  config.middleware = config.middleware || []
  config.middleware.push("ginseng")
}

const reporter = function(baseReporterDecorator, config, helper, logger) {
  baseReporterDecorator(this)
}

/* Depndency injection */
framework.$inject = ["config"]
reporter.$inject = ["baseReporterDecorator", "config", "helper", "logger"]

module.exports = {
  "framework:ginseng": ["factory", framework],
  "middleware:ginseng": ["value", middleware],
  "reporter:ginseng": ["type", reporter]
}
