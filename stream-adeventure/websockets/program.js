// run follow code via node after starting stream-adventure run

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write('hello');
stream.destroy();