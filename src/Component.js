import Util from './Util';
import EventEmitter from 'events'
import Port from './Port';
import Param from '/Param';

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

        this.params = [];

        //check if the env is NodeJS
        this._platform = "browser";
        if (typeof (process) !== "undefined" &&
            process.versions &&
            process.versions.node) {
            this._platform = "node";
        }
    }


    addParam(param){
        if(param instanceof Param){
            if(!param.id)
                throw "Param does not have an ID.";

            for(let i=0;i<this._params.length;i++){
                if(param.name === this._params[i].name || param.id === this._params[i].id){
                    throw "Param with the same name or id already exists.";
                }
            }

            this._params.push(params);
        }else{
            throw "params should be an instance of Param class.";
        }
    }

    removeParam(param){
        if(param instanceof Param ||  typeof param === 'string'){
            if(param instanceof Param && !param.id)
                throw "Param does not have an ID.";

            for(let i=0;i<this._params.length;i++){

                if(typeof param === 'string'){
                    if(param === this._params[i].name){
                        this._params.slice(i,1);
                    }
                }else{
                    if(param.name === this._params[i].name || param.id === this._params[i].id){
                        this._params.slice(i,1);
                    }
                }
            }
        }else{
            throw "params should be an instance of Param class.";
        }
    }

    updateParam(param){
        if(param instanceof Param){
            if(!param.id)
                throw "Param does not have an ID.";

            for(let i=0;i<this._params.length;i++){
                if(param.name === this._params[i].name || param.id === this._params[i].id){
                    this._params[i] = param;
                    return;
                }
            }

            throw "Param not found and is not updated.";
        }else{
            throw "params should be an instance of Param class.";
        }
    }


    hasParam(param){
        if(param instanceof Param ||  typeof param === 'string'){
            if(param instanceof Param && !param.id)
                throw "Param does not have an ID.";

            for(let i=0;i<this._params.length;i++){

                if(typeof param === 'string'){
                    if(param === this._params[i].name){
                        return true;
                    }
                }else{
                    if(param.name === this._params[i].name || param.id === this._params[i].id){
                        return true;
                    }
                }
            }
           return false;
        }else{
            throw "params should be an instance of Param class.";
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