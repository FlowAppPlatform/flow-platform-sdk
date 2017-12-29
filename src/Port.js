import Util from './Util';
import Component from './Component';

class Port {
    constructor(name) {
        //set initial properties
        if(!name){
            throw "Port Name is required.";
        }

        this._description = options.description || '';
        this.name = name;
        this._id = generateId();
        this._connectedComponents = [];
        this._componentAttachedTo = null;
        this._isAttachedToComponent = false;
    }

    //This passes the flow to components that this port is connected to. 
    emit(){
        for(var i=0;i<this._connectedComponents; i++){
            this._connectedComponents[i].execute(); //execute the component. 
        }
    }

    connectComponent(component){
        if(component instanceof Component){
            if(!component.id)
                throw "Component does not have an ID.";

            for(let i=0;i<this._connectedComponents.length;i++){
                if(component.name === this._connectedComponents[i].name || component.id === this._connectedComponents[i].id){
                    throw "Component with the same name or id already exists.";
                }
            }
            
            this._connectedComponents.push(component);
        }else{
            throw "component should be an instance of Component class.";
        }
    }

    disconnectComponent(component){
        if(component instanceof Component){
            if(!component.id)
                throw "Component does not have an ID.";
                if(this._connectedComponents.indexOf(component) < 0){
                    throw "Component is not connected to the port.";
                }
                this._connectedComponents.slice(this._connectedComponents.indexOf(component),1); 
        }else{
            throw "component should be an instance of Component class.";
        }
    }

    getConnectedComponents(){
        return this._connectedComponents;
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

    get name() {
        return this._name;
    }

    set name(name) {
        if (!Util.validate(name, 'string')) {
            throw 'Name must be a string.'
        }
        this._name = name;
    }

    get id() {
        return this._id;
    }

}

module.exports = Port;