import CB from './CB'
import localforage from 'localforage'
import Q from 'Q';

/*
 Component
 */
class Component {
    constructor() { 
        //set initial properties
        this.description='';
        this.inPorts = [];
        this.outPorts = [];
    };

    addInPort(name,obj){

        if(!name)
            throw "Inport name is required";
        if(!validate(name,'string'))
            throw "Port name should be of type string.";

         //TODO: validate datatype   
        
         this.inPorts.push({name:name,metadata:obj || {}});        

    }

    addOutPort(name,){

        if(!name)
            throw "Inport name is required";
        if(!validate(name,'string'))
            throw "Port name should be of type string.";
        
         //TODO: validate datatype   
        
         this.inPorts.push({name:name,metadata:obj || {}});        

    }

    process(data){

        if(!validate(data,'function'))
            throw 'Process can only accept function as a parameter.'

    }
    
}

Object.defineProperty(Component.prototype, 'description', {
    get: function() {
        return this.description;
    },
    set: function(description) {
        this.description=description
    }
});

Object.defineProperty(Component.prototype, 'inPorts', {
    get: function() {
        return this.inPorts;
    }
});

Object.defineProperty(Component.prototype, 'outPorts', {
    get: function() {
        return this.outPorts;
    }
});

Object.defineProperty(Component.prototype, 'process', {
    get: function() {
        return this.description;
    }
});

CB.Component = Component;
export default CB.Component;
