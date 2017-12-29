import Util from './Util';
import EventEmitter from 'events'
import Port from './Port';
import Variable from '/Variable';

class Component {

    constructor(name) {

        if(!name){
            throw "Component Name is required.";
        }

        //A name of the component. 
        this.name = name; 

        //Icon URL is the URL of an Icon in SVG that can be showed in the UI. 
        this._iconUrl = '';

        //These are number of outports.
        this._ports = [];

        //A short description of the component. 
        this._description = '';

        //List of all the outports. If we're building an email component. Ourports can be sent, bounced, error, etc. 
        this._outPorts = {};

        //A socket object to communicate with other components. 
        this._socket = new EventEmitter();

        //Genere a new ID for this instance. 
        this._id = Util.generateId();

        this.variables = [];

        //check if the env is NodeJS
        this._platform = "browser";
        if (typeof (process) !== "undefined" &&
            process.versions &&
            process.versions.node) {
            this._platform = "node";
        }
    }


    addVariable(variable){
        if(variable instanceof Variable){
            if(!variable.id)
                throw "Variable does not have an ID.";

            for(let i=0;i<this._variables.length;i++){
                if(variable.name === this._variables[i].name || variable.id === this._variables[i].id){
                    throw "Variable with the same name or id already exists.";
                }
            }

            this._variables.push(variables);
        }else{
            throw "variables should be an instance of Variable class.";
        }
    }

    removeVariable(variable){
        if(variable instanceof Variable ||  typeof variable === 'string'){
            if(variable instanceof Variable && !variable.id)
                throw "Variable does not have an ID.";

            for(let i=0;i<this._variables.length;i++){

                if(typeof variable === 'string'){
                    if(variable === this._variables[i].name){
                        this._variables.slice(i,1);
                    }
                }else{
                    if(variable.name === this._variables[i].name || variable.id === this._variables[i].id){
                        this._variables.slice(i,1);
                    }
                }
            }
        }else{
            throw "variables should be an instance of Variable class.";
        }
    }

    updateVariable(variable){
        if(variable instanceof Variable){
            if(!variable.id)
                throw "Variable does not have an ID.";

            for(let i=0;i<this._variables.length;i++){
                if(variable.name === this._variables[i].name || variable.id === this._variables[i].id){
                    this._variables[i] = variable;
                    return;
                }
            }

            throw "Variable not found and is not updated.";
        }else{
            throw "variables should be an instance of Variable class.";
        }
    }


    hasVariable(variable){
        if(variable instanceof Variable ||  typeof variable === 'string'){
            if(variable instanceof Variable && !variable.id)
                throw "Variable does not have an ID.";

            for(let i=0;i<this._variables.length;i++){

                if(typeof variable === 'string'){
                    if(variable === this._variables[i].name){
                        return true;
                    }
                }else{
                    if(variable.name === this._variables[i].name || variable.id === this._variables[i].id){
                        return true;
                    }
                }
            }
           return false;
        }else{
            throw "variables should be an instance of Variable class.";
        }
    }

    //execute the component task.
    execute() {
        //check if task is attached and if its actually a function.
       if(this._task &&  Util.validate(this._task === "function")){
            this._task(); 
       }
    }

    //Task is a custom code as a function that runs when the component executes. 
    attachTask(task) {

        if (!Util.validate(task, 'function')) {
            throw 'Task must be a function.'
        }
       
        this._task = task;
    }

    addPort(port){
        if(port instanceof Port){
            if(!port.id)
                throw "Port does not have an ID.";

            for(let i=0;i<this._ports.length;i++){
                if(port.name === this._ports[i].name || port.id === this._ports[i].id){
                    throw "Port with the same name or id already exists.";
                }
            }
            
            if(port._componentAttachedTo)
                throw "This port is already attached with other component";

            port._componentAttachedTo = this;
            this._ports.push(port);
        }else{
            throw "Port should be an instance of Port class.";
        }
    }

    removePort(port){
        if(port instanceof Port){
            if(!port.id)
                throw "Port does not have an ID.";
                if(this._ports.indexOf(port) < 0){
                    throw "Port not found in the component.";
                }
                this._ports.slice(this._ports.indexOf(port),1); 
                port._componentAttachedTo = null;
        }else{
            throw "Port should be an instance of Port class.";
        }
        
    }

    hasPort(port){
        if(port instanceof Port){
            if(!port.id)
                throw "Port does not have an ID.";
                if(his._ports.indexOf(port) < 0){
                    return false;
                }

                return true;
        }else{
            throw "Port should be an instance of Port class.";
        }
        
    }

    getPorts(){
        return this._ports;
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

    get task() {
        return this._name;
    }

    set task(task) {
        this.attachTask(task);
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

    get iconUrl() {
        return this._iconUrl;
    }

    set iconUrl(iconUrl) {
        if (!Util.validate(name, 'url')) {
            throw 'iconUrl must be a URL.'
        }
        this._iconUrl = iconUrl;
    }

    get outPorts() {
        return this._outPorts
    }

    get id() {
        return this._id;
    }

    
}

//export. 
module.exports = Component;