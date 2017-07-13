import CBFlow from './CBFlow';
import {
    validate
} from '../util'
class ProcessInput {
    constructor(ports) {
        //set initial properties
        this._ports = ports;

    }

    hasData(name) {
        let port = this._ports.find({
            name
        })
        if (port.data) {
            return true
        }
        return false;
    }

    getData(name) {
        let port = this._ports.find({
            name
        })
        return port.data;
    }

    get ports() {
        return this._ports
    }
}
CBFlow.ProcessInput = ProcessInput
export default ProcessInput