import CBFlow from './CBFlow';
import {
    validate
} from '../util'
class ProcessOutput {
    constructor(ports) {
        //set initial properties
        this._ports = ports;

    }

    done(err) {
        if (err) {
            throw err;
        }else{
            //finished processing
        }
    }
    send(obj){
        for(key in obj){
            //validate if key(port name) exists in _ports;
            //send data of obj.key
            let port = this._ports.find({
            name:key
            })
            let socket=port.socket;
            socket.emit('data',obj.key)
        }
    }

    get ports() {
        return this._ports
    }
}
CBFlow.ProcessOutput = ProcessOutput
export default ProcessOutput