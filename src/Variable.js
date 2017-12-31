import Util from './Util';

class Variable{

    constructor(name, dataType){

        if(!name){
            throw "Name is required.";
        }

        if(!dataType){
            throw "DataType is required.";
        }

        this.name = name;
        this.dataType = dataType;
        this.required = false;
        this._id = Util.generateId();
        this.data = null;
        this.index=null;
    }

    serialize(){
        return JSON.stringify(this);
    }

    set data(data){
        //ToDO: Check the DataType and Set Data.
        this._data = data;
    }

    get data(){
        return this._data;
    }

    //getters and setters
    get description() {
        return this._description;
    }

    set description(description) {
        if (!Util.validate(description, 'string')) {
            throw 'Description must be a string.'
        }
        this._description = description;
    }

    //getters and setters
    get name() {
        return this._name;
    }

    set name(name) {
        if (!Util.validate(name, 'string')) {
            throw 'Name must be a string.'
        }
        this._name = name;
    }


    //getters and setters
    get dataType() {
        return this._dataType;
    }

    //DataType can be an array too. Like a selector box or an object of Params. 
    set dataType(dataType) {
        
        if (!Util.validate(dataType, 'string') && ! (dataType instanceof Array)) {
            throw 'DataType must be a string or an array.'
        }

        this._dataType = dataType;
    }

    get id() {
        return this._id;
    }

    set required(required) {
        
        if (!Util.validate(required, 'boolean')) {
            throw 'Required must be a string.'
        }

        this._required = required;
    }

    //getters and setters
    get required() {
        return this._required;
    }
}

module.exports = Variable;