/*
 Component
 */
import {validate} from '../util'
class Component {
    constructor() {
        //set initial properties
        this._description = '';
        this._inPorts = [];
        this._outPorts = [];
        this._process = null;
    }

    addInPort(name, obj) {

        if (!name) 
            throw "Inport name is required"
        if (!validate(name, 'string')) 
            throw "Port name should be of type string."
        
        //TODO: validate datatype

        this
            .inPorts
            .push({
                name: name,
                metadata: obj || {}
            })

    }

    addOutPort(name) {

        if (!name) {
            throw "Inport name is required"
        }

        if (!validate(name, 'string')) {
            throw "Port name should be of type string."
        }

        //TODO: validate datatype

        this
            .inPorts
            .push({
                name: name,
                metadata: obj || {}
            })

    }

    process(data) {

        if (!validate(data, 'function')) {
            throw 'Process can only accept function as a parameter.'
        }

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

export default Component
