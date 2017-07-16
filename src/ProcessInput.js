import CBFlow from './CBFlow';
import {
    validate
} from '../util'
import _ from 'underscore';
class ProcessInput {
    constructor(ports) {
        //set initial properties
        this._ports = ports;

    }

    hasData(name) {
        let port = _.find(this._ports,(port)=>port.name=name)
        if (port.data) {
            return true
        }
        return false;
    }

    getData(name) {
        let port = _.find(this._ports,(port)=>port.name=name)
        return port.data;
    }

    get ports() {
        return this._ports
    }
}
CBFlow.ProcessInput = ProcessInput
export default ProcessInput