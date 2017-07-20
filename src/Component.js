import {
    validate,
    generateId
} from '../util'
import InPort from './InPort'
import OutPort from './OutPort'
import ProcessInput from './ProcessInput'
import ProcessOutput from './ProcessOutput'
import EventEmitter from 'events'


class Component {
    constructor(socket, id) {
        //set initial properties
        this._description = '';
        this._inPorts = {};
        this._outPorts = {};
        this._handle = null;
        if (!socket)
            socket = new EventEmitter();
        this._socket = this.attachSocket(socket, id);
        if (!id)
            id = generateId();
        this._id = id;

        //other properties
        // to check if the env is node
        this._isNode = false
        // to check if env is native ( react native , native script etc. )
        this._isNative = false
        if (typeof (process) !== "undefined" &&
            process.versions &&
            process.versions.node) {
            this._isNode = true
        } else {
            this._isNode = false
        }
        try {
            if (window) {
                if (navigator.product == 'ReactNative') {
                    // for react native turn node and native flags to true
                    this._isNode = true
                    this._isNative = true
                } else {
                    // if window is found then node is false
                    this._isNode = false
                }
            }
        } catch (e) {
            // if window is not found , then turn node flag to true
            this._isNode = true
        }
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
        this.inPorts[name] = new InPort(name, this._socket, this._id, options);

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

        this.outPorts[name] = new OutPort(name, this._socket, this._id, options)


    }

    attachSocket(socket, id) {
        let thisObj = this;
        socket.on('execute-' + id, function (data) {
            thisObj.execute(data);
        })
        return socket;
    }

    //run process handler
    execute(socket) {
        let input = new ProcessInput(this._inPorts)
        let output = new ProcessOutput(this._outPorts, this._id)
        output._receivingSocket = socket;
        this._handle(input, output)
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

    get socket() {
        return this._socket;
    }
    set socket(socket) {
        this._socket = this.attachSocket(socket);
    }

}
try {
    window.Flow = Component
} catch (e) {}
module.exports = Component