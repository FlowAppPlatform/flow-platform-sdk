import CBFlow from './CBFlow';
import {
    validate
} from '../util'
import _ from 'underscore';
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
            console.log('Processing finished');
        }
    }

    //send data at specific port
    send(obj){
        for(key in obj){
            //validate if key(port name) exists in _ports;
            //send data of obj.key
            let port = _.find(this._ports,(port)=>port.name=key)
            let socket=port.socket;
            console.log(obj,key);
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