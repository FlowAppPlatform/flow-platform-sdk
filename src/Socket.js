import CBFlow from './CBFlow'
const EventEmitter = require('events');

class Socket extends EventEmitter {}

CBFlow.Socket=Socket;
export default Socket;
