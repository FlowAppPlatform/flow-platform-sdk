import {
    validate
} from '../util'

class ProcessOutput {
    constructor(ports, socket, id) {
        //set initial properties

        this._ports = ports;
        this._receivingSocket = socket;
        this._id = id
    }

    //done handlers
    done(err) {
        if (err) {
            throw err;
        } else {
            if (this._receivingSocket) {
                this._receivingSocket.emit('result-' + this._id, this._ports);
            }
        }
    }

    //send data at specific port
    send(obj) {
        for (key in obj) {
            //validate if key(port name) exists in _ports;
            //send data of obj.key
            let port = this._ports[key]
            if (port) {
                let socket = port.socket;
                port.data = obj[key];
                socket.emit('data-outport-' + this._id + '-' + port.name, obj[key])
            } else {
                throw 'Outport : ' + key + ' not found'
            }
        }
    }

    //getters and setters
    get ports() {
        return this._ports
    }
}
module.exports = ProcessOutput