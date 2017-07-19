import Flow from './Flow';
import {
    validate,
    generateId
} from '../util'

class InPort {
    constructor(name, socket, id, options) {
        //set initial properties

        this._description = options.description || '';
        this._name = name;

        //validate options.datatype

        //validate initial data
        if (validate(options.data, options.datatype)) {
            this._data = options.data || null;
        } else {
            this._data = null;
        }

        this._required = options.required || false;

        this._datatype = options.datatype || 'string';

        this._defaultValue = options.defaultValue || null;

        //attach socket
        this.attachSocket(socket, id);

        this._id = generateId();
    }

    //clear port data
    clear() {
        this._data = null;
    }

    //handle attach socket
    attachSocket(socket, id) {
        const thisObj = this;
        socket.on('data-inport-' + id + '-' + thisObj._name, function (data) {
            thisObj._data = data;
            console.log('received data at inport', data)
        });

        this._socket = socket;

    }

    //getters and setters
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

        //validate data
        if (validate(value, this._datatype)) {
            this._data = value
        } else
            throw "data must be of type " + this._datatype;
    }

    get datatype() {
        return this._datatype
    }

    set datatype(value) {
        if (!value)
            throw 'datatype required'
        this._datatype = value
    }

    get id() {
        return this._id
    }

    get socket() {
        return this._socket
    }

}
Flow.InPort = InPort
export default InPort