import Flow from './Flow';
import {
    validate
} from '../util'

class Component {
    constructor() {
        //set initial properties
        this._description = '';
        this._inPorts = {};
        this._outPorts = {};
        this._handle = null;
    }

    //add in port
    addInPort(name, options) {

        if (!name) {
            throw "Inport name is required"
        }
        if (!validate(name, 'string')) {
            throw "Port name should be of type string."
        }

        if (!options)
            options = {}
        this.inPorts[name] = new Flow.InPort(name, options);

    }

    //add out port
    addOutPort(name, options) {

        if (!name) {
            throw "Outport name is required"
        }

        if (!validate(name, 'string')) {
            throw "Port name should be of type string."
        }

        if (!options)
            options = {}

        this.outPorts[name] = new Flow.OutPort(name, options)


    }

    //run process handler
    execute() {
        this._handle(new Flow.ProcessInput(this._inPorts), new Flow.ProcessOutput(this._outPorts))
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
Flow.Component = Component
export default Component