import Flow from './Flow'
const EventEmitter = require('events');

class Socket extends EventEmitter {}

Flow.Socket=Socket;
export default Socket;
