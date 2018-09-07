# Designing a component

*This documentation is intended for Flow [Component](../Component/README.md) developers*

We're going to create a sample Add Component which adds two numbers. This component has two variables for inputs, and one port for output which sends out the result. 

### Before you begin

Create a new NodeJS project. Create a new file called `index.js`. This is the entry point of your code. 

Import the CloudBoost Flow SDK into your project. 

```
var Flow = require('cloudboost-flow');
```

You can also inmport other NPM modules that you need to build your component. 

### Create a new class

Create a new class. This class should extend `Flow.Component`

```

class AddComponent extends Flow.Component{

} 

```

#### Constructor

Constructor is the most important piece of your component design. It helps construct your component. 

```
class AddComponent extends Flow.Component{
    constructor(){
        //DO NOT forget to call the constructor of Flow.Component class. 
        super(); 
    }
}

```

#### Set a name

Every component has a name. Set your's here. 

```
//In the constructor, after calling super()
this.name = "Add";
```

#### Add variables

Since we're creating an Add component. This will have two variables - Variable 1 and Variable 2. 

```
//In the constructor, after calling super()

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
```

[More information on variables.](../Variable/README.md)


#### Add port

Since we're creating an Add component. This will have one output port - Result, and the result of the addition will be stored in - Variable 3. 

```
//In the constructor, after calling super()

//Create a Result Output Port and Variable 3.
var port = new Flow.Port("Result");
var var3 = new Flow.Variable("Variable 3", "number");
var3.required = true;

//Add Variable 3 to port. 
port.addVariable(var3);

//Add port to component.
this.addPort(port);
```

[More information on ports.](../Port/README.md)

#### Task

Every component has a task. This is the business logic of the component. In our case, our task is to add two numbers. You need to pass your business logic as a callback to attachTask function of the component. 

**Important:**
- Do not forget to `emit` the output after you're done with the output. 
- Do not forget to mark the task as complete. 

```
//In the constructor, after calling super()

//Attach task function is a business logic function that adds two functions. 
this.attachTask(function(){

    //Add two numbers and store it in result variable. 
    this.getPort("Result").getVariable("Variable 3").data = this.getVariable("Variable 1").data + this.getVariable("Variable 2").data;

    //Emit the output from that port. 
    this.getPort("Result").emit();

    //Mark task as complete.
    this.taskComplete();
});
```

#### Conclusion

And that's it! You've created your first component. You can see the [complete code of the component here](../examples/add.js). Please also check [this article](../examples/use-a-component.md) on how can you use your new component. 

You can publish this component to NPM for others to use. 



 
