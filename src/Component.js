import CBFlow from './CBFlow';
import {
    validate
} from '../util'

class Component {
    constructor() {
        //set initial properties
        this._description = '';
        this._inPorts = [];
        this._outPorts = [];
        this._handle = null;
    }

    //add in port
    addInPort(name, options) {

        if (!options) {
            throw "options parameter is required"
        }

        if (!name) {
            throw "Inport name is required"
        }
        if (!validate(name, 'string')) {
            throw "Port name should be of type string."
        }

        this.inPorts.push(new CBFlow.InPort(name, options));

    }

    //add out port
    addOutPort(name, options) {

        if (!options) {
            throw "options parameter is required"
        }

        if (!name) {
            throw "Inport name is required"
        }

        if (!validate(name, 'string')) {
            throw "Port name should be of type string."
        }

        this.outPorts.push(
            new CBFlow.OutPort(name, options)
        )

    }

    //run process handler
    execute() {
        this._handle(new CBFlow.ProcessInput(this._inPorts), new CBFlow.ProcessOutput(this._outPorts))
    }

    //save process handler
    process(handle) {

        if (!validate(handle, 'function')) {
            throw 'Process handler must be a function.'
        }
        if (!this.inPorts) {
            throw new Error("Component ports must be defined before process function");
        }
        this._handle = handle;

    }

    //getters and setters
    get description() {
        return this._description
    }

    set description(description) {
        this._description = description
    }

    get inPorts() {
        return this._inPorts
    }

    get outPorts() {
        return this._outPorts
    }

}
CBFlow.Component = Component
export default Component