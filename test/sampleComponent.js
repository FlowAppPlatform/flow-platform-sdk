var CBFlow = require('../dist/CloudComponent.js')
var fs = require('fs');

exports.getComponent = function () {
    //initiate a CloudBoost Flow Component
    var c = new CBFlow.Component();

    //set description
    c.description = 'sasa';

    //add inports
    c.addInPort('in', {
        data: 'index.js',
        datatype: 'string'
    });

    //add outports
    c.addOutPort('result', {});
    c.addOutPort('err', {});

    c.process(function (input, output) {

        if (!input.hasData('in')) {
            return;
        }
        var filePath = input.getData('in');

        fs.readFile(filePath, 'utf-8', (err, contents) => {
            if (err) {
                throw err;
                console.log(err);
                return;
            }
            console.log(contents);

        });


    })

    return c;

}