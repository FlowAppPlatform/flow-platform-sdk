var CBFlow = require('../dist/CloudComponent.js')

exports.getComponent=function () {
    //initiate a CloudBoost Flow Component
    var c= new CBFlow();

    //set description
    c.description='sasa';

    //add inports
    c.addInPort('value1');
    c.addInPort('value2');
    

    //add outports
    c.addOutPort('result');
    c.addOutPort('err');
    
    c.process(function(input,output){

    })

    return c;

}