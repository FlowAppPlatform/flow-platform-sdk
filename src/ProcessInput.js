import Flow from './Flow';
import {
    validate
} from '../util'

class ProcessInput {
    constructor(ports) {
        //set initial properties

        this._ports = ports;
    }

    //checks data at port`name`
    hasData(name) {
        let port = this._ports[name]
        if (port.data || port.defaultValue) {
            return true
        }
        return false;
    }

    //return data at port `name`
    getData(name) {
        let port = this._ports[name]
        let data = port.data || port.defaultValue
        return data;
    }

    //getters and setters
    get ports() {
        return this._ports
    }
}
Flow.ProcessInput = ProcessInput
export default ProcessInput