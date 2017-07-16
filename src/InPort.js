import CBFlow from './CBFlow';
import {
    validate,
    generateId
} from '../util'
class InPort {
    constructor(name, options) {
        //set initial properties
        if (!name && !validate(name, 'string')) {
            throw "Port name not found"
        }
        this._description = options.description || '';
        this._name = name;
        if (validate(options.data, options.datatype)) {
            this._data = options.data || null;
        } else {
            throw "data must be of type " + options.datatype
        }
        this._required = options.required || false;
        if (!options.datatype) {
            throw "Datatype not found in port options"
        } else {
            this._datatype = options.datatype;
        }
        this._defaultValue = options.defaultValue || null;
        //attach socket
        this._socket = null;
        this._id = generateId();
    }
    //TODO:
    //getter setter for attaching sockets 

    clear() {
        this._data = null;
    }

    attachSocket(socket) {
        this._socket = socket;

        socket.on('data', function (data) {
            if (validate(data)) {
                this._data = data;
            }
        });
        socket.on('connect', function (data) {

        });
        socket.on('disconnect', function (data) {

        });


        // this._handleSocketEvent(event, payload);
    }
    _handleSocketEvent(event, payload) {

    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get defaultValue() {
        return this._defaultValue
    }

    set defaultValue(value) {
        this._defaultValue = value
    }

    get required() {
        return this._required
    }

    set required(value) {
        this._required = value
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get data() {
        return this._data
    }

    set data(value) {
        if (validate(value, this._datatype)) {
            this._data = value
        } else
            throw "data must be of type " + this._datatype;

    }

    get datatype() {
        return this._datatype
    }

    set datatype(value) {
        this._datatype = value
    }

    get id() {
        return this._id
    }

    get socket() {
        return this._socket
    }

}
CBFlow.InPort = InPort
export default InPort