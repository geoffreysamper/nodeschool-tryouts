var slice = Array.prototype.slice

function logger(namespace) {
var fn =    console.log.bind(console, namespace);

return fn;

}

module.exports = logger
