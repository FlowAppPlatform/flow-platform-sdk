var Flow = require('flow-sdk');

/*
We're creating an Add component whcih adds two numbers. 
This component has two Variables - `Variable 1`, and `Variable 2` which denotes two numbers. 
This component has one output port - Result. The output port has a variable which sends out a result of two numbers and we call it `Variable 3`.
*/

//Create a new class which extends Flow.Component. 
class AddComponent extends Flow.Component{
    constructor(){
        //call the constructor of Flow.Component class. 
        super();

        //construct the component.
        this.name = "Add";
        
        //Create a new Variable - Variale 1
        var var1 = new Flow.Variable("Variable 1","number");
        var1.required = true;

        //Add Variable 1 to component.
        this.addVariable(var1);

        //Create a new Variable - Variale 2
        var var2 = new Flow.Variable("Variable 2", "number");
        var2.required = true;

        //Add Variable 1 to component.
        this.addVariable(var2);

        //Create a Result Output Port and Variable 3.
        var port = new Flow.Port("Result");
        var var3 = new Flow.Variable("Variable 3", "number");
        var3.required = true;

        //Add Variable 3 to port. 
        port.addVariable(var3);

        //Add port to component.
        this.addPort(port);

        //Attach task function is a business logic function that adds two functions. 
        this.attachTask(function(){
            //Add two numbers and store it in result variable. 
            this.getPort("Result").getVariable("Variable 3").data = this.getVariable("Variable 1").data + this.getVariable("Variable 2").data;
            //Emit the output from that port. 
            this.getPort("Result").emit();
            //Mark task as complete.
            this.taskComplete();
        });

    }

}

//To run this component for testing. 
var addComponent = new AddComponent();
addComponent.getVariable("Variable 1").data =1; 
addComponent.getVariable("Variable 2").data =2;
addComponent.getPort("Result").onEmit(function(){
    if( addComponent.getPort("Result").getVariable("Variable 3").data === 3){
        //Success. 
    } 
});

// do not forget to Execute the component.
addComponent.execute();
