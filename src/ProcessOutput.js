import CBFlow from './CBFlow';
import {
    validate
} from '../util'

class ProcessOutput {
    constructor(ports) {
        //set initial properties

        this._ports = ports;
    }

    //done handlers
    done(err) {
        if (err) {
            console.log('errrrr')
            throw err;
        }else{
            //finished processing
            console.log('Processing finished, Data:');
            for(port in this._ports){
                console.log(port,':', this._ports[port].data)
            }

        }
    }

    //send data at specific port
    send(obj){
        for(key in obj){
            //validate if key(port name) exists in _ports;
            //send data of obj.key
            let port =this._ports[key]
            let socket=port.socket;
            port.data=obj[key];
            socket.emit('data',obj[key])
        }
    }

    //getters and setters
    get ports() {
        return this._ports
    }
}
CBFlow.ProcessOutput = ProcessOutput
export default ProcessOutput