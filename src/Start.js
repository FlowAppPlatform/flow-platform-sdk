var Flow = require('flow-sdk');

class Start extends Flow.Component{
    constructor(){

        super();

        this.name = "Start";

        this.id = "start";
    
        var port = new Flow.Port("start");

        this.addPort(port);

    }

}

module.exports = Start