import CBFlow from './CBFlow';
import {
    validate,
    generateId
} from '../util'

class OutPort {
    constructor(name, options) {
        //set initial properties

        if (!name && !validate(name, 'string')) {
            throw "Port name not found"
        }

        this._description = options.description || '';
        this._name = name;
        this._data = null;
        this._required = options.required || false;

        //TODO: add datatype

        // if (!options.datatype) {
        //     throw "Datatype not found in port options"
        // } else {
        //     this._datatype = options.datatype;
        // }

        //attach socket
        this.attachSocket(new CBFlow.Socket());

        this._id = generateId();
    }

    //clear port data
    clear() {
        this._data = null;
    }

    //handle attach socket
    attachSocket(socket) {

        socket.on('data', function (data) {
            // if (validate(data)) {
            //     this._data = data;
            // }
            console.log('received data', data)
        });

        socket.on('test', (data) => {
            console.log('test data received at out port', data);
        })

        socket.on('connect', function (data) {
            console.log('socket at port: ' + this._name + ' connected.')
        });

        socket.on('disconnect', function (data) {
            console.log('socket at port: ' + this._name + ' disconnected.')
        });

        this._socket = socket;

    }

    //setter and getters
    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
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
        this._datatype = value
    }

    get id() {
        return this._id
    }

    get socket() {
        return this._socket
    }

}
CBFlow.OutPort = OutPort
export default OutPort