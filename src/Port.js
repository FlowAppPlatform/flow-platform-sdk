import CBFlow from './CBFlow';
import {
    validate,
    generateId
} from '../util'
class Port {
    constructor() {
        //set initial properties
        this._description = '';
        this._name = '';
        this._data = null;
        this._required = false;
        this._datatype = null;
        //attach socket
        this._socket = null;
        this._id = generateId();
    }
    //TODO:
    //getter setter for attaching sockets 

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
        this._data = value
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

}
CBFlow.Port = Port
export default Port