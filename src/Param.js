import Util from './Util';

class Param{
    constructor(name, dataType, required){
        if(!name){
            throw "Name is required.";
        }

        if(!dataType){
            throw "DataType is required.";
        }

        this.name = name;
        this.dataType = dataType;
        this.required = required || false;
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
     get description() {
        
        return this._description;
    }

    set description(description) {
        
        if (!Util.validate(description, 'string')) {
            throw 'Description must be a string.'
        }

        this._description = description;
    }
}