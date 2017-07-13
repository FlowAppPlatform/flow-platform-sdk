import CBFlow from './CBFlow';
import {
    validate
} from '../util'
class ProcessOutput {
    constructor() {
        //set initial properties
        this._description = '';
        this._inPorts = [];
        this._outPorts = [];
        this._process = null;
    }

    get description() {
        return this.description
    }

    set description(description) {
        this._description = description
    }

    get inPorts() {
        return this._inPorts
    }

    get outPorts() {
        return this.outPorts
    }

    get process() {
        return this._process
    }

}
CBFlow.ProcessOutput = ProcessOutput
export default ProcessOutput